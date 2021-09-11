import React from 'react';
import Card from '../components/Card';
import Select from 'react-select';
import PessoaService from '../app/service/PessoaService';
import ValidarUsuario from '../app/service/ValidarUsuario';
import AnamnesePac from '../components/anamnese/AnamnesePac';

class Prontuario extends React.Component{
    
    constructor(){
        super();
        this.service = new PessoaService();
    }

    state = {
        titulo:'Prontuário',
        options:[],
        anamnese:{
            paciente:{},
            principalQueixa:"",
            encaminhadoPor:"",
            nomeMedico:"",
            preferenciaManual:"",
            escolaridade:"",
            historicoPerdaAuditiva:"",
            usoAASI:"",
            zumbido:"",
            comorbidades:{
                doencasMetabolicas:"",
                doencasInfecciosas:"",
                doencasHormonais:"",
                colesterolAlto:"",
                hipertensao:"",
                diabetes:"",
                inputOutras:"",
                outras:"",
            },
            queixas:{
                od:{
                    perfuracaoMembranaTimpanica:"",
                    plenitudeAuricular:"",
                    tonturaVertigem:"",
                    otorreia:"",
                    prurido:"",
                    otite:"",
                    tontura:{
                        inicio:"",
                        intensidade:"",
                        ocorrencia:"",
                        duracaoCrise:{
                            tonturaForaCrise:"",
                            sensacaoCriseTonturaOcorrer:"",
                            sensacaoObjetosGiraRedor:"",
                            sensacaoGirarAmbienteObjetosEstacionados:""
                        }
                    }
                },
                oe:{
                    perfuracaoMembranaTimpanica:"",
                    plenitudeAuricular:"",
                    tonturaVertigem:"",
                    otorreia:"",
                    prurido:"",
                    otite:"",
                    tontura:{
                        inicio:"",
                        intensidade:"",
                        ocorrencia:"",
                        duracaoCrise:{
                            tonturaForaCrise:"",
                            sensacaoCriseTonturaOcorrer:"",
                            sensacaoObjetosGiraRedor:"",
                            sensacaoGirarAmbienteObjetosEstacionados:""
                        },
                        surgeOuPiora:{
                            moviventoCabeca:"",
                            veiculoMovimento:"",
                            olharLado:"",
                            determinadaPosicaoCorpo:""
                        },
                        sensacao:{
                            sensacaoDesmaiar:"",
                            sensacaoCabecaOca:"",
                            sensacaoFlutuacao:"",
                            desequilibioMarcha:"",
                            perdaConciencia:"",
                            pressaoCabeca:"",
                            instabilidade:"",
                            palpitacoes:"",
                            oscilacao:"",
                            sudorese:"",
                            nauseas:"",
                            quedas:"",
                            palidez:"",
                            vomito:"",
                            outros:""

                        },
                        surgerePiora:{
                            lugaresAltos:"",
                            lugaresAmplos:"",
                            supermercados:"",
                            comerciais:"",
                            filas:"",
                        },
                        tendenciaQueda:{
                            direita:"",
                            esquerda:"",
                            frente:"",
                            tras:""
                        },
                        devioMarcha:{
                            direita:"",
                            esquerda:""
                        },
                        fatoresDesencadeantes:"",
                        fatoresAgravantes:"",
                        fatoresMelhora:"",
                        sintomasConcomitantes:"",
                        outrosDados:""
                    }
                }
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
        const anamnese = this.state.anamnese;
        console.log(anamnese);
    }

    render(){
        return(
            <Card title={this.state.titulo}>
                  <Select options={this.state.options}
                    onChange={e => this.setState({anamnese:{
                        ...this.state.anamnese,
                        paciente:{
                            id:e.value,
                            nome:e.label
                        }
                    }})}
                  />
                  <AnamnesePac anamnese={this.state.anamnese}/>
                  <button className="btn btn-md btn-primary" onClick={this.salvar}>Salvar</button>
            </Card>
        );
    }
}


export default Prontuario;