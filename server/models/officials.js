import mongoose from "mongoose";

const officialsSchema = mongoose.Schema({
  firstName: !String,
  lastName: !String,
  office: !String,
  picture: !String,
});

const Officials = mongoose.model('Officials', officialsSchema);

export default Officials;