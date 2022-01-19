import App from 'App';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<App />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Routers;
