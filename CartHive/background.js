chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url) {
        console.log("url reloaded");
    }
})
