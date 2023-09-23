import React from "react";
import clsx from "clsx";

function SimpleButton({ text, classNames, ...props }) {
  return (
    <button
      type="button"
      className={clsx(
        "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700",
        classNames,
      )}
      {...props}
    >
      {text}
    </button>
  );
}

export default SimpleButton;
