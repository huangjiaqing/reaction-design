import React, { Component } from 'react';
import G6 from '@antv/g6';
import styles from './ChunkMap.less';

export default class ChunkMap extends Component {
  componentDidMount() {
    // 注册鼠标进入节点变红的行为
    G6.registerBehaviour('mouseEnterFillRed', graph=>{
      graph.behaviourOn('node:mouseenter', ev=>{
        graph.update(ev.item, {
          color: 'red'
        });
      });
    });

    // 注册鼠标进入节点变绿的行为
    G6.registerBehaviour('mouseEnterFillGreen', graph=>{
      graph.behaviourOn('node:mouseenter', ev=>{
        graph.update(ev.item, {
          color: 'green'
        });
      });
    });

    // 注册鼠标移出节点变原色的行为
    G6.registerBehaviour('mouseLeaveResetFill', graph=>{
      graph.behaviourOn('node:mouseleave', ev=>{
        graph.update(ev.item, {
          color: '#2f54eb'
        });
      });
    });
    const data = {
      nodes: [{
        id: '事件',
        x: 80,
        y: 150,
      },{
        id: '行为',
        x: 200,
        y: 150
      },{
        id: '模式',
        x: 320,
        y: 150
      }],
      edges: [{
        source: '事件',
        target: '行为',
        label: '组成'
      },{
        source: '行为',
        target: '模式',
        label: '组成'
      }]
    };
    let mode = 'red';
    const graph = new G6.Graph({
      container: 'mountNode',
      width: 500,
      height: 500,
      modes: {
        red: ['mouseEnterFillRed', 'mouseLeaveResetFill'],
        green: ['mouseEnterFillGreen', 'mouseLeaveResetFill']
      },
      mode,
    });
    graph.node({
      label(model) {
        return model.id;
      }
    });
    graph.edge({
      style() {
        return {
          endArrow: true
        };
      }
    });
    graph.read(data);

    // 点击按钮切换模式
    document.getElementById('changeMode').onclick = () => {
      if(mode === 'red') {
        graph.changeMode('green');
        mode = 'green';
      } else {
        graph.changeMode('red');
        mode = 'red';
      }
    };
  }
  
  render() {

    return (
      <>
      <button id="changeMode">切换模式</button>
      <div id="mountNode" className={styles.main}>
      </div>
      </>
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
