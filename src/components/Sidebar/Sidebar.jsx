import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Layout, Menu } from 'antd'
import styled from 'styled-components'

const { Sider } = Layout

const menuItems = [
  { route: '/', text: 'Dashboard', icon: 'line-chart' },
  { route: 'trade-logs', text: 'Trade Logs', icon: 'database' },
]

const AppSidebar = styled(Sider)`
  min-height: 100vh;
`

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  function onCollapse(collapsed) {
    setCollapsed(collapsed)
  }

  return (
    <AppSidebar collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menuItems.map(item => (
          <Menu.Item key={item.route}>
            <Link to={item.route} style={{ color: '#fff' }}>
              <Icon type={item.icon} />
              {item.text}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </AppSidebar>
  )
}

export default Sidebar