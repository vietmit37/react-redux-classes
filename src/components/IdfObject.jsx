import React, { useState } from "react";
import { idfObjects as MockIdfObjects } from "../mockData/idfObjects.js";
import {
  classItem as classItemMock,
  classItem,
} from "../mockData/classItem.js";
import { useDispatch, useSelector } from "react-redux";
import { getIdObjectByClassId } from "../utils/getCLassListByGroup.js";
import { setArrChecked } from "../redux/classes.action.js";
import { getIdObjectsArrange } from "../utils/getIdObjectsArrange.js";

function IdfObject() {
  const { classesItem, ArrChecked, arrFieldIdd } = useSelector(
    (state) => state.classes,
  );
  const dispatch = useDispatch();
  const idfObjects = getIdObjectByClassId(MockIdfObjects.data);
  const fieldsIdObject =
    idfObjects[0].class_id === classesItem?.class_id ? idfObjects[0].items : [];
  return (
    <div className="fieldName_objectItem">
      <div className="flex ml-5">
        {fieldsIdObject.map((item, index) => {
          const arrKeys = Object.keys(item.fields);
          const difference = arrFieldIdd.filter((x) => !arrKeys.includes(x));
          const arrEntries = getIdObjectsArrange(
            Object.entries(item.fields),
            difference,
          );
          console.log(arrEntries);
          return (
            <div className="shrink-0 mr-2 w-[350px]" key={item.id}>
              <div className="idfObject_header px-2">
                <div className="flex items-center">
                  <input
                    id={item.id}
                    type="checkbox"
                    onChange={(e) => {
                      const { id, checked } = e.target;
                      const test = !checked
                        ? ArrChecked.filter((item) => item !== id)
                        : [...ArrChecked, id];
                      dispatch(setArrChecked(test));
                    }}
                    checked={ArrChecked?.includes(`${item.id}`)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={item.id}
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300 cursor-pointer"
                  >
                    {`Object ${index + 1} (#${item.id}}`}
                  </label>
                </div>
              </div>
              {arrEntries.map(([key, value], i) => {
                return (
                  <div
                    key={`${item.id}${key}`}
                    className="idfObject_row border-l-[1px] border-r-[1px] border-b-[1px] bg-white"
                  >
                    {key !== "" ? (
                      <input
                        type="text"
                        className="border-0 border-b-[1px] text-gray-900 text-sm w-full mx-2 p-2 dark:text-white"
                        value={value}
                        onChange={() => e.target.value}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IdfObject;
