import React from 'react';
import Banner from './banner/Banner';
import Services from './services/Services';
import './Home.css';
import Allplices from './service/Places/allplaces/Allplices';




const Home = () => {
    return (
        <div id="home" className="home-container">
            <Banner></Banner>
            <Services></Services>
            <Allplices></Allplices>
        </div>
    );
};

export default Home;