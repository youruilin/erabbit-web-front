(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03a51fc4"],{3716:function(e,t,c){},"3f86":function(e,t,c){"use strict";c("5191")},4332:function(e,t,c){},4577:function(e,t,c){},5191:function(e,t,c){},5736:function(e,t,c){"use strict";c("a1a6")},"6a5b":function(e,t,c){"use strict";c("4577")},7114:function(e,t,c){"use strict";c("84d9")},"72b4":function(e,t,c){e.exports=c.p+"img/qrcode.5372a064.jpg"},"84d9":function(e,t,c){},8589:function(e,t,c){"use strict";c("4332")},"88e9":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["withScopeId"])("data-v-65e65a7a");Object(a["pushScopeId"])("data-v-65e65a7a");var r={class:"app-body"};Object(a["popScopeId"])();var n=o((function(e,t,c,o,n,d){var i=Object(a["resolveComponent"])("AppNavbar"),l=Object(a["resolveComponent"])("AppHeader"),b=Object(a["resolveComponent"])("AppHeaderSticky"),s=Object(a["resolveComponent"])("RouterView"),j=Object(a["resolveComponent"])("AppFooter");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(i),Object(a["createVNode"])(l),Object(a["createVNode"])(b),Object(a["createVNode"])("div",r,[Object(a["createVNode"])(s)]),Object(a["createVNode"])(j)],64)})),d=Object(a["withScopeId"])("data-v-4fb12e10");Object(a["pushScopeId"])("data-v-4fb12e10");var i={class:"app-topnav"},l={class:"container"},b=Object(a["createVNode"])("i",{class:"iconfont icon-user"},null,-1),s=Object(a["createTextVNode"])("请先登录"),j=Object(a["createVNode"])("li",null,[Object(a["createVNode"])("a",{href:"javascript:;"},"免费注册")],-1),p=Object(a["createTextVNode"])("我的订单"),O=Object(a["createStaticVNode"])('<li data-v-4fb12e10><a href="javascript:;" data-v-4fb12e10>会员中心</a></li><li data-v-4fb12e10><a href="javascript:;" data-v-4fb12e10>帮助中心</a></li><li data-v-4fb12e10><a href="javascript:;" data-v-4fb12e10>关于我们</a></li><li data-v-4fb12e10><a href="javascript:;" data-v-4fb12e10><i class="iconfont icon-phone" data-v-4fb12e10></i>手机版</a></li>',4);Object(a["popScopeId"])();var u=d((function(e,t,c,o,r,n){var u=Object(a["resolveComponent"])("RouterLink");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",i,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("ul",null,[o.profile.token?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])(u,{to:"/member"},{default:d((function(){return[b,Object(a["createTextVNode"])(Object(a["toDisplayString"])(o.profile.account),1)]})),_:1})]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])("a",{onClick:t[1]||(t[1]=function(e){return o.logout()}),href:"javascript:;"},"退出登录")])],64)):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[Object(a["createVNode"])("li",null,[Object(a["createVNode"])(u,{to:"/login"},{default:d((function(){return[s]})),_:1})]),j],64)),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(u,{to:"/member/order"},{default:d((function(){return[p]})),_:1})]),O])])])})),v=c("5502"),f=c("6c02"),N={name:"AppTopnav",setup:function(){var e=Object(v["b"])(),t=Object(a["computed"])((function(){return e.state.user.profile})),c=Object(f["d"])(),o=function(){e.commit("user/setUser",{}),e.commit("cart/setCart",[]),c.push("/login")};return{profile:t,logout:o}}};c("3f86");N.render=u,N.__scopeId="data-v-4fb12e10";var V=N,h=Object(a["withScopeId"])("data-v-0c0eb3a9");Object(a["pushScopeId"])("data-v-0c0eb3a9");var k={class:"app-header"},m={class:"container"},g={class:"logo"},y=Object(a["createTextVNode"])("小兔鲜"),S=Object(a["createVNode"])("div",{class:"search"},[Object(a["createVNode"])("i",{class:"iconfont icon-search"}),Object(a["createVNode"])("input",{type:"text",placeholder:"搜一搜"})],-1);Object(a["popScopeId"])();var B=h((function(e,t,c,o,r,n){var d=Object(a["resolveComponent"])("RouterLink"),i=Object(a["resolveComponent"])("AppHeaderNav"),l=Object(a["resolveComponent"])("AppHeaderCart");return Object(a["openBlock"])(),Object(a["createBlock"])("header",k,[Object(a["createVNode"])("div",m,[Object(a["createVNode"])("h1",g,[Object(a["createVNode"])(d,{to:"/"},{default:h((function(){return[y]})),_:1})]),Object(a["createVNode"])(i),S,Object(a["createVNode"])(l)])])})),C=(c("b0c0"),Object(a["withScopeId"])("data-v-36da96c2"));Object(a["pushScopeId"])("data-v-36da96c2");var I={class:"app-header-nav"},_={class:"home"},w=Object(a["createTextVNode"])("首页");Object(a["popScopeId"])();var A=C((function(e,t,c,o,r,n){var d=Object(a["resolveComponent"])("RouterLink");return Object(a["openBlock"])(),Object(a["createBlock"])("ul",I,[Object(a["createVNode"])("li",_,[Object(a["createVNode"])(d,{to:"/"},{default:C((function(){return[w]})),_:1})]),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.list,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:{active:t.id&&e.$route.params.id===t.id},key:t.id,onMousemove:function(e){return o.show(t)},onMouseleave:function(e){return o.hide(t)}},[Object(a["createVNode"])(d,{onClick:function(e){return o.hide(t)},to:"/category/".concat(t.id)},{default:C((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.name),1)]})),_:2},1032,["onClick","to"]),Object(a["createVNode"])("div",{class:["layer",{open:t.open}]},[Object(a["createVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t.children,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:e.id},[Object(a["createVNode"])(d,{onClick:function(e){return o.hide(t)},to:"/category/sub/".concat(e.id)},{default:C((function(){return[Object(a["createVNode"])("img",{src:e.picture,alt:""},null,8,["src"]),Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(e.name),1)]})),_:2},1032,["onClick","to"])])})),128))])],2)],42,["onMousemove","onMouseleave"])})),128))])})),x={name:"AppHeaderNav",setup:function(){var e=Object(v["b"])(),t=Object(a["computed"])((function(){return e.state.category.list})),c=function(t){e.commit("category/show",t.id)},o=function(t){e.commit("category/hide",t.id)};return{list:t,show:c,hide:o}}};c("5736");x.render=A,x.__scopeId="data-v-36da96c2";var T=x,H=Object(a["withScopeId"])("data-v-0266f49e");Object(a["pushScopeId"])("data-v-0266f49e");var D={class:"cart"},L=Object(a["createVNode"])("i",{class:"iconfont icon-cart"},null,-1),F={key:0,class:"layer"},$={class:"list"},R={class:"center"},P={class:"name ellipsis-2"},M={class:"attr ellipsis"},q={class:"right"},J={class:"price"},U={class:"count"},X={class:"foot"},z={class:"total"},E=Object(a["createTextVNode"])("去购物车结算");Object(a["popScopeId"])();var G=H((function(e,t,c,o,r,n){var d=Object(a["resolveComponent"])("RouterLink"),i=Object(a["resolveComponent"])("XtxButton");return Object(a["openBlock"])(),Object(a["createBlock"])("div",D,[Object(a["createVNode"])(d,{class:"curr",to:"/cart"},{default:H((function(){return[L,Object(a["createVNode"])("em",null,Object(a["toDisplayString"])(e.$store.getters["cart/validTotal"]),1)]})),_:1}),e.$store.getters["cart/validTotal"]>0&&"/cart"!==e.$route.path?(Object(a["openBlock"])(),Object(a["createBlock"])("div",F,[Object(a["createVNode"])("div",$,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.$store.getters["cart/validList"],(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"item",key:e.skuId},[Object(a["createVNode"])(d,{to:"/product/".concat(e.id)},{default:H((function(){return[Object(a["createVNode"])("img",{src:e.picture,alt:""},null,8,["src"]),Object(a["createVNode"])("div",R,[Object(a["createVNode"])("p",P,Object(a["toDisplayString"])(e.name),1),Object(a["createVNode"])("p",M,Object(a["toDisplayString"])(e.attrsText),1)]),Object(a["createVNode"])("div",q,[Object(a["createVNode"])("p",J,"¥"+Object(a["toDisplayString"])(e.nowPrice),1),Object(a["createVNode"])("p",U,"x"+Object(a["toDisplayString"])(e.count),1)])]})),_:2},1032,["to"]),Object(a["createVNode"])("i",{onClick:function(t){return o.deleteCart(e.skuId)},class:"iconfont icon-close-new"},null,8,["onClick"])])})),128))]),Object(a["createVNode"])("div",X,[Object(a["createVNode"])("div",z,[Object(a["createVNode"])("p",null,"共 "+Object(a["toDisplayString"])(e.$store.getters["cart/validTotal"])+" 件商品",1),Object(a["createVNode"])("p",null,"¥"+Object(a["toDisplayString"])(e.$store.getters["cart/validAmount"]),1)]),Object(a["createVNode"])(i,{onClick:t[1]||(t[1]=function(t){return e.$router.push("/cart")}),type:"plain"},{default:H((function(){return[E]})),_:1})])])):Object(a["createCommentVNode"])("",!0)])})),K={name:"AppHeaderCart",setup:function(){var e=Object(v["b"])();e.dispatch("cart/findCart").then((function(){}));var t=function(t){e.dispatch("cart/deleteCart",t)};return{deleteCart:t}}};c("cb80");K.render=G,K.__scopeId="data-v-0266f49e";var Q=K,W={name:"AppHeader",components:{AppHeaderNav:T,AppHeaderCart:Q}};c("6a5b");W.render=B,W.__scopeId="data-v-0c0eb3a9";var Y=W,Z=c("72b4"),ee=c.n(Z),te=Object(a["withScopeId"])("data-v-0976b2a1");Object(a["pushScopeId"])("data-v-0976b2a1");var ce={class:"app-footer"},ae=Object(a["createVNode"])("div",{class:"contact"},[Object(a["createVNode"])("div",{class:"container"},[Object(a["createVNode"])("dl",null,[Object(a["createVNode"])("dt",null,"客户服务"),Object(a["createVNode"])("dd",null,[Object(a["createVNode"])("i",{class:"iconfont icon-kefu"}),Object(a["createTextVNode"])(" 在线客服")]),Object(a["createVNode"])("dd",null,[Object(a["createVNode"])("i",{class:"iconfont icon-question"}),Object(a["createTextVNode"])(" 问题反馈")])]),Object(a["createVNode"])("dl",null,[Object(a["createVNode"])("dt",null,"关注我们"),Object(a["createVNode"])("dd",null,[Object(a["createVNode"])("i",{class:"iconfont icon-weixin"}),Object(a["createTextVNode"])(" 公众号")]),Object(a["createVNode"])("dd",null,[Object(a["createVNode"])("i",{class:"iconfont icon-weibo"}),Object(a["createTextVNode"])(" 微博")])]),Object(a["createVNode"])("dl",null,[Object(a["createVNode"])("dt",null,"下载APP"),Object(a["createVNode"])("dd",{class:"qrcode"},[Object(a["createVNode"])("img",{src:ee.a})]),Object(a["createVNode"])("dd",{class:"download"},[Object(a["createVNode"])("span",null,"扫描二维码"),Object(a["createVNode"])("span",null,"立马下载APP"),Object(a["createVNode"])("a",{href:"javascript:;"},"下载页面")])]),Object(a["createVNode"])("dl",null,[Object(a["createVNode"])("dt",null,"服务热线"),Object(a["createVNode"])("dd",{class:"hotline"},[Object(a["createTextVNode"])("400-0000-000 "),Object(a["createVNode"])("small",null,"周一至周日 8:00-18:00")])])])],-1),oe=Object(a["createVNode"])("div",{class:"extra"},[Object(a["createVNode"])("div",{class:"container"},[Object(a["createVNode"])("div",{class:"slogan"},[Object(a["createVNode"])("a",{href:"javascript:;"},[Object(a["createVNode"])("i",{class:"iconfont icon-footer01"}),Object(a["createVNode"])("span",null,"价格亲民")]),Object(a["createVNode"])("a",{href:"javascript:;"},[Object(a["createVNode"])("i",{class:"iconfont icon-footer02"}),Object(a["createVNode"])("span",null,"物流快捷")]),Object(a["createVNode"])("a",{href:"javascript:;"},[Object(a["createVNode"])("i",{class:"iconfont icon-footer03"}),Object(a["createVNode"])("span",null,"品质新鲜")])]),Object(a["createVNode"])("div",{class:"copyright"},[Object(a["createVNode"])("p",null,[Object(a["createVNode"])("a",{href:"javascript:;"},"关于我们"),Object(a["createVNode"])("a",{href:"javascript:;"},"帮助中心"),Object(a["createVNode"])("a",{href:"javascript:;"},"售后服务"),Object(a["createVNode"])("a",{href:"javascript:;"},"配送与验收"),Object(a["createVNode"])("a",{href:"javascript:;"},"商务合作"),Object(a["createVNode"])("a",{href:"javascript:;"},"搜索推荐"),Object(a["createVNode"])("a",{href:"javascript:;"},"友情链接")]),Object(a["createVNode"])("p",null,"CopyRight © 小兔鲜儿")])])],-1);Object(a["popScopeId"])();var re=te((function(e,t,c,o,r,n){return Object(a["openBlock"])(),Object(a["createBlock"])("footer",ce,[ae,oe])})),ne={name:"AppFooter"};c("7114");ne.render=re,ne.__scopeId="data-v-0976b2a1";var de=ne,ie=Object(a["withScopeId"])("data-v-df91b278");Object(a["pushScopeId"])("data-v-df91b278");var le={class:"container"},be={class:"right"},se=Object(a["createTextVNode"])("品牌"),je=Object(a["createTextVNode"])("专题");Object(a["popScopeId"])();var pe=ie((function(e,t,c,o,r,n){var d=Object(a["resolveComponent"])("RouterLink"),i=Object(a["resolveComponent"])("AppHeaderNav");return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:["app-header-sticky",{show:o.y>=78}]},[Object(a["withDirectives"])(Object(a["createVNode"])("div",le,[Object(a["createVNode"])(d,{class:"logo",to:"/"}),Object(a["createVNode"])(i),Object(a["createVNode"])("div",be,[Object(a["createVNode"])(d,{to:"/"},{default:ie((function(){return[se]})),_:1}),Object(a["createVNode"])(d,{to:"/"},{default:ie((function(){return[je]})),_:1})])],512),[[a["vShow"],o.y>=78]])],2)})),Oe=c("16ce"),ue={name:"AppHeaderSticky",components:{AppHeaderNav:T},setup:function(){var e=Object(Oe["e"])(),t=e.y;return{y:t}}};c("8589");ue.render=pe,ue.__scopeId="data-v-df91b278";var ve=ue,fe={name:"Layout",components:{AppNavbar:V,AppHeader:Y,AppFooter:de,AppHeaderSticky:ve},setup:function(){var e=Object(v["b"])();e.dispatch("category/getList")}};c("f6e5");fe.render=n,fe.__scopeId="data-v-65e65a7a";t["default"]=fe},a1a6:function(e,t,c){},b573:function(e,t,c){},cb80:function(e,t,c){"use strict";c("b573")},f6e5:function(e,t,c){"use strict";c("3716")}}]);
//# sourceMappingURL=chunk-03a51fc4.841daa0c.js.map