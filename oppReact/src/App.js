import React, { Component } from 'react'


import { Input, Layout, Button, Row, Col } from 'antd';


import Tableme from './Tableme';

import './App.css';

const { TextArea } = Input;
const { Sider, Content } = Layout;



export default class App extends Component {
  render() {
    return (
      <>
        <Layout style={{ height: 100 + "vh" }}>
          <Sider width={500} style={{ backgroundColor: 'white' }} >
            <TextArea
              rows={14}
              style={{
                resize: "none",
                margin: "100px 60px 0px 60px",
                width: "380px",
                fontSize: "22px",
              }} />
            <Button type="primary" shape="round" size={'large'}
              style={{
                margin: "20px 200px",
                width: "100px"
              }}> 解析 </Button>
          </Sider>
          <Layout>
            <Content style={{padding:"4px"}}>
              <Row gutter={[8, 8]}>
                <Col span={12} ><div style={{height:"480px"}}><Tableme/></div></Col>
                <Col span={12} ><div style={{height:"480px"}}><Tableme/></div></Col>

                <Col span={12} ><div style={{height:"480px"}}><Tableme/></div></Col>
                <Col span={12} ><div style={{height:"480px"}}><Tableme/></div></Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </>
    )
  }
}
