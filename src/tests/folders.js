var shell = require('shelljs');

var REQUIRED_FOLDERS = {
    dist: ["dist"],
    examples: ["examples"],
    src: ["src"],
    test: ["test", "tests"]
};

function test(workingDirectory) {
    shell.cd(workingDirectory);

    for (var i in REQUIRED_FOLDERS) {
        for (var option in REQUIRED_FOLDERS[i]) {
            if (shell.test('-d', REQUIRED_FOLDERS[i][option])) {
                return {
                    message: 'Proper folder structure exists!',
                    passed: true
                };
            } else {
                return {
                    message: '"' + i + '" folder does not exist!',
                    passed: false
                };
            }
        }
    }
}

module.exports = test;
