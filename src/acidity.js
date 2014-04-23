var foldersTest = require('./tests/folders.js');
var licenseTest = require('./tests/license.js');
var readmeTest = require('./tests/readme.js');
var numberOfFilesTest = require('./tests/number-of-files.js');

module.exports = {
    folders: foldersTest,
    license: licenseTest,
    readme: readmeTest,
	numberOfFiles: numberOfFilesTest
};
