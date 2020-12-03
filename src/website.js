import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './styles.css'

function website() {
    return (
        <div>
            <Header></Header>
             <Body></Body> 
            {/*<Footer></Footer>*/}
        </div>
    );
}

export default website;