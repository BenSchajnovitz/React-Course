import React from 'react';
import './LoginForm.scss';

function LoginForm(){
    return (
		<form>
			<div className="form-group">
				<label htmlFor="email" >Email</label>
				<input
					id="email" 
					name="email"
					type="email"
					className="form-control"
					placeholder="Enter your mail" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					className="form-control"
					placeholder="Enter your password" />
			</div>
			<button type="submit" className="my-btn submit-button">
				Submit
			</button>
			<button className="my-btn clear-button">
				Clear
			</button>
		</form>
    );
}

export default LoginForm;