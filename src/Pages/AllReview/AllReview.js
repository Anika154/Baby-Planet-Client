import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';
const AllReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://infinite-ridge-20865.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, []);
    return (
        <div className="mt-10">
            <h4 className="text-indigo-600 text-5xl font-medium font-mono italic">Testimonials</h4>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 p-12 md:grid-cols-1">
                {
                    reviews.map(review => <SingleReview key={review._id} review={review} />)
                }

            </div>
        </div>

    );
};

export default AllReview;