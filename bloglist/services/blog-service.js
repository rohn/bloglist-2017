import _ from 'lodash';

const parseIt = (xmlPosts, postCount) => {
  const blogposts = [];
  if (!xmlPosts) {
    return blogposts;
  }

  const items = xmlPosts.getElementsByTagName('item');
  const getElementValue = (tag, index) => items[index].getElementsByTagName(tag)[0].innerHTML;

  _.forEach(items, (item, index) => {
    if (postCount === index) {
      return false;
    }
    const title = getElementValue('title', index);
    const author = getElementValue('author', index);
    const link = getElementValue('link', index);
    const date = getElementValue('pubDate', index);
    const guid = getElementValue('guid', index);
    blogposts.push({ title, author, link, date, guid });
  });
  return blogposts;
}

const getPosts = (url, postCount) => {
  return fetch(url, {
    method: 'GET',
    mode: 'no-cors'
  })
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(rss =>  parseIt(rss, postCount))
    .catch(error => {
      console.log('error ==>', error);
    });
}

module.exports = {
  getPosts
};
