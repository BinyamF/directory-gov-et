import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrganizations } from "../actions/organizations";
import { Grid, CircularProgress, Card, CardActions, CardMedia, CardContent, Button, Typography } from "@material-ui/core";
import styles from "../styles";

const Organizations = () => {
  const organizations = useSelector((state) => state.organizations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrganizations());
  }, [dispatch]);

  return (
    !organizations.length ? <CircularProgress/> : (
      <Grid container alignItems="stretch" spacing={1}>
        {organizations.map((organization)=>(
          <Grid item key={organization.id} xs={12} sm={6}>
            <Card style={styles.card}>
                  <CardMedia
                    style={styles.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="IGF News"
                  />
                  <CardContent style={styles.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {organization.orgName}
                    </Typography>
                    <Typography>
                    {organization.description}
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
    )
  );
};

export default Organizations;
