import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Product = ({ item }) => {
    const { _id, name, description, price, img } = item;





    return (
        <div className="rounded-lg bg-blue-100">
            <div className="w-1/2 mx-auto">
                <img className="text-center px-5" src={img} alt="" />
            </div>
            <div >
                <h2 className="text-2xl font-bold text-green-600 m-4 font-sanserif">{name}</h2>
                <h4 className="text-lg font-medium text-gray-700 mb-2">{price}</h4>
                <p className="text-center text-gray-500 mb-2">{description}</p>
                <Link to={`/purchase/${_id}`}>
                    <button className="rounded-full bg-indigo-400 py-2 px-5 m-5 text-gray-900 font-mono font-bold text-base" >Purchase</button>
                </Link>
            </div>

        </div>
    );
};

export default Product;