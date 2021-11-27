import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';
const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://infinite-ridge-20865.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);

    return (
        <div className="mt-10">
            <h4 className="text-green-400 text-5xl font-medium font-mono">Baby Accessories</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-12 ">
                {
                    products.map(item =>

                        <SingleProduct
                            key={item._id}
                            item={item}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ManageProduct;