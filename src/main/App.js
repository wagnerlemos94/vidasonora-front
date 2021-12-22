import React from 'react';

import Rotas from './Rotas';
import NavBar from '../components/NavBar';

import 'toastr/build/toastr.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';

import '../custom.css';
import 'toastr/build/toastr.css';
import ValidarUsuario from '../app/service/ValidarUsuario';
import LocalStorageService from '../app/service/localStorageService';

class App extends React.Component {

  state = {
    usuario:{}
  }
  componentDidMount(){
    ValidarUsuario.usuarioLogado();
    const usuario = LocalStorageService.obterItem("_usuario_logado");
    this.setState({usuario:usuario});
  }
  render(){

    return (
      <>
      <div className="container">
            <NavBar/>
            <Rotas />
        </div>
      </>
    );
  }
}

export default App;
