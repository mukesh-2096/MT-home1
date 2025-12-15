import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Certificates from './pages/certificates';
import DiksuchiAnimation from './pages/DiksuchiAnimation';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<DiksuchiAnimation />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/certificates" element={<Certificates />} />
			</Routes>
		</Router>
	)
}
