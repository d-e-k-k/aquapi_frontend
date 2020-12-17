import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ authenticated, setAuthenticated, setDisplayLogin }) => {
	const initialFormState = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function closeLoginModal(event) {
		if(event.target.id === "modal-login"){
			setDisplayLogin(false)
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'https://mighty-lake-45709.herokuapp.com/token/login/',
			data: {
				email: formState.email,
				password: formState.password,
			},
		})
			.then((res) => {
				localStorage.setItem('token', res.data.auth_token);
				setAuthenticated(true);
			})
			.catch(console.error);
	}

	return (
		<div id='modal-login' onClick={closeLoginModal}>
			<div id='modal-login-textbox'>
				<form onSubmit={handleSubmit}>
					<label>
						Email:
						<input id='email' class='input-login' type='email' onChange={handleChange} />
					</label>
					<label>
						Password:
						<input id='password' class='input-login' type='password' onChange={handleChange} />
					</label>
					<input type='submit' />
				</form>
			</div>
		</div>
	);
};

export default Login;
