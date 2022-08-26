const NoteItemActionButton = ({id, name, className, clickAction}) => (
    <button className={`note-item-action-button ${className}`} onClick={() => clickAction(id)}>{name}</button>
)

export default NoteItemActionButton;