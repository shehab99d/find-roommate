import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Animated from '../../Animated0/Animated';
import PopularCities from '../../PopularCities/PopularCities';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Header></Header>
            <Animated></Animated>
            <PopularCities></PopularCities>
        </div>
    );
};

export default Home;