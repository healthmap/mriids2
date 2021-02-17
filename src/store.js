import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import {
  sanitizeActionFunction,
  sanitizeStateFunction,
} from "./utils/storeHelpers";

const composeEnhancers = composeWithDevTools({
  actionSanitizer: sanitizeActionFunction,
  stateSanitizer: sanitizeStateFunction,
});

export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
