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
  },
  icon: {
    marginRight: "20px",
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  toolbarstyle: {
    color: "#364863",
  },
  menuItems: {
    color: "white",
    marginLeft: "auto",
  },
  buttons: {
    marginTop: "40px",
  },
  header: {
    marginTop: "50px",
    marginBottom: "20px",
  },
  hero: {
    marginTop: "30px",
    marginBottom: "20px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: "20px",
  },
}));
