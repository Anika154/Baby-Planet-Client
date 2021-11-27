import React from 'react';

const Order = (props) => {
    const { _id, userData, packageDetail } = props?.order;
    const handleDelete = () => {
        const deleted = window.confirm('Do you want to delete?');
        if (deleted) {
            fetch(`https://infinite-ridge-20865.herokuapp.com/order?id=${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        window.location.reload();
                    }
                })
        }

    }

    return (
        <div className="mt-12 mb-40 w-full">
            <div className="grid grid-cols-1 px-2 w-full">
                <div className="w-full shadow-2xl rounded-lg text-center py-3 bg-pink-200">
                    <h2 className="text-2xl font-bold text-pink-700 m-5 text-center">{userData?.name}</h2>
                    <h4 className="text-xl text-gray-700 py-1">{userData?.email}</h4>
                    <h4 className="text-xl text-gray-700 py-1">{packageDetail?.name}</h4>
                    <h4 className="text-xl text-gray-700 py-2">{userData?.phone}</h4>
                    <button onClick={handleDelete} className="rounded-full opacity-75 mb-4 mt-4 bg-red-800 text-white px-4 py-2 font-bold"> Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Order;