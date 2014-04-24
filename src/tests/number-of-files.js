var shell = require('shelljs');

function test(workingDirectory) {
    shell.cd(workingDirectory);

    var fileListLength = 0;

    shell.ls(workingDirectory).forEach(function(file) {
        // Only count files, not folders.
        if (shell.test('-f', file)) {
            fileListLength++;
        }
    });

    if (fileListLength < 8) {
        return {
            message: 'Not too many files on the root directory',
            passed: true
        };
    }

    return {
        message: 'You have ' + fileListLength + ' files in the root directory:\nmaybe you can try moving your files into folders?',
        passed: null
    };
}

module.exports = test;
