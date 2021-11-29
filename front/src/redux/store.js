import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import foldReducer from './foldSlice'
import foldersReducer from './foldersSlice'
// store principal aca agregamos todos los slice que tengamos junto a sus reducers.
export default configureStore({
    reducer: {
        tasks: taskReducer,
        folds: foldReducer,
        folders: foldersReducer
    },
});