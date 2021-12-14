import { MDBInputGroup } from 'mdbreact';
import React from 'react';

export default function ZumbidoView(props){
    return <div className="">
                <h5 className={props.zumbido.dificuldadeDormir === "" ? "form-inline d-none" : "form-inline"}>Zumbido:</h5>
                <div className="row">
                    <div className="col-6">
                        <div className={props.zumbido.dificuldadeDormir === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Dificuldade Dormir:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.dificuldadeDormir}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.zumbido.algumTratamento === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Algum Tratamento:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.algumTratamento}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.zumbido.observacao === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Observação:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.observacao}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.zumbido.comQueParece.length === 0 ? "form-inline d-none" : "form-inline"}>
                            <label>Com Que Parece:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.comQueParece}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.zumbido.tipo.length === 0 ? "form-inline d-none" : "form-inline"}>
                            <label>Tipo:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.tipo}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.zumbido.intensidade === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Intensidade:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.intensidade}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.zumbido.frequencia === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Frequencia:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.frequencia}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.zumbido.pitch === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Pitch:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.zumbido.pitch}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
}