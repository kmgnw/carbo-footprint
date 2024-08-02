export const isLogin = ()=>{
    const token = window.sessionStorage.getItem('token')
    if(token && token !== ''){
        return true
    }else {
        return false
    }
}