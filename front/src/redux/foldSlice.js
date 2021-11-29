import { createSlice } from '@reduxjs/toolkit';


const initFold = {
    name: "None",
    id: 0
}

export const foldSlice = createSlice ({
    name: 'folders',
    initialState:{
        fold: initFold,
        body: []
    },
    reducers: {
        AddFold: (state,action) =>{
            state.fold.id = action.payload.id
            state.fold.name = action.payload.name
        },
        agregTasks: (state,action) =>{
            state.body.push(action.payload)
        }
    },

});

export const { AddFold, agregTasks } = foldSlice.actions
export default foldSlice.reducer