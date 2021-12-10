import { MDBInputGroup } from 'mdbreact';
import React from 'react';

export default function AparelhoView(props){
    return <div className="">
                <h5>Aparelho:</h5>
                <div className="row">
                    <div className="col-6">
                        <div className="form-inline">
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
                        <div className="form-inline">
                            <label>Ducaração Crice:</label>
                            <MDBInputGroup
                                material
                                containerClassName="col disabled"
                                hint="Nome:"
                                size="sm"
                                value={props.aparelho.ducaracaoCrice}
                            /> 
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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
                        <div className="form-inline">
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