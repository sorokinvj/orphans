import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Styled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'PT Sans';
        font-size: 1.6rem;
        line-height: 2.3rem;
        color: gray;
        margin-bottom: 2rem;
    }
`;

const Loading = ({ visible }) => (
  <Styled>
    <Loader
      visible={visible}
      type="Oval"
      color="gray"
      height={70}
      width={70}
    />
  </Styled>
);

Loading.propTypes = {
  visible: PropTypes.bool,
};

Loading.defaultProps = {
  visible: true,
};

export default Loading;
