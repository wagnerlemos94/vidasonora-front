import React from 'react';
import { MDBInput } from 'mdbreact';
import LocalStorageService from '../../app/service/localStorageService';
import EvolucaoService from '../../app/service/EvolucaoService';
import Util from '../../app/util/Util';
import ProntuarioService from '../../app/service/ProntuarioService';
import { withRouter } from 'react-router';

class Evolucao extends React.Component{

    constructor(){
        super();
        this.service = new EvolucaoService();
        this.serviceProntuario = new ProntuarioService;
        this.util = new Util();
    }

    exibir(id){
        this.til.exibir(id);
    }

    
    state = {
        evolucao:{
            data:"",
            nomeProfissional:"",
            descricao:""
        },
        prontuario:{
            pessoa:{
                id:""
            }
        }
    }

    sweetalert = () =>{
        const Swal = require('sweetalert2'); 
        Swal.fire({
            title: 'Sucesso!',
            text: 'Evolucção cadastrada com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok',
            customClass: {
                confirmButton: 'btn btn-sm btn-primary',
              }
          }).then(result => {
            if(result.isConfirmed){
                this.buscarProntuario();
            }
          });
    }

    buscarProntuario(){
        const id = this.state.prontuario.pessoa.id;
        this.serviceProntuario.buscarPorIdPessoa(id).then(response => {
          const prontuario = response.data;
          LocalStorageService.adicionarItem('_usuario_prontuario', prontuario);  
            document.getElementById("data").setAttribute("disabled", "disabled");
            document.getElementById("descricao").setAttribute("disabled", "disabled");
        }).catch(erro => {
          console.log(erro);
        });
          
      }

    salvar = () => {
        const evolucao = this.state.evolucao;
        evolucao.prontuario = {id:this.state.prontuario.id}        
        this.service.cadastro(evolucao).then(response => {
            this.sweetalert();
        }).catch(error => {
            alert("Deu ruim");
        });
    }

    componentDidMount(){
        const prontuario = LocalStorageService.obterItem('_usuario_prontuario');
        const evolucao = prontuario.evolucoes.pop();
        if(evolucao){
            this.setState({
                evolucao:evolucao
            });
        }
        if(prontuario){
            this.setState({prontuario:prontuario})
        }

    }

    novaEvolucao(){
        this.util.exibir("div-button");
        const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");
        this.setState({
            evolucao:{
                data:"",
                nomeProfissional:usuarioLogado.nome,
                descricao:""
            }
        });
        document.getElementById("data").removeAttribute("disabled");
        document.getElementById("descricao").removeAttribute("disabled");
    }

    resetModal(){
        this.util.ocultar("div-button");
        this.componentDidMount();
        document.getElementById("data").setAttribute("disabled", "disabled");
        document.getElementById("descricao").setAttribute("disabled", "disabled");
    }
    historicoEvolucoes = () => {
        this.props.history.push('/historico-evolucoes');
    }

    render(){
        return(
            <form onSubmit={this.salvar}>
                <div className='row'>
                    <div className="col-4">
                        <input type="date" class="form-control" required 
                        disabled
                            id="data"
                            value={this.state.evolucao.data}
                            onChange={e => this.setState({evolucao:{
                                ...this.state.evolucao, 
                                data:e.target.value
                            }
                        })}
                        />
                    </div>
                    <div className="col text-right">
                        <a className="btn btn-sm btn-primary" onClick={e => this.novaEvolucao()}>Nova Evolução</a >
                        <a className="btn btn-sm btn-success" onClick={e => this.historicoEvolucoes()}>Históroco</a >
                    </div>
                    <div className="col-12">
                        <MDBInput required type="text" label="Nome do Profissional:"  size="lg" 
                        id="nomeProfissional"
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

                <MDBInput required type="textarea" label="Evolução do Paciente" rows="8" size="lg" 
                id="descricao"
                disabled
                    value={this.state.evolucao.descricao}
                    onChange={e => this.setState({evolucao:{
                        ...this.state.evolucao,
                        descricao:e.target.value
                       }
                   })}
                />
                <div className='row modal-footer'>
                    <div className="col text-right">
                        <button type="button" className="btn btn-md btn-secondary" data-bs-dismiss="modal" onClick={e => this.resetModal()} >Fechar</button>
                        <button type="submit" className="btn btn-md btn-primary d-none" id="div-button">Salvar</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(Evolucao);