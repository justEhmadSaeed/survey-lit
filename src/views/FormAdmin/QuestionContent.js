import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QuestionChoice from './QuestionChoice';
import { questionPropType } from 'utils/constants/prop-types.constant';

const QuestionContent = ({
	question,
	index,
	handleQuestionChange,
	addChoice,
	deleteChoice
}) => {
	// Initialize empty state
	const [localQuestion, setLocalQuestion] = useState({
		title: '',
		desc: ''
	});

	const handleInputChange = (name) => (event) => {
		const tempQuestion = { ...localQuestion };
		tempQuestion[name] = event.target.value;
		setLocalQuestion(tempQuestion);
	};

	const handleChoiceChange = (choice) => {
		const tempQuestion = { ...localQuestion };
		const index = tempQuestion.choices.findIndex(
			(op) => op.id === choice.id
		);
		if (index === -1) return;
		tempQuestion.choices[index] = choice;
		handleQuestionChange(tempQuestion);
	};

	useEffect(() => {
		// Set state to the selected question
		if (question.id) {
			setLocalQuestion(question);
		}
	}, [question]);

	return (
		<section className="flex-1 pt-8 md:px-4 pb-16 h-full bg-template-dashboard-bg dark:bg-template-dark-green dark:text-white">
			<div className="w-full h-full flex justify-center items-start rounded-lg shadow-md bg-white dark:bg-template-very-dark-green overflow-hidden">
				<div className="mt-32 text-left flex justify-start items-start w-3/4 h-80 overflow-auto">
					<div className="flex items-center mr-2 text-template-maroon dark:text-template-green">
						<span>{index + 1}</span>
						<ArrowRightIcon className="h-3 w-3 ml-1" />
					</div>
					<div className="">
						<div className="w-full flex flex-col">
							<input
								type="text"
								name="title"
								placeholder="Your question here ..."
								className="italic outline-none text-lg bg-transparent"
								autoComplete="off"
								value={localQuestion.title}
								onChange={handleInputChange('title')}
								onBlur={() =>
									// Update parent state only after leaving the focus of input field
									handleQuestionChange(
										localQuestion
									)
								}
							/>
							<input
								type="text"
								name="description"
								placeholder="Description (optional)"
								className="italic outline-none text-sm mt-1 text-template-auth-text bg-transparent dark:text-template-auth-border"
								autoComplete="off"
								value={localQuestion.desc}
								onChange={handleInputChange('desc')}
								onBlur={() =>
									handleQuestionChange(
										localQuestion
									)
								}
							/>
						</div>
						<div className="mt-6">
							<ul className="max-w-full flex flex-col flex-wrap items-stretch">
								{localQuestion.choices &&
									localQuestion.choices.map(
										(choice, i) => (
											<QuestionChoice
												key={choice.id}
												choice={choice}
												handleChoiceChange={
													handleChoiceChange
												}
												deleteChoice={
													deleteChoice
												}
												showDeleteIcon={
													localQuestion
														.choices
														.length > 1
												}
												index={i}
											/>
										)
									)}
								<li className="w-full mb-2">
									<button
										className="text-template-maroon mt-2 underline dark:text-template-green"
										onClick={() =>
											addChoice(index)
										}
									>
										Add choice
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

QuestionContent.propTypes = {
	question: questionPropType,
	index: PropTypes.number.isRequired,
	handleQuestionChange: PropTypes.func.isRequired,
	addChoice: PropTypes.func.isRequired,
	deleteChoice: PropTypes.func.isRequired
};

QuestionContent.defaultProps = {
	question: {
		id: '',
		title: '',
		desc: '',
		choices: [{ id: '', text: '' }]
	}
};
export default QuestionContent;
