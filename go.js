var name = '孙大超'

function test () {
  setTimeout(function () {
    var input = document.getElementsByClassName('option')[0]
    if (!input) {
      window.alert('-_-#订餐出了点问题，自己订吧')
      return false
    }
    input.value = name
  }, 4000)
  setTimeout(function () {
    var btn = document.getElementById('next_button')
    btn.click()
  }, 8000)
}
test()
