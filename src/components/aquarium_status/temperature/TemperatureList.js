import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DateRangeForm from './DateRangeForm';
import moment from 'moment';
import TemperatureGraph from './TemperatureGraph';

const m = moment();
let current_formatted_date = `${m.date()}-${m.month() + 1}-${m.year()}`;

const TemperatureList = () => {
	const [temperatureData, setTemperatureData] = useState();
	const [showTemperatures, setShowTemperatures] = useState(false);
	const [date, setDate] = useState({
		start: current_formatted_date,
		end: current_formatted_date,
	});
	const [refresh, setRefresh] = useState(false);

	const url = 'https://mighty-lake-45709.herokuapp.com/temperatures/range/';
	// const url = 'http://localhost:8000/temperatures/range/';
	// const url = './temp_seeds.json';
	useEffect(() => {
		axios
			.get(url, { params: { start: date.start, end: date.end } })
			.then((res) => {
				setTemperatureData(res.data);
			})
			.catch(console.error);
	}, [refresh]);

	function toggleShowTemperatures() {
		showTemperatures ? setShowTemperatures(false) : setShowTemperatures(true);
	}

	return (
		<div>
			<h3 onClick={toggleShowTemperatures}>Temperatures</h3>
			{showTemperatures ? (
				<div>
					
					<DateRangeForm
						date={date}
						setDate={setDate}
						refresh={refresh}
						setRefresh={setRefresh}
					/>
					<div class='graph-table-con'>
						
						<TemperatureGraph temperatureData={temperatureData}/>
						<table id='customers' class='table'>
							<tr>
								<th>Date</th>
								<th>Time</th>
								<th>Temperature</th>
							</tr>
							{temperatureData
								? temperatureData.map((data) => {
										return (
											<tr key={data.key}>
												<td>{data.date}</td>
												<td>{data.time}</td>
												<td>{data.temperature}</td>
											</tr>
										);
								  })
								: null}
						</table>
					</div>
					{/* <ul>
						{temperatureData
							? temperatureData.map((temperatureObj) => {
									return (
										<li key={temperatureObj.id}>
											Date: {temperatureObj.date} Time: {temperatureObj.time.slice(0,5)}{' '}
											Temp F: {temperatureObj.temperature.toFixed(2)}
										</li>
									);
							  })
							: null}
					</ul> */}
				</div>
			) : null}
		</div>
	);
};

export default TemperatureList;
