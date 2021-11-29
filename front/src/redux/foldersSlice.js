import { createSlice } from '@reduxjs/toolkit';


const InitFolds = [{
  idFold: 0,
  nameFold: "none",
  listTask: []

}]

export const folderSlice = createSlice ({
  name: "allFolders",
  initialState: {
    ListFolds: [InitFolds]
  },
  reducers:{
    AddFolders: (state,action) =>{
      state.ListFolds.push(action.payload)
    }
  }

});

export const { AddFolders } = folderSlice.actions
export default folderSlice.reducer