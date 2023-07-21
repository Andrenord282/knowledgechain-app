class ErrorService extends Error {
    constructor(name, message, errorLogList = []) {
        super(message);
        this.name = name;
        this.errorLogList = errorLogList;
    }
}

export { ErrorService };
