// А так сработает
;(async () => {
  let response = await fetch('https://api.github.com/users/0dayTV')
  let user = await response.json()
  await console.log(user)
})()
