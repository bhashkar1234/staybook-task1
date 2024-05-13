
class HotelDetails {
  constructor() {
    this.hotelName = ""; // string
    this.hotelEmailId = ""; // string
    this.hotelContactNumber = 0; // number
    this.hotelLandmark = ""; // string
    this.hotelAddress = ""; // string
    this.hotelStarRating = 0; // number
    this.hotelImageUrl = ""; // string

    this.hotelCity = ""; // string
    this.hotelState = ""; // string
    this.hotelPincode = ""; // string

    // example
    // this.hotelName = "Jai Balaji";
    // this.cityName = "New Delhi";
    // this.stateName = "Delhi";
    // change the name into dashified lowercase version then use it in the slugs
    // you can use dashify (https://www.npmjs.com/package/dashify) npm package for this behavior or create your own

    // this.hotelSlugsDetails.hotel = `staybook-hotel-${this.hotelName}-${this.cityName}`
    // this.hotelSlugsDetails.hotelCity = `hotels-in-${this.cityName}`
    // this.hotelSlugsDetails.hotelState = `hotels-in-${this.stateName}`

    this.hotelSlugsDetails = {
      hotel: "", // string
      hotelCity: "", // string
      hotelState: "", // string
    };

    this.hotelLongitude = 0; // number
    this.hotelLatitude = 0; // number
    this.hotelMapUrl = ""; //string

    this.hotelPaymentOption = {
      postpaid: false, // boolean
      prepaid: false, // boolean
      partial: false, // boolean
    };

    this.hotelImagesList = [
      {
        imageId: "", // string
        imageUrl: "", // string
        imageTitle: "", // string
      },
      {
        imageId: "", // string
        imageUrl: "", // string
        imageTitle: "", // string
      },
      {
        imageId: "", // string
        imageUrl: "", // string
        imageTitle: "", // string
      },
      {
        imageId: "", // string
        imageUrl: "", // string
        imageTitle: "", // string
      },
    ];
  }
}

module.exports = HotelDetails;
