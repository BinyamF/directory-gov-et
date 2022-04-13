export default (officials = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return officials;
    case "CREATE":
      return officials;
    default:
      return officials;
  }
};
