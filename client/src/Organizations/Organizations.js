import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrganizations } from "../actions/organizations";
import {
  Grid,
  CircularProgress,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "../styles";

const Organizations = () => {
  const organizations = useSelector((state) => state.organizations);
  const dispatch = useDispatch();
  var limit = 6;

  var onLoadMore = () =>{
    limit = limit + 5;
    console.log(limit)
  };
  
  useEffect(() => {
    dispatch(getOrganizations());
  }, [dispatch]);

  return !organizations.length ? (
    <CircularProgress />
  ) : (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Box
            sx={{ position: "relative", p: { xs: 3, md: 6 }, pr: { md: 0 } }}
          >
            <Typography variant="h4" color="inherit">
              {"Federal Government Offices"}
            </Typography>
            <Typography variant="overline" color="inherit" gutterBottom>
              {"Government offices and their contact detail."}
            </Typography>
          </Box>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={styles.cardGrid}>
        <Grid container direction="row" spacing={4}>
          {organizations.slice(0, limit).map((organization, orgKey) => (
            <Grid item key={orgKey} xs={12} sm={6} lg={4}>
              <Card style={styles.card}>
                <CardMedia
                  style={styles.cardMedia}
                  image={"https://source.unsplash.com/random"}
                  title="Org Pic"
                />
                <CardContent style={styles.cardContent}>
                  <Typography gutterBottom variant="h5">
                    {organization.orgName}
                  </Typography>
                  <Typography>{organization.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <LanguageIcon color="primary" />
                  </Button>
                  <Button size="small" color="primary">
                    <TwitterIcon size="small" color="primary" />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Container style={styles.cardGrid}>
            <Button variant="contained" color="primary" onClick={()=>{onLoadMore()}} > Load More </Button>
          </Container>
      </Container>
    </>
  );
};

export default Organizations;
