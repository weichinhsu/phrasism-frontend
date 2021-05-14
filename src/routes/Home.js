import './App.css';
import React, { useState } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Row, Col, Input, Card, Dropdown, Progress, Divider } from 'antd';

const { Header, Content } = Layout;
const { Search } = Input;


const App = (props) => {
  const [query, setQuery] = useState('');
  const translate = (phrase) => {
    props.dispatch({
      type: 'translation/GET_translation',
      payload: phrase,
    });
    props.dispatch({
      type: 'translation/GET_gtranslation',
      payload: phrase,
    });
  }
  const dropdownClick = (item) => {
    setQuery(item.key)
    translate(item.key)
  }
  const exampledropdown = (
    <Menu onClick={dropdownClick}>
      <Menu.Item key="discuss the issue">discuss the issue</Menu.Item>
      <Menu.Item key="kowtow to their demands">kowtow to their demands</Menu.Item>
    </Menu>
  )
  const linggle_search = (command) => {
    props.dispatch({
      type: 'translation/GET_linggle',
      payload: command,
    });
  }
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: 100, lineHeight: '100px' }}>
        <Row>
          <Col span={4}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" style={{ fontSize: '2vw' }}>Phrasism</Menu.Item>
            </Menu>
          </Col>
          <Col span={20} style={{ alignItems: 'center', display: 'flex' }}>
            <Dropdown overlay={exampledropdown} trigger='click'>
              <Search size="large" placeholder="input search text" allowClear onSearch={translate} onChange={(e) => { setQuery(e.target.value) }} value={query} />
            </Dropdown>
          </Col>
        </Row>


      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', paddingTop: 120, height: '100vh' }}>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col span={12}>
            <Row gutter={[16, 24]}>
              {/* <Col span={24}>
                <Card title="Phrasism" bordered={false} hoverable>
                  {props.translation1 ? props.translation1.tgt.replaceAll(' ', '') : null}
                </Card>
              </Col> */}
              <Col span={24}>
                <Card title="Phrasism 2" bordered={false} hoverable>
                  {props.translation2 ? props.translation2.replaceAll(' ', '') : null}
                </Card>
              </Col>
              <Col span={24}>
                <Card title="Google" bordered={false} hoverable>
                  {props.gt ? props.gt.zh : null}

                </Card>
              </Col>
            </Row>

          </Col>
          <Col span={12}>
            <Card title="Linggle Search" bordered={false} style={{ overflow: 'scroll', height:'80vh' }}>
              <Search placeholder="Linggle search" allowClear onSearch={linggle_search} />
              <Divider>Result</Divider>
              <Row gutter={[16, 24]} style={{ fontSize: 18 }}>
                <Col span={18}><Col>Phrase</Col></Col>
                <Col span={3} className="text-right">%</Col>
                <Col span={3} className="text-right">Count</Col>
              </Row>
              {
                props.linggle ? props.linggle.result.map(e => 
                <Row key={e[0]} gutter={[16, 24]} style={{ marginTop: 10 }} className="linggle-row" onClick={()=>{translate(e[0])}}>
                  <Col span={18}>
                    <Col>{e[0]}</Col>
                    <Col style={{ lineHeight: .5 }}><Progress percent={e[2]} showInfo={false} strokeWidth={5} style={{ lineHeight: .5 }} /></Col>
                  </Col>
                  <Col span={3} className="text-right">{e[2]}%</Col>
                  <Col span={3} className="text-right">{e[1]}</Col>
                </Row>
                ) : null
              }
              {/* <Row gutter={[16, 24]}>
                <Col span={16}>
                  <Col>discuss th issue</Col>
                  <Col style={{ lineHeight: 1 }}><Progress percent={30} showInfo={false} strokeWidth={5} style={{ lineHeight: 1 }} /></Col> */}
              {/* <span style={{fontSize: 20}}>Phrase</span> */}
              {/* <progress id="file" max="100" value="70"> 70% </progress> */}

              {/* </Col>
                <Col span={4}>30%</Col>
                <Col span={4}>12345</Col>
              </Row> */}
            </Card>
          </Col>
        </Row>

      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    translation1: state.translation.translation1 ? state.translation.translation1 : null,
    translation2: state.translation.translation2 ? state.translation.translation2 : null,
    gt: state.translation.gt ? state.translation.gt : null,
    linggle: state.translation.linggle ? state.translation.linggle : null
  }
}

export default connect(mapStateToProps)(App);