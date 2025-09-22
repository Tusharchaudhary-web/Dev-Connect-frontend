import { createSlice } from "@reduxjs/toolkit";


const feedSlice=createSlice({
    name:"feed",
    initialState:[],
    reducers:{
        addfeed:(state,action)=>{
            return action.payload;
        },
        removeUserFromFeed:(state,action)=>{
            const newFeed=state.filter(user=>user._id!==action.payload);
            return newFeed;
        },
        clearFeed:()=>[]
    }
})

export const{addfeed,removeUserFromFeed,clearFeed}=feedSlice.actions;

export default feedSlice.reducer;