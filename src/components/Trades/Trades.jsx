import React from 'react'
import { Table } from 'antd'

const dataSource = [
  {
    key: 1,
    date: '04/19/2019',
    stock: 'IDC',
    shares: 10000,
    avg_buy: 4.1230,
    buy_amount: 41230,
    avg_sell: 5.0000,
    sell_amount: 50000,
    profit_loss: 8770,
    profit_loss_percentage: 10,
    strategy: 'ATH Breakout',
  },
  {
    key: 2,
    date: '05/19/2019',
    stock: 'ATN',
    shares: 10000,
    avg_buy: 4.1230,
    buy_amount: 41230,
    avg_sell: 5.0000,
    sell_amount: 50000,
    profit_loss: 8770,
    profit_loss_percentage: -2,
    strategy: 'MY Breakout',
  },
  {
    key: 3,
    date: '06/19/2019',
    stock: 'SMA',
    shares: 10000,
    avg_buy: 4.1230,
    buy_amount: 41230,
    avg_sell: 5.0000,
    sell_amount: 50000,
    profit_loss: 8770,
    profit_loss_percentage: 24,
    strategy: 'Bounce',
  },
]

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Shares',
    dataIndex: 'shares',
    key: 'shares',
  },
  {
    title: 'Avg. Buy',
    dataIndex: 'avg_buy',
    key: 'avg_buy',
  },
  {
    title: 'Buy Amount',
    dataIndex: 'buy_amount',
    key: 'buy_amount',
  },
  {
    title: 'Avg. Sell',
    dataIndex: 'avg_sell',
    key: 'avg_sell',
  },
  {
    title: 'Sell Amount',
    dataIndex: 'sell_amount',
    key: 'sell_amount',
  },
  {
    title: 'Profit/Loss',
    dataIndex: 'profit_loss',
    key: 'profit_loss',
  },
  {
    title: 'Profit/Loss (%)',
    dataIndex: 'profit_loss_percentage',
    key: 'profit_loss_percentage',
  },
  {
    title: 'Strategy',
    dataIndex: 'strategy',
    key: 'strategy',
  },
]

function Trades() {
  return <Table dataSource={dataSource} columns={columns} pagination={false} />
}

export default Trades
