var shell = require('shelljs');

function test(workingDirectory) {
    shell.cd(workingDirectory);

    var fileListLength = shell.ls(workingDirectory).length;

    if(fileListLength < 8) {

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
