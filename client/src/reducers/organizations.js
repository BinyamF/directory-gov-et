export default (organizations = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...organizations, action.payload];
    default:
      return organizations;
  }
};
