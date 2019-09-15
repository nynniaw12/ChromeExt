

console.log("Chrome extension is running!");

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// A message is received
function receiver(request, sender, sendResponse) {
  console.log(request.onoff);
  if (request.onoff === 0) {
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
    }
    if (request.onoff === 2) {
      location.reload();
  }
}
