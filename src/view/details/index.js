import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'antd'
import TagTxt from '../../components/tags'
import Replies from './replies'
export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      data: {}
    }
  }
  componentDidMount() {
    axios.get(`https://cnodejs.org/api/v1/topic/${this.state.id}`)
      .then(res => {
        this.setState({
          data: res.data.data
        })
      })
  }
  render() {
    const { data } = this.state;
    const Title = (
      <div>
        <h2>{data.title}</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TagTxt data={data} />
          <span style={{ marginLeft: "5px" }}>发表于：{data.create_at}</span>
        </div>
      </div>
    );
    return (
      <>
        <Card
          title={Title}
        >
          <div dangerouslySetInnerHTML={
            { __html: data.content }
          }></div>
        </Card>
        <Replies data={data.replies} reply_count={data.reply_count}/>
      </>
    )
  }
}
