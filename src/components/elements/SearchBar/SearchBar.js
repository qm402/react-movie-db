import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({value: event.target.value});
        clearTimeout(this.timeout);

        // Half a second before we search to avoid search on every key stroke
        this.timeout = setTimeout( () => {
            // Value going to Home.js
            this.props.callback(this.state.value);
        }, 500)
    }

    render() {
        return (
            <div className="rmdb-searchbar">
            <div className="rmdb-searchbar-content">
            
                <input 
                    type="text"
                    className="rmdb-searchbar-input"
                    placeholder="Search"
                    onChange={this.doSearch}
                    value={this.state.value}
                />
            </div>
                
            </div>
        )
    }
}

export default SearchBar;