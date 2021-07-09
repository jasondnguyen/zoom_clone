import React, { useEffect, useState, Fragment } from 'react';
import {
  TextField,
  createStyles,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import useChat from './useChat';

const useStyles = makeStyles(() =>
  createStyles({
    chatBox: {
      listStyleType: 'none',
      padding: '0',
    },
    sentMessage: {
      backgroundColor: '#adcef7',
      width: '40%',
      marginTop: '.5em',
      paddingTop: '8px',
      paddingBottom: '8px',
      wordBreak: 'break-word',
      borderRadius: '8px',
    },
    receivedMessage: {
      marginLeft: '60%',
      backgroundColor: '#D7E6F9',
      width: '40%',
      marginTop: '.5em',
      paddingTop: '8px',
      paddingBottom: '8px',
      wordBreak: 'break-word',
      borderRadius: '8px',
    },
    name: {
      marginBottom: '-.5em',
      marginTop: '.5em',
    },
  })
);
const Chatbox = ({ meetingId, room }) => {
  const classes = useStyles();
  const { messages, sendMessage } = useChat(meetingId);
  const [newMessage, setNewMessage] = useState('');
  const name = room.localParticipant.identity;

  const handleMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const sendChatMessage = (e) => {
    e.preventDefault();
    if (newMessage !== '') {
      sendMessage(newMessage, name);
      setNewMessage('');
    }
  };

  return (
    <>
      <div>
        <ol className={classes.chatBox}>
          {messages.map((message, i) =>
            message.ownedByCurrentUser ? (
              <>
                <Typography
                  variant="caption"
                  component="h1"
                  className={classes.name}
                >
                  From {message.body.name}
                </Typography>
                <li key={i} className={classes.sentMessage}>
                  {message.body.message}
                </li>
              </>
            ) : (
              <>
                <Typography
                  variant="caption"
                  component="h1"
                  className={classes.name}
                >
                  From {message.body.name}
                </Typography>
                <li key={i} className={classes.receivedMessage}>
                  {message.body}
                </li>
              </>
            )
          )}
        </ol>
      </div>
      <form onSubmit={(e) => sendChatMessage(e)}>
        <TextField
          value={newMessage}
          onChange={handleMessage}
          placeholder="Type message here..."
          variant="outlined"
          size="large"
          fullWidth
        />
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  meetingId: state.meeting.meetingId,
});

export default connect(mapStateToProps, {})(Chatbox);
