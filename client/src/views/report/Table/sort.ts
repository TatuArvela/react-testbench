export const sortString = (key: string) => (a: any, b: any) => {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
};

export const sortNumber = (key: string) => (a: any, b: any) => {
  return a[key] - b[key];
};

export const sortDate = (key: string) => (a: any, b: any) => {
  return new Date(a[key]).getTime() - new Date(b[key]).getTime();
};
