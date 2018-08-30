import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import { Sider, GlobalHeader } from 'components';

const BasicLayout = ({
  children,
  onShowGlobalChunkMap,
  isOpenGlobalChunkMap,
}) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider />
    <Layout style={{ minHeight: '100vh' }}>
      <GlobalHeader
        compassActived={isOpenGlobalChunkMap}
        onClickCompass={onShowGlobalChunkMap}
      />
      <Layout style={{ position: 'relative' }}>
        {children}
      </Layout>
    </Layout>
  </Layout>
);

const mapStateToProps = state => ({
  isOpenGlobalChunkMap: state.base.isOpenGlobalChunkMap
});

const mapDispatchToProps = dispatch => ({
  onShowGlobalChunkMap() {
    dispatch({
      type: 'base/saveOpenGlobalChunkMap'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
