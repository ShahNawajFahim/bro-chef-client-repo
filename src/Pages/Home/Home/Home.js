import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import FAQ from '../Accordion/FAQ';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {

    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;