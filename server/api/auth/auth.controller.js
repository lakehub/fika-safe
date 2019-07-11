const {users} = require('../../config');
const generateToken = require('./generateToken');

// eslint-disable-next-line no-unused-vars
function authenticate(req, res, next) {
  console.log('HERE');
  const {username} = req.body;
  const {password} = req.body;

  if(!users[username]) { res.status(403).json({message: 'Unauthorized'}); return; }
  if(users[username].password !== password) { res.status(403).json({message: 'Unauthorized'}); return; }

  const {scopes} = users[username];

  generateToken({username, scopes}, (err, token) => {
    if(err) { res.status(403).json({message: 'Unauthorized'}); return; }
    res.status(201).json({token});
  });
}

module.exports = {
  authenticate
}