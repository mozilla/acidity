#! /usr/bin/env node
'use strict';

var PWD = process.env.PWD;
var VERSION = '0.0.1';

var acidity = require('../src/acidity');
var chalk = require('chalk');
var failedTests = [];
var numberOfTests = Object.keys(acidity).length;

for (var i in acidity) {
    var testResult = acidity[i](PWD);
    if (testResult.passed === true) {
        console.log(chalk.green(testResult.message));
    } else if (testResult.passed !== false) {
        console.log(chalk.yellow(testResult.message));
    } else {
        failedTests.push(testResult.message);
    }
}

if (failedTests.length) {
    console.log(chalk.red(failedTests.join("\n")));
}

console.log("Tests passed: " + (numberOfTests - failedTests.length) + '/' + numberOfTests);

if (!failedTests.length) {
    console.log(chalk.green("\nYay! You are a lovely open source project! 👏  👍  🎉"));
}
