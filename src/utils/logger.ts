import colors from 'colors';

export const logger = (color: string, { placement, name, house, result }) => {
  console.log(colors[color](`${placement}. ${name} ${house}: ${result}`));
};
