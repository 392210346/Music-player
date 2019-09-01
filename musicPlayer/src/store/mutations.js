/*
 * @Author: 李浩栋
 * @Begin: 2019-07-30 16:42:30
 * @Update: 2019-09-01 21:15:45
 * @Update log: 更新日志
 */
import {
  SHOW_LOGIN,
  HIDE_LOGIN,
  TOGGLE_MODE,
  TOGGLE_MODE_TEXT,
  TO_SUN,
  TO_YUE,
  LOGIN_STATE,
  ACCOUNT_UID,
  SET_LOAD,
  RETURN_LOAD
} from './mutation-types'

// 实现侧边栏显示时底部不跟随滚动
import ModalHelper from 'utils/modalScroll'

export default {
  // 显示左侧侧边栏页面
  [SHOW_LOGIN] (state) {
    state.loginPage = true
    ModalHelper.afterOpen()
  },
  // 隐藏左侧侧边栏页面
  [HIDE_LOGIN] (state) {
    state.loginPage = false
    ModalHelper.beforeClose()
  },
  // 从日间模式切换到夜间模式
  [TO_YUE] (state) {
    console.log('切换到夜间')
    state.iconyueliang1 = false
    state.icontaiyang = true
    this._mutations.TOGGLE_MODE_TEXT[0](state)
  },
  // 从夜间模式切换到日间模式
  [TO_SUN] (state) {
    console.log('切换到日间')
    state.iconyueliang1 = true
    state.icontaiyang = false
    this._mutations.TOGGLE_MODE_TEXT[0](state)
  },
  // 切换夜间 日间模式
  [TOGGLE_MODE] (state) {
    if (state.iconyueliang1) {
      this._mutations.TO_YUE[0](state)
    } else if (state.icontaiyang) {
      this._mutations.TO_SUN[0](state)
    }
  },
  // 切换夜间 日间模式文本
  [TOGGLE_MODE_TEXT] (state) {
    if (state.icontaiyang) {
      state.modeText = '日'
    } else {
      state.modeText = '夜'
    }
  },
  // 设置用户登陆状态
  [LOGIN_STATE] (state) {
    state.loginState = 1
  },
  // 存取用户 uid
  [ACCOUNT_UID] (state, id) {
    state.accountUid = id
  },
  [SET_LOAD] (state) {
    state.load = false
  },
  [RETURN_LOAD] (state) {
    state.load = true
  }
}
