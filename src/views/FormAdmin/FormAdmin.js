import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminNavbar from 'components/AdminNavbar';
import UserMenu from 'components/UserMenu';
import { PATH_DASHBOARD } from 'utils/constants/routing-paths.constant';
import FormBody from './FormBody';
import {
	getFormData,
	storeIntoFirestore
} from 'utils/form-data/form-admin';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Loading from 'views/Loading/Loading';
import PublishButton from './PublishButton';

const FormAdmin = () => {
	let { formId } = useParams();
	const [formName, setFormName] = useState('My Typeform');
	const userId = useSelector((state) => state.auth.id);
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const getData = async () => {
			let data = await getFormData(userId, formId);
			if (!data.error) {
				setFormName(data.name);
				if (data.questions) {
					setQuestions(data.questions);
				} else {
					setQuestions([
						{
							id: nanoid(),
							title: '',
							desc: '',
							choices: [{ id: nanoid(), text: '' }]
						}
					]);
				}
			} else setError(data.error);
			setLoading(false);
		};
		getData();
	}, []);

	const saveDataIntoFirestore = async () => {
		const results = await storeIntoFirestore(formId, questions);
		if (results.error) setError(results.error);
	};
	console.log('ERROR:', error);
	return loading ? (
		<Loading />
	) : (
		<div className="h-full flex flex-col flex-nowrap flex-1">
			<AdminNavbar>
				<header>
					<div>
						<Link
							to={PATH_DASHBOARD}
							className="text-sm text-template-auth-text ml-4 mr-3 hover:text-template-signup-text"
						>
							My Workspace
						</Link>
						/
						<input
							value={formName}
							className="ml-3"
							placeholder="Default form title"
							disabled
						/>
					</div>
				</header>
				<footer className="flex justify-center items-center">
					<PublishButton
						formURL={`${window.location.origin}/to/${formId}`}
						onClick={saveDataIntoFirestore}
					/>
					<UserMenu />
				</footer>
			</AdminNavbar>
			{/* Form Body */}
			<FormBody
				questions={questions}
				setQuestions={setQuestions}
			/>
		</div>
	);
};

export default FormAdmin;
