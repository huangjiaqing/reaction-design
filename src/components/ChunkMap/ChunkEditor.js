import React from 'react';
import { Card,  Icon, Button, Input, Select } from 'antd';
import { connect } from 'dva';
import styles from './ChunkEditor.less';

const Option = Select.Option;

const ChunkEditor = ({
  data,
}) => {
  data = data || {};

  const FormMode = ({
    left,
    middle,
    right,
  }) => (
    <section style={{ marginBottom: 24, display: 'flex', alignItems: 'center' }}>
      {left && (
        <span>
          {left}
        </span>
      )}
      {middle && (
        <span style={{ flex: '1' }}>
          {middle}
        </span>
      )}
      {right && (
        <span style={{ paddingLeft: 12 }}>
          {right}
        </span>
      )}
    </section>
  );

  return (
    <>
    <Card
      title="编辑"
      bordered={false}
      className={styles.chunkMap}
    >
      <FormMode
        middle={<Input placeholder="请输入组块名..." defaultValue={data.name} />}
        right={<Button type="primary">修改</Button>}
      />
      <FormMode
        middle={
          <Input.Group compact>
            <Input style={{ width: '70%' }} placeholder="请输入..." />
            <Select defaultValue="Option1" style={{ width: '30%' }}>
              <Option value="Option1">同级（上）</Option>
              <Option value="Option2">同级（下）</Option>
              <Option value="Option3">子级</Option>
            </Select>
          </Input.Group>
        }
        right={<Button type="primary">插入</Button>}
      />
      <FormMode
        middle={<Button block type="danger"><Icon type="delete"/> 删除组块</Button>}
      />
    </Card>
    </>
  );
};

const mapStateToProps = state => ({
  data: state.map.currentNode
});

export default connect(mapStateToProps)(ChunkEditor);
