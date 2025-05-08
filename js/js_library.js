// web/js/js_library.js

window.jsPromiseFunction = function(message) {
  return new Promise((resolve, reject) => {
    if (window.FlutterChannel) {
      window.FlutterChannel.postMessage(message);
      resolve("Message sent to Flutter: " + message);
    } else {
      console.warn("FlutterChannel not available");
      reject("FlutterChannel not available");
    }
  });
};

  
window.jsOpenTabFunction = function(url) {
  return new Promise((resolve, reject) => {
    window.open(url, "_blank");
    resolve("Tab opened");
  });
};

window.getPlatform = function() {
  return "JS Platform";
};
  