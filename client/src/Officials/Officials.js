import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Officials = () => {
  const officials = useSelector((state) => state.officials);

  console.log(officials);
  return <h2>Officials</h2>;
};

export default Officials;