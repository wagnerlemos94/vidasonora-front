import React from 'react';

import Rotas from './Rotas';
import NavBar from '../components/NavBar';

import 'toastr/build/toastr.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';

import '../custom.css';
import 'toastr/build/toastr.css';

class App extends React.Component {

  render(){

    return (
      <>
        <NavBar />
      <div className="container">
            <Rotas />
        </div>
      </>
    );
  }
}

export default App;
