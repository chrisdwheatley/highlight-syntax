var test = require('tape')
var highlight = require('../')
var marked = require('marked')
var fs = require('fs')

test('markdown', function (t) {
  var src = `
    # hello
    
    \`\`\` js
    console.log(src)
    \`\`\`
    
    hmmm
    
    \`\`\` sh
    #!/bin/bash
    echo cool
    \`\`\`
    
    \`\`\`
    whatever
    \`\`\`
  `.trim().replace(/^\s+/mg,'')
  var output = marked(src, { highlight: highlight })
  t.ok(/<span class="call-expression">/.test(output), 'javascript highlighted')
  t.ok(/<span class="simple-command">/.test(output), 'shell highlighted')
  t.end()
})
