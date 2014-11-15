# Logich

`logich` is an extensible plugin based logging system inpired by `express` package and Node.js way of writing code.
`logich` itself is just a empty shell to which you add middleware to process your logs.

For example, if you just use `logich` without any registered middleware it will do nothing:

```js
var logich = require("logich");

var logger = logich();
logger.log("Hello world!"); // Does nothing...
```
 
To make it do something, you have to register middleware that will process your logs.
You can use basic built-in middleware as follows: 
    
    var logger = logich()
        .use(logich.object)     // Converts message to object.
        .use(logich.time)       // Adds timestamp in JSON format to the object.
        .use(logich.json)       // Format log entry line as JSON.
        .use(logich.console);   // Prints messages to STDIN.
    
    logger.log("Hello world!");
    
    // Outputs the below in STDIN:
    //{ message: 'Hello world!', time: '2014-11-15T15:54:46.059Z' }

## Middleware

Write your own middleware:

    logger.use(function(message, next) {
        // Do something with the log message...
        
        // Execute next middleware callback:
        next(message);
    });

Or use already written middleware:

- [`logich-loggly`](https://www.npmjs.org/package/logich-loggly) - write logs to [loggly.com](http://loggly.com).
- [`logich-file`](https://www.npmjs.org/package/logich-file) - write to a local file on a disk.
- [`logich-file-dated`](https://www.npmjs.org/package/logich-file-dated) - write logs to files that rotate by date.