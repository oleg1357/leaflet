import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import coordsReducer from "../reducers/coordsSlice";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    coords: coordsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
