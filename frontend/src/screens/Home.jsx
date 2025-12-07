import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

const Home = () => {
    const user = useSelector((state) => state.user.user); 

    console.log(user); 

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
            
            {user ? (
                <div className="bg-white p-6 rounded shadow-lg">
                    <p className="text-xl mb-2">Hello, { user.email}!</p>
                </div>
            ) : (
                <p className="text-red-500">Please log in to view your details.</p>
            )}
   
        </div>
    );
}

export default Home;