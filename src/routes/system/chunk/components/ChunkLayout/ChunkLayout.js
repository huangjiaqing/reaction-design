import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import ChunkBreadCrumb from '../ChunkBreadCrumb';

const ChunkLayout = ({ children }) => {

  return (
    <Layout>
      <ChunkBreadCrumb />
      <Layout>
        <Layout.Sider
          // collapsible
          theme="light"
          width={256}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ border: 'none', width: '100%', paddingTop: 20 }}
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span>涌现</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>原理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="pie-chart" />
              <span>情景</span>
            </Menu.Item>
            <Menu.Item key="4" disabled>
              <Icon type="team" />
              <span>组块信息</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout style={{ padding: 24 }}>
          {children}
        </Layout> 
      </Layout>
    </Layout>
  );
};

export default ChunkLayout;