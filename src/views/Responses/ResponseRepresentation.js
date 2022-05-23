import { ChartBarIcon, ChartPieIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import {
	CHART,
	REPRESENTATION
} from 'utils/constants/chartConstants';
import ResponsesGraph from './ResponsesGraph';

const responseTemplate = (title, options) => {
	return { title: title, options: options };
};
const ResponseRespresentation = ({ responses }) => {
	const [ques, setQues] = useState([]);
	const [chartType, setChartType] = useState(CHART.PIE);
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
					type={chartType}
				/>
			))}
		</div>
	);
};
export default ResponseRespresentation;
