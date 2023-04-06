class ErrorService extends Error {
	constructor(name, message, arrErrors) {
		super(message);
		this.name = name;
		this.arrErrors = arrErrors;
	}
}

export default ErrorService;
