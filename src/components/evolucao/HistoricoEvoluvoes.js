import React, {Component} from 'react'
import LocalStorageService from '../../app/service/localStorageService';
import EvolucaoService from '../../app/service/EvolucaoService';
import { MDBInput } from 'mdbreact';
import Card from '../Card';

export default class HistoricoEvolucao extends Component{
    
    constructor(){
        super();
        this.service = new EvolucaoService();
    }

    state = {
        evolucoes:[],
        prontuario:{
            pessoa:{
                nome:""
            }
        }
    }

    componentDidMount(){
        const prontuario = LocalStorageService.obterItem("_usuario_prontuario");
        if(prontuario){
            this.setState({
                prontuario:prontuario
            })
            this.service.buscarTodosPorIdProntnuario(prontuario.id).then(response => {
                this.setState({evolucoes:response.data});
            }).catch(error => {
                console.log(error);
            })
        }
    }
    
    render(){
        return(
            <>
                 <MDBInput required type="text" label="Nome do Paciente:"  size="lg" 
                    id="nomeProfissional"
                    disabled
                    value={this.state.prontuario.pessoa.nome}
                    
                    />
                {this.state.evolucoes.map((evolucao) => 
                    <Card title="Evolução">
                        <div>
                            <div className='row'>
                                <div className="col-2.0">
                                    <input type="date" class="form-control" required 
                                    disabled
                                    value={evolucao.data}
                                    id="data"
                                        
                                    />
                                </div>
                                <div className="col-12">
                                    <MDBInput required type="text" label="Nome do Profissional:"  size="lg" 
                                    id="nomeProfissional"
                                    disabled
                                    value={evolucao.nomeProfissional}
                                    
                                    />
                                </div>
                            </div>

                            <MDBInput required type="textarea" label="Evolução do Paciente" rows="6" size="lg" 
                            id="descricao"
                            disabled
                                value={evolucao.descricao}
                                
                            />
                        </div>
                        <hr />
                    
                    </Card>
                )}
            </>
        );
    }
}