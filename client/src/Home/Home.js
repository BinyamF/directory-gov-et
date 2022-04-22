import React from "react";
import { Container, Typography, Grid, Box, Divider } from "@material-ui/core";
import Organizations from "../Organizations/Organizations";
import Officials from "../Officials/Officials";

const Home = () => {
  return (
    <>
      <main>
        <div>
        <Container maxWidth="lg">
        <Grid container>
          <Box
            sx={{ position: "relative", p: { xs: 3, md: 6 }, pr: { md: 0 } }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom > Ethiopian Government Directory </Typography>
              <Typography variant="body1" align="left" color="textSecondary" paragraph >
                The Directory.gov.et portal has designed and maintained by
                Ministry of Innovation and Technology (MInT) to product address
                information about Federal government bodies and employees. So
                far finding government addresses from a single source was
                difficult and government customers could not easily reach
                government bodies.
              </Typography>
          </Box>
        </Grid>
      </Container>
          <Container maxWidth="lg">
            <div>
              <Organizations/>
              <Divider/>
              <Officials/>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Home;
