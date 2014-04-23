var licenseTest = require('./tests/license.js');
var readmeTest = require('./tests/readme.js');
var numberOfFilesTest = require('./tests/number-of-files.js');

module.exports = {
    license: licenseTest,
    readme: readmeTest,
	numberOfFiles: numberOfFilesTest
};
