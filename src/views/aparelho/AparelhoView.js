import { MDBInputGroup } from 'mdbreact';
import React from 'react';

export default function AparelhoView(props){
    return <div className="">
                <h5 className={props.aparelho.perda_auditiva === null ? "d-none" : ""}>Aparelho:</h5>
                <div className="row">
                    <div className="col-6">
                        <div className={props.aparelho.perda_auditiva === null ? "form-inline d-none" : "form-inline"}>
                            <label>Perda Auditiva:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.perda_auditiva}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.familiaresPerdaAuditiva === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Familiares Perda Auditiva:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.familiaresPerdaAuditiva}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.desconfortoSonsIntensos === "" ? "form-inline d-none" : "form-inline"}>
                            <label>Desconforto Sons Intensos:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.desconfortoSonsIntensos}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.sus_particular.length === 0 ? "form-inline d-none" : "form-inline"}>
                            <label>Sus/Particular:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.sus_particular}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.maioresDificuldadeAuditivas.length === 0 ? "form-inline d-none" : "form-inline"}>
                            <label>Maiores Dificuldade Auditivas:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.maioresDificuldadeAuditivas}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.laudoAudiometria === null ? "form-inline d-none" : "form-inline"}>
                            <label>Laudo Audiometria:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.laudoAudiometria}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.etilogiaPerdaAuditiva === null ? "form-inline d-none" : "form-inline"}>
                            <label>Etilogia Perda Auditiva:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.etilogiaPerdaAuditiva}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.satisfeitoAparelho === null ? "form-inline d-none" : "form-inline"}>
                            <label>Satisfeito com Aparelho:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.satisfeitoAparelho}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.somNatural === null ? "form-inline d-none" : "form-inline"}>
                            <label>Som Natural:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.somNatural}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.doQueNaoGostavaAparelho === null ? "form-inline d-none" : "form-inline"}>
                            <label>Do Que Não Gostava do Aparelho:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.doQueNaoGostavaAparelho}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.jaTeveProblemas === null ? "form-inline d-none" : "form-inline"}>
                            <label>Já Teve Problemas:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.jaTeveProblemas}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.doQueGostava === null ? "form-inline d-none" : "form-inline"}>
                            <label>O Que Gostava:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.doQueGostava}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.importandeOuvirMelhor === null ? "form-inline d-none" : "form-inline"}>
                            <label>É importante para você ouvir melhor:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.importandeOuvirMelhor}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.porQueAchaUsoAparelhoSeriaUtil === null ? "form-inline d-none" : "form-inline"}>
                            <label>Por que você acha que o uso do aparelho seria útil:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.porQueAchaUsoAparelhoSeriaUtil}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={props.aparelho.observacao === null ? "form-inline d-none" : "form-inline"}>
                            <label>Observação:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.observacao}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
}