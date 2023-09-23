import IconSimple from "../IconSimple.jsx";
// mock data
import { idfClasses as mockIdfClasses } from "../../mockData/idfClasses";
import { getCLassListByGroup } from "../../utils/getCLassListByGroup.js";
import { useDispatch } from "react-redux";
import { setClassesSelected } from "../../redux/classes.action.js";

const ClassesSideBar = () => {
  const idfClasses = getCLassListByGroup(mockIdfClasses.data);
  const dispatch = useDispatch();
  const handleActive = (classItem) => {
    dispatch(setClassesSelected(classItem));
  };
  return (
    <>
      <aside className="transition-all shadow-[0_15px_30px_0_rgba(85,150,230,0.3)] mr-4 shrink-0 bg-gray-50 dark:bg-gray-800 w-[320px]">
        <div className="flex items-center justify-end p-2 h-[45px] shadow-[0_0_5px_0_rgba(85,150,230,0.3)]">
          <IconSimple icon="ic:baseline-close" />
        </div>
        <div className="px-1 py-3 overflow-y-auto h-[calc(100vh-45px)] visible">
          <ul className="font-medium">
            {idfClasses.map((classes) => (
              <li className="cursor-pointer relative" key={classes.group_id}>
                <input
                  className="classChildren_checkbox absolute top-0 left-0 z-1 w-full h-[42px] cursor-pointer opacity-0"
                  type="checkbox"
                />
                <div className="class_header flex p-2 text-gray-900 rounded-lg dark:text-white">
                  <IconSimple
                    icon="uis:angle-left"
                    className="rotate-180 font"
                  />
                  <span className="flex-1 mx-2 truncate ">
                    {classes.group_name}
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 mt-[2px] text-[12px] text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {classes.items.length}
                  </span>
                </div>
                <ul className="class_item hidden">
                  {classes.items.map((sub) => (
                    <li
                      key={sub.class_id}
                      className="cursor-pointer relative pl-5"
                      onClick={() => handleActive(sub)}
                    >
                      <div className="class_header flex p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white px-2 items-center hover:bg-gray-200 dark:hover:bg-gray-700">
                        <span className="flex-1 mx-2 truncate ">
                          {sub.class_name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
export default ClassesSideBar;
