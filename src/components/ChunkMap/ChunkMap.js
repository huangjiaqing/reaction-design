import React, { Component } from 'react';
import { Layout, Tree, Input, Radio, Select, Button, Icon, Row, Col } from 'antd';
import MindMap from '../MindMap';
import styles from './ChunkMap.less';
import treeData from './data.json';
console.log(treeData);

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const Option = Select.Option;

const getTreeNode = (data) => {
  return (
    Array.isArray(data) && data.map(
      node => (
        <TreeNode key={node.name} title={node.name} value={node.name}>
          {Array.isArray(node.children) && getTreeNode(node.children)}
        </TreeNode>
      )
    )
  );
};

export default class ChunkMap extends Component {
  state = {
    currentMap: 'treeMap', // or mindMap
  }

  changeMap = (e) => {
    this.setState({
      currentMap: e.target.value
    });
  }

  render() {
    const { currentMap } = this.state;


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

    const TreeMap = () => (
      <>
      <Tree
        showLine
        draggable
        // defaultExpandAll
        onRightClick={e => { console.log('右击啦：', e) }}
      >
        {getTreeNode(treeData)}
      </Tree>
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
          <seaction className={styles.map}>
            <div className={styles.left}>
              <TreeMap />
            </div>
            <div className={styles.right}>

            </div>
          </seaction>
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
