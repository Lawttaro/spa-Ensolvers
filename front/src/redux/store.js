import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

// store principal aca agregamos todos los slice que tengamos junto a sus reducers.
export default configureStore({
    reducer: {
        tasks: taskReducer
    },
});