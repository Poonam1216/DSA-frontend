import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { MoveDownIcon } from "lucide-react";

const Signup = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"http://localhost:5001/api/auth/signup",
				formData
			);
			toast.success("Signup successful!", {
				position: "top-right",
			});
			setFormData({
				username: "",
				email: "",
				password: "",
			});
			setTimeout(() => {
				navigate("/login");
			}, 2000);
			console.log(res.data);
		} catch (err) {
			console.error(
				"Error:",
				err.response ? err.response.data : err.message
			);
			if (err.response && err.response.status === 409) {
				toast.error("User already registered!", {
					position: "top-right",
				});
			} else {
				toast.error("Signup failed. Please try again!", {
					position: "top-right",
				});
			}
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<ToastContainer />
			<div>
				<h1 className="text-3xl font-bold mb-10">
					Welcome to DSA List
				</h1>
			</div>

			<div>
				<h3 className="text-xl font-bold mb-10 flex">
					Register here
					<MoveDownIcon className="h-6" />
				</h3>
			</div>
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
			>
				<h2 className="text-2xl font-bold text-center text-gray-700">
					Signup
				</h2>
				<input
					name="username"
					placeholder="Enter your Name"
					type="text"
					value={formData.username}
					onChange={handleChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
				<input
					name="email"
					placeholder="Enter your Email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
				<input
					name="password"
					placeholder="Enter your Password"
					type="password"
					value={formData.password}
					onChange={handleChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
				<button
					type="submit"
					className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
				>
					Signup
				</button>
			</form>
			<div>
				<h3 className="text-sm font-bold mt-10">
					Already Registered?{" "}
					<a href="/login" className="underline text-gray-800">
						{" "}
						Click here for Login{" "}
					</a>
				</h3>
			</div>
		</div>
	);
};

export default Signup;
