/* global chrome */
var foodUrl = 'https://www.wenjuan.com/s/Vf6Vze/'
var orderFoodHour = 12
var interval = 3600000

setInterval(function () {
  var a = new Date()
  if (a.getHours() === orderFoodHour && a.getDay() !== 0 && a.getDay() !== 6) {
    chrome.tabs.create({
      url: foodUrl
    }, function () {
      chrome.tabs.executeScript(null, {
        file: 'go.js'
      })
    })
  }
}, interval)
