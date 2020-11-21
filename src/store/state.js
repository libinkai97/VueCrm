let str = localStorage.getItem("crmUserInfo")
let obj = str ? JSON.parse(str) : {}
export default {
    userInfo:obj,
}
