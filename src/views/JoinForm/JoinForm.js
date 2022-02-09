import React from 'react';
import { useParams } from 'react-router-dom';

const JoinForm = () => {
	let { formId } = useParams();

	return <div>JoinForm</div>;
};

export default JoinForm;
