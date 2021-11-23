import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import AnamneseRadioButton from './AnamneseRadioButton';
import Select from 'react-select';
import Comobirdades from './Comorbidades';
import Queixas from './Queixas';
import RadioButtonSimNao from './RadioButtonSimNao';
import {MDBInputGroup} from 'mdbreact';
import AnamneseService from '../../app/service/AnamneseService';
import Tontura from './Tontuara';
import Zumbindo from './Zumbindo';
import Util from '../../app/util/Util';
import Modal from '../Modal';
import Aparelho from './Aparelho';


class Anamnese extends React.Component{

    constructor(){
        super();
        this.service = new AnamneseService();
        this.util = new Util()        ;
    }

    queixa = () => {

        return {
            perfuracaoMembranaTimpanica:"",
            antencendentesFamiliarePerdaAuditivaInput:"",
            entiologiaPerdaAuditiva:"",
            historicoPerdaAuditiva:"",
            laudoAudiometria:"",
            otorreia:"",
            usoAASI:"",
            prurido:"",
            otite:"",
            usouAparelhoAudio:"",
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
        cssHidden:"d-none",
        historicoOutraDoencaInput:0, 
        acompanahmentoMedicoInput:0,
        options: [],
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
            plenitudeAuricular:"",
            tonturaVertigem:false,
            od:this.queixa(),
            oe:this.queixa()
        },zumbido:{
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
            antencendentesFamiliarePerdaAuditiva:"",
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
        }
    }

    exibirOcutar(id,click){
        const util = new Util();
        if(click){
            util.exibir(id);
        }else{
            util.ocultar(id);
        }
    }

    componentDidMount(){
        this.setState({options:this.service.retornarArrayEncaminhaPor()});
    }

    salvar = () => {
        const queixas = this.state.queixas;
        console.log(this.state.queixas.tonturaVertigem);
    }
    
    render(){
        return(            
            <Card title={"Anamnese"}>
                <FormGroup htmlForm="principalQueixa" label="Queixa Principal:">
                    <input type="text" className="form-control" placeholder="Ex: Dificuldade de escultar"
                        
                        required
                        />
                </FormGroup>
                <div className="row">
                    <div className="col-5">
                        <FormGroup htmlForm="nomeMedico" label="Solicitante:">
                            <input type="text" className="form-control" placeholder="Ex: Dr. Daniel"
                                
                                required
                                />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup htmlForm="encaminhadoPor" label="Encaminhado por: ">
                            <Select options={this.state.options}
                                
                                />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                            <select className="form-control" defaultValue=""
                                
                                required
                            >
                                <option value="" disabled>Selecione...</option>
                                <option value="DESTRA">DESTRA</option>
                                <option value="CANHOTA">CANHOTA</option>
                            </select>
                        </FormGroup>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col exibirOcutar">
                        <Comobirdades comorbidades={this.state.comorbidades}/>
                    </div>
                    <div className="col exibirOcutar">      
                        <Queixas name="esquerdo" queixas={this.state.queixas} exibirOcutar={this.exibirOcutar}/>
                    </div>
                </div>
                
                <Modal id="modalTontura" tamanhoModal="modal-xl">
                    <Tontura queixas={this.state.tontura}/>
                </Modal>
                <Modal id="modalAparelho" tamanhoModal="modal-xl">
                    <Aparelho aparelho={this.state.aparelho} name={this.props.name}/>
                </Modal>
                <Modal id="modalZumbido" tamanhoModal="modal-xl">
                    <Zumbindo zumbido={this.state.zumbido} name={"teste"}/>
                </Modal>
                <div className="row">
                    <div className="col form-inline mb-4">
                        {/* <button className="col btn btn-primary" id="comobirdade">Comobirdades</button>
                        <button className="col btn btn-primary" id="quixasAuditivas">QUEIXAS AUDITIVAS</button> */}
                        <button className="col btn btn-primary d-none" id="btnTontura" data-bs-toggle="modal" data-bs-target="#modalTontura">Tontura</button>
                        <button className="col btn btn-primary d-none" id="btnAparelhoAuditivo" data-bs-toggle="modal" data-bs-target="#modalAparelho">Aparelho</button>
                        <button className="col btn btn-primary d-none" id="btnZumbido" data-bs-toggle="modal" data-bs-target="#modalZumbido">zumbido</button>
                    </div>
                </div>
                <div className="col mt-2">
                    <div className="row">
                        {/* <div className="col">
                            <FormGroup className="row" htmlForm="acompanahmentoMedico" label="Está em acompanhamento médico?">
                                <RadioButtonSimNao className="ml-2" name="acompanahmentoMedico" 
                                id="acompanahmentoMedico"htmlForm="acompanahmentoMedico"/>
                            {(true)?(
                                <MDBInputGroup
                                className="col-7"
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Início e motivo:"
                                size="sm"
                                
                                />
                                ):(
                                    false)
                                }
                            </FormGroup>
                        </div> */}
                        {/* <div className="col-4">
                            <FormGroup className="row" htmlForm="historicoOutraDoenca" label="Historico de outras Doenças">
                                <RadioButtonSimNao className="ml-2" name="historicoOutraDoenca" 
                                id="historicoOutraDoenca"htmlForm="historicoOutraDoenca"/>
                            {true?(
                                <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint="Quais e quando:"
                                size="sm"
                                
                                />
                                ):(
                                    false)
                                }
                            </FormGroup>
                        </div> */}
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.salvar}>salvar</button>
            </Card>
        );
    }
}




export default Anamnese;