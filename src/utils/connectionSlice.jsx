import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const connectionsSlice=createSlice({
    name:"connection",
    initialState:null,
   reducers:{
    addConnections:(state,action)=>{
     return action.payload;
    },
    removeConnections:()=>null
   }
})

export const{addConnections,removeConnections}=connectionsSlice.actions;

export default connectionsSlice.reducer;