import React from "react";
import { Button, Container, Grid, Typography, Paper } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <main>
        <div>
          <Container maxWidth="lg">
            <Paper
              sx={{
                position: "relative",
                backgroundColor: "grey.800",
                color: "#fff",
                mb: 4,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${"https://source.unsplash.com/random"})`,
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                National Internet Governance
              </Typography>
              <Typography
                variant="body1"
                align="left"
                color="textSecondary"
                paragraph
              >
                The Directory.gov.et portal has designed and maintained by
                Ministry of Innovation and Technology (MInT) to product address
                information about Federal government bodies and employees. So
                far finding government addresses from a single source was
                difficult and government customers could not easily reach
                government bodies.
              </Typography>
            </Paper>

            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    {" "}
                    Watch More{" "}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    {" "}
                    Watch More{" "}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Home;
