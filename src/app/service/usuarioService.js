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

    buscarTodos(){
        return this.get("/");
    }

    ativar(id){
        return this.put(`/ativar/${id}`);
    }

    desativar(id){
        return this.put(`/desativar/${id}`);
    }


    deletar(id){
        return this.delete(`/${id}`);
    }
}

export default UsuarioSerice;