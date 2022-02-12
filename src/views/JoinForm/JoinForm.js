import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormData } from 'utils/form-data/form-data';
import Loading from 'views/Loading/Loading';
import CurrentQuestion from 'views/JoinForm/CurrentQuestion';
import { PATH_HOME } from 'utils/constants/routing-paths.constant';
import {
	ChevronDownIcon,
	ChevronUpIcon
} from '@heroicons/react/solid';

// Starting Point of Join Form
const JoinForm = () => {
	let { formId } = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState();

	useEffect(() => {
		const getData = async () => {
			let data = await getFormData(formId);
			if (!data.error) {
				// setFormName(data.name);
				if (data.questions) {
					setQuestions(data.questions);
					setCurrentQuestion(data.questions[0]);
				} else {
					setError('No Questions Found!');
				}
			} else setError(data.error);
			setLoading(false);
		};
		getData();
	}, []);
	return loading ? (
		<Loading />
	) : error ? (
		<div className="mt-20 text-lg w-full flex items-center justify-center">
			{error}
		</div>
	) : (
		<div className="w-full h-screen overflow-auto">
			<div className="flex flex-col justify-center">
				{/* Content Wrapper */}
				<div className="px-10 text-left">
					<CurrentQuestion
						question={currentQuestion}
						index={questions.findIndex(
							(question) =>
								question.id === currentQuestion.id
						)}
					/>
				</div>
			</div>
			<div className="fixed w-full flex justify-end p-4 bottom-0">
				{/* Buttons Wrapper */}
				<div className="w-full flex justify-between md:justify-end ">
					<nav className="flex mr-2 text-white">
						<button className="border-r border-white py-1 px-2 rounded-l transition duration-300 cursor-pointer bg-blue-800 hover:opacity-80">
							<ChevronUpIcon className="h-6 w-6" />
						</button>
						<button className="py-1 px-2 rounded-r transition duration-300 cursor-pointer bg-blue-800 hover:opacity-80">
							<ChevronDownIcon className="h-6 w-6" />
						</button>
					</nav>
					<Link
						to={PATH_HOME}
						className="btn bg-blue-800 text-white"
					>
						Powered by Typeform
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JoinForm;
