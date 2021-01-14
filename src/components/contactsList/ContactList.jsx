import React, { useContext, useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import './ContactList.css';
import { contactBookContext } from '../../context/ContactBookProvider';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactList: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const ContactList = () => {
  const {
    contacts,
    deleteContact,
    editContactFunc,
    editContact,
    isEdit,
    getContactsData,
    getDetailsContact,
    status,
    saveContact,
    cancelEdit,
  } = useContext(contactBookContext);

  const [editItem, setEditItem] = useState(editContact);

  const [statusItem, setStatusItem] = useState(status);

  useEffect(() => {
    setEditItem(editContact);
  }, [editContact]);

  useEffect(() => {
    setStatusItem(status);
  }, [status]);

  useEffect(() => {
    getContactsData();
  }, []);

  function handleValue(e) {
    let obj = {
      ...editItem,
      [e.target.name]: e.target.value,
    };

    setEditItem(obj);
  }

  const handleEdit = (id) => {
    editContactFunc(id);
  };

  const handleCancel = () => {
    getContactsData();
    cancelEdit();
  };

  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      {contacts.map((item, index) => (
        <Grid item className="contactsItem" key={'number-' + index}>
          <Paper style={{ width: 282, height: 200 }}>
            {!isEdit || (editItem && editItem.id !== item.id) ? (
              <>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent className={classes.contactList}>
                      <TextField
                        label="Name"
                        name="name"
                        defaultValue={item.name}
                        focused={
                          editItem && editItem.id === item.id
                            ? !statusItem
                            : null
                        }
                        InputProps={{
                          readOnly: statusItem,
                        }}
                        onChange={handleValue}
                      />
                      <TextField
                        label="Lastname"
                        name="lastName"
                        focused={
                          editItem && editItem.id === item.id
                            ? !statusItem
                            : null
                        }
                        defaultValue={item.lastName}
                        InputProps={{
                          readOnly: statusItem,
                        }}
                        onChange={handleValue}
                      />
                      <TextField
                        label="phone"
                        defaultValue={item.phone}
                        name="phone"
                        focused={
                          editItem && editItem.id === item.id
                            ? !statusItem
                            : null
                        }
                        InputProps={{
                          readOnly: statusItem,
                        }}
                        onChange={handleValue}
                      />
                    </CardContent>
                  </CardActionArea>
                  {statusItem || (editItem && editItem.id !== item.id) ? (
                    <CardActions>
                      <Link to="/details">
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => getDetailsContact(item.id)}
                        >
                          Details
                        </Button>
                      </Link>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => deleteContact(item.id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  ) : (
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => saveContact(editItem)}
                      >
                        Save
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </>
            ) : (
              <CircularProgress color="secondary" />
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactList;
