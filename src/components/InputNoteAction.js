import InputNoteActionButton from "./InputNoteActionButton";

const InputNoteAction = ({cancelModal}) => (
    <div className="input-note-action">
        <InputNoteActionButton id='buttonModalSubmit' type='submit' name='Buat' className='button-modal-create' clickAction={() => {}}/>
        <InputNoteActionButton name='Cancel' className='button-modal-cancel' clickAction={cancelModal}/>
    </div>
)

export default InputNoteAction;