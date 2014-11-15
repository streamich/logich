module.exports = function(message, next) {
    next(JSON.stringify(message));
};