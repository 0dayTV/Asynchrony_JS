function doneConsoleLog() {
  console.log('Done')
}
setTimeout(() => {
  doneConsoleLog()
}, 2000)
