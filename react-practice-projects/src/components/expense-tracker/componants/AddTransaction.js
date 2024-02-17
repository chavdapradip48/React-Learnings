import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction,updateTransaction } from './redux/slice/transactionsSlice'
import { useEffect } from 'react';

export const AddTransaction = ({editTrasaction, setEditTrasaction}) => {
    const dispatch = useDispatch();
    const transactions = useSelector(state => state.transactions.transactions);

    const [id, setId] = useState(null);
    const [description, setDescription] = useState("");
    const [paymentType, setPaymentType] = useState("Income");
    const [amount, setAmount] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (editTrasaction) {
            setId(editTrasaction.id)
            setDescription(editTrasaction.description);
            setPaymentType(editTrasaction.isIncome ? "Income" : "Expense");
            setAmount(editTrasaction.amount);
            setIsUpdate(true)
        }
    }, [editTrasaction])
    

    function onTransationSubmit(e) {
        e.preventDefault();
        if(description === '') {
            alert("Please fill description in the form");
            return;
        }
        
        if(amount <= 0) {
            alert("Please fill positive amount in the form");
            return;
        }
        
        if(isUpdate) {
            const index = transactions.findIndex(transaction => transaction.id === id);
            if (index !== -1) {
                dispatch(updateTransaction({id: id, amount:amount , 
                    isNegetive:(paymentType === "Income" ? false : true), description:description}));
                setIsUpdate(false);
                setEditTrasaction(null);
            } else {
                alert("Invalid transaction");
            }
        } else {
            dispatch(addTransaction({amount:amount , isNegetive:(paymentType === "Income" ? false : true), description:description}));
        }
        
        setDescription("");
        setPaymentType("Income");
        setAmount(0);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Payment Description</label>
                    <input 
                        type="text" 
                        id="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter text..." 
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Payment Type</label>
                    <div id="income-container" className='payment-type'>
                        <input
                            type="radio"
                            name="payment-type"
                            value="Income"
                            id="income"
                            checked={paymentType === "Income"}
                            onChange={()=> setPaymentType("Income")}
                        />
                        <label htmlFor="income">Income</label>
                    </div>
                    <div id="expense-container" className='payment-type'>
                        <input
                            type="radio"
                            name="payment-type"
                            value="Expense"
                            id="expense"
                            checked={paymentType === "Expense"}
                            onChange={()=> setPaymentType("Expense")}
                        />
                        <label htmlFor="expense">Expense</label>
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="number" 
                        id="amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={onTransationSubmit}>{isUpdate ? "Update" : "Add"} transaction</button>
            </form>
        </>
    )
}
