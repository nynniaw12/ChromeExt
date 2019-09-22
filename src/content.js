// Things are happening
console.log("Chrome extension is running!");

// Content scripts can manipulate the DOM


// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

var a = 0;

function receiver(request, sender, sendResponse) {
  if (request.message === "browser action") {
    var check = (a < 1) ? a++:a--;

    chrome.storage.sync.get({
      backgroundColor: 0,
      textColor: 0,
      colorizeBg: false,
      colorizeTxt: false,
      headers: false,
      images: false
    }, function(items) {
      if (a === 1) {
        if (items.colorizeBg) {
          var bgcols = ['#f4f4f4', '#363837', '#5d5d5d', '#b4b4b4', '#5e766e'];
          var elts = document.getElementsByTagName('*');
          for (var i = 0; i < elts.length; i++) {
            elts[i].style['background-color'] = bgcols[items.backgroundColor];
          }
        }
        if (items.colorizeTxt) {
          var textcols = ['#2deab0', '#a92dea', '#2d9aea', '#b40f0f', '#d6d607'];
          var texts = document.getElementsByTagName('*');
          for (var i = 0; i < texts.length; i++) {
            texts[i].style.color = textcols[items.textColor];
          }
        }
        if (!items.images){
          var images = document.getElementsByTagName('img');
          while(images.length > 0) {
              images[0].parentNode.removeChild(images[0]);
          }
        }
        if (!items.headers) {
          var headers = document.getElementsByTagName('h1');
          while(headers.length > 0) {
              headers[0].parentNode.removeChild(headers[0]);
          }
          var headers2 = document.getElementsByTagName('h2');
          while(headers2.length > 0) {
              headers2[0].parentNode.removeChild(headers2[0]);
          }
          var headers3 = document.getElementsByTagName('h3');
          while(headers3.length > 0) {
              headers3[0].parentNode.removeChild(headers3[0]);
          }
          var headers4 = document.getElementsByTagName('h4');
          while(headers4.length > 0) {
              headers4[0].parentNode.removeChild(headers4[0]);
          }
          var headers5 = document.getElementsByTagName('h5');
          while(headers5.length > 0) {
              headers5[0].parentNode.removeChild(headers5[0]);
          }
          var headers6 = document.getElementsByTagName('h6');
          while(headers6.length > 0) {
              headers6[0].parentNode.removeChild(headers6[0]);
          }
        }
      // Send a message back!
      chrome.runtime.sendMessage({ "message": "thank you" });
    }
    });
    if (a === 0) {
      location.reload();
    // Send a message back!
    chrome.runtime.sendMessage({ "message": "thank you" });
  }
  }
}
