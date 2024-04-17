import colors from 'colors';

export const logger = (color: string, { placement, name, result }) => {
  console.log(colors[color](`${placement}. ${name}: ${result}`));
};
