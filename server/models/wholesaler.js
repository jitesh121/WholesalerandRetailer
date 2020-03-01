'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wholesaler = sequelize.define('Wholesaler', {
    name: DataTypes.STRING,
    mobile: DataTypes.BIGINT
  }, {});
  Wholesaler.associate = function(models) {
    // associations can be defined here

    Wholesaler.hasMany(models.Address, {
      foreignKey: 'wholesaler_id',
      as: 'address',
      onDelete: 'CASCADE',
    });

    Wholesaler.belongsToMany(models.Retailer, {
      foreignKey: 'wholesaler_id', through: 'Wholesalerandretailergroup', as: 'retailer'
    });
  };
  return Wholesaler;
};