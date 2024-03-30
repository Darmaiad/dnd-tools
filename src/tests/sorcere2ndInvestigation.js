const { SKILLS } = require('../enums/skills');

const { ARCANA, INVESTIGATION } = SKILLS;

const sorcere2ndInvestigation = {
  name: 'Sorcere Second Test with Investigation',
  test: [
    {
      type: ARCANA,
      dc: 8,
      points: 1,
    },
    {
      type: ARCANA,
      dc: 8,
      points: 1,
    },
    {
      type: ARCANA,
      dc: 8,
      points: 1,
    },
    {
      type: ARCANA,
      dc: 8,
      points: 1,
    },
    {
      type: ARCANA,
      dc: 8,
      points: 1,
    },
    {
      type: ARCANA,
      dc: 10,
      points: 2,
    },
    {
      type: ARCANA,
      dc: 10,
      points: 2,
    },
    {
      type: ARCANA,
      dc: 13,
      points: 3,
    },
    {
      type: ARCANA,
      dc: 15,
      points: 2,
    },
    {
      type: INVESTIGATION,
      dc: 8,
      points: 1,
    },
    {
      type: INVESTIGATION,
      dc: 10,
      points: 1,
    },
    {
      type: INVESTIGATION,
      dc: 12,
      points: 1,
    },
    {
      type: INVESTIGATION,
      dc: 15,
      points: 1,
    },
    {
      type: INVESTIGATION,
      dc: 18,
      points: 0.5,
    },
    {
      type: INVESTIGATION,
      dc: 20,
      points: 0.5,
    },
    {
      type: ARCANA,
      dc: 20,
      points: 0.25,
    },
    {
      type: ARCANA,
      dc: 21,
      points: 0.25,
    },
    {
      type: ARCANA,
      dc: 22,
      points: 0.25,
    },
    {
      type: ARCANA,
      dc: 23,
      points: 0.25,
    },
  ],
};

module.exports = sorcere2ndInvestigation;
