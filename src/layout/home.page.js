import React, {Component} from 'react';
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Content />
                <Footer />
            </div>

        );
    }
}

export default HomePage;