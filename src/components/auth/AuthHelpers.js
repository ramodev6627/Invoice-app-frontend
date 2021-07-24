const validateSignup = (val) => {
	let errors = {};

	if (!val.email) {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
		errors.email = 'Invalid email address';
	}

	if (!val.password) {
		errors.password = 'Password is required';
	} else if (val.password.length < 8) {
		errors.password = 'Password must be at least 8 characters';
	}

	if (!val.username) {
		errors.username = 'Username is required';
	}

	return errors;
};

const validateLogin = (val) => {
	let errors = {};

	if (!val.email) {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
		errors.email = 'Invalid email address';
	}

	if (!val.password) {
		errors.password = 'Password is required';
	} else if (val.password.length < 8) {
		errors.password = 'Password must be at least 8 characters';
	}

	return errors;
};

let signupInitialValues = {
	username: '',
	email: '',
	password: '',
};

let loginInitialValues = {
	email: '',
	password: '',
};

export { validateSignup, validateLogin, signupInitialValues, loginInitialValues };
