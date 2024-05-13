
const { Router } = require("express");
const {
  createHotelDocument,
  getAllHotelDocuments,
  updateHotelDocument,
  deleteHotelDocument,
} = require("../controllers/firebaseController");

// initialise api version1 express router
const v1Router = Router();

// Route to get all hotel documents
v1Router.get("/get", getAllHotelDocuments);

// Route to create a new hotel document
v1Router.post("/create", createHotelDocument);

// Route to update an existing hotel document
v1Router.put("/hotels/:id", updateHotelDocument);

// Route to delete a hotel document
v1Router.delete("/hotels/:id", deleteHotelDocument);

module.exports = v1Router;

