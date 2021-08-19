import React from 'react';
import Card from '../components/Card';
import DataTablePessoa from '../components/dataTables/DataTablePessoa';


class ListaPessoa extends React.Component{


    render(){
        return(
            <div>
                <Card>
                    <DataTablePessoa>

                    </DataTablePessoa>
                </Card>
            </div>
        );
    }


}


export default ListaPessoa;