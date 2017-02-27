function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
    } else {
      reject('a & b need to be numbers');
    }
  });
}

addPromise('asd', 3).then(function (resp) {
  console.log('success', resp);
}, function (err) {
  console.log('error', err);
});
