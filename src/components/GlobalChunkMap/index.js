import React, { Component } from 'react';
import { ChunkMap } from 'components';
import { Layout } from 'antd';
import styles from './index.less';

export default class GlobalChunkMap extends Component {

  render() {
    const { visible } = this.props;
    const defaultStyle = visible
      ? {
        height: '100%',
      }
      : {
        height: 0
      };

    return (
      <div className={styles.globalChunkMap} style={defaultStyle}>
        {visible && (
          <Layout style={{ height: '100%', padding: 24, overflow: 'auto' }}>
            <ChunkMap />
          </Layout>
        )}
      </div>
    );
  }
};