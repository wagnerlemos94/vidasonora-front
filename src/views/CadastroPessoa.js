import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/Form-group';

import PessoaService from '../app/service/PessoaService';



class CadastroPessoa extends React.Component{

    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {

        nome:null,
        cpf:null,
        rg:null,
        profissao:null,
        nascimento:null,
        contatos:[],
        enderecos:[],
        endereco:{
            cep : null,
            bairro : null,
            rua : null,
            numero : null,
            cidade : null,
            complemento: null
        }
        
    }

    cadastrar = () => {
        this.state.enderecos.push(this.state.endereco);
        this.service.salvar(this.state).then(response => {
            console.log(response.data);

        }).catch(error => {
            console.log(error.response.data);
        })
    }

    render(){
        return(
            <Card title="Cadastro de Pessoa">
                <div className="row">
                    <h6>Dados Pessoais</h6>
                    <div className="row">                        
                        <div className="col-12">
                            <FormGroup label="Nome" htmlFor="inputNome">
                                <input className="form-control mt-2 mb-2" type="text" id="nome"
                                    name="nome" placeholder="Nome Completo"
                                    onChange={ e => this.setState({nome : e.target.value})}
                                    />                   
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">        
                        <div className="col-4">
                            <FormGroup label="CPF" htmlFor="inputCpf">
                                <input className="form-control mt-2 mb-2" type="text" id="cpf"
                                name="cpf" placeholder="000.000.000-00"
                                onChange={ e => this.setState({cpf : e.target.value})}
                                />               
                            </FormGroup>
                        </div>               
                        <div className="col-4">
                            <FormGroup label="RG" htmlFor="inputRG">
                                <input className="form-control mt-2 mb-2" type="text" id="rg"
                                name="rg" placeholder="00.000.000-00"
                                onChange={ e => this.setState({rg : e.target.value})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">
                            <FormGroup label="Data de Nascimento" htmlFor="inputNascimento">
                                <input className="form-control mt-2 mb-2" type="date" id="nascimento"
                                name="nascimento"
                                onChange={ e => this.setState({nascimento : e.target.value})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">                        
                            <FormGroup label="Celular" htmlFor="inputCelular">
                                <input className="form-control mt-2 mb-2" type="text" id="celular"
                                    name="contatos[]" placeholder="(00) 0 0000-0000"
                                    onBlur={ e => this.state.contatos.push({
                                        tipo: 'celular',
                                        contato : e.target.value
                                    })}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Email" htmlFor="inputEmail">
                                <input className="form-control mt-2 mb-2" type="text" id="email"
                                    name="contatos[]" placeholder="email@email.com"
                                    onBlur={ e => this.state.contatos.push({
                                        tipo: 'email',
                                        contato : e.target.value
                                    })}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Profissão" htmlFor="inputProfissao">
                                <input className="form-control mt-2 mb-2" type="text" id="profissao"
                                    name="profissao" placeholder="Auxiliar Administrativo"
                                    onChange={ e => this.setState({profissao : e.target.value})}
                                    />                 
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h6 className="mt-4 mb-2">Endereço</h6>
                    <div className="row">        
                        <div className="col-4">
                            <FormGroup label="CEP" htmlFor="inputCep">
                                <input className="form-control mt-2 mb-2" type="text" id="cep"
                                    name="cep" placeholder="00.000-000"
                                    onChange={ e => this.state.endereco.cep = e.target.value}
                                    />                   
                            </FormGroup>
                        </div>             
                        <div className="col-4">
                            <FormGroup label="Estado" htmlFor="inputEstado">
                                <input className="form-control mt-2 mb-2" type="text" id="estado"
                                name="estado" placeholder="BA"
                                onChange={ e => this.state.endereco.estado = e.target.value}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">                        
                            <FormGroup label="Cidade" htmlFor="inputCidade">
                                <input className="form-control mt-2 mb-2" type="text" id="cidade"
                                    name="cidade" placeholder="Salvador"
                                    onChange={ e => this.state.endereco.cidade = e.target.value}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Bairro" htmlFor="inputBairro">
                                <input className="form-control mt-2 mb-2" type="text" id="bairro"
                                    name="bairro" placeholder="Bairro"
                                    onChange={ e => this.state.endereco.bairro = e.target.value}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Rua" htmlFor="inputRua">
                                <input className="form-control mt-2 mb-2" type="text" id="rua"
                                    name="rua" placeholder="Rua da vitoria"
                                    onChange={ e => this.state.endereco.rua = e.target.value}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Numero" htmlFor="inputNumero">
                                <input className="form-control mt-2 mb-2" type="text" id="numero"
                                    name="numero" placeholder="0000"
                                    onChange={ e => this.state.endereco.numero = e.target.value}
                                    />                 
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">    
                        <div className="col-12">
                            <FormGroup label="Complemento" htmlFor="inputComplemento">
                                <input className="form-control mt-2 mb-2" type="text" id="complemento"
                                name="complemento" placeholder="Complemento"
                                onChange={ e => this.state.endereco.complemento = e.target.value}
                                />               
                            </FormGroup>
                        </div>     
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <button className="btn btn-primary mx-2" onClick={this.cadastrar}>Salvar</button>
                            <button className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }

}


export default CadastroPessoa;