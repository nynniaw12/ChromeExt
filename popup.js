
function setup() {
  noCanvas();

  // Look for a text field and slider
  var selection = select('#onoff');
  selection.input(sendMessage);

  function sendMessage() {
    // Messages are just objects
    var msg = {
      from: 'popup',
      onoff: selection.value()

    }

    // A tab has be selected for the message to be sent
    var params = {
      active: true,
      currentWindow: true
    }
    // This searches for the active tabs in the current window
    chrome.tabs.query(params, gotTabs);

    // Now we've got the tabs
    function gotTabs(tabs) {
      // The first tab is the one you are on
      chrome.tabs.sendMessage(tabs[0].id, msg);//, messageBack);
    }
  }

  // Whenever those interface elements change
  // A message is sent to the content script

}
