export default (officials = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...officials, action.payload];
    default:
      return officials;
  }
};
