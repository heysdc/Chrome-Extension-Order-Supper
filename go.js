const name = '孙大超'

function test () {
  setTimeout(() => {
    var input = document.getElementsByClassName('option')[0]
    input.value = name
  }, 2000)
  setTimeout(() => {
    var btn = document.getElementById('next_button')
    btn.click()
  }, 3000)
}
test()
