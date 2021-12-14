import React from 'react';
import { MDBInput } from 'mdbreact';
import LocalStorageService from '../app/service/localStorageService';
import EvolucaoService from '../app/service/EvolucaoService';

export default class Evolucao extends React.Component{

    constructor(){
        super();
        this.service = new EvolucaoService();
    }
    
    state = {
        evolucao:{
            data:"",
            nomeProfissional:"",
            descricao:""
        }
    }

    salvar = () => {
        const evolucao = this.state.evolucao;
        evolucao.prontuario = {id:1}
        this.service.cadastro(evolucao).then(response => {
            alert("funfou");
        }).catch(error => {
            alert("Deu ruim");
        });
        console.log(this.state.evolucao);
    }

    componentDidMount(){
        const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");
        console.log(usuarioLogado);
        this.setState({evolucao:{
            ...this.state.evolucao, 
            nomeProfissional:usuarioLogado.email
        }})
    }

    render(){
        return(
            <form onSubmit={this.salvar}>
                <div className='row'>
                    <div className="col-4">
                        <input type="date" class="form-control" required 
                            onChange={e => this.setState({evolucao:{
                                ...this.state.evolucao, 
                                data:e.target.value
                                }
                            })}
                        />
                    </div>
                    <div className="col-12">
                        <MDBInput required type="text" label="Nome do Profissional:"  size="lg" 
                        disabled
                        value={this.state.evolucao.nomeProfissional}
                        onChange={e => this.setState({evolucao:{
                            ...this.state.evolucao, 
                            nomeProfissional:e.target.value
                            }
                        })}
                        />
                    </div>
                </div>

                <MDBInput required type="textarea" label="Evolução do Paciente" rows="10" size="lg" 
                    onChange={e => this.setState({evolucao:{
                        ...this.state.evolucao,
                        descricao:e.target.value
                       }
                   })}
                />
                <div className='row modal-footer'>
                    <div className="col text-right">
                        <button type="button" className="btn btn-md btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="submit" className="btn btn-md btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
        );
    }
}