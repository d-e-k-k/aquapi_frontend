import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const TemperatureList = () => {
	const [temperatureData, setTemperatureData] = useState();
	const [date, setDate] = useState();
	const [showTemperatures, setShowTemperatures] = useState(false);
	const [refresh, setRefresh] = useState(false);

	const m = moment();
	let current_formatted_date = `${m.date()}-${m.month()}-${m.year()}`;

	function handleDateChange(event) {
		setDate({ ...date, [event.target.id]: event.target.value });
	}

	// const url = 'https://mighty-lake-45709.herokuapp.com/temperatures';
	const url = './temp_seeds.json';
	useEffect(() => {
		axios({
			method: 'GET',
			url: url,
		})
			.then((res) => {
				setTemperatureData(res.data);
			})
			.catch(console.error);
	}, []);

	function toggleShowTemperatures() {
		showTemperatures ? setShowTemperatures(false) : setShowTemperatures(true);
	}

	function handleDateRangeSubmint(event) {
		event.preventDefault();
	}

	return (
		<div>
			<h3 onClick={toggleShowTemperatures}>Temperatures</h3>
			{showTemperatures ? (
				<div>
					<form onSubmit={handleDateRangeSubmint}>
						<label>
							Start Date:
							<input
								type='text'
								id='start'
								value={current_formatted_date}
								required
								onChange={handleDateChange}
							/>
						</label>
						<label>
							End Date:
							<input
								type='text'
								id='end'
								value={current_formatted_date}
								required
								onChange={handleDateChange}
							/>
						</label>
						<input type='submit' />
					</form>
					<ul>
						{temperatureData
							? temperatureData.map((temperatureObj) => {
									return (
										<li>
											Date: {temperatureObj.date} Time: {temperatureObj.time}{' '}
											Temp F: {temperatureObj.temperature.toFixed(2)}
										</li>
									);
							  })
							: null}
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default TemperatureList;
