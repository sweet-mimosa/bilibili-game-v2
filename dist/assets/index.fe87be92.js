import{C as E,a as z,s as y,j as e,b as a,r as u,c,R as p,d as C}from"./index.a7398043.js";import{g as A,a as B,S as R,f as F}from"./index.6a190cae.js";import{m as N,w as k}from"./with-default-props.a4a78181.js";const I=r=>({type:E,data:r}),J=()=>r=>{A().then(t=>{r(I(t))})},L=r=>({type:z,data:r}),S=()=>r=>{B().then(t=>r(L(t)))},D=y.div`
    position: sticky;
    overflow-y: scroll;
    z-index: 5000;
    ul{
        background-color:#ffffff;
        width:100%;
        display:flex;
        overflow-x: auto;
        li{
            height:1rem;
            line-height:1rem;
            /* margin:0 39.5px; */
            justify-content: center;
            align-items: center;
            display: flex;
            flex: 1;
            font-size:0.5rem;
            float:left;
            flex-shrink:0;
            margin-bottom:15px;
            /* margin-top:25px; */
            position:relative;
            &.active{
                color: #20aae2;
                font-weight:bold;
            }
            &.active::after{
                content:"";
                display:block;
                width:30%;
                height:3px;
                background-color: #20aae2;
                position:absolute;
                top:100%;
            }
        }
    }
`;function P({gameList:r}){return e(R,{onScroll:F,children:e("div",{className:"bui-container",children:e("div",{className:"bui-tab home-tab-content",children:e("div",{className:"tab-content",children:e("div",{className:"tab-content-item",children:(()=>r.map(i=>e("div",{className:"bui-mod-wrap home-content",children:e("div",{className:"bui-mod-content",children:e("div",{className:"bui-list-topic-index",children:a("div",{className:"today-recommend content-item",children:[e("p",{children:e("img",{src:i.img,className:"feed-bg item-pic"})}),e("div",{className:"tag",children:"\u4ECA\u65E5\u63A8\u8350"}),e("div",{className:"card-info",children:a("div",{className:"game-info",children:[e("img",{src:i.icon,alt:"",className:"game-icon"}),a("span",{className:"name-tag",children:[e("div",{className:"game-name",children:i.title}),e("div",{className:"type-name"}),a("div",{className:"tags",children:[e("span",{className:"tag-name",children:i.tag1}),e("span",{className:"tag-name",children:i.tag2}),e("span",{className:"tag-name",children:i.tag3})]})]}),a("div",{className:"cart-grade",children:[e("span",{className:" icon-start-active fa fa-star"}),e("div",{className:"num",children:i.num})]}),e("div",{className:"game-desc",children:i.desc}),e("div",{className:"game-bz",children:i.bz})]})})]})})})},i.id)))()})})})})})}const Y=y.div`
    .edit-play-game .swiper-container {
        padding: 0 0.36rem;
        margin: 0.42rem 0;
        position: relative;
        overflow: hidden;
        list-style: none;
        z-index: 1;
    }
    .swiper-wrapper{
        transition-duration: 0ms;
        transform: translate3d(0px, 0px, 0px);
        -webkit-transition-timing-function: ease-out;
        -o-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        transition-property: transform,-webkit-transform;
        box-sizing: content-box;
    }
    .swiper-slide {
        position: relative;
        width: 2.22rem;
        height: 2.79rem;
        margin-right: 0.36rem;
        font-size: 0;
        flex-shrink: 0;
    }
    .swiper-slideactive{
        position: relative;
        width: 2.22rem;
        height: 2.79rem;
        margin-left: 0.36rem;
        font-size: 0;
        flex-shrink: 0;
            &::after{
            position: absolute;
            content: "";
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-top-color: #7bcdef;
            border-width: 0.18rem;
            left: 0;
            bottom: -0.18rem;
            width: 0;
            height: 0;
            border-style: solid;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            }
        }
        
    .swiper-slide .item-pic{
        width: 2.22rem;
        height: 2.22rem;
        border-radius: 0.48rem;
        animation: fade .36s;
        box-sizing: border-box;
        overflow: hidden;
        margin-left: 0.45rem;
    }
    .swiper-slideactive .item-pic{
        border: 2px solid;
        border-color: #4fbdea;
        width: 2.22rem;
        height: 2.22rem;
        border-radius: 0.48rem;
        animation: fade .36s;
        box-sizing: border-box;
        overflow: hidden;

    }
    .edit-play-game .bg-shade {
    position: absolute;
    right: 0;
    width: 1.5rem;
    height: 2.22rem;
    background-color: #f4f4f4;
    top: 0;
    z-index: 11;
        &::before{
            position: absolute;
            content: "";
            width: 1.5rem;
            top: 0;
            right: 0;
            height: 2.22rem;
            background: -webkit-linear-gradient(left,hsla(0,0%,96%,.78),#f4f4f4 53%);
            background: -o-linear-gradient(left,hsla(0,0%,96%,.78) 0,#f4f4f4 53%);
            background: linear-gradient(90deg,hsla(0,0%,96%,.78),#f4f4f4 53%);
        }
    }
    .edit-play-game .btn-more {
        position: absolute;
        width: 1.08rem;
        height: 2.22rem;
        background-color: #fff;
        -webkit-box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        -webkit-border-radius: 0.24rem;
        border-radius: 0.24rem;
        top: 0;
        right: 0.15rem;
        text-align: center;
        line-height: 2.1rem;
        z-index: 99;
    }
    .bui-icon {
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: inline-block;
        vertical-align: top;
        color: #20aae2;
        font-size: .6rem;
        padding-top: 0.8rem;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: contain;
        background-size: contain;
    }
`;function T(r,t,i,o){function m(n){return n instanceof i?n:new i(function(l){l(n)})}return new(i||(i=Promise))(function(n,l){function g(d){try{b(o.next(d))}catch(f){l(f)}}function h(d){try{b(o.throw(d))}catch(f){l(f)}}function b(d){d.done?n(d.value):m(d.value).then(g,h)}b((o=o.apply(r,t||[])).next())})}const W="adm-dot-loading",H={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},U={color:"default"},G=u.exports.memo(r=>{var t;const i=N(U,r);return k(i,e("div",{style:{color:(t=H[i.color])!==null&&t!==void 0?t:i.color},className:c("adm-loading",W),children:e("svg",{height:"1em",viewBox:"0 0 100 40",style:{verticalAlign:"-0.125em"},children:e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{transform:"translate(-100.000000, -71.000000)",children:e("g",{transform:"translate(95.000000, 71.000000)",children:e("g",{transform:"translate(5.000000, 0.000000)",children:[0,1,2].map(o=>e("rect",{fill:"currentColor",x:20+o*26,y:"16",width:"8",height:"8",rx:"2",children:e("animate",{attributeName:"y",from:"16",to:"16",dur:"2s",begin:`${o*.2}s`,repeatCount:"indefinite",values:"16; 6; 26; 16; 16",keyTimes:"0; 0.1; 0.3; 0.4; 1"})},o))})})})})})}))});var V=G;function X(r){return!!r&&typeof r=="object"&&typeof r.then=="function"}const s="adm-button",K={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:e(V,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},Q=u.exports.forwardRef((r,t)=>{const i=N(K,r),[o,m]=u.exports.useState(!1),n=u.exports.useRef(null),l=i.loading==="auto"?o:i.loading,g=i.disabled||l;u.exports.useImperativeHandle(t,()=>({get nativeElement(){return n.current}}));const h=b=>T(void 0,void 0,void 0,function*(){if(!i.onClick)return;const d=i.onClick(b);if(X(d))try{m(!0),yield d,m(!1)}catch(f){throw m(!1),f}});return k(i,e("button",{ref:n,type:i.type,onClick:h,className:c(s,i.color?`${s}-${i.color}`:null,{[`${s}-block`]:i.block,[`${s}-disabled`]:g,[`${s}-fill-outline`]:i.fill==="outline",[`${s}-fill-none`]:i.fill==="none",[`${s}-mini`]:i.size==="mini",[`${s}-small`]:i.size==="small",[`${s}-large`]:i.size==="large",[`${s}-loading`]:l},`${s}-shape-${i.shape}`),disabled:g,onMouseDown:i.onMouseDown,onMouseUp:i.onMouseUp,onTouchStart:i.onTouchStart,onTouchEnd:i.onTouchEnd,children:l?a("div",{className:`${s}-loading-wrapper`,children:[i.loadingIcon,i.loadingText]}):i.children}))});var v=Q;const w="adm-card",M=r=>{const t=()=>r.title||r.extra?p.createElement("div",{className:c(`${w}-header`,r.headerClassName),style:r.headerStyle,onClick:r.onHeaderClick},p.createElement("div",{className:`${w}-header-title`},r.title),r.extra):null,i=()=>r.children?p.createElement("div",{className:c(`${w}-body`,r.bodyClassName),style:r.bodyStyle,onClick:r.onBodyClick},r.children):null;return k(r,p.createElement("div",{className:w,onClick:r.onClick},t(),i()))};var x=M;const j=y.div`
    justify-content: center;
    width: 90%;
    border-radius: 0.5rem;
    border: 1px solid gray;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    .content {
        height: 2rem;
        font-size: 0.8rem;
    }

    .footer {
        padding-top: 0.5rem;
        border-top: 1px solid #e5e5e5;
        display: flex;
        justify-content: center;
        font-size: 0.5rem;
        color: #20aae2;
    }

    .customBody {
    color: var(--adm-color-success);
    }
`;function q({tab:r}){return a(j,{children:[r==="1"&&a(x,{title:e("div",{style:{fontWeight:"bolder",fontSize:"0.5rem"},children:"\u65F6\u7A7A\u730E\u4EBA3"}),extra:e(v,{color:"primary",borderRadius:"2rem",onClick:()=>{},children:"\u4E0B\u8F7D"}),style:{borderRadius:"0.5rem"},children:[e("div",{className:"content",children:"\u6682\u65E0\u66F4\u65B0"}),e("div",{className:"footer",onClick:t=>t.stopPropagation(),children:"\u4E86\u89E3\u6E38\u620F\u66F4\u591A\u8BE6\u60C5\u5185\u5BB9"})]}),r==="2"&&a(x,{title:e("div",{style:{fontWeight:"bolder",fontSize:"0.5rem"},children:"\u795E\u89C9\u8005"}),extra:e(v,{color:"primary",borderRadius:"2rem",onClick:()=>{},children:"\u5DF2\u4E0B\u8F7D"}),style:{borderRadius:"0.5rem"},children:[e("div",{className:"content",children:"\u6682\u65E0\u66F4\u65B0"}),e("div",{className:"footer",onClick:t=>t.stopPropagation(),children:"\u4E86\u89E3\u6E38\u620F\u66F4\u591A\u8BE6\u60C5\u5185\u5BB9"})]}),r==="3"&&a(x,{title:e("div",{style:{fontWeight:"bolder",fontSize:"0.5rem"},children:"\u660E\u65E5\u65B9\u821F\uFF1A\u7EC8\u672B\u5730"}),extra:e(v,{color:"primary",borderRadius:"2rem",onClick:()=>{},children:"\u9884\u7EA6"}),style:{borderRadius:"0.5rem"},children:[e("div",{className:"content",children:"\u6682\u65E0\u66F4\u65B0"}),e("div",{className:"footer",onClick:t=>t.stopPropagation(),children:"\u4E86\u89E3\u6E38\u620F\u66F4\u591A\u8BE6\u60C5\u5185\u5BB9"})]}),r==="4"&&a(x,{title:e("div",{style:{fontWeight:"bolder",fontSize:"0.5rem"},children:"\u660E\u65E5\u65B9\u821F"}),extra:e(v,{color:"primary",borderRadius:"2rem",onClick:()=>{},children:"\u4E0B\u8F7D"}),style:{borderRadius:"0.5rem"},children:[e("div",{className:"content",children:"\u6682\u65E0\u66F4\u65B0"}),e("div",{className:"footer",onClick:t=>t.stopPropagation(),children:"\u4E86\u89E3\u6E38\u620F\u66F4\u591A\u8BE6\u60C5\u5185\u5BB9"})]})]})}const O=y.div`
    height: 340px;
    .blg-ai-video-item {
        position: relative;
        max-width: 10.08rem;
        min-height: 8.28rem;
        background-color: #fff;
        -webkit-box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        box-shadow: 0 0.06rem 0.24rem 0 rgb(0 0 0 / 6%);
        -webkit-border-radius: 0.3rem;
        border-radius: 0.3rem;
        margin: 0.48rem auto 0;
    }
    .blg-ai-video-item .img-cover {
        position: relative;
        width: 100%;
        height: 5.67rem;
        overflow: hidden;
    }
    .blg-ai-video-item .img-cover .item-pic {
        -webkit-border-radius: 0.3rem 0.3rem 0 0;
        border-radius: 0.3rem 0.3rem 0 0;
        height: auto;
        border: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .blg-ai-video-item .img-cover .bg-shade {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.8rem;
        background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));
        background: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.6));
        background: -o-linear-gradient(top,transparent 0,rgba(0,0,0,.6) 100%);
        background: linear-gradient(-180deg,transparent,rgba(0,0,0,.6));
    }
    .blg-ai-video-item .img-cover .bg-shade .numbers {
        position: absolute;
        width: 100%;
        height: auto;
        padding: 0 0.45rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        bottom: 0.18rem;
        font-size: 0;
    }
    .blg-ai-video-item .img-cover .bg-shade .numbers .video-time {
        position: relative;
        font-size: .3rem;
        color: #fff;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0.06rem 0.15rem;
        margin-right: 0.36rem;
        background-color: rgba(0,0,0,.36);
        -webkit-border-radius: 0.12rem;
        border-radius: 0.12rem;
        display: inline-block;
        vertical-align: middle;
    }
    .blg-ai-video-item .img-cover .bg-shade .numbers .barrage-num, .blg-ai-video-item .img-cover .bg-shade .numbers .view-num {
        position: relative;
        font-size: .3rem;
        color: #fff;
        line-height: .45rem;
        margin-right: 0.36rem;
        display: inline-block;
        vertical-align: middle;
    }
    .blg-ai-video-item .game-desc {
        position: relative;
        width: 100%;
        min-height: 2.61rem;
        padding: 0.3rem 0.36rem 0.42rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .blg-ai-video-item .game-desc .title {
        font-size: .48rem;
        color: #333;
        line-height: .72rem;
        overflow: hidden;
        max-height: 1.41rem;
    }
    .blg-ai-video-item .game-desc .user-desc {
        position: relative;
        font-size: 0;
        width: 100%;
        height: auto;
        margin-top: 0.09rem;
    }
    .blg-ai-video-item .game-desc .user-desc .user-face {
        position: relative;
        width: 0.9rem;
        height: 0.9rem;
        border: 1px solid;
        border-color: rgba(0,0,0,.1);
        display: inline-block;
        vertical-align: middle;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        margin-right: 0.18rem;
    }
    .blg-ai-video-item .game-desc .user-desc .user-face .verify-type {
        position: absolute;
        display: none;
        bottom: 0;
        right: 0;
        width: 0.3rem;
        height: 0.3rem;
        line-height: .3rem;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        background-color: #fff;
        text-align: center;
    }
    .blg-ai-video-item .game-desc .user-desc .user-face .item-pic {
        -webkit-border-radius: 100%;
        border-radius: 100%;
        border: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .blg-ai-video-item .game-desc .user-desc .desc {
        display: inline-block;
        vertical-align: middle;
    }
    .blg-ai-video-item .game-desc .user-desc .desc .name, .blg-ai-video-item .game-desc .user-desc .desc .time {
        font-size: .36rem;
        color: #999;
        line-height: .54rem;
        max-width: 3.9rem;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .blg-ai-video-item .game-desc .user-desc .game-tag {
        position: absolute;
        font-size: .36rem;
        color: #20aae2;
        line-height: .36rem;
        background-color: #def2fb;
        -webkit-border-radius: 0.36rem;
        border-radius: 0.36rem;
        padding: 0.09rem 0.27rem;
        max-width: 3.6rem;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        top: 0.1rem;
        right: .1rem;
    }
    .blg-ai-video-item .game-desc .user-desc .game-tag .bui-icon {
        vertical-align: middle;
        font-size: .54rem;
        color: #7bcdef;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: inline-block;
        padding-top: 0;
    }
`;var $="./assets/pic.eecd833a.webp",Z="data:image/webp;base64,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";function _({video:r}){return e(O,{children:(()=>r.map(i=>a("div",{className:"blg-ai-video-item",children:[a("div",{className:"img-cover",children:[e("img",{src:$,alt:"",className:"item-pic"}),e("div",{className:"bg-shade",children:a("div",{className:"numbers",children:[e("div",{className:"video-time",children:i.videotime}),e("div",{className:"view-num",children:i.viewnum}),e("div",{className:"barrage-num",children:i.barragenum})]})})]}),a("div",{className:"game-desc",children:[e("div",{className:"title",children:i.title}),a("div",{className:"user-desc",children:[a("span",{className:"user-face",children:[e("img",{src:Z,alt:"",className:"item-pic"}),e("span",{className:"verify-type",children:e("span",{className:"bui-icon"})})]}),a("span",{className:"desc",children:[e("div",{className:"name",children:i.name}),e("div",{className:"time",children:i.time})]}),a("div",{className:"game-tag",children:[e("span",{className:"bui-icon fa fa-chain"}),i.tag]})]})]})]},i.id)))()})}var ee="./assets/icon.311fa55f.webp",ie="./assets/icon1.59098f1f.webp",re="./assets/icon2.dfe36b21.webp",te="./assets/icon3.0f952588.webp";function ae({videoList:r}){const[t,i]=u.exports.useState("1"),o=m=>{i(m)};return a(Y,{children:[a("div",{className:"edit-play-game swiper-container",children:[a("div",{className:"swiper-wrapper",children:[e("div",{className:"swiper-slide"+c({active:t==="1"}),onClick:o.bind(null,"1"),children:e("img",{src:ee,alt:"",className:"item-pic"})}),e("div",{className:"swiper-slide"+c({active:t==="2"}),onClick:o.bind(null,"2"),children:e("img",{src:ie,alt:"",className:"item-pic"})}),e("div",{className:"swiper-slide"+c({active:t==="3"}),onClick:o.bind(null,"3"),children:e("img",{src:re,alt:"",className:"item-pic"})}),e("div",{className:"swiper-slide"+c({active:t==="4"}),onClick:o.bind(null,"4"),children:e("img",{src:te,alt:"",className:"item-pic"})})]}),e("div",{className:"bg-shade"}),e("a",{href:"#",className:"btn-more",children:e("span",{className:"fa fa-plus bui-icon"})})]}),e(q,{tab:t}),e(_,{video:r})]})}const oe=r=>{const{gameList:t,videoList:i}=r,{getGameListDispatch:o,getVideoListDispatch:m}=r,[n,l]=u.exports.useState("\u65B0\u6E38"),g=h=>{l(h)};return u.exports.useEffect(()=>{o(),m()},[]),a(D,{children:[a("ul",{children:[e("li",{}),e("li",{className:c({active:n==="\u65B0\u6E38"}),onClick:g.bind(null,"\u65B0\u6E38"),children:"\u65B0\u6E38"}),e("li",{className:c({active:n==="\u5173\u6CE8"}),onClick:g.bind(null,"\u5173\u6CE8"),children:"\u5173\u6CE8"}),e("li",{})]}),n==="\u65B0\u6E38"&&e(P,{gameList:t}),n==="\u5173\u6CE8"&&e(ae,{videoList:i})]})},ne=r=>({gameList:r.choose.gameList,videoList:r.choose.videoList}),se=r=>({getGameListDispatch(){r(J())},getVideoListDispatch(){r(S())}});var me=C(ne,se)(u.exports.memo(oe));export{me as default};
