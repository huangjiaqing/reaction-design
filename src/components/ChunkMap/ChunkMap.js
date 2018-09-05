import React, { Component } from 'react';
import { Layout, Tree, Input, Radio, Select, Button, Icon, Row, Col } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import MindMap from '../MindMap';
import ChunkEditor from './ChunkEditor.js';
import styles from './ChunkMap.less';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const Option = Select.Option;

const getTreeNode = (data) => {
  return (
    Array.isArray(data) && data.map(
      node => (
        <TreeNode key={node.id} title={node.name} value={node.id}>
          {Array.isArray(node.children) && getTreeNode(node.children)}
        </TreeNode>
      )
    )
  );
};

class ChunkMap extends Component {
  state = {
    currentMap: 'treeMap', // or mindMap
  }

  static defaultProps = {
    data: [],
  }

  static propTypes = {
    data: PropTypes.array,
  }

  changeMap = (e) => {
    this.setState({
      currentMap: e.target.value
    });
  }

  render() {
    const { currentMap } = this.state;
    const { data, updateCurrentKey, currentKey } = this.props;

    const title = (
      <>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="选择组块"
        optionFilterProp="children"
        defaultValue={'jack'}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="jack">前端</Option>
        <Option value="lucy">后端</Option>
        <Option value="tom">游泳</Option>
      </Select>
      <Button type="dashed" style={{ marginLeft: 12 }}><Icon type="plus" /></Button>
      </>
    );

    const extraControll = (
      <div className={styles.controll}>
        <Radio.Group value={currentMap} onChange={this.changeMap}>
          <Radio.Button value="treeMap">树图</Radio.Button>
          <Radio.Button value="mindMap" disabled>脑图</Radio.Button>
        </Radio.Group>
        <Search placeholder="搜索组块..." className={styles.search}/>
      </div>
    );

    return (
      <Layout className={styles.main}>
        <Row className={styles.header} type="flex" justify="space-between">
          <Col>{title}</Col>
          <Col>{extraControll}</Col>
        </Row>
        {currentMap === 'treeMap' && (
          <section className={styles.map}>
            <div className={styles.left}>
              <Tree
                showLine
                draggable
                onSelect={v => updateCurrentKey(v)}
                defaultExpandAll
                selectedKeys={currentKey}
              >
                {getTreeNode(data)}
              </Tree>
            </div>
            <div className={styles.right}>
              <ChunkEditor />
            </div>
          </section>
        )}
        {currentMap === 'mindMap' && (
          <Row className={styles.map}>
            <MindMap />
          </Row>
        )}
      </Layout>
    );
  }
};

const mapStateToProps = state => ({
  data: state.map.mapData,
  currentKey: state.map.currentKey
});

const mapDispatchToProps = dispatch => ({
  updateCurrentKey(id) {
    dispatch({
      type: 'map/updateCurrentKey',
      payload: id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChunkMap);
