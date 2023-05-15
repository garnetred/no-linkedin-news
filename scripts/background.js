chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('linkedin.com/feed')
  ) {
    chrome.tabs.sendMessage(tabId, { page: 'feed', tabId });
    // chrome.tabs.insertCSS({
    //   file: 'css/newsfeed.css',
    //   run_at: 'document_start',
    // });
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/feed.css'],
    });
  } else if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('linkedin.com/news')
  ) {
    chrome.tabs.sendMessage(tabId, { page: 'news', tabId });
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/news.css'],
    });
  }
});

// function sendMessageToActiveTab(message) {
//   const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
//   const response = await chrome.tabs.sendMessage(tab.id, message);
//   // TODO: Do something with the response.
// }
