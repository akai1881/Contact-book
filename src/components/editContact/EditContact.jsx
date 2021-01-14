import React, { useContext, useEffect, useState } from 'react';
import { contactBookContext } from '../../context/ContactBookProvider';
import CircularProgress from '@material-ui/core/CircularProgress';
import './editContact.css';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { TextFieldsSharp } from '@material-ui/icons';

const EditContact = () => {
  // const { editContact, saveContact, cancelEdit } = useContext(
  //   contactBookContext
  // );

  // const [editItem, setEditItem] = useState(editContact);

  // useEffect(() => {
  //   setEditItem(editContact);
  // }, [editContact]);

  // function handleValue(e) {
  //   let obj = {
  //     ...editItem,
  //     [e.target.name]: e.target.value,
  //   };

  //   setEditItem(obj);
  // }

  return (
    <>
      <CardActions>
        <Button size="small" color="secondary">
          Cancel
        </Button>
        <Button size="small" color="primary">
          Save
        </Button>
      </CardActions>
    </>
  );
};

/* {editItem !== null ? (
        <>
          <TextField
            label="Name"
            onChange={handleValue}
            defaultValue={editItem.name}
          />
          <TextField
            label="lastname"
            onChange={handleValue}
            defaultValue={editItem.lastName}
          />
          <TextField
            label="phone"
            onChange={handleValue}
            defaultValue={editItem.phone}
          />
          <button onClick={() => cancelEdit()}>Cancel</button>
      <button onClick={() => saveContact(editItem)}>Save</button> */

export default EditContact;
