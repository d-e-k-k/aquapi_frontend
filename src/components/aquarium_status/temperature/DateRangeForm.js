import React, {useState, useEffect} from 'react';
import moment from 'moment'

const m = moment();
let current_formatted_date = `${m.date()}-${m.month()}-${m.year()}`;



const DateRangeForm = () => {
	const [date, setDate] = useState({
		start: current_formatted_date,
		end: current_formatted_date
	});

	function handleDateChange(event){
		setDate({...date, [event.target.id]: event.target.value})
	}
	function handleDateRangeSubmint(event) {
		event.preventDefault();
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
