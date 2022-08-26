const InputSearch = ({searchChange}) => (
    <input type="text" id="inputSearch" placeholder="Cari catatan..." onChange={e => searchChange(e)} onFocus={e => searchChange(e)} />
)

export default InputSearch;