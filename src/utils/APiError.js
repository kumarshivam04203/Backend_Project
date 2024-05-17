class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something want wrong",
    errors = [],
    statck = "",
  ) {
    //constructor ke value ko overRide karna
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.contructor);
    }
  }
}


export {ApiError}