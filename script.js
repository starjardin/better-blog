console.log('it works');
const myForm = document.querySelector('#post-form');
const submitButton = document.querySelector('.btn-primary');
const postTitle = document.getElementById('postTitle');
const postContent = document.querySelector(`[name= "postContent"]`);
const postAuthor = document.querySelector(`[name = 'postAuthor']`);
// Function to generate new posts
const createNewPost = () => {
  const cardForm = document.querySelector('#form-card');
  const cardBody = document.querySelector('.card-body');
  const myPost = `
  <h5 class="card-title">${postTitle.value}
    <small>${postAuthor.value}</small>
  </h5>
  <p class="card-text">${postContent.value}</p>
  `
  const myFragment = document.createRange().createContextualFragment(myPost);
  cardBody.appendChild(myFragment);
  cardForm.appendChild(cardBody);
};
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const container = document.querySelector('.container');
  const postList = document.querySelector('#post-list');
  const myPost = `
  <div class="card">
    <img class="card-img-top" src="https://picsum.photos/500/200" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${postTitle.value}
        <small>${postAuthor.value}</small>  
      </h5>
      <p class="card-text">${postContent.value}</p>
    </div>
  </div>`
  const myFragment = document.createRange().createContextualFragment(myPost);
  postList.prepend(myFragment);
  container.prepend(postList);
  console.log(container)
})