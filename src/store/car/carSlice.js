import { createSlice } from "@reduxjs/toolkit";

// const carInitialState = {
//   id: null,
//   patent: null,
//   brand: null,
//   model: null,
//   color: null,
//   year: null,
//   address: null,
//   owner: null,
// };

const searchPatentInitialState = {
  patent: null,
};

// export const carSlice = createSlice({
//   name: "car",
//   carInitialState,
//   reducers: {
//     getCar: (state, { payload }) => {
//         state.patent = payload.patent;
//         state.brand = payload.brand;
//         state.model = payload.model;
//         state.color = payload.color;
//         state.year = payload.year;
//         state.address = payload.address;
//         state.owner = payload.owner;
//     },
//   },
// });

export const searchPatentSlice = createSlice({
  name: "searchPatent",
  initialState: searchPatentInitialState,
  reducers: {
    searchPatent: (state, { payload }) => {
      console.log("payload", payload);
      state.patent = payload;
    },
  },
});

// export const { getCar } = carSlice.actions;
export const { searchPatent } = searchPatentSlice.actions;
