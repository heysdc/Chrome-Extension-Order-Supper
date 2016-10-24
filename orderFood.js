/* global chrome */
var foodUrl = 'https://www.wenjuan.com/s/Vf6Vze/'
var orderFoodHour = 11
var interval = 1800000
var closeTime = 15000

var closeWindow = function () {
  setTimeout(function () {
    chrome.tabs.query(
      {currentWindow: true, active: true},
      function (tabArray) {
        chrome.tabs.remove(tabArray[tabArray.length - 1].id)
      }
    )
  }, closeTime)
}

setInterval(function () {
  var a = new Date()
  if (a.getHours() === orderFoodHour && a.getMinutes() > 30 && a.getDay() !== 0 && a.getDay() !== 6) {
    chrome.tabs.create({
      url: foodUrl
    }, function () {
      chrome.tabs.executeScript(null, {
        file: 'go.js'
      })
      closeWindow()
    })
  }
}, interval)
