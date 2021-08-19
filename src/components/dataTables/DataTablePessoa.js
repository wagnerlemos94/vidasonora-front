import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Basic() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Nome',
        field: 'nome',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Position',
        field: 'position',
        width: 270,
      },
      {
        label: 'Office',
        field: 'office',
        width: 200,
      }
    ],
    rows: [
        {
            nome: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            
          }
    ],
  });
  
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}