import mongoose from "mongoose";

const officialsSchema = mongoose.Schema({
  firstName: !String,
  lastName: !String,
  office: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
  picture: !String,
});

const Officials = mongoose.model('Officials', officialsSchema);

export default Officials;