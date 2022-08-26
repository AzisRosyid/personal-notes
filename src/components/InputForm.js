import InputNote from "./InputNote";
import InputNoteAction from "./InputNoteAction";

const InputForm = ({changeTitle, cancelModal, titleRemainingCharacters}) => (
    <form className="form-input">
        <InputNote changeTitle={changeTitle} titleRemainingCharacters={titleRemainingCharacters}/>
        <InputNoteAction cancelModal={cancelModal}/>
    </form>
)

export default InputForm;