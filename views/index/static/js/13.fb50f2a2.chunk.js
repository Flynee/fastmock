(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{198:function(e,t,a){"use strict";a(223);var n=a(205),r=(a(224),a(206)),c=(a(194),a(64)),l=a(14),s=a(15),o=a(35),i=a(34),m=a(36),u=a(0),p=a.n(u),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"page-info-action"},p.a.createElement("div",{className:"my-container"},p.a.createElement(n.a,{gutter:16},p.a.createElement(r.a,{className:"gutter-row",span:1},p.a.createElement("div",{className:"page-logo"},p.a.createElement(c.a,{type:this.props.antIcon}))),p.a.createElement(r.a,{className:"gutter-row",span:16},p.a.createElement("div",{className:"page-description"},p.a.createElement("span",null,p.a.createElement("h2",null,this.props.pageName),p.a.createElement("p",null,this.props.pageDesc)))),p.a.createElement(r.a,{className:"gutter-row",span:7},p.a.createElement("div",{className:"page-act"},this.props.children)))))}}]),t}(p.a.Component);t.a=f},225:function(e,t,a){},229:function(e,t,a){"use strict";var n=a(198),r=(a(194),a(64)),c=a(202),l=a.n(c),s=a(203),o=(a(215),a(216)),i=a(14),m=a(15),u=a(35),p=a(34),f=a(36),E=(a(231),a(233)),h=a(0),g=a.n(h),d=a(45),b=a(77),y=a(37),v=(a(225),E.a.Header),k=E.a.Content,N=E.a.Footer,j=Object(y.a)(),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).logout=function(e){e.preventDefault(),o.a.confirm({title:"\u63d0\u793a",content:"\u786e\u5b9a\u8981\u9000\u51fa\u5417\uff1f",okText:"\u786e\u8ba4",onOk:function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,http.get("/api/logout",{});case 2:e.sent.success&&(d.a.removeLoginInfo(),j.push("/"));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),cancelText:"\u53d6\u6d88"})},a.state={date:new Date,userInfo:{role:0,username:""},selectedStyle:{color:"#fff"}},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({userInfo:d.a.getLoginInfo()})}},{key:"render",value:function(){return g.a.createElement("section",{className:"root-layout"},g.a.createElement(E.a,{className:"layout"},g.a.createElement(v,{className:"header",style:{height:"60px"}},g.a.createElement("div",{className:"my-container"},g.a.createElement("div",{className:"logo"},g.a.createElement("img",{height:"26",style:{marginTop:"-5px"},src:"/assets/images/fastmock-logo.jpg",alt:""})),g.a.createElement("ul",{className:"header-nav"},g.a.createElement("li",null,g.a.createElement(b.a,{to:"/projects",activeStyle:this.state.selectedStyle},g.a.createElement(r.a,{type:"appstore"})," \u6211\u7684\u9879\u76ee")),g.a.createElement("li",null,g.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"//fmdocs.fastmock.site"},g.a.createElement(r.a,{type:"book"})," \u4f7f\u7528\u6587\u6863")),g.a.createElement("li",null,g.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/MarvenGong/fastmock"},g.a.createElement(r.a,{type:"github"})," Github")),g.a.createElement("li",null,g.a.createElement(b.a,{to:"/feedback",activeStyle:this.state.selectedStyle},g.a.createElement(r.a,{type:"question"})," \u95ee\u9898\u4e0e\u5efa\u8bae")),this.state.userInfo.role/1===1&&g.a.createElement("li",null,g.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/admin/users"},g.a.createElement(r.a,{type:"windows"})," \u540e\u53f0\u7ba1\u7406"))),g.a.createElement("div",{className:"right-user"},g.a.createElement("a",null,g.a.createElement(r.a,{type:"user"})," ",this.state.userInfo.username),g.a.createElement("a",{href:"javascript:;",onClick:this.logout},g.a.createElement(r.a,{type:"logout"})," \u9000\u51fa\u767b\u5f55")))),g.a.createElement(k,{style:{backgroundColor:"#f5f5f5"}},g.a.createElement("div",{style:{minHeight:280}},this.props.children)),g.a.createElement(N,{className:"p-footer"},g.a.createElement("p",null,"\xa9 All rights reserved FastMock\u5728\u7ebfMock\u5e73\u53f0"),g.a.createElement("p",{className:"beian"},"\u6e1dICP\u590719000613\u53f7-2"))))}}]),t}(h.Component);a.d(t,"a",function(){return n.a}),a.d(t,"b",function(){return O})},501:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),c=a(35),l=a(34),s=a(36),o=a(0),i=a.n(o),m=a(229),u=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).state={page:1},e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.b,null,i.a.createElement("section",{className:"handbook"},i.a.createElement(m.a,{antIcon:"file-unknown",pageName:"\u4f7f\u7528\u6587\u6863",pageDesc:"\u8fd9\u91cc\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528FastMock\u6765\u63d0\u9ad8\u4f60\u7684\u751f\u4ea7\u6548\u7387\u3002"}),i.a.createElement("section",{className:"my-container",style:{padding:"15px 0"}})))}}]),t}(i.a.Component);t.default=u}}]);
//# sourceMappingURL=13.fb50f2a2.chunk.js.map