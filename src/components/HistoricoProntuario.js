import React from 'react';
import Card from './Card';
import DataTable from '../components/DataTable';
import LocalStorageService from '../app/service/localStorageService';
import Icon from '@mdi/react'
import { mdiBookEdit } from '@mdi/js';

export default class HistoricoProntuario extends React.Component{

    state = {
        anamnenes:[],
        evolucoes:[]
    }

    componentDidMount(){
        const prontuario = LocalStorageService.obterItem('_usuario_prontuario');
        Object.values(prontuario.anamneses).map((value,indeex) => {
            value.buttom = 
            <spam>
              <a onClick={e => this.ativar(prontuario.id)}><Icon path={mdiBookEdit} title={"Desativar"} size={1} vertical color="blue" /></a>  
            </spam>
        });
        Object.values(prontuario.evolucoes).map((value,indeex) => {
            value.buttom = 
            <spam>
              <a onClick={e => this.ativar(prontuario.id)}><Icon path={mdiBookEdit} title={"Desativar"} size={1} vertical color="blue" /></a>  
            </spam>
        })
        this.setState({
            anamnenes:prontuario.anamneses,
            evolucoes:prontuario.evolucoes
            
        });
    }

    render(){
        const anamneses = {
            columns: [
              {
                label: 'Numero',
                field: 'id',
                width: 150,
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': 'Name',
                },
              },
              {
                label: 'Data',
                field: 'data',
                width: 270,
              },
              {
                label: 'Ações',
                field: 'buttom',
                width: 200,
              }
            ],
            rows: this.state.anamnenes
            ,
          };
          const evolucoes = {
            columns: [
                {
                label: 'Numero',
                field: 'id',
                width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                    },
                },
                {
                label: 'Data',
                field: 'data',
                width: 270,
                },
                {
                label: 'Ações',
                field: 'buttom',
                width: 200,
                }
            ],
            rows: this.state.evolucoes
            ,
            };
        return(
            <div>
                {console.log(this.state)}
                <Card title="Histório Prontuário">
                    <div className="row">
                        <div className="col pl-0 pr-0">
                            <Card title="Anamneses">
                                <DataTable datatable={anamneses} />
                            </Card>
                        </div>
                        <div className="col pr-0">
                            <Card title="Evoluções">
                            <DataTable datatable={evolucoes} />
                            </Card>
                            
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}