import { fetchPostagem } from '../api/index';

export default async function renderPostUnico(valorBusca) {
  const data = await fetchPostagem();

  // Aqui você pode filtrar por título ou ID
  const postEncontrado = data.find(
    post =>
      post.title.toLowerCase().includes(valorBusca.toLowerCase()) ||
      post.id.toString() === valorBusca
  );

  if (!postEncontrado) {
    return '<p>Post não encontrado.</p>';
  }

  // Renderizar o post encontrado
  return `
    <div class="card m-4">
      <div class="card-body">
        <h2 class="card-title"><img src="./pata.svg"> ${postEncontrado.title}</h2>
        <p class="card-text">${postEncontrado.body}</p>
        <p><strong>Tags:</strong> ${postEncontrado.tags.join(", ")}</p>
        <p>
          <strong><img src="./like.svg"> Likes:</strong> ${postEncontrado.reactions.likes} |
          <strong><img src="./dislike.svg"> Dislikes:</strong> ${postEncontrado.reactions.dislikes} |
          <strong><img src="./views.svg"> Views:</strong> ${postEncontrado.views}
        </p>
      </div>
    </div>
    </div>
  `;
}
