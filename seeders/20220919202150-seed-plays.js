'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plays', [
    {
      id: 0,
      x: 0,
      y: 0,
      player: 0,
      match_id: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 1,
      x: 0,
      y: 0,
      player: 1,
      match_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plays', null, {});
  }
};