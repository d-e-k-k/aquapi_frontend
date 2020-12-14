import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const initialFormState = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		axios({
			method: 'POST',
            url: 'https://mighty-lake-45709.herokuapp.com/token/login/',
            data: {
                email: formState.email,
                password: formState.password
            }
        })
        .then(res => {
            localStorage.setItem('token', res.data.auth_token);
            console.log(res.data.auth_token);
        })
        .catch(console.error)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input id='email' type='email' onChange={handleChange} />
				</label>
				<label>
					Password:
					<input id='password' type='text' onChange={handleChange} />
				</label>
				<input type='submit' />
			</form>
		</div>
	);
};

export default Login;
