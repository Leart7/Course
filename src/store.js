import { configureStore } from "@reduxjs/toolkit";
import activeStatusesSlice from "./redux/activeStatusesSlice";
import searchSlice from "./redux/searchSlice";
import coursesFilterSlice from "./redux/coursesFilterSlice";
import courseViewSlice from "./redux/courseViewSlice";

const store = configureStore({
  reducer: {
    activeStatuses: activeStatusesSlice,
    search: searchSlice,
    filterOpen: coursesFilterSlice,
    courseView: courseViewSlice,
  },
});

export default store;
