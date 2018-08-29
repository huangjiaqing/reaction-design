import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
// import composeClass from 'classnames';

class CodeMirrorEditor extends Component {

  state = {
    isControlled: this.props.value != null
  }

  textarea = null

  editor = null

  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func
  }

  componentDidMount() {
    const isTextArea = this.props.forceTextArea;
    if (!isTextArea) {
      this.editor = CodeMirror.fromTextArea(this.textarea, this.props);
      this.editor.on('change', this.handleChange);
    }
  }

  componentDidUpdate() {
    if (this.editor) {
      if (this.props.value != null) {
        if (this.editor.getValue() !== this.props.value) {
          this.editor.setValue(this.props.value);
        }
      }
    }
  }

  handleChange = () => {
    if (this.editor) {
      const value = this.editor.getValue();
      if (value !== this.props.value) {
        this.props.onChange && this.props.onChange({target: {value: value}});
        if (this.editor.getValue() !== this.props.value) {
          if (this.state.isControlled) {
            this.editor.setValue(this.props.value);
          } else {
            // this.props.value = value;
          }
        }
      }
    }
  }

  render() {
    const {
      style,
      className,
      readOnly,
      defaultValue,
      value,
      onChange,
      textAreaStyle,
      textAreaClassName
    } = this.props;

    return (
      <div style={style} className={className}>
        <textarea
          ref={textarea => this.textarea = textarea}
          readOnly={readOnly}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          style={textAreaStyle}
          className={textAreaClassName}
        />
      </div>
    );
  }
};

const Editor = () => {

  return (
    <form className="editor pure-form">
      <CodeMirrorEditor mode="markdown" theme="monokai" />
    </form>
  )
};

export default Editor;