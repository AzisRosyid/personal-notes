import React from "react";
import { getInitialData, tabData } from "../utils";
import ModalDelete from "./ModalDelete";
import ModalInput from "./ModalInput";
import Navbar from "./Navbar";
import Tab from "./Tab";

class NoteApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            searchNotes: getInitialData(),
            tabs: tabData(),
        }
    }

    onSearchHandler = title => this.setState(s => s.searchNotes = this.state.notes.filter(x => x.title.includes(title)));

    noteId = (notes) => {
        try {
            const id = notes.slice(-1).pop().id;
            return id + 1;
        } catch { return 1; }
    }

    onArchiveNoteHandler = id => {
        const note = this.state.notes.find(s => s.id === id);
        if (note == null) return;
        note.archived = !note.archived;
        this.loadApp();
    }

    onCreateNoteHandler = (title, body, isArchived) => {
            this.setState(s => s.notes = [...s.notes, {
            id: this.noteId(this.state.notes),
            title: title,
            body: body,
            createdAt: new Date().toJSON(),
            archived: isArchived
        }]);
        this.loadApp();
    }

    onUpdateNoteHandler = (id, title, body, isArchived) => {
        const note = this.state.notes.find(s => s.id === id);
        if (note == null) return;
        note.title = title;
        note.body = body;
        note.archived = isArchived;
        this.loadApp();
    }

    onDeleteNoteHandler = id => { this.setState(s => s.notes = s.notes.filter(x => x.id !== id)); this.loadApp();}

    loadApp = () => {
        this.setState(s => s.searchNotes = s.notes);
        document.getElementById('inputSearch').focus();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar searchNote={this.onSearchHandler}/>
                <main>
                    <Tab data={this.state.notes} notes={this.state.searchNotes} tabs={this.state.tabs} archiveNote={this.onArchiveNoteHandler} createNote = {this.onCreateNoteHandler} updateNote = {this.onUpdateNoteHandler} deleteNote = {this.onDeleteNoteHandler}/>
                </main>
                <ModalInput/>
                <ModalDelete/>
            </React.Fragment>
        )
    }
}

export default NoteApp;