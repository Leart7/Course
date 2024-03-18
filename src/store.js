import { configureStore } from "@reduxjs/toolkit";
import activeStatusesSlice from "./redux/activeStatusesSlice";

const store = configureStore({
  reducer: {
    activeStatuses: activeStatusesSlice,
  },
});

export default store;
