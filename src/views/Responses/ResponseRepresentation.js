import React, { useEffect, useState } from 'react';
import ResponsesGraph from './ResponsesGraph';

const responseTemplate = (title, options) => {
	return { title: title, options: options };
};
const ResponseRespresentation = ({ responses }) => {
	const [ques, setQues] = useState([]);
	useEffect(() => {
		// Create template first
		const q = [];
		let op = {};
		responses[0].responseData.forEach((response, id) => {
			op[response.choice] = 0;
			q.push(responseTemplate(response.title, op));
			op = {};
		});
		// Populate Data in template
		q.forEach((ques, id) => {
			responses.forEach((r, i) => {
				let currQues = r.responseData.filter(
					(q) => q.title === ques.title
				)[0];
				currQues.choice in ques.options
					? (ques.options[currQues.choice] =
							ques.options[currQues.choice] + 1)
					: (ques.options[currQues.choice] = 1);
			});
		});
		setQues(q);
	}, []);
	return (
		<div>
			{ques.map((q, id) => (
				<ResponsesGraph
					key={id}
					title={q.title}
					options={q.options}
				/>
			))}
		</div>
	);
};
export default ResponseRespresentation;

// s
