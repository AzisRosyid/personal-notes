import DeleteNoteAction from "./DeleteNoteAction";

const ModalDeleteAction = ({cancelModal}) => (
    <div className="modal-action">
        <p id="modalDeleteMessage">Delete Message</p>
        <DeleteNoteAction cancelModal={cancelModal}/>
    </div>
)

export default ModalDeleteAction;