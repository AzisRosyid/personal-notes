const InputNote = ({changeTitle, titleRemainingCharacters}) => (
    <div className="input-note">
        <input type="text" id="inputTitle" placeholder="Ini adalah judul..." onChange={e => changeTitle(e)} onPaste={e => changeTitle(e)} onFocus={e => changeTitle(e)} required/>
        <label htmlFor="inputTitle">Sisa Karakter: {titleRemainingCharacters}</label>
        <textarea type="text" id="inputBody" placeholder="Tuliskan catatanmu di sini..." required></textarea>
        <div className="input-checkbox">
            <label htmlFor="inputIsArchived">Telah diarsipkan</label>
            <input type="checkbox" id="inputIsArchived" />
        </div>
    </div>
)

export default InputNote;