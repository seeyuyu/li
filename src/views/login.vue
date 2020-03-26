<template>
    <div id="wrapper" class="login-page">
        <div id="login_form" class="form">
            <form class="layui-form" action="">
                <div class="layui-form-item">
                    <input type="text" name="title" id="user_name" required lay-verify="required" placeholder="用户名"
                        autocomplete="off" class="layui-input" v-model="name">
                </div>
                <div class="layui-form-item">
                    <input type="password" name="title" id="password" required lay-verify="required" placeholder="密码"
                        autocomplete="off" class="layui-input" v-model="password">
                </div>
                <div class="areaChooseDiv">
                    <div class="layui-form-item">
                        <select name="area" class="areaSelect" lay-verify="">
                            <option disabled selected style='display:none;'>请选择院区</option>
                            <option value="2" data-text="北京大学第三医院 首都国际机场院区">北京大学第三医院 首都国际机场院区</option>
                            <option value="3" data-text="北京大学第三医院 海淀院区">北京大学第三医院 海淀院区</option>
                        </select>
                    </div>
                    <div class="layui-form-item">
                        <select name="department" class="departmentSelect" lay-verify="">
                            <option value="0" disabled selected style='display:none;'>请选择科室</option>
                            <option value="2">产科</option>
                            <option value="3">妇科</option>
                        </select>
                    </div>
                </div>
                <div class="layui-form-item buttonDiv">
                    <div id="login" class="sureBtn" @click="goin">登录</div>
                </div>
                <div class="chooseInfo fr">
                    <span class="">当前院区科室为&nbsp;&nbsp;&nbsp;</span>
                    <span class="areaChoose" id="areaSelect"></span>&nbsp;&nbsp;<span
                        class="departmentChoose" id="departmentSelect"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="changeInfo">修改</span>
                </div>
            </form>
        </div>
        <div class="popDivBg">
            <div class="popDiv">
                <form class="layui-form" action="">
                    <div class="layui-form-item">
                        <select name="area" class="areaSelect" lay-verify="">
                            <option  value="0" disabled selected style='display:none;'>请选择院区</option>
                            <option value="2">北京大学第三医院 首都国际机场院区</option>
                            <option value="3">北京大学第三医院 海淀院区</option>
                        </select>
                    </div>
                    <div class="layui-form-item">
                        <select name="department" class="departmentSelect" lay-verify="">
                            <option value="0" disabled selected style='display:none;'>请选择科室</option>
                            <!-- <option value="1">请选择科室</option> -->
                            <option value="2">产科</option>
                            <option value="3">妇科</option>
                        </select>
                    </div>
                    <div class="layui-form-item buttonDiv">
                        <div id="chooseSure" class="sureBtn">确定</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      password: '',
      name: ''
    }
  },
  methods: {
    goin () {
      if (this.name === 'a') {
        this.$router.push('/')
      }
    }
  }
}
</script>
    <style scoped>
    .menu-deployment{
        left:0px;
    }
        body {
            /* background: url(../image/teacher_bg1.png) no-repeat center center #fff; */
            background-size: cover;
            background-attachment: fixed;
        }

        .loginDiv {
            width: 300px;
            height: 300px;
            margin: 0 auto;
        }

        .login-page {
            /* width: 360px; */
            padding: 8% 0 0;
            margin: auto;
        }

        .form {
            position: relative;
            z-index: 1;
            background: #FFFFFF;
            /* max-width: 360px; */
            margin: 0 auto 100px;
            padding: 45px;
            text-align: center;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

            box-shadow: 0 14px 40px 0 rgba(0, 0, 0, 0.06);
            border-radius: 8px;
            width: 560px;
            /* height: 250px; */
            padding: 70px 80px 66px 80px;
            /* margin: -200px 0 0 -300px; */
            overflow: hidden;
        }

        .form input {
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
            line-height: 46px;
            height: 46px;
        }

        .form .layui-form-item {
            margin: 0 0 20px;
        }

        .form .buttonDiv {
            margin: 0 0 15px;
        }

        .sureBtn {
            text-align: center;
            text-transform: uppercase;
            outline: 0;
            background: #4CAF50;
            width: 100%;
            border: 0;
            color: #FFFFFF;
            font-size: 16px;
            -webkit-transition: all 0.3 ease;
            transition: all 0.3 ease;
            cursor: pointer;
            margin-top: 30px;
            height: 46px;
            line-height: 46px;
            padding: 0;
            box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
        }

        .sureBtn:hover,
        .sureBtn:active,
        .sureBtn:focus {
            background: #43A047;
        }

        .form .message {
            margin: 15px 0 0;
            color: #b3b3b3;
            font-size: 14px;
        }

        .form .message a {
            color: #4CAF50;
            text-decoration: none;
        }

        .form .register-form {
            display: none;
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 300px;
            margin: 0 auto;
        }

        .container:before,
        .container:after {
            content: "";
            display: block;
            clear: both;
        }

        .container .info {
            margin: 50px auto;
            text-align: center;
        }

        .container .info h1 {
            margin: 0 0 15px;
            padding: 0;
            font-size: 36px;
            font-weight: 300;
            color: #1a1a1a;
        }

        .container .info span {
            color: #4d4d4d;
            font-size: 14px;
        }

        .container .info span a {
            color: #000000;
            text-decoration: none;
        }

        .container .info span .fa {
            color: #EF3B3A;
        }

        .shake_effect {
            -webkit-animation-name: shake;
            animation-name: shake;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
        }

        @-webkit-keyframes shake {

            from,
            to {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }

            10%,
            30%,
            50%,
            70%,
            90% {
                -webkit-transform: translate3d(-10px, 0, 0);
                transform: translate3d(-10px, 0, 0);
            }

            20%,
            40%,
            60%,
            80% {
                -webkit-transform: translate3d(10px, 0, 0);
                transform: translate3d(10px, 0, 0);
            }
        }

        @keyframes shake {

            from,
            to {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }

            10%,
            30%,
            50%,
            70%,
            90% {
                -webkit-transform: translate3d(-10px, 0, 0);
                transform: translate3d(-10px, 0, 0);
            }

            20%,
            40%,
            60%,
            80% {
                -webkit-transform: translate3d(10px, 0, 0);
                transform: translate3d(10px, 0, 0);
            }
        }

        p.center {
            color: #fff;
        }

        .fr {
            float: right;
        }

        .chooseInfo {
            color: #999;
            text-align: left;
            display: none;
        }

        .changeInfo {
            color: #1a73e8;
            text-decoration: underline;
            cursor: pointer;
        }

        /* 弹出层 */
        .popDiv {
            width: 600px;
            height: 400px;
            margin: 0 auto;
            background: #fff;
            padding: 70px 80px;
            position: absolute;
            left: 50%;
            margin-left: -300px;
            top: 50%;
            margin-top: -200px;
            border-radius: 3px;
        }

        .popDiv .layui-form-item {
            margin-bottom: 30px;
        }

        .popDivBg {
            position: fixed;
            top: 0;
            z-index: 10;
            background: rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;
            display: none;
        }

        .popDiv .sureBtn {
            margin-top: 70px;
        }
        .areaChooseDiv{
            display:none;
        }
    </style>
