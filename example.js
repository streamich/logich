var logich = require("./logich");

var logger = logich()
    .use(logich.object)
    .use(logich.time)
    .use(logich.json)
    .use(logich.console);

logger.log("Hello world!");
