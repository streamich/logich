// A simple logging system with middleware.
function Logich() {}
Logich.prototype = {

    // Middleware callbacks registered.
    middleware: [],

    use: function(callback) {
        this.middleware.push(callback);
        return this;
    },

    _recursiveLog: function(message, i) {
        if(!i) i = 0;
        var self = this;
        if(i < self.middleware.length) {
            self.middleware[i](message, function (msg) {
                if (typeof msg === "undefined") {
                    msg = message;
                }
                self._recursiveLog(msg, ++i);
            });
        }
    },

    log: function(message) {
        this._recursiveLog(message);
    }
};

var logich = function() {
    return new Logich;
};

logich.Logich = Logich;

// Register some default middleware.
logich.object   = require("./middleware/to_object");
logich.time     = require("./middleware/add_time");
logich.json     = require("./middleware/json");
logich.console  = require("./middleware/console");

module.exports = logich;