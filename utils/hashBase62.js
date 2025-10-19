const crypto = require('crypto');

// Base62 alphabet
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function base62(num) {
  let s = '';
  do {
    s = chars[num % 62] + s;
    num = Math.floor(num / 62);
  } while (num > 0);
  return s;
}

function hashUrl(url) {
  // Create a hash and convert a slice to base62
  const hash = crypto.createHash('sha256').update(url + Date.now()).digest('hex');
  // Take first 8 chars and convert to base62 number
  const slice = hash.slice(0, 8);
  const num = parseInt(slice, 16);
  return base62(num);
}

module.exports = hashUrl;
