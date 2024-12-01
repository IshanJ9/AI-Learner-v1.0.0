
    document.getElementById("go-back").addEventListener("click", () => {
      window.location.href = "index.html";
    });
      
    async function getCurrentTab() { 
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab] = await chrome.tabs.query(queryOptions);
      const url = tab.url;
    
      // Send the URL to the Python backend
      fetch("http://127.0.0.1:5000/receive_url", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ url: url })
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              // Display the transcript
              const outputElement = document.getElementById("output");
              outputElement.innerHTML = data.transcript;
          } else {
              // Handle errors
              console.error("Error:", data.error);
              alert(`Error: ${data.error}`);
          }
      })
      .catch(error => console.error("Error sending URL to backend:", error));
  }
  document.getElementById("summarize").addEventListener("click", () => {
    getCurrentTab();
    
});
  