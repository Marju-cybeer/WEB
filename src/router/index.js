

import Header from "../componentes/Header";
import AdicionarPostagem, { enviarDados } from "../pages/adicionarPostagem.js";
import Home from "../pages/home";
import Postagem, { pesquisarPost } from "../pages/postagem";
import renderPostUnico from "../pages/postUnico.js"

const routes = {
    '/': 'home',
    '/postagem':'postagem',
    '/adicionarPostagem':'adicionarPostagem',
    '/postUnico':'postUnico'
}

const carregarPagina = async() => {
    const path = window.location.pathname;
    const pageName = routes[path] || 'home'
    const app = document.getElementById('app')

    if(pageName === 'postagem'){
        app.innerHTML = await Postagem()
        await pesquisarPost();
    } else if (pageName === 'adicionarPostagem') {
        app.innerHTML = await AdicionarPostagem();
        await enviarDados();
    } else if (pageName === 'postUnico'){
        app.innerHTML = await renderPostUnico();
    } else {
        let pageModule = await import(`../pages/${pageName}.js`)
        app.innerHTML = await pageModule.default();
    }
}
export const navegarPara = (path) => {
    window.history.pushState({}, '', path)
    carregarPagina()
}
window.addEventListener('popstate', carregarPagina)
document.addEventListener('DOMContentLoaded', carregarPagina)