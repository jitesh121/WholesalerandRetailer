'use strict';
module.exports = (sequelize, DataTypes) => {
  const Retailer = sequelize.define('Retailer', {
    name: DataTypes.STRING,
    mobile: DataTypes.BIGINT
  }, {});
  Retailer.associate = function(models) {
    // associations can be defined here
    Retailer.hasMany(models.Address, {
      foreignKey: 'retailer_id',
      as: 'address',
      onDelete: 'CASCADE',
    });

    Retailer.belongsToMany(models.Wholesaler, {
      foreignKey: 'retailer_id', through: 'Wholesalerandretailergroup', as: 'wholesalers'
    });
  };
  return Retailer;
};