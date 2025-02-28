import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import FooterSection from './FooterSection';
const HomePage= () => {
    return (
<>
    <main>
    <CallToAction/>
    <Specials/>
    <CustomersSay/>
    <Chicago/>
    </main>
    <footer>
    <FooterSection/>
    </footer>
</>
    );
};

export default HomePage;