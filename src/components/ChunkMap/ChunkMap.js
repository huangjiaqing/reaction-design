import React, { Component } from 'react';
import { Layout, Tree, Input, Radio, Card, Select, Button, Icon } from 'antd';
import styles from './ChunkMap.less';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const Option = Select.Option;

export default class ChunkMap extends Component {
  componentDidMount() {

  }
  
  render() {
    const title = (
      <>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="选择组块"
        optionFilterProp="children"
        // onChange={handleChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
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

    const treeMap = (
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
        <Radio.Group defaultValue={1}>
          <Radio.Button value={1}>树图</Radio.Button>
          <Radio.Button value={2} disabled>脑图</Radio.Button>
        </Radio.Group>
        <Search placeholder="搜索组块..." className={styles.search}/>
      </div>
    );

    return (
      <Layout className={styles.main}>
        <Card
          className={styles.card}
          title={title}
          extra={extraControll}
          bordered={false}
          bodyStyle={{ padding: 0 }}
        >
          <div className={styles.map}>
            {treeMap}
          </div>
        </Card>
      </Layout>
    );
  }
};
