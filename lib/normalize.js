module.exports = function (str) {
  str = String(str).replace(/.*\.(\w+)$/,'$1')
  if (/^(js|javascript)$/i.test(str)) return 'js'
  else if (/^c$/i.test(str)) return 'c'
  else return null
}
