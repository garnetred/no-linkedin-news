let currentPage;
let currentResponse;

const hideNews = () => {
  console.log('loaded!');
  if (currentResponse && currentPage === 'feed') {
    let newsFeedModule = document.querySelector('#feed-news-module');
    console.log(newsFeedModule, 'news feed module?');
    newsFeedModule.classList.add('hidden');
  } else if (currentResponse && currentPage === 'news') {
    let newsFeedPage = document.querySelector('.scaffold-layout');
    newsFeedPage.classList.add('hidden');
  } else {
    console.error(response.error);
  }
};

document.addEventListener('DOMContentLoaded', hideNews);
// could store both page and response at a high level
// only after the page is loaded invoke hideNews?
// separate function that checks if there's been a change to page and response?

const checkForUpdates = () => {

}

(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { page } = obj;
    // hideNews(page, response);
    if (page && response) {
        currentPage = page;
        currentResponse = response;
    }

  });
})();

