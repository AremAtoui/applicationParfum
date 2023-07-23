const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ParfumSchema  = new schema({
    image: {
        required: false,
        type: String,
        
    },
    name: {
        type: String,
        required: true
    },

   description: {
        type: String,
        required: true
    },
   price: {
        type: String,
        required: true
    },
    // category: { type: String, default: "user" }




})





const Parfum= mongoose.model("Parfum", ParfumSchema);


module.exports = Parfum;
