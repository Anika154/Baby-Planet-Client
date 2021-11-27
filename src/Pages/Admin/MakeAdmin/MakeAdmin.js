import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://infinite-ridge-20865.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setUsers([...data]))
    }, []);

    const updateAdmin = (id) => {
        fetch(`https://infinite-ridge-20865.herokuapp.com/makeadmin?id=${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };
    return (
        <div >
            <h2 className="text-4xl m-10 font-semibold font-mono text-red-800">User Lists</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-52">
                {
                    users.map(user =>
                        <div key={user._id} className=" w-8/12 py-10 mx-10 bg-indigo-100 rounded-lg shadow-xl flex flex-col items-center my-2">
                            <h2 className="text-xl text-indigo-600 font-medium mb-3">{user.displayName}</h2>
                            <h2 className="text-lg text-gray-700">{user.email}</h2>
                            <h2 className="text-lg text-gray-700 mb-5">Admin: {user.admin ? 'Yes' : 'No'}</h2>
                            {user.admin ?
                                <button className="w-6/12 text-white bg-purple-900 rounded-full px-3 py-2 font-mono font-semibold mt-5">Already Admin</button>
                                :
                                <button onClick={updateAdmin(user._id)}
                                    className=" w-6/12 text-white bg-purple-700 rounded-full px-3 py-2 font-mono font-semibold mt-5">Make Admin</button>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MakeAdmin;