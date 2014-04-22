var shell = require('shelljs');

var README_NAMES = [
    "README",
    "README.md",
    "README.rdoc",
    "README.textile",
    "README.txt"
];

function test(workingDirectory) {
    shell.cd(workingDirectory);

    for (var i in README_NAMES) {
        if (shell.test('-e', README_NAMES[i])) {
            return {
                message: 'README found!',
                passed: true
            };
        }
    }

    return {
        message: 'No README found! :-(',
        passed: false
    };
}

module.exports = test;
