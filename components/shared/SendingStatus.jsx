import React from 'react';
import PropTypes from 'prop-types';

const SendingStatus = ({ text, error }) => (
  <div style={{ textAlign: 'center' }}>
    <p className={error ? 'sending-status error' : 'sending-status'}>
      {text}
    </p>
  </div>
);

SendingStatus.propTypes = {
  text: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

SendingStatus.defaultProps = {
  error: false,
};

export default SendingStatus;
