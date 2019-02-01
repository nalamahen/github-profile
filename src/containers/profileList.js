import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileList extends Component {

    mapObject(object, callback) {
        return Object.keys(object).map(key => {
            return callback(key, object[key]);
        });
    }

    render() {
        
        if(this.props.profileInfo.error) {
            return <div>{this.props.profileInfo.payload}</div>
        }

        const profileInfo = this.mapObject(this.props.profileInfo, (key, value) => {
            return <tr key={key}><td className="collapsing">{key}</td><td>{value}</td></tr>
        });

        return (
            <table className="ui celled striped table">
                <thead>
                    <tr>
                        <th colSpan="3">Profile Information</th>
                    </tr>
                </thead>
                <tbody>
                    {profileInfo}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({ profileInfo }) {       
    return { profileInfo }
}

export default connect(mapStateToProps)(ProfileList);