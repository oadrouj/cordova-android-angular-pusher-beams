var exec = cordova.require('cordova/exec');

var PusherBeams = function() {
console.log('PusherBeams instanced');
};

PusherBeams.prototype.show = function(msg, onSuccess, onError) {
var errorCallback = function(obj) {
onError(obj);
};

var successCallback = function(obj) {
onSuccess(obj);
};

exec(successCallback, errorCallback, 'PusherBeams', 'show', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
module.exports = PusherBeams;
}