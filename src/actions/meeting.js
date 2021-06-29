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

  try {
    const res = await axios.post(
      'http://localhost:5000',
      { identity: identity },
      config
    );
    const room = await connect(res.data.accessToken, {
      name: roomName,
      audio: true,
      video: true,
    });

    dispatch({
      type: JOIN_SUCCESS,
      payload: room,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: JOIN_FAIL,
    });
  }
};

export const returnToLobby = () => {
  dispatch({
    type: LEAVE_ROOM,
  });
};
