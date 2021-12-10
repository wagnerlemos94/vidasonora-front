import { MDBInputGroup } from 'mdbreact';
import React from 'react';


export default class TonturaView extends React.Component{

    state = {
          
    }
    render(){
        return <div className="">
            {/* {console.log(this.state.tontura)} */}
                    <h5>Tontura:</h5>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-inline">
                                <label>inicio:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.inicio}
                                    /> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                                <label>ocorrencia:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.ocorrencia}
                                    /> 
                                </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                                <label>intencidade:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.intencidade}
                                    /> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                                <label>fatores Desecadeantes:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.fatoresDesecadeantes}
                                /> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                                <label>fatores Agravantes:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.fatoresAgravantes}
                                /> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                                <label>fatores Melhora:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.fatoresMelhora}
                                /> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                                <label>sintomas Concomitantes:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.sintomasConcomitantes}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-inline">
                                <label>outros Dados:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.outrosDados}
                                /> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-inline">
                                <label>tendencia Queda:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.tendenciaQueda}
                                /> 
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-inline">
                                <label>duracao  Crise:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.duracaoCrise}
                                /> 
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-inline">
                                <label>surge Ou Piora:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.surgeOuPiora}
                                /> 
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-inline">
                                <label>sensacao:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.sensacao}
                                /> 
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-inline">
                                <label>surge Piora:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.surgePiora}
                                /> 
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-inline">
                                <label>desvioMarcha:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.desvioMarcha}
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
    }
}