/**
 *
 * DeployContractProgress
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Spin } from 'antd';
import styled from 'styled-components';
import TxLink from 'components/TxLink';

const Span = styled.span`
  overflow-wrap: break-word;
`;

// TODO:部署成功后的回调数据如何展示或者交互？

function DeployContractProgress({ deployInProgress, deployError, sendTx, txExplorer }) {
  if (deployInProgress) {
    return (
      <Spin spinning style={{ position: 'static' }} size="large" tip="Sending...">
        <br />
        <br />
      </Spin>
    );
  }
  if (deployError) {
    return <Alert message="Send Error" description={deployError} type="error" />;
  }

  if (sendTx) {
    return (
      <Alert
        message="Send sucessfull"
        description={
          <Span>
            {' '}
            TX: <br /> <TxLink tx={sendTx} explorer={txExplorer} />{' '}
          </Span>
        }
        type="success"
      />
    );
  }

  return null;
}

DeployContractProgress.propTypes = {
  deployInProgress: PropTypes.oneOfType([PropTypes.bool]),
  deployError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  sendTx: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  txExplorer: PropTypes.string,
};

export default DeployContractProgress;