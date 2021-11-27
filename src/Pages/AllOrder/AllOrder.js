import React, { useEffect, useState } from 'react';


const AllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://infinite-ridge-20865.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleShipping = (id) => {
        fetch(`https://infinite-ridge-20865.herokuapp.com/updateShipping?id=${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div className="mt-10">
            <h4 className="text-indigo-500 text-5xl font-medium font-mono">My Orders</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-12 ">
                {
                    orders.map(order =>
                        <div className="mt-12 mb-28 w-full">
                            <div className="grid grid-cols-1 px-2 w-full">
                                <div className="w-full  rounded-xl text-center bg-indigo-100 shadow-xl py-3">
                                    <h2 className="text-2xl font-bold text-indigo-600 text-center m-5">{order?.userData?.name}</h2>
                                    <h4 className="text-xl text-gray-700 py-1">{order?.userData?.email}</h4>
                                    <h4 className="text-xl text-gray-700 py-1">{order?.packageDetail?.name}</h4>
                                    <h4 className="text-xl text-gray-700 py-2">{order?.userData?.phone}</h4>
                                    <button onClick={() => handleShipping(order._id)}
                                        className="btn rounded-full opacity-75  mb-4 mt-4 bg-green-600 text-white  px-5 py-2 font-semibold"
                                    >Approve Shipping</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default AllOrder;