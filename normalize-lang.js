module.exports = function (lang) {
  lang = String(lang).replace(/^\./,'')
  if (/^(js|javascript)$/i.test(lang)) return 'js'
  else if (/^(sh|bash)/.test(lang)) return 'sh'
  else if (lang === '') return 'sh'
  return null
}
