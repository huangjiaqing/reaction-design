import React from 'react';
import { Layout, Icon, Popover, Avatar, Badge } from 'antd';
import { MindMap } from 'components';
import Content from './Content';
import styles from './IndexPage.css';

const ChangeTab = () => {

  return (
    <div>
      <p>前端</p>
      <p>编程</p>
    </div>
  );
};

export default class IndexPage extends React.Component {

  state = {}

  render() {

    return (
      <Layout className={styles.main}>
        <Layout.Header className={styles.header}>
          <section style={{ flex: 1 }}>
            <Popover placement="bottomLeft" title="前端" content={<MindMap />} trigger="click">
               <Icon type="global" className={styles.icon + " pointer"} />
            </Popover>
          </section>
          <section>
            <Popover
              placement="bottomLeft"
              title="我的知识库"
              content={<ChangeTab />}
              trigger="click"
            >
              <Icon type="swap" className={styles.icon + " pointer"} style={{ marginLeft: '2rem' }} />
            </Popover>
            <Badge count={0}>
              <Icon type="bell" className={styles.icon + " pointer"} style={{ marginLeft: '2rem' }} />
            </Badge>
          </section>
          <section style={{ marginLeft: '2.4rem' }} className="pointer">
            <Avatar size="small" src="https://striker.teambition.net/thumbnail/110w549744d436e4ce5eb5fd2b938d90e33a/w/200/h/200" className="pointer" />
          </section>
        </Layout.Header>
        <Layout style={{ backgroundColor: '#fff' }}>
          <Layout className={styles.content}>
            <Content />
          </Layout>
        </Layout>
      </Layout>
    );
  }
};
