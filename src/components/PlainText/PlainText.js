import React, { Component } from 'react'
import Plain from 'slate-plain-serializer'
import { Editor } from 'slate-react'

class PlainText extends Component {

  state = {
    value: Plain.deserialize(''),
  }

  render() {
    return (
      <Editor
        placeholder="Enter some plain text..."
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }
}

export default PlainText