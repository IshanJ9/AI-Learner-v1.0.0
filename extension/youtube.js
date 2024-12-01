      // Function to retrieve the current active tab's URL
async function getCurrentTab() { 
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = tab.url;

  // Disable the button during processing
  const btn = document.getElementById("summarize");
  btn.disabled = true;
  btn.innerHTML = "Fetching Transcript...";

  // Call the function to fetch the transcript from the backend
  fetchTranscript(url, btn);
}

// Function to send GET request and fetch the transcript from the Flask backend
function fetchTranscript(url, btn) {
  // Construct the URL with the YouTube video URL as a query parameter
  const requestUrl = `http://127.0.0.1:5000/receive_url?url=${encodeURIComponent(url)}`;

  // Use GET request to fetch the transcript
  fetch(requestUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error("Error fetching transcript: " + response.statusText);
          }
          return response.text(); // Parse plain text response
      })
      .then(transcript => {
          // Display the transcript
          const trans = transcript;
          const outputElement = document.getElementById("output");
          outputElement.innerHTML = transcript;
      })
      .catch(error => {
          console.error("Error:", error);
          alert(`Error: ${error.message}`);
      })
      .finally(() => {
          // Re-enable the button after processing
          btn.disabled = false;
          btn.innerHTML = "Fetch Transcript";
      });
}

async function promptAPI() {
    const { available, defaultTemperature, defaultTopK, maxTopK } =
      await ai.languageModel.capabilities();
  
    console.log(available);
  
    if (available !== "no") {
      const session = await ai.languageModel.create({
        systemPrompt: trans,
      });
  
      const result = await session.prompt(`Generate certain quiz questions based on the given text`);
      const summaryDiv = document.getElementById('summaryContent');
      summaryDiv.textContent = result; // Set the summary text
      const outputElement = document.getElementById("output");
          outputElement.innerHTML = "";
    }
  }

// Add event listener to the button
document.getElementById("summarize").addEventListener("click", getCurrentTab());
document.getElementById("summary").addEventListener("click", promptAPI());

 document.getElementById("go-back").addEventListener("click", () => {
      window.location.href = "index.html";
    });
    