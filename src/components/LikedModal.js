import React from 'react'
import { Modal } from 'antd';

import { MovieConsumer } from '../context/MovieContext'

const LikedModal = ({ isLikeModalVisible, setIsLikeModalVisible }) => {

  const handleOk = e => {
    setIsLikeModalVisible(false)
  };

  const handleCancel = e => {
    setIsLikeModalVisible(false)
  };

  return (
    <MovieConsumer>
      {({ state }) => (
      <Modal
        title="Basic Modal"
        visible={isLikeModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {console.log('test', state)}
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>)
      }
    </MovieConsumer>
  )
}

export default LikedModal

