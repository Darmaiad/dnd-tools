import { d20 } from './utils/dice';

const studySessions = 50;
const results: number[] = [];
const int = 3;

for (let i = 0; i < studySessions; i++) {
  results.push(d20() + int);
}

const points = results.reduce((pts, result) => {
  if (result > 23) {
    pts += 6;
  } else if (result > 18) {
    pts += 3;
  } else if (result > 13) {
    pts += 2;
  } else if (result > 8) {
    pts += 1;
  }

  return pts;
}, 0);

console.log(points);
