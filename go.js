var name = '孙大超'

function test () {
  setTimeout(function () {
    var input = document.getElementsByClassName('option')[0]
    input.value = name
  }, 2000)
  setTimeout(function () {
    var btn = document.getElementById('next_button')
    btn.click()
  }, 3000)
}
test()
