import React from 'react';
import { Layout, Icon, Popover, Tree, Input, Avatar, Badge, Card } from 'antd';
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
            <Badge count={0}>
              <Icon type="bell" className={styles.icon + " pointer"} style={{ marginLeft: '2rem' }} />
            </Badge>
          </section>
          <section style={{ marginLeft: '2.4rem' }} className="pointer">
            <Avatar size="small" src="https://striker.teambition.net/thumbnail/110w549744d436e4ce5eb5fd2b938d90e33a/w/200/h/200" className="pointer" />
          </section>
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <div className={styles.contentBody}>
            <div className={styles.contentRow}>
              <Card title="涌现" bordered={false} extra={<span href="#" className="pointer"><Icon type="edit" /></span>}>
                暂无内容
              </Card>
            </div>
            <div className={styles.contentRow}>
              <Card title="情景" bordered={false} extra={<><span className="pointer"><Icon type="code-o" /></span><span className="pointer" style={{ marginLeft: '1rem' }}><Icon type="plus-circle" /></span></>}>
                暂无内容
              </Card>
            </div>
            <div className={styles.contentRow}>
              <Card title="原理" bordered={false}>
                暂无内容
              </Card>
            </div>
          </div>
        </Layout.Content>
      </Layout>
    );
  }
};
