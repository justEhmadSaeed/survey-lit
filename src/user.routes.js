import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import PATH from 'utils/constants/routing-paths.constant';
import Dashboard from 'views/Dashboard/Dashboard';
import Home from 'views/Home/Home';
import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';
import { useDispatch } from 'react-redux';
import { authChange } from 'services/firebase/firebase';
import {
	logInUser,
	signOutUser,
	toggleDarkMode,
	toggleLoading
} from 'store/slice/auth.slice';
import FormAdmin from 'views/FormAdmin/FormAdmin';
import Loading from 'views/Loading/Loading';
import CreateFormPopup from 'views/FormAdmin/CreateFormPopup';
import JoinForm from 'views/JoinForm/JoinForm';
import { getInitialTheme } from 'utils/theme.handler';
import Responses from 'views/Responses/Responses';
import { getAllForms } from 'utils/form-data/form-data';
import { addForms } from 'store/slice/forms.slice';

const UserRoutes = () => {
	const { id: userId, loading } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();

	useEffect(() => {
		try {
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
			getInitialTheme((darkMode) =>
				dispatch(toggleDarkMode(darkMode))
			);
		} catch (error) {
			console.log('Auth Error', error);
		}
	}, []);

	return loading ? (
		<Loading />
	) : (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route
					path={PATH.LOGIN}
					element={
						userId ? (
							<Navigate to={PATH.DASHBOARD} />
						) : (
							<Login />
						)
					}
				/>
				<Route
					path={PATH.SIGNUP}
					element={
						userId ? (
							<Navigate to={PATH.DASHBOARD} />
						) : (
							<Signup />
						)
					}
				/>
				<Route
					path={`${PATH.RESPONSES}/:formId`}
					element={
						userId ? (
							<Responses />
						) : (
							<Navigate to={PATH.LOGIN} />
						)
					}
				/>
				<Route
					path={PATH.DASHBOARD}
					element={
						userId ? (
							<Dashboard />
						) : (
							<Navigate to={PATH.LOGIN} />
						)
					}
				/>
				<Route
					path={`${PATH.FORM_POPUP}/:formId`}
					element={
						userId ? (
							<CreateFormPopup />
						) : (
							<Navigate to={PATH.LOGIN} />
						)
					}
				/>
				<Route
					path={`${PATH.CREATE_FORM_ADMIN}/:formId`}
					element={
						userId ? (
							<FormAdmin />
						) : (
							<Navigate to={PATH.LOGIN} />
						)
					}
				/>
				<Route
					path={`${PATH.JOIN_FORM}/:formId`}
					element={
						userId ? (
							<JoinForm />
						) : (
							<Navigate to={PATH.LOGIN} />
						)
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
export default UserRoutes;
