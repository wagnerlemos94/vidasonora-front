import React from 'react';
import Card from '../components/Card';
import Select from 'react-select';
import PessoaService from '../app/service/PessoaService';
import ValidarUsuario from '../app/service/ValidarUsuario';
import Anamnese from '../components/anamnese/Anamnese';

class Prontuario extends React.Component{
    
    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {
        titulo:'Prontuário',
        options:[],
        titulo:"Anamnese",
        prontuario:{
            paciente:{},
            nomeMedico:"",
            preferenciaManual:"",
            escolaridade:"",
            historicoPerdaAuditiva:"",
            usoAASI:"",
            zumbido:"",
            comorbidades:{
                hipertensao:"",
                diabetes:"",
                colesterolAlto:"",
                doencasHormonais:"",
                doencasMetabolicas:"",
                doencasInfecciosas:"",
            },
            queixas:{
                prurido:"",
                otorreia:"",
                otite:"",
                tonturaVertigem:"",
                perfuracaoMembranaTimpanica:"",
                desconfortoSonsIntensos:"",
            }
        }
    }
    
    componentDidMount(){
        if(ValidarUsuario.usuarioLogado()){
            this.service.buscarPessoasIdNome().then(response => {
                const pessoa = response.data;
                this.setState({options:pessoa});
            }).catch(erro => {
                console.log(erro);
            });
        }
    }
    salvar = () => {
        const prontuario = this.state.prontuario;
        console.log(prontuario);
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                  <Select options={this.state.options}
                    onChange={e => this.setState({prontuario:{
                        ...this.state.prontuario,
                        paciente:e
                    }})}
                  />
                  <Anamnese anamnese={this.state}/>
                  <button className="btn btn-primary" onClick={this.salvar}>Salvar</button>
            </Card>
        );
    }
}


export default Prontuario;