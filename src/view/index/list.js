import React, { Component } from 'react'
import { List, Avatar, Spin } from 'antd'
import { Link } from 'react-router-dom'
import MyTags from '../../components/tags'
import axios from 'axios'
export default class list extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      spin: true
    }
  }
  getData = async (id) => {
    const res = await axios.get(`https://cnodejs.org/api/v1/topics?tab=${id}`)
    this.setState({
      data: res.data.data,
      spin: false
    })
  }
  componentDidMount() {
    this.getData(this.props.id)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.getData(nextProps.id)
    }
  }

  render() {
    const { data, spin } = this.state
    return (
      <Spin spinning={spin}>
        <List itemLayout="horizontal"
          dataSource={data}
          pagination={{
            total: data.length,
            pageSize: 10,
          }}
          renderItem={
            item => (
              <List.Item
                actions={[`回复(${item.reply_count})`, `阅读量(${item.visit_count})`]} >
                <List.Item.Meta
                  avatar={< Avatar src={item.author.avatar_url} />}
                  title={<div><MyTags data={item} />< Link to={`/details/${item.id}`} > {item.title} </Link> </div>}
                  description={< span > < Link to={`/users/${item.author.loginname}`} > {item.author.loginname} </Link>发表于:{item.create_at.split('T')[0]}</span >}
                />
              </List.Item>
            )
          } />
      </Spin>
    )
  }
}