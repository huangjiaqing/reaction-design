import React from 'react';
import { Tree, Input } from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const MindMap = () => {

  return (
    <div>
      <Search placeholder="搜索组块" />
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
    </div>
  );
};

export default MindMap;
