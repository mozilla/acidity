var foldersTest = require('./tests/folders.js');
var licenseTest = require('./tests/license.js');
var readmeTest = require('./tests/readme.js');
var numberOfFilesTest = require('./tests/number-of-files.js');

var Acidity = {
    run: function(directory) {
        var results = {
            passed: [],
            failed: [],
            notices: []
        };

        for (var i in this.tests) {
            var testResult = this.tests[i](directory);
            if (testResult.passed === true) {
                results.passed.push(testResult.message);
            } else if (testResult.passed !== false) {
                results.notices.push(testResult.message);
            } else {
                results.failed.push(testResult.message);
            }
        }

        return results;
    },
    tests: {
        folders: foldersTest,
        license: licenseTest,
        readme: readmeTest,
        numberOfFiles: numberOfFilesTest
    }
};

module.exports = Acidity;
