class APiResponse{
    constructor(statusCode, status, message = 'success') {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.success=statusCode<400
    }
}