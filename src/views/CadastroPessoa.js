import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/Form-group';


class CadastroPessoa extends React.Component{

    state = {

        nome:null,
        cpf:null,
        rg:null,
        profissao:null,
        contato:[
            {
                tipo : null,
                contato : null
            }            
        ]
    }

    render(){
        return(
            <Card title="Cadastro de Pessoa">
                <div className="row">
                    <div className="row">                        
                        <div className="col-12">
                            <FormGroup label="Nome" htmlFor="inputNome">
                                <input class="form-control" type="text" id="nome"
                                    name="nome"
                                    onChange={ e => this.setState({nome : e.target.value})}
                                    />                   
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">        
                        <div className="col-4">
                            <FormGroup label="CPF" htmlFor="inputCPF">
                                <input class="form-control" type="text" id="cpf"
                                name="cpf"
                                onChange={ e => this.setState({cpf : e.target.value})}
                                />               
                            </FormGroup>
                        </div>               
                        <div className="col-4">
                            <FormGroup label="RG" htmlFor="inputRG">
                                <input class="form-control" type="text" id="rg"
                                name="rg"
                                onChange={ e => this.setState({rg : e.target.value})}
                                />                
                            </FormGroup>
                        </div> 
                        <div className="col-4">                        
                            <FormGroup label="Profissão" htmlFor="inputProfissao">
                                <input class="form-control" type="text" id="profissao"
                                    name="profissao"
                                    onChange={ e => this.setState({profissao : e.target.value})}
                                    />                 
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }

}


export default CadastroPessoa;