import React from 'react';

const Newsletter = () => {
    return (
        <div className="grid grid-col-1 gap-1 place-items-center lg:grid-cols-2  my-5">
            <div className="text-left m-16">
                <h2 className="text-red-400 font-mono text-bold text-5xl py-3">Newsletter</h2>
                <p className="text-gray-500 text-medium">Remember to stay in touch to get Season's offers and discounts!</p>
            </div>
            <div className="mt-3">
                <input className="bg-yellow-200 py-5 px-40 rounded-full mx-4 text-white" placeholder="Email address" type="text" />
                <button className="rounded-full bg-red-400 text-white text-lg px-4 py-4">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;