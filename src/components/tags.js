import React from 'react'
import { Tag } from 'antd'
const tab = {
  top: {
    color: 'magenta',
    txt: '置顶'
  },
  good: {
    color: 'cyan',
    txt: '精华'
  },
  ask: {
    color: 'geekblue',
    txt: '问答'
  },
  share: {
    color: 'purple',
    txt: '分享'
  },
  job: {
    color: 'orange',
    txt: '招聘'
  },
  dev: {
    color: 'green',
    txt: '测试'
  }
}

function getTab(data){
  return (
    data.top?
    'top':
      data.good?
      'good':
        data.tab?
        data.tab:'top'
  )
}
export default function Tags(props) {
  let newTab = tab[getTab(props.data)]
  return (
  <Tag color={newTab.color}>{newTab.txt}</Tag>
  )
}
