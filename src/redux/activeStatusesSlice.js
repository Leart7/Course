import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStatuses: [],
};

const activeStatusesSlice = createSlice({
  name: "activeStatuses",
  initialState,
  reducers: {
    setActiveStatus(state, action) {
      state.activeStatuses = [...state.activeStatuses, action.payload];
    },
    removeActiveStatus(state, action) {
      state.activeStatuses = state.activeStatuses.filter(
        (s) => s !== action.payload,
      );
    },
  },
});

export const { setActiveStatus, removeActiveStatus } =
  activeStatusesSlice.actions;

export default activeStatusesSlice.reducer;
