// Пример callback ф-ций. Бесполезная, однако коллбек.
function showMsg(name, status, callback) {
  if (callback && typeof callback === 'function') {
    callback()
  } else {
    console.log(`Hello ${name}, you status is ${status}`)
  }
}
showMsg('Agata', 'Luci', () => {
  console.log('Hello msg is not supported')
})
