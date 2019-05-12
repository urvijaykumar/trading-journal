import React, { useState } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Layout,
  Menu,
  Icon
} from 'antd';
import Dashboard from './views/dashboard'

import 'antd/dist/antd.css';


const {
  Content, Footer, Sider,
} = Layout;

const AppLayout = styled(Layout)`
  min-height: 100vh;
`

const AppSidebar = styled(Sider)`
  min-height: 100vh;
`

const AppFooter = styled(Footer)`
  text-align: center;
`

const AppContent = styled(Content)`
  margin: 24px 16px 0;
`

const menuItems = [
  { id: 'dashboard', text: 'Dashboard', icon: 'line-chart' },
  { id: 'trade-logs', text: 'Trade Logs', icon: 'database' },
]

const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  function onCollapse(collapsed) {
    setCollapsed(collapsed)
  }

  return (
    <AppLayout>
      <AppSidebar
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {
            menuItems.map(item => (
              <Menu.Item key={item.id}>
                <Icon type={item.icon}/>
                <span>{ item.text }</span>
              </Menu.Item>
            ))
          }
        </Menu>
      </AppSidebar>
      <Layout>
        <AppContent>
          <Router>
            <Route exact path="/" component={Dashboard} />
          </Router>
        </AppContent>
        <AppFooter>
          ©2019 Created by Anton Nocum
        </AppFooter>
      </Layout>
    </AppLayout>
  );
}

export default App;
