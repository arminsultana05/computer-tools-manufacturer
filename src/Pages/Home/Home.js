import React from 'react';
import Banner from '../../Components/Banner';
import Banner2 from '../../Components/Banner2';
import Business from '../../Components/Business';
import Extrasession from '../../Components/Extrasession';
import ReviewsSection from '../../Components/ReviewsSection';
import Toosl from '../../Components/Toosl';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toosl></Toosl>
            <Banner2></Banner2>
            <ReviewsSection></ReviewsSection>
            <Extrasession></Extrasession>
            <Business></Business>



        </div>
    );
};

export default Home;