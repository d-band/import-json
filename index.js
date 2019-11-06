const fs = require('fs');
const fetch = require('node-fetch');

const isURL = s => /^https?:\/\//gi.test(s);

module.exports = (url, options) => {
  if (isURL(url)) {
    return fetch(url, options).then(res => res.json());
  }
  return new Promise((resolve, reject) => {
    fs.readFile(url, options, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
}
