import React, {useState} from 'react';






const DateRangeForm = ({date, setDate, refresh, setRefresh}) => {
	

	function handleDateChange(event){
		setDate({...date, [event.target.id]: event.target.value})
	}
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
