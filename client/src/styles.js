import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(64, 75, 133, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  logo:{
    height: "65px",
    paddingRight: "10px",
  },
  button:{
    color: "#f3f",
  }
}));
