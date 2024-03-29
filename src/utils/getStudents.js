const st = require("../students.json");

const getStudents = (school) => st.filter(({ school: sc }) => sc.toUpperCase() === school);

module.exports = { getStudents };
