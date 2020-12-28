import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Label } from 'recharts';

const m = moment();
let current_formatted_date = `${m.date()}-${m.month() + 1}-${m.year()}`;

const DateRangeForm = ({ setTemperatureData, setRadioBtn }) => {
	const [date, setDate] = useState({
		start: current_formatted_date,
		end: current_formatted_date,
	});
	const [refresh, setRefresh] = useState(false);
	

	function handleRadioSelect(event){
		console.log(event);
		setRadioBtn(event.target.id)
	}

	function handleDateChange(event) {
		setDate({ ...date, [event.target.id]: event.target.value });
	}

	const url = 'http://localhost:8000/temperatures/range/';
	
	
	useEffect(() => {
		axios
			.get(url, { params: { start: date.start, end: date.end } })
			.then((res) => {
				console.log(res.data);
				setTemperatureData(res.data);
			})
			.catch(console.error);
	}, [refresh]);

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
					class='input-login'
					placeholder='DD-MM-YYYY'
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
					class='input-login'
					placeholder='DD-MM-YYYY'
				/>
			</label>
			<label>
				Hourly
				<input
					type='radio'
					id='hourly'
					value='hourly'
					name='view'
					onClick={handleRadioSelect}
					data-url='http://localhost:8000/temperatures/range'
				/>
			</label>
			<label>
				Bidaily
				<input
					type='radio'
					id='bidaily'
					value='bidaily'
					name='view'
					onClick={handleRadioSelect}
				/>
			</label>
			<label>
				Daily
				<input
					type='radio'
					id='daily'
					value='daily'
					name='view'
					onClick={handleRadioSelect}
					data-url='http://localhost:8000/temperatures/interval'
				/>
			</label>
			<button type='submit' class='login-button'>
				Submit
			</button>
		</form>
	);
};

export default DateRangeForm;
