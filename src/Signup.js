import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"http://localhost:5001/api/auth/signup",
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
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="username"
					placeholder="Enter your Name"
					type="text"
					onChange={handleChange}
				/>
				<input
					name="email"
					placeholder="Enter your Email"
					type="email"
					onChange={handleChange}
				/>
				<input
					name="password"
					placeholder="Enter your Password"
					type="password"
					onChange={handleChange}
				/>
				<button type="submit">Signup</button>
			</form>
		</div>
	);
};

export default Signup;
