import { createSlice } from '@reduxjs/toolkit';
import Colors from '../src/styles/Colors';


const initialState = {
    
    todoData:""

    

}

export const ViewTodoSlice = createSlice({
    name: 'ViewTodo',
    initialState,
    reducers: {
        SetTodoData: (state, action) => {
            state.todoData = action.payload
        },
      
    }
});

export const { SetTodoData } = ViewTodoSlice.actions
export default ViewTodoSlice.reducer

 // {
        //     id: 1,
        //     Topic: "Check the door",
        //     Description: "Check the front door in the shop",
        //     Date: "2023 Jan 15",
        //     Color: Colors.lightBrown
        // },