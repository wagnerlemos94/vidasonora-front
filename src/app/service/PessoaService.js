import ApiService from '../apiservice';

class PessoaService extends ApiService{
    constructor(){
        super('/pessoas');
    }

    salvar(pessoa){
        return this.post('/', pessoa);
    }

    buscarPessoa(id){
        return this.get(`/${id}`);
    }
}

export default PessoaService;