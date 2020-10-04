const jsonWebToken = require('jsonwebtoken');

function createAccessToken() {
  return jwt.sign({
    iss: 'rahulreddyk',
    aud: 'admin',
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    scope: 'full_access',
    sub: `i don't know`,
    jti: genJti(), // unique identifier for the token
    alg: 'HS256'
  }, 'The Best Coupons App');
}

// Generate Unique Identifier for the access token
function genJti() {
  let jti = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
      jti += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  
  return jti;
}