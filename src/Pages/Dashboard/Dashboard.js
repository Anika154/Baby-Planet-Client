import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Dashboard = () => {
    const { logout, user } = useAuth();
    const [myUser, setMyUser] = useState({});
    useEffect(() => {
        fetch(`https://infinite-ridge-20865.herokuapp.com/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyUser({ ...data }))
    }, [user.email]);

    return (
        <div className="my-5">
            {
                myUser.admin === true ?
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl m-10 text-indigo-400 font-bold">Admin Dashboard</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-5 mb-10 ">
                            <Link to="/manageorder" className="transition duration-500 ease-in-out  hover:bg-purple-300 hover:text-purple-800  transform hover:-translate-y-1 hover:scale-110 px-20 py-20 text-4xl text-white font-semibold bg-purple-700 my-1 rounded-lg">
                                Manage All Orders
                            </Link>
                            <Link to="/addproduct" className="transition duration-500 ease-in-out  hover:bg-yellow-800 hover:text-white  transform hover:-translate-y-1 hover:scale-110 px-20 py-20 text-4xl text-yellow-800 font-semibold bg-yellow-300 my-1 rounded-lg">
                                Add a Product
                            </Link>
                            <Link to="/makeadmin" className="transition duration-500 ease-in-out  hover:bg-pink-800 hover:text-white  transform hover:-translate-y-1 hover:scale-110 px-20 py-20 text-4xl text-pink-800 font-semibold bg-pink-300 my-1 rounded-lg">
                                Make Admin
                            </Link>
                            <Link to="/manageproducts" className="transition duration-500 ease-in-out  hover:bg-green-300 hover:text-green-800  transform hover:-translate-y-1 hover:scale-110 px-20 py-20 text-4xl text-white font-semibold bg-green-800 my-1 rounded-lg">
                                Manage Products
                            </Link>
                        </div>

                        <button
                            onClick={logout}
                            className="no-underline mx-10 mb-5 px-5 py-3 text-white  bg-gray-400 font-mono text-xl font-semibold hover:bg-indigo-500 
                                 rounded-full p-3">
                            Logout</button>

                    </div>
                    :
                    <div className="flex flex-col items-center image3">
                        <h2 className="text-4xl m-10 text-green-400 font-bold">User Dashboard</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 mb-10 ">
                            <Link to="/orders" className="transition duration-500 ease-in-out  hover:bg-blue-700 hover:text-white  transform hover:-translate-y-1 hover:scale-110 px-20 py-20 text-4xl text-blue-800 font-semibold bg-blue-300 my-1 rounded-lg">
                                My Order
                            </Link>
                            <Link to="addreview" className="transition duration-500 ease-in-out  hover:bg-pink-700 hover:text-white transform hover:-translate-y-1 hover:scale-110 px-20 py-20 text-4xl font-semibold text-red-900 bg-red-300 my-1 rounded-lg">
                                Give Review
                            </Link>
                            <Link to="/payment" className="transition duration-500 ease-in-out  hover:bg-purple-700 hover:text-white  transform hover:-translate-y-1 hover:scale-110 px-20 py-20 text-4xl font-semibold text-purple-900 bg-purple-300 my-1 rounded-lg">
                                Payment
                            </Link>
                        </div>

                        <button
                            onClick={logout}
                            className="no-underline mx-10 px-5 py-3 mb-5 bg-gray-400 text-white font-mono text-xl font-semibold hover:bg-red-300 
    rounded-full p-1">
                            Logout</button>

                    </div>
            }
        </div>
    );
};

export default Dashboard;