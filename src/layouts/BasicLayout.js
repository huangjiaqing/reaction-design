import React from 'react';
import { Layout } from 'antd';
import { Sider } from 'components';

const BasicLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider />
    {children}
  </Layout>
);

export default BasicLayout;
