module.exports = function (lang) {
  if (/^(js|javascript)$/i.test(lang)) return 'js'
  else if (/^(sh|bash)/.test(lang)) return 'sh'
  return null
}
