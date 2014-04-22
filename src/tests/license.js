var shell = require('shelljs');

var LICENSE_NAMES = [
    "LICENSE",
    "LICENSE.txt"
];

function test(workingDirectory) {
    shell.cd(workingDirectory);

    for (var i in LICENSE_NAMES) {
        if (shell.test('-e', LICENSE_NAMES[i])) {
            return {
                message: 'LICENSE found!',
                passed: true
            };
        }
    }

    return {
        message: 'No LICENSE found! :-(',
        passed: false
    };
}

module.exports = test;
