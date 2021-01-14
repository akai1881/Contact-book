import React, { useReducer } from 'react';
import axios from 'axios';

export const contactBookContext = React.createContext();

const INIT_STATE = {
  contacts: [],
  editContact: null,
  isEdit: false,
  detailsContact: null,
  status: true,
};

const API = `http://localhost:8001/contacts`;

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_CONTACTS_DATA':
      return { ...state, contacts: action.payload };

    case 'EDIT_CONTACT_FUNC':
      return {
        ...state,
        editContact: action.payload,
        status: false,
      };

    case 'GET_DETAILS_CONTACT':
      return {
        ...state,
        detailsContact: action.payload,
      };

    case 'GET_BACK':
      return {
        ...state,
        detailsContact: null,
      };

    case 'SAVE_CONTACT':
    case 'CANCEL_EDIT':
      return {
        ...state,
        status: true,
      };

    default:
      return state;
  }
};

const ContactBookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getContactsData = async () => {
    let { data } = await axios(API);
    dispatch({
      type: 'GET_CONTACTS_DATA',
      payload: data,
    });
  };

  const addContact = async (newContact) => {
    await axios.post(API, newContact);

    console.log(newContact);

    getContactsData();
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContactsData();
  };

  const editContactFunc = async (id) => {
    const { data } = await axios(`${API}/${id}`);

    dispatch({
      type: 'EDIT_CONTACT_FUNC',
      payload: data,
    });
  };

  const saveContact = async (newContact) => {
    await axios.patch(`${API}/${newContact.id}`, newContact);

    getContactsData();

    dispatch({
      type: 'SAVE_CONTACT',
    });
  };

  const getBack = (history) => {
    history.push('/');

    dispatch({
      type: 'GET_BACK',
    });
  };

  const getDetailsContact = async (id) => {
    const { data: detailsData } = await axios(`${API}/${id}`);

    dispatch({
      type: 'GET_DETAILS_CONTACT',
      payload: detailsData,
    });
  };

  const cancelEdit = () => {
    dispatch({
      type: 'CANCEL_EDIT',
    });
  };

  return (
    <contactBookContext.Provider
      value={{
        addContact,
        deleteContact,
        editContactFunc,
        saveContact,
        cancelEdit,
        getContactsData,
        getDetailsContact,
        getBack,
        status: state.status,
        detailsContact: state.detailsContact,
        contacts: state.contacts,
        isEdit: state.isEdit,
        editContact: state.editContact,
      }}
    >
      {children}
    </contactBookContext.Provider>
  );
};

export default ContactBookProvider;
