
var rates = document.getElementsByName('text');
var rates2 = document.getElementsByName('background');



function save_options() {
  for(var i = 0; i < rates.length; i++){
      if(rates[i].checked){
          rate_value = i;
      }
  }
  var rate_value2;
  for(var i = 0; i < rates2.length; i++){
      if(rates2[i].checked){
          rate_value2 = i;
      }
  }
  var background = document.getElementById('colorizebg').checked;
  var text = document.getElementById('colorizetxt').checked;
  var headers = document.getElementById('headers').checked;
  var images = document.getElementById('images').checked;
  console.log("Text color:" + rate_value);
  console.log("Background color:" + rate_value2);

  chrome.storage.sync.set({
    backgroundColor: rate_value2,
    textColor: rate_value,
    colorizeBg: background,
    colorizeTxt: text,
    headers: headers,
    images: images
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });

};
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    backgroundColor: 0,
    textColor: 0,
    colorizeBg: false,
    colorizeTxt: false,
    headers: false,
    images: false
  }, function(items) {
    document.getElementById('colorizebg').checked = items.colorizeBg;
    document.getElementById('colorizetxt').checked = items.colorizeTxt;
    document.getElementById('headers').checked = items.headers;
    document.getElementById('images').checked = items.images;
    rates[items.textColor].checked=true;
    rates2[items.backgroundColor].checked=true;
  });
}

window.onload=function(){
  restore_options();
  document.getElementById('save').addEventListener('click', save_options);}
