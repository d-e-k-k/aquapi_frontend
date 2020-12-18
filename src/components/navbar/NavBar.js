import React, { useState, useEffect } from 'react';
import styles from './NavBar.css';

const NavBar = ({ authenticated, setAuthenticated, setDisplayLogin, displayDash, setDisplayDash, setDisplayHome }) => {
	function handleSignOut() {
		localStorage.removeItem('token');
		setAuthenticated(false);
	}

	function renderLoginPage() {
		setDisplayLogin(true);
	}

	function openDash(){
		setDisplayDash(true)
		setDisplayHome(false)
		
	}

	function openHome(){
		setDisplayDash(false)
		setDisplayHome(true)
	}
	useEffect(() => {}, [authenticated]);

	return (
		<header>
			<h1>AquaPi</h1>
			<ul class="links">
				{displayDash ? <li onClick={openHome}>Home</li> : <li onClick={openDash}>Dash</li>}
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
