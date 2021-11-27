import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../../Login/Register/Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { registerUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history);
        e.preventDefault();
    }
    return (
        <div className="py-36 w-full min-h-full image2 " >
            <div>
                <h3 className="font-medium text-indigo-600 text-5xl mb-5">Please Register</h3>
            </div>
            {!isLoading && <form className="flex flex-col w-6/12 mx-auto items-center" onSubmit={handleLoginSubmit}>
                <input name="name" className="px-12 py-1  text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center  border-none" onChange={handleOnChange} type="name" placeholder="Name" />
                <input name="email" className="px-12 py-1  text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center  border-none" onChange={handleOnChange} type="email" placeholder="Email" />
                <input name="password" className="px-12 py-1 text-black text-lg my-3 border-2 border-indigo-700 rounded-lg text-center border-none" onChange={handleOnChange} type="password" placeholder="Password" />
                <input name="password2" className="px-12 py-1 text-black text-lg my-3  border-2 border-indigo-700 rounded-lg text-center border-none" onChange={handleOnChange} type="password" placeholder="Confirm Password" />
                <input className="text-center px-28 py-2 font-bold bg-indigo-400 text-white text-lg rounded-3xl my-5 hover:bg-green-400" type="submit" value="Register" />
                <NavLink to="/login">
                    <button className="text-green-700 text-lg " >Already Registered? Please Login</button>
                </NavLink>

            </form>}
            {isLoading &&
                <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-700"></div>
                </div>
            }
            {authError &&
                <p>{authError}</p>}

        </div>
    );
};

export default Register;