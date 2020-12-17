import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios'

const m = moment();
let current_formatted_date = `${m.date()}-${m.month() + 1}-${m.year()}`;

const DateRangeForm = ({setTemperatureData}) => {
	//Added
	const [date, setDate] = useState({
		start: current_formatted_date,
		end: current_formatted_date,
	});
	const [refresh, setRefresh] = useState(false);
	function handleDateChange(event) {
		setDate({ ...date, [event.target.id]: event.target.value });
	}

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

	//^^Added
	function handleDateRangeSubmint(event) {
		event.preventDefault();
		refresh ? setRefresh(false) : setRefresh(true);
	}

	return (
		<form onSubmit={handleDateRangeSubmint}>
			<label>
				Start Date:
				<input
					type='text'
					id='start'
					defaultValue={date.start}
					required
					onChange={handleDateChange}
				/>
			</label>
			<label>
				End Date:
				<input
					type='text'
					id='end'
					defaultValue={date.end}
					required
					onChange={handleDateChange}
				/>
			</label>
			<input type='submit' />
		</form>
	);
};

export default DateRangeForm;
