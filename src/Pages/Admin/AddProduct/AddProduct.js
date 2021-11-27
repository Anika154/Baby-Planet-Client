import React, { useState } from 'react';

const AddProduct = () => {

    const [product, setProduct] = useState({});
    const handleChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;

        const newData = { ...product };
        newData[field] = value;
        setProduct({ ...newData });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...product };
        fetch('https://infinite-ridge-20865.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

        document.getElementById('product-form').reset();
    }

    return (
        <div >
            <h2 className="text-3xl mt-5 text-yellow-700 font-semibold font-mono">Add a Product</h2>
            <form onSubmit={handleSubmit} id="product-form"
                className="w-4/12 mx-auto flex flex-col items-center py-8 mb-28">
                <input type="text" name="name" placeholder="Product Name"
                    className="w-6/12 bg-gray-200 rounded px-5 py-2 my-1" onChange={handleChange} />
                <input type="text" name="img" placeholder="Product Image url"
                    className="w-6/12 bg-gray-200 rounded px-5 py-2 my-1" onChange={handleChange} />
                <textArea name="description" placeholder="Product Details"
                    className="w-6/12 bg-gray-200 rounded px-5 py-2 my-1" onChange={handleChange} />
                <input type="number" name="price" placeholder="Price" className="w-6/12 bg-gray-200 rounded px-5 py-2 my-1" onChange={handleChange} />
                <input type="submit" value="Add" className="w-6/12 text-white bg-gray-700 px-3 py-1 font-mono font-semibold  text-lg rounded-full mt-5 " />
            </form>
        </div>
    );
};

export default AddProduct;