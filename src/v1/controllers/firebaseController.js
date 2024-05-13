

// const { db } = require("../../database/firebase");
const { db } = require("../../database/firebase");

// console.log(db);

const HotelDetails = require("../../database/document");


const createHotelDocument = async (req, res) => {
  try {
    // Extract hotel details from request body
    const hotelData = req.body;

    console.log(hotelData);
    // Validate hotel data (if necessary)

    // Create new instance of HotelDetails
    const hotelDetails = new HotelDetails();
    Object.assign(hotelDetails, hotelData); // Assign request data to hotelDetails
    const hotelDataPlainObject = JSON.parse(JSON.stringify(hotelDetails));
    // Save the hotel document to Firebase
    const docRef = await db.collection("hotels").add(hotelDataPlainObject);

    res.status(201).json({
      status: "OK",
      data: {
        id: docRef.id,
        message: "Hotel document created successfully",
      },
    });
  } catch (error) {
   
    res.status(500).json({
      status : "FAILED",
      message : error.message || error,
    });
  }
};



const getAllHotelDocuments = async (req, res) => {
  try {
    const snapshot = await db.collection("hotels").get();
    const hotels = snapshot.docs.map((doc) => doc.data());

    res.status(200).json({
      status: "OK",
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error: error.message || error,
    });
    console.log(error);
  }
};

const updateHotelDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const hotelData = req.body;

    // Validate hotel data (if necessary)

    // Update the hotel document in Firebase
    await db.collection("hotels").doc(id).update(hotelData);

    res.status(200).json({
      status: "OK",
      message: "Hotel document updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error: error.message || error,
    });
  }
};

const deleteHotelDocument = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the hotel document from Firebase
    await db.collection("hotels").doc(id).delete();

    res.status(200).json({
      status: "OK",
      message: "Hotel document deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error: error.message || error,
    });
  }
};

module.exports = {
  createHotelDocument,
  getAllHotelDocuments,
  updateHotelDocument,
  deleteHotelDocument,
};
