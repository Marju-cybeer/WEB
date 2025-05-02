import Header from "./src/componentes/Header.js"
import{navegarPara} from './src/router/index.js'

document.addEventListener('DOMContentLoaded', async () =>{
    await Header();
    navegarPara();
});
