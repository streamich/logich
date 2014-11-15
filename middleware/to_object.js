module.exports = function(message, next) {
    if(typeof message != "object") {
        message = {message: message};
    }
    next(message);
};