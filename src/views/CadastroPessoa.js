import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/Form-group';

import PessoaService from '../app/service/PessoaService';
import ViaCep from 'react-via-cep';



class CadastroPessoa extends React.Component{

    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {

        nome:'',
        cpf:'',
        rg:'',
        profissao:'',
        nascimento:'',
        contatos:[],
        enderecos:[],
        endereco:{
            cep : '',
            bairro : '',
            rua : '',
            numero : '',
            cidade : {
                id:''
            },
            uf:'',
            complemento: ''
        }
        
    }

    cadastrar = () => {
        this.state.enderecos.push(this.state.endereco);
        console.log(this.state);
        this.service.salvar(this.state).then(response => {
            console.log(response.data);

        }).catch(error => {
            console.log(error.response.data);
        });
    }

    render(){
        return(
            <Card title="Cadastro de Cliente">
                <div className="row">
                    <h6>Dados Pessoais</h6>
                    <div className="row">                        
                        <div className="col-12">
                            <FormGroup label="Nome" htmlFor="inputNome" required>
                                <input className="form-control mt-2 mb-2" type="text" id="nome"
                                    name="nome" placeholder="Nome Completo"
                                    onChange={ e => this.setState({nome : e.target.value})}
                                    />                   
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">        
                        <div className="col-4">
                            <FormGroup label="CPF" htmlFor="inputCpf" required>
                                <input className="form-control mt-2 mb-2" type="text" id="cpf"
                                name="cpf" placeholder="000.000.000-00"
                                onChange={ e => this.setState({cpf : e.target.value})}
                                />               
                            </FormGroup>
                        </div>               
                        <div className="col-4">
                            <FormGroup label="RG" htmlFor="inputRG" required>
                                <input className="form-control mt-2 mb-2" type="text" id="rg"
                                name="rg" placeholder="00.000.000-00"
                                onChange={ e => this.setState({rg : e.target.value})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">
                            <FormGroup label="Data de Nascimento" htmlFor="inputNascimento" required>
                                <input className="form-control mt-2 mb-2" type="date" id="nascimento"
                                name="nascimento"
                                onChange={ e => this.setState({nascimento : e.target.value})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">                        
                            <FormGroup label="Celular" htmlFor="inputCelular" required>
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
                            <FormGroup label="Email" htmlFor="inputEmail" required>
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
                            <FormGroup label="Profissão" htmlFor="inputProfissao" required>
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
                    <div>        
                        
                        <ViaCep cep={this.state.endereco.cep} lazy>
                        { ({ data, fetch }) => {
                                if (data) {
                                    this.state.endereco.bairro = data.bairro;
                                    this.state.endereco.rua = data.rua;
                                    this.state.endereco.cidade.id = data.localidade;
                                    this.state.endereco.uf = data.uf;                                  
                                    
                                }
                                return <div className="row">
                                    <div className="col-4">
                                        <FormGroup label="CEP" htmlFor="inputCep" required>
                                            <input className="form-control mt-2 mb-2" id="cep" 
                                            onChange={e => this.setState({endereco:{
                                                ...this.state.endereco,
                                                cep: e.target.value
                                            }})} placeholder="CEP" type="text"
                                            onBlur={fetch}/>
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">                        
                                        <FormGroup label="Cidade" htmlFor="inputCidade" required>
                                            <input className="form-control mt-2 mb-2" type="text" id="cidade"
                                            name="cidade" placeholder="Salvador"
                                            value={this.state.endereco.cidade.id}
                                            onChange={e => this.setState({cidade: {
                                                ...this.state.cidade,
                                                id:e.target.value
                                            }})}
                                            />                 
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">                        
                                        <FormGroup label="Estado" htmlFor="inputEstado" required>
                                            <input className="form-control mt-2 mb-2" type="text" id="estado"
                                            name="estado" placeholder="BA"
                                            value={this.state.endereco.uf}
                                            onChange={e => this.setState({endereco: {
                                                ...this.state.endereco,
                                                uf:e.target.value
                                            }})}
                                            />                 
                                        </FormGroup>
                                    </div>

                                    <div className="col-4">                        
                                        <FormGroup label="Bairro" htmlFor="inputBairro" required>
                                            <input className="form-control mt-2 mb-2" type="text" id="bairro"
                                                name="bairro" placeholder="Bairro"
                                                value={this.state.endereco.bairro}
                                                onChange={e => this.setState({endereco: {
                                                    ...this.state.endereco,
                                                    bairro:e.target.value
                                                }})}
                                                />                 
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">                        
                                        <FormGroup label="Rua" htmlFor="inputRua" required>
                                            <input className="form-control mt-2 mb-2" type="text" id="rua"
                                                name="rua" placeholder="Rua da vitoria"
                                                onChange={e => this.setState({endereco: {
                                                    ...this.state.endereco,
                                                    rua:e.target.value
                                                }})}
                                                />                 
                                        </FormGroup>
                                    </div>
                                    
                                    <div className="col-4">                        
                                        <FormGroup label="Numero" htmlFor="inputNumero" required>
                                            <input className="form-control mt-2 mb-2" type="text" id="numero"
                                                name="numero" placeholder="0000"
                                                onChange={e => this.setState({endereco: {
                                                    ...this.state.endereco,
                                                    numero:e.target.value
                                                }})}
                                                />                 
                                        </FormGroup>
                                    </div>
                                    <div className="row">    
                                        <div className="col-12">
                                            <FormGroup label="Complemento" htmlFor="inputComplemento" required>
                                                <input className="form-control mt-2 mb-2" type="text" id="complemento"
                                                name="complemento" placeholder="Complemento"
                                                    onChange={e => this.setState({endereco: {
                                                        ...this.state.endereco,
                                                        complemento:e.target.value
                                                    }})}
                                                />               
                                            </FormGroup>
                                        </div>     
                                    </div>
                                </div>
                            }}
                        </ViaCep>          
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