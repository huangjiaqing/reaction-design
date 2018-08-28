import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Sider.less';
import logo from '../../assets/logo_bule_single.png';

const Sider = () => {

  return (
    <Layout.Sider
      collapsible
      theme="light"
      width={256}
      className={styles.sider}
    >
      <div className={styles.logo} key="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>Reaction Pro</h1>
        </Link>
      </div>
      <Menu defaultSelectedKeys={['1']} mode="inline" style={{ border: 'none' }}>
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </Menu.Item>
        <Menu.SubMenu
          key="sub1"
          title={<span><Icon type="user" /><span>User</span></span>}
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub2"
          title={<span><Icon type="team" /><span>Team</span></span>}
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="9">
          <Icon type="file" />
          <span>File</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;