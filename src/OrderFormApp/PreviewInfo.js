import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PreviewInfo extends Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        phone: PropTypes.number,
        address: PropTypes.shape({
            unitNumber: PropTypes.number,
            streetNumber: PropTypes.number.isRequired,
            streetName: PropTypes.string.isRequired,
            suburb: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zip: PropTypes.number.isRequired,
            country: PropTypes.string.isRequired,
        }),
        choices: PropTypes.array,
        consent: PropTypes.bool,
    }

    render() {
        console.log(this.props);
        return (
            <div>PreviewInfo
                <br />
                First Name : {this.props.firstName}
                <br />
                Last Name : {this.props.lastName}
                <br />
                Address : {this.props.address}
                <br />
                Phone : {this.props.phone}
            </div>
        )
    }
}
