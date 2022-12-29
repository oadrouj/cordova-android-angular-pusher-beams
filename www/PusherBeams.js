/* var exec = cordova.require('cordova/exec');

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
}; */


const PusherBeamsCDV = {
  getRegistrationState: (successCb, errorCb) => {
    cordova.exec(successCb, errorCb, "PusherBeams", "getRegistrationState", []);
  },

  start: (instanceId, successCb, errorCb) => {
    cordova.exec(successCb, errorCb, "PusherBeams", "start", [instanceId]);
  },

  setUserId: (tokenUrl, userId, authToken, successCb, errorCb) => {
    cordova.exec(successCb, errorCb, "PusherBeams", "setUserId", [
      tokenUrl,
      userId,
      authToken,
    ]);
  },

  clear: (successCb, errorCb) => {
    cordova.exec(successCb, errorCb, "PusherBeams", "clear", []);
  },

  getNotification: (successCb, errorCb) => {
    cordova.exec(successCb, errorCb, "PusherBeams", "getNotification", []);
  },

};

/* if (typeof module != 'undefined' && module.exports) {
module.exports = PusherBeams;
} */

module.exports = PusherBeamsCDV;