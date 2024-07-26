document.addEventListener('DOMContentLoaded', () => {
    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
  
        if (username && password) {
          const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to log in');
          }
        }
      });
    }
  
    // Signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
  
        if (username && password) {
          const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to sign up');
          }
        }
      });
    }
  
    // New post button click
    const newPostBtn = document.getElementById('new-post');
    if (newPostBtn) {
      newPostBtn.addEventListener('click', () => {
        // Show new post form or modal
      });
    }
  
    // Edit post button click
    const editPostBtns = document.querySelectorAll('.edit-post');
    if (editPostBtns) {
      editPostBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          const postId = event.target.getAttribute('data-id');
          // Show edit form or modal for post with postId
        });
      });
    }
  
    // Delete post button click
    const deletePostBtns = document.querySelectorAll('.delete-post');
    if (deletePostBtns) {
      deletePostBtns.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          const postId = event.target.getAttribute('data-id');
          const response = await fetch(`/posts/${postId}`, {
            method: 'DELETE',
          });
  
          if (response.ok) {
            document.location.reload();
          } else {
            alert('Failed to delete post');
          }
        });
      });
    }
  });
  