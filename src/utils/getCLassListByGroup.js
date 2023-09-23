export const getCLassListByGroup = (data) => {
  return data.reduce((acc, curr) => {
    const groupItem = {
      group_name: curr.group_name,
      group_id: curr.group_id,
      icon: "uis:angle-left",
      items: [],
    };
    const isExisted = acc.some((item) => item.group_id === curr.group_id);
    if (!isExisted) {
      acc.push(groupItem);
    }
    acc.forEach((item) => {
      if (item.group_id === curr.group_id) {
        const classItem = {
          class_id: curr.class_id,
          class_name: curr.class_name,
        };
        item.items.push(classItem);
      }
    });
    return acc;
  }, []);
};

export const getIdObjectByClassId = (data) => {
  return data.reduce((acc, curr) => {
    const groupItem = {
      extensions: curr.extensions,
      class_id: curr.class_id,
      items: [],
    };
    const isExisted = acc.some((item) => item.class_id === curr.class_id);
    if (!isExisted) {
      acc.push(groupItem);
    }
    acc.forEach((item) => {
      if (item.class_id === curr.class_id) {
        const fieldsItem = {
          id: curr.id,
          fields: curr.fields,
        };
        item.items.push(fieldsItem);
      }
    });
    return acc;
  }, []);
};
