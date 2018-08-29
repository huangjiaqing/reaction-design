import React, { Component } from 'react';
import { Card, Icon, Button, Popconfirm } from 'antd';
import { Markdown } from 'components';
import styles from './Principle.less';

class Principle extends Component {

  state = {
    principles: [
      {
        topClass: 0,
        content: '',
      },
    ],
  }

  onCreate = () => {
    const { principles } = this.state;
    const len = principles.length;

    this.setState({
      priciples: principles.push({
        topClass: len,
        content: ''
      })
    });
  }

  render() {
    const { principles } = this.state;

    const PricipleExtra = (
      <div>
        <Icon type="edit" className="pointer" />
        {principles.length > 1 && (
          <Icon type="delete" className="pointer" style={{ marginLeft: '12px' }} />
        )}
      </div>
    );

    return (
      <div className={styles.main}>
        {principles.map(
          item => (
            <Card
              title={`第${item.topClass}级`}
              extra={PricipleExtra}
              className={styles.principle}
              key={item.topClass}
            >
              {/* 暂无内容 */}
              <Markdown />
            </Card>
          )
        )}
        {principles.length >= 3
        ? (
          <Popconfirm
            title="如果超过2个层级，大脑的计算负担将会大大增加，确定要继续添加层级吗？"
            okText="确定"
            cancelText="取消"
            onConfirm={this.onCreate}
          >
            <Button
              block
              type="dashed"
              className={styles.createBtn}
              key="has-confirm"
            >
              <Icon type="plus" /> 添加层级
            </Button>
          </Popconfirm>
        )
        : (
          <Button
            block
            type="dashed"
            className={styles.createBtn}
            onClick={this.onCreate}
            key="no-confirm"
          >
            <Icon type="plus" /> 添加层级
          </Button>
        )}
      </div>
    );
  }
}

export default Principle;