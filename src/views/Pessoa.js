import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/Form-group';
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
        idCelular:null,
        celular:'',
        idEmail:null,
        email:'',
        titulo:"Cadastro de Cliente"
    }

    componentDidMount(){
        ValidarUsuario.usuarioLogado();
        const usuarioEdit = LocalStorageService.obterItem("_usuario_edit");
        if(usuarioEdit){    
            this.setState({
                pessoa:usuarioEdit.pessoa,
                endereco:usuarioEdit.endereco,
                celular:usuarioEdit.celular,
                email:usuarioEdit.email,
                titulo:usuarioEdit.titulo,
                idCelular:usuarioEdit.idCelular,
                idEmail:usuarioEdit.idEmail
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
        
        let nascimento = this.state.pessoa.nascimento;
        nascimento = format(parseISO(nascimento), "dd/MM/yyyy");
        this.state.pessoa.nascimento = nascimento;
        
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

    salvar = (event) => {
        const result = this.validarFormulario(event);
        if(result){
            if(!this.state.pessoa.id){
                this.state.pessoa.enderecos.push(this.state.endereco);
                this.service.salvar(this.state.pessoa).then(response => {
                    mensagemSucesso("Cadastro realizado com sucesso!");
                    this.props.history.push('/lista-pessoa');
                }).catch(error => {
                    mensagemErro("Cadastro não realizado");
                });
            }else{
                this.state.pessoa.enderecos.push(this.state.endereco);
                this.state.pessoa.contatos.forEach((contato) => {
                    if(contato.tipo === "email"){
                        console.log(contato);
                        // contato.id = this.state.idEmail;
                    }else if(contato.tipo === "celular"){
                        // contato.id = this.state.idCelular;
                    }
                });
                console.log(this.state.pessoa);
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
                            <FormGroup label="Nome" htmlFor="inputNome" >
                                <input value={this.state.pessoa.nome} className="form-control mt-2 mb-2" type="text" id="nome"
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
                            <FormGroup label="CPF" htmlFor="inputCpf" >
                                <InputMask value={this.state.pessoa.cpf} mask="999.999.999-99" className="form-control mt-2 mb-2" type="text" id="cpf" required
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
                            <FormGroup label="RG" htmlFor="inputRG" >
                                <InputMask value={this.state.pessoa.rg} mask="99.999.999-99" className="form-control mt-2 mb-2" type="text" id="rg" required
                                name="rg" placeholder="00.000.000-00"
                                onChange={ e => this.setState({pessoa:{
                                    ...this.state.pessoa,
                                    rg : e.target.value.replace(/[^\d]+/g,'')
                                }})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">
                            <FormGroup label="Data de Nascimento" htmlFor="inputNascimento" >
                                <input value={this.state.pessoa.nascimento} className="form-control mt-2 mb-2" type="date" id="nascimento" required
                                name="nascimento"
                                onChange={ e => this.setState({pessoa:{
                                        ...this.state.pessoa,
                                        nascimento : e.target.value
                                    }})}
                                />            
                            </FormGroup>
                        </div> 
                        <div className="col-4">                        
                            <FormGroup label="Celular" htmlFor="inputCelular" >
                                <InputMask value={this.state.celular} mask="(99) 9 9999-9999" className="form-control mt-2 mb-2" type="text" id="celular" required
                                    name="contatos[]" placeholder="(00) 0 0000-0000"
                                    onBlur={ e => this.state.pessoa.contatos.push({
                                        id: this.state.idCelular,
                                        tipo: 'celular',
                                        contato : e.target.value.replace(/[^\d]+/g,'')
                                    })}
                                    onChange={e => this.setState({celular:e.target.value})}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Email" htmlFor="inputEmail" >
                                <input value={this.state.email} className="form-control mt-2 mb-2" type="email" id="email" required
                                    name="contatos[]" placeholder="email@email.com"
                                    onBlur={ e => this.state.pessoa.contatos.push({
                                        id:this.state.idEmail,
                                        tipo: 'email',
                                        contato : e.target.value
                                    })}
                                    onChange={e => this.setState({email:e.target.value})}
                                    />                 
                            </FormGroup>
                        </div>
                        <div className="col-4">                        
                            <FormGroup label="Profissão" htmlFor="inputProfissao" >
                                <input value={this.state.pessoa.profissao} className="form-control mt-2 mb-2" type="text" id="profissao" required
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
                                    <FormGroup label="CEP" htmlFor="inputCep" >
                                        <InputMask value={this.state.endereco.cep} mask="99.999.999" className="form-control mt-2 mb-2" id="cep"  required
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
                                        value={this.state.endereco.estado}
                                        onChange={e => this.setState({endereco: {
                                            ...this.state.endereco,
                                            estado:e.target.value
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
                                        <InputMask value={this.state.endereco.numero} mask="9999" className="form-control mt-2 mb-2" type="text" id="numero" required
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
                            <button className="btn btn-primary mx-2" type="submit">Salvar</button>
                            {/* <button className="btn btn-danger">Cancelar</button> */}
                        </div>
                </form>
            </Card>
        );
    }

}


export default Pessoa;