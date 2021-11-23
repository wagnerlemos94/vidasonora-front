class Util{

    exibir(id){
        document.getElementById(id).classList.remove("d-none");
    }

    ocultar(id){
        document.getElementById(id).classList.add("d-none");
    }
}

export default Util;