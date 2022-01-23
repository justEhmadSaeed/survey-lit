import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import {
	PATH_DASHBOARD,
	PATH_LOGIN,
	PATH_SIGNUP
} from 'utils/constants/ROUTING_PATHS.constant';
import Dashboard from 'views/Dashboard/Dashboard';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';
import { userLogged, userSignout } from 'store/auth/actions.auth';
import { useDispatch } from 'react-redux';
import { authChange } from 'services/firebase/firebase';

const Routers = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		authChange((user) => {
			if (user) {
				dispatch(
					userLogged({
						name: user.displayName,
						id: user.uid,
						email: user.email
					})
				);
			} else {
				dispatch(userSignout());
			}
		});
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route
					path={PATH_LOGIN}
					element={
						user.id ? (
							<Navigate to={PATH_DASHBOARD} />
						) : (
							<Login />
						)
					}
				/>
				<Route
					path={PATH_SIGNUP}
					element={
						user.id ? (
							<Navigate to={PATH_DASHBOARD} />
						) : (
							<Signup />
						)
					}
				/>
				<Route
					path={PATH_DASHBOARD}
					element={
						user.id ? (
							<Dashboard />
						) : (
							<Navigate to={PATH_LOGIN} />
						)
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
export default Routers;
