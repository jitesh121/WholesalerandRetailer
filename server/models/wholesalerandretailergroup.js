'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wholesalerandretailergroup = sequelize.define('Wholesalerandretailergroup', {
    wholesaler_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Wholesaler',
        key: 'id'
      }
    },
    retailer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Retailer',
        key: 'id'
      }
    }
  }, {});
  Wholesalerandretailergroup.associate = function(models) {
    // associations can be defined here
  };
  return Wholesalerandretailergroup;
};