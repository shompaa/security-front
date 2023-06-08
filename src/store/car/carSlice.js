import { createSlice } from "@reduxjs/toolkit";

// const carInitialState = {
//   id: null,
//   plate: null,
//   brand: null,
//   model: null,
//   color: null,
//   year: null,
//   address: null,
//   owner: null,
// };

const searchPlateInitialState = {
  plate: null,
};

// export const carSlice = createSlice({
//   name: "car",
//   carInitialState,
//   reducers: {
//     getCar: (state, { payload }) => {
//         state.plate = payload.plate;
//         state.brand = payload.brand;
//         state.model = payload.model;
//         state.color = payload.color;
//         state.year = payload.year;
//         state.address = payload.address;
//         state.owner = payload.owner;
//     },
//   },
// });

export const searchPlateSlice = createSlice({
  name: "searchPlate",
  initialState: searchPlateInitialState,
  reducers: {
    searchPlate: (state, { payload }) => {
      state.plate = payload;
    },
  },
});

// export const { getCar } = carSlice.actions;
export const { searchPlate } = searchPlateSlice.actions;
