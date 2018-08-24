import React from 'react';
import PropTypes from 'prop-types';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
    }
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
        return (
            <div className="order-form">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" placeholder="Firstname" name="firstname" /><br></br>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" placeholder="Lastname" name="lastname" /><br></br>
                <label htmlFor="password">Password:</label>
                <input type="text" id="pass" placeholder="password" name="password" /><br></br>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" placeholder="Phone" name="phone" /><br></br>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" placeholder="address" name="address" /><br></br>
                <input type="button" value="Save" />
            </div>
        );
    }
}

export default OrderForm;
