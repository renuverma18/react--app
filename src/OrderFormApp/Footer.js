import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="footer">
                <p> Copyright  @ 2018 : </p>
                <ul>
                    <li><a href="#facebook" class="active">Facbook</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#twitter">Twitter</a></li>

                </ul>

            </div>

        );
    }
}

export default Footer;