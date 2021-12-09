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
                        <div className="col-3">
                            <label>inicio:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.inicio}
                                /> 
                        </div>
                        <div className="col-3">
                            <label>ocorrencia:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.ocorrencia}
                                /> 
                        </div>
                        <div className="col-3">
                            <label>intencidade:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.intencidade}
                                /> 
                        </div>
                        <div className="col-3">
                            <label>fatores Desecadeantes:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.fatoresDesecadeantes}
                                /> 
                        </div>
                        <div className="col-3">
                            <label>fatores Agravantes:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.fatoresAgravantes}
                                /> 
                        </div>
                        <div className="col-3">
                            <label>fatores Melhora:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.fatoresMelhora}
                                /> 
                        </div>
                        <div className="col-3">
                            <label>sintomas Concomitantes:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.sintomasConcomitantes}
                                /> 
                        </div>
                        <div className="col-3">
                            <label>outros Dados:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.outrosDados}
                                /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label>tendencia Queda:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.tendenciaQueda}
                                /> 
                        </div>
                        <div className="col-12">
                            <label>duracao  Crise:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.duracaoCrise}
                                /> 
                        </div>
                        <div className="col-12">
                            <label>surge Ou Piora:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.surgeOuPiora}
                                /> 
                        </div>
                        <div className="col-12">
                            <label>sensacao:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.sensacao}
                                /> 
                        </div>
                        <div className="col-12">
                            <label>surge Piora:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.surgePiora}
                                /> 
                        </div>
                        <div className="col-12">
                            <label>desvioMarcha:</label>
                            <MDBInputGroup
                                material
                                containerClassName="mb-2 mt-0 disabled"
                                hint="Nome:"
                                size="sm"
                                value={this.props.tontura.desvioMarcha}
                                /> 
                        </div>
                    </div>
                </div>
    }
}