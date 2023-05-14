const hideNews = (page, response) => {
    console.log("loaded!")

    if (response && page === 'feed') {
        let newsFeedModule = document.querySelector('#feed-news-module');
       console.log(newsFeedModule, 'news feed module?')
       newsFeedModule.classList.add('hidden');

    } else if (response && page === 'news') {
                      let newsFeedPage = document.querySelector('.scaffold-layout');
            newsFeedPage.classList.add('hidden');
            // newsFeedModule = undefined;
    }

}

// let hasUrl = false;
// let page;
// let response;

document.addEventListener('DOMContentLoaded', loadPage, false);

const loadPage = () => {
    return true;
    // what should this function do?
}

(async () => {

    // let newsFeedModule;
    // let newsFeedPage;
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
         const {page} = obj;
         console.log('message received', page)
        hideNews(page, response)

     })

})()


