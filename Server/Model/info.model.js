const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
     Address: {
        type: String,
        // required: [true, "Address is required"]
    },
     Phone: {
        type: Number,
        // required: [true, "Phone is required"]
    },
     Price: {
        type: String,
        // required: [true, "Price is required"]
    },
     OrderDate: {
        type: String,
        // required: [true, "Order date is required"]
    },
     Deadline: {
        type: String,
        // required: [true, "Deadline is required"]
    },
     DeliveryDate: {
        type: String,
        // required: [true, "Delivery date is required"]
    },
     ProjectDetails: {
        type: String,
        // required: [true, "Project details are required"]
    },
     ProjectStatus: {
        type: String,
        enum: ["Pending", "Cancelled", "Completed"],
        default: "Pending"
    },
});

const InfoDetails = mongoose.model('InfoDetails', blogSchema);

module.exports = InfoDetails;