import restApi from "./RestApis";
const expenseUrl ={
    add: restApi.expenseUrl + '/add',
    getExpense: restApi.expenseUrl + '/getbyid',
    getAllByEmployeeId: restApi.expenseUrl + '/getallbyemployeeid',
    getAll: restApi.expenseUrl +'/getAll'
};
export default expenseUrl;