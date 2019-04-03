const db = require("../models");
const parser = require("../cloudinary")

// Defining methods for the productsController
module.exports = {
  findAll: function (req, res) {
    db.Product
      .find({ "user_id": req.user.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  parseImage: parser.image("image"),
  create: function (req, res) {
    const product = {
      ...req.body,
      url: req.file.url,
      id: req.file.public_id
    };
    db.Product
      .create(product)
      .then(dbProduct =>  db.User.findOneAndUpdate({_id:req.user.id}, { $push: { products: dbProduct._id } }, { new: true }))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addProduct:function(product,done){
    db.Category.find({name:product.Category},
        function(err,data){
            if(err)done(err)
            else if(data){
                db.subCategory.findById(product.subCategory)
                db.Product.insertOne(product)
                .then(data=>done(data))
            }
            else{
                db.Category.create({})
            }
        })
},
};
