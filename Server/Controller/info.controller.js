const InfoDetails = require("../Model/info.model");

exports.AddInfoController = (req, res) => {
    
    const { name, Address, Phone, Price, OrderDate, Deadline, DeliveryDate, ProjectDetails, ProjectStatus } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const infoDetails = new InfoDetails({
        name,
        Address,
        Phone,
        Price,
        OrderDate,
        Deadline,
        DeliveryDate,
        ProjectDetails,
        ProjectStatus
    });

    infoDetails.save()
    res.json({success: true, message: "Info details added successfully", data: infoDetails});
    

}


exports.GetInfoController = async (req, res) => {
    try {
        const infoDetails = await InfoDetails.find();
        res.json({ success: true, message: "Info details fetched successfully", data: infoDetails });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to retrieve info details", error: error.message });
    }
}