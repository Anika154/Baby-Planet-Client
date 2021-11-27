import React from 'react';
import banner from '../../../images/newbanner.jpg';

const Banner = () => {
    return (
        <div className="w-full h-3/6">
            <img className="w-full h-full" src={banner} alt="banner" />
        </div>
    );
};

export default Banner;