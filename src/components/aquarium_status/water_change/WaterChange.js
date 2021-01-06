import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WaterChange = () => {
	const [waterChangeData, setWaterChangeDate] = useState();
	const url = 'https://mighty-lake-45709.herokuapp.com/water-change/';

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setWaterChangeDate(res);
			})
			.catch(console.error);
	}, []);

	return (
		<div>
			<h3>Time Remaining Until Next Water Change</h3>
			{waterChangeData ? (
				<div>
					<p>
						Last Water Change On: {waterChangeData.data[0].water_change_date}
					</p>
					<p>
						Interval: Every {waterChangeData.data[0].water_change_interval} days
					</p>
					<button>Changed Water</button>
				</div>
			) : (
				console.log('loading')
			)}
		</div>
	);
};

export default WaterChange;
