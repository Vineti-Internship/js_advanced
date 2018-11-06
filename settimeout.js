const f = () => new Promise(res => {
  setTimeout(() => {
    res('RESOLVED');
  }, 5000);
});

console.log('before');
f().then(n => {
  console.log(n);
});
console.log('after');