import React from "react";

const Register = () => {
    return (
        <div className="flex min-h-screen min-w-screen items-center justify-center">
            <div className="flex-col max-w-md w-full">
                <div>
                    <h2 className="text-center text-3xl font-extrabold">
                        Register
                    </h2>
                </div>
                <form className="flex-col mt-8">
                    <div>
                        <input
                            id="username"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <input
                            id="confirm-password"
                            type="password"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div>
                        <button className="flex w-full mt-6 justify-center py-3 px-4 text-sm font-medium rounded-md text-white bg-blue-600">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
