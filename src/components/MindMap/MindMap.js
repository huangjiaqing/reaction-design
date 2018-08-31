import React, { Component } from 'react';
import G6 from '@antv/g6';
import mindMapData from './data.json';
import styles from './MindMap.less'

class MindMap extends Component {

  componentDidMount() {
    // 注册脑图节点
    G6.registerNode('mindNode', {
      anchor: [[0, 0.5], [1, 0.5]]
    });

    // 注册脑图边
    G6.registerEdge('mindEdge', {
      getPath: function getPath(item) {
        var points = item.getPoints();
        var start = points[0];
        var end = points[points.length - 1];
        var hgap = Math.abs(end.x - start.x);
        if (end.x > start.x) {
          return [['M', start.x, start.y], ['C', start.x + hgap / 4, start.y, end.x - hgap / 2, end.y, end.x, end.y]];
        }
        return [['M', start.x, start.y], ['C', start.x - hgap / 4, start.y, end.x + hgap / 2, end.y, end.x, end.y]];
      }
    });

    function drawMindMap(data) {
      var layout = new G6.Layouts.Mindmap({
        direction: 'H', // 方向（LR/RL/H/TB/BT/V）
        getHGap: function getHGap() /* d */ {
          // 横向间距
          return 100;
        },
        getVGap: function getVGap() /* d */ {
          // 竖向间距
          return 10;
        }
      });
      var tree = new G6.Tree({
        id: 'mountNode', // 容器ID
        height: window.innerHeight, // 画布高
        fitView: 'autoZoom', // 自动缩放
        layout: layout
      });
      tree.node({
        label: function label(model) {
          return {
            text: model.name,
            stroke: '#fff',
            lineWidth: 3
          };
        },

        size: 8,
        shape: 'mindNode'
      });
      tree.edge({
        shape: 'mindEdge'
      });
      tree.on('afterchange', function() {
        tree.getNodes().forEach(function(node) {
          var model = node.getModel();
          var label = node.getLabel();
          var keyShape = node.getKeyShape();
          var parent = node.getParent();
          var box = keyShape.getBBox();
          var labelBox = label.getBBox();
          var dx = (box.maxX - box.minX + labelBox.maxX - labelBox.minX) / 2 + 8;
          var dy = (box.maxY - box.minY) / 2 + 8;
          if (parent) {
            var parentModel = parent.getModel();
            if (parentModel.x > model.x) {
              dx = -dx;
            }
            dy = 0;
          } else {
            dx = 0;
          }
          label.translate(dx, dy);
        });
        tree.draw();
      });
      tree.read({
        roots: [data]
      });
    };

    drawMindMap(mindMapData);
  }

  render() {
    return (
      <div id="mountNode" className={styles.mindMap}>

      </div>
    );
  }
}

export default MindMap;