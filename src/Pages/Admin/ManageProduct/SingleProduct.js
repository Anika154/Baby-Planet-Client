import React from 'react';

const SingleProduct = ({ item }) => {
    const { _id, name, description, price, img } = item;

    const handleDelete = () => {
        fetch(`https://infinite-ridge-20865.herokuapp.com/product?id=${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="rounded-lg bg-blue-100">
            <div className="w-1/2 mx-auto">
                <img className="text-center px-5" src={img} alt="" />
            </div>
            <div >
                <h2 className="text-2xl font-bold text-green-600 m-4 font-sanserif">{name}</h2>
                <h4 className="text-lg font-medium text-gray-700 mb-2">{price}</h4>
                <p className="text-center text-gray-500 mb-2">{description}</p>
                <button onClick={handleDelete}
                    className="rounded-full bg-red-800 py-2 px-5 m-5  font-mono font-bold text-white" >Delete</button>
            </div>

        </div>
    );
};

export default SingleProduct;