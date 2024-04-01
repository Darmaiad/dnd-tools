const st = require('../students.json');

module.exports = <T>(school: SCHOOLS): T[] => st.filter(({ school: sc }) => sc === school);
