
//$(document).ready(recursiveReplace(document.body));


chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        code: 'recursiveReplace(document.body)'
    });
});



