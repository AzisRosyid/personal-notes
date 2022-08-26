const InputNoteActionButton = ({id, name, className, type, clickAction}) => (
    <button id={id} type={type} className={`input-note-action-button ${className}`} onClick={e => clickAction(e)}>{name}</button>
)

export default InputNoteActionButton;