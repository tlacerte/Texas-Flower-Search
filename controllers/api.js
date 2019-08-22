const Flower = require('../models/flower');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

function update(req, res) {
  Flower.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(flower) {
    res.status(200).json(flower);
  });
}

function deleteOne(req, res) {
  Flower.findByIdAndRemove(req.params.id).then(function(flower) {
    res.status(200).json(flower);
  });
}

function show(req, res) {
  Flower.findById(req.params.id).then(function(flower) {
    res.status(200).json(flower);
  });
}

function create(req, res) {
  Flower.create(req.body).then(function(flower) {
    res.status(201).json(flower);
  });
}

function index(req, res) {
  Flower.find({}).then(function(flowers) {
    res.status(200).json(flowers);
  });
}