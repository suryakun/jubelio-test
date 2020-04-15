'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    pic: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.BIGINT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};