import { all, fork } from "redux-saga/effects";
import { watchRoute } from "../sagas/sagas";

const rootSaga = function* () {
  yield all([fork(watchRoute)]);
};

export default rootSaga;
