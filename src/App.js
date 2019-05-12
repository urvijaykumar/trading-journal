import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import Dashboard from './views/Dashboard'
import TradeLogs from './views/TradeLogs'

import 'antd/dist/antd.css'

const { Content, Footer } = Layout

const AppLayout = styled(Layout)`
  min-height: 100vh;
`

// const AppSidebar = styled(Sider)`
//   min-height: 100vh;
// `

const AppFooter = styled(Footer)`
  text-align: center;
`

const AppContent = styled(Content)`
  margin: 24px 16px 0;
`

// const menuItems = [
//   { route: '/', text: 'Dashboard', icon: 'line-chart' },
//   { route: 'trade-logs', text: 'Trade Logs', icon: 'database' },
// ]

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Sidebar/>
        <Layout>
          <AppContent>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/trade-logs" component={TradeLogs} />
          </AppContent>
          <AppFooter>©2019 Created by Anton Nocum</AppFooter>
        </Layout>
      </AppLayout>
    </Router>
  )
}

export default App
