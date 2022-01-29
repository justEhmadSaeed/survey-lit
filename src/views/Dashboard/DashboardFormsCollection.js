import React from 'react';
import FormThumbnail from './FormThumbnail';

const DashboardFormsCollection = () => {
	return (
		<div className="relative ml-8">
			{/* Collections */}
			<div className="flex flex-wrap pt-6 pb-8">
				<FormThumbnail
					path="#"
					title="Survey for Online Classes"
					responses={44}
				/>
			</div>
		</div>
	);
};

export default DashboardFormsCollection;
