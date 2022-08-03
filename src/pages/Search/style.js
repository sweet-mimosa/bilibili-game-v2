import styled from "styled-components";
import RateGray from '@/assets/images/rate.png';
import RateLight from '@/assets/images/rate-light.png';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: white;
    transform-origin: right bottom;
    /* CSSTransition 过渡类型给children */
    &.fly-enter,&.fly-appear{
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%,0,0);
    }
    &.fly-enter-active,&.fly-apply-active{
        opacity: 1;
        transition: all 0.3s;
        transform: translate3d(0,0,0);
    }
    &.fly-exit{
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    &.fly-exit-active{
        opacity: 0;
        transition: all 0.3s;
        transform: translate3d(100%,0,0);
    }
`

export const ContentWrapper  = styled.div`
    position: absolute;
    top: 2rem;
    bottom: 0;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
`

export const HotList = styled.div`
    width: 100%;
    margin-bottom: 0.36rem;
    .bui-title{
        font-size: .42rem;
        color: #999;
        height: 0.55rem;
        line-height: .55rem;
        position: relative;
        z-index: 2;
        margin: 0; 
        padding: 0 1rem 0 0.36rem;
    }
    .bui-tag-list{
        margin-top: 0.42rem;
        margin-bottom: 0.3rem;
        padding: 0 0.06rem 0 0.36rem;
    }
    .bui-item{
        margin-right: 0.36rem;
        margin-bottom: 0.42rem;
        padding: 0.18rem 0.48rem 0.17rem;
        font-size: .42rem;
        color: #333;
        background-color: #ebeff5;
        border: 0;
        -webkit-border-radius: 1rem;
        border-radius: 1rem;
        max-width: 10.08rem;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        line-height: .55rem;
        margin: 0 0.15rem 0 0;
        display: inline-block;
    }
`

export const HotTag = styled.div`
    width: 100%;
    margin-top: 0.36rem;
    margin-bottom: 0.36rem;
    .bui-title{
        font-size: .42rem;
        color: #999;
        height: 0.55rem;
        line-height: .55rem;
        position: relative;
        z-index: 2;
        margin: 0; 
        padding: 0 1rem 0 0.36rem;
    }
    .bui-tag-list{
        margin-top: 0.42rem;
        margin-bottom: 0.3rem;
        padding: 0 0.06rem 0 0.36rem;
    }
    .bui-item{
        border-radius: 0.12rem;
        padding: 0.18rem 0.27rem 0.17rem;
        margin-right: 0.36rem;
        margin-bottom: 0.42rem;
        padding: 0.18rem 0.48rem 0.17rem;
        font-size: .42rem;
        color: #333;
        background-color: #ebeff5;
        border: 0;
        max-width: 10.08rem;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        line-height: .55rem;
        margin: 0 0.15rem 0 0;
        display: inline-block;
        white-space: nowrap;
    }
`

export const ResultWrapper = styled.div`
    .bui-mod-wrap{
        display: block;
        width: 100%;
        margin-bottom: 0.36rem;
    }
    .card-game{
        padding: 0.36rem 0 0 0.36rem;
        position: relative;
    }
    .game-img{
        width: 2.22rem;
        height: 2.22rem;
        float: left;
        margin-right: 0.3rem;
        margin-left: 0.3rem;
        -webkit-border-radius: 0.48rem;
        border-radius: 0.48rem;
        background-color: #f4f4f4;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: cover;
        background-size: cover;
    }
    .item-pic{
        -webkit-border-radius: 0.48rem;
        border-radius: 0.48rem;
        border: 1px solid;
        border-color: #f4f4f4;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fff;
        animation: fade .36s;
        width: 100%;
        height: 100%;
    }
    .game-info-wrap{
        display: block;
        overflow: hidden;
        position: relative;
        min-height: 2.22rem;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        padding: 0 0.36rem 0.36rem 0;
        border-bottom: 1px solid;
        border-bottom-color: #e7e7e7;
        font-size: 0;
    }
    .game-name{
        font-size: .42rem;
        line-height: .63rem;
        height: 0.63rem;
        margin: 0 0 0.12rem;
        max-width: 6.6rem;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .game-info{
        font-size: .33rem;
        color: #99a2aa;
        line-height: .42rem;
        margin-bottom: 0.12rem;
        height: 0.54rem;
        white-space: normal;
        max-width: 5.5rem;
        display: block;
    }
    .tag-name{
        display: inline-block;
        border: 1px solid;
        border-color: #99a2aa;
        margin-bottom: 0.09rem;
        font-size: .3rem;
        margin-right: 0.12rem;
        -webkit-border-radius: 0.08rem;
        border-radius: 0.08rem;
        line-height: .36rem;
        padding: 0.09rem 0.12rem 0;
        white-space: normal;
    }
    .star-gray{
        text-align: left;
        background-image: ${RateGray};
    }
    .star-light{
        background-image: ${RateLight};
    }
    .rate-star{
        width: 1rem;
        height: 0.39rem;
        display: inline-block;
        vertical-align: top;
        background-repeat: no-repeat;
        -webkit-background-size: auto 0.27rem;
        background-size: auto 0.27rem;
        background-position: 0;
        font-size: 0.3rem;
    }
    .rate-num{
        display: inline-block;
        vertical-align: top;
        height: 0.39rem;
        line-height: .49rem;
        color: #999;
        font-size: .3rem;
        margin-left: 0.15rem;
    }
`