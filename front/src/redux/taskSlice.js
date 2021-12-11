import { createSlice } from '@reduxjs/toolkit';

const taskInit = {
    name: "None",
    id: 0
}

export const taskSlice = createSlice ({
    name: 'tasks',
    initialState: {
        value: [],
        inEdit: taskInit,
        toRm: taskInit
    },
    reducers: {
        SetTasks: (state,action) => {
            state.value.push(action.payload)
        },
        SetEdit: (state,action) => {
            state.inEdit = action.payload
        },
        ResetEdit: (state) =>{
            state.inEdit= taskInit
        },
        SetRm: (state,action) =>{
            for (let i = 0; i < state.value.length; i ++ ){
                if (action.payload.id === state.value[i].id){
                    state.value.splice(i,1)
                }
            }
            let url = "http://127.0.0.1:8000/deleteTask";
            fetch(url, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: action.payload.id})
            })
        },
        setTaskEdit: (state, action) =>{
            for (let i = 0; i < state.value.length; i ++ ){
                if (action.payload.id === state.value[i].id){
                    state.value[i].name = action.payload.name
                }
            }
        }
    },
});

export const { SetTasks, SetEdit, setTaskEdit, ResetEdit,SetRm } = taskSlice.actions

export default taskSlice.reducer