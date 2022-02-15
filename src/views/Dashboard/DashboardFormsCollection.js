import React from 'react';
import { useSelector } from 'react-redux';
import FormThumbnail from './FormThumbnail';

const DashboardFormsCollection = () => {
	const forms = useSelector((state) => state.forms);
	return (
		<div className="relative ml-8">
			{/* Collections */}
			<div className="flex flex-wrap pt-6 pb-8">
				{forms.map((form, key) => (
					<FormThumbnail
						key={key}
						id={form.id}
						title={form.name}
						responses={form.responses.length}
					/>
				))}
			</div>
		</div>
	);
};

export default DashboardFormsCollection;
