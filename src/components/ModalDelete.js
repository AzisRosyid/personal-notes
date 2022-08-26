import React from "react";
import { clearModal } from "../utils";
import ModalDeleteAction from "./ModalDeleteAction";

class ModalDelete extends React.Component {
    onCancelModalHandler = () => clearModal();

    render = () => (
        <div id="modalDelete" className="modal">
            <div className="modal-content">
                <h2 className="modal-title">Delete Catatan</h2>
                <ModalDeleteAction cancelModal={this.onCancelModalHandler} />
            </div>
        </div>
    )
}

export default ModalDelete;