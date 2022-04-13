import React, { useEffect } from "react";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grow,
  Grid,
  MenuItem,
  Button
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getPosts } from "./actions/posts";
import emblem from "./images/emblem.png";
import Posts from "./Posts/Posts";
import Organizations from "./Organizations/Organizations";
import Officials from "./Officials/Officials";
import Form from "./Form/Form.js";
import styles from "./styles";
import { getOfficials } from "./actions/officials";
import { getOrganizations } from "./actions/organizations";
import Home from "./Home/Home";

const App = () => {
  const pages = ["Home", "Organizations", "Officials", "Form"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(), getOrganizations(), getOfficials());
  }, [dispatch]);

  return (
    <>
    <Router>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Box display="flex" flexGrow={1} alignItems="center">
            <img src={emblem} alt="logo" style={styles.logo} height="60"></img>
            <Typography variant="h5">Ethiopian Government Directory</Typography>
          </Box>
          {pages.map((page) => (
            <MenuItem key={page}>
              <Button color="inherit" underline="none" component={Link} to={"/" + page}>
                {page}
              </Button>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacign={3}
          >
            <Grid item xs={12} sm={7}>
              
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/Home" component={Home}></Route>
                  <Route path="/officials" component={Officials}></Route>
                  <Route
                    path="/organizations"
                    component={Organizations}
                  ></Route>
                  <Route path="/form" component={Form}></Route>
                  <Route path="/posts" component={Posts}></Route>
                  <Organizations />
                </Switch>
              
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Router>
    </>
  );
};

export default App;
