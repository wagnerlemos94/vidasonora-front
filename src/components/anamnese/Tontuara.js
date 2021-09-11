import { MDBInputGroup } from 'mdbreact';
import React from 'react';
import Card from '../Card';
import FormGroup from '../FormGroup';



class Tontura extends React.Component{
    render(){
        return(
            <Card title="Anamnese Tontura">
                <FormGroup label="Inicío: ">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={e => this.props.queixas.tontura.inicio = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Súbita
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'2'} value="2" 
                                onChange={e => this.props.queixas.tontura.inicio = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Constante
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'3'} value="3" 
                                onChange={e => this.props.queixas.tontura.inicio = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Em crises
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Intensidade: ">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={e => this.props.queixas.tontura.intensidade = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Leve
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'2'} value="2" 
                                onChange={e => this.props.queixas.tontura.intensidade = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Moderada
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'3'} value="3" 
                                onChange={e => this.props.queixas.tontura.intensidade = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Intensa
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'4'} value="4" 
                                onChange={e => this.props.queixas.tontura.intensidade = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Variável
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'5'} value="5" 
                                onChange={e => this.props.queixas.tontura.intensidade = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Estabilizada
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'6'} value="6" 
                                onChange={e => this.props.queixas.tontura.intensidade = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Aumentando
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'7'} value="7" 
                                onChange={e => this.props.queixas.tontura.intensidade = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Diminuindo
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Ocorrência: ">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={e => this.props.queixas.tontura.ocorrencia = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Pouco frequente
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'2'} value="2" 
                                onChange={e => this.props.queixas.tontura.ocorrencia = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Frequente
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'3'} value="3" 
                                onChange={e => this.props.queixas.tontura.ocorrencia = e.target.value}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Muito frequente
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Duracão das crises: ">
                <div className="row mx-1">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="tonturaForaCrise" 
                            onChange={e => this.props.queixas.tontura.duracaoCrise.tonturaForaCrise = e.target.value}
                        />
                        <label className="form-check-label" htmlFor="tonturaForaCrise">
                            Tontura fora das crises
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="sensacaoCriseTonturaOcorrer" 
                            onChange={e => this.props.queixas.tontura.duracaoCrise.sensacaoCriseTonturaOcorrer = e.target.value}
                        />
                        <label className="form-check-label" htmlFor="sensacaoCriseTonturaOcorrer">
                            Sensação de que a crise de tontura vai ocorrer
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="sensacaoObjetosGiraRedor" 
                            onChange={e => this.props.queixas.tontura.duracaoCrise.sensacaoObjetosGiraRedor = e.target.value}
                        />
                        <label className="form-check-label" htmlFor="sensacaoObjetosGiraRedor">
                            Sensação de que os objetos giram ao seu redor
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="sensacaoGirarAmbienteObjetosEstacionados" 
                            onChange={e => this.props.queixas.tontura.duracaoCrise.sensacaoGirarAmbienteObjetosEstacionados = e.target.value}
                        />
                        <label className="form-check-label" htmlFor="sensacaoGirarAmbienteObjetosEstacionados">
                        Sensação de girar no ambiente com os objetos estacionários
                        </label>
                    </div>
                </div>
                </FormGroup>
                <FormGroup label="Surge ou piora:">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="moviventoCabeca" 
                            onChange={e => this.props.queixas.tontura.surgeOuPiora.moviventoCabeca = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="moviventoCabeca">
                            Com movimento de cabeça
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="veiculoMovimento" 
                            onChange={e => this.props.queixas.tontura.surgeOuPiora.veiculoMovimento = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="veiculoMovimento">
                            Em veículos em movimento
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="olharLado" 
                            onChange={e => this.props.queixas.tontura.surgeOuPiora.olharLado = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="olharLado">
                            Ao olhar para o lado
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="determinadaPosicaoCorpo" 
                            onChange={e => this.props.queixas.tontura.surgeOuPiora.determinadaPosicaoCorpo = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="determinadaPosicaoCorpo">
                            Em determinada posição ou mudança de posição do corpo
                        </label>
                    </div>
                </FormGroup>
                <FormGroup label="Sensação:">
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="sensacaoDesmaiar" 
                            onChange={e => this.props.queixas.tontura.sensacao.sensacaoDesmaiar = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="sensacaoDesmaiar">
                            Sensação de que vai desmaiar
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="sensacaoCabecaOca" 
                            onChange={e => this.props.queixas.tontura.sensacao.sensacaoCabecaOca = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="sensacaoCabecaOca">
                            Sensação de cabeça oca
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="sensacaoFlutuacao" 
                            onChange={e => this.props.queixas.tontura.sensacao.sensacaoFlutuacao = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="sensacaoFlutuacao">
                            Sensação de Flutuação
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="desequilibioMarcha" 
                            onChange={e => this.props.queixas.tontura.sensacao.desequilibioMarcha = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="desequilibioMarcha">
                            Desequilíbrio à marcha
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="perdaConciencia" 
                            onChange={e => this.props.queixas.tontura.sensacao.perdaConciencia = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="perdaConciencia">
                            Perda da consciência
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="pressaoCabeca" 
                            onChange={e => this.props.queixas.tontura.sensacao.pressaoCabeca = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="pressaoCabeca">
                            Pressão na cabeça
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="instabilidade" 
                            onChange={e => this.props.queixas.tontura.sensacao.instabilidade = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="instabilidade">
                            Instabilidade
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="palpitacoes" 
                            onChange={e => this.props.queixas.tontura.sensacao.palpitacoes = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="palpitacoes">
                            Palpitações
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="oscilacao" 
                            onChange={e => this.props.queixas.tontura.sensacao.oscilacao = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="oscilacao">
                            Oscilação
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="sudorese" 
                            onChange={e => this.props.queixas.tontura.sensacao.sudorese = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="sudorese">
                            Sudorese
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="nauseas" 
                            onChange={e => this.props.queixas.tontura.sensacao.nauseas = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="nauseas">
                            Náuseas
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="quedas" 
                            onChange={e => this.props.queixas.tontura.sensacao.quedas = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="quedas">
                            Quedas
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="palidez" 
                            onChange={e => this.props.queixas.tontura.sensacao.palidez = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="palidez">
                            Palidez
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="vomito" 
                            onChange={e => this.props.queixas.tontura.sensacao.vomito = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="vomito">
                            Vômito
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="outros" 
                            onChange={e => this.props.queixas.tontura.sensacao.outros = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="outros">
                            Outros
                        </label>
                    </div>    
                </FormGroup>
                <FormGroup label="Sugere piora:">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="lugaresAltos" 
                                onChange={e => this.props.queixas.tontura.surgeOuPiora.lugaresAltos = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="lugaresAltos">
                                Lugares altos
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="lugaresAmplos" 
                                onChange={e => this.props.queixas.tontura.surgeOuPiora.lugaresAmplos = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="lugaresAmplos">
                                Lugares amplos
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="supermercados" 
                                onChange={e => this.props.queixas.tontura.surgeOuPiora.supermercados = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="supermercados">
                                Supermercados
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="comerciais" 
                                onChange={e => this.props.queixas.tontura.surgeOuPiora.comerciais = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="comerciais">
                                Comerciais
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="filas" 
                                onChange={e => this.props.queixas.tontura.surgeOuPiora.filas = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="filas">
                                Filas
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Tendência à queda:">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="direita" 
                                onChange={e => this.props.queixas.tontura.tendenciaQueda.direita = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="direita">
                                Direita
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="esquerda" 
                                onChange={e => this.props.queixas.tontura.tendenciaQueda.esquerda = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="esquerda">
                                Esquerda
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="frente" 
                                onChange={e => this.props.queixas.tontura.tendenciaQueda.frente = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="frente">
                                Frente
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="tras" 
                                onChange={e => this.props.queixas.tontura.tendenciaQueda.tras = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="tras">
                                trás
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Desvio à marcha:">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="direita" 
                                onChange={e => this.props.queixas.tontura.devioMarcha.direita = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="direita">
                                Para a direita
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="esquerda" 
                                onChange={e => this.props.queixas.tontura.devioMarcha.esquerda = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="esquerda">
                                Para a esquerda
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Fatores desencadeantes:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.queixas.tontura.fatoresDesencadeantes = e.target.value}
                    />
                    </FormGroup>
                <FormGroup label="Fatores agravantes:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.queixas.tontura.fatoresAgravantes = e.target.value}
                    />
                </FormGroup>
                <FormGroup label="Fatores de melhora:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.queixas.tontura.fatoresMelhora = e.target.value}
                    />
                </FormGroup>
                <FormGroup label="Sintomas concomitantes:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.queixas.tontura.sintomasConcomitantes = e.target.value}
                    />
                </FormGroup>
                <FormGroup label="Outros dados:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.queixas.tontura.outrosDados = e.target.value}
                    />
                </FormGroup>
            </Card>
        );
    }
}

export default Tontura;