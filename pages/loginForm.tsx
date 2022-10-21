import { LockClosedIcon, SunIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import validator from 'validator';

export const LoginForm = () => {
	// create variables for the form fields
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [passwordError, setPasswordError] = useState('');
	const [emailError, setEmailError] = useState('');

	const [isValidate, setIsValidate] = useState(false);
	const [transform, setTransform] = useState(false);

	const handleMouseEnter = () => {
		if (!isValidate && boxStyle.float === 'left') {
			setTransform(true);
		} else if (!isValidate && boxStyle.float === 'right') {
			setTransform(false);
		}
	};
	const handleMouseLeave = () => {
		// setTransform(false);
	};

	const validateEmail = (e: { target: { value: any } }) => {
		setEmail(e.target.value);

		if (validator.isEmail(email)) {
			setEmailError('Valid Email :)');
			setIsValidate(true);
		} else {
			setEmailError('Enter valid Email!');
			setIsValidate(false);
		}
	};

	const validatePassword = (e: { target: { value: any } }) => {
		setPassword(e.target.value);

		if (validator.isFloat(password)) {
			setPasswordError('Valid Password :)');
			setIsValidate(true);
		} else {
			setPasswordError('Enter valid Password!');
			setIsValidate(false);
		}
	};

	// create a function to handle the form submission
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(email, password);
	};

	// create a function to handle the email field change
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	// create a function to handle the password field change
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const boxStyle = {
		float: transform ? 'right' : 'left',
		backgroundColor: isValidate ? '#1eb500' : '#00a3b5',
	};

	return (
		<>
			<div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='w-full max-w-md space-y-8'>
					<div>
						<h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
							Sign in to your account
						</h2>
					</div>
					<form
						className='mt-8 space-y-6'
						action='#'
						method='POST'
						onSubmit={handleSubmit}
					>
						<div className='-space-y-px rounded-md shadow-sm'>
							<div>
								<label
									htmlFor='email-address'
									className='sr-only'
								>
									Email address
								</label>
								<input
									id='email-address'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm my-2'
									placeholder='Email address'
									onChange={(e) => validateEmail(e)}
								/>
								<span className='text-red-500'>
									{emailError}
								</span>
							</div>
							<div>
								<label htmlFor='password' className='sr-only'>
									Password
								</label>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm my-2'
									placeholder='Password'
									onChange={validatePassword}
								/>
								<span className='text-red-500'>
									{passwordError}
								</span>
							</div>
						</div>

						<div>
							<button
								style={boxStyle}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								type='submit'
								className=' w-4/12 group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							>
								<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
									<LockClosedIcon
										className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
										aria-hidden='true'
									/>
								</span>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
