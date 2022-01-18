const mongoose = require('mongoose');

const postschema = new mongoose.Schema({

    postsfella: mongoose.Schema.Types.Mixed,
    postssoprano: mongoose.Schema.Types.Mixed,
    postsupontime: mongoose.Schema.Types.Mixed,
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    review: {type:Number}                                  
})



module.exports = mongoose.model('Post',postschema) 