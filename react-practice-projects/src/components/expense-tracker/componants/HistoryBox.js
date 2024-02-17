import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeTransaction } from './redux/slice/transactionsSlice'
import { AiTwotoneDelete,AiFillEdit } from "react-icons/ai"; 

export const HistoryBox = ({setEditTrasaction}) => {
    const historyRedux = useSelector(state => state.transactions.transactions);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    historyRedux.map((historyLine) => 
                        <History key={historyLine.id}
                            historyLine={historyLine}
                            setEditTrasaction={setEditTrasaction} />
                    )
                }
            </ul>
        </>
    )
}

const History = ({historyLine,setEditTrasaction}) => {
    const dispatch = useDispatch();

    return (
        <>
            <li id={historyLine.id} className={historyLine.isIncome ? "plus" : "minus"}>
                {historyLine.description} 
                <span>
                    {historyLine.isIncome ? "+" : "-"} {useSelector(state => state.transactions.currency)}{historyLine.amount}
                </span>
                <button className="delete-btn" onClick={() => dispatch(removeTransaction(historyLine.id))} ><AiTwotoneDelete /></button>
                <button className="update-btn" onClick={() => setEditTrasaction(historyLine)} ><AiFillEdit /></button>
            </li>
        </>
    );
}