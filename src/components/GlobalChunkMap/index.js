import React, { Component } from 'react';
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
          <div>
            
          </div>
        )}
      </div>
    );
  }
};