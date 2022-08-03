import styled from "styled-components";
import BGPIC from '@/assets/images/bg-login.jpg'
export const MineWrapper = styled.div`
    /* border-top: 1.44rem solid transparent; */
    border-bottom: 1.44rem solid transparent;
    .userInfo{
        top: 0;
        background-color: #fff;
        -webkit-box-shadow: 0 1px 0.03rem rgb(9 68 108 / 15%);
        box-shadow: 0 1px 0.03rem rgb(9 68 108 / 15%);
        display: block;
        width: 100%;
        margin-bottom: 0.36rem;
    }
    .user-info-content{
        position: relative;
        width: 100%;
        min-height: 3.6rem;
        background-image: url(${BGPIC});
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: cover;
        background-size: cover;
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1.05rem;
            background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.65)));
            background: -webkit-linear-gradient(transparent,rgba(0,0,0,.65));
            background: -o-linear-gradient(transparent,rgba(0,0,0,.65));
            background: linear-gradient(transparent,rgba(0,0,0,.65));
        }
    }
    .user-brief{
        position: absolute;
        font-size: 0;
        bottom: 0.3rem;
        padding-left: 3.06rem;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 0.6rem;
        z-index: 1;
    }
    .user-name{
        font-size: .42rem;
        color: #fff;
        display: inline-block;
        margin-right: 0.26rem;
        vertical-align: middle;
        max-width: 5.5rem;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        min-height: 0.6rem;
        line-height: .6rem;
    }
    .user-sex{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        min-height: 0.6rem;
        line-height: .6rem;
        margin-right: 0.26rem;
        font-size: .36rem;
        color: #7bcdef;
    }
    .user-level{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        min-height: 0.6rem;
        line-height: .6rem;
        font-size: .42rem;
        color: #fff;
        background-color: #fe8e3f;
    }
    .icon{
        color: #fff;
        font-size: .6rem;
        position: absolute;
        right: 0.41rem;
        top: 0;
    }
    .user-face{
        position: absolute;
        width: 2.1rem;
        height: 2.1rem;
        left: 0.36rem;
        bottom: 0.27rem;
        -webkit-transform: translateY(50%);
        -ms-transform: translateY(50%);
        transform: translateY(50%);
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-color: #fff;
        border: 0.06rem solid;
        border-color: #fff;
        overflow: hidden;
        z-index: 1;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: cover;
        background-size: cover;
    }
    .user-pic{
        border: none!important;
        display: block;
        opacity: 1;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .login-hint{
        font-size: .42rem;
        position: relative;
        width: 100%;
        min-height: 2.56rem;
    }
    .user-unique{
        position: relative;
        font-size: 0;
        margin-top: 0.3rem;
        margin-left: 3.06rem;
        width: 7.2rem;
        min-height: 0.42rem;
    }
    .uid{
        display: inline-block;
        margin-right: 0.12rem;
        vertical-align: middle;
        font-size: .39rem;
        background-color: #4fbdea;
        color: #fff;
    }
    .user-uid{
        display: inline-block;
        margin-right: 0.39rem;
        color: #999;
        font-size: .36rem;
        line-height: .42rem;
        vertical-align: middle;
    }
    .btn-user-list{
        position: relative;
        width: 100%;
        font-size: 0;
        height: 0.9rem;
        margin-top: 0.72rem;
        padding-bottom: 0.32rem;
    }
    .user-btn{
        position: relative;
        width: 50%;
        display: inline-block;
        font-size: 0;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        &:first-child{
            border-right: 1px solid;
            border-right-color: #e7e7e7;
        }
    }
    .interset-txt{
        font-size: .33rem;
        color: #999;
        line-height: .9rem;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.3rem;
    }
    .interset-num{
        font-size: .48rem;
        color: #333;
        line-height: .9rem;
        display: inline-block;
        vertical-align: middle;
    }
`