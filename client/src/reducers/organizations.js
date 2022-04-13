export default (organizations = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return organizations;
    case "CREATE":
      return organizations;
    default:
      return organizations;
  }
};
