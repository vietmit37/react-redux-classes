import { useDispatch, useSelector } from "react-redux";
import { classItem as classItemMock } from "../mockData/classItem.js";
import { useEffect } from "react";
import { setFieldArr } from "../redux/classes.action.js";

const FieldName = () => {
  const { classesItem } = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const fields =
    classItemMock.data.class_id === classesItem?.class_id
      ? classItemMock.data.fields
      : [];
  useEffect(() => {
    const test = fields.reduce((acc, curr) => {
      const isExisted = acc.some((item) => item.idd_name === curr.idd_name);
      if (!isExisted) {
        acc.push(curr.idd_name);
      }
      return acc;
    }, []);
    dispatch(setFieldArr(test));
  }, [classesItem]);
  return (
    <div className="fieldName_container sticky left-0 z-10">
      <div className="idfObject_header">
        <div className="w-[50px] mr-2">&nbsp;</div>
        <div className="w-[200px] mr-2">Field Name</div>
        <div className="w-[100px] mr-2">Units</div>
        <div className="w-[80px]">IDD</div>
      </div>
      {fields.map((item, index) => (
        <div
          key={item.field_id}
          className="idfObject_row border-l-[1px] border-r-[1px] bg-white"
        >
          <div className=" w-[50px] text-center mr-2">
            <span className="inline-block w-[10px]">
              <span className="text-[#f00]">!</span>
            </span>
            <span>{index + 1}</span>
          </div>
          <div className="w-[200px] mr-2">{item.field_name}</div>
          <div className="w-[100px] mr-2 uppercase">
            {item.options && item.options.units ? item.options.units : "N/A"}
          </div>
          <div className="w-[80px]">{item.idd_name}</div>
        </div>
      ))}
    </div>
  );
};
export default FieldName;
