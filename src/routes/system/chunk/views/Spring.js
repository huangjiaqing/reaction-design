import React, { Component } from 'react';
import { PlainText } from 'components';
import { Card, Icon, List, Button } from 'antd';
import styles from './Spring.less';

class Spring extends Component {

  render() {
    const data = [
      {
        isCreate: true,
      },
      {
        type: 'img',
        src: "https://i.loli.net/2018/08/28/5b8512a31b65b.png"
      },
      {
        type: 'img',
        src: 'https://upfile.asqql.com/2009pasdfasdfic2009s305985-ts/2018-7/201871310504828180.gif'
      },
      {
        type: 'video',
        src: 'http://vali.cp31.ott.cibntv.net/6572E1CC76E4471B40A7F2FB9/03000A01005B7CD073CEAD43727F653609D376-EA0D-4440-B7DD-0EC41ACEEA67.mp4?ccode=0519&duration=121&expire=18000&psid=6b5f521a3c08de33bcb9fd1c8354e309&sp=&ups_client_netip=6e5753a6&ups_ts=1535447475&ups_userid=&utid=K4q4E113E1cCAXgp1Z4uj%2F5j&vid=XMzc4MzA4MjgyMA%3D%3D&vkey=B91bede73e1273d7d05a9eb230c68aedd&s=3defbfbdefbfbd0befbf'
      },
    ];

    return (
      <div className={styles.main}>
        <Card
          title="图解"
          style={{ marginBottom: 24 }}
        >
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              item.isCreate
              ? (
                <List.Item>
                  <Button className={styles.createButton} type="dashed">
                    <Icon type="plus" style={{ fontSize: '24px', color: '#d9d9d9' }} />
                  </Button>
                </List.Item>
              )
              : (
                <List.Item>
                  <Card
                    hoverable
                    className={styles.cardGraph}
                    bodyStyle={{ padding: 0 }}
                    actions={[<Icon type="eye-o" />, <Icon type="star-o" />, <Icon type="edit" />, <Icon type="delete" />]}
                  >
                    <div className={styles.body}>
                      {item.type === 'img' && (
                        <img alt="图解" src={item.src} />
                      )}
                      {item.type === 'video' && (
                        <video controls>
                          <source src={item.src} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  </Card>
                </List.Item>
              )
            )}
          />
        </Card>
        <Card title="描述">
          <PlainText placeholder="请输入描述..." />
        </Card>
      </div>
    );
  }
}

export default Spring;