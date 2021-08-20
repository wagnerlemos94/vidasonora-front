import React from 'react';
import NavBarItem from './NavBarItem';
function NavBar(){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem href="#/home" label="home" />
                        {/* <NavBarItem href="#/cadastro-usuarios" label="Usuários" /> */}
                        {/* <NavBarItem href="#/login" label="Login" /> */}
                        {/* <NavBarItem href="#/cadastro-pessoa" label="Clientes" /> */}
                        <NavBarItem href="#/lista-pessoa" label="Clientes" />
                    </ul>
                </div>
            </div>
      </div>
    );
}

export default NavBar;