import React from 'react';

import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries,
	DiscreteColorLegend
} from 'react-vis';

const BarChart = ({ data }) => {
	const BarSeries = VerticalBarSeries;

	return (
		<div>
			<XYPlot
				className="clustered-stacked-bar-chart-example"
				xType="ordinal"
				stackBy="y"
				width={700}
				height={300}
			>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				<BarSeries
					animation="gentle"
					cluster="2015"
					color="#12939A"
					data={data}
				/>
			</XYPlot>
		</div>
	);
};

export default BarChart;
