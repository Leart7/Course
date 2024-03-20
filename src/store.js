import { configureStore } from "@reduxjs/toolkit";
import activeStatusesSlice from "./redux/activeStatusesSlice";
import searchSlice from "./redux/searchSlice";
import coursesFilterSlice from "./redux/coursesFilterSlice";

const store = configureStore({
  reducer: {
    activeStatuses: activeStatusesSlice,
    search: searchSlice,
    filterOpen: coursesFilterSlice,
  },
});

export default store;
