import DeleteNoteActionButton from "./DeleteNoteActionButton";

const DeleteNoteAction = ({cancelModal}) => (
    <div className="delete-note-action">
        <DeleteNoteActionButton name='Cancel' className='button-modal-cancel' clickAction={cancelModal}/>
        <DeleteNoteActionButton name='Delete' id='buttonModalDelete' className='button-modal-delete' clickAction={() => {}}/>
    </div>
)

export default DeleteNoteAction;