// Примеры

let promise = new Promise(function (resolve, reject) {})

// Успешный промис
let promise_ = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(console.log('done')), 1000)
})
// А теперь пример, в котором исполнитель сообщит, что задача выполнена с ошибкой:
let promise__ = new Promise(function (resolve, reject) {
  // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
  setTimeout(() => reject(console.log('Whoops!')), 1000)
})
