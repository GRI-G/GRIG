(this["webpackJsonpgrig-client"]=this["webpackJsonpgrig-client"]||[]).push([[0],{53:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,b,s,j,u,l,d,O,m,g,x,h,p,f,k,v,y,w,C,F,_,I,S,E,z,G,P,$,q,B,R,M,D=t(3),T=t.n(D),L=t(24),H=t.n(L),J=t(1),Q=t(2),U=t(0),A=Q.b.h1(r||(r=Object(J.a)(["\n  margin: 0;\n  font-size: 2.1em;\n"]))),N=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(A,{children:"GRIG"})})},K=Q.b.h2(i||(i=Object(J.a)(["\n  margin: 0;\n  font-size: 1.3em;\n"]))),V=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(K,{children:"Github Rank In GSM"})})},W=Q.b.div(c||(c=Object(J.a)(["\n  text-align : center;\n  color: #DB7770;\n"]))),X=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(W,{children:[Object(U.jsx)(N,{}),Object(U.jsx)(V,{})]})})},Y=Q.b.a(a||(a=Object(J.a)(["\n  color: #db7770;\n"]))),Z=function(n){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(Y,{href:n.link,children:n.text})})},nn=(t(9),Q.b.p(o||(o=Object(J.a)(["\n  text-align: left;\n  font-family: SeoulHangangM;\n  white-space: pre-wrap;\n\n  display: block;\n  width: 70%;\n  padding-left: 30%;\n  margin: 0 auto;\n\n  color: #777777;\n  font-size: 108%;\n  line-height: 1.5em;\n"])))),en=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(nn,{children:["\n\uae43\ud5d9\uc758 \ub2e4\uc591\ud55c \uc694\uc18c\ub4e4\ub85c \ub7ad\ud0b9\uc744 \uc138\uc6cc\ubd04\uc73c\ub85c\uc368, \ud559\uc0dd\ub4e4\uc774 \uae43\ud5d9\uc5d0 \ub354 \uad00\uc2ec\uc744 \uac16\ub3c4\ub85d \ud558\uae30\uc704\ud574 \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\nGSM\uc744 \uac70\ucce4\uac70\ub098, \uc7ac\ud559 \uc911\uc778 \uc0ac\ub78c\ub4e4\uc758 \uac01 \uc694\uc18c\ubcc4 \uae43\ud5d9 \ub7ad\ud0b9\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.\n","\ud53c\ub4dc\ubc31 \uc694\uccad\uc774\ub098 \ubc84\uadf8 \uc81c\ubcf4\ub294"," ",Object(U.jsx)(Z,{text:"\uc5ec\uae30",link:"https://github.com/GRI-G/GRI-G.github.io/issues/new"}),"\ub85c \uc774\uc288\ub97c \ub0a8\uae30\uac70\ub098,"," ",Object(U.jsx)(Z,{text:"\ud574\ub2f9 \uc0ac\uc774\ud2b8 \uc18c\uc720\uc790",link:"https://github.com/sunrabbit123"}),"\uc5d0\uac8c \uc5f0\ub77d \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",Object(U.jsx)("br",{}),"\ub9cc\uc57d \ub7ad\ud0b9\uc5d0 \ub4f1\ub85d\ud558\uace0\uc2f6\uc73c\uc2dc\ub2e4\uba74"," ",Object(U.jsx)(Z,{text:"\uc5ec\uae30",link:"https://github.com/login/oauth/authorize?client_id=685ffb52e4dd768b3f66&redirect_uri=https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/auth&scope=user:email"}),"\ub97c \ub20c\ub7ec\uc8fc\uc138\uc694!!"]})})},tn=Q.b.header(b||(b=Object(J.a)(["\n    margin-top : 3em;\n"]))),rn=function(){return Object(U.jsxs)(tn,{children:[Object(U.jsx)(X,{}),Object(U.jsx)(en,{})]})},cn=t(5),an="contributions",on=["contributions","stared","following","followers","forked","issues","pullRequests"],bn=t(6),sn=t.n(bn),jn=t(12),un=t(13),ln=t.n(un),dn="https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/graphql",On=function(n){return"\nquery getUserRankingQuery($rankingCriteria: String, $rankingPage: Int, $rankingCount: Int, $generation: Int) {\n  ranking(criteria: $rankingCriteria, page: $rankingPage, count: $rankingCount, generation : $generation){\n      name\n      generation\n      nickname\n      bio\n      public_repos\n      avatar_url\n      ".concat(n,"\n  }\n}\n\n")},mn=function(n,e){return{rankingCriteria:n,rankingCount:100,rankingPage:1,generation:e}},gn=function(){var n=Object(jn.a)(sn.a.mark((function n(e,t){var r;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ln()({method:"POST",url:dn,data:{query:On(e),variables:mn(e,t)}});case 2:if((r=n.sent).data.data.ranking){n.next=5;break}return n.abrupt("return",[]);case 5:return n.abrupt("return",r.data.data.ranking);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),xn=function(){var n=Object(jn.a)(sn.a.mark((function n(){var e;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ln()({method:"POST",url:dn,data:{query:"\nquery getGenerationListQuery{\n  generation{\n    _id\n    count\n  }\n}\n",variables:{}}});case 2:return e=n.sent,n.abrupt("return",e.data.data.generation);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),hn=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},pn=Q.b.a(s||(s=Object(J.a)(["\n  display: block;\n  width: 8em;\n  position: relative;\n  margin : 0 0 4rem 0;\n  cursor : pointer;\n  &:hover {\n    font-weight: 600;\n  }\n  ","\n"])),(function(n){return n.selected!==n.text?Object(Q.a)(j||(j=Object(J.a)([""]))):Object(Q.a)(u||(u=Object(J.a)(["\n    font-weight: 600;\n  "])))})),fn=function(n){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(pn,{onClick:function(){return n.onClickEvent(n.text)},selected:n.selected,text:n.text,children:hn(n.text)})})},kn=Q.b.ul(l||(l=Object(J.a)(["\n  display: inline-block;\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n  right: 0;\n"]))),vn=Q.b.li(d||(d=Object(J.a)(["\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n"]))),yn=function(n){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(kn,{children:T.a.Children.map(on,(function(e){return Object(U.jsx)(vn,{children:Object(U.jsx)(fn,{text:e,onClickEvent:n.onClickEvent,selected:n.selected})})}))})})},wn=Q.b.th(O||(O=Object(J.a)(["\n  padding: 1.2rem 2rem 1.2rem 1rem;\n  text-align : ","\n"])),(function(n){return"Profile"===n.text?"center":"left"})),Cn=Q.b.span(m||(m=Object(J.a)(["\n  font-size: 1.15em;\n"]))),Fn=function(n){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(wn,{text:n.text,children:Object(U.jsx)(Cn,{children:n.text})})})},_n=Q.b.tr(g||(g=Object(J.a)([""]))),In=function(n){var e=["   ","Name",hn(n.criteria),"Profile","Bio"];return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("thead",{children:Object(U.jsx)(_n,{children:T.a.Children.map(e,(function(n){return Object(U.jsx)(Fn,{text:n})}))})})})},Sn=Q.b.td(x||(x=Object(J.a)(["\n  border-bottom: 0.1rem solid #e1e1e1;\n  padding: 1.2rem 1.4rem 1.2rem 1rem;\n"]))),En=Q.b.p(h||(h=Object(J.a)(["\n  margin-bottom : 0;\n"]))),zn=Q.b.p(p||(p=Object(J.a)(["\n  margin-top : 0.2em;\n  color: #666666;\n  font-size : 80%;\n"]))),Gn=function(n){return Object(U.jsxs)(Sn,{children:[Object(U.jsx)(En,{children:n.bio||"\ud604\uc7ac bio\uac00 \ub4f1\ub85d\ub418\uc5b4\uc788\uc9c0 \uc54a\uc544\uc694!"}),Object(U.jsxs)(zn,{children:[n.public_repos," public_repos"]})]})},Pn=Q.b.td(f||(f=Object(J.a)(["\n  border-bottom: 0.1rem solid #e1e1e1;\n  padding: 1.2rem 1.5rem 1.2rem 1rem;\n"]))),$n=Q.b.a(k||(k=Object(J.a)(["\n  text-decoration: none;\n"]))),qn=Q.b.p(v||(v=Object(J.a)(["\n  margin-bottom: 0;\n  color: #db7770;\n  font-weight: 800;\n"]))),Bn=Q.b.td(y||(y=Object(J.a)(["\n  color: #666666;\n  font-size: 1rem;\n"]))),Rn=function(n){return Object(U.jsx)(Pn,{children:Object(U.jsxs)($n,{href:n.link,children:[Object(U.jsx)(qn,{children:n.name}),Object(U.jsxs)(Bn,{children:[n.generation,"\uae30"]})]})})},Mn=Q.b.td(w||(w=Object(J.a)(["\n  border-bottom: 0.1rem solid #e1e1e1;\n  padding: 1.2rem 1.4rem 1.2rem 1rem;\n"]))),Dn=function(n){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(Mn,{children:n.content})})},Tn=Q.b.td(C||(C=Object(J.a)(["\n  border-bottom: 0.1rem solid #e1e1e1;\n  padding: 1.2rem 1.5rem 1.2rem 1rem;\n"]))),Ln=Q.b.img(F||(F=Object(J.a)(["\n  border-radius: 50%;\n  height : 100px;\n  width : 100px;\n"]))),Hn=function(n){var e;return Object(U.jsx)(Tn,{children:Object(U.jsx)(Ln,{src:null!==(e=n.link)&&void 0!==e?e:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"})})},Jn=Q.b.tbody(_||(_=Object(J.a)([""]))),Qn=Q.b.tr(I||(I=Object(J.a)(["\n  padding: 1.4rem 0rem 1.4rem 0rem;\n"]))),Un=function(n){var e=n.rankings;return Object(U.jsx)(Jn,{children:e.map((function(e,t){return Object(U.jsxs)(Qn,{children:[Object(U.jsx)(Dn,{content:t+1}),Object(U.jsx)(Rn,{name:"".concat(e.name,"(").concat(e.nickname,")"),generation:e.generation,link:"https://github.com/".concat(e.nickname)}),Object(U.jsx)(Dn,{content:e[n.criteria]}),Object(U.jsx)(Hn,{link:e.avatar_url}),Object(U.jsx)(Gn,{bio:e.bio,public_repos:e.public_repos})]})}))})},An=Q.b.a(S||(S=Object(J.a)(["\n  display: block;\n  width: 8em;\n  position: relative;\n  margin: 0 0 4rem 0;\n  cursor: pointer;\n  &:hover {\n    font-weight: 600;\n  }\n  ","\n"])),(function(n){return n.selected!==n.text?Object(Q.a)(E||(E=Object(J.a)([""]))):Object(Q.a)(z||(z=Object(J.a)(["\n          font-weight: 600;\n        "])))})),Nn=function(n){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(An,{onClick:function(){return n.onClickEvent(n.generationInform._id)},selected:n.selected,text:n.generationInform._id,children:0!==n.generationInform._id?"".concat(n.generationInform._id,"\uae30 (").concat(n.generationInform.count,"\uba85)"):"\uc804\uccb4 \uae30\uc218"})})},Kn=Q.b.ul(G||(G=Object(J.a)(["\n  display: inline-block;\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n"]))),Vn=Q.b.li(P||(P=Object(J.a)(["\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n"]))),Wn=function(n){var e=Object(D.useState)([]),t=Object(cn.a)(e,2),r=t[0],i=t[1];return Object(D.useEffect)((function(){xn().then((function(n){n.unshift({_id:0,count:0}),i(n)}))}),[]),Object(U.jsx)(Kn,{children:r.map((function(e){return Object(U.jsx)(Vn,{children:Object(U.jsx)(Nn,{generationInform:e,onClickEvent:n.onClickEvent,selected:n.selected})})}))})},Xn=Q.b.main($||($=Object(J.a)(["\n  font-family: SeoulHangangM;\n\n  max-width: 75em;\n  width: 100%;\n  display: flex;\n  margin: 0 auto;\n  padding-top: 30px;\n  font-size: 1.08em;\n"]))),Yn=Q.b.nav(q||(q=Object(J.a)(["\n  position: sticky;\n  display: flex;\n  top: 100px;\n  margin-top: 4rem;\n  height: 525px;\n  width: 20em;\n  margin-left: -3em;\n"]))),Zn=Q.b.section(B||(B=Object(J.a)(["\n  display: block;\n  width: 80%;\n  padding-left: 3em;\n  margin: 0 auto;\n"]))),ne=Q.b.table(R||(R=Object(J.a)(["\n  text-align: left;\n"]))),ee=Q.b.div(M||(M=Object(J.a)(["\n  position: absolute;\n  right 0;\n  top : -1em;\n  background-color : #DB7770;\n  color : #DB7770;\n  width: 20px;\n  border-radius : 30px;\n  padding-bottom : 35rem;\n"]))),te=function(){var n=Object(D.useState)(an),e=Object(cn.a)(n,2),t=e[0],r=e[1],i=Object(D.useState)(0),c=Object(cn.a)(i,2),a=c[0],o=c[1],b=Object(D.useState)([]),s=Object(cn.a)(b,2),j=s[0],u=s[1];return Object(D.useEffect)((function(){gn(t,a).then((function(n){u(n)}))}),[t,a]),Object(U.jsxs)(Xn,{children:[Object(U.jsxs)(Yn,{children:[Object(U.jsx)(Wn,{onClickEvent:function(n){o(n)},selected:a}),Object(U.jsx)(yn,{onClickEvent:function(n){r(n)},selected:t}),Object(U.jsx)(ee,{})]}),Object(U.jsx)(Zn,{children:Object(U.jsxs)(ne,{children:[Object(U.jsx)(In,{criteria:t}),Object(U.jsx)(Un,{rankings:j,criteria:t})]})})]})},re=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(rn,{}),Object(U.jsx)(te,{}),Object(U.jsx)("footer",{})]})};var ie=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(re,{})})},ce=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};H.a.render(Object(U.jsx)(T.a.StrictMode,{children:Object(U.jsx)(ie,{})}),document.getElementById("root")),ce()},9:function(n,e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.e882b3e4.chunk.js.map