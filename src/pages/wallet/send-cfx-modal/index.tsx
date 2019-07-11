import React, { Component } from 'react'
import BaseModal from '../send-base-modal/index'
interface IProps {
  isShow: boolean
  onClose?: () => void
}
class SendCfxModal extends Component<IProps> {
  hideModal() {
    this.props.onClose()
  }
  render() {
    const { isShow } = this.props
    return (
      <>
        <BaseModal
          isShow={isShow}
          unit={'CFX'}
          onClose={() => {
            this.hideModal()
          }}
        />
      </>
    )
  }
}
export default SendCfxModal
