import React from 'react';
import { Layout, Icon, Avatar } from 'antd';
import composeClass from 'classnames';
import styles from './index.less';

const GlobalHeader = () => {

  return (
    <Layout.Header className={styles.header}>
      <section>
        <Icon type="global" className={composeClass(styles.icon, 'pointer')} />
        <div className={styles.btnGroup}>
          <Icon type="bell" className={composeClass(styles.icon, 'pointer')} />
          <Avatar size="small" src="https://striker.teambition.net/thumbnail/110w549744d436e4ce5eb5fd2b938d90e33a/w/200/h/200" className={composeClass(styles.avatar, 'pointer')} />
        </div>
      </section>
    </Layout.Header>
  );
};

export default GlobalHeader;