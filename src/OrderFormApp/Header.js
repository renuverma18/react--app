import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>


                </div>

            </header>
        );
    }
}

export default Header;
