const f = () => new Promise(res => {
  setTimeout(() => {
    res('RESOLVED');
  }, 5000);
});

(async () => {
  console.log('before');
  console.log(await f());
  console.log('after');
})();