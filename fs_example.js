const fs = require('fs');

// const fileSync = fs.readFileSync('./README.md', 'UTF-8');
// console.log(fileSync);

// ASYNC
const file = fs.readFile('./README.md', 'UTF-8', (err, data) => {
  if (err)
    console.error(err);
  console.log(data);
});
console.log('HEY');