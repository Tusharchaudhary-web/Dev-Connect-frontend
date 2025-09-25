import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer ;

/*

userSlice.name -> slice name

userSlice.actions = all actions(adduser,removeUser) that we made inside reducers = reducers object

userSlice.reducer → a big function for Redux store ( combination of all small ones)

Reducer function = updates the user state based on the action after we dispatch.

*/
