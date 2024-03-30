const { writeFile } = require('fs');
const path = require('path');

const saver = (results, resultsPath) => {
  writeFile(path.resolve(__dirname, resultsPath), JSON.stringify(results, null, 2), (error) => {
    if (error) {
      console.log('An error has occurred ', error);
      return;
    }
    console.log('\nTest Saved Successfully');
  });

  return results;
};

module.exports = saver;
