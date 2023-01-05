function display() {
  console.log('1')
}
function display_() {
  console.log('2')
}
function display__() {
  console.log('3')
}
function display___() {
  console.log('4')
}
function display____() {
  console.log('5')
}
function display_____() {
  console.log('6')
}
setTimeout(() => {
  display()
  setTimeout(() => {
    display_()
    setTimeout(() => {
      display__()
      setTimeout(() => {
        display___()
        setTimeout(() => {
          display____()
          setTimeout(() => {
            display_____()
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
