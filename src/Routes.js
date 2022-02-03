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
	PATH_FORM_POPUP,
	PATH_LOGIN,
	PATH_SIGNUP
} from 'utils/constants/routing-paths.constant';
import Dashboard from 'views/Dashboard/Dashboard';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';
import { useDispatch } from 'react-redux';
import { authChange } from 'services/firebase/firebase';
import {
	logInUser,
	signOutUser,
	toggleLoading
} from 'store/slice/auth.slice';
import FormAdmin from 'views/FormAdmin/FormAdmin';
import Loading from 'views/Loading/Loading';
import CreateFormPopup from 'views/FormAdmin/CreateFormPopup';
import { getAllForms } from 'utils/form-data/form-admin';
import { addForms } from 'store/slice/forms.slice';

const Routers = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		authChange(async (auth) => {
			if (auth) {
				dispatch(
					logInUser({
						name: auth.displayName,
						id: auth.uid,
						email: auth.email
					})
				);
				const forms = await getAllForms(auth.uid);
				dispatch(addForms(forms));
				dispatch(toggleLoading(false));
			} else {
				dispatch(signOutUser());
				dispatch(toggleLoading(false));
			}
		});
	}, []);

	return auth.loading ? (
		<Loading />
	) : (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route
					path={PATH_LOGIN}
					element={
						auth.id ? (
							<Navigate to={PATH_DASHBOARD} />
						) : (
							<Login />
						)
					}
				/>
				<Route
					path={PATH_SIGNUP}
					element={
						auth.id ? (
							<Navigate to={PATH_DASHBOARD} />
						) : (
							<Signup />
						)
					}
				/>
				<Route
					path={PATH_DASHBOARD}
					element={
						auth.id ? (
							<Dashboard />
						) : (
							<Navigate to={PATH_LOGIN} />
						)
					}
				/>
				<Route
					path={`${PATH_FORM_POPUP}/:formId`}
					element={
						auth.id ? (
							<CreateFormPopup />
						) : (
							<Navigate to={PATH_LOGIN} />
						)
					}
				/>
				<Route
					path={`${PATH_CREATE_FORM_ADMIN}/:formId`}
					element={
						auth.id ? (
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
