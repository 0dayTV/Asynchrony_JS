let promise_ = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000)
})

promise_.then(function (result) {
  console.log(result) // 1
  return result * 2
})

promise_.then(function (result) {
  console.log(result) // 1
  return result * 2
})

promise_.then(function (result) {
  console.log(result) // 1
  return result * 2
})
