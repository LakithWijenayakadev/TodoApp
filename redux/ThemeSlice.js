import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    theme: 'light',


}

export const ThemeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        Settheme: (state, action) => {
            state.theme = action.payload
        },

    }
});

export const { Settheme } = ThemeSlice.actions
export default ThemeSlice.reducer