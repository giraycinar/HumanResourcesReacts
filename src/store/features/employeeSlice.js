import employeeUrl from "../../config/EmployeeController";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initEmployeeState={
    employeeList: [],
    employee: "",
    isLoadingAdd: false,
    isLoadingGetAll: false,
};

export const fetchEmployeeEkleme = createAsyncThunk(
    'employee/fetchEmployeeEkleme',
    async (payload)=>{
        try {
         const result = await fetch(employeeUrl.add,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload) // {ad,aciklama,fiyat,resim}
         }).then(data=> data.json()) // string 
         .then(data=>data);

         return result;
        } catch (error) {
            console.log('HATA fetchEmployeeEkleme....: ', error);
        }
    }
);
export const fetchEmployeeGet = createAsyncThunk(
    'employee/fetchEmployeeGet',
    async ()=>{
       const result = await fetch(employeeUrl.getEmployee,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);
export const fetchEmployeeUpdate = createAsyncThunk(
    'employee/fetchEmployeeUpdate',
    async ()=>{
       const result = await fetch(employeeUrl.update,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);
export const fetchEmployeeListele = createAsyncThunk(
    'employee/fetchEmployeeListele',
    async ()=>{
       const result = await fetch(employeeUrl.getAll,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);

const employeeSlice = createSlice({
    name: 'employee',
    initialState: initEmployeeState,
    extraReducers: (build)=>{
        build.addCase(fetchEmployeeEkleme.pending,(state)=>{state.isLoadingAdd=true;});
        build.addCase(fetchEmployeeEkleme.fulfilled,(state,action)=>{
            state.isLoadingAdd=false;
          //  if(action.payload.data){
          //      alert("Ürün Başarı ile eklendi.");
          //  }
        });
        build.addCase(fetchEmployeeEkleme.rejected,(state)=>{state.isLoadingAdd=false;});

        build.addCase(fetchEmployeeUpdate.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchEmployeeUpdate.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
           // if(action.payload.status===200){
            //    state.urunList = action.payload.data;
            //}
        });
        build.addCase(fetchEmployeeUpdate.rejected,(state)=>{state.isLoadingGetAll=false;});

        build.addCase(fetchEmployeeGet.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchEmployeeGet.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
            if(action.payload.status===200){
                state.employee = action.payload.data;
            }
        });
        build.addCase(fetchEmployeeGet.rejected,(state)=>{state.isLoadingGetAll=false;});
         
        build.addCase(fetchEmployeeListele.pending,(state)=>{state.isLoadingGetAll=true;});
        build.addCase(fetchEmployeeListele.fulfilled,(state,action)=>{
            state.isLoadingGetAll=false;
            if(action.payload.status===200){
                state.employeeList = action.payload.data;
            }
        });
        build.addCase(fetchEmployeeListele.rejected,(state)=>{state.isLoadingGetAll=false;});
        
    }
});

export default employeeSlice.reducer;