import { CheckIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import QuestionContent from './QuestionContent';
import { nanoid } from 'nanoid';
const FormBody = () => {
	const [questions, setQuestions] = useState([
		{
			id: nanoid(),
			title: '',
			desc: '',
			choices: [{ id: nanoid(), text: '' }]
		}
	]);
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

	const addChoice = (index) => {
		const tempQuestions = [...questions];
		tempQuestions[index].choices.push({
			id: nanoid(),
			text: ''
		});
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

	// console.log(questions);
	return (
		<main className="flex flex-col md:flex-row form-admin-remaining-height justify-around flex-nowrap">
			<section className="w-64 border">
				<div className="flex flex-col justify-between h-full">
					{/* Add Questions */}
					<div className="flex p-4 justify-between items-center">
						<span className="text-sm">Content</span>
						<button
							className="btn bg-template-auth-border"
							onClick={addQuestionsHandler}
						>
							<span className="text-lg px-1">+</span>
						</button>
					</div>
					{/* Questions List */}
					<div className="flex-1 h-full overflow-y-auto border-b">
						<div className="">
							{questions.map((question, i) => (
								<li
									className={`${
										selectedQuestion ===
										question.id
											? 'bg-template-hover-color'
											: ''
									} w-full flex justify-between items-center py-3 pr-1 pl-4 cursor-pointer`}
									key={question.id}
								>
									<button
										className="w-full flex items-center"
										onClick={() => {
											setSelectedQuestion(
												question.id
											);
										}}
									>
										<div className="flex flex-nowrap items-center">
											<div className="flex items-center justify-between h-6 w-14 pr-2 rounded bg-template-question-icon">
												<div className="p-1">
													<CheckIcon className="h-4 w-4" />
												</div>
												<div className="text-sm">
													{i + 1}
												</div>
											</div>
										</div>
										<div className="ml-3 w-28 text-left whitespace-nowrap overflow-ellipsis text-xs flex-1 overflow-hidden">
											{question.title}
										</div>
									</button>
									{questions.length > 1 && (
										<button
											className="p-1 rounded-lg hover:bg-template-hover-color"
											onClick={() => {
												deleteQuestion(
													question.id
												);
											}}
										>
											<TrashIcon className="h-4 w-4 text-template-auth-text" />
										</button>
									)}
								</li>
							))}
						</div>
					</div>
					{/* Endings */}
					<div className="h-40">Endings</div>
				</div>
			</section>
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
			/>
			<section className="w-64 border">Right Sidebar</section>
		</main>
	);
};

export default FormBody;
