import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

const NoteItem = ({note, clickAction}) => (
    <div className="note-item">
        <NoteItemContent {...note}/>
        <NoteItemAction id={note.id} clickAction={clickAction} archived={note.archived}/>
    </div>
)

export default NoteItem;