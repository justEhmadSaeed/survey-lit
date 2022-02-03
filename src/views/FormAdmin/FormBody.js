import { CheckIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import QuestionContent from './QuestionContent';

const FormBody = () => {
	const [questions, setQuestions] = useState([
		{
			title: '',
			desc: '',
			choices: [
				'Choice 1',
				'Choice 2',
			]
		}
	]);
	const [selectedQuestion, setSelectedQuestion] = useState(0);

	const addQuestionsHandler = () => {
		const tempQuestions = [...questions];
		tempQuestions.push({
			title: '',
			desc: '',
			choices: []
		});
		setQuestions(tempQuestions);
	};

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
							{questions.map((ques, i) => (
								<li
									className={`${
										selectedQuestion === i
											? 'bg-template-hover-color'
											: ''
									} flex justify-between items-center py-3 pr-1 pl-4 cursor-pointer`}
									key={i}
								>
									<button
										className="w-full"
										onClick={() => {
											setSelectedQuestion(i);
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
										<div className="ml-3 break-words flex-1 overflow-hidden">
											{ques.title}
										</div>
									</button>
									<button
										className="p-1 rounded-lg hover:bg-template-hover-color"
										onClick={() => {}}
									>
										<TrashIcon className="h-4 w-4 text-template-auth-text" />
									</button>
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
				selectedQuestion={selectedQuestion}
				question={questions[selectedQuestion]}
			/>
			<section className="w-64 border">Right Sidebar</section>
		</main>
	);
};

export default FormBody;
