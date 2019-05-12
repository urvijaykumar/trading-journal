import React from 'react'
import { Table } from 'antd'

const dataSource = [
  {
    key: 1,
    date: '04/19/2019',
    action: 1,
    amount: 100000,
    fees: 0,
    net: 100000
  },
  {
    key: 2,
    date: '04/20/2019',
    action: 2,
    amount: 10000,
    fees: 10,
    net: 9990
  },
]

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Fees',
    dataIndex: 'fees',
    key: 'fees',
  },
  {
    title: 'Net',
    dataIndex: 'net',
    key: 'net',
  },
]

function BankTransactions() {
  return <Table dataSource={dataSource} columns={columns} pagination={false} />
}

export default BankTransactions
