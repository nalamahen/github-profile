import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProfile } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };
    }

    formSubmit = (event) => {
        event.preventDefault();       
        this.props.fetchProfile(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.formSubmit} className="ui form">
                    <div className="field">
                        <input
                            type="text"
                            placeholder="Type profile and press enter to search"
                            onChange={event => this.setState({ searchTerm: event.target.value })}
                            value={this.state.searchTerm}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProfile }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);