import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Label } from 'recharts';
import { apiUrl } from '../../../config';


const m = moment();
let mm = (m.month() + 1).toString();
let dd = (m.date()).toString();
if(mm.length === 1){
	mm = `0${mm}`
}
if (dd.length === 1) {
	dd = `0${dd}`;
}

let current_formatted_date = `${m.year()}-${mm}-${dd}`;

const DateRangeForm = ({ setTemperatureData, setRadioBtn, radioBtn }) => {
	const [date, setDate] = useState({
		start: current_formatted_date,
		end: current_formatted_date,
	});
	const [refresh, setRefresh] = useState(false);
	

	function handleRadioSelect(event){
		console.log(event.target.dataset.url);
		setRadioBtn(event.target.dataset.url)
	}

	function handleDateChange(event) {
		setDate({ ...date, [event.target.id]: event.target.value });
	}

	
	
	
	useEffect(() => {
		axios
			.get(`${apiUrl}${radioBtn}`, {
				params: { start: date.start, end: date.end },
			})
			.then((res) => {
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
					className='input-login'
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
					className='input-login'
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
					data-url='temperatures/range/'
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
					data-url='temperatures/interval/'
				/>
			</label>
			<button type='submit' className='login-button'>
				Submit
			</button>
		</form>
	);
};

export default DateRangeForm;
