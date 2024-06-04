import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "VOID",
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.status = "SUCCEEDED";
      state.userData = action.payload;
    },
    editUsername: (state, action) => {
      state.status = "MODIFIED";
      state.userData.username = action.payload;
    },
    logout: (state) => {
      state.status = "VOID";
      state.userData = {};
    },
  },
});

export const { getUserProfile, editUsername, logout } = userSlice.actions;
export default userSlice.reducer;
