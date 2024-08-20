
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3011;


const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// // Signup route
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;
  
//   // Add your logic to handle signup (e.g., save to database)
//   try {
//     // Example: Save user to database (pseudo-code)
//     // await User.create({ username, password });
    
//     res.status(200).json({ message: 'Signup successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to signup' });
//   }
// });

// // Login route
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Add your logic to handle login (e.g., verify user credentials)
//   try {
//     // Example: Verify user credentials (pseudo-code)
//     // const user = await User.findOne({ where: { username } });
//     // if (!user || !user.validPassword(password)) {
//     //   throw new Error('Invalid credentials');
//     // }

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to login' });
//   }
// });

// Add Post route
app.post('/posts', async (req, res) => {
  const { title, content } = req.body;

  // Add your logic to handle adding a post (e.g., save to database)
  try {
    // Example: Save post to database (pseudo-code)
    // await Post.create({ title, content, userId: req.session.userId });

    res.status(200).json({ message: 'Post added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add post' });
  }
});

// Delete Post route
app.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id;

  // Add your logic to handle deleting a post (e.g., remove from database)
  try {
    // Example: Delete post from database (pseudo-code)
    // await Post.destroy({ where: { id: postId, userId: req.session.userId } });

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete post' });
  }
});

app.get('/', (req, res) => {
  res.render('home', { loggedIn: req.session.loggedIn });
});

app.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});

app.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});


// Dashboard route
app.get('/dashboard', async (req, res) => {
  // Add your logic to fetch user posts and render the dashboard
  try {
    // Example: Fetch user posts from database (pseudo-code)
    // const posts = await Post.findAll({ where: { userId: req.session.userId } });

    // Mock data for demonstration purposes
    const posts = [
      { id: 1, title: 'First Post', content: 'This is the content of the first post' },
      { id: 2, title: 'Second Post', content: 'This is the content of the second post' }
    ];

    res.render('dashboard', { 
      posts: posts,
      loggedIn: req.session.loggedIn 
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load dashboard' });
  }
});

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });


// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


