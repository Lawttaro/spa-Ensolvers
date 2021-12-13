import { createSlice } from '@reduxjs/toolkit';


const initFold = {
    name: "None",
    id: -1
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
            let exist = true
            for (var i = 0; i<state.body.length; i++){
                if (action.payload.id === state.body[i].id){
                    exist = false;
                }
            }
            if (exist){
                // action.payload.infold = state.fold.id
                state.body.push(action.payload)
            }
        },
        setTask: (state) =>{
            state.body = []
        },
    },

});

export const { AddFold, agregTasks,setTask } = foldSlice.actions
export default foldSlice.reducer