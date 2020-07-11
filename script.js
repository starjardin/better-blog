console.log('it works');
const myForm = document.querySelector('#post-form');
const submitButton = document.querySelector('.btn-primary');
const postTitle = document.getElementById('postTitle');
const postContent = document.querySelector(`[name= "postContent"]`);
const postAuthor = document.querySelector(`[name = 'postAuthor']`);
const showForm = document.querySelector('#show-form');
const postForm = document.querySelector('#post-form');
const collection = document.getElementsByClassName('col-8 offset-2');
console.log(collection)

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
    const postList = document.querySelector('#post-list');
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
  };
  myForm.reset();
})

showForm.addEventListener('click', (e) => {
  if (showForm.textContent === "Hide form") {
    postForm.classList.add('hidden');
    showForm.textContent = "show form";
  } else {
    postForm.classList.remove('hidden');
    showForm.textContent = "Hide form"
  }
})