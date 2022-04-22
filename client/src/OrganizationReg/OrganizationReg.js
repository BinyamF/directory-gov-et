import React, { useState } from "react";
import { Typography, Grid, TextField, Button, Container, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createOrganization } from "../actions/organizations";

const OrganizationReg = () => {
  const dispatch = useDispatch();
  const [organizationData, setOrganizatioData] = useState({
    orgName: "",
    orgType: "",
    description: "",
    logo: "",
    city: "",
    phoneNo: "",
    website: "",
    email: "",
    facebookLink: "",
    twitterLink: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrganization(organizationData));
  };
  const clear = () => {};
  return (
    <>
      {" "}
      <Container maxWidth="lg">
        <Grid container>
          <Box sx={{ position: "relative", p: { xs: 3, md: 6 }, pr: { md: 0 } }} >
            <Typography variant="h4" color="inherit">
              {"Organization Registration"}
            </Typography>
            <Typography variant="overline" color="inherit" gutterBottom>
              {"Registration form of organization's detail."}
            </Typography>
          </Box>          
        </Grid>
      </Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="orgName"
            name="orgName"
            label="Organization Name"
            fullWidth
            autoComplete="organization name"
            variant="standard"
            value={organizationData.orgName}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                orgName: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="orgType"
            name="orgType"
            label="Organization Type"
            fullWidth
            autoComplete="organization type"
            variant="standard"
            value={organizationData.orgType}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                orgType: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="description"
            variant="standard"
            value={organizationData.description}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                description: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
            value={organizationData.city}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                city: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phoneNo"
            name="phoneNo"
            label="Phone No."
            fullWidth
            autoComplete="Phone No."
            variant="standard"
            value={organizationData.phoneNo}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                phoneNo: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="website"
            name="website"
            label="Website"
            fullWidth
            autoComplete="website"
            variant="standard"
            value={organizationData.website}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                website: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={organizationData.email}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                email: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="facebokLink"
            name="facebokLink"
            label="Facebook Address"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={organizationData.facebookLink}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                facebookLink: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="twitterLink"
            name="twitterLink"
            label="Twitter Address"
            fullWidth
            autoComplete="twitterLink"
            variant="standard"
            value={organizationData.twitterLink}
            onChange={(e) => {
              setOrganizatioData({
                ...organizationData,
                twitterLink: e.target.value,
              });
            }}
          />
        </Grid>
        <Container gutterBottom>
          <Grid container spacing={2} >
            <Grid item>
              <Button variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit} >
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" size="large" onClick={clear} >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Container>        
      </Grid>
    </>
  );
};

export default OrganizationReg;
