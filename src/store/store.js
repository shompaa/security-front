import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authSlice } from "./auth";
import { searchPatentSlice } from "./car";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        // car: carSlice.reducer,
        searchPatent: searchPatentSlice.reducer,
    },
});

export const useUser = () => useSelector((state) => state.auth);
export const usePatentStore = () => useSelector((state) => state.searchPatent);