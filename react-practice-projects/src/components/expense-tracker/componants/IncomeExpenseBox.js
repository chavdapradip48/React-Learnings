import React from 'react'
import { useSelector } from 'react-redux';

export const IncomeExpenseBox = () => {

    const reduxState = useSelector(state => state.transactions);
    const finalTotalIncome = reduxState.transactions.reduce((totalIncome, transaction) => totalIncome + (transaction.isIncome ? transaction.amount : 0), 0);
    const finalTotalExpense = reduxState.transactions.reduce((totalIncome, transaction) => totalIncome + (transaction.isIncome ? 0 : transaction.amount), 0);
    
    return (
        <div className="inc-exp-container">
            <IncomeExpense isIncome={true} amount={finalTotalIncome} />
            <IncomeExpense isIncome={false} amount={finalTotalExpense} />
        </div>
    )
}

const IncomeExpense = ({isIncome, amount}) => {
    const typeName = isIncome ?"plus" : "minus";
    return (
        <div>
            <h4>{isIncome ?"Income" : "Expense"}</h4>
            <p id={"money-"+ typeName} 
            className= {"money "+ typeName}>
                {isIncome ?"+" : "-"} {useSelector(state => state.transactions.currency)}{amount}
            </p>
        </div>
    )
}
  
