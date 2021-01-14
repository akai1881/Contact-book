import React, { useContext, useEffect, useState } from 'react';
import { contactBookContext } from '../../context/ContactBookProvider';
import { Grid, Container, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '250px',
      minHeight: '300px',
    },
  },
  contactItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    padding: theme.spacing(2),
  },
  contactItemForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
  },
  container: {
    display: 'flex',
    height: '100vh',
  },
}));

const Details = (props) => {
  const classes = useStyles();

  const { detailsContact, getBack } = useContext(contactBookContext);

  const [detailsItem, setDetailsItem] = useState(detailsContact);

  useEffect(() => {
    setDetailsItem(detailsContact);
  }, [detailsContact]);

  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        {detailsItem !== null ? (
          <Box className={classes.root}>
            <Paper elevation={2} className={classes.contactItem}>
              <div className={classes.contactItemForm}>
                <TextField
                  label="Имя"
                  defaultValue={detailsItem.name}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <TextField
                  label="Фамилия"
                  defaultValue={detailsItem.lastName}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <TextField
                  label="Телефон"
                  defaultValue={detailsItem.phone}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <TextField
                  label="Адрес проживания"
                  defaultValue={detailsItem.adress}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <TextField
                  label="Почта"
                  defaultValue={detailsItem.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <Button
                  size="small"
                  color="primary"
                  onClick={() => getBack(props.history)}
                >
                  Назад
                </Button>
              </div>
            </Paper>
          </Box>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Details;
