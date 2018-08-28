import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Plain from 'slate-plain-serializer';
import { Editor } from 'slate-react';

class PlainText extends Component {

  state = {
    value: Plain.deserialize(''),
  }

  static propTypes = {
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: '请输入文字...'
  }

  onChange = ({ value }) => {
    this.setState({ value });
  }

  render() {
    const { placeholder } = this.props;

    return (
      <Editor
        placeholder={placeholder}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

export default PlainText;