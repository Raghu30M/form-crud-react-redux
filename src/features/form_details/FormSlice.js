import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const FormSlice = createSlice({
    name: "FormDetails",
    initialState,
    reducers: {
        // CREATE
        submitForm: (state, action) => {
            state.push(action.payload);
        },
        //UPDATE
        updateFormData: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.findIndex((item) => item.id === id);
            if (index !== -1) {
                const mappedData = {
                    username: updatedData.editusername,
                    usermail: updatedData.editusermail,
                    gender: updatedData.editgender,
                    hobby: updatedData.edithobby,
                    qualification: updatedData.editqualification,
                    usercomment: updatedData.editusercomment,
                    createdAt: updatedData.createdAt,
                    updateAt: updatedData.updateAt,
                    id: id,
                };
                state[index] = mappedData;
            }
        },
        deleteData: (state, action) => {
            const deleteId = action.payload;
            const newState = state.filter((item) => item.id !== deleteId);
            return newState;
            // return state.filter(item => item.id !== deleteId); 
        },
    },
});
export const { submitForm, updateFormData, deleteData } = FormSlice.actions;
export default FormSlice.reducer;
