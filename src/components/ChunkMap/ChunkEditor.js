import React, { Component } from 'react';
import { Card,  Icon, Button, Input, Select } from 'antd';
import { connect } from 'dva';
import styles from './ChunkEditor.less';

const Option = Select.Option;

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

class ChunkEditor extends Component {

  state = {
    chunkName: this.props.data.name || '',
    defaultChunkName: this.props.data.name
  }

  static defaultProps = {
    data: {},
    updateChunkName: () => {},
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { name: chunkName } = nextProps.data;

    if (chunkName !== prevState.defaultChunkName) {
      return {
        chunkName,
        defaultChunkName: chunkName
      };
    }

    return null;
  }

  onChangeChunkName = (e) => {
    this.setState({
      chunkName: e.target.value
    });
  }

  onSaveChunkName = () => {
    const { chunkName } = this.state;
    const { data, updateChunkName } = this.props;

    updateChunkName(
      data.id,
      chunkName
    );
  }

  render() {
    const { chunkName } = this.state;

    return (
      <>
      <Card
        title="编辑"
        bordered={false}
        className={styles.chunkMap}
      >
        <FormMode
          middle={
            <Input
              placeholder="请输入组块名..."
              value={chunkName}
              onChange={this.onChangeChunkName}
            />}
          right={<Button type="primary" onClick={this.onSaveChunkName}>修改</Button>}
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
  }
}

const mapStateToProps = state => ({
  data: state.map.currentNode
});

const mapDispatchToProps = dispatch => ({
  updateChunkName(id, chunkName) {
    dispatch({
      type: 'map/updateChunkName',
      payload: {
        id,
        chunkName
      }
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChunkEditor);
