import restApi from "./RestApis";
const debitUrl ={
    add: restApi.debitUrl + '/add',
    getDebit: restApi.debitUrl + '/getbyid',
    getAllByEmployeeId: restApi.debitUrl + '/getallbyemployeeid',
    getAll: restApi.debitUrl +'/getAll'
};
export default debitUrl;