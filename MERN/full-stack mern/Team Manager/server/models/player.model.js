const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

    playername: {
        type: String,
        required: [true, 'name is required'],
        min:[3,"name must be more than one"]
    },
    preferredposition:{
        type:String,
        required:[true, 'position is required'],
        min:[5,"position must be more than 5 "]
    }
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);