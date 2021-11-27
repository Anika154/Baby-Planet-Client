import React from 'react';
import AllReview from '../../AllReview/AllReview';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <AllReview></AllReview>
            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;