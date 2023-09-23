export const CLASSES_SELECTED = "CLASSES/CLASSES_SELECTED";
export const CLASSES_ARRCHECKED = "CLASSES/CLASSES_ArrChecked";
export const CLASSES_ARRFIELDIDD = "CLASSES/CLASSES_ARRFIELDIDD";

export const setClassesSelected = (payload) => ({
  type: CLASSES_SELECTED,
  payload,
});
export const setArrChecked = (payload) => ({
  type: CLASSES_ARRCHECKED,
  payload,
});
export const setFieldArr = (payload) => ({
  type: CLASSES_ARRFIELDIDD,
  payload,
});
