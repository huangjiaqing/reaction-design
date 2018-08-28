import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import styles from './ChunkBreadCrumb.less';

const ChunkBreadCrumb = () => {

  return (
    <Layout.Header className={styles.header}>
      <Breadcrumb>
        <Breadcrumb.Item>前端</Breadcrumb.Item>
        <Breadcrumb.Item>构建</Breadcrumb.Item>
        <Breadcrumb.Item>Webpack</Breadcrumb.Item>
        <Breadcrumb.Item>entry</Breadcrumb.Item>
      </Breadcrumb>
    </Layout.Header>
  );
};

export default ChunkBreadCrumb;