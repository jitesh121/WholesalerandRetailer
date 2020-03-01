'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stockdetail = sequelize.define('Stockdetail', {
    wholesaler_id: DataTypes.INTEGER,
    retailer_id: DataTypes.INTEGER,
    stock_amount: DataTypes.INTEGER,
    month: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Stockdetail.associate = function(models) {
    // associations can be defined here
    Stockdetail.belongsTo(models.Wholesaler, {
      foreignKey: 'wholesaler_id',
      as: 'wholesaler',
      onDelete: 'CASCADE',
    });
    Stockdetail.belongsTo(models.Retailer, {
      foreignKey: 'retailer_id',
      as: 'retailer',
      onDelete: 'CASCADE',
    });
  };
  return Stockdetail;
};