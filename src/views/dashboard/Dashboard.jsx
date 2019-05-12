import React from 'react'
import {
  Card,
  Col,
  Row,
  Typography
} from 'antd'

const { Text, Title } = Typography

const Dashboard = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={16}>
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
              <Col span={13}>
                col-12
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  )
}

export default Dashboard