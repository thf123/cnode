import React from 'react'
import { Card, List, Avatar } from 'antd'
export default function Replies(props) {
  const { data, reply_count } = props
  return (
    <Card
      title={`共有${reply_count}条回复数据`}
    >
      <List
        dataSource={data}
        itemLayout="vertical"
        renderItem={item => (
          <List.Item
            key={item.id}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              description={item.author.loginname}
            />
            <div dangerouslySetInnerHTML={
              { __html: item.content }
            }></div>
          </List.Item>
        )}
      />
    </Card>
  )
}
