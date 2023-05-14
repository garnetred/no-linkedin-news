// (async () => {
//     // let url;
//     // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     //     url = tabs[0].url;
//     // console.log(url)
//     // });

//     const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
//     const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
//     // do something with response here, not outside the function
//     console.log(response);
// })();


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const tabUrl = tab.url ?? tab.pendingUrl;
    if (changeInfo.status === 'complete' && tabUrl && tabUrl.includes('linkedin.com/feed')) {
        chrome.tabs.sendMessage(tabId, {"page": "feed"})
    } else if (changeInfo.status === 'complete' && tabUrl && tabUrl.includes('linkedin.com/news')) {
        chrome.tabs.sendMessage(tabId, {"page": "news"})
    }
})
chrome.tabs.onActivated.addListener((tabId, changeInfo, tab) => {
    const tabUrl = tab.url ?? tab.pendingUrl;
    if (changeInfo.status === 'complete' && tabUrl && tabUrl.includes('linkedin.com/feed')) {
        chrome.tabs.sendMessage(tabId, {"page": "feed"})
    } else if (changeInfo.status === 'complete' && tabUrl && tabUrl.includes('linkedin.com/news')) {
        chrome.tabs.sendMessage(tabId, {"page": "news"})
    }
})

// function sendMessageToActiveTab(message) {
//   const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
//   const response = await chrome.tabs.sendMessage(tab.id, message);
//   // TODO: Do something with the response.
// }
