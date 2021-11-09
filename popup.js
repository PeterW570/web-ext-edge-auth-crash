document.querySelectorAll(".login").forEach(btn => btn.addEventListener("click", (e) => {
    const url = e.target.dataset.url;
    chrome.identity.launchWebAuthFlow( { interactive: true, url }, function (url) {
        console.log("Authentication complete. Redirect URL: " + url);
    } );
}));
