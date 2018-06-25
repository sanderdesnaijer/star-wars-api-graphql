export const getYear = year => {
  const yearSplitted = year.split("-");
  return yearSplitted.shift();
};

export const getIdfromUrl = url => {
  const splitedUrl = url.split("/");
  splitedUrl.pop();
  return splitedUrl.pop();
};
