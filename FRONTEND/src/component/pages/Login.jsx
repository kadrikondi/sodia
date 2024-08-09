import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';
import swal from 'sweetalert';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory(); 
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3500/user/login', {
                username,
                password
            });
            if (response.status === 200) {
                swal("Login Successful", "You can now access your account", "success")
               history.push('/landing')
            }
        } catch (err) {
            if (err.response) {
                    swal("An error occurred. Please try again.","Please check your details once more","error");
            } else {
                swal("An error occurred. Please try again.","Please check your details once more","error");
            }
        }
    };

    return (
        <div className="bg-gradient-to-r from-purple-900 to-white h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-whie to-purple-400">
                        Login
                    </span>
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-purple-900 font-bold" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm sm:text-sm"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-purple-900 font-bold" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm sm:text-sm"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

