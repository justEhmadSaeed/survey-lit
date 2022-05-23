import BarChart from 'components/BarChart';
import { OperationType } from 'firebase/auth';
import React from 'react';
import {
	HorizontalBarSeries,
	RadialChart,
	XYPlot
} from 'react-vis/dist';
const ResponsesGraph = ({ title, options }) => {
	const data = Object.values(options).map((op) => ({
		angle: op
	}));
	const barData = [];
	for (let op in options) {
		barData.push({ x: op, y: options[op] });
	}
	console.log(barData);
	return (
		<div>
			Responses graph
			<div>{title}</div>
			<RadialChart data={data} width={300} height={300} />
			{/* <XYPlot
				width={300}
				height={300}
				xDomain={[0, 10]}
				yDomain={[0, 10]}
			>
				<HorizontalBarSeries
					data={barData}
					width={300}
					height={300}
				/>
			</XYPlot> */}
			<BarChart data={barData} />
		</div>
	);
};

export default ResponsesGraph;
