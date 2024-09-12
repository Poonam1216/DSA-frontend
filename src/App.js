import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import DSASheet from "./DSA/DsaSheet.jsx";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoutes.jsx";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<Router>
				<Routes>
					<Route path="/" element={<Signup />} />
					<Route
						path="/login"
						element={<Login setLoggedIn={setLoggedIn} />}
					/>
					<Route
						path="/home"
						element={
							<ProtectedRoute loggedIn={loggedIn}>
								<DSASheet />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
