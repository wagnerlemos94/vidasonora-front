import React from 'react';
import Card from './Card';
import DataTable from '../components/DataTable';
import LocalStorageService from '../app/service/localStorageService';

export default class HistoricoProntuario extends React.Component{

    state = {
        anamnene:[],
        evolucoes:[]
    }

    componentDidMount(){
        const prontuario = LocalStorageService.obterItem('_usuario_prontuario');
        
        this.setState({
            anamnene:prontuario.anamneses,
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
            rows: this.state.anamnene
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

                        <div className="col">

                            <Card title="Anamneses">
                                <DataTable datatable={anamneses} />
                            </Card>
                        </div>
                        <div className="col">
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