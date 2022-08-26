import React from "react";
import InputSearch from "./InputSearch";

class Navbar extends React.Component {
    onSearchChangeHandler = e => this.props.searchNote(e.target.value);

    render = () => (
        <div className="navbar">
            <h1>Notes</h1>
            <InputSearch searchChange={this.onSearchChangeHandler}/>
        </div>
    )
}

export default Navbar;