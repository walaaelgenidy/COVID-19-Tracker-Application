(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__14pWe",card:"Cards_card__1ybHG",infected:"Cards_infected__1wzaK",recovered:"Cards_recovered__2LY-R",deaths:"Cards_deaths__3Mzso"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(71),d=a(72),m=a(80),p=a(81),f=a(225),v=a(229),h=a(226),b=a(227),E=a(30),y=a.n(E),g=a(31),x=a.n(g),C=a(13),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.lastUpdate,o=t.deaths;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,separator:",",duration:2.5})),r.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"number of active cases of COVIDE-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,separator:",",duration:2.5})),r.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"number of active cases of COVIDE-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:o.value,separator:",",duration:2.5})),r.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"number of active cases of COVIDE-19"))))):"Loading..."},w=a(29),j=a(32),k=a.n(j),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.lastUpdate,i=r.deaths,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(43),V=a(77),L=a.n(V),R=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(a),e()}),[]);var f=a?r.a.createElement(B.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;console.log(a,o,c);var v=m.length?r.a.createElement(B.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infacted",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgb(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:L.a.container},u?f:v)},A=a(230),J=a(228),U=a(78),Y=a.n(U),q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(A.a,{className:Y.a.formControl},r.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},z=a(44),G=a.n(z),M=a(79),P=a.n(M),H=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.container},r.a.createElement("img",{className:G.a.image,src:P.a,alt:"COVID-19"}),r.a.createElement(O,{data:t}),r.a.createElement(q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(R,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(H,null),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__3q9YJ",image:"App_image__3Bq32"}},77:function(e,t,a){e.exports={container:"Chart_container__26TYO"}},78:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2LQRo"}},79:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.c3de9aa3.chunk.js.map