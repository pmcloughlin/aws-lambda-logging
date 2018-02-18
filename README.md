# AWS Lambda Logging

A wrapper service for AWS logging.  Service allows turning debug logging off.

Standard logging statements are mapped to the console statements outlined.  

For more information see here:

https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html

## Installation
 
`npm install --save aws-lambda-logging`

## Usage

`aws-lambda-logging` is a wrapper class for lambda logging.  

The class has a constructor argument that allows for turning off debug statements.  All log types still log when debug is turned off.
 
### Methods
* debug( message )
* info( message )
* warn( message )
* error( message )

```
const LoggerService = require( 'aws-lambda-logging' );

let loggerService = new LoggerService(true);
loggerService.debug('log this message');
loggerService.info('log this message');
loggerService.warn('log this message');
loggerService.error('log this message');

```


