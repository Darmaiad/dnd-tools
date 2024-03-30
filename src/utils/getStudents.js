const st = require('../students.json');

module.exports = (school) => st.filter(({ school: sc }) => sc === school);
