import { MDBInputGroup } from 'mdbreact';
import React from 'react';

export default function ZumbidoView(props){
    return <div className="">
                <h5>Zumbido:</h5>
                <div className="row">
                    <div className="col-3">
                        <label>inicio:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.inicio}
                            /> 
                    </div>
                    <div className="col-3">
                        <label>ocorrencia:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.ocorrencia}
                            /> 
                    </div>
                    <div className="col-3">
                        <label>intencidade:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.intencidade}
                            /> 
                    </div>
                    <div className="col-3">
                        <label>fatores Desecadeantes:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.fatoresDesecadeantes}
                            /> 
                    </div>
                    <div className="col-3">
                        <label>fatores Agravantes:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.fatoresAgravantes}
                            /> 
                    </div>
                    <div className="col-3">
                        <label>fatores Melhora:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.fatoresMelhora}
                            /> 
                    </div>
                    <div className="col-3">
                        <label>sintomas Concomitantes:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.sintomasConcomitantes}
                            /> 
                    </div>
                    <div className="col-3">
                        <label>outros Dados:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.outrosDados}
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
                            value={props.zumbido.tendenciaQueda}
                            /> 
                    </div>
                    <div className="col-12">
                        <label>duracao  Crise:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.duracaoCrise}
                            /> 
                    </div>
                    <div className="col-12">
                        <label>surge Ou Piora:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.surgeOuPiora}
                            /> 
                    </div>
                    <div className="col-12">
                        <label>sensacao:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.sensacao}
                            /> 
                    </div>
                    <div className="col-12">
                        <label>surge Piora:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.surgePiora}
                            /> 
                    </div>
                    <div className="col-12">
                        <label>desvioMarcha:</label>
                        <MDBInputGroup
                            material
                            containerClassName="mb-2 mt-0 disabled"
                            hint="Nome:"
                            size="sm"
                            value={props.zumbido.desvioMarcha}
                            /> 
                    </div>
                </div>
            </div>
}