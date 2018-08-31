import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Sider.less';
import logo from '../../assets/logo_bule_single.png';

const Sider = () => {

  return (
    <Layout.Sider
      collapsible
      defaultCollapsed
      width={256}
      className={styles.sider}
    >
      <div className={styles.logo} key="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>Reaction Pro</h1>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ border: 'none',  padding: '16px 0', width: '100%' }}
      >
        <Menu.Item key="1">
          <Icon type="user" />
          <span>组块</span>
        </Menu.Item>
        <Menu.Item key="2" disabled>
          <Icon type="desktop" />
          <span>复习</span>
        </Menu.Item>
        <Menu.SubMenu
          key="sub1"
          title={<span><Icon type="pie-chart" /><span>分析</span></span>}
          disabled
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub2"
          title={<span><Icon type="team" /><span>收藏</span></span>}
          disabled
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="9" disabled>
          <Icon type="file" />
          <span>文档</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;