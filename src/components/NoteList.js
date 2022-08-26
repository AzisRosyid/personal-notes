import NoteItem from "./NoteItem";

const NoteList = ({notes, id, active, clickAction}) => {
    if (!notes.some(s => s.id)) return (
        <div id={id} className={`note-list ${active? 'active': ''}`}>
            <p className="empty-message">Tidak ada catatan</p>
        </div>
    )
    return (
        <div id={id} className={`note-list ${active? 'active': ''}`}>
            {notes.map(s => <NoteItem key={s.id} note={s} clickAction={clickAction}/>)}
        </div>
    )
} 

export default NoteList;