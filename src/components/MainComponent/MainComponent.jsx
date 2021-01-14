import React from 'react';
import AddContact from '../addContact/AddContact';
import ContactList from '../contactsList/ContactList';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
}));

const MainComponent = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={false} sm={2} />
        <Grid container item xs={12} sm={8}>
          <Grid container item xs={12} className={classes.root}>
            <AddContact />
          </Grid>
          <ContactList />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div>
  );
};

export default MainComponent;
