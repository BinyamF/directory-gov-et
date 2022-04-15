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
} from "@material-ui/core";
import styles from "../styles";

const Officials = () => {
  const officials = useSelector((state) => state.officials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOfficials());
  }, [dispatch]);

  return !officials.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={1}>
      {officials.map((official) => (
        <Grid item key={official.id} xs={12} sm={6}>
          <Card style={styles.card}>
            <CardMedia
              style={styles.cardMedia}
              image="https://source.unsplash.com/random"
              title="IGF News"
            />
            <CardContent style={styles.cardContent}>
              <Typography gutterBottom variant="h5">
                {official.firstName}
              </Typography>
              <Typography>
                {official.firstName}
                {official.lastName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Officials;
