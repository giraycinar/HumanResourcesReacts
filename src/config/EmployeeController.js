import restApi from "./RestApis";
const employeeUrl ={
    add: restApi.employeeUrl + '/add',
    getEmployee: restApi.employeeUrl + '/getbyid',
    getAll: restApi.employeeUrl + '/getallbydepartmentid',
    update: restApi.employeeUrl +'/update'
};
export default employeeUrl;