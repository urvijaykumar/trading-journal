import React from 'react'
import { Button, Card, Divider, Typography } from 'antd'
import styled from 'styled-components'

const { Text } = Typography

const Container = styled(Card)`
  height: 100%;
`

const HeaderText = styled(Text)`
  display: block;
  margin: 20px 0;
  text-align: center;
`

function TradeTransactions() {
  return (
    <Container>
      <HeaderText strong>Trade Transactions</HeaderText>

      <Button type="primary" block icon="form">
        Enter Trades
      </Button>

      <Divider />

      <Button type="primary" block ghost icon="upload">
        Import Trades
      </Button>
    </Container>
  )
}

export default TradeTransactions
