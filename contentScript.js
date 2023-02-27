function enableDarkMode() {
    // Set background color to black
    document.body.style.backgroundColor = "#000";
    
    // Set text color to white
    document.body.style.color = "#fff";
    
    // Find all images and invert their colors
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      images[i].style.filter = "invert(100%)";
    }
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command === "enableDarkMode") {
      enableDarkMode();
    }
  });
  
  // Send a message to the background script to enable dark mode on page load
  chrome.runtime.sendMessage({command: "enableDarkMode"});
  