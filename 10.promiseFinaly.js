// finaly
let promise__ = new Promise((resolve, reject) => {
  setTimeout(() => resolve('value'), 2000)
})
promise__.finally(() => console.log('Промис завершён')) // срабатывает первым
promise__.then((result) => console.log(result)) // <-- .then показывает "value"

// Обработчик finally не получает результат предыдущего обработчика (у него нет аргументов). Вместо этого этот результат передается следующему подходящему обработчику.
// Если обработчик finally возвращает что-то, это игнорируется.
// Когда finally выдает ошибку, выполнение переходит к ближайшему обработчику ошибок.