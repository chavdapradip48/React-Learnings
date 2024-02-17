import React, { useState } from 'react'
import "./style.css";
import { Balance } from './componants/Balance';
import { IncomeExpenseBox } from './componants/IncomeExpenseBox';
import { HistoryBox } from './componants/HistoryBox';
import { AddTransaction } from './componants/AddTransaction';
import { Provider } from 'react-redux';
import store from './componants/redux/store/store';

export const ExpenseTracker = () => {

    const [editTrasaction, setEditTrasaction] = useState(null);

    return (
        <Provider store={store}>
            <div id="expense-tracker">
                <h2>Expense Tracker</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12">
                            <Balance />
                            <IncomeExpenseBox />
                            <HistoryBox setEditTrasaction={setEditTrasaction} />
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <AddTransaction editTrasaction={editTrasaction}
                                            setEditTrasaction={setEditTrasaction} />
                        </div>
                    </div>
                </div>

            </div>
        </Provider>
    )
}
