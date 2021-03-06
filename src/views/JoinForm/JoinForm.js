import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
	getFormData,
	storeFormResponse
} from 'utils/form-data/form-data';
import Loading from 'views/Loading/Loading';
import CurrentQuestion from 'views/JoinForm/CurrentQuestion';
import PATH from 'utils/constants/routing-paths.constant';
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon
} from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

// Starting Point of Join Form
const JoinForm = () => {
	let { formId } = useParams();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState();
	let currentQuestionIndex =
		currentQuestion &&
		questions.findIndex(
			(question) => question.id === currentQuestion.id
		);
	const { handleSubmit } = useFormik({
		initialValues: {
			questions
		},
		async onSubmit() {
			const response = questions.map((question) => {
				let responseQuestion = {
					title: question.title,
					choice: question.choices.filter(
						(choice) => choice.selected
					)[0].text
				};
				return responseQuestion;
			});
			setLoading(true);
			await storeFormResponse(
				formId,
				user.id,
				user.name,
				response
			);
			navigate(`${PATH.DASHBOARD}`);
		}
	});
	useEffect(() => {
		const getData = async () => {
			let data = await getFormData(formId);
			if (!data.error) {
				// setFormName(data.name);
				if (data.questions) {
					data.questions = data.questions.map(
						(question) => {
							question.choices[0].selected = true;
							return question;
						}
					);
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

	const onNextQuestionClick = () => {
		setCurrentQuestion(questions[currentQuestionIndex + 1]);
	};
	const onPreviousQuestionClick = () => {
		setCurrentQuestion(questions[currentQuestionIndex - 1]);
	};

	const onOptionClick = (questionIndex, choiceIndex) => {
		const tempQuestions = [...questions];
		tempQuestions[questionIndex].choices.forEach(
			(choice) => (choice.selected = false)
		);

		tempQuestions[questionIndex].choices[
			choiceIndex
		].selected = true;
		setQuestions(tempQuestions);
	};

	// Display Loading Screen
	if (loading) return <Loading />;
	// Display Errors if any exists
	if (error)
		return (
			<div className="w-full h-screen flex items-center justify-center  dark:bg-template-dark-green dark:text-white">
				<span className="text-xl font-semibold">{error}</span>
			</div>
		);
	// Otherwise render the JoinForm Screen
	return (
		<div className="w-full h-screen overflow-auto bg-template-light-grey dark:bg-template-dark-green dark:text-white">
			<div className="flex flex-col justify-center">
				{/* Content Wrapper */}
				<div className="px-10 text-left">
					<section className="flex-1 pt-8 px-4 pb-16 h-full">
						<div className="w-full h-full flex flex-col justify-start items-center">
							<CurrentQuestion
								question={currentQuestion}
								index={currentQuestionIndex}
								onOptionClick={onOptionClick}
							/>
							<div className="w-3/4 md:w-2/3">
								<button
									type="button"
									className="btn bg-template-green text-white mt-2 font-bold shadow-md"
									onClick={() => {
										if (
											currentQuestionIndex <
											questions.length - 1
										)
											onNextQuestionClick();
										else handleSubmit();
									}}
								>
									<span className="flex items-center text-lg gap-1">
										<span>
											{currentQuestionIndex ===
											questions.length - 1
												? 'Submit'
												: 'OK'}
										</span>
										<span>
											<CheckIcon className="h-6 w-6" />
										</span>
									</span>
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>
			{/* Form Navigation Footer */}
			<div className="fixed w-full flex justify-end p-4 bottom-0">
				{/* Buttons Wrapper */}
				<div className="w-full flex justify-between md:justify-end ">
					<nav className="flex mr-2 text-white">
						<button
							onClick={onPreviousQuestionClick}
							disabled={currentQuestionIndex < 1}
							className={`${
								currentQuestionIndex < 1
									? 'text-gray-400'
									: ''
							} border-r border-white py-1 px-2 rounded-l transition duration-300 cursor-pointer bg-template-maroon hover:opacity-80`}
						>
							<ChevronUpIcon className="h-6 w-6" />
						</button>
						<button
							onClick={onNextQuestionClick}
							disabled={
								currentQuestionIndex >=
								questions.length - 1
							}
							className={`${
								currentQuestionIndex >=
								questions.length - 1
									? 'text-gray-400'
									: ''
							} py-1 px-2 rounded-r transition duration-300 cursor-pointer bg-template-maroon hover:opacity-80`}
						>
							<ChevronDownIcon className="h-6 w-6" />
						</button>
					</nav>
					<Link
						to={PATH.HOME}
						className="btn bg-template-maroon text-white"
					>
						Powered by Survey Lit
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JoinForm;
