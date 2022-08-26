const DeleteNoteActionButton = ({id, name, className, clickAction}) => (
    <button id={id} className={`modal-delete-action-button ${className}`} onClick={e => clickAction(e)}>{name}</button>
)

export default DeleteNoteActionButton;