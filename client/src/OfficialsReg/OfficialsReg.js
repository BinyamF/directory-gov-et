import React, { useState } from "react";
import { Typography, Grid, TextField, Button, Container, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createOfficials } from "../actions/officials";

const OfficialsReg = () => {
  const dispatch = useDispatch();
  const [officialsData, setOfficialsData] = useState({
    firstName: "",
    lastName: "",
    office: "",
    picture: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOfficials(officialsData));
  };
  const clear = () => {};
  return (
    <>
      {" "}
      <Container maxWidth="lg">
        <Grid container>
          <Box sx={{ position: "relative", p: { xs: 3, md: 6 }, pr: { md: 0 } }} >
            <Typography variant="h4" color="inherit">
              {"Officials Registration"}
            </Typography>
            <Typography variant="overline" color="inherit" gutterBottom>
              {"Registration form of Officials' detail."}
            </Typography>
          </Box>          
        </Grid>
      </Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First Name"
            fullWidth
            autoComplete="first name"
            variant="standard"
            value={officialsData.firstName}
            onChange={(e) => {
              setOfficialsData({
                ...officialsData,
                firstName: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastname"
            label="Last Name"
            fullWidth
            autoComplete="last name"
            variant="standard"
            value={officialsData.lastName}
            onChange={(e) => {
              setOfficialsData({
                ...officialsData,
                lastName: e.target.value,
              });
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="office"
            name="office"
            label="Office"
            fullWidth
            autoComplete="office"
            variant="standard"
            value={officialsData.office}
            onChange={(e) => { setOfficialsData({ ...officialsData, office: e.target.value, }); }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="picture"
            name="picture"
            label="Picture"
            fullWidth
            autoComplete="picture"
            variant="standard"
            value={officialsData.picture}
            onChange={(e) => { setOfficialsData({ ...officialsData, picture: e.target.value, }); }}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={clear}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default OfficialsReg;
