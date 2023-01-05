let promise_ = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Ошибка!')), 1000)
})

promise_.catch(console.log)
