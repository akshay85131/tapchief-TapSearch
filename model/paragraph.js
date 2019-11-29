const mongoose = require('mongoose');

const ParagraphSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        index: true
    }
});

const Paragraph = mongoose.model('Paragraph', ParagraphSchema)
module.exports = Paragraph