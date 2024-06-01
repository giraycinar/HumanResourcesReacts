import expenseUrl from "../../config/ExpenseController";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initExpenseState={
    expenseList: [],
    expense : "",
    isLoadingAdd: false,
    isLoadingGetAll: false,
};

export const fetchExpenseEkleme = createAsyncThunk(
    'expense/fetchExpenseEkleme',
    async (payload)=>{
        try {
         const result = await fetch(expenseUrl.add,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload) // {ad,aciklama,fiyat,resim}
         }).then(data=> data.json()) // string 
         .then(data=>data);

         return result;
        } catch (error) {
            console.log('HATA fetchExpenseEkleme....: ', error);
        }
    }
);
export const fetchExpenseGet = createAsyncThunk(
    'expense/fetchExpenseGet',
    async ()=>{
       const result = await fetch(expenseUrl.getExpense,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);
export const fetchExpenseGetAll = createAsyncThunk(
    'expense/fetchExpenseGetAll',
    async ()=>{
       const result = await fetch(expenseUrl.getAll,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);
export const fetchExpenseGetByEmployeeId = createAsyncThunk(
    'expense/fetchExpenseGetByEmployeeId',
    async ()=>{
       const result = await fetch(expenseUrl.getAllByEmployeeId,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initExpenseState,
    extraReducers: (build)=>{
        build.addCase(fetchExpenseEkleme.pending,(state)=>{state.isLoadingAdd=true;});
        build.addCase(fetchExpenseEkleme.fulfilled,(state,action)=>{
            state.isLoadingAdd=false;
          //  if(action.payload.data){
          //      alert("Ürün Başarı ile eklendi.");
          //  }
        });
        build.addCase(fetchExpenseEkleme.rejected,(state)=>{state.isLoadingAdd=false;});

        build.addCase(fetchExpenseGetAll.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchExpenseGetAll.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
              if(action.payload.status===200){
                 state.expenseList = action.payload.data;
            }
        });
        build.addCase(fetchExpenseGetAll.rejected,(state)=>{state.isLoadingGetAll=false;});

        build.addCase(fetchExpenseGet.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchExpenseGet.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
            if(action.payload.status===200){
                state.expense = action.payload.data;
            }
        });
        build.addCase(fetchExpenseGet.rejected,(state)=>{state.isLoadingGetAll=false;});
         
        build.addCase(fetchExpenseGetByEmployeeId.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchExpenseGetByEmployeeId.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
            if(action.payload.status===200){
                state.expenseList = action.payload.data;
            }
        });
        build.addCase(fetchExpenseGetByEmployeeId.rejected,(state)=>{state.isLoadingGetAll=false;});
        
    }
});

export default expenseSlice.reducer;