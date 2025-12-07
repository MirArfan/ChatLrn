import React, { useState } from "react";
import axios from '../config/axios'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function submitHandler(e) {
        e.preventDefault()
        axios.post('/users/login', {
            email,
            password
        }).then((res) => {
            console.log(res.data);
            navigate('/');
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
            <div className="w-full max-w-md bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">

                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Login 👋
                </h2>

                <form onSubmit={submitHandler} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="text-gray-300 text-sm">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-gray-300 text-sm">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-lg"
                    >
                        Login
                    </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
