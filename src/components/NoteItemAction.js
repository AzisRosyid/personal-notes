import NoteItemActionButton from "./NoteItemActionButton";

const NoteItemAction = ({id, clickAction, archived}) => (
    <div className="note-item-action">
        <NoteItemActionButton id={id} name={'Edit'} className='button-edit' clickAction={e => clickAction.edit(e, id)}/>
        <NoteItemActionButton id={id} name={'Delete'} className='button-delete' clickAction={e => clickAction.delete(e, id)}/>
        <NoteItemActionButton id={id} name={archived? 'Pindahkan': 'Arsipkan'} className='button-archive' clickAction={() => clickAction.archive(id)}/>
    </div>
)

export default NoteItemAction;