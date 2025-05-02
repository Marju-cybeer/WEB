
import { fetchPostagem } from '../api/index';
import  renderPostUnico from '../pages/postUnico.js';
export default async function Postagem() {
  const data = await fetchPostagem();
  const postsHTML = data.map(
    (post) =>
   `     
<div class=" g-4">
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h2 class="card-title"><img src="./pata.svg"> ${post.title} </h2>
        <p class="card-text">${post.body}.</p>
     <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>

        <p>
        <strong> <img src="./like.svg"> Likes:</strong> ${post.reactions.likes} |
        <strong> <img src="./dislike.svg"> Deslikes:</strong>${post.reactions.dislikes} |
        <strong> <img src="./views.svg"> Views:</strong> ${post.views}</p>
        </div>
        </div>
    </div>
  
`)
.join("");

return `
<div class="d-flex justify-content-between  m-4 gap-4 w-40">
<h1> <img src="./dog.svg">   Princípais Postagens <img src="./osso.svg"></h1>
<div class=" d-flex  align-items-center ">
        <input id="search" class="form-control me-2" type="search" placeholder="Digite sua pesquisa" aria-label="Search">
        <button id="search-btn" class="btn btn-outline-success" type="button"><img src="./pesquisar.svg"> Pesquisar</button>
 </div>
        </div>            
              
 <div class="container mt-4 w-75">       
${postsHTML}
</div>

`;
}
export async function pesquisarPost() {
  const searchBtn = document.getElementById('search-btn')
  const searchInput = document.getElementById('search')  
  const container = document.querySelector('.container.mt-4.w-75');

  searchBtn.addEventListener('click', async () => {
    const searchValue = searchInput.value.trim();
    if (searchValue) {
      const postsHTML = await renderPostUnico(searchValue);
      container.innerHTML = postsHTML;
    }
  });
}
