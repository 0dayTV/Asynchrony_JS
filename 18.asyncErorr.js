// Так делать нельзя

let response = await fetch('https://api.github.com/users/0dayTV')
let user = await response.json()
