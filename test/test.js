const LoggerService = require( '../index' );
const should = require( 'should' );
const sinon = require( 'sinon' );

describe( 'LoggerService', () => {

    let loggerService;
    let testMessage = "Test Message";

    beforeEach(() => {
        sinon.spy(console, "log");
        sinon.spy(console, "warn");
        sinon.spy(console, "error");
        sinon.spy(console, "info");
    });

    afterEach(function() {
        console.log.restore();
        console.warn.restore();
        console.error.restore();
        console.info.restore();
    });

    describe('#debug tests', () => {

        it('Should log a message when logging is enabled', () => {
            loggerService = new LoggerService(true);
            loggerService.debug(testMessage);
            sinon.assert.calledOnce(console.log);
            sinon.assert.calledWith(console.log, testMessage);
        });

        it('Should not log a message when logging is disabled', () => {
            loggerService = new LoggerService(false);
            loggerService.debug(testMessage);
            sinon.assert.notCalled(console.log);
        });
    });

    describe('#info tests', () => {

        it('Should log an info message when logging is enabled', () => {
            loggerService = new LoggerService(true);
            loggerService.info(testMessage);
            sinon.assert.calledOnce(console.info);
            sinon.assert.calledWith(console.info, testMessage);
        });

        it('Should log an info message when logging is disabled', () => {
            loggerService = new LoggerService(false);
            loggerService.info(testMessage);
            sinon.assert.calledOnce(console.info);
            sinon.assert.calledWith(console.info, testMessage);
        });
    });

    describe('#warn tests', () => {

        it('Should log a warn message when logging is enabled', () => {
            loggerService = new LoggerService(true);
            loggerService.warn(testMessage);
            sinon.assert.calledOnce(console.warn);
            sinon.assert.calledWith(console.warn, testMessage);
        });

        it('Should log a warn message when logging is disabled', () => {
            loggerService = new LoggerService(false);
            loggerService.warn(testMessage);
            sinon.assert.calledOnce(console.warn);
            sinon.assert.calledWith(console.warn, testMessage);
        });
    });

    describe('#error tests', () => {

        it('Should log an error message when logging is enabled', () => {
            loggerService = new LoggerService(true);
            loggerService.error(testMessage);
            sinon.assert.calledOnce(console.error);
            sinon.assert.calledWith(console.error, testMessage);
        });

        it('Should log a warn message when logging is disabled', () => {
            loggerService = new LoggerService(false);
            loggerService.error(testMessage);
            sinon.assert.calledOnce(console.error);
            sinon.assert.calledWith(console.error, testMessage);
        });
    });
});

