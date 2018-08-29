import React, { Component } from 'react';
import CodeMirrorEditor from './CodeMirrorEditor';

export default class App extends Component {

  render() {

    return (
      <div>
        <div>
          <CodeMirrorEditor />
        </div>
      </div>
      
    );
  }
};