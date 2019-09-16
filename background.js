chrome.runtime.getBackgroundPage(function(bg){
  if(bg.sessionDataHTML){
    document.body.innerHTML = bg.sessionDataHTML;
  }
  setInterval(function(){
    bg.sessionDataHTML = document.body.innerHTML
  },1000);

  //do the rest of your work here.
})
