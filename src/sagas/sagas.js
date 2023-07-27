import { put, takeLatest } from "redux-saga/effects";
import { change } from "../reducers/coordsSlice";
import axios from "axios";
import { GET_ROUTE } from "./actions";

const items = [
  {
    key: "1",
    value: [
      [30.29496392, 59.84660399],
      [30.42423701, 59.82934196],
      [30.39064208, 59.83567701],
    ],
  },
  {
    key: "2",
    value: [
      [30.38084208, 59.83567701],
      [30.29498392, 59.84660396],
      [30.41705807, 59.82761295],
    ],
  },
  {
    key: "3",
    value: [
      [30.424237, 59.829341],
      [30.417056, 59.827612],
      [30.294963, 59.846603],
    ],
  },
];

function* getRouteSaga({ payload: key }) {
  try {
    debugger;
    const val = items.filter((el) => el.key == key)[0].value;
    const coords = val.join(";");
    const response = yield axios.get(
      `http://router.project-osrm.org/route/v1/driving/${coords}?geometries=geojson`
    );
    const reversed = response.data.routes[0].geometry.coordinates.map((arr) =>
      arr.reverse()
    );
    yield put(change(reversed));
  } catch (error) {
    yield put(change(error.message));
  }
}
export function* watchRoute() {
  yield takeLatest(GET_ROUTE, getRouteSaga);
}
