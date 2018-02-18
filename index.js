class LoggerService {
    constructor( enableDebugLogging ) {
        this.enableDebugLogging = enableDebugLogging;
    };

    debug(message) {
        if (this.enableDebugLogging) {
            console.log(message);
        }
    };

    info(message) {
        console.info(message);
    };

    error(message) {
        console.error(message);
    };

    warn(message) {
        console.warn(message);
    };
};

module.exports = LoggerService;
