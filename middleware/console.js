if((typeof console == "object") && (console.log) && (typeof console.log == "function")) {
    module.exports = function (message, next) {
        console.log(message);
        next();
    };
} else {
    module.exports = function(message, next) {
        next();
    };
}