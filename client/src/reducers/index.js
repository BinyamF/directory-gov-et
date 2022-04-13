import { combineReducers } from "redux";

import posts from "./posts";
import organizations from "./organizations";
import officials from "./officials";

export default combineReducers({
  posts,
  organizations,
  officials,
});
