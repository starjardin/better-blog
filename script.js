const myForm = document.querySelector('#post-form');
const submitButton = document.querySelector('.btn-primary');
const postTitle = document.getElementById('postTitle');
const postContent = document.querySelector(`[name= "postContent"]`);
const postAuthor = document.querySelector(`[name = 'postAuthor']`);
const showForm = document.querySelector('#show-form');
const postForm = document.querySelector('#post-form');
const collection = document.getElementsByClassName('col-8 offset-2');
const postList = document.querySelector('#post-list');
const postCard = document.querySelector('.card');
const formCard = document.querySelector('#form-card');


// Add an event listener here
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (postContent.value.length < 20) {
    postContent.classList.add('is-invalid');
    const invalidDiv = document.querySelector('.card-body');
    invalidDiv.classList.add('invalid-feedBack');
  } else {
    postContent.classList.remove('is-invalid');
    const invalidDiv = document.querySelector('.card-body');
    invalidDiv.classList.remove('invalid-feedBack');
    const container = document.querySelector('.container');
//Create a new element post.
    const myPost = `
    <div class="card">
      <img class="card-img-top" src="https://picsum.photos/500/200" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${postTitle.value}
          <small> By ${postAuthor.value}</small>  
        </h5>
        <p class="card-text">${postContent.value}</p>
        <button type="button" class="btn btn-sm btn-light btn-delete">
          Delete entry
        </button>
      </div>
      <div class="card-footer text-muted">
        10/07/2020
      </div>
    </div>`
    const myFragment = document.createRange().createContextualFragment(myPost);
    postList.prepend(myFragment);
    container.prepend(postList);
    const deleteButton = document.querySelectorAll('.btn-delete');
//Delete a post from the dom.
    for (let i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener('click', (e) => {
        const cardDele = deleteButton[i].parentElement.parentElement;
        cardDele.style.display = 'none'
      });
    }
  };
  myForm.reset();
})

// Show and hide the form
showForm.addEventListener('click', (e) => {
  if (showForm.textContent === "Hide form") {
    formCard.style.display = "none"
    showForm.textContent = "show form";
  } else {
    formCard.style.display = "block";
    showForm.textContent = "Hide form";
  }
});