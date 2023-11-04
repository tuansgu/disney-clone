import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
//import movieReducer from "../features/movie/movieSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  // Add other custom middleware options here
});

export default configureStore({
  reducer: {
    user: userReducer,
    //movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customizedMiddleware),
});