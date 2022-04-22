import React from "react";
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
  Button,
  Divider,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import emblem from "./images/emblem.png";
import Posts from "./Posts/Posts";
import Organizations from "./Organizations/Organizations";
import Officials from "./Officials/Officials";
import Form from "./Form/Form.js";
import styles from "./styles";
import Home from "./Home/Home";
import OrganizationReg from "./OrganizationReg/OrganizationReg";
import OfficialsReg from "./OfficialsReg/OfficialsReg";

const App = () => {
  const pages = ["Home", "Organizations", "Officials", "Form"];

  return (
    <>
      <Router>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Box display="flex" flexGrow={1} alignItems="center">
              <img
                src={emblem}
                alt="logo"
                style={styles.logo}
                height="60"
              ></img>
              <Typography variant="h5">
                Ethiopian Government Directory
              </Typography>
            </Box>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Button
                  color="inherit"
                  underline="none"
                  component={Link}
                  to={"/" + page}
                >
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
                  <Route
                    path="/organizationreg"
                    component={OrganizationReg}
                  ></Route>
                  <Route path="/officialsreg" component={OfficialsReg}></Route>
                </Switch>
            </Grid>
          </Container>
        </Grow>
      </Router>
      <footer>
        <Container style={styles.footer}>
          <Divider />
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            style={styles.footer}
          >
            Copyright © 2022 Directory of Government of the Federal Democratic
            Republic of Ethiopia.
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default App;
