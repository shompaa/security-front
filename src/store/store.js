import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authSlice } from "./auth";
import { searchPlateSlice } from "./car";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        // car: carSlice.reducer,
        searchPlate: searchPlateSlice.reducer,
    },
});

export const useUser = () => useSelector((state) => state.auth);
export const usePlateStore = () => useSelector((state) => state.searchPlate);