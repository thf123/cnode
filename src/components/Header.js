import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const handleClick = () => {

}
export default function THeader() {
  return (
    <div>
      <Layout.Header>
        <Row>
          <Col md={6} xs={24} className="logo">cNode</Col>
          <Col md={18} xs={0}>
            <Menu onClick={handleClick} mode="horizontal" className="nav">
              <Menu.Item icon={<MailOutlined />}>
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item icon={<AppstoreOutlined />}>
                <Link to="/book">教程</Link>
              </Menu.Item>
              <Menu.Item icon={<SettingOutlined />}>
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    </div>
  )
}
