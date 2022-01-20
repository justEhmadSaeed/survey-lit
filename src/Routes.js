import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	PATH_LOGIN,
	PATH_SIGNUP
} from 'utils/constants/ROUTING_PATHS.constant';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path={PATH_LOGIN} element={<Login />} />
				<Route path={PATH_SIGNUP} element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Routers;
