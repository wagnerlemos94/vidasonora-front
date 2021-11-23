import React from "react";

class Modal extends React.Component{

    render(){
        return(
            <>
                <div className="modal fade" id={this.props.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className={"modal-dialog " + this.props.tamanhoModal}>
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.titulo}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>

    );
}

}

export default Modal;