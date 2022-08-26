const TabButton = ({id, name, index, clickTab}) => (
    <button className={`tab-button ${index === 0? 'active': ''}`} onClick={e => clickTab(e, id)} >{name}</button>
) 

export default TabButton;