// web/js/js_library.js

window.jsPromiseFunction = function(message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Received from JS: " + message);
      }, 1000);
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
  