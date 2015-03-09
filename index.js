#!/usr/bin/env node

require('shelljs/global');

if (!which('adb')) {
  echo('Sorry, this script requires adb, please put it in PATH');
  exit(1);
}

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

sh = __dirname + "/adb.sqlite.sh"
// execFile: executes a file with the specified arguments
child_process.execFile(sh, argv, function (error, stdout, stderr) {
	console.log(stdout);
});