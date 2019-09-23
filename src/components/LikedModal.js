import React from 'react'
import { Modal, Button } from 'antd';

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
          title="Liked Movies"
          visible={isLikeModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="Ok" onClick={handleOk}>
              Ok
          </Button>,
          ]}
        >
          {state.map((name, index) => <p key={index}>{name}</p>)}
        </Modal>)
      }
    </MovieConsumer>
  )
}

export default LikedModal

