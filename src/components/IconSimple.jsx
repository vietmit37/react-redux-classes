import clsx from "clsx";
import { Icon } from "@iconify/react";

function IconSimple({ icon, className, ...props }) {
  return (
    <Icon
      width={20}
      icon={icon}
      className={clsx(
        "icon_arrow cursor-pointer text-[#525252] dark:text-[#fff]",
        className,
      )}
      {...props}
    />
  );
}

export default IconSimple;
