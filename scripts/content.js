let currentPage;
let currentResponse;

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

const config = { attributes: true, childList: true, subtree: true };

(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { page } = obj;
    if (page && response) {
      currentPage = page;
      currentResponse = response;
      observer.observe(document, config);
      //   hideNews();
    }
  });
})();

console.log(currentPage, 'current page');

// if (currentPage && (currentPage === 'feed' || currentPage === 'news')) {
//   observer.observe(document, config);
// } else if (!currentPage) {
//   observer.observe(document, config);
// }

// observer.disconnect();

// const hideNews = () => {
//   console.log(currentPage, currentResponse);
//   console.log();
//   if (currentResponse && currentPage === 'feed') {
//     let newsFeedModule = document.getElementById('feed-news-module');
//     console.log(newsFeedModule, 'news feed module?');
//     newsFeedModule.classList.add('hidden');
//   } else if (currentResponse && currentPage === 'news') {
//     let newsFeedPage = document.getElementsByClassName('scaffold-layout')[0];
//     newsFeedPage.classList.add('hidden');
//   }
// };
