import React from 'react';


const Register = ({setDisplayRegister}) => {
    function closeRegisterModal(event) {
        if (
            event.target.id === 'modal-login' ||
            event.target.className == 'cancel-btn'
        ) {
            setDisplayRegister(false);
        }
    }
    return (
			<div id='modal-login' onClick={closeRegisterModal}>
				<div id='modal-login-textbox'>
					<h3>Well this is embarrassing</h3>
					<p>
						Sorry this application is still in development and not allowing
						users to register
					</p>
					<button class='cancel-btn'>Cancel</button>
				</div>
			</div>
		);
};

export default Register;