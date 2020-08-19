import React from 'react'
import { NavLink } from "react-router-dom"
import { Row, Col } from "antd"
import RouterList from "./list"
const subMenu = [
  {
    item: "全部",
    path: "/index/all"
  },
  {
    item: "精华",
    path: "/index/good"
  },
  {
    item: "问答",
    path: "/index/ask"
  },
  {
    item: "分享",
    path: "/index/share"
  },
  {
    item: "招聘",
    path: "/index/job"
  },
  {
    item: "测试",
    path: "/index/dev"
  }
]

export default function Index(props) {
  let id = props.match.params.id
  return (
    <div>
      <Row className="mainWrap">
        <Col md={6} xs={24}>
          <nav className="subNav">
            {subMenu.map((item, index) => {
              return <NavLink to={item.path} key={index}>{item.item}</NavLink>
            })}
          </nav>
        </Col>
        <Col md={18} xs={24}>
          <RouterList id={id} />
        </Col>
      </Row>
    </div>
  )
}
