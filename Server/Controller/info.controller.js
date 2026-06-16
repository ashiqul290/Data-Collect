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


exports.UpdateInfoController = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      Address,
      Phone,
      Price,
      OrderDate,
      Deadline,
      DeliveryDate,
      ProjectDetails,
      ProjectStatus,
    } = req.body;

    const updatedInfo = await InfoDetails.findByIdAndUpdate(
      id,
      {
        name,
        Address,
        Phone,
        Price,
        OrderDate,
        Deadline,
        DeliveryDate,
        ProjectDetails,
        ProjectStatus,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedInfo) {
      return res.status(404).json({
        success: false,
        message: "Info not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Info updated successfully",
      data: updatedInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.DeleteInfoController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInfo = await InfoDetails.findByIdAndDelete(id);

    if (!deletedInfo) {
      return res.status(404).json({
        success: false,
        message: "Info not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Info deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};