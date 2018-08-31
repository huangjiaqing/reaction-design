import React from 'react';
import { Layout, Icon, Avatar, Row, Col, Badge } from 'antd';
import HeaderSearch from '../HeaderSearch';
import composeClass from 'classnames';
import styles from './index.less';

const GlobalHeader = ({
  onClickCompass = () => {},
  compassActived
}) => {

  const compassStyle = compassActived
    ? {
      color: '#1890ff',
      backgroundColor: '#e6f7ff'
    }
    : {
      color: '#8c8c8c',
      backgroundColor: '#fff'
    };

  return (
    <Layout.Header className={styles.header}>
      <Row type="flex" justify="space-between">
        <Col>
          <Icon
            type="compass"
            className={composeClass(styles.icon, styles.iconCompass, 'pointer')}
            onClick={onClickCompass}
            style={compassStyle}
          />
        </Col>
        <Col>
          <div className={styles.right}>
            <HeaderSearch
              placeholder="全文检索..."
              className={styles.action}
              dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
              onSearch={value => {
                console.log('input', value); // eslint-disable-line
              }}
              onPressEnter={value => {
                console.log('enter', value); // eslint-disable-line
              }}
            />
            <span className={styles.action}>
              <Icon type="question-circle-o" className={styles.icon}/>
            </span>
            <span className={styles.action}>
              <Badge count={8} offset={[0, -4]}>
                <Icon type="bell" className={styles.icon}/>
              </Badge>
            </span>
            <span className={styles.action}>
              <Avatar size="small" src="https://striker.teambition.net/thumbnail/110w549744d436e4ce5eb5fd2b938d90e33a/w/200/h/200" />
              <span className={styles.name}>GaKing</span>
            </span>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default GlobalHeader;