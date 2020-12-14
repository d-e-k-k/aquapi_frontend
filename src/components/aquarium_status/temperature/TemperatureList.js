import React, { useEffect, useState } from 'react';
import axios from 'axios';
import datepicker from 'js-datepicker';

const TemperatureList = () => {
	const [temperatureData, setTemperatureData] = useState();
	const [endDate, setEndDate] = useState();
	const [startDate, setStartDate] = useState();
	const [showTemperatures, setShowTemperatures] = useState(false);
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
	return (
		<div>
			<h3 onClick={toggleShowTemperatures}>Temperatures</h3>
			{showTemperatures ? (
				<div>
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
			) : (
				null
			)}
		</div>
	);
};

export default TemperatureList;
