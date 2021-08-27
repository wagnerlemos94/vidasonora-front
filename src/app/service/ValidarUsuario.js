import LocalStorageService from './localStorageService';


export default class ValidarUsuario{

    static usuarioLogado(){
        const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");
        if(!usuarioLogado){
            window.location.href = '/#login';
        }
        return usuarioLogado;
    }

    static login(usuario){
        LocalStorageService.adicionarItem("_usuario_logado",usuario);
        window.location.href = '/#home';
    }

    static logoff(){
        LocalStorageService.removerItem("_usuario_logado");    
        window.location.href = '/#login';    
    }

}