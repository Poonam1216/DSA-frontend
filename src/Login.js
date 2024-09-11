import React, { useState } from "react";
import axios from "axios";

const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleForm = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"http://localhost:5001/api/auth/login",
				formData
			);
			console.log(res.data);
		} catch (err) {
			console.error(
				"Error:",
				err.response ? err.response.data : err.message
			);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<form
				onSubmit={handleForm}
				className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
			>
				<h2 className="text-2xl font-bold text-center text-gray-700">
					Login
				</h2>
				<input
					name="email"
					placeholder="Enter your Email"
					onChange={handleChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
				<input
					name="password"
					type="password"
					placeholder="Enter your Password"
					onChange={handleChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
				<button
					type="submit"
					className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
