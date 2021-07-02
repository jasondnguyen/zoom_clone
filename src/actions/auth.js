import { useState } from 'react';
import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGN_OUT,
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const signOut = () => async (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
};

// Load User

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user

export const register = ({ name, email, password, avatar }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const s3Config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const s3Res = await axios.post(
      'http://localhost:5000/api/users/s3url',
      {},
      config
    );

    const { url, id } = s3Res.data;

    await axios.put(url, avatar, s3Config);

    const picture = url.split('?')[0];

    const body = JSON.stringify({
      name,
      email,
      password,
      avatar,
      picture,
      id,
    });

    const res = await axios.post(
      'http://localhost:5000/api/users',
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Successfully created account', 'success'));

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login user

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/auth',
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
