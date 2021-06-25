import React from 'react';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

const TopAlert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id}>
      <Alert severity={alert.alertType} style={{ maxHeight: '30px' }}>
        {alert.msg}
      </Alert>
    </div>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(TopAlert);
