import ApiService from '../apiservice';

class AnamneseService extends ApiService{
    constructor(){
        super('/anamneses');
    }

    salvar(anamnese){
        return this.post(`/${anamnese.pessoa.id}`, anamnese);
    }

    buscarPessoa(id){
        return this.get(`/${id}`);
    }

    buscarTodos(){
        return this.get(`/`);
    }

    atualizar(pessoa){
        return this.put(`/${pessoa.id}`, pessoa);
    }

    retornarArrayEncaminhaPor(){
        return [
            {
                label:"NENHUM"
            },
            {
                label:"CLÍNICO GERAL"
            },
            {
                label:"OTORRINOLARINGOLOGISTA"
            },
            {
                label:"NEUROLOGISTA"
            },
            {
                label:"PEDIATRA"
            },
            {
                label:"PSICOLOGO"
            },
            {
                label:"PSICOPEDAGOGO"
            },
            {
                label:"NEUROPEDIATRA"
            },
            {
                label:"OUTROS"
            }
        ];
    }
}

export default AnamneseService;