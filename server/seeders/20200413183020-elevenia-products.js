'use strict';
const { getData } = require('../upstream/elevenia')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const data = await getData()
      const d = data.map(a => Object.assign(a, {createdAt: new Date(), updatedAt: new Date()}))
      return queryInterface.bulkInsert('Products', d )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
