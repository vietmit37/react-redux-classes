// initial State
import {
  CLASSES_ARRCHECKED,
  CLASSES_ARRFIELDIDD,
  CLASSES_SELECTED,
} from "./classes.action";

const inititalState = {
  classesItem: null,
  ArrChecked: [],
  arrFieldIdd: [],
};

// Reducer
export default function classesReducer(state = inititalState, action) {
  switch (action.type) {
    case CLASSES_SELECTED:
      return {
        ...state,
        classesItem: action.payload,
      };
    case CLASSES_ARRCHECKED:
      return {
        ...state,
        ArrChecked: action.payload,
      };
    case CLASSES_ARRFIELDIDD:
      console.log(action.payload);
      return {
        ...state,
        arrFieldIdd: action.payload,
      };
    default:
      return state;
  }
}
