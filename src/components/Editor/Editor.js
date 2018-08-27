import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'braft-editor';
import 'braft-editor/dist/braft.css';

// 为 antd form getFieldDecorator 提供受控
export default class extends Component {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  render() {
    const { value, onChange } = this.props;
    const editorProps = {
      height: 200,
      contentFormat: 'html',
      initialContent: value,
      onChange: onChange,
      // key: value  // braft-editor 无法受控（initialContent），只能通过每次生成新的组件来给呈现新的值。
    };

    return (
      <div>
        <Editor {...editorProps} />
      </div>
    );
  }
};
