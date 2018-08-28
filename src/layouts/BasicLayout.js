import React from 'react';
import { Layout } from 'antd';
import { Sider } from 'components';
import styles from './BasicLayout.css';

const { Header } = Layout;

const BasicLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider />
    <Layout style={{ minHeight: '100vh' }}>
      <Header  className={styles.header}/>
    </Layout>
  </Layout>
);

export default BasicLayout;
