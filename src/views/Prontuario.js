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


    queixa = () => {

        return {
            perfuracaoMembranaTimpanica:"",
            antencendentesFamiliarePerdaAuditiva:"",
            antencendentesFamiliarePerdaAuditivaInput:"",
            entiologiaPerdaAuditiva:"",
            historicoPerdaAuditiva:"",
            plenitudeAuricular:"",
            laudoAudiometria:"",
            tonturaVertigem:"",
            otorreia:"",
            usoAASI:"",
            prurido:"",
            otite:"",
            usouAparelhoAudio:"",
            zumbido:{
                option:"2",
                continuo:"",
                pulsatil:"",
                subito:"",
                variavel:"",
                frequencia:"",
                apito:"",
                cachoeira:"",
                panelaPressao:"",
                abelha:"",
                outros:"",
                outrosInput:"",
                pitch:"",
                itensidade:"",
                DificuldadeDormirzumbindo:"",
                algumTratamento:"",
                tratamentaQual:""

            },
            aparelho:{
                marca:"",
                modelo:"",
                tecnologia:"",
                canais:"",
                satisfeito:"",
                sonNatural:"",
                gostoAparelho:"",
                teveProblema:"",
                oqGostava:"",
                sus:"",
                particular:"",
                telefone:"",
                conversacao:"",
                radioMusica:"",
                televisao:"",
                vozMasculina:"",
                vozFeminina:"",
                localizaFoneSonora:"",
                palestraCultoEtc:"",
                trabalho:"",
                reunioes:"",
                almocoFamilia:"",
                outras:false,
                outrasInput:"",
                desconfortoSonsIntensos:"",
                importanteOuvirMelhor:"",
                aparelhoSeriaUtil:""
            },
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

    state = {
        teste:{},
        titulo:'Prontuário',
        options:[],
        anamnese:{
            paciente:{},
            principalQueixa:"",
            encaminhadoPor:"",
            nomeMedico:"",
            preferenciaManual:"",
            escolaridade:"",
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
                od:this.queixa(),
                oe:this.queixa()
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