import React from 'react';
import BasicLayout from 'layouts';
import Chunk from './chunk';
import { connect } from 'dva';
import { GlobalChunkMap } from 'components';

const System = ({
  isOpenGlobalChunkMap
}) => {

  return (
    <BasicLayout>
      <Chunk />
      <GlobalChunkMap visible={isOpenGlobalChunkMap}/>}
    </BasicLayout>
  );
};

const mapStateToProps = state => ({
  isOpenGlobalChunkMap: state.base.isOpenGlobalChunkMap
});

export default connect(mapStateToProps)(System);