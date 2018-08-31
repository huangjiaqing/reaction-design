import React, { Component } from 'react';
import { Layout, Tree, Input, Radio, Select, Button, Icon, Row, Col } from 'antd';
import MindMap from '../MindMap';
import styles from './ChunkMap.less';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const Option = Select.Option;

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
        <Row className={styles.map}>
          {currentMap === 'treeMap' && <TreeMap />}
          {currentMap === 'mindMap' && <MindMap />}
        </Row>
      </Layout>
    );
  }
};
