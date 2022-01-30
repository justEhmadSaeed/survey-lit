import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import {
	PATH_CREATE_FORM_ADMIN,
	PATH_DASHBOARD,
	PATH_LOGIN,
	PATH_SIGNUP
} from 'utils/constants/routing-paths.constant';
import Dashboard from 'views/Dashboard/Dashboard';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';
import { useDispatch } from 'react-redux';
import { authChange } from 'services/firebase/firebase';
import { saveUser } from 'store/slice/auth.slice';
import FormAdmin from 'views/FormAdmin/FormAdmin';

const Routers = () => {
	const user = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		authChange((auth) => {
			if (auth) {
				dispatch(
					saveUser({
						name: auth.displayName,
						id: auth.uid,
						email: auth.email
					})
				);
			} else {
				dispatch(saveUser({}));
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
				<Route
					path={`${PATH_CREATE_FORM_ADMIN}/:formId`}
					element={
						user.id ? (
							<FormAdmin create={true} />
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
