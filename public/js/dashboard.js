document.querySelector('#new-post').addEventListener('click', () => {
    document.querySelector('#new-post-form').style.display = 'block';
});

document.querySelector('#create-post-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
});

document.querySelectorAll('.edit-post').forEach((button) => {
    button.addEventListener('click', async (event) => {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/posts/${id}`);

        if (response.ok) {
            const post = await response.json();
            document.querySelector('#edit-post-form input[name="id"]').value = post.id;
            document.querySelector('#edit-post-form input[name="title"]').value = post.title;
            document.querySelector('#edit-post-form textarea[name="content"]').value = post.content;
            document.querySelector('#edit-post-form').style.display = 'block';
        } else {
            alert('Failed to fetch post');
        }
    });
});

document.querySelector('#update-post-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.querySelector('input[name="id"]').value.trim();
    const title = document.querySelector('input[name="title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
});

document.querySelectorAll('.delete-post').forEach((button) => {
    button.addEventListener('click', async (event) => {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    });
});