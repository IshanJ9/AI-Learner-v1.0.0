
    // Event listener for the YouTube video button
    const button = document.getElementById("youtube-video")
    button.addEventListener("click", () => {
      window.location.href = "youtube.html";
        //btn.disabled = true;
        // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        //     var url = tabs[0].url;
        //     console.log(url);
        // });
    //   chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    //     var url = tabs[0].url;
    //     console.log(url);
    // });
    //   (async () => {
    //     try {
    //       // Query the currently active tab in the last focused window
    //       const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
      
    //       if (tab && tab.url) {
    //         // Display the URL of the active tab
    //         document.getElementById('output').innerText = `Active Tab URL: ${tab.url}`;
    //         console.log(`Active Tab URL: ${tab.url}`);
    //       } else {
    //         document.getElementById('output').innerText = 'No active tab found.';
    //         console.warn('No active tab found.');
    //       }
    //     } catch (error) {
    //       console.error('Error fetching active tab:', error);
    //       document.getElementById('output').innerText = 'Error fetching active tab.';
    //     }
    //   })();
      
    });
  
    // Event listener for the "Pick a file" button
    document.getElementById("pick-file").addEventListener("click", () => {
      alert("Pick a file functionality coming soon!");
      console.log("Hi");
    });
  
    // Event listener for the settings button (example)
    document.getElementById("settings-button").addEventListener("click", () => {
      alert("Settings functionality coming soon!");
    });


  
  