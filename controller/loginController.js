function login(req,res,next){
    let {username,password} = req.body
    let userData = {
        userId:1587777,
        username:username,
        password:password,
        sex:'男'
    }
    res.json({
        code:1001,
        msg:'登录成功',
        data:{
            userData
        }
    })
}
function test(req,res,next){
    // res.json({
    //     code:1001,
    //     msg:'测试成功'
    // })
    res.send('dududu')
}
module.exports = {
    login,
    test
}