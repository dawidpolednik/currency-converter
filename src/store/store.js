import { createStore, compose } from "redux";
import reducer from "./../reducers/reducer";

export const store = createStore(
  reducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);
