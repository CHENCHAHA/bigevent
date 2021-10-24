$(function() {
    var flag = 0
    var flag1 = 0
    var flag2 = 0
        //点击登录注册显示不同的表单
    $('#one1').on("click", function() {
        $('#one').addClass("none").removeClass('block')
        $('#tow').addClass('block').removeClass('none')
        $('.inputtext').val('')
    })
    $('#tow1').on('click', function() {
            $('#tow').addClass('none').removeClass('block')
            $('#one').addClass('block').removeClass('none')
        })
        //提交事件触发，完成校验规则
    $('.submit').on('click', function() {
            if ($('.inputtext').val() == '' || $('.inputpassword').val() == '') {
                alert('用户名或密码不能为空')
                return false
            }
            //设置一个flag，当每个input框输入出错，将flag置为0，如果没有出错，则将flag置为1
            else if (flag == 0 || flag1 == 0) {
                alert('请重新输入你的密码或者账号')
                return false
            }
        })
        //为注册按钮绑定事件，验证规则
    $('.submit1').on('click', function() {
        if ($('.inputtext1').val() == '' || $('.inputpassword2').val() == '' || $('.repassword').val() == '') {
            alert('用户名或密码，确认密码不能为空')
            return false
        }
        //设置一个flag，当每个input框输入出错，将flag置为0，如果没有出错，则将flag置为1
        else if (flag == 0 || flag1 == 0 || flag2 == 0) {
            alert('请重新输入你的密码或者账号')
            return false
        }

    })
    $('.inputtext').on('blur', function() {
        FormValidationUser()
    })
    $('.inputtext1').on('blur', function() {
        var vals = $('.inputtext1').val()
        var re = /^[a-zA-Z\s]{6,12}$/
        if (re.test(vals) || vals == '') {
            /* 该输入合法，隐藏提示 */
            $('.text2').hide()
            $('.inputtext1').css('border', '1px solid #666')
            flag = 1
        } else {
            $('.text2').show()
            $('.inputtext1').css('border', '1px solid red')
            flag = 0
        }
    })
    $('.inputpassword').on('blur', function() {
        FormValidationPassword()
    })
    $('.inputpassword2').on('blur', function() {
        var vals = $('.inputpassword2').val()
        var re = /^[a-zA-Z0-9\s]{6,12}$/
        if (re.test(vals) || vals == '') {
            /* 该输入合法，隐藏提示 */
            $('.password3').hide()
            $('.inputpassword2').css('border', '1px solid #666')
            flag1 = 1
        } else {
            $('.password3').show()
            $('.inputpassword2').css('border', '1px solid red')
            flag1 = 0
        }
    })
    $('.repassword').on('blur', function() {
        FormValidationrePassword()
    })

    function FormValidationUser() {
        var vals = $('.inputtext').val()
        var re = /^[a-zA-Z\s]{6,12}$/
        if (re.test(vals) || vals == '') {
            /* 该输入合法，隐藏提示 */
            $('.text1').hide()
            flag = 1
            $('.inputtext').css('border', '1px solid #666')
        } else {
            $('.text1').show()
            $('.inputtext').css('border', '1px solid red')
            flag = 0
        }
    }

    function FormValidationPassword() {
        var vals = $('.inputpassword').val()
        var re = /^[a-zA-Z0-9]{6,12}$/
        if (re.test(vals) || vals == '') {
            /* 该输入合法，隐藏提示 */
            $('.password1').hide()
            $('.inputpassword').css('border', '1px solid #666')
            flag1 = 1
        } else {
            $('.password1').show()
            $('.inputpassword').css('border', '1px solid red')
            flag1 = 0
        }
    }

    function FormValidationrePassword() {
        var vals1 = $('.inputpassword2').val()
        var vals = $('.repassword').val()
        if (vals1 == vals) {
            /* 该输入合法，隐藏提示 */
            $('.password2').hide()
            $('.repassword').css('border', '1px solid #666')
            flag2 = 1
        } else {
            $('.password2').show()
            $('.repassword').css('border', '1px solid red')
            flag2 = 0
        }
    }
    //监听表单注册
    /* $('#form_zhuce').on('submit', function(e) {
        e.preventDefaulet()
        $.post('http://www.liulongbin.top:3006/api/getbooks', { username: $('.inputtext1').val(), password: $('.inputpassword2').val() }, function(res) {
            if (res.status !== 0) {
                return alert('zhuceshibai')
            }
            return alert('chenggong')
        })
    }) */
})