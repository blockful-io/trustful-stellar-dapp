export const parseQueryParams = (query: Object) => {
  return Object.entries(query)
    .map(([key, value]) => JSON.stringify(key + "=" + value))
    .join("");
};
