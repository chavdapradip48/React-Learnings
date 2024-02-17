import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from '../slice/transactionsSlice';

export default configureStore({
    reducer:{
        transactions: transactionsReducer
    }
});
