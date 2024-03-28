const { writeFile } = require('fs');

const saver = (results, name, path) => {
  writeFile(
    `${path}/${name}.json`,
    JSON.stringify(results, null, 2),
    (error) => {
      if (error) {
        console.log('An error has occurred ', error);
        return;
      }
      console.log('\nTest Saved Successfully');
    }
  );

  return results;
};

module.exports = { saver };
