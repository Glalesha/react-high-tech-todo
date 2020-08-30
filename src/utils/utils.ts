export const getNewId = (arr: any) => {
  let idArr = arr.filter((item: any) => {
    return item.id !== undefined && item.id !== null && !isNaN(item.id);
  });

  idArr = idArr.map((item: any) => {
    return item.id;
  });

  if (!idArr.length) {
    return 0;
  }

  return Math.max(...idArr) + 1;
};
