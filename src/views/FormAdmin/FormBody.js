import React, { useEffect, useState } from 'react';
import QuestionContent from './QuestionContent';
import { nanoid } from 'nanoid';
import ContentSidebar from './ContentSidebar';
import PropTypes from 'prop-types';

const FormBody = ({ questions, setQuestions }) => {
	const [selectedQuestion, setSelectedQuestion] = useState();

	useEffect(() => {
		if (!selectedQuestion && questions.length > 0) {
			setSelectedQuestion(questions[0].id);
		}
	}, [questions]);
	// Add new question to the questions array
	const addQuestionsHandler = () => {
		const tempQuestions = [...questions];
		tempQuestions.push({
			id: nanoid(),
			title: '',
			desc: '',
			choices: [{ id: nanoid(), text: '' }]
		});
		setQuestions(tempQuestions);
	};
	const handleQuestionChange = (question) => {
		const tempQuestions = [...questions];
		const index = tempQuestions.findIndex(
			(ques) => ques.id === question.id
		);
		if (index === -1) return;
		tempQuestions[index] = question;
		setQuestions(tempQuestions);
	};

	const deleteQuestion = (id) => {
		const tempQuestions = [...questions];
		const index = tempQuestions.findIndex(
			(ques) => ques.id === id
		);
		if (index === -1) return;

		tempQuestions.splice(index, 1);
		setQuestions(tempQuestions);
		if (id === selectedQuestion)
			setSelectedQuestion(tempQuestions.at(-1).id);
	};

	const addChoice = (index) => {
		const tempQuestions = [...questions];
		tempQuestions[index].choices.push({
			id: nanoid(),
			text: ''
		});
		setQuestions(tempQuestions);
	};

	const deleteChoice = (choiceIndex) => {
		const tempQuestions = [...questions];
		const index = tempQuestions.findIndex(
			(ques) => ques.id === selectedQuestion
		);
		if (index === -1) return;
		// Do not delete if there's only one choice left
		if (tempQuestions[index].choices.length < 2) return;

		tempQuestions[index].choices.splice(choiceIndex, 1);
		setQuestions(tempQuestions);
	};

	// console.log(questions);
	return (
		<main className="flex flex-col md:flex-row md:form-admin-remaining-height justify-around flex-nowrap">
			<ContentSidebar
				questions={questions}
				addQuestionsHandler={addQuestionsHandler}
				selectedQuestion={selectedQuestion}
				setSelectedQuestion={setSelectedQuestion}
				deleteQuestion={deleteQuestion}
			/>
			{/* Question Content */}
			<QuestionContent
				index={questions.findIndex(
					(question) => question.id === selectedQuestion
				)}
				question={
					questions[
						questions.findIndex(
							(question) =>
								question.id === selectedQuestion
						)
					]
				}
				handleQuestionChange={handleQuestionChange}
				addChoice={addChoice}
				deleteChoice={deleteChoice}
			/>
			<section className="w-64 border">Right Sidebar</section>
		</main>
	);
};
FormBody.propTypes = {
	questions: PropTypes.array,
	setQuestions: PropTypes.func.isRequired
};

FormBody.defaultProps = {
	questions: []
};

export default FormBody;
