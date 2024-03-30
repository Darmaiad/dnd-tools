const st = require('../students.json');

const getStudents = (school) => st.filter(({ school: sc }) => sc === school);

module.exports = { getStudents };
