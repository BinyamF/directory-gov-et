import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Organizations = () => {
  const organizations = useSelector((state) => state.organizations);

  console.log(organizations);
  return <h2>Organizations</h2>;
};

export default Organizations;