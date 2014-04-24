#! /usr/bin/env node
'use strict';

var VERSION = '0.0.4';

var acidity = require('../src/acidity');
var chalk = require('chalk');
var nopt = require('nopt');

var opts = nopt({
    dir: String,
    version: Boolean
}, {
    v: '--version'
});

if (opts.version) {
    return console.log(chalk.blue('Mozilla acidity tests, Version ' + VERSION));
}

// Use current directory if no --dir argument is supplied.
var testResults = acidity.run(opts.dir || process.env.PWD);

for (var groupName in testResults) {
    var resultGroup = testResults[groupName];

    if (resultGroup.length) {
        var color;
        switch (groupName) {
            case 'passed':
                color = 'green';
                break;
            case 'failed':
                color = 'red';
                break;
            case 'notices':
                color = 'yellow';
                break;
        }

        console.log(chalk[color](resultGroup.join("\n")));
    }
}

if (!testResults.failed.length) {
    console.log(chalk.green("\nYay! You are a lovely open source project! 👏  👍  🎉"));
} else {
    console.log(chalk.red("\nTests failed: " + testResults.failed.length + '/' + Object.keys(testResults).length));
}
