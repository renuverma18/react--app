import React from 'react';
import Header from './Header';
import OrderForm from "./OrderForm";
import PreviewInfo from './PreviewInfo';
import Footer from "./Footer";

class OrderFormApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <OrderForm />

                <PreviewInfo firstName="Hans" lastName="Bhardwaj" address="Chandigarh" phone="9807654321" />
                <Footer />
            </div >
        );
    }
}

export default OrderFormApp;
