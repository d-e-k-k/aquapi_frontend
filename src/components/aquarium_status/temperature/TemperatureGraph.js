import React from 'react';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';

const TemperatureGraph = ({ temperatureData }) => {
	const data = temperatureData;

	return (
		<ResponsiveContainer width='99%' aspect={4.0 / 2.0}>
			<LineChart data={data}>
				<CartesianGrid stroke='#ccc' />
				<XAxis dataKey='time' />
				<YAxis />
				<Line
					type='monotone'
					dataKey='temperature'
					stroke='#8884d8'
					strokeWidth={4}
				/>
				<Tooltip />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default TemperatureGraph;
