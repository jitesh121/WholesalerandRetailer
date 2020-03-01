'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    addressline: DataTypes.STRING
  }, {});
  Address.associate = function (models) {
    // associations can be defined here
    Address.belongsTo(models.Wholesaler, {
      foreignKey: 'wholesaler_id',
      as: 'wholesaler',
      onDelete: 'CASCADE',
    }),
    Address.belongsTo(models.Retailer, {
      foreignKey: 'retailer_id',
      as: 'retailer',
      onDelete: 'CASCADE',
    })
  };
  return Address;
};