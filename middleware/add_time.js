module.exports = function(message, next) {
    message.time = (new Date).toJSON();
    next(message);
};