import { configureStore } from "@reduxjs/toolkit";
import {
    employeeSlice,
    debitSlice,
    expenseSlice
    
} from './features';

const store = configureStore({
    reducer: {
        employee: employeeSlice,
        debit: debitSlice,
        expense: expenseSlice
    }
});

export default store;