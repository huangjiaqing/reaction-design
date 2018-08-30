import React, { Component } from 'react';
import G6 from '@antv/g6';
import styles from './ChunkMap.less';

export default class ChunkMap extends Component {
  componentDidMount() {
    const data = {
      "nodes": [
        {
          "shape": "customNode",
          "id": "node1",
          "x": 50,
          "y": 100
        },
        {
          "shape": "customNode",
          "id": "node2",
          "x": 250,
          "y": 100
        }
      ],
    };
    
    G6.registerNode('customNode', {
      draw(item){
        const group = item.getGraphicGroup();
        const model = item.getModel();
        group.addShape('text', {
          attrs: {
            x: 0,
            y: 0,
            fill: '#333',
            text: '我是一个自定义节点，\n有下面那个方形和我自己组成'
          }
        });
        group.addShape('text', {
          attrs: {
            x: 0,
            y: 0,
            fill: '#333',
            text: ' ('+model.x+', '+model.y+') \n 原点是组的图坐标',
            textBaseline: 'top'
          }
        });
        group.addShape('circle', {
          attrs: {
            x: 0,
            y: 0,
            r: 4,
            fill: 'blue'
          }
        });
        return group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            stroke: 'red'
          }
        });
      }
    });
    
    const graph = new G6.Graph({
      container: 'mountNode',  // dom 容器 或 容器ID
      width: 500,              // 画布宽
      height: 500,             // 画布高
    });
    graph.read(data);
  }
  
  render() {

    return (
      <div id="mountNode" className={styles.main}>
      </div>
    );
  }
};

// import React from 'react';
// import { Tree, Input, Popover } from 'antd';

// const TreeNode = Tree.TreeNode;
// const Search = Input.Search;

// const ChunkMap = ({ children }) => {
//   const content = (
//     <>
//     <Search placeholder="搜索组块" />
//     <Tree
//       showLine
//       defaultExpandedKeys={['0-0-0']}
//     >
//       <TreeNode title="基础" key="0-0">
//         <TreeNode title="JavaScript" key="0-0-0">
//           <TreeNode title="语法" key="0-0-0-0" />
//           <TreeNode title="闭包" key="0-0-0-1" />
//           <TreeNode title="面向对象" key="0-0-0-2" />
//         </TreeNode>
//         <TreeNode title="构建" key="0-0-1">
//           <TreeNode title="Webpack" key="0-0-1-0" />
//         </TreeNode>
//         <TreeNode title="视图" key="0-0-2">
//           <TreeNode title="React" key="0-0-2-0" />
//           <TreeNode title="MDV" key="0-0-2-1" />
//         </TreeNode>
//       </TreeNode>
//     </Tree>
//     </>
//   );

//   return (
//     <Popover content={content} trigger="click">
//       {children}
//     </Popover>
//   );
// };

// export default ChunkMap;
