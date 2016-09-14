/**
 * istanbul.cover.cmd.mocha.js
 * Version 0.4.0
 * March 4th, 2016
 *
 * Copyright (c) 2016 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
var path = require('path');

module.exports = function(cmdArgs) {
	var cmd = path.join(process.cwd(), 'node_modules', '.bin', '_mocha');
	cmdArgs = cmdArgs || [];
	
	if(process.argv.length === 3) {
		cmdArgs.push('-g');
		cmdArgs.push(process.argv[2]);
	}
	
	process.argv = ['node', cmd].concat(cmdArgs);
	
	return cmd;
};