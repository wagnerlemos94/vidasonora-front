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

    buscarTodos(){
        return this.get(`/`);
    }

    buscarPessoasIdNome(){
        return this.get(`/prontuario`);
    }

    atualizar(pessoa){
        return this.put(`/${pessoa.id}`, pessoa);
    }
}

export default PessoaService;