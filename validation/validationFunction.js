const isValidReqBody = (name) => {
    if(Object.keys(name).length>0) return true
}

const isValidStr = (name) => {
    if (typeof name === null || typeof name === 'undefined') return false
    if (typeof name === 'string' && name.trim().length === 0) return false
    if (typeof name === 'string' && name.trim().length > 0) return true
    
}

const isValidEmail = (name) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(name)) return true
}



module.exports={isValidReqBody,isValidStr,isValidEmail}