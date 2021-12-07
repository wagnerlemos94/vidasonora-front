import { MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';



class Tontura extends React.Component{
    render(){
        return(
            <Card title="Anamnese Tontura">
                 <div className="row">
                    <div className="col">
                        <FormGroup label="Inicío: ">
                            <div className="">
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="radio" name={"inicio"+this.props.name} id={this.props.id+'1'} value="Súbita" 
                                        onChange={e => this.props.tontura.inicio = e.target.value}/>
                                    <label className="form-check-label" htmlFor={this.props.name}>
                                        Súbita
                                    </label>
                                </div>
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="radio" name={"inicio"+this.props.name} id={this.props.id+'2'} value="Constante" 
                                        onChange={e => this.props.tontura.inicio = e.target.value}/>
                                    <label className="form-check-label" htmlFor={this.props.name}>
                                        Constante
                                    </label>
                                </div>
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="radio" name={"inicio"+this.props.name} id={this.props.id+'3'} value="Em crises" 
                                        onChange={e => this.props.tontura.inicio = e.target.value}/>
                                    <label className="form-check-label" htmlFor={this.props.name}>
                                        Em crises
                                    </label>
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                    <div className="col">
                    <FormGroup label="Ocorrência: ">
                        <div className="">
                            <div className="form-check mr-2">
                                <input className="form-check-input" type="radio" name={"ocorrencia"+this.props.name} id={this.props.id+'1'} value="Pouco frequente" 
                                    onChange={e => this.props.tontura.ocorrencia = e.target.value}/>
                                <label className="form-check-label" htmlFor={this.props.name}>
                                    Pouco frequente
                                </label>
                            </div>
                            <div className="form-check mr-2">
                                <input className="form-check-input" type="radio" name={"ocorrencia"+this.props.name} id={this.props.id+'2'} value="Frequente" 
                                    onChange={e => this.props.tontura.ocorrencia = e.target.value}/>
                                <label className="form-check-label" htmlFor={this.props.name}>
                                    Frequente
                                </label>
                            </div>
                            <div className="form-check mr-2">
                                <input className="form-check-input" type="radio" name={"ocorrencia"+this.props.name} id={this.props.id+'3'} value="Muito frequente" 
                                    onChange={e => this.props.tontura.ocorrencia = e.target.value}/>
                                <label className="form-check-label" htmlFor={this.props.name}>
                                    Muito frequente
                                </label>
                            </div>
                        </div>
                    </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup label="Intensidade: ">
                            <div className="row">
                                <div className="mr-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={"intencidade"+this.props.name} id={this.props.id+'7'} value="Diminuindo" 
                                            onChange={e => this.props.tontura.intensidade = e.target.value}/>
                                        <label className="form-check-label" htmlFor={this.props.name}>
                                            Diminuindo
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={"intencidade"+this.props.name} id={this.props.id+'2'} value="Moderada" 
                                            onChange={e => this.props.tontura.intensidade = e.target.value}/>
                                        <label className="form-check-label" htmlFor={this.props.name}>
                                            Moderada
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mr-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={"intencidade"+this.props.name} id={this.props.id+'3'} value="Intensa" 
                                            onChange={e => this.props.tontura.intensidade = e.target.value}/>
                                        <label className="form-check-label" htmlFor={this.props.name}>
                                            Intensa
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={"intencidade"+this.props.name} id={this.props.id+'4'} value="Variável" 
                                            onChange={e => this.props.tontura.intensidade = e.target.value}/>
                                        <label className="form-check-label" htmlFor={this.props.name}>
                                            Variável
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mr-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={"intencidade"+this.props.name} id={this.props.id+'5'} value="Estabilizada" 
                                            onChange={e => this.props.tontura.intensidade = e.target.value}/>
                                        <label className="form-check-label" htmlFor={this.props.name}>
                                            Estabilizada
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name={"intencidade"+this.props.name} id={this.props.id+'6'} value="Aumentando" 
                                        onChange={e => this.props.tontura.intensidade = e.target.value}/>
                                    <label className="form-check-label" htmlFor={this.props.name}>
                                        Aumentando
                                    </label>
                                </div>
                            </div>
                            <div className="row">  
                                <div className="">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name={"intencidade"+this.props.name} id={this.props.id+'1'} value="Leve" 
                                            onChange={e => this.props.tontura.intensidade = e.target.value}/>
                                        <label className="form-check-label" htmlFor={this.props.name}>
                                            Leve
                                        </label>
                                    </div>
                                </div>
                            </div>                            
                        </FormGroup>
                    </div>
                    <div className="col">
                        <FormGroup label="Tendência à queda:">
                            <div className="">
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="direita" value="Direita"
                                        onChange={e => this.props.tontura.tendenciaQueda.direita = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="direita">
                                        Direita
                                    </label>
                                </div>
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="esquerda" value="Esquerda"
                                        onChange={e => this.props.tontura.tendenciaQueda.esquerda = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="esquerda">
                                        Esquerda
                                    </label>
                                </div>
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="frente" value="Frente"
                                        onChange={e => this.props.tontura.tendenciaQueda.frente = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="frente">
                                        Frente
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="tras" value="Trás"
                                        onChange={e => this.props.tontura.tendenciaQueda.tras = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="tras">
                                        Trás
                                    </label>
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <FormGroup label="Duracão das crises: ">
                            <div className="row mx-1">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="tonturaForaCrise" value="Tontura fora das crises"
                                        onChange={e => this.props.tontura.duracaoCrise.tonturaForaCrise = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="tonturaForaCrise">
                                        Tontura fora das crises
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sensacaoCriseTonturaOcorrer" 
                                        value="Sensação de que a crise de tontura vai ocorrer"
                                        onChange={e => this.props.tontura.duracaoCrise.sensacaoCriseTonturaOcorrer = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="sensacaoCriseTonturaOcorrer">
                                        Sensação de que a crise de tontura vai ocorrer
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sensacaoObjetosGiraRedor" 
                                        value="Sensação de que os objetos giram ao seu redor"
                                        onChange={e => this.props.tontura.duracaoCrise.sensacaoObjetosGiraRedor = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="sensacaoObjetosGiraRedor">
                                        Sensação de que os objetos giram ao seu redor
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="sensacaoGirarAmbienteObjetosEstacionados" 
                                        value="Sensação de girar no ambiente com os objetos estacionários"
                                        onChange={e => this.props.tontura.duracaoCrise.sensacaoGirarAmbienteObjetosEstacionados = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="sensacaoGirarAmbienteObjetosEstacionados">
                                        Sensação de girar no ambiente com os objetos estacionários
                                    </label>
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup label="Surge ou piora:">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="moviventoCabeca" value="Com movimento de cabeça"
                                    onChange={e => this.props.tontura.surgeOuPiora.moviventoCabeca = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="moviventoCabeca">
                                    Com movimento de cabeça
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="veiculoMovimento" value="Em veículos em movimento"
                                    onChange={e => this.props.tontura.surgeOuPiora.veiculoMovimento = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="veiculoMovimento">
                                    Em veículos em movimento
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="olharLado" value="Ao olhar para o lado"
                                    onChange={e => this.props.tontura.surgeOuPiora.olharLado = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="olharLado">
                                    Ao olhar para o lado
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="determinadaPosicaoCorpo" value="Em determinada posição ou mudança de posição do corpo"
                                    value="Em determinada posição ou mudança de posição do corpo"
                                    onChange={e => this.props.tontura.surgeOuPiora.determinadaPosicaoCorpo = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="determinadaPosicaoCorpo">
                                    Em determinada posição ou mudança de posição do corpo
                                </label>
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <FormGroup label="Sensação:">
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="sensacaoDesmaiar" value="Sensação de que vai desmaiar"
                                    onChange={e => this.props.tontura.sensacao.sensacaoDesmaiar = e.target.value}
                                    />
                                <label className="form-check-label" htmlFor="sensacaoDesmaiar">
                                    Sensação de que vai desmaiar
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="sensacaoFlutuacao" value="Sensação de Flutuação"
                                    onChange={e => this.props.tontura.sensacao.sensacaoFlutuacao = e.target.value}
                                    />
                                <label className="form-check-label" htmlFor="sensacaoFlutuacao">
                                    Sensação de Flutuação
                                </label>
                            </div>
                        </div>                       
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="sensacaoCabecaOca" value="Sensação de cabeça oca"
                                    onChange={e => this.props.tontura.sensacao.sensacaoCabecaOca = e.target.value}
                                    />
                                <label className="form-check-label" htmlFor="sensacaoCabecaOca">
                                    Sensação de cabeça oca
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="desequilibioMarcha" value="Desequilíbrio à marcha"
                                    onChange={e => this.props.tontura.sensacao.desequilibioMarcha = e.target.value}
                                    />
                                <label className="form-check-label" htmlFor="desequilibioMarcha">
                                    Desequilíbrio à marcha
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="perdaConciencia" value="Perda da consciência"
                                    onChange={e => this.props.tontura.sensacao.perdaConciencia = e.target.value}
                                    />
                                <label className="form-check-label" htmlFor="perdaConciencia">
                                    Perda da consciência
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="pressaoCabeca" value="Pressão na cabeça"
                                    onChange={e => this.props.tontura.sensacao.pressaoCabeca = e.target.value}
                                    />
                                <label className="form-check-label" htmlFor="pressaoCabeca">
                                    Pressão na cabeça
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="instabilidade" value="Instabilidade"
                                    onChange={e => this.props.tontura.sensacao.instabilidade = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="instabilidade">
                                    Instabilidade
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="palpitacoes" value="Palpitações"
                                    onChange={e => this.props.tontura.sensacao.palpitacoes = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="palpitacoes">
                                    Palpitações
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="oscilacao" value="Oscilação"
                                    onChange={e => this.props.tontura.sensacao.oscilacao = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="oscilacao">
                                    Oscilação
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="sudorese" value="Sudorese"
                                    onChange={e => this.props.tontura.sensacao.sudorese = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="sudorese">
                                    Sudorese
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="nauseas" value="Náuseas"
                                    onChange={e => this.props.tontura.sensacao.nauseas = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="nauseas">
                                    Náuseas
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="quedas" value="Quedas"
                                    onChange={e => this.props.tontura.sensacao.quedas = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="quedas">
                                    Quedas
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="palidez" value="Palidez"
                                    onChange={e => this.props.tontura.sensacao.palidez = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="palidez">
                                    Palidez
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="vomito" value="Vômito"
                                    onChange={e => this.props.tontura.sensacao.vomito = e.target.value}
                                />
                                <label className="form-check-label" htmlFor="vomito">
                                    Vômito
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="outros" value="Outros"
                            onChange={e => this.props.tontura.sensacao.outros = e.target.value}
                        />
                        <label className="form-check-label" htmlFor="outros">
                            Outros
                        </label>
                    </div>    
                </FormGroup>
                <div className="row">
                    <div className="col">
                        <FormGroup label="Sugere piora:">
                            <div className="">
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="lugaresAltos" value="Lugares altos"
                                        onChange={e => this.props.tontura.surgePiora.lugaresAltos = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="lugaresAltos">
                                        Lugares altos
                                    </label>
                                </div>
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="lugaresAmplos" value="Lugares amplos"
                                        onChange={e => this.props.tontura.surgePiora.lugaresAmplos = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="lugaresAmplos">
                                        Lugares amplos
                                    </label>
                                </div>
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="supermercados" value="Supermercados"
                                        onChange={e => this.props.tontura.surgePiora.supermercados = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="supermercados">
                                        Supermercados
                                    </label>
                                </div>
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="comerciais" value="Comerciais"
                                        onChange={e => this.props.tontura.surgePiora.comerciais = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="comerciais">
                                        Comerciais
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="filas" value="Filas"
                                        onChange={e => this.props.tontura.surgePiora.filas = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="filas">
                                        Filas
                                    </label>
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                    <div className="col">
                    
                        <FormGroup label="Desvio à marcha:">
                            <div className="">
                                <div className="form-check mr-2">
                                    <input className="form-check-input" type="checkbox" id="direita" value="Para a direita"
                                        onChange={e => this.props.tontura.desvioMarcha.direita = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="direita">
                                        Para a direita
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="esquerda" value="Para a esquerda"
                                        onChange={e => this.props.tontura.desvioMarcha.esquerda = e.target.value}
                                    />
                                    <label className="form-check-label" htmlFor="esquerda">
                                        Para a esquerda
                                    </label>
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <FormGroup label="Fatores desencadeantes:">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint=""
                                size="sm"
                                onChange={e => this.props.tontura.fatoresDesencadeantes = e.target.value}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup label="Fatores agravantes:">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint=""
                                size="sm"
                                onChange={e => this.props.tontura.fatoresAgravantes = e.target.value}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup label="Fatores de melhora:">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint=""
                                size="sm"
                                onChange={e => this.props.tontura.fatoresMelhora = e.target.value}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-6">
                        <FormGroup label="Sintomas concomitantes:">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint=""
                                size="sm"
                                onChange={e => this.props.tontura.sintomasConcomitantes = e.target.value}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-12">
                        <FormGroup label="Outros dados:">
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0"
                                hint=""
                                size="sm"
                                onChange={e => this.props.tontura.outrosDados = e.target.value}
                            />
                        </FormGroup>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Tontura;