import{navegarPara} from '../router/index'
import { fetchPostUnico } from '../api';

export default async function Home() {
  const post1 = await Postagem(1);
  console.log(post1)
  const post2 = await Postagem(2);

   return ` <br>
   <div class="card">
  <img src="banho.png">
  <div class="card-corpo">
    <h5 class="card-title"><img src="./pata.svg"> Bem-Vindo ao Patas Molhadas! <img src="./pata.svg"></h5>
  </div>
</div>    
<br>
        <div id="home-post" class="div-home-post"><img src="./pata.svg">
          <!-- Primeiro post -->
          <div id="primeiroPost" style="margin-top: 30px; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h3><img src="./coracao.svg"> Post em destaque</h3>
            ${post1}
          </div>
    
          <!-- Segundo post -->
          <div id="segundoPost" style="margin-top: 30px; padding: 20px; border: 1px solid #ddd ; border-radius: 10px;">
            <h3><img src="./osso.svg"> Outro destaque</h3>
            ${post2}
          </div><img src="./pata.svg">
        </div>
    `;
    }
    

  export async function Postagem(id) {
      const post = await fetchPostUnico(id);
    
      return `
        <a href="/post-unico.html?id=${post.id}" style="text-decoration: none; color: inherit;">
          <div data-id="${post.id}" class="post mb-4 p-4 border rounded bg-light">
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
            <p>
              <strong><img src="./like.svg"> Likes:</strong> ${post.reactions.likes} |
              <strong><img src="./dislike.svg"> Deslikes:</strong> ${post.reactions.dislikes} |
              <strong><img src="./views.svg"> Views:</strong> ${post.views}
            </p>
          </div>
        </a>
      `;
    }

