(function (window) {
  let byeSpeaker = {

    speak(name) {
      console.log("Goodbye "+ name);
    }
  }
  
  window.byeSpeaker = byeSpeaker;
})(window)