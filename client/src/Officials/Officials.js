import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOfficials } from "../actions/officials";
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
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "../styles";

const Officials = () => {
  const officials = useSelector((state) => state.officials);
  const dispatch = useDispatch();
  var limit = 6;

  var onLoadMore = () =>{
    limit = limit + 5;
    console.log(limit)
  };

  useEffect(() => {
    dispatch(getOfficials());
  }, [dispatch]);

  return !officials.length ? (
    <CircularProgress />
  ) : (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Box
            sx={{ position: "relative", p: { xs: 3, md: 6 }, pr: { md: 0 } }}
          >
            <Typography variant="h4" color="inherit">
              {"Appointed Government Officials"}
            </Typography>
            <Typography variant="overline" color="inherit" gutterBottom>
              {"Appointed government officials and their contact detail."}
            </Typography>
          </Box>
        </Grid>
      </Container>
      <div>
        <Container maxWidth="lg" style={styles.cardGrid}>
          <Grid container direction="row" spacing={4}>
            {officials.slice(0, limit).map((official,officialKey) => (
              <Grid item key={officialKey} xs={12} sm={6} lg={4}>
                <Card style={styles.card}>
                  <CardMedia
                    style={styles.cardMedia}
                    image={"https://source.unsplash.com/random"}
                    title="IGF News"
                  />
                  <CardContent style={styles.cardContent}>
                    <Typography variant="subtitle1">
                      {" "}
                      {official.firstName} {official.lastName}
                    </Typography>
                    <Typography>Follow on social media</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {" "}
                      Follow Us{" "}
                    </Button>
                    <TwitterIcon color="primary"></TwitterIcon>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Container style={styles.cardGrid}>
            <Button variant="contained" color="primary" onClick={()=>{onLoadMore()}} > Load More </Button>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Officials;
