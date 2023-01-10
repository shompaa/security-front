import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const {user, token} = action.payload;
            state.user = user;
            state.token = token;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
        }
    },
});

export const {setCredentials, setLoading, logOut} = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;