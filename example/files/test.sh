#!/bin/bash

echo hello world > /tmp/cool

ls -1 /dev/tty* | sed 's!^/dev/tty!!' | grep -E '^(USB|ACM)'

echo ls sed grep

echo "hey cool $what ${echo hey}!"

export xyz=123

echo 1234=$foo whatever$zzz \$nope \
  hmmm ${cal} ok cool \${lalala}

echo 'cooool
  'whoa"'"' $ffff
  beans >>>> 1+2'

echo "'"

echo <<eof
wow cool eof whatever <> lalala
  hey hey eeeeyy $cool hmmm \$yea
eof

ls /dev

(highlight-syntax -t light test.js; echo '<hr>'
  highlight-syntax -t light test.sh; echo '<hr>'
  highlight-syntax -t light main.c) > /tmp/light.html

(echo cool)
