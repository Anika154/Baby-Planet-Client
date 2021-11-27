import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://infinite-ridge-20865.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])
    return (
        <div className="my-10">
            <h4 className="text-pink-400 text-5xl font-semibold font-mono">My Orders</h4>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 p-12 ">
                {
                    orders.map(order => <Order key={order._id} order={order} />)
                }

            </div>
        </div>
    );
};

export default MyOrders;