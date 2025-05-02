
import { navegarPara } from "../router";

export default async function AdicionarPostagem() {
    const params = new URLSearchParams(windon.location.search)
    const id = params.get ("id")
    let postagem = {titulo:"", texto:"", tipoMidia:"", urlMidia:"", autor:""};

    if (id){
        postagem = await fetchPostagemPorId(id)
    }
    return `
    <h1>${id ? 'Atualizar Postagem' : 'Cadastrar Postagem'} <h1>
    <div class = "container">
    <form id= "cadastrar-post-form">
     <div class="form-floating mb-3">
     <input id="titulo" type="nome" size="50" classs="form-control" placeholder="Nome do post" required value="${postagem.titulo}">
     <label for="titulo"> Titulo </label>
     </div>
    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea id="texto" class="form-control" id="exampleFormControlTextarea1" rows="3">${id ? postagem.texto: ""}</textarea>
<p id="autor">${id ? postagem.autor: ""}</p>
  </div>
<div class="mb-3">
          <label for="tipoMidia" class="form-label">Tipo de Mídia (imagem ou video)</label>
          <input id="tipoMidia" type="text" class="form-control" required value="${id ? postagem.tipoMidia : ""}">
        </div>
        <div class="mb-3">
          <label for="urlMidia" class="form-label">URL da Mídia</label>
          <input id="urlMidia" type="url" class="form-control" required value="${id ? postagem.urlMidia : ""}">
        </div>
<div class="d-flex justify-content-between d-grid gap-2 d-md-block" id="button">
<button type="submit" class="btn btn-primary btn-lg">${id?'<img src="./lapis.svg"> Atualizar' : '<img src="./cadastro.svg">Cadastrar'}</button>
</div>
</form>
</div>
    `
}


export async function enviarDados() {
    const form = document.getElementById('cadastrar-post-form')
    const tituloInput = document.getElementById('titulo')
    const textoInput = document.getElementById("texto");
    const tipoMidiaInput = document.getElementById("tipoMidia");
    const urlMidiaInput = document.getElementById("urlMidia");
    const autorInput = document.getElementById("autor");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    form.addEventListener('submit', async(event) =>{
        event.preventDefault()
        const titulo = tituloInput.value;
        const texto = textoInput.value;
        const tipoMidia = tipoMidiaInput.value;
        const urlMidia = urlMidiaInput.value;
        try{
            let response;
            if(id){
                 response = await fetchAtualizarPostagem( id, {titulo, texto, tipoMidia, urlMidia});
                alert(response.message)
                navegarPara("/postagem")
            } else {
                response = await fetchAdicionarPostagem (titulo, texto, tipoMidia,urlMidia);
                alert(response.message)
                navegarPara("/postagem")
            }
        }catch(error) {
            alert(error.message)
        };
})       
                
}
