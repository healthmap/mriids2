// Both of these functions are to ensure that the Redux DevTools doesn't lag when handling the action to set the popoverAnchorElement.
// Without these, it tries to serialize the huge popoverAnchorElement payload/state and this causes lag.

// If the popoverAnchorElement exists in the state, it replaces it with "<<ANCHOR_ELEMENT>>" in Redux DevTools.
export const sanitizeStateFunction = (state) =>
  state.ui.popoverAnchorElement
    ? {
        ...state,
        ui: { ...state.ui, popoverAnchorElement: "<<ANCHOR_ELEMENT>>" },
      }
    : state;

// If the action type is "SET_POPOVER_ANCHOR_ELEMENT" and it has a payload, it replaces the payload with "<<ANCHOR_ELEMENT>>" in Redux DevTools.
export const sanitizeActionFunction = (action) =>
  action.type === "SET_POPOVER_ANCHOR_ELEMENT" && action.payload
    ? { ...action, payload: "<<ANCHOR_ELEMENT>>" }
    : action;
