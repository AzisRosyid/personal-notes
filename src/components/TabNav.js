import TabButton from "./TabButton";

const TabNav = ({tabs, clickTab, createNote}) => (
    <div className="tab-nav">
        <div className="tab-nav-button">
            {tabs.map((s, i) => <TabButton key={s.id} {...s} index={i} clickTab={clickTab}/>)}
        </div>
        <button className="button-create" onClick={e => createNote(e)}>Buat Catatan</button>
    </div>
)

export default TabNav;