'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

if (url.search('https//') != -1) {

    url = url.replace('https//', 'https://')
}

if (url.search('bots') != -1) {
    url = url.replace('bots', 'odds')
}

console.log(url);

