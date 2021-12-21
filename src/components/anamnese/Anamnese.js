import React from 'react';
import Card from '../Card';
import Select from 'react-select';
import Comobirdades from './Comorbidades';
import Queixas from './Queixas';
import {MDBInputGroup} from 'mdbreact';
import AnamneseService from '../../app/service/AnamneseService';
import LocalStorageService from '../../app/service/localStorageService';
import Tontura from './Tontuara';
import Zumbido from './Zumbido';
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
            encaminhadoPor:"",
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
            tipo:{
                continuo:"",
                pulsatil:"",
                subito:"",
                variavel:"",
                emCrise:""
            },
            comQueParece:{
                panelaPressao:"",
                cachoeira:"",
                apito:"",
                chiado:"",
                abelha:"",
                outros:"",
            },
            intensidade:"",
            frequencia:"",
            dificuldadeDormir:"",
            algumTratamento:"",
            pitch:"",
            observacao:""
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
            surgePiora:{
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
            desvioMarcha:{
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

    sweetalert = () =>{
        const Swal = require('sweetalert2'); 
        Swal.fire({
            title: 'Sucesso!',
            text: 'Anamnese cadastrada com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok',
            customClass: {
                confirmButton: 'btn btn-sm btn-primary',
              }
          }).then(result => {
            if(result.isConfirmed){
                this.props.history.push('/lista-pessoa');
            }
          });
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
        const comorbidades = {
            nomes:[]
        }
        let nomes = [];
        Object.values(this.state.comorbidades).map((valor,index) => {
            if(valor && valor != "outras"){
                nomes.push(valor);
            }
        });
        comorbidades.nomes = nomes;

        return comorbidades;
    }

    preparaQueixas(){
        const queixas = {
            nomes:[],
            ouvidoDireito:[],
            ouvidoEsquerdo:[]
        }
        let nomes = [];
        Object.values(this.state.queixas).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        queixas.nomes = nomes;

        nomes = [];
        Object.values(this.state.queixas.od).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        queixas.ouvidoDireito = nomes;
        
        nomes = [];
        Object.values(this.state.queixas.oe).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        queixas.ouvidoEsquerdo = nomes;
        return queixas;
    }

    preparaAparelho(){
        const aparelho = {
            perda_auditiva:this.state.aparelho.historicoPerdaAuditiva,
            ducaracaoCrice:this.state.aparelho.ducaracaoCrice,
            familiaresPerdaAuditiva:this.state.aparelho.antencendentesFamiliarePerdaAuditiva,
            desconfortoSonsIntensos:this.state.aparelho.desconfortoSonsIntensos,
            laudoAudiometria:this.state.aparelho.laudoAudiometria,
            etilogiaPerdaAuditiva:this.state.aparelho.etilogiaPerdaAuditiva,
            satisfeitoAparelho:this.state.aparelho.satisfeitoAparelho,
            somNatural:this.state.aparelho.somNatural,
            doQueNaoGostavaAparelho:this.state.aparelho.doQueNaoGostavaAparelho,
            jaTeveProblemas:this.state.aparelho.jaTeveProblemas,
            doQueGostava:this.state.aparelho.doQueGostava,
            importandeOuvirMelhor:this.state.aparelho.importandeOuvirMelhor,
            porQueAchaUsoAparelhoSeriaUtil:this.state.aparelho.porQueAchaUsoAparelhoSeriaUtil,
            observacao:this.state.aparelho.observacao,
            nomes:[],
            maioresDificuldadeAuditivas:[],
            sus_particular:[]
        }
        let nomes = [];
        Object.values(this.state.aparelho).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        aparelho.nomes = nomes;

        nomes = [];
        Object.values(this.state.aparelho.maioresDificuldadeAuditivas).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        aparelho.maioresDificuldadeAuditivas = nomes;

        nomes = [];
        Object.values(this.state.aparelho.sus_particular).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        aparelho.sus_particular = nomes;

        return aparelho;
    }

    preparaTontura(){

        const tontura = {
            inicio:this.state.tontura.inicio,
            intensidade:this.state.tontura.intensidade,
            ocorrencia:this.state.tontura.ocorrencia,
            fatoresDesencadeantes:this.state.tontura.fatoresDesencadeantes,
            fatoresAgravantes:this.state.tontura.fatoresAgravantes,
            fatoresMelhora:this.state.tontura.fatoresMelhora,
            sintomasConcomitantes:this.state.tontura.sintomasConcomitantes,
            outrosDados:this.state.tontura.outrosDados,
            nomes:[],
            tendenciaQueda:[],
            duracaoCrise:[],
            surgeOuPiora:[],
            sensacao:[],
            surgePiora:[],
            desvioMarcha:[]
        }

        let nomes = [];
        Object.values(this.state.tontura.tendenciaQueda).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        tontura.tendenciaQueda = nomes;

        nomes = [];
        Object.values(this.state.tontura.duracaoCrise).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        tontura.duracaoCrise = nomes;

        nomes = [];
        Object.values(this.state.tontura.surgeOuPiora).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        tontura.surgeOuPiora = nomes;

        nomes = [];
        Object.values(this.state.tontura.sensacao).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        tontura.sensacao = nomes;

        nomes = [];
        Object.values(this.state.tontura.surgePiora).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        tontura.surgePiora = nomes;

        nomes = [];
        Object.values(this.state.tontura.desvioMarcha).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        tontura.desvioMarcha = nomes;

        return tontura;
    }

    preparaZumbido(){

        const zumbido = {
            dificuldadeDormir:this.state.zumbido.dificuldadeDormir,
            algumTratamento:this.state.zumbido.algumTratamento,
            observacao:this.state.zumbido.observacao,
            intensidade:this.state.zumbido.intensidade,
            pitch:this.state.zumbido.pitch,
            frequencia:this.state.zumbido.frequencia,
            tipo:[],
            comQueParece:[]
        }

        let nomes = [];
        Object.values(this.state.zumbido.tipo).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        zumbido.tipo = nomes;

        nomes = [];
        Object.values(this.state.zumbido.comQueParece).map((valor,index) => {
            if(typeof(valor) == "string" && valor !== "" && valor !== "outras"){
                nomes.push(valor);
            }
        });
        zumbido.comQueParece = nomes;

        return zumbido;
    }

    preparaAnamnese(){
        let anamnese = new Object();
        anamnese.queixaPrincipal = this.state.anamnese.queixaPrincipal;
        anamnese.solicitante = this.state.anamnese.solicitante;
        anamnese.encaminhadoPor = this.state.anamnese.encaminhadoPor;
        anamnese.preferenciaManual = this.state.anamnese.preferenciaManual;
        anamnese.queixasAuditiva = this.preparaQueixas();
        anamnese.comorbidade = this.preparaComorbidades();      
        anamnese.aparelho = this.preparaAparelho();
        anamnese.tontura = this.preparaTontura();
        anamnese.zumbido = this.preparaZumbido();
        anamnese.pessoa = this.state.pessoa;
        return anamnese;
    }

    salvar = () => {
        let anamnese = this.preparaAnamnese();
        this.service.salvar(anamnese).then(response => {
            this.sweetalert();
        }).catch(error => {
            console.log(error);
        });
    }
    
    render(){
        return(            
            <Card title="Anamnese">
                <form onSubmit={this.salvar}>
                    <div className="form-inline">
                        <label>Paciente:</label>
                        <MDBInputGroup
                            material
                            containerClassName="col disabled"
                            hint="Nome:"
                            size="sm"
                            value={this.state.pessoa.nome}                    
                        />  
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-inline">
                            <label>Queixa Principal:</label>
                            <input type="text" className="col form-control" placeholder="Ex: Dificuldade de escultar"
                                onChange={e => this.setState({
                                    ...this.state.anamnese.queixaPrincipal = e.target.value
                                })}
                                required
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                            <label>Solicitante:</label>
                                <input type="text" className="col form-control" placeholder="Ex: Dr. Daniel"
                                    onChange={e => this.setState({
                                        ...this.state.anamnese.solicitante = e.target.value
                                    })}
                                    required
                                    />
                            </div>
                        </div>
                        <div className="col-6 mt-4">
                            <div className="form-inline">
                            <label>Encaminhado por: :</label>
                                    <Select className="col" options={this.state.options}     
                                    onChange={e => this.setState({
                                        ...this.state.anamnese.encaminhadoPor = e.label
                                })}
                                required
                                    />
                            </div>
                        </div>
                        <div className="col-6 mt-4">
                            <div className="form-inline">
                                <label>Preferência manual :</label>
                                <select className="col form-control" defaultValue=""
                                    onChange={e => this.setState({
                                        ...this.state.anamnese.preferenciaManual = e.target.value
                                    })}                            
                                    required
                                >
                                    <option value="" disabled>Selecione...</option>
                                    <option value="DESTRA">DESTRA</option>
                                    <option value="CANHOTA">CANHOTA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-4">
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
                        <Zumbido zumbido={this.state.zumbido} name={"teste"}/>
                    </Modal>
                    <div className="row">
                        <div className="col form-inline mb-4">
                            <button type="button" className="col btn btn-primary d-none" id="btnTontura" data-bs-toggle="modal" data-bs-target="#modalTontura">Tontura</button>
                            <button type="button" className="col btn btn-primary d-none" id="btnZumbido" data-bs-toggle="modal" data-bs-target="#modalZumbido">zumbido</button>
                            <button type="button" className="col btn btn-primary d-none" id="btnAparelhoAuditivo" data-bs-toggle="modal" data-bs-target="#modalAparelho">Aparelho</button>
                        </div>
                    </div>
                
                    <button type="submit" className="btn btn-primary">salvar</button>
                </form>
            </Card>
        );
    }
}




export default Anamnese;