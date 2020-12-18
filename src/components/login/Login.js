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
		if (event.target.id === 'modal-login' || event.target.className == 'cancel-btn') {
			setDisplayLogin(false);
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
				setDisplayLogin(false);
			})
			.catch(console.error);
	}

	return (
		<div id='modal-login' onClick={closeLoginModal}>
			<div id='modal-login-textbox'>
				<form onSubmit={handleSubmit}>
					<div class='imgcontainer'>
						<img src='./anemone-1050x700.png' alt='logo' class='avatar' />
					</div>
					<label>
						<b>Email:</b>
						<input
							id='email'
							class='input-login'
							type='email'
							onChange={handleChange}
						/>
					</label>
					<label>
						<b>Password:</b>
						<input
							id='password'
							class='input-login'
							type='password'
							onChange={handleChange}
						/>
					</label>
					<button type='submit' class='login-button'>
						Login
					</button>
					<button class='cancel-btn'>Cancel</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
