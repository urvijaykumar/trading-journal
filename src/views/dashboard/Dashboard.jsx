import React from 'react'
import { Col, Row } from 'antd'
import PortSummary from './PortSummary'
import TradeTransactions from './TradeTransactions'
import RecentTransactions from './RecentTransactions'

function Dashboard() {
  return (
    <div>
      <Row gutter={16} style={{ marginBottom: 20 }}>
        <Col span={16}>
          <PortSummary/>
        </Col>
        <Col span={8}>
          <TradeTransactions/>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <RecentTransactions/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
