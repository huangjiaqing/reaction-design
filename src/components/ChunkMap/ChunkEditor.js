import React from 'react';
import { Card, Radio, Icon, Button, Row, Col, Input } from 'antd';
// import styles from './ChunkEditor.less';

const ChunkEditor = () => {

  const title = (
    <Row type="flex" align="middle">
      <Col><Input defaultValue="前端" /></Col>
    </Row>
  );

  const extra = (
    <>
    <Radio.Group defaultValue="a" buttonStyle="solid" style={{ marginRight: 12 }}>
      <Radio.Button value="a"><Icon type="edit" /></Radio.Button>
      <Radio.Button value="b" disabled><Icon type="info" /></Radio.Button>
    </Radio.Group>
    <Button type="danger"><Icon type="delete" /></Button>
    </>
  );

  return (
    <Card
      title={title}
      extra={extra}
      bordered={false}
    >

    </Card>
  );
};

export default ChunkEditor;
