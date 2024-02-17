import React from 'react'
import { useSelector } from 'react-redux';

export const Balance = () => {
  const reduxState = useSelector(state => state.transactions);
  const totalBalance = reduxState.transactions.reduce((total, transaction) => total + (transaction.isIncome ? transaction.amount : -transaction.amount), 0);

  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">{ reduxState.currency }{totalBalance}</h1>
    </>
  )
}
