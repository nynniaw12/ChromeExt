// Things are happening
console.log("Chrome extension is running!");

// Content scripts can manipulate the DOM


// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

var a = 0;

function receiver(request, sender, sendResponse) {
  if (request.message === "browser action") {
      var check = (a < 1) ? a++:a--;
      if (a === 1) {
      var elts = document.getElementsByTagName('*');
      for (var i = 0; i < elts.length; i++) {
        elts[i].style['background-color'] = "#1a2127";
      }
      var texts = document.getElementsByTagName('*');
      for (var i = 0; i < texts.length; i++) {
        texts[i].style.color = '#008f66';
      }
      var images = document.getElementsByTagName('img');
      while(images.length > 0) {
          images[0].parentNode.removeChild(images[0]);
      }
      // Send a message back!
      chrome.runtime.sendMessage({ "message": "thank you" });
    }
    if (a === 0) {
      location.reload();
    // Send a message back!
    chrome.runtime.sendMessage({ "message": "thank you" });
  }
  }
}