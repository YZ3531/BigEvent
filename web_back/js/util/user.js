var user = {
    /**
     * 
     * @param {*} userName 用戶名
     * @param {*} passWord 用戶密碼
     * @param {*} callback 回調函數
     */
    login:function(userName, passWord,callback){
        $.post(URlLIST.user_login,{ user_name: userName, password: passWord },function(res){
            callback(res);
        })
    },
    logout:function(callback){
        $.post(URlLIST.user_logout,function(res){    
            callback(res)
        })
    },
    loginfo:function(callback){
        $.get(URlLIST.user_loginfo,function(res){
            callback(res);
        })
    }
}