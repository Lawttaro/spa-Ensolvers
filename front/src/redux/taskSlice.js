import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice ({
    name: 'tasks',
    initialState: {
        value: []
    },
    reducers: {
        SetTasks: (state,action) => {
            state.value.push(action.payload)
        }
    },
});

export const { SetTasks } = taskSlice.actions
// importante para acoplar este reduce al store principal
export default taskSlice.reducer