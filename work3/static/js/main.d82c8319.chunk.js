(this["webpackJsonpmy-app-05"]=this["webpackJsonpmy-app-05"]||[]).push([[0],{104:function(e,t,n){e.exports=n(194)},181:function(e,t,n){},182:function(e,t,n){var a={"./1.jpg":183,"./2.jpg":184,"./3.jpg":185,"./4.jpg":186,"./5.jpg":187,"./6.jpg":188,"./7.jpg":189,"./8.jpg":190};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id=182},183:function(e,t,n){e.exports=n.p+"static/media/1.60b47325.jpg"},184:function(e,t,n){e.exports=n.p+"static/media/2.71214b2b.jpg"},185:function(e,t,n){e.exports=n.p+"static/media/3.fb6da3f5.jpg"},186:function(e,t,n){e.exports=n.p+"static/media/4.5b396004.jpg"},187:function(e,t,n){e.exports=n.p+"static/media/5.82e95ed8.jpg"},188:function(e,t,n){e.exports=n.p+"static/media/6.30b46cd9.jpg"},189:function(e,t,n){e.exports=n.p+"static/media/7.97192244.jpg"},190:function(e,t,n){e.exports=n.p+"static/media/8.68dae5d4.jpg"},191:function(e,t,n){},192:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),i=n.n(c),r=n(77),l=n(12),s=n(23),u=n(24),m=n(26),p=n(25),d=n(10),f=n(13),h=n(48),g=n(102),b={datalist:[],shoucang:[],userinfo:""};console.log(b);var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case"GETDATA":return 0==e.datalist.length?Object.assign({},e,{datalist:t.datalist}):e;case"SHOUCANG":return e.shoucang.every((function(e){return e!=t.shoucang}))?Object.assign({},e,{shoucang:[].concat(Object(g.a)(e.shoucang),[t.shoucang])}):e;case"DEL":var n=e.shoucang.filter((function(e){return e!=t.del}));return Object.assign({},e,{shoucang:n});case"LOGIN":return Object.assign({},e,{userinfo:t.username});default:return e}},y=n(101),j=Object(h.a)(y.a)(h.c)(E),v=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.location.pathname;return t.split("/").length>2||"/login"==t?null:o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(d.f,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},o.a.createElement(d.f.Item,{title:"\u9996\u9875",key:"home",icon:o.a.createElement("i",{className:"iconfont icon-shouyeshouye"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shouye"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),o.a.createElement(d.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shoucangfill"}),title:"\u6536\u85cf",key:"",selected:"/myshoucang"===t,onPress:function(){""==e.props.userinfo?e.props.history.push("/login"):e.props.history.push("/myshoucang")},"data-seed":"logId1"}),o.a.createElement(d.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao1"}),title:"\u8ba2\u5355\u5217\u8868",key:"orderlist",selected:"/orderlist"===t,onPress:function(){e.props.history.push("/orderlist")}}),o.a.createElement(d.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-wodedangxuan"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"mytaobao",selected:"/mytaobao"===t,onPress:function(){e.props.history.push("/mytaobao")}})))}}]),n}(o.a.Component),O=Object(f.b)((function(e){return e}))(Object(l.g)(v)),x=n(27),N=(n(181),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:[1,2,3,4,5,6,7,8],imgHeight:176},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:[1,2,3,4,5,6,7,8]})}),100)}},{key:"render",value:function(){var e=this;return o.a.createElement(d.a,{autoplay:!0,infinite:!0,autoplayInterval:3e3},this.state.data.map((function(t){return o.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},o.a.createElement("img",{src:n(182)("./".concat(t,".jpg")),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))}}]),a}(a.Component)),w=(n(191),function(e){var t;return o.a.createElement("div",(t={className:"flex-container"},Object(x.a)(t,"className","container"),Object(x.a)(t,"style",{float:"left",marginRight:"8px",marginBottom:"10px"}),Object(x.a)(t,"onClick",(function(){e.history.push("/home/detail"),localStorage.setItem("id",e.data.id)})),t),o.a.createElement(d.b,{className:"a"},o.a.createElement("img",{src:e.data.img,className:"shopImg"})),o.a.createElement(d.b,{className:"a"},e.data.title),o.a.createElement(d.b,{style:{color:"orange"},className:"a"},"\uffe5 ",e.data.price))}),k=Object(f.b)((function(e){return{datalist:e.datalist}}))((function(e){return console.log(e),o.a.createElement("div",{className:"flex-container",style:{flexWrap:"wrap",paddingLeft:"15px",marginTop:"10px"}},e.datalist.map((function(t,n){return o.a.createElement(w,{data:t,history:e.history,id:t.id,key:n})})))}));function C(e){return{type:"DEL",del:e}}var I=Object(f.b)((function(e){return e}))((function(e){var t,n=function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e({type:"GETDATA",datalist:t.data})}))}))};return Object(a.useEffect)((function(){n()}),[]),o.a.createElement("div",{className:"flex-container"},o.a.createElement(d.b,{className:"palaceA"},o.a.createElement("i",(t={className:"item1"},Object(x.a)(t,"className","iconfont icon-iconfonttaobao"),Object(x.a)(t,"style",{color:"white",fontSize:"30px",paddingRight:"12px"}),t)),o.a.createElement("input",{type:"text",placeholder:"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa",className:"item2",onClick:function(){e.history.push("/home/search")},style:{color:"white"}})),o.a.createElement(d.b,null,o.a.createElement(N,null)),o.a.createElement(d.b,null,o.a.createElement(k,{history:e.history})))})),T=Object(f.b)()((function(e){return console.log(e),o.a.createElement("div",{className:"flex-container"},o.a.createElement(d.b,{style:{backgroundColor:"white",marginBottom:"10px"}},o.a.createElement(d.b.Item,null,o.a.createElement("img",{src:e.data.img,className:"shopImg",style:{height:"100px",width:"100px"}})),o.a.createElement(d.b.Item,null,o.a.createElement(d.b,{style:{marginBottom:"10px"}},e.data.title),o.a.createElement(d.b,{style:{color:"orange"}},"\uffe5 ",e.data.price)),o.a.createElement(d.b.Item,null,o.a.createElement("button",{onClick:function(){e.dispatch(C(e.data.id))}},"\u5220\u9664"))))})),S=Object(f.b)((function(e){return e}))((function(e){return console.log(e),o.a.createElement("div",null,e.shoucang.map((function(t,n){return e.datalist.map((function(a){if(t==a.id)return console.log(1),o.a.createElement(T,{data:a,dispatch:e.dispatch,key:n})}))})))})),L=Object(f.b)((function(e){return e}))((function(){return o.a.createElement("div",null,o.a.createElement(S,null))})),B=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"\u8ba2\u5355\u5217\u8868")}}]),n}(a.Component),z=function(e){return o.a.createElement("div",null,o.a.createElement(d.e,{placeholder:"Search",onClear:function(){e.history.goBack()},showCancelButton:!0}))},A=n(103),D=(n(192),Object(f.b)((function(e){return e}))((function(e){var t="iconfont icon-shoucang";e.shoucang.forEach((function(n){n==e.id&&(t="iconfont icon-shoucang1")}));var n=Object(a.useState)(t),c=Object(A.a)(n,2),i=c[0],r=c[1];return o.a.createElement("div",Object(x.a)({className:"flex-container",style:{flexWrap:"wrap"}},"className","a"),o.a.createElement("div",{className:"flex-container tubiao"},o.a.createElement(d.b,{style:{paddingLeft:"4px"}},o.a.createElement("i",{className:"iconfont icon-dianpu",style:{fontSize:"16px",marginBottom:"8px"}})),o.a.createElement(d.b,null,"\u5e97\u94fa")),o.a.createElement("div",{className:"flex-container tubiao"},o.a.createElement(d.b,{style:{paddingLeft:"4px"}},o.a.createElement("i",{className:"iconfont icon-kefu",style:{fontSize:"16px",marginBottom:"8px"}})),o.a.createElement(d.b,null,"\u5ba2\u670d")),o.a.createElement("div",{className:"flex-container tubiao",onClick:function(){console.log(i),""==e.userinfo?e.history.push("/login"):("iconfont icon-shoucang"===i&&(r("iconfont icon-shoucang1"),localStorage.setItem("".concat(e.id),e.id),e.dispatch({type:"SHOUCANG",shoucang:e.id})),"iconfont icon-shoucang1"===i&&(r("iconfont icon-shoucang"),e.dispatch(C(e.id))))}},o.a.createElement(d.b,{style:{paddingLeft:"4px"}},o.a.createElement("i",{className:i,style:{fontSize:"16px",marginBottom:"8px"}})),o.a.createElement(d.b,null,"\u6536\u85cf")),o.a.createElement("div",{className:"flex-container but"},o.a.createElement(d.b,null,o.a.createElement("button",{className:"size size1"},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("button",{className:"size size2"},"\u7acb\u5373\u8d2d\u4e70"))))}))),G=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e,t,n=this;console.log(this.props);var a=localStorage.getItem("id");return this.props.datalist.forEach((function(n){n.id==a&&(e=n.title,t=n.img)})),o.a.createElement("div",null,o.a.createElement(d.d,{mode:"light",icon:o.a.createElement(d.c,{type:"left"}),onLeftClick:function(){return n.props.history.goBack()}},e),o.a.createElement("img",{src:t,style:{width:"100%"}}),o.a.createElement(d.b,{style:{backgroundColor:"white",position:"fixed",bottom:0,width:"100%",paddingLeft:"4px"}},o.a.createElement(D,{id:a,userinfo:this.props.userinfo,history:this.props.history})))}}]),n}(a.Component),H=Object(f.b)((function(e){return e}))(G),P=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"\u6211\u7684\u6dd8\u5b9d")}}]),n}(a.Component),U=Object(f.b)((function(e){return e}))((function(e){console.log(e),""!=e.userinfo&&e.history.go(-1);return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",username:t.data.name}),console.log(t)}))})),alert("\u6b63\u5728\u767b\u5f55\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85")}},"\u767b\u5f55"))})),J=function(){return o.a.createElement(f.a,{store:j},o.a.createElement(r.a,null,o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:I}),o.a.createElement(l.b,{path:"/myshoucang",component:L}),o.a.createElement(l.b,{path:"/orderlist",component:B}),o.a.createElement(l.b,{path:"/mytaobao",component:P}),o.a.createElement(l.b,{path:"/home/search",component:z}),o.a.createElement(l.b,{path:"/home/detail",component:H}),o.a.createElement(l.b,{path:"/login",component:U}),o.a.createElement(l.b,{render:function(){return o.a.createElement(l.a,{to:"/"})}})),o.a.createElement("div",{style:{height:"50px"}}),o.a.createElement(O,null)))};n(193);i.a.render(o.a.createElement(J,null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.d82c8319.chunk.js.map