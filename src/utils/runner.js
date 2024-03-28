const { d20 } = require('./dice');

const runner = (test, students) => {
  const studentResults = students.map((student) => {
    const { name, house } = student;

    const result = test.reduce((testPoints, { type, dc, points }) => {
      const questionResult = d20() + student[type.toLowerCase()];

      if (questionResult > dc) {
        testPoints += points;
      }
      return testPoints;
    }, 0);
    return { name, house, result };
  });

  studentResults.sort((a, b) => b.result - a.result);

  return studentResults.map((studentResult, i) => ({
    ...studentResult,
    placement: i + 1,
  }));
};

module.exports = { runner };
