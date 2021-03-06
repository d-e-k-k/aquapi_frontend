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

const TemperatureGraph = ({ temperatureData, keys, setKeys }) => {
	const data = temperatureData;

	if(temperatureData && temperatureData.length > 0 && keys && keys.length>0){

		return (
			
			<ResponsiveContainer width='99%' aspect={4.0 / 2.0}>
				<LineChart data={data}>
					<CartesianGrid stroke='#ccc' />
					<XAxis dataKey={keys[0]}/>
					<YAxis />
					<Line
						type='monotone'
						dataKey={keys[1]}
						stroke='#8884d8'
						strokeWidth={4}
					/>
					<Tooltip/>
				</LineChart>
			</ResponsiveContainer>
		);
	}else{
		return (
			<div>
				<h3>Graph: No Data</h3>
				<h3>Possible Reason: </h3>
				<p>The date range you selected had no data.</p>
				<p>Please try another date range</p>
				<p>
					The Backedn is not awake. The backend is hosted on heroku and may take up to 30 seconds to wake
					up and return data when you first access the application
				</p>
			</div>
		);
	}
};

export default TemperatureGraph;
