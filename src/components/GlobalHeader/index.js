import React from 'react';
import { Layout, Icon, Avatar } from 'antd';
// import ChunkMap from '../ChunkMap'
import composeClass from 'classnames';
import styles from './index.less';

const GlobalHeader = ({
  onClickCompass = () => {}
}) => {

  return (
    <Layout.Header className={styles.header}>
      <section>
        {/* <ChunkMap> */}
          <Icon type="compass" className={composeClass(styles.icon, 'pointer')} onClick={onClickCompass}/>
        {/* </ChunkMap> */}
        <div className={styles.btnGroup}>
          <Icon type="bell" className={composeClass(styles.icon, 'pointer')} />
          <Avatar size="small" src="https://striker.teambition.net/thumbnail/110w549744d436e4ce5eb5fd2b938d90e33a/w/200/h/200" className={composeClass(styles.avatar, 'pointer')} />
        </div>
      </section>
    </Layout.Header>
  );
};

export default GlobalHeader;