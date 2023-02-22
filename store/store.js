import { configureStore } from '@reduxjs/toolkit';
import TodoListReducer from '../redux/TodoListSlice';
import CreateTodoReducer from '../redux/CreateTodoSlice';
import ViewTodoReducer from '../redux/ViewTodoSlice';
import ThemeReducer from '../redux/ThemeSlice';


export default configureStore({
  reducer: {
    TodoList: TodoListReducer,
    CreateTodo: CreateTodoReducer,
    ViewTodo: ViewTodoReducer,
    Theme: ThemeReducer
  }
})
