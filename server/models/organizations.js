import mongoose from "mongoose";

const organizationSchema = mongoose.Schema({
  orgName: !String,
  orgType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrganizationType",
  },
  description: !String,
  logo: !String,
  city: !String,
  phoneNo: ![String],
  website: !String,
  email: !String,
  facebbokLink: !String,
  twitterLink: !String,
});

const Organization = mongoose.model('Organization', organizationSchema);

export default Organization;