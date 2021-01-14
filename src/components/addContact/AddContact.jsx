import React, { useContext, useState } from 'react';
import { contactBookContext } from '../../context/ContactBookProvider';
import { FormControl, Input, InputLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './AddContact.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '250px',
      minHeight: '200px',
    },
  },
  contactItem: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  contactItemForm: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
  },
}));

const AddContact = () => {
  const classes = useStyles();

  const { addContact } = useContext(contactBookContext);

  let [name, setName] = useState('');

  let [lastName, setLastName] = useState('');

  let [phone, setPhone] = useState('');

  let [adress, setAdress] = useState('');

  let [email, setEmail] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if (!name || !lastName || !phone || !email || !adress) {
      alert('Заполните все поля');
      return;
    }
    const contact = {
      name: name,
      lastName: lastName,
      phone: phone,
      adress: adress,
      email: email,
    };
    addContact(contact);
    setName('');
    setLastName('');
    setPhone('');
    setAdress('');
    setEmail('');
  }

  return (
    <Box className={classes.root}>
      <Paper elevation={2} className={classes.contactItem}>
        <Typography variant="body1">CONTACT BOOK</Typography>
        <form noValidate autoComplete="off" className={classes.contactItemForm}>
          <FormControl>
            <InputLabel htmlFor="name">Имя</InputLabel>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="lastname">Фамилия</InputLabel>
            <Input
              type="text"
              id="lastname"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phone">Телефон</InputLabel>
            <Input
              type="text"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="adress">Адрес проживания</InputLabel>
            <Input
              type="text"
              id="adress"
              value={adress}
              onChange={(event) => setAdress(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Почта</InputLabel>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <Button
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={(e) => handleClick(e)}
          >
            Add contact
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddContact;
