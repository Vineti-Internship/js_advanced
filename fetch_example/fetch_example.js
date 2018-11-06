const fetch = require('node-fetch');

const result = fetch('https://api.github.com/users/rasjonell');
console.log(result);

result.then(response => {
  console.log(response);
  response.json().then(result => {
    console.log(result);
  });
}).catch(err => {
  console.log(err);
});