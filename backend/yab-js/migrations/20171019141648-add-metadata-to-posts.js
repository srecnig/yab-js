'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'meta', Sequelize.JSONB, { defaultValue: {} });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'meta');
  }
};
