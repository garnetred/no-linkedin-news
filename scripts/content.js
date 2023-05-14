let currentPage;
let currentResponse;

const hideNews = () => {
  console.log('loaded!');
  console.log({ currentResponse, currentPage });
  if (currentResponse && currentPage === 'feed') {
    let newsFeedModule = document.getElementById('feed-news-module');
    console.log(newsFeedModule, 'news feed module?');
    newsFeedModule.classList.add('hidden');
  } else if (currentResponse && currentPage === 'news') {
    let newsFeedPage = document.getElementsByClassName('scaffold-layout')[0];
    newsFeedPage.classList.add('hidden');
  } else {
    console.error(currentResponse.error);
  }
};

(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { page } = obj;
    // hideNews(page, response);
    if (page && response) {
      currentPage = page;
      currentResponse = response;
      hideNews();
    }
  });
})();
