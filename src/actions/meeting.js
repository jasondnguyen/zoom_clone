import axios from 'axios';
import { connect } from 'twilio-video';
import { setAlert } from './alert';
import { JOIN_SUCCESS, JOIN_FAIL, REGISTER_SUCCESS, LEAVE_ROOM } from './types';

export const joinRoom = ({ identity, roomName }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ identity });
  try {
    const res = await axios.post(
      'http://localhost:5000/api/meeting',
      body,
      config
    );

    const room = await connect(res.data.token, {
      name: roomName,
      audio: true,
      video: true,
    });

    dispatch({
      type: JOIN_SUCCESS,
      payload: room,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: JOIN_FAIL,
    });
  }
};

export const returnToLobby = () => (dispatch) => {
  dispatch({
    type: LEAVE_ROOM,
  });
};
