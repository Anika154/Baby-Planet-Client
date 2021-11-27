import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

const SingleReview = ({ review }) => {

    const intStar = parseInt(review.rating);
    const stars = intStar;
    let filledStar = [];
    let blankStar = [];
    for (let i = 0; i < stars; i++) {
        filledStar.push(0);
    }
    let nonStar = 0;
    if (stars < 5) {
        nonStar = 5 - stars;
        for (let i = 0; i < nonStar; i++) {
            blankStar.push(0);
        }
    }
    review.fillStar = [...filledStar];
    review.blankStar = [...blankStar];

    return (
        <div className="text-white flex flex-col items-center bg-indigo-200 rounded-lg py-8">
            <p className="text-lg text-gray-800  w-10/12 mx-auto text-justify mt-5">{review?.review}</p>
            <div className="flex items-center justify-evenly w-2/12 text-red-600">
                <div className="flex justify-evenly w-full items-center mt-4 mb-2 mx-auto">
                    {
                        review.fillStar.map(elm => <FaStar className="text-purple-600 text-4xl "></FaStar>)
                    }
                    {
                        review.blankStar.map(elem => <FaRegStar className="text-purple-600 text-4xl" ></FaRegStar>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleReview;