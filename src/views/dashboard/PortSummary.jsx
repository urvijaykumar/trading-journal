import React from 'react'
import { Card, Col, Row, Typography } from 'antd'
import { Label, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const { Text, Title } = Typography

const portAllocation = [
  {
    name: 'Cash',
    value: 50,
  },
  {
    name: 'IDC',
    value: 30,
  },
  {
    name: 'CHP',
    value: 20,
  },
]

function PortSummary() {
  return (
    <Card>
      <Row>
        <Col span={11}>
          <Text>
            Welcome to
            <Title level={3}>Portfolio</Title>
          </Text>

          <Text>
            Available Cash
            <Title level={4}>PHP 100,000.00</Title>
          </Text>

          <Text>
            Total Equity
            <Title level={4}>PHP 100,000.00</Title>
          </Text>
        </Col>
        <Col xs={24} sm={13}>
          <ResponsiveContainer height={200}>
            <PieChart>
              <Pie
                data={portAllocation}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#389e0d"
              >
                <Label position="center">Port Allocation</Label>
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Card>
  )
}

export default PortSummary