const fetch = require('node-fetch');

const getData = async () => {
  let result, data;
  try {
    result = await fetch('https://api.github.com/users/rasjonell');
    data = await result.json();
  }
  catch (e) {
    console.log(e);
  }
  
  console.log(data);
  return data;
};

getData();
