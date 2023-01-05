let urls_ = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url',
]

let promise_ = Promise.allSettled(urls_.map((url) => fetch(url))).then(
  (results) => {
    // (*)
    results.forEach((result, num) => {
      if (result.status == 'fulfilled') {
        console.log(`${urls_[num]}: ${result.value.status}`)
      }
      if (result.status == 'rejected') {
        console.log(`${urls_[num]}: ${result.reason}`)
      }
    })
  }
)
