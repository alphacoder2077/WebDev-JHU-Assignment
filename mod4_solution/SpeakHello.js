(function (window) {
  let helloSpeaker = {

    speak(name) {
      console.log("Hello "+ name);
    }
  }
  
  window.helloSpeaker = helloSpeaker;
})(window)