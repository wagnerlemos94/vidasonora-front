import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/Form-group';

import PessoaService from '../app/service/PessoaService';
import ViaCep from 'react-via-cep';

import { mensagemErro, mensagemSucesso } from '../components/toastr';

import InputMask from "react-input-mask";



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
                nome:''
            },
            uf:'',
            complemento: ''
        }
        
    }

    validarFormulario = (event) => {   
        let validado = true;
        event.preventDefault();
        const endereco = this.state.endereco;
        event.target.className += " was-validated";
        Object.values(this.state).map((valor,chave) => {
            if(valor == "" && typeof(valor) != "object"){
                validado = false;
            }
        });
        this.state.contatos.forEach((contato) => {
            if(contato.tipo == "email"){
                const valorContato = contato.contato;
                if(valorContato.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) == null){
                    validado = false;
                }
            }
        });
        Object.values(endereco).map((valor,chave) => {
            if(valor == ""){
                validado = false;
            }
        });

        return validado;

    }

    cadastrar = (event) => {
        const result = this.validarFormulario(event);
        if(result){
            this.state.enderecos.push(this.state.endereco);
            console.log(this.state);
            this.service.salvar(this.state).then(response => {
                mensagemSucesso("Cadastro realizado com sucesso!");
    
            }).catch(error => {
                mensagemErro("Cadastro não realizado");
            });

        }
    }

    render(){
        return(
            <Card title="Cadastro de Cliente">
                <form className="needs-validation" onSubmit={this.cadastrar} noValidate>
                    <div className="row">
                        <div className="col-12">
                            <FormGroup label="Nome" htmlFor="inputNome" >
                                <input className="form-control mt-2 mb-2" type="text" id="nome"
                                    name="nome" placeholder="Nome Completo"
                                    onChange={ e => this.setState({nome : e.target.value})}
                                    required
                                    />                   
                            </FormGroup>
                        </div>
                        
                        <div className="col-4">
                            <FormGroup label="CPF" htmlFor="inputCpf" >
                                <InputMask mask="999.999.999-99" className="form-control mt-2 mb-2" type="text" id="cpf" required
                                name="cpf" placeholder="000.000.000-00"
                                onChange={ e => this.setState({cpf : e.target.value.replace(/[^\d]+/g,'')})}
                                />               
                            </FormGroup>
                        </div>               
                        <div className="col-4">
                            <FormGroup label="RG" htmlFor="inputRG" >
                                <InputMask mask="99.999.999-99" className="form-control mt-2 mb-2" type="text" id="rg" required
                                name="rg" placeholder="00.000.000-00"
                                onChange={ e => this.setState({rg : e.target.value.replace(/[^\d]+/g,'')})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">
                            <FormGroup label="Data de Nascimento" htmlFor="inputNascimento" >
                                <input className="form-control mt-2 mb-2" type="date" id="nascimento" required
                                name="nascimento"
                                onChange={ e => this.setState({nascimento : e.target.value})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">                        
                            <FormGroup label="Celular" htmlFor="inputCelular" >
                                <InputMask mask="(99) 9 9999-9999" className="form-control mt-2 mb-2" type="text" id="celular" required
                                    name="contatos[]" placeholder="(00) 0 0000-0000"
                                    onBlur={ e => this.state.contatos.push({
                                        tipo: 'celular',
                                        contato : e.target.value.replace(/[^\d]+/g,'')
                                    })}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Email" htmlFor="inputEmail" >
                                <input className="form-control mt-2 mb-2" type="email" id="email" required
                                    name="contatos[]" placeholder="email@email.com"
                                    onBlur={ e => this.state.contatos.push({
                                        tipo: 'email',
                                        contato : e.target.value
                                    })}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Profissão" htmlFor="inputProfissao" >
                                <input className="form-control mt-2 mb-2" type="text" id="profissao" required
                                    name="profissao" placeholder="Auxiliar Administrativo"
                                    onChange={ e => this.setState({profissao : e.target.value})}
                                    />                 
                            </FormGroup>
                        </div>                    
                    </div>
                    <hr/>                  
                    <ViaCep cep={this.state.endereco.cep} lazy>
                        { ({ data, fetch }) => {
                                if (data) {
                                    this.state.endereco.bairro = data.bairro;
                                    this.state.endereco.rua = data.logradouro;
                                    this.state.endereco.cidade.nome = data.localidade;
                                    this.state.endereco.uf = data.uf;                                  
                                    
                                }
                                return <div className="row">
                                    <div className="col-4">
                                        <FormGroup label="CEP" htmlFor="inputCep" >
                                            <InputMask mask="99.999.999" className="form-control mt-2 mb-2" id="cep"  required
                                            onChange={e => this.setState({endereco:{
                                                ...this.state.endereco,
                                                cep: e.target.value.replace(/[^\d]+/g,'')
                                            }})} placeholder="00.000.000" type="text"
                                            onBlur={fetch}/>
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">                        
                                        <FormGroup label="Cidade" htmlFor="inputCidade" >
                                            <input className="form-control mt-2 mb-2" type="text" id="cidade" required
                                            name="cidade" placeholder="Ex: Salvador"
                                            value={this.state.endereco.cidade.nome}
                                            onChange={e => this.setState({cidade: {
                                                ...this.state.cidade,
                                                nome:e.target.value
                                            }})}
                                            />                 
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">                        
                                        <FormGroup label="Estado" htmlFor="inputEstado" >
                                            <input className="form-control mt-2 mb-2" type="text" id="estado" required
                                            name="estado" placeholder="Ex: BA"
                                            value={this.state.endereco.uf}
                                            onChange={e => this.setState({endereco: {
                                                ...this.state.endereco,
                                                uf:e.target.value
                                            }})}
                                            />                 
                                        </FormGroup>
                                    </div>

                                    <div className="col-4">                        
                                        <FormGroup label="Bairro" htmlFor="inputBairro" >
                                            <input className="form-control mt-2 mb-2" type="text" id="bairro" required
                                                name="bairro" placeholder="Ex: Bairro"
                                                value={this.state.endereco.bairro}
                                                onChange={e => this.setState({endereco: {
                                                    ...this.state.endereco,
                                                    bairro:e.target.value
                                                }})}
                                                />                 
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">                        
                                        <FormGroup label="Rua" htmlFor="inputRua" >
                                            <input className="form-control mt-2 mb-2" type="text" id="rua" required
                                                name="rua" placeholder="Ex: Rua da vitoria"
                                                value={this.state.endereco.rua}
                                                onChange={e => this.setState({endereco: {
                                                    ...this.state.endereco,
                                                    rua:e.target.value
                                                }})}
                                                />                 
                                        </FormGroup>
                                    </div>
                                    
                                    <div className="col-4">                        
                                        <FormGroup label="Numero" htmlFor="inputNumero" >
                                            <InputMask mask="9999" className="form-control mt-2 mb-2" type="text" id="numero" required
                                                name="numero" placeholder="Ex: 0000"
                                                onChange={e => this.setState({endereco: {
                                                    ...this.state.endereco,
                                                    numero:e.target.value.replace(/[^\d]+/g,'')
                                                }})}
                                                />                 
                                        </FormGroup>
                                    </div>
                                
                                    <div className="col-12">
                                        <FormGroup label="Complemento" htmlFor="inputComplemento" >
                                            <input className="form-control mt-2 mb-2" type="text" id="complemento" required
                                            name="complemento" placeholder="Ex: Complemento"
                                                onChange={e => this.setState({endereco: {
                                                    ...this.state.endereco,
                                                    complemento:e.target.value
                                                }})}
                                            />               
                                        </FormGroup>
                                    </div>     
                                    
                                </div>
                            }}
                        </ViaCep>                       
                            <div className="">
                                <button className="btn btn-primary mx-2" type="submit">Salvar</button>
                                {/* <button className="btn btn-danger">Cancelar</button> */}
                            </div>
                </form>
            </Card>
        );
    }

}


export default CadastroPessoa;