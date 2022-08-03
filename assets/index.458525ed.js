import{f as V,g as I,h as X,s as N,r as g,b as f,j as d,R as E,i as T,_ as L,k as P,d as J,u as B}from"./index.a7398043.js";import{b as Y,c as W,d as F,e as Z,S as z,f as _}from"./index.6a190cae.js";const $=r=>({type:V,data:r}),ee=()=>r=>{Y().then(i=>{r($(i))})},te=r=>({type:I,data:r}),re=()=>r=>{W().then(i=>{r(te(i))})},ne=r=>({type:X,data:r}),ae=()=>r=>{F().then(i=>{r(ne(i))})};function y(r,i){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},y(r,i)}const ie=N.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.3rem;
    width: 100%;
    height: 1.47rem;
    background: white;
    .icon-back{
        font-size: 0.57rem;
        color: #20aae2;
        padding-right: 0.5rem;
        margin-left: 0.17rem;
    }
    .icon-search{
        font-size: 0.57rem;
        color: #20aae2;
        padding-left: 0.25rem;
        margin-right: 0.17rem;
    }
    .box{
        flex: 1;
        line-height: 0.9rem;
        margin: 0 0.25rem;
        background: white;
        color: #20aae2;
        font-size: 0.5rem;
        outline: none;
        border: none;
        border-bottom: #20aae2;
        &::placeholder{
            color: gray;
        }
    }
    .icon-delete{
        font-size: 0.57rem; // 16px?
        color: #20aae2;
        
    }
`,se=r=>{const i=g.exports.useRef(),{newQuery:c}=r,{handleQuery:e,back:a}=r,[t,s]=g.exports.useState("");let n=g.exports.useMemo(()=>Z(e,1e3),[e]);const o=t?{display:"block"}:{display:"none"},l=()=>{s(""),i.current.value=""},u=p=>{let h=p.currentTarget.value;s(h)};return g.exports.useEffect(()=>{i.current.focus()},[]),g.exports.useEffect(()=>{n(t)},[t]),g.exports.useEffect(()=>{let p=t;c!==t&&(p=c,i.current.value=c),s(p)},[c]),f(ie,{children:[d("i",{className:"fa fa-arrow-left icon-back",onClick:()=>a()}),d("input",{type:"text",className:"box",placeholder:"\u641C\u7D22\u6E38\u620F\u6216\u653B\u7565",ref:i,onChange:u}),d("i",{className:"fa fa-close icon-delete",style:o,onClick:l}),d("i",{className:"fa fa-search icon-search",onClick:()=>{}})]})};var oe=g.exports.memo(se),le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAbCAMAAADfyzRdAAAAk1BMVEUAAADc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+bc4+Y8l9jNAAAAMHRSTlMA/RfwAuCr2AYRKfi5oSwEY/Tj3cZoXzPqmCXOpo14Tzsgawu/s4Z+V0XT53BMQJPEK+HnAAADNklEQVRYw4VX2aKqMAy0IhRkFRFxQUFFUY+a//+66z2FHmi6zKMdyaRJp+lkCC9YBN5Ei/Vj8ZnpKXlR5HrG7LN4rHUEk5QNAITa/8cUAPQyah/Ar/WpAACNtZQQADbKEAQAyNYUApaxPoQp3XgJpnTnv1JqXQjYG0NAoqFsCZjSTcCY7h6EdHEIIHNTCLBdXQhTuq4NpnSjTspWFwIcYwhY6WpmSncFxnSdjhJqsgAgygP5Ax3SszqEKd1z2lN+lNbCpURobfqiwGUcpzJPqVc+pwSVTKoblcBRzl2ZzCrgDH9Vy5xuekw5hb7+pMzzq7OzYAxr51yTqJdYncqG+gKlyMJbO+3jvw6bi03GDGJfNofXuY/f3sKsgDF82pSnqpcbJQop+beRDqDGgels1IzFnYmw1RSbJXP31ZSGKdVLsTSrFssTNGh48yKMW7HRUVjt9FIemtUH2y7lXvDbowUNWn7rqeCzTacaym6yttRZrDv3JOr/e6w79qBEyOrqqXeEMEc1SYmeisWC21SrUpp5/XlTbhgfYbxMpbPltlQoKM/f3tjKT0I6sOyjvPqX8595XUGK68CZLvK6HwfXRSo/j90NVcuaYzmaCO4LwGhGRnlQ+gZX2qh8g6NeAgblUqYU6xQ8v8JKnRjdW/jAj+A6WGcluD1WSgdSjmj1OBFQotZCc+0OH1UBHmr2UmAYpKzRKktUV1kfXX+BSAnQNezj3hBQISnr0TwsIsHDqgg0g9noEKBJEpsXnq1E5Lq6wgfV1dgdHiB4qK7G7viArjsC7DzibI8N6oaKZmygGz5MYgNdQNdA2PMtcSAGBMdUNDxgO5giDtgWdvuBJ/Cmcrg7CPbU8svI6T9F0RuWgQQB4ZPAGLTfBicbTwJYytKxsZR3JzOJJ3HeSb1Li5a9v714Y1KJKysaCbffQxMSWQO5hMm8ed+YmbSB7p3M/Csl6aS+xw+ddMUCs3USSeqadeq96wIAihl+c5H9vPvknuAn3qz435VXr9OUSbojImzHWGKrVHh+nVJ6cv8SP9H0JDrgpshegwqVz8dboEwDy4kGIZ0imAqU9+NZDn57ZcWGhdVJYan8A/LSi03x43/9AAAAAElFTkSuQmCC",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAbCAMAAADfyzRdAAAAilBMVEUAAAAjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreUjreXSqgLsAAAALXRSTlMA/QP5BuC5aRPYGOljTqoqJvIuoOPdXkM79cKkDO7Oso19IIZ2bjXTl8hWmZMUnt9+AAADKUlEQVRYw4VX6bqqMAy07MiiLIriBrgvef/Xu14L/XqaNs3P0+HMpJkkdSZHFGyDaEbG7V58ZnSsk2RtgXyK+41G0FLeAFCR3zsxANAyBhfAHehUACB2SEgFAG+KAtyljQJWDk1hS9dZgS3d5U/KQFHAzkoBKU1hSzcFa7o74OkSFMAWNgrwPZqCTtfzwZbuggFKF1FAbqWAkKag0w3Bmm4OKF1MAczYkFcYo95TFHS6+3qCXI2jhYEx3XkWg5CRzXX+HEJXQIKNTqq36EBEt/B0MjeBQLjhwH2qSqkFJJakLNJzfizgbxTH/JyWk8RN2J1iV4EkbdW/5hN/dnkHPvuLYH7wvmT7if/VV20Cf8ONT124meSWRinfm72AOS78+5MZsW24CN8M8fncbrZmyInz9KSUgjgteJ4ANo4rBeFWDCgIrx0t5U6c3vl1uQTk8YO8gIjXD/IgEC53UExAjrPyYDw8jO2fMvP3EXfxzkxRcQdG5hth6djshJTyW9nEcJiUYnGa7vQZTf32oK6cK32a7lMsU4uUpb4TammGZXqlgTSjznqKszSZWr3OTJrltb4fxw016MyxEi8CY8+ePBnSE3ODh3cyzQ0RwwpwxELKPMY6lZm/2ZI6RevjhqeVbjfKtMdKY0lKhk6zmRIdaoFIhRxxqyoRobbsVAgt5YZOlUQ1i2GL1l+APIzW8JbyBi8dknJT38Ny4DdYhSDoDeajJkAvSTy88EtSjTVVV/igulrdsQcUe1RXqzs+QLkD77dWLRoeUD0qmtVAPVgN1AJloASvAvW1Cihy9CBGEaLXqtVAeDslUjMKU+ViOijj6SWW0Wn6V7F0LG9zNwhcaS3JEU/XkIs19VLGk5iPubB8pBbNT52Zsx6lNtqitc03rb7g88nTFY1Vy2/TVExnII//tei/3m1arYGaUeb6KyX1VQMtGQDUISf2fues1NT1OaqPzgUvCfrNxXaL0So7hn/zOMl/medo1PTUuKNk/Ma4lLAGALaUZNTxlcvk53Gtust5J20mmaVL7o0CmQeHvJQo80MwVyDNPekiaQi0yWOklaWEkpTrJOUfaetyPpqIelUAAAAASUVORK5CYII=";const de=N.div`
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
`,D=N.div`
    position: absolute;
    top: 2rem;
    bottom: 0;
    width: 100%;
    display: ${r=>r.show?"":"none"};
`,pe=N.div`
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
`,ue=N.div`
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
`,me=N.div`
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
        background-image: ${le};
    }
    .star-light{
        background-image: ${ce};
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
`;function M(r,i){r.prototype=Object.create(i.prototype),r.prototype.constructor=r,y(r,i)}function he(r,i){return r.classList?!!i&&r.classList.contains(i):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+i+" ")!==-1}function ge(r,i){r.classList?r.classList.add(i):he(r,i)||(typeof r.className=="string"?r.className=r.className+" "+i:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+i))}function O(r,i){return r.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function fe(r,i){r.classList?r.classList.remove(i):typeof r.className=="string"?r.className=O(r.className,i):r.setAttribute("class",O(r.className&&r.className.baseVal||"",i))}var q={disabled:!1},H=E.createContext(null),S="unmounted",x="exited",v="entering",C="entered",j="exiting",b=function(r){M(i,r);function i(e,a){var t;t=r.call(this,e,a)||this;var s=a,n=s&&!s.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?n?(o=x,t.appearStatus=v):o=C:e.unmountOnExit||e.mountOnEnter?o=S:o=x,t.state={status:o},t.nextCallback=null,t}i.getDerivedStateFromProps=function(a,t){var s=a.in;return s&&t.status===S?{status:x}:null};var c=i.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(a){var t=null;if(a!==this.props){var s=this.state.status;this.props.in?s!==v&&s!==C&&(t=v):(s===v||s===C)&&(t=j)}this.updateStatus(!1,t)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var a=this.props.timeout,t,s,n;return t=s=n=a,a!=null&&typeof a!="number"&&(t=a.exit,s=a.enter,n=a.appear!==void 0?a.appear:s),{exit:t,enter:s,appear:n}},c.updateStatus=function(a,t){a===void 0&&(a=!1),t!==null?(this.cancelNextCallback(),t===v?this.performEnter(a):this.performExit()):this.props.unmountOnExit&&this.state.status===x&&this.setState({status:S})},c.performEnter=function(a){var t=this,s=this.props.enter,n=this.context?this.context.isMounting:a,o=this.props.nodeRef?[n]:[T.findDOMNode(this),n],l=o[0],u=o[1],p=this.getTimeouts(),h=n?p.appear:p.enter;if(!a&&!s||q.disabled){this.safeSetState({status:C},function(){t.props.onEntered(l)});return}this.props.onEnter(l,u),this.safeSetState({status:v},function(){t.props.onEntering(l,u),t.onTransitionEnd(h,function(){t.safeSetState({status:C},function(){t.props.onEntered(l,u)})})})},c.performExit=function(){var a=this,t=this.props.exit,s=this.getTimeouts(),n=this.props.nodeRef?void 0:T.findDOMNode(this);if(!t||q.disabled){this.safeSetState({status:x},function(){a.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:j},function(){a.props.onExiting(n),a.onTransitionEnd(s.exit,function(){a.safeSetState({status:x},function(){a.props.onExited(n)})})})},c.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(a,t){t=this.setNextCallback(t),this.setState(a,t)},c.setNextCallback=function(a){var t=this,s=!0;return this.nextCallback=function(n){s&&(s=!1,t.nextCallback=null,a(n))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},c.onTransitionEnd=function(a,t){this.setNextCallback(t);var s=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this),n=a==null&&!this.props.addEndListener;if(!s||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],l=o[0],u=o[1];this.props.addEndListener(l,u)}a!=null&&setTimeout(this.nextCallback,a)},c.render=function(){var a=this.state.status;if(a===S)return null;var t=this.props,s=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var n=L(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E.createElement(H.Provider,{value:null},typeof s=="function"?s(a,n):E.cloneElement(E.Children.only(s),n))},i}(E.Component);b.contextType=H;b.propTypes={};function A(){}b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:A,onEntering:A,onEntered:A,onExit:A,onExiting:A,onExited:A};b.UNMOUNTED=S;b.EXITED=x;b.ENTERING=v;b.ENTERED=C;b.EXITING=j;var be=b,xe=function(i,c){return i&&c&&c.split(" ").forEach(function(e){return ge(i,e)})},w=function(i,c){return i&&c&&c.split(" ").forEach(function(e){return fe(i,e)})},R=function(r){M(i,r);function i(){for(var e,a=arguments.length,t=new Array(a),s=0;s<a;s++)t[s]=arguments[s];return e=r.call.apply(r,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(n,o){var l=e.resolveArguments(n,o),u=l[0],p=l[1];e.removeClasses(u,"exit"),e.addClass(u,p?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(n,o)},e.onEntering=function(n,o){var l=e.resolveArguments(n,o),u=l[0],p=l[1],h=p?"appear":"enter";e.addClass(u,h,"active"),e.props.onEntering&&e.props.onEntering(n,o)},e.onEntered=function(n,o){var l=e.resolveArguments(n,o),u=l[0],p=l[1],h=p?"appear":"enter";e.removeClasses(u,h),e.addClass(u,h,"done"),e.props.onEntered&&e.props.onEntered(n,o)},e.onExit=function(n){var o=e.resolveArguments(n),l=o[0];e.removeClasses(l,"appear"),e.removeClasses(l,"enter"),e.addClass(l,"exit","base"),e.props.onExit&&e.props.onExit(n)},e.onExiting=function(n){var o=e.resolveArguments(n),l=o[0];e.addClass(l,"exit","active"),e.props.onExiting&&e.props.onExiting(n)},e.onExited=function(n){var o=e.resolveArguments(n),l=o[0];e.removeClasses(l,"exit"),e.addClass(l,"exit","done"),e.props.onExited&&e.props.onExited(n)},e.resolveArguments=function(n,o){return e.props.nodeRef?[e.props.nodeRef.current,n]:[n,o]},e.getClassNames=function(n){var o=e.props.classNames,l=typeof o=="string",u=l&&o?o+"-":"",p=l?""+u+n:o[n],h=l?p+"-active":o[n+"Active"],k=l?p+"-done":o[n+"Done"];return{baseClassName:p,activeClassName:h,doneClassName:k}},e}var c=i.prototype;return c.addClass=function(a,t,s){var n=this.getClassNames(t)[s+"ClassName"],o=this.getClassNames("enter"),l=o.doneClassName;t==="appear"&&s==="done"&&l&&(n+=" "+l),s==="active"&&a&&a.scrollTop,n&&(this.appliedClasses[t][s]=n,xe(a,n))},c.removeClasses=function(a,t){var s=this.appliedClasses[t],n=s.base,o=s.active,l=s.done;this.appliedClasses[t]={},n&&w(a,n),o&&w(a,o),l&&w(a,l)},c.render=function(){var a=this.props;a.classNames;var t=L(a,["classNames"]);return E.createElement(be,P({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(E.Component);R.defaultProps={classNames:""};R.propTypes={};var ve=R;function Ee(r){const{hotList:i,hotTag:c,serachResult:e}=r,{getHotListDispatch:a,getHotTagDispatch:t,getSearchResultDispatch:s}=r,n=B(),[o,l]=g.exports.useState(""),[u,p]=g.exports.useState(!1),h=()=>{p(!1)},k=U=>{l(U)};g.exports.useEffect(()=>{p(!0),i.length||a(),c.length||t(),e.length||s()},[]);const K=()=>d("ul",{className:"bui-tag-list",children:(i||[]).map(m=>d("li",{className:"bui-item",onClick:()=>l(m.title),children:d("span",{children:m.title})},m.id))}),Q=()=>d("ul",{className:"bui-tag-list",children:(c||[]).map(m=>d("li",{className:"bui-item",onClick:()=>l(m.tag),children:d("span",{children:m.tag})},m.id))}),G=()=>d("div",{className:"bui-mod-wrap",children:(e||[]).filter(m=>new RegExp("^.*"+o+".*$").test(m.name)==!0).map(m=>f("div",{className:"crad-game",children:[d("div",{className:"game-img",children:d("img",{src:m.pic,className:"item-pic"})}),f("div",{className:"game-info-wrap",children:[d("h4",{className:"game-name",children:m.name}),f("span",{className:"game-info",children:[d("span",{className:"tag-name",children:m.tag1}),d("span",{className:"tag-name",children:m.tag2}),d("span",{className:"tag-name",children:m.tag3})]}),d("div",{className:"bui-rate",children:f("span",{className:"rate-num",children:["\u8BC4\u5206:",m.mark]})})]})]},m.id))});return d(ve,{in:u,timeout:800,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{n("/")},children:f(de,{children:[d("div",{className:"search_box_wrapper",children:d(oe,{back:h,newQuery:o,handleQuery:k})}),d(D,{show:!o,children:f(z,{children:[f(pe,{children:[d("h1",{className:"bui-title",children:"\u70ED\u95E8\u6E38\u620F"}),K()]}),f(ue,{children:[d("h1",{className:"bui-title",children:"\u70ED\u95E8\u6807\u7B7E"}),Q()]})]})}),d(D,{show:o,children:d(z,{onScroll:_,children:d(me,{children:G()})})})]})})}const Ae=r=>({hotList:r.search.hotList,hotTag:r.search.hotTag,serachResult:r.search.serachResult}),Ce=r=>({getHotListDispatch(){r(ee())},getHotTagDispatch(){r(re())},getSearchResultDispatch(){r(ae())}});var Ue=J(Ae,Ce)(g.exports.memo(Ee));export{Ue as default};
