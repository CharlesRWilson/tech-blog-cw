require('dotenv').config();
const { Sequelize } = require('sequelize');

let sequelize;
// Checks to see if the application is deployed. If DB_URL environment variable exists, then that is used. If not, it determines that you're on your local machine and utilizes the environment variables from the .env file to set up Sequelize. 
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;
