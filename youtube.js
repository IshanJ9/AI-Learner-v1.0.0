
    document.getElementById("go-back").addEventListener("click", () => {
      window.location.href = "index.html";
    });
    document.getElementById("summarize").addEventListener("click", () => {
        console.log("Hello");
        getCurrentTab();
    });  
    async function getCurrentTab() {
            console.log("Hello");
            let queryOptions = { active: true, lastFocusedWindow: true };
            // `tab` will either be a `tabs.Tab` instance or `undefined`.
            let [tab] = await chrome.tabs.query(queryOptions);
            console.log(tab);
          }