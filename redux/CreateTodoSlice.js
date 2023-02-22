import { createSlice } from '@reduxjs/toolkit';
import Colors from '../src/styles/Colors';


const initialState = {
    topic: "",
    descriptin: "",
    color: "",
    date: "",
    selectedIndex:0,
    updateItem:false,
    updateId:"",


     ColorList : [
        {
            id: '1',
            Color: Colors.lightGreen,
            Clicked: true,
        },
        {
            id: '2',
            Color: Colors.darkGreen,
            Clicked: true,
        },
        {
            id: '3',
            Color: Colors.darkBlue,
            Clicked: true,
        },
        {
            id: '4',
            Color: Colors.lightPink,
            Clicked: true,
        },
        {
            id: '5',
            Color: Colors.red,
            Clicked: true,
        },
        {
            id: '6',
            Color: Colors.lightBrown,
            Clicked: true,
        },
        {
            id: '7',
            Color: Colors.shinyBlack,
            Clicked: true,
        },
    ]

}

export const CreateTodoSlice = createSlice({
    name: 'CreateTodo',
    initialState,
    reducers: {
        Settopic: (state, action) => {
            state.topic = action.payload
        },
        Setdescriptin: (state, action) => {
            state.descriptin = action.payload
        },
        Setcolor: (state, action) => {
            state.color = action.payload
        },
        Setdate: (state, action) => {
            state.date = action.payload
        },
        SetSelectedIndex: (state, action) => {
            state.selectedIndex = action.payload
        },
        SetupdateItem: (state, action) => {
            state.updateItem = action.payload
        },
        SetupdateId: (state, action) => {
            state.updateId = action.payload
        },
    }
});

export const { Settopic,SetSelectedIndex, Setdescriptin, Setcolor, Setdate ,SetupdateItem,SetupdateId} = CreateTodoSlice.actions
export default CreateTodoSlice.reducer