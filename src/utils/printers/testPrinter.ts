import colors from 'colors';

export const testPrinter = (name, test) => {
  const pointsTotal = test.reduce((acc, { points }) => {
    acc += points;
    return acc;
  }, 0);

  const pointsPerSkill = test.reduce((acc, { type, points }) => {
    if (!acc[type]) {
      acc[type] = points;
    } else {
      acc[type] += points;
    }
    return acc;
  }, {});

  console.log(colors.blue(`${name}\nQuestions: ${test.length} Points: ${pointsTotal}`));

  Object.entries(pointsPerSkill).forEach(([k, v]) =>
    console.log(colors.green(`${k.charAt(0).toUpperCase()}${k.toLocaleLowerCase().slice(1)}: ${v}`))
  );

  console.log('\n');
};
