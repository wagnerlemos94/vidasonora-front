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
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Súbita
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Constante
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
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
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Leve
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Moderada
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Intensa
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Variável
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Estabilizada
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Aumentando
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
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
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Pouco frequente
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Frequente
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="radio" name={this.props.name} id={this.props.id+'1'} value="1" 
                                onChange={this.props.onChange}/>
                            <label className="form-check-label" htmlFor={this.props.name}>
                                Muito frequente
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Duracão das crises: ">
                <div className="row mx-1">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                            onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                            Tontura fora das crises
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                            onChange={e => this.props.queixas.plenitudeAuricular = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="plenitudeAuricular">
                            Sensação de que a crise de tontura vai ocorrer
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                            onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="tonturaVertigem">
                            Sensação de que os objetos giram ao seu redor
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="otorreia" 
                            onChange={e => this.props.queixas.otorreia = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="otorreia">
                            Sensação de girar no ambiente com os objetos estacionários
                        </label>
                    </div>
                </div>
                </FormGroup>
                <FormGroup label="Surge ou piora:">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                            onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                            Com movimento de cabeça
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                            onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="tonturaVertigem">
                            Em veículos em movimento
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="otorreia" 
                            onChange={e => this.props.queixas.otorreia = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="otorreia">
                            Ao olhar para o lado
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                            onChange={e => this.props.queixas.plenitudeAuricular = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="plenitudeAuricular">
                            Em determinada posição ou mudança de posição do corpo
                        </label>
                    </div>
                </FormGroup>
                <FormGroup label="Sensação:">
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="otorreia" 
                            onChange={e => this.props.queixas.otorreia = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="otorreia">
                            Sensação de que vai desmaiar
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                            onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="perfuracaoMembranaTimpanica">
                            Sensação de cabeça oca
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="otorreia" 
                            onChange={e => this.props.queixas.otorreia = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="otorreia">
                            Sensação de Flutuação
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                            onChange={e => this.props.queixas.plenitudeAuricular = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="plenitudeAuricular">
                            Desequilíbrio à marcha
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                            onChange={e => this.props.queixas.plenitudeAuricular = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="plenitudeAuricular">
                            Perda da consciência
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                            onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="perfuracaoMembranaTimpanica">
                            Pressão na cabeça
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                            onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                        />
                        <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                            Instabilidade
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                            onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="tonturaVertigem">
                            Palpitações
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                            onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="tonturaVertigem">
                            Oscilação
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                            onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="tonturaVertigem">
                            Sudorese
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                            onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="perfuracaoMembranaTimpanica">
                            Náuseas
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                            onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="tonturaVertigem">
                            Quedas
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="otorreia" 
                            onChange={e => this.props.queixas.otorreia = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="otorreia">
                            Palidez
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="plenitudeAuricular" 
                            onChange={e => this.props.queixas.plenitudeAuricular = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="plenitudeAuricular">
                            Vômito
                        </label>
                    </div>
                    <div className="form-check mr-2">
                        <input className="form-check-input" type="checkbox" id="otorreia" 
                            onChange={e => this.props.queixas.otorreia = e.target.checked}
                        />
                        <label className="form-check-label mr-2" htmlFor="otorreia">
                            Outros
                        </label>
                    </div>    
                </FormGroup>
                <FormGroup label="Sugere piora:">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                                onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                                Lugares altos
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="tonturaVertigem">
                                Lugares amplos
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                                onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                                Supermercados
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="tonturaVertigem">
                                Comerciais
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="tonturaVertigem">
                                Filas
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Tendência à queda:">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                                onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                                Direita
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="tonturaVertigem">
                                Esquerda
                            </label>
                        </div>
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                                onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                                Frente
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="tonturaVertigem">
                                trás
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup label="Desvio à marcha:">
                    <div className="row mx-1">
                        <div className="form-check mr-2">
                            <input className="form-check-input" type="checkbox" id="perfuracaoMembranaTimpanica" 
                                onChange={e => this.props.queixas.perfuracaoMembranaTimpanica = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="perfuracaoMembranaTimpanica">
                                Para a direita
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="tonturaVertigem" 
                                onChange={e => this.props.queixas.tonturaVertigem = e.target.checked}
                            />
                            <label className="form-check-label" htmlFor="tonturaVertigem">
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
                        onChange={e => this.props.comorbidades.inputOutras = e.target.value}
                    />
                    </FormGroup>
                <FormGroup label="Fatores agravantes:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.comorbidades.inputOutras = e.target.value}
                    />
                </FormGroup>
                <FormGroup label="Fatores de melhora:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.comorbidades.inputOutras = e.target.value}
                    />
                </FormGroup>
                <FormGroup label="Sintomas concomitantes:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.comorbidades.inputOutras = e.target.value}
                    />
                </FormGroup>
                <FormGroup label="Outros dados:">
                    <MDBInputGroup
                        material
                        containerClassName="mb-2 mt-0"
                        hint=""
                        size="sm"
                        onChange={e => this.props.comorbidades.inputOutras = e.target.value}
                    />
                </FormGroup>
            </Card>
        );
    }
}

export default Tontura;