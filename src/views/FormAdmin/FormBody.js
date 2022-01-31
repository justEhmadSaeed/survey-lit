import { CheckIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

const FormBody = () => {
	const [questions, setQuestions] = useState([
		{
			title: '',
			desc: '',
			options: []
		}
	]);

	const addQuestionsHandler = () => {
		const tempQuestions = [...questions];
		tempQuestions.push({
			title: '',
			desc: '',
			options: []
		});
		setQuestions(tempQuestions);
	};

	return (
		<main className="flex form-admin-remaining-height justify-around flex-nowrap">
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
								<div key={i}>
									<li className="flex justify-between items-center py-3 pr-1 pl-4 cursor-pointer">
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
										<button className="p-1 rounded-lg hover:bg-template-hover-color">
											<TrashIcon className="h-4 w-4 text-template-auth-text" />
										</button>
									</li>
								</div>
							))}
						</div>
					</div>
					{/* Endings */}
					<div className="h-40">Endings</div>
				</div>
			</section>
			<section className="flex-1 bg-template-dashboard-bg">
				Center Body
			</section>
			<section className="w-64 border">Right Sidebar</section>
		</main>
	);
};

export default FormBody;
