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
      message: 'Too many files on the root directory: ' + fileListLength + '. Cognitive overload detected!',
        passed: false
    };
  
}

module.exports = test;
