;(function () {
  // prevent genius.it/[your site]
  var a = document.createElement('a')
  a.href = document.referrer
  if (a.location.hostname === 'genius.it' || window.location.hostname === 'genius.it') {
    document.location = 'http://stopitgenius.xyz'
  }

  // prevent the bookmarklet
  var setAttribute = window.HTMLElement.prototype.setAttribute
  window.HTMLElement.prototype.setAttribute = function (attr, val) {
    if (attr === 'src' && /genius\.com/.test(val)) {
      return console.log('Genius disabled on this site.')
    } else {
      setAttribute.call(this, attr, val)
    }
  }

  // prevent the extension
  var observer = new window.MutationObserver(function (mutations) {
    for (var i = 0, len = mutations.length; i < len; i++) {
      var mutation = mutations[i]
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        for (var j = 0, jlen = mutation.addedNodes.length; j < jlen; j++) {
          var node = mutation.addedNodes[j]
          if (/genius/i.test(node.nodeName)) {
            console.log('Genius has been disabled on this site')
            node.remove()
          }
        }
      }
    }
  })

  observer.observe(document.body, {childList: true})
})()
