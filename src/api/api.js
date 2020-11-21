// 放ajax請求函數  目的：在組件中髮送ajax請求，就像調用函數那麼簡單
import http from "./http"
// 登录
export function login(options) {
    return http.post("/user/login",options);
}
// 获取用户信息
export function getUserInfo() {
    return http.get("/user/info")
}
// 退出
export function logout() {
    return http.get("/user/signout")
}

// 获取部门列表
export function getDepList() {
    return http.get("/department/list")
}
// 添加部门
export function addDep(option) {
    return http.post("/department/add",option)
}
// 根据ID获取部门详情
export function getDepById(id) {
    return http.get("/department/info",{
        params:{
            departmentId:id
        }
    })
}
//编辑部门信息
export function updateDep(option) {
    return http.post("/department/update",option)
}
// 根据ID删除部门
export function removeDeg(id) {
    return http.get("/department/delete?departmentId="+id)
}
// 获取员工列表
export function getUserList(options={departmentId:undefined,search:""}) {
    return http.get("/user/list",{
        params:options
    })
}
// 客户管理
export function getCustomList(options) {
    return http.get("/customer/list",{
        params:options
    })
}
// 添加客户
export function addCustom(options) {
    return http.post("/customer/add",options)
}















