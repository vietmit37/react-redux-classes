export const getIdObjectsArrange = (arr, arr2) => {
  const extractParts = (label) => {
    const match = label.match(/([A-Za-z]+)([0-9]+)/);
    return match ? [match[1], parseInt(match[2])] : [label, 0];
  };

  // arr2.sort((a, b) => {
  //   const [aLetters, aNumbers] = extractParts(a);
  //   const [bLetters, bNumbers] = extractParts(b);
  //
  //   if (aLetters !== bLetters) {
  //     return aLetters.localeCompare(bLetters);
  //   }
  //
  //   return aNumbers - bNumbers;
  // });
  for (let item of arr2) {
    arr.push([item, ""]);
  }

  return arr.sort((a, b) => {
    const [aLetters, aNumbers] = extractParts(a[0]);
    const [bLetters, bNumbers] = extractParts(b[0]);

    if (aLetters !== bLetters) {
      return aLetters.localeCompare(bLetters);
    }

    return aNumbers - bNumbers;
  });
};
