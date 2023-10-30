  function responseData(code=200,message,data){
    return {
        code: code,
        message:message,
        data:data
    }
}

  module.exports = responseData;