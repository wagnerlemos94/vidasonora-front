import ApiService from '../apiservice';


export default class EvolucaoService extends ApiService{
    constructor(){
        super('/evolucoes');
    }

    buscarPorId(id){
        return this.get(`/${id}`);
    }

    cadastro(evolucao){
        return this.post('/',evolucao);
    }

    buscarTodos(){
        return this.get(`/`);
    }

    buscarTodosPorIdProntnuario(id){
        return this.get(`/prontuario/${id}`);
    }

}