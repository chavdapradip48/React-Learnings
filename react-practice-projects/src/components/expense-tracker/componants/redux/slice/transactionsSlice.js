// transactionsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const DEFAULT_CURRENCY = "₹";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [
      {
        id: nanoid(),
        isIncome: true,
        amount: 100,
        description: "traData.description",
      }
    ],
    currency: DEFAULT_CURRENCY,
  },
  reducers: {
    addTransaction: (state, action) => {
      const traData = action.payload;

      state.transactions.push({
        id: nanoid(),
        isIncome: !traData.isNegetive,
        amount: parseInt(traData.amount),
        description: traData.description,
      });
    }, updateTransaction: (state, action) => {
      const updateData = action.payload;
      const index = state.transactions.findIndex(transaction => transaction.id === updateData.id);

      if (index !== -1) {
        state.transactions[index] = {
          id: updateData.id,
          isIncome: !updateData.isNegetive,
          amount: parseInt(updateData.amount),
          description: updateData.description,
        };
      }
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const { addTransaction, updateTransaction, removeTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;