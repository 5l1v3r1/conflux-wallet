import React, { Component } from 'react'

import styles from './style.module.scss'
import Images from '@/assets/images/index'
import OperationCode from './operation-code/index'
import OperationDaochu from './operation-daochu/index'
import OperationFuzhi from './operation-fuzhi/index'
import OperationRecord from './operation-record/index'
import MenuList from './menu-list/index'
import { I18NHOC } from '@/utils/tools/react'
import { I18NProps } from '@/i18n/context'
type IProps = I18NProps & {
  closeAction?: () => void
  copied?: () => void
  lockStatus: boolean
  /** 钱包地址 */
  currentAccountAddress: string
  /**privateKey */
  currentAccountPrivateKey: string
}

class SiderContent extends Component<IProps> {
  static defaultProps = { lockStatus: true }

  render() {
    const { lockStatus, currentAccountAddress, currentAccountPrivateKey, I18N } = this.props
    return (
      <>
        <div className={styles.siderMenusWrap}>
          <div className={styles.siderMenusTop}>
            <div className={styles.userInfo}>
              <div className={styles.userPicWrap}>
                <img src={Images.user} alt="" className={styles.userPic} />
              </div>
              <p className={styles.userCode}>{currentAccountAddress}</p>
            </div>
            <div className={styles.operationWrap}>
              <OperationFuzhi
                copied={this.props.copied}
                lockStatus={lockStatus}
                currentAccountAddress={currentAccountAddress}
                I18N={I18N}
              />
              <OperationCode
                lockStatus={lockStatus}
                currentAccountAddress={currentAccountAddress}
                I18N={I18N}
              />
              <OperationDaochu
                lockStatus={lockStatus}
                currentAccountPrivateKey={currentAccountPrivateKey}
                I18N={I18N}
              />
              <OperationRecord
                currentAccountAddress={currentAccountAddress}
                lockStatus={lockStatus}
                I18N={I18N}
              />
            </div>
            <MenuList
              I18N={I18N}
              lockStatus={lockStatus}
              closeAction={() => {
                this.props.closeAction()
              }}
            />
          </div>
          <div className={styles.siderMenusBottom}>
            <p className={styles.official}>
              {lockStatus ? (
                'Conflux'
              ) : (
                <a href="https://www.conflux-chain.org/" target="_blank" rel="noopener noreferrer">
                  {I18N.Layout.SiderMenus.conflux}
                </a>
              )}
            </p>
            <p className={styles.official}>
              {lockStatus ? (
                'Explorer'
              ) : (
                <a href="http://www.confluxscan.io/" target="_blank" rel="noopener noreferrer">
                  {I18N.Layout.SiderMenus.confluxScan}
                </a>
              )}
            </p>
            {/* <p className={styles.official}>Bounty</p> */}
            <p className={styles.copyText}>Copyright © 2020 Conflux. All Rights Reserved</p>
          </div>
        </div>
      </>
    )
  }
}
export default I18NHOC(SiderContent) as any
