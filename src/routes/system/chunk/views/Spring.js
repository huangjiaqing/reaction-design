import React, { Component } from 'react';
import { PlainText } from 'components';
import { Card, Upload, message, Icon } from 'antd';
import styles from './Spring.less';

const UploadGraph = () => {

  const defaultProps = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload {...defaultProps}>
      <Icon type="plus" className="pointer" />
    </Upload>
  );
};

class Spring extends Component {

  render() {
    const GraphExtra = (
      <div className={styles.extra}>
        <span><UploadGraph /></span>
        <span><Icon type="edit" className="pointer" /></span>
      </div>
    );

    return (
      <div className={styles.main}>
        <Card
          title="图解"
          style={{ marginBottom: 24}}
          extra={GraphExtra}
        >
          暂无图片
        </Card>
        <Card title="描述">
          <PlainText placeholder="请输入描述..." />
        </Card>
      </div>
    );
  }
}

export default Spring;