import { createSlice } from "@reduxjs/toolkit";

export const houseDataSlice = createSlice({
  name: "houseData",
  initialState: {
    houseData: [
      {
        id: 1,
        text: "House",
        imageSource: require("../assets/images/house.png"),
      },
      {
        id: 2,
        text: "Apartment",
        imageSource: require("../assets/images/apartment.png"),
      },
      {
        id: 3,
        text: "Duplex",
        imageSource: require("../assets/images/duplex.png"),
      },
      {
        id: 4,
        text: "Shared Apartment",
        imageSource: require("../assets/images/sharedapartment.png"),
      },
      {
        id: 5,
        text: "Self Contained",
        imageSource: require("../assets/images/travel.png"),
      },
      {
        id: 6,
        text: "Farm House",
        imageSource: require("../assets/images/farm.png"),
      },
      {
        id: 7,
        text: "Hostel",
        imageSource: require("../assets/images/hostel.png"),
      },
      {
        id: 8,
        text: "Commercial Space",
        imageSource: require("../assets/images/office.png"),
      },
      {
        id: 9,
        text: "Shop",
        imageSource: require("../assets/images/shops.png"),
      },
      {
        id: 10,
        text: "Short Let",
        imageSource: require("../assets/images/room.png"),
      },
    ],
    roomData: [
      {
        id: 0,
        text: "None",
      },
      {
        id: 1,
        text: "1",
      },
      {
        id: 2,
        text: "2",
      },
      {
        id: 3,
        text: "3",
      },
      {
        id: 4,
        text: "4",
      },
      {
        id: 5,
        text: "5",
      },
      {
        id: 6,
        text: "6",
      },
      {
        id: 7,
        text: "7",
      },
      {
        id: 8,
        text: "8",
      },
      {
        id: 9,
        text: "9",
      },
      {
        id: 10,
        text: "10",
      },
    ],
  },
  reducers: {},
});

export default houseDataSlice.reducer;
