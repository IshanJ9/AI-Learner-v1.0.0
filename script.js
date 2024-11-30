document.addEventListener("DOMContentLoaded", () => {
    // Event listener for the YouTube video button
    document.getElementById("youtube-video").addEventListener("click", () => {
      window.location.href = "youtube.html";
    });
  
    // Event listener for the "Pick a file" button
    document.getElementById("pick-file").addEventListener("click", () => {
      alert("Pick a file functionality coming soon!");
    });
  
    // Event listener for the settings button (example)
    document.getElementById("settings-button").addEventListener("click", () => {
      alert("Settings functionality coming soon!");
    });
  });
  