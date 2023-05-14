let currentPage;
let currentResponse;

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

// const newsModuleNode = document.getElementById('feed-news-module');

const callback = () => {
  const newsModuleElement = document.querySelector('#feed-news-module');
  const newsPageElement = document.querySelector('.scaffold-layout');
  if (newsModuleElement && currentPage === 'feed') {
    // hideNews();
    console.log('on home page');
    newsModuleElement.classList.add('hidden');
    observer.disconnect();
  } else if (newsPageElement && currentPage === 'news') {
    console.log('on news page');
    newsPageElement.classList.add('hidden');
    observer.disconnect();
  }
};
const observer = new MutationObserver(callback);

const config = { childList: true, subtree: true };

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
