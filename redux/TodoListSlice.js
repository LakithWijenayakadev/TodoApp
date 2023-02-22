import { createSlice } from '@reduxjs/toolkit';
import Colors from '../src/styles/Colors';


const initialState = {

    haveTodos:false,
    todoListItems: [
     ]
}

export const TodoListSlice = createSlice({
    name: 'TodoList',
    initialState,
    reducers: {
        SettodoListItems: (state, action) => {
            state.todoListItems = action.payload
        },
        SethaveTodos: (state, action) => {
            state.haveTodos = action.payload
        },
    }
});

export const { SettodoListItems,SethaveTodos } = TodoListSlice.actions
export default TodoListSlice.reducer

 // {
        //     id: 1,
        //     Topic: "Check the door",
        //     Description: "Check the front door in the shop",
        //     Date: "2023 Jan 15",
        //     Color: Colors.lightBrown
        // },