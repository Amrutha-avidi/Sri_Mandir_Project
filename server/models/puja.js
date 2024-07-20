const mongoose = require("mongoose")

const benefitDetails = mongoose.Schema({
    benefit_image: String,
    benefit_head: String,
    benefit_para: String
});

const packageDetails = mongoose.Schema({
    price: String,
    package_head: String,
    package_count: String,
    package_details: [String]
});

const Puja = mongoose.Schema({
    pooja_image: String,
    sub_head: String,
    heading: String,
    para: String,
    details: [String],
    description: String,
    puja_details_image: String,
    benefits: [benefitDetails],
    temple_details_head: String,
    temple_details_image: String,
    temple_details_description: String,
    packages: [packageDetails]






})
const PujaModel = mongoose.model('puja', Puja)
module.exports = PujaModel