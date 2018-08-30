import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import { Sider, GlobalHeader } from 'components';

const BasicLayout = ({ children, onShowGlobalChunkMap }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider />
    <Layout style={{ minHeight: '100vh' }}>
      <GlobalHeader onClickCompass={onShowGlobalChunkMap}/>
      <Layout style={{ position: 'relative' }}>
        {children}
      </Layout>
    </Layout>
  </Layout>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onShowGlobalChunkMap() {
    dispatch({
      type: 'base/saveOpenGlobalChunkMap'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
