const p = new Promise((res, rej) => {
  const err = true;
  if (!err)
    res('success');
  rej(new Error('failure'));
});

p.then(
  result => console.log(result)
).catch(
  err => console.log(err)
);

// const f = () => new Promise(res => {
//   setTimeout(() => {
//     res('RESOLVED');
//   }, 5000);
// });

// console.log('before');
// f().then(foo => console.log(foo));
// console.log('after');