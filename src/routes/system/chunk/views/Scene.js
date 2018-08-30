import React, { Component } from 'react';
import { Card, Row, Col, Radio, Input, Button, Icon, Table, Dropdown, Menu, Divider } from 'antd';
import { sceneList } from './data';
import styles from './Scene.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;

class Scene extends Component {
 
  columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '复习次数',
      dataIndex: 'reviewCount',
      key: 'reviewCount'
    },
    {
      title: '复习用时',
      dataIndex: 'consumeTime',
      key: 'consumeTime'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render() {
        const menu = (
          <Menu>
            <Menu.Item>
              <a>置顶</a>
            </Menu.Item>
            <Menu.Item>
              <a>编辑</a>
            </Menu.Item>
            <Menu.Item>
              <a>删除</a>
            </Menu.Item>
          </Menu>
        );

        return (
          <>
          <a>复习</a>
          <Divider type="vertical" />
          <Dropdown overlay={menu}>
            <a>
              更多 <Icon type="down" />
            </a>
          </Dropdown>
          </>
        );
      }
    },
  ]

  render() {
    const Info = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue="all">
          <RadioButton value="all">未复习</RadioButton>
          <RadioButton value="progress">已复习</RadioButton>
          <RadioButton value="waiting">全部</RadioButton>
        </RadioGroup>
        <Button.Group style={{ marginLeft: 16 }}>
          <Button><Icon type="code-o" /></Button>
          <Button><Icon type="plus" /></Button>
        </Button.Group>
        <Search className={styles.extraContentSearch} placeholder="请输入标题" onSearch={() => ({})} />
      </div>
    );

    return (
      <div className={styles.main}>
        <Card bordered={false}>
          <Row>
            <Col sm={8} xs={24}>
              <Info title="未复习" value="8个" bordered />
            </Col>
            <Col sm={8} xs={24}>
              <Info title="本周复习的情景数" value="3个" bordered />
            </Col>
            <Col sm={8} xs={24}>
              <Info title="总时间" value="24分钟" />
            </Col>
          </Row>
        </Card>

        <Card
          className={styles.sceneList}
          bordered={false}
          title="情景列表"
          extra={extraContent}
        >
          <Table
            columns={this.columns}
            dataSource={sceneList}
            bordered
          />
        </Card>
      </div>
    );
  }
};

export default Scene;