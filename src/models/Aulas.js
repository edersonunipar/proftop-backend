const mongoose = require('mongoose');

const AulasSchema = new mongoose.Schema({
   thumbnail: String,
   local: String,
   preco: Number,
   assuntos: [String],
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
}, {
    toJSON: {
        virtuals: true,
    },
});

AulasSchema.virtual('thumbnail_url').get(function() {
    return `http://192.168.1.255:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Aulas', AulasSchema);