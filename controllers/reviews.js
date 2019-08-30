var Flower = require('../models/flower');

module.exports = {
  create,
  edit,
  update
};

function create(req, res) {
  Flower.findById(req.params.id, function(err, flower) {
    flower.reviews.push(req.body);
    flower.save(function(err) {
      res.redirect(`/flowers/${flower._id}`);
    });
  });
}

async function edit(req, res) {
    let flower = await Flower.findOne({_id: req.params.id})
    res.render('flowers/edit-review', {
            user: req.user,
            flower,
            reviewIdx: req.params.idx,
    });
}

async function update(req, res){
    let flower = await Flower.findOne({_id: req.params.id});
    flower.reviews[req.params.idx].content = req.body.content;
    flower.save(function(err) {
        if(err) console.log(err);
        res.redirect(`/flowers/${flower._id}`);
    })
}