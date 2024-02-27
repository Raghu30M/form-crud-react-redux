import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const IdSlice = createSlice({
    name: "Id-Slice",
    initialState,
    reducers: {
        handleId: (state, action) => {
            return action.payload;
        },
    },
});

export const { handleId } = IdSlice.actions;
export default IdSlice.reducer;
