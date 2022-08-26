import React from "react";
import { clearModal } from "../utils";
import InputForm from "./InputForm";

class ModalInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titleMaxLength: 50,
            titleRemainingCharacters: 50
        }
    }

    onChangeTitleHandler = e => {
        if (this.state.titleRemainingCharacters <= e.target.value.length) e.target.value = e.target.value.substring(0, 50);
        this.setState(s => s.titleRemainingCharacters = s.titleMaxLength - e.target.value.length);
    }

    onCancelModalHandler = e => {
        e.preventDefault();
        this.setState(s => s.titleRemainingCharacters = s.titleMaxLength);
        clearModal();
    }

    render = () => (
        <div id="modalInput" className="modal">
            <div className="modal-content">
                <h2 className="modal-title">Buat Catatan</h2>
                <InputForm changeTitle={this.onChangeTitleHandler} cancelModal={this.onCancelModalHandler} titleRemainingCharacters={this.state.titleRemainingCharacters}/>
            </div>
        </div>
    )
}

export default ModalInput;