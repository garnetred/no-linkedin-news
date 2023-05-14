let currentPage;
let currentResponse;

const newsModuleNode = document.getElementById('feed-news-module');
// const newsFeedPageElement = document.querySelector('.scaffold-layout')[0];

const callback = () => {
  const newsModuleElement = document.querySelector('#feed-news-module');
  console.log(newsModuleElement);
  if (newsModuleElement) {
    // hideNews();
    console.log('callback running');
    newsModuleElement.classList.add('hidden');

    observer.disconnect();
  }
};
const observer = new MutationObserver(callback);

const config = { attributes: true, childList: true, subtree: true };

observer.observe(document, config);

// observer.disconnect();

const hideNews = () => {
  console.log(currentPage, currentResponse);
  console.log();
  if (currentResponse && currentPage === 'feed') {
    let newsFeedModule = document.getElementById('feed-news-module');
    console.log(newsFeedModule, 'news feed module?');
    newsFeedModule.classList.add('hidden');
  } else if (currentResponse && currentPage === 'news') {
    let newsFeedPage = document.getElementsByClassName('scaffold-layout')[0];
    newsFeedPage.classList.add('hidden');
  }
};

(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { page } = obj;
    if (page && response) {
      currentPage = page;
      currentResponse = response;
      //   hideNews();
    }
  });
})();
