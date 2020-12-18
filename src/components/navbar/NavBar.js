import React, { useState, useEffect } from 'react';
import styles from './NavBar.css';

const NavBar = ({ authenticated, setAuthenticated, setDisplayLogin }) => {
	function handleSignOut() {
		localStorage.removeItem('token');
		setAuthenticated(false);
	}

	function renderLoginPage() {
		setDisplayLogin(true);
	}

	useEffect(() => {}, [authenticated]);

	return (
		<header>
			<h1>AquaPi</h1>
			<ul>
				<li>Home</li>
				{authenticated ? (
					<li onClick={handleSignOut}>Sign Out</li>
				) : (
					<li onClick={renderLoginPage}>Login</li>
				)}
				<li>Register</li>
			</ul>
		</header>
	);
};

export default NavBar;
