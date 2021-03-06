import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import PessoaService from '../app/service/PessoaService';
import ViaCep from 'react-via-cep';
import { mensagemErro, mensagemSucesso } from '../components/toastr';
import InputMask from "react-input-mask";
import { parseISO, format, } from 'date-fns';
import LocalStorageService from '../app/service/localStorageService';
import ValidarUsuario from '../app/service/ValidarUsuario';
import { cpf } from 'cpf-cnpj-validator'; 


class Pessoa extends React.Component{

    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {
        pessoa:{
            nome:'',
            cpf:'',
            rg:'',
            profissao:'',
            nascimento:'',
            contatos:[],
            enderecos:[],
        },  
        endereco:{
            cep : '',
            bairro : '',
            rua : '',
            numero : '',
            cidade : {
                nome:''
            },
            estado:'',
            complemento: ''
        },
        celular:{
            tipo:"CELULAR",
            contato:""
        },
        email:{
            tipo:"EMAIL",
            contato:""
        },
        titulo:"Cadastro de Cliente"
    }

    componentDidMount(){
        ValidarUsuario.usuarioLogado();
        const pessoaEdit = LocalStorageService.obterItem("_pessoa_edit");
        if(pessoaEdit){    
            this.setState({
                pessoa:pessoaEdit.pessoa,
                endereco:pessoaEdit.endereco,
                celular:pessoaEdit.celular,
                email:pessoaEdit.email,
                titulo:pessoaEdit.titulo,
                idCelular:pessoaEdit.idCelular,
                idEmail:pessoaEdit.idEmail
            });
        } 
    }

    validarCpf = () => {
        let validado = true;
        if(!cpf.isValid(this.state.pessoa.cpf)){
            mensagemErro("CPF Inválido");
        }else{
            mensagemSucesso("CPF Válido");            
            validado = false;
        }
        return validado;
    }

    validarFormulario = (event) => { 
        event.preventDefault();
        let validado = true;
        
        // try {
        //     let nascimento = this.state.pessoa.nascimento;
        //     nascimento = format(parseISO(nascimento), "dd/MM/yyyy");
        //     this.setState({
        //         ...this.state.pessoa.nascimento = nascimento
        //     });
        // } catch (error) {
        //     mensagemErro(error);
        // }

        const endereco = this.state.endereco;
        event.target.className += " was-validated";
        Object.values(this.state.pessoa).map((valor,index) => {
            if(valor === "" && typeof(valor) != "object"){
                validado = false;
            }
            return validado;    
        });
        this.state.pessoa.contatos.forEach((contato) => {
            if(contato.tipo === "email"){
                const email = contato.contato;
                const validarEmail = email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/);
                validado = validarEmail;
            }
        });
        Object.values(endereco).map((valor,index) => {
            if(valor === ""){
                validado = false;
            }
            return validado;
        });

        return validado;

    }

    preparaEnderecos(){
        this.state.pessoa.enderecos = [];
        this.state.pessoa.enderecos.push(this.state.endereco);
    }

    preparaContatos(){
        this.state.pessoa.contatos = [];
        this.state.pessoa.contatos.push(this.state.celular);
        this.state.pessoa.contatos.push(this.state.email);
    }

    salvar = (event) => {
        const result = this.validarFormulario(event);
        if(result){
            if(!this.state.pessoa.id){
                this.preparaEnderecos();
                this.preparaContatos();
                this.service.salvar(this.state.pessoa).then(response => {
                    mensagemSucesso("Cadastro realizado com sucesso!");
                    this.props.history.push('/lista-pessoa');
                }).catch(error => {
                    console.log(error);
                    mensagemErro("Cadastro não realizado");
                });
            }else{
                this.preparaEnderecos();
                this.preparaContatos();
                this.service.atualizar(this.state.pessoa).then(response => {
                    mensagemSucesso("Cadastro atualizado com sucesso!");
                    this.props.history.push('/lista-pessoa'); 
                }).catch(error => {
                    mensagemErro("Cadastro não realizado");
                });
                LocalStorageService.removerItem("_usuario_edit");
            }
        }
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                <form className="needs-validation" onSubmit={this.salvar} noValidate>
                    <div className="row">
                        <div className="col-12">
                            <FormGroup className="mt-3 mb-3" label="Nome" htmlFor="inputNome" >
                                <input value={this.state.pessoa.nome} className="form-control" type="text" id="nome"
                                    name="nome" placeholder="Nome Completo"
                                    onChange={ e => this.setState({pessoa :{
                                        ...this.state.pessoa, 
                                        nome :e.target.value
                                        }})}
                                    required
                                    />                   
                            </FormGroup>
                        </div>
                        
                        <div className="col-4">
                            <FormGroup className="mt-3 mb-3" label="CPF" htmlFor="inputCpf" >
                                <InputMask value={this.state.pessoa.cpf} mask="999.999.999-99" className="form-control" type="text" id="cpf" required
                                name="cpf" placeholder="000.000.000-00"
                                onChange={ e => this.setState({pessoa:{
                                    ...this.state.pessoa,
                                    cpf : e.target.value.replace(/[^\d]+/g,'')
                                }})}
                                onBlur={this.validarCpf}
                                />               
                            </FormGroup>
                        </div>               
                        <div className="col-4">
                            <FormGroup className="mt-3 mb-3" label="RG" htmlFor="inputRG" >
                                <InputMask value={this.state.pessoa.rg} mask="99.999.999-99" className="form-control" type="text" id="rg" required
                                name="rg" placeholder="00.000.000-00"
                                onChange={ e => this.setState({pessoa:{
                                    ...this.state.pessoa,
                                    rg : e.target.value.replace(/[^\d]+/g,'')
                                }})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">
                            <FormGroup className="mt-3 mb-3" label="Data de Nascimento" htmlFor="inputNascimento" >
                                <input value={this.state.pessoa.nascimento} className="form-control" type="date" id="nascimento" required
                                name="nascimento"
                                onChange={ e => this.setState({pessoa:{
                                        ...this.state.pessoa,
                                        nascimento : e.target.value
                                    }})}
                                />            
                            </FormGroup>
                        </div> 
                        <div className="col-4">                        
                            <FormGroup className="mt-3 mb-3" label="Celular" htmlFor="inputCelular" >
                                <InputMask value={this.state.celular.contato} mask="(99) 9 9999-9999" className="form-control" type="text" id="celular" required
                                    name="contatos[]" placeholder="(00) 0 0000-0000"
                                    onChange={e => this.setState({celular:{
                                        tipo:"CELULAR",
                                        contato:e.target.value.replace(/[^\d]+/g,'')
                                    }})}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup className="mt-3 mb-3" label="Email" htmlFor="inputEmail" >
                                <input value={this.state.email.contato} className="form-control" type="email" id="email" required
                                    name="contatos[]" placeholder="email@email.com"
                                    onChange={e => this.setState({email:{
                                        tipo:"EMAIL",
                                        contato:e.target.value
                                    }})}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup className="mt-3 mb-3" label="Profissão" htmlFor="inputProfissao" >
                                <input value={this.state.pessoa.profissao} className="form-control" type="text" id="profissao" required
                                    name="profissao" placeholder="Auxiliar Administrativo"
                                    onChange={ e => this.setState({pessoa:{
                                        ...this.state.pessoa,
                                        profissao : e.target.value
                                    }})}
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
                                this.state.endereco.estado = data.uf;                                  
                                
                            }
                            return <div className="row">
                                <div className="col-4">
                                    <FormGroup className="mt-3 mb-3" label="CEP" htmlFor="inputCep" >
                                        <InputMask value={this.state.endereco.cep} mask="99.999.999" className="form-control" id="cep"  required
                                        onChange={e => this.setState({endereco:{
                                            ...this.state.endereco,
                                            cep: e.target.value.replace(/[^\d]+/g,'')
                                        }})} placeholder="00.000.000" type="text"
                                        onBlur={fetch}/>
                                    </FormGroup>
                                </div>
                                <div className="col-4">                        
                                    <FormGroup className="mt-3 mb-3" label="Cidade" htmlFor="inputCidade" >
                                        <input className="form-control" type="text" id="cidade" required
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
                                    <FormGroup className="mt-3 mb-3" label="Estado" htmlFor="inputEstado" >
                                        <input className="form-control" type="text" id="estado" required
                                        name="estado" placeholder="Ex: BA"
                                        value={this.state.endereco.estado}
                                        onChange={e => this.setState({endereco: {
                                            ...this.state.endereco,
                                            estado:e.target.value
                                        }})}
                                        />   
                                    </FormGroup>
                                </div>

                                <div className="col-4">                        
                                    <FormGroup className="mt-3 mb-3" label="Bairro" htmlFor="inputBairro" >
                                        <input className="form-control" type="text" id="bairro" required
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
                                    <FormGroup className="mt-3 mb-3" label="Rua" htmlFor="inputRua" >
                                        <input className="form-control" type="text" id="rua" required
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
                                    <FormGroup className="mt-3 mb-3" label="Numero" htmlFor="inputNumero" >
                                        <InputMask value={this.state.endereco.numero} mask="9999" className="form-control" type="text" id="numero" required
                                            name="numero" placeholder="Ex: 0000"
                                            onChange={e => this.setState({endereco: {
                                                ...this.state.endereco,
                                                numero:e.target.value.replace(/[^\d]+/g,'')
                                            }})}
                                            />                 
                                    </FormGroup>
                                </div>
                            
                                <div className="col-12">
                                    <FormGroup className="mt-3 mb-3" label="Complemento" htmlFor="inputComplemento" >
                                        <input className="form-control" type="text" id="complemento" required
                                        name="complemento" placeholder="Ex: Complemento"
                                        value={this.state.endereco.complemento}
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
                            <a href="#/lista-pessoa" className="btn btn-md btn-danger">Cancelar</a>
                            <button className="btn btn-md btn-primary mx-2" type="submit">Salvar</button>
                        </div>
                </form>
            </Card>
        );
    }

}


export default Pessoa;