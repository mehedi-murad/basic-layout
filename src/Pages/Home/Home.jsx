import React from 'react';
import Nav from '../Shared/Navbar/Nav';
import Banner from '../Shared/Banner/Banner';
import SecondBanner from '../SecondBanner/SecondBanner';
import FirstCategory from '../FirstCategory/FirstCategory';
import SecondCategory from '../SecondCategory/SecondCategory';
import ParallaxBanner from '../ParallaxBanner/ParallaxBanner';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import Subscribe from '../Subscribe/Subscribe';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <FirstCategory></FirstCategory>
            <SecondCategory></SecondCategory>
            <ParallaxBanner></ParallaxBanner>
            <SpecialOffer></SpecialOffer>
            <Subscribe></Subscribe>
            <Social></Social>
            <Footer></Footer>
        </div>
    );
};

export default Home;