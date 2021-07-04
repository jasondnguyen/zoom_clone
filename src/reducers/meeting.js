import { JOIN_SUCCESS, JOIN_FAIL, LEAVE_ROOM } from '../actions/types';

const initialState = {
  room: null,
  name: null,
  meetingID: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case JOIN_SUCCESS:
      return {
        ...state,
        room: payload.room,
        name: payload.name,
        meetingID: payload.meetingID,
      };
    case JOIN_FAIL:
      return {
        ...state,
      };
    case LEAVE_ROOM:
      return {
        room: null,
        name: null,
        meetingID: null,
      };
    default:
      return state;
  }
}
