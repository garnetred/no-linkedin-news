let currentPage;
let currentResponse;

const callback = () => {
  const newsModuleElement = document.querySelector('#feed-news-module');
  const newsPageElement = document.querySelector('.scaffold-layout-container');
  const newsStorylineContainer = document.querySelector(
    '.news-storyline__container',
  );

  console.log('in callback');
  if (newsModuleElement && currentPage === 'feed') {
    console.log('on home page');
    console.log(newsModuleElement, 'news module event');
    newsModuleElement.classList.add('hidden');
    observer.disconnect();
  } else if (newsModuleElement && currentPage === 'news') {
    console.log('on news page');
    newsModuleElement.classList.add('hidden');
    newsStorylineContainer.classList.add('hidden');
    observer.disconnect();
  }
};
const observer = new MutationObserver(callback);

const config = { attributes: true, childList: true, subtree: true };

(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { page, tabId } = obj;
    console.log(obj);
    console.log(sender);
    console.log('message received!', page);
    currentPage = page;
    currentResponse = response;
  });
})();
