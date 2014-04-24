#! /usr/bin/env node
'use strict';

var PWD = process.env.PWD;
var VERSION = '0.0.1';

var acidity = require('../src/acidity');
var chalk = require('chalk');
var failedTests = [];
var numberOfTests = Object.keys(acidity).length;
var testResults = acidity.run(PWD);

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
