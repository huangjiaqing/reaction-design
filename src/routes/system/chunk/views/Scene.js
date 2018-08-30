import React, { Component } from 'react';
import { Card, Row, Col, Radio, Input } from 'antd';
import styles from './Scene.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;

class Scene extends Component {

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
        <Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} />
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

        </Card>
      </div>
    );
  }
};

export default Scene;