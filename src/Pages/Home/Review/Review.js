import React, { useState } from 'react';
import '../Review/Review.css';

const Review = () => {
    const [review, setReview] = useState({});
    const [rating, setRating] = useState(0);
    const handleReviewSubmit = e => {
        e.preventDefault();
        const newReview = { ...review }
        newReview.rating = rating;
        console.log(newReview);
        fetch('https://infinite-ridge-20865.herokuapp.com/review', {
            method: "POST",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('added successfully!!')
                    document.getElementById("review-form").reset();
                }
            })


    }
    const handleChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...review };
        newData[field] = value;
        setReview(newData);
        console.log(newData);


    }
    const handleRadio = (e) => {
        setRating(e.target.value);
    }

    return (
        <div className=" p-5 my-20">
            <h4 className="text-4xl text-green-600 font-semibold mb-5">Cutomer Review</h4>
            {/* <img className="rounded-full h-24 w-24 flex items-center justify-center text-center mx-auto mt-2" src={review} alt="" /> */}
            <form onSubmit={handleReviewSubmit} id="review-form">
                <input onBlur={handleChange} className="px-32 py-12 rounded mt-5 bg-gray-200 text-center" name="review" placeholder="Your Opinion"></input>
                <div className="block">
                    <div className="mt-4">
                        <h2 className="text-lg text-gray-500 font-medium text-center">Please give us Rating</h2>

                        <div className="block">

                            <div className="mt-2 flex items-center justify-evenly w-3/12 mx-auto">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input onChange={handleRadio} type="radio"
                                            className="form-radio" name="radio" value="0" />
                                        <span className="ml-2"> 0</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input onChange={handleRadio} type="radio"
                                            className="form-radio" name="radio" value="1" />
                                        <span className="ml-2">1</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input onChange={handleRadio} type="radio"
                                            className="form-radio" name="radio" value="2" />
                                        <span className="ml-2">2</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input onChange={handleRadio} type="radio"
                                            className="form-radio" name="radio" value="3" />
                                        <span className="ml-2"> 3</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input onChange={handleRadio} type="radio"
                                            className="form-radio" name="radio" value="4" />
                                        <span className="ml-2"> 4</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input onChange={handleRadio} type="radio"
                                            className="form-radio" name="radio" value="5" />
                                        <span className="ml-2"> 5</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                        <input className="m-5 bg-indigo-700 opacity-75 mx-auto py-2 px-4 text-white text-lg rounded-3xl" type="submit" value="Submit" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default Review;