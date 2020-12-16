import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const TemperatureGraph = ({ temperatureData }) => {
	const data = temperatureData;

	return (
		<LineChart width={800} height={400} data={data}>
			<Line type='monotone' dataKey='temperature' stroke='red' />
			<CartesianGrid stroke='#ccc' />
			<XAxis dataKey='time' />
			<YAxis />
		</LineChart>
	);
};

export default TemperatureGraph;
