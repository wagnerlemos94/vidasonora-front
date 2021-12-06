import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';
import Select from 'react-select';
import Comobirdades from './Comorbidades';
import Queixas from './Queixas';
import {MDBInputGroup} from 'mdbreact';
import AnamneseService from '../../app/service/AnamneseService';
import LocalStorageService from '../../app/service/localStorageService';
import Tontura from './Tontuara';
import Zumbindo from './Zumbindo';
import Util from '../../app/util/Util';
import Modal from '../Modal';
import Aparelho from './Aparelho';


class Anamnese extends React.Component{

    constructor(){
        super();
        this.service = new AnamneseService();
        this.util = new Util();
    }

    queixa = () => {

        return {
            perfuracaoTimpanica:"",
            otorreia:"",
            prurido:"",
            otite:""
        }
    }

    state = {    
        options: [],
        anamnese:{
            queixaPrincipal:"",
            solicitante:"",
            emcaminhadoPor:"",
            preferenciaManual:""

        },
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
            tonturaVertigem:"",
            Zumbindo:"",
            aparelhoAuditivo:"",
            aparelhoAuditivo:"",
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
            antencendentesFamiliarePerdaAuditivaDescricao:"",
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
            outrasDescricao:"",
            desconfortoSonsIntensos:"",
            importanteOuvirMelhor:"",
            aparelhoSeriaUtil:"",
            usoAASI:"1",
            sus_particular:{
                sus:"",
                particular:"",
            },
            maioresDificuldadeAuditivas:{
                outras:""
            }
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
        },
        pessoa:{
            nome:""
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
        const prontuario = LocalStorageService.obterItem('_usuario_prontuario');
        this.setState({
            pessoa:prontuario.pessoa
        });
    }

    preparaComorbidades(){
        let nomes = [];
        Object.values(this.state.comorbidades).map((valor,index) => {
            if(valor && valor != "outras"){
                nomes.push(valor);
            }
        });
        return nomes;
    }

    preparaQueixas(){
        const queixas = {
            nomes:[],
            ouvidoDireto:[],
            ouvidoEsquerdo:[]
        }
        let nomes = [];
        Object.values(this.state.queixas).map((valor,index) => {
            if(typeof(valor) == "string"){
                nomes.push(valor);
            }
        });
        queixas.nomes = nomes;

        nomes = [];
        Object.values(this.state.queixas.od).map((valor,index) => {
            nomes.push(valor);
        });
        queixas.ouvidoDireto = nomes;
        
        nomes = [];
        Object.values(this.state.queixas.oe).map((valor,index) => {
            nomes.push(valor);
        });
        queixas.ouvidoEsquerdo = nomes;
        return queixas;
    }

    preparaAparelho(){
        const aparelho = {
            nomes:[],
            maioresDificuldadeAuditivas:[],
            sus_particular:[]
        }
        let nomes = [];
        Object.values(this.state.aparelho).map((valor,index) => {
            if(typeof(valor) == "string" && valor != "" && valor != "outras"){
                nomes.push(valor);
            }
        });
        aparelho.nomes = nomes;

        nomes = [];
        Object.values(this.state.aparelho.maioresDificuldadeAuditivas).map((valor,index) => {
            nomes.push(valor);
        });
        aparelho.maioresDificuldadeAuditivas = nomes;

        nomes = [];
        Object.values(this.state.aparelho.sus_particular).map((valor,index) => {
            nomes.push(valor);
        });
        aparelho.sus_particular = nomes;

        return aparelho;
    }

    salvar = () => {
        const anamnese = new Object();
        anamnese.queixas = this.preparaQueixas();
        anamnese.comorbidades = this.preparaComorbidades();      
        anamnese.aparelho = this.preparaAparelho();
        console.log(anamnese.aparelho);return false;
        anamnese.tontura = this.state.tontura;
    }
    
    render(){
        return(            
            <Card title="Anamnese">
                <FormGroup htmlForm="cliente" label="Cliente:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0 disabled"
                        hint="Nome:"
                        size="sm"
                        value={this.state.pessoa.nome}                    
                    />  
                </FormGroup>
                <FormGroup htmlForm="queixaPrincipal" label="Queixa Principal:">
                    <input type="text" className="form-control" placeholder="Ex: Dificuldade de escultar"
                        onChange={e => this.setState({
                            ...this.state.anamnese.queixaPrincipal,
                            queixaPrincipal:e.target.value
                        })}
                        required
                        />
                </FormGroup>
                <div className="row">
                    <div className="col-5">
                        <FormGroup htmlForm="solicitante" label="Solicitante:">
                            <input type="text" className="form-control" placeholder="Ex: Dr. Daniel"
                                onChange={e => this.setState({
                                    ...this.state.anamnese.solicitante,
                                    solicitante:e.target.value
                                })}
                                required
                                />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup htmlForm="encaminhadoPor" label="Encaminhado por: ">
                            <Select options={this.state.options}     
                            onChange={e => this.setState({
                                ...this.state.anamnese.encaminhadoPor,
                                encaminhadoPor:e.label
                            })}
                                />
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup htmlForm="preferenciaManual" label="Preferência manual :">
                            <select className="form-control" defaultValue=""
                                onChange={e => this.setState({
                                    ...this.state.anamnese.preferenciaManual,
                                    preferenciaManual:e.target.value
                                })}                            
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
                    <Tontura tontura={this.state.tontura}/>
                </Modal>
                <Modal id="modalAparelho" tamanhoModal="modal-lg">
                    <Aparelho aparelho={this.state.aparelho} name={this.props.name}/>
                </Modal>
                <Modal id="modalZumbido" tamanhoModal="modal-xl">
                    <Zumbindo zumbido={this.state.zumbido} name={"teste"}/>
                </Modal>
                <div className="row">
                    <div className="col form-inline mb-4">
                        <button className="col btn btn-primary d-none" id="btnTontura" data-bs-toggle="modal" data-bs-target="#modalTontura">Tontura</button>
                        <button className="col btn btn-primary d-none" id="btnZumbido" data-bs-toggle="modal" data-bs-target="#modalZumbido">zumbido</button>
                        <button className="col btn btn-primary d-none" id="btnAparelhoAuditivo" data-bs-toggle="modal" data-bs-target="#modalAparelho">Aparelho</button>
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