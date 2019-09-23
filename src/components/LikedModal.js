import React, { useContext } from 'react'
import { Modal, Button } from 'antd';

import MovieContext from '../context/MovieContext'

const LikedModal = ({ isLikeModalVisible, setIsLikeModalVisible }) => {

  const context = useContext(MovieContext)

  const handleOk = e => {
    setIsLikeModalVisible(false)
  };

  const handleCancel = e => {
    setIsLikeModalVisible(false)
  };

  return (
        <Modal
          title="Liked Movies"
          visible={isLikeModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="Ok" onClick={handleOk}>
              Ok
          </Button>
          ]}
        >
          {context.state.map((name, index) => <p key={index}>{name}</p>)}
        </Modal>
  )
}

export default LikedModal

