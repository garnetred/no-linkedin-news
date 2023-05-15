chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('linkedin.com/feed')
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/feed.css'],
    });
  } else if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('linkedin.com/news')
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/news.css'],
    });
  }
});
