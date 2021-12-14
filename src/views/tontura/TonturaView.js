import { MDBInputGroup } from 'mdbreact';
import React from 'react';


export default class TonturaView extends React.Component{

    state = {
          
    }
    render(){
        return <div className="">
                    <h5 className={this.props.tontura.inicio === "" ? "form-inline d-none" : "form-inline"}>Tontura:</h5>
                    <div className="row">
                        <div className="col-6">
                            <div className={this.props.tontura.inicio === "" ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.ocorrencia === "" ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.intensidade === "" ? "form-inline d-none" : "form-inline"}>
                                <label>intensidade:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.intensidade}
                                    /> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={this.props.tontura.fatoresDesencadeantes === "" ? "form-inline d-none" : "form-inline"}>
                                <label>fatores Desencadeantes:</label>
                                <MDBInputGroup
                                    material
                                    containerClassName="col disabled"
                                    hint="Nome:"
                                    size="sm"
                                    value={this.props.tontura.fatoresDesencadeantes}
                                /> 
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={this.props.tontura.fatoresAgravantes === "" ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.fatoresMelhora === "" ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.sintomasConcomitantes === "" ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.outrosDados === "" ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.tendenciaQueda.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.duracaoCrise.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.surgeOuPiora.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.sensacao.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.surgePiora.length === 0 ? "form-inline d-none" : "form-inline"}>
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
                            <div className={this.props.tontura.desvioMarcha.length === 0 ? "form-inline d-none" : "form-inline"}>
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