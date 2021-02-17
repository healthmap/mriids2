import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const sanitizeStateFunction = (state) =>
  state.ui.popoverAnchorElement
    ? {
        ...state,
        ui: { ...state.ui, popoverAnchorElement: "<<ANCHOR_ELEMENT>>" },
      }
    : state;

const sanitizeActionFunction = (action) =>
  action.type === "SET_POPOVER_ANCHOR_ELEMENT" && action.payload
    ? { ...action, payload: "<<ANCHOR_ELEMENT>>" }
    : action;

const composeEnhancers = composeWithDevTools({
  actionSanitizer: sanitizeActionFunction,
  stateSanitizer: sanitizeStateFunction,
});

export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
