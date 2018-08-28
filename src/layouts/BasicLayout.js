import React from 'react';
import { Layout } from 'antd';
import { Sider, GlobalHeader } from 'components';

const BasicLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider />
    <Layout style={{ minHeight: '100vh' }}>
      <GlobalHeader />
      {children}
    </Layout>
  </Layout>
);

export default BasicLayout;
