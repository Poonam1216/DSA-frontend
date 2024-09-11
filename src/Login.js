import React, { useState } from "react";
import axios from "axios";
const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = async (e) => {
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
		<div>
			<form onSubmit={handleForm}>
				<input
					name="email"
					placeholder="Enter your Email"
					onChange={handleChange}
				/>
				<input
					name="password"
					placeholder="Enter your Password"
					onChange={handleChange}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
