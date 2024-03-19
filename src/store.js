import { configureStore } from "@reduxjs/toolkit";
import activeStatusesSlice from "./redux/activeStatusesSlice";
import searchSlice from "./redux/searchSlice";

const store = configureStore({
  reducer: {
    activeStatuses: activeStatusesSlice,
    search: searchSlice,
  },
});

export default store;
