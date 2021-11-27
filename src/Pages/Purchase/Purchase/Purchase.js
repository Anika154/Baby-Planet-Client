import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';
import axios from 'axios';

const Purchase = () => {
    const [buy, setBuy] = useState([]);
    const { id } = useParams();
    const { user } = useFirebase();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        if (data.name === '') {
            data.name = user.displayName;
        }
        if (data.email === '') {
            data.email = user.email;

        }
        const bookingDetail = {
            email: user.email,
            status: "pending",
            userData: data,
            packageDetail: buy
        }
        console.log(bookingDetail);
        axios.post('https://infinite-ridge-20865.herokuapp.com/order', bookingDetail)
            .then(res => {
                // console.log(res);

                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch('https://infinite-ridge-20865.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i]._id === id) {
                        setBuy(data[i])

                    }
                }

            });

    }, [])

    return (
        <div className="grid grid-cols-2 gap-1 mx-40 my-20">
            <div className="rounded-lg bg-blue-100 w-9/12">
                <div className="w-5/12 mx-auto">
                    <img className="text-center px-5" src={buy.img} alt="" />
                </div>
                <div >
                    <h2 className="text-2xl font-bold text-green-600 m-4 font-sanserif">{buy.name}</h2>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">{buy.price}</h4>
                    <p className="text-lg px-5 py-3 text-center text-gray-500 mb-2">{buy.description}</p>
                </div>
            </div>
            <div className="bg-blue-200 rounded-xl mx-0">
                <h2 className="text-indigo-500 text-3xl font-mono font-semibold my-5">Complete Your Purchase</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-6/12 mx-auto items-center" >

                    <input defaultValue={user.displayName} {...register("name")}
                        className="px-12 py-1  text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center"
                        type="text" placeholder="Name" />
                    <input defaultValue={user.email} {...register("email")}
                        className="px-12 py-1  text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center "
                        type="email" placeholder="Email" />
                    <input  {...register("address")}
                        className="px-12 py-1  text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center  "
                        type="text" placeholder="Address" />

                    <input
                        className="px-12 py-1 text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center " type="number"
                        {...register("phone")} placeholder="Phone" />

                    <input className="text-center px-28 py-2 font-bold bg-indigo-400 text-white text-lg rounded-3xl my-5 hover:bg-red-400" type="submit" value="Submit" />

                </form>
            </div>


        </div>
    );
};

export default Purchase;