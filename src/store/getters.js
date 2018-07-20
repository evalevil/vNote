import moment from 'moment'
import _ from 'lodash'
moment.locale('zh-CN')

export const entities = state => {
  return state.entities
}
// 获取更新时间，格式为距离现在的时间差
export const updated = state => entity => {
  return moment(entity.meta.updated).fromNow()
}
// 获取笔记字数
export const words = state => entity => {
  return entity.body.length
}
// 截取笔记内容的 20 个字符作为 header
export const header = state => entity => {
  return _.truncate(entity.body, { length: 20 })
}
