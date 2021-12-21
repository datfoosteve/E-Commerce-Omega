// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {


as: 'category_products'
});

// Categories have many Products
Category.hasMany(Product,{

 as:'product_of_catagories' 
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Category, {

  through:{
    model: ProductTag,
    unique: true
  },

as: 'catagory_products'
});

Product.belongsToMany(Tag, {

  through:{
    model: ProductTag,
    unique: false
  },

as: 'catagory_products'
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {

  through:{
    model: ProductTag,
    unique: false
  },

as: 'product_tags'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
