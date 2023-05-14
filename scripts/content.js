let currentPage;
let currentResponse;

const callback = () => {
  const newsModuleElement = document.querySelector('#feed-news-module');
  const newsPageElement = document.querySelector('.scaffold-layout-container');
  const newsStorylineContainer = document.querySelector(
    '.news-storyline__container',
  );

  if (newsModuleElement && currentPage === 'feed') {
    // hideNews();
    console.log('on home page');
    newsModuleElement.classList.add('hidden');
    observer.disconnect();
  } else if (
    newsPageElement &&
    newsStorylineContainer &&
    currentPage === 'news'
  ) {
    console.log('on news page');
    newsModuleElement.classList.add('hidden');
    newsStorylineContainer.classList.add('hidden');
    observer.disconnect();
  } else {
    observer.disconnect();
  }
};
const observer = new MutationObserver(callback);

const config = { attributes: true, childList: true, subtree: true };

(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { page } = obj;
    console.log('message received!', page);
    if (page && response) {
      currentPage = page;
      currentResponse = response;
      observer.observe(document, config);
      //   hideNews();
    }
  });
})();

console.log(currentPage, 'current page');

