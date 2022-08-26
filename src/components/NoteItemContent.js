import { showFormattedDate } from "../utils";

const NoteItemContent = ({title, body, createdAt}) => (
    <div className="note-item-content">
        <h3 className="note-title">{title}</h3>
        <p className="note-date">{showFormattedDate(createdAt)}</p>
        <p className="note-body">{body}</p>
    </div>
)

export default NoteItemContent;