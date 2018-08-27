import React from 'react';
import { Card, Table, Icon } from 'antd';
import { Editor } from 'components';
import styles from './Content.css';

export default class Content extends React.Component {

  columns = [
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
  ]

  render() {

    return (
      <div className={styles.contentBody}>
        <div className={styles.contentRow}>
          <Card
            title={<><Icon type="bulb" /><span style={{ marginLeft: '1rem' }}>涌现</span></>}
            extra={<span className="pointer"><Icon type="edit" /></span>}
            bodyStyle={{ padding: 0 }}
            bordered={false}
          >
            <Editor />
          </Card>
        </div>
        <div className={styles.contentRow}>
          <Card
            title={<><Icon type="eye" /><span style={{ marginLeft: '1rem' }}>情景</span></>}
            bordered={false}
            bodyStyle={{ padding: 0 }}
            extra={<><span className="pointer"><Icon type="code-o" /></span><span className="pointer" style={{ marginLeft: '1rem' }}><Icon type="plus-circle" /></span></>
          }>
            <Table
              columns={this.columns}
            />
          </Card>
        </div>
        <div className={styles.contentRow}>
          <Card title={<><Icon type="file-text" /><span style={{ marginLeft: '1rem' }}>描述</span></>} bordered={false} extra={<><span className="pointer" style={{ marginLeft: '1rem' }}>详细</span></>}>
            暂无内容
          </Card>
        </div>
        <div className={styles.contentRow}>
          <Card title={<><Icon type="filter" /><span style={{ marginLeft: '1rem' }}>原理</span></>} bordered={false}>
            暂无内容
          </Card>
        </div>
        <div className={styles.contentRow}>
          <Card title={<><Icon type="filter" /><span style={{ marginLeft: '1rem' }}>组块信息</span></>} bordered={false}>
            暂无内容
          </Card>
        </div>
      </div>
    );
  }
}
