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

// Function to retrieve the current active tab's URL
async function promptAPI() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = tab.url;

  // Disable the button during processing
  const btn = document.getElementById("summary");
  btn.disabled = true;
  btn.innerHTML = "Creating Summary... ";

  // Call the function to fetch the transcript from the backend
  fetchTranscriptAndSummarise(url, btn);
}
// Function to send GET request and fetch the transcript from the Flask backend
function fetchTranscript(url, btn) {
  // Construct the URL with the YouTube video URL as a query parameter
  const requestUrl = `http://127.0.0.1:5000/receive_url?url=${encodeURIComponent(
    url
  )}`;

  // Use GET request to fetch the transcript
  fetch(requestUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching transcript: " + response.statusText);
      }
      return response.text(); // Parse plain text response
    })
    .then((transcript) => {
      // Display the transcript
      const trans = transcript;
      const outputElement = document.getElementById("output");
      outputElement.innerHTML = trans;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    })
    .finally(() => {
      // Re-enable the button after processing
      btn.disabled = false;
      btn.innerHTML = "Fetch Transcript";
    });
}

// async function promptAPI() {
//   const { available, defaultTemperature, defaultTopK, maxTopK } =
//     await ai.languageModel.capabilities();
//   console.log(available);
//   const outputElement = document.getElementById("output");
//   if (available !== "no") {
//     const session = await ai.languageModel.create({
//       systemPrompt: trans,

//     });

//     const result = await session.prompt(
//       `Summarize and give imp points about ${trans}`
//     );
//     console.log(result);
//     const summaryDiv = document.getElementById("summaryContent");
//     summaryDiv.textContent = result; // Set the summary text
//   }
// }

function fetchTranscriptAndSummarise(url, btn) {
  // Construct the URL with the YouTube video URL as a query parameter
  const requestUrl = `http://127.0.0.1:5000/receive_url?url=${encodeURIComponent(
    url
  )}`;

  // Use GET request to fetch the transcript
  fetch(requestUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching transcript: " + response.statusText);
      }
      return response.text(); // Parse plain text response
    })
    .then(async (transcript) => {
      // Display the transcript
      const { available, defaultTemperature, defaultTopK, maxTopK } =
        await ai.languageModel.capabilities();
      console.log(available);
      const trans = transcript;
      let result = "Default result";
      if (available !== "no") {
        const session = await ai.languageModel.create({
          systemPrompt: trans,
        });

        result = await session.prompt(
          `Summarize and give imp points about ${trans}`
        );
        console.log(result);
      }
      const summaryDiv = document.getElementById("summaryContent");
      summaryDiv.innerHTML = result;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    })
    .finally(() => {
      // Re-enable the button after processing
      btn.disabled = false;
      btn.innerHTML = "Summarise";
    });
}
// Add event listener to the button
document.getElementById("summarize").addEventListener("click", getCurrentTab);
document.getElementById("summary").addEventListener("click", promptAPI);

document.getElementById("go-back").addEventListener("click", () => {
  window.location.href = "index.html";
});
// Function to send GET request and fetch the transcript from the Flask backend
