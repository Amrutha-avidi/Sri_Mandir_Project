const mongoose = require("mongoose")

const Explore = mongoose.Schema({
    image: String,
    
    description: String

})
const ExploreModel = mongoose.model('explore', Explore)
module.exports = ExploreModel