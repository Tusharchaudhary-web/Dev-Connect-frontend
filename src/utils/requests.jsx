import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addrequests: (state, action) => {
      return action.payload;
    },
    removerequests: () => [],
  },
});

export const { addrequests, removerequests } = requestsSlice.actions;

export default requestsSlice.reducer;
