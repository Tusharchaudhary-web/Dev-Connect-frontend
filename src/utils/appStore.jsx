import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionsReducer from "./connectionSlice";
import requestsReducer from "./requests";

const appStore = configureStore({
  reducer: {
    user: userReducer, // now we will dispatch an action ( means we will add data to the store)
    feed: feedReducer,
    connections: connectionsReducer,
    requests: requestsReducer,
  },
});

export default appStore;

// to dispatch an action we will use hook given by RTK
