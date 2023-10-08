document.body.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        console.log(event.target.href)
        chrome.runtime.sendMessage({url: event.target.href});
     
    }
});
