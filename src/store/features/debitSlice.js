import debitUrl from "../../config/DebitController";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initDebitState={
    debitList: [],
    debit : "",
    isLoadingAdd: false,
    isLoadingGetAll: false,
};

export const fetchDebitEkleme = createAsyncThunk(
    'debit/fetchDebitEkleme',
    async (payload)=>{
        try {
         const result = await fetch(debitUrl.add,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload) // {ad,aciklama,fiyat,resim}
         }).then(data=> data.json()) // string 
         .then(data=>data);

         return result;
        } catch (error) {
            console.log('HATA fetchDebitEkleme....: ', error);
        }
    }
);
export const fetchDebitGet = createAsyncThunk(
    'debit/fetchDebitGet',
    async ()=>{
       const result = await fetch(debitUrl.getDebit,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);
export const fetchDebitGetAll = createAsyncThunk(
    'debit/fetchDebitGetAll',
    async ()=>{
       const result = await fetch(debitUrl.getAll,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);
export const fetchDebitGetByEmployeeId = createAsyncThunk(
    'debit/fetchDebitGetByEmployeeId',
    async ()=>{
       const result = await fetch(debitUrl.getAllByEmployeeId,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);

const debitSlice = createSlice({
    name: 'debit',
    initialState: initDebitState,
    extraReducers: (build)=>{
        build.addCase(fetchDebitEkleme.pending,(state)=>{state.isLoadingAdd=true;});
        build.addCase(fetchDebitEkleme.fulfilled,(state,action)=>{
            state.isLoadingAdd=false;
          //  if(action.payload.data){
          //      alert("Ürün Başarı ile eklendi.");
          //  }
        });
        build.addCase(fetchDebitEkleme.rejected,(state)=>{state.isLoadingAdd=false;});

        build.addCase(fetchDebitGetAll.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchDebitGetAll.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
              //if(action.payload.status===200){
                // state.debitList = action.payload.data;
            //}
        });
        build.addCase(fetchDebitGetAll.rejected,(state)=>{state.isLoadingGetAll=false;});

        build.addCase(fetchDebitGet.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchDebitGet.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
            if(action.payload.status===200){
                state.debit = action.payload.data;
            }
        });
        build.addCase(fetchDebitGet.rejected,(state)=>{state.isLoadingGetAll=false;});
         
        build.addCase(fetchDebitGetByEmployeeId.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchDebitGetByEmployeeId.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
            if(action.payload.status===200){
                state.debitList = action.payload.data;
            }
        });
        build.addCase(fetchDebitGetByEmployeeId.rejected,(state)=>{state.isLoadingGetAll=false;});
        
    }
});

export default debitSlice.reducer;