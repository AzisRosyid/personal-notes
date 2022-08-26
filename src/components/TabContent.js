import NoteList from "./NoteList";

const TabContent = ({notes, tabs, clickAction}) => (
    <div className="tab-content">
        {tabs.filter(s => s.id === 'catatanAktif').map(s => <NoteList key={s.id} notes={notes.filter(x => !x.archived)} {...s} active={true} clickAction={clickAction}/>)}
        {tabs.filter(s => s.id === 'arsip').map(s => <NoteList key={s.id} notes={notes.filter(x => x.archived)} {...s} clickAction={clickAction}/>)}
    </div>
)

export default TabContent;