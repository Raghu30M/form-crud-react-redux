import { configureStore } from "@reduxjs/toolkit";
import formDetails from "../features/form_details/FormSlice";
import editId from "../features/edit_id/editId";

export const store = configureStore({
    reducer: { form: formDetails, editId },

});
