import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const navigate = useNavigate();

	useEffect(() => {
		setLoggedIn(false);
	}, [setLoggedIn]);

	const handleForm = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"http://localhost:5001/api/auth/login",
				formData
			);
			toast.success("Login Successfully!", {
				position: "top-right",
			});
			setFormData({
				email: "",
				password: "",
			});
			setLoggedIn(true);

			setTimeout(() => {
				navigate("/home");
			}, 2000);
			console.log(res.data);
		} catch (err) {
			if (err.response && err.response.status === 409) {
				toast.error("User Not registered!", {
					position: "top-right",
				});
			} else {
				toast.error("Login failed. Please try again!", {
					position: "top-right",
				});
			}
			console.error(
				"Error:",
				err.response ? err.response.data : err.message
			);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<ToastContainer />
			<div>
				<h1 className="text-3xl font-bold mb-10">
					1 step away to the DSA List
				</h1>
			</div>
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
			<div>
				<h1 className="text-sm font-bold mt-10">
					Don't have an Account?
					<a href="/" className="underline text-gray-800 ml-1">
						Click here for New Registration
					</a>
				</h1>
			</div>
		</div>
	);
};

export default Login;
