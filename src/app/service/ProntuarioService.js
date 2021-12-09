import ApiService from '../apiservice';

class ProntuarioService extends ApiService{
    constructor(){
        super('/prontuarios');
    }

    buscarPorId(id){
        return this.get(`/${id}`);
    }

    buscarPorIdPessoa(id){
        return this.get(`/idPessoa/${id}`);
    }

    buscarTodos(){
        return this.get(`/`);
    }

}

export default ProntuarioService;