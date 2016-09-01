/* global chrome */
const foodUrl = 'https://www.wenjuan.com/s/Vf6Vze/'
const orderFoodHour = 12
const interval = 3600000

setInterval(() => {
  var a = new Date()
  if (a.getHours() === orderFoodHour) {
    chrome.tabs.create({
      url: foodUrl
    }, function () {
      chrome.tabs.executeScript(null, {
        file: 'go.js'
      })
    })
  }
}, interval)
