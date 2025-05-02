const API_URL = "https://dummyjson.com";


export const fetchPostagem  = async () => {
  const response = await fetch(`${API_URL}/posts?limit=10`);

 const data = await response.json();
 console.log(data.posts);
 
 return data.posts;
};
 
export const fetchPostUnico = async (id) => {
  const response = await fetch(`${API_URL}/posts/${encodeURIComponent(id)}`);
  const data = await response.json();
  console.log(data);

  return data;
  
};
      

/*adicionar nova postagem*/
export const fetchAdicionarPostagem = async (titulo, texto, tipoMidia, urlMidia, id, autor) => {
  const response = await fetch(`${API_URL}/posts/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({titulo, texto, tipoMidia, urlMidia, id, autor}),
  })
  return response.json();
}

  /*atualizar postagem*/

export const fetchAtualizarPostagem = async(id, titulo, texto, tipoMidia, urlMidia) => {
const response = await fetch (`${API_URL}/posts/${{id}}`, {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({id, titulo, texto, tipoMidia, urlMidia}),
  })
 return response.json(); 
}
  /*deletar postagem*/

  
  export const fetchDeletarPostagem = async(id) => {
   const response = await fetch (`${API_URL}/posts/${{id}}`, {
    method: 'DELETE',
  })
  return response.json();
}
   /* pesquisar postagem*/
   
 export async function fetchPesquisarPost(query) {
  const response = await fetch(`${API_URL}/posts/search?q=${query}`);
  return response.json();
  
 }
  