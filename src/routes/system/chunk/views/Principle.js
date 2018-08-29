import React, { Component } from 'react';
import { Card, Icon, Button, Popconfirm } from 'antd';
import produce from 'immer';
import { Editor } from 'components';
import styles from './Principle.less';

class Principle extends Component {

  state = {
    principles: [
      {
        topClass: 0,
        content: '',
        isEditing: false,
      },
    ],
  }

  onOpenEditor = (topClass) => {
    this.setState({
      principles: produce(this.state.principles, principles => {
        principles[topClass].isEditing = true;
      })
    });
  }

  onCloseEditor = (topClass) => {
    this.setState({
      principles: produce(this.state.principles, principles => {
        principles[topClass].isEditing = false;
      })
    });
  }

  onEdit(topClass, content) {
    this.setState({
      principles: produce(this.state.principles, principles => {
        principles[topClass].content = content;
      })
    });
  }

  onDelete = (topClass) => {
    const _ = produce(this.state.principles, (principles) => {
      principles.splice(topClass, 1)
    });

    this.setState({
      principles: _.map((item, key) => {
        let _item = {
          ...item,
          topClass: key
        };

        return _item;
      })
    });
  }

  onCreate = () => {
    const { principles } = this.state;
    const len = principles.length;

    this.setState({
      principles: [
        ...principles,
        {
          topClass: len,
          content: '',
          isEditing: false,
        }
      ]
    })
  }

  render() {
    const { principles } = this.state;

    return (
      <div className={styles.main}>
        {principles.map(
          item => (
            <Card
              title={`第${item.topClass}级`}
              extra={(
                <div>
                  <Icon type="edit" className="pointer" onClick={() => this.onOpenEditor(item.topClass)} />
                  {principles.length > 1 && (
                    <Popconfirm
                      title="确定删除该层级？"
                      okText="确定"
                      cancelText="取消"
                      onConfirm={() => this.onDelete(item.topClass)}
                    >
                      <Icon type="delete" className="pointer" style={{ marginLeft: '12px' }} />
                    </Popconfirm>
                  )}
                </div>
              )}
              className={styles.principle}
              key={item.topClass}
              bodyStyle={item.isEditing ? { padding: 0 } : { overflow: 'auto' }}
            >
              {item.isEditing
              ? (
                <div>
                  <Editor value={item.content} onChange={(v) => this.onEdit(item.topClass, v)}/>
                  <div style={{ textAlign: 'right', padding: 12 }}>
                    <Button type="primary" onClick={() => this.onCloseEditor(item.topClass)}>
                      确定
                    </Button>
                  </div>
                </div>
              )
              : (
                item.content.length
                ? <div dangerouslySetInnerHTML={{ __html: item.content }} />
                : <span style={{ color: '#bfbfbf' }}><Icon type="frown-o" />&nbsp;&nbsp;暂无内容</span>
              )}
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