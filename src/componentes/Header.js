import{navegarPara} from '../router/index'

export default async function Header() {
  const header = document.getElementById('header')
  header.innerHTML = ''  

header.innerHTML= `

<nav id="cabecalho" class="d-flex align-items-center justify-content-between" >
    <img id="logo" src="./logo.png">
        <h1 class="ms-3 "> Patas Molhadas </h1>

        <nav id="nav-botao" class="navbar navbar-expand-lg bg-body-tertiary ">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="botao-post" class="collapse navbar-collapse " id="navbarTogglerDemo02" >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class=" nav-link fs-5" href="/" onclick="navegarPara('/'); return false;"><img src="./casa.svg"> Home </a>
                </li>
                <li class="nav-item">
                <a class=" nav-link fs-5" href="/postagem" onclick="navegarPara('/postagem'); return false;"><img src="./jornal.svg"> Postagens </a>
                </li>
              </ul>
             
               </div>
          </div>
        </nav>      
    </header>
            `
}