import React from 'react';
import { Layout, Icon, Popover, Tree, Input, Avatar, Badge } from 'antd';
import styles from './IndexPage.css';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const MindMap = () => {

  return (
    <div>
      <Search placeholder="搜索组块" />
      <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
};

const ChangeTab = () => {

  return (
    <div>
      知识库列表
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
              <Icon type="bars" className={styles.icon + " pointer"} style={{ marginLeft: '2rem' }} />
            </Popover>
            <Badge count={5}>
              <Icon type="bell" className={styles.icon + " pointer"} style={{ marginLeft: '2rem' }} />
            </Badge>
          </section>
          <section style={{ marginLeft: '2.4rem' }} className="pointer">
            <Avatar size="small" src="https://striker.teambition.net/thumbnail/110w549744d436e4ce5eb5fd2b938d90e33a/w/200/h/200" className="pointer" />
          </section>
        </Layout.Header>
      </Layout>
    );
  }
};
