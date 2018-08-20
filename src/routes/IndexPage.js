import React from 'react';
import { Layout, Icon, Popover, Tree, Input, Avatar, Badge, Card, Table } from 'antd';
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
        <TreeNode title="基础" key="0-0">
          <TreeNode title="JavaScript" key="0-0-0">
            <TreeNode title="语法" key="0-0-0-0" />
            <TreeNode title="闭包" key="0-0-0-1" />
            <TreeNode title="面向对象" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="构建" key="0-0-1">
            <TreeNode title="Webpack" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="视图" key="0-0-2">
            <TreeNode title="React" key="0-0-2-0" />
            <TreeNode title="MDV" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
};

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
            <div className={styles.contentBody}>
              <div className={styles.contentRow}>
                <Card title={<><Icon type="bulb" /><span style={{ marginLeft: '1rem' }}>涌现</span></>} bordered={false} extra={<span className="pointer"><Icon type="edit" /></span>}>
                  暂无内容
                </Card>
              </div>
              <div className={styles.contentRow}>
                <Card title={<><Icon type="eye" /><span style={{ marginLeft: '1rem' }}>情景</span></>} bordered={false} style={{ padding: 0 }} extra={<><span className="pointer"><Icon type="code-o" /></span><span className="pointer" style={{ marginLeft: '1rem' }}><Icon type="plus-circle" /></span></>}>
                  <Table
                    columns={[
                      {
                        title: '编号',
                        dataIndex: 'id',
                      },
                      {
                        title: '正确率',
                        dataIndex: 'rightPee'
                      },
                      {
                        title: '内容',
                        dataIndex: 'content',
                      },
                      {
                        title: '创建时间',
                        dataIndex: 'createTime'
                      },
                      {
                        title: '创建人',
                        dataIndex: 'creator'
                      },
                      {
                        title: '操作',
                        dataIndex: 'action'
                      }
                    ]}
                  />
                </Card>
              </div>
              <div className={styles.contentRow}>
                <Card title={<><Icon type="file-text" /><span style={{ marginLeft: '1rem' }}>描述</span></>} bordered={false} extra={<><span className="pointer">简化版</span><span className="pointer" style={{ marginLeft: '1rem' }}>详细版</span></>}>
                  暂无内容
                </Card>
              </div>
              <div className={styles.contentRow}>
                <Card title={<><Icon type="filter" /><span style={{ marginLeft: '1rem' }}>原理</span></>} bordered={false}>
                  暂无内容
                </Card>
              </div>
              <div className={styles.contentRow}>
                <Card title={<><Icon type="share-alt" /><span style={{ marginLeft: '1rem' }}>关联</span></>} bordered={false}>
                  暂无内容
                </Card>
              </div>
            </div>
          </Layout>
        </Layout>
      </Layout>
    );
  }
};
