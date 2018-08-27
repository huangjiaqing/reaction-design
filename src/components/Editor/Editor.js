import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Editor.css';

class Summernote extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
  }

  componentDidMount() {
    const { value } = this.props;

    window.$('#summernote').summernote({
      height: 300,
      minHeight: null,
      maxHeight: null,
      focus: true,
      callbacks: {
        onChange: this.onChangeContent
      },
    });

    // 初始化值
    this.writeContent(value);
  }

  componentWillUnmount() {
    window.$('#summernote').summernote('destroy');
  }

  writeContent(content) {
    window.$('#summernote').summernote('code', content);
  }

  onChangeContent = (content) => {
    this.props.onChange(content);
  };

  render() {
    return (
      <div id="summernote" />
    );
  }
}

export default Summernote;
