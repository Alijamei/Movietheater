const mongoose = require('mongoose');

const cartschema = new mongoose.Schema({

    array: mongoose.Schema.Types.Mixed,
    userr: { type: mongoose.Types.ObjectId, ref: 'User' },
    posts:[{ type: mongoose.Types.ObjectId, required: true, ref: 'Post' }]
  
})


module.exports = mongoose.model('Cart',cartschema) 



