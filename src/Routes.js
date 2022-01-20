import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Routers;
