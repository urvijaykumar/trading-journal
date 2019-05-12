import React from 'react'
import { Card, Tabs } from 'antd'
import Trades from '../../components/Trades'
import BankTransactions from '../../components/BankTransactions'

const { TabPane } = Tabs

const transactionTabs = [
  { name: 'Portfolio', value: 'portfolio', content: Trades },
  { name: 'Bank Transactions', value: 'bank-transactions', content: BankTransactions },
]

function RecentTransactions() {
  return (
    <Card>
      <Tabs defaultActiveKey={transactionTabs[0].value}>
        {
          transactionTabs.map(tab =>
            <TabPane tab={tab.name} key={tab.value}>{ <tab.content/> }</TabPane>
          )
        }
      </Tabs>
    </Card>
  )
}

export default RecentTransactions