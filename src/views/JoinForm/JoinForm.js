import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFormData } from 'utils/form-data/form-data';
import Loading from 'views/Loading/Loading';
import CurrentQuestion from 'views/JoinForm/CurrentQuestion';

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
		</div>
	);
};

export default JoinForm;
