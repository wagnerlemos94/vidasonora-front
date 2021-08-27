import ApiService from '../apiservice';

class UsuarioSerice extends ApiService{
    constructor(){
        super('/usuarios');
    }

    autenticar(credencias){
        return this.post('/autenticar', credencias);
    }

    salvar(usuario){
        return this.post('/', usuario);
    }

    buscarUsuario(id){
        return this.get(`/${id}`);
    }
}

export default UsuarioSerice;