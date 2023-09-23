import IconSimple from "../IconSimple.jsx";
import SimpleButton from "../SimpleButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { setArrChecked } from "../../redux/classes.action.js";
import { useState } from "react";

const Toolbar = () => {
  const [open, setOpen] = useState(false);
  const { ArrChecked } = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  return (
    <div className="w-full mb-4">
      <div
        className={clsx(
          ArrChecked.length > 0
            ? "w-full flex items-center justify-between bg-blue-700 py-4 px-6"
            : "hidden",
        )}
        // className="w-full flex items-center justify-between bg-blue-700 py-4 px-6"
      >
        <div className="flex">
          <div className="flex text-white cursor-pointer">
            Duplicate
            <IconSimple
              icon="heroicons:document-duplicate"
              className="text-white"
            />
          </div>
          <div className="flex text-white cursor-pointer px-4">
            Export
            <IconSimple icon="carbon:export" className="text-white" />
          </div>
          <div className="flex text-white cursor-pointer" onClick={() => {}}>
            Delete
            <IconSimple icon="ic:outline-delete" className="text-white" />
          </div>
        </div>

        <div className="flex">
          <div className="text-white pr-4">
            {ArrChecked.length} items selected
          </div>
          <div
            className="text-white cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Cancel
          </div>
        </div>
      </div>
      <div
        className={clsx(open ? "relative z-50" : "hidden")}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="false"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Deactivate
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    dispatch(setArrChecked([]));
                  }}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <form className="flex items-center mr-4">
          <div className="relative w-full">
            <div className="absolute flex items-center inset-y-0 pl-3 pointer-events-none">
              <IconSimple icon="material-symbols:search" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full pl-10 p-2.5 ocus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search branch name..."
            />
          </div>
        </form>
        <div className="flex items-center">
          <IconSimple icon="ant-design:setting-outlined" />
          <SimpleButton text="Add New" classNames="ml-2" />
        </div>
      </div>
    </div>
  );
};
export default Toolbar;
