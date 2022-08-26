import React from "react";
import { clearModal, inputValidation } from "../utils";
import TabContent from "./TabContent";
import TabNav from "./TabNav";

class Tab extends React.Component {
    onClickTabHandler = (e, id) => {
        document.querySelectorAll('.tab-button').forEach(e => e.className = 'tab-button');
        e.target.className += ' active';
        document.querySelectorAll('.note-list').forEach(e => e.className = 'note-list');
        document.getElementById(id).className += ' active';
    }

    onTabCreateNoteHandler = () => {
        const [modal, submit] = [document.getElementById('modalInput'), document.getElementById('buttonModalSubmit')];
        submit.className = 'input-note-action-button button-modal-create';
        submit.innerText = 'Buat';
        modal.style.display = 'block';
        document.getElementById('inputTitle').focus();
        submit.onclick = e => {
            e.preventDefault();
            if (!inputValidation()) return;
            this.props.createNote(document.getElementById('inputTitle').value, document.getElementById('inputBody').value, document.getElementById('inputIsArchived').checked);
            clearModal();
        }
    } 

    onActionEditNoteHandler = id => {
        const note = this.props.data.find(s => s.id === id);
        if (note == null) return;
        const [title, body, isArchived, modal, modalTitle, submit] = [document.getElementById('inputTitle'), document.getElementById('inputBody'), document.getElementById('inputIsArchived'), document.getElementById('modalInput'), document.querySelector('#modalInput h2.modal-title'), document.getElementById('buttonModalSubmit')];
        title.value = note.title;
        body.value = note.body;
        isArchived.checked = note.archived;
        modal.style.display = 'block';
        modalTitle.innerHTML = `Update Catatan "${note.title}"`;
        submit.className = 'input-note-action-button button-modal-update';
        submit.innerText = 'Update';
        document.getElementById('inputTitle').focus();
        submit.onclick = e => {
            e.preventDefault();
            if (!inputValidation()) return;
            this.props.updateNote(note.id, title.value, body.value, isArchived.checked);
            clearModal();
        }
    }

    onActionDeleteNoteHandler = id => {
        const note = this.props.data.find(s => s.id === id);
        if (note == null) return;
        document.getElementById('modalDeleteMessage').innerHTML = `Apakah Anda yakin akan menghapus catatan yang berjudul <span>"${note.title}"</span>?`;
        document.getElementById('modalDelete').style.display = 'block';
        document.getElementById('buttonModalDelete').onclick = () => {
            this.props.deleteNote(note.id);
            clearModal();
        }
    }

    render = () => (
        <div className="note-tab">
            <TabNav tabs={this.props.tabs} clickTab={this.onClickTabHandler} createNote={this.onTabCreateNoteHandler}/>
            <TabContent notes={this.props.notes} tabs={this.props.tabs} clickAction={{archive: this.props.archiveNote, edit: this.onActionEditNoteHandler, delete: this.onActionDeleteNoteHandler}}/>
        </div>
    )
}

export default Tab;