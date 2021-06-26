import { http } from './http';
import { ui } from './ui';

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);


function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost(e) {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  if(title === '' && body === ''){

    ui.showAlert('Can not post with empty fields', 'alert alert-danger');

  } else {

    const data = {
      title: title,
      body: body
    }

    // Check for ID to determin current form state
    if(id === '') {
      // Create post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => console.log(err));
    } else {
      // Update post
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post updated', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch(err => console.log(err));
    }

  }

  e.preventDefault();
}

function deletePost(e) {
  if(e.target.parentElement.classList.contains('delete')){
    const id = e.target.parentElement.dataset.id;

    if(confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(() => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }

  }
  //e.target.parentElement.parentElement.parentElement.remove();

  e.preventDefault();
}

function enableEdit(e) {
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    
    const data = {
      id: id,
      title: title,
      body: body
    }

    // Fill form with current post
    ui.fillForm(data);
  }

  e.preventDefault();
}

// Cancel edit state
function cancelEdit(e) {

  if(e.target.classList.contains('post-cancel')){
    ui.changeFormState('add');
  }

  e.preventDefault();

}