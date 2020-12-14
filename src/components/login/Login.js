import React, {useState} from 'react';

const Login = () => {
    const initialFormState = {
        email: "",
        password: "",
    };
    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (event) => {
			setFormState({ ...formState, [event.target.id]: event.target.value });
		};

    return (
        <div>
            <form>
                <label>
                    Email:
                    <input type='email' onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type='text' onChange={handleChange}/>
                </label>
                <input type='submit'/>
            </form>
        </div>
    );
};

export default Login;