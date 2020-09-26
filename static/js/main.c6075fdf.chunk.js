(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(56),o=a.n(c),s=(a(68),a(4)),l=a.n(s),i=a(11),u=a(12),d=a(13),f=a(15),p=a(14),m=(a(70),a(39)),h="https://covid19.mathdro.id/api",v="https://covid19.mathdro.id/api/daily";function E(){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function e(){var t,a,n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,fetch(v);case 8:return n=e.sent,e.next=11,n.json();case 11:return r=e.sent,c=r[r.length-1].confirmed.total,o=r[r.length-1].deaths.total,a=Object(m.a)(Object(m.a)({},a),{},{increase_confirmed:a.confirmed.value-c,increase_deaths:a.deaths.value-o}),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=a(189),x=a(193),O=a(191),k=a(192),w=a(16),D=a.n(w),S=(a(75),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.props;return r.a.createElement("div",{className:"container-m"},r.a.createElement(g.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(x.a,{className:"card-m infected"},r.a.createElement(O.a,null,r.a.createElement(k.a,{color:"textSecondary"},"Infected"),r.a.createElement(k.a,{align:"left"},"No. of cases confirmed:"),r.a.createElement(k.a,{align:"left"},r.a.createElement(D.a,{start:0,end:e.confirmed.value,separator:",",duration:2})," (+ ",r.a.createElement(D.a,{start:0,end:e.increase_confirmed,separator:","}),")"),r.a.createElement(k.a,{color:"textSecondary",align:"left"},"Last Updated: ",new Date(e.lastUpdate).toDateString()))),r.a.createElement(x.a,{className:"card-m deaths"},r.a.createElement(O.a,null,r.a.createElement(k.a,{color:"textSecondary"},"Deaths"),r.a.createElement(k.a,{align:"left"},"No. of cases confirmed:"),r.a.createElement(k.a,{align:"left"},r.a.createElement(D.a,{start:0,end:e.deaths.value,separator:",",duration:2})," (+ ",r.a.createElement(D.a,{start:0,end:e.increase_deaths,separator:","}),")"),r.a.createElement(k.a,{color:"textSecondary",align:"left"},"Last Updated: ",new Date(e.lastUpdate).toDateString()))),r.a.createElement(x.a,{className:"card-m recovered"},r.a.createElement(O.a,null,r.a.createElement(k.a,{color:"textSecondary"},"Recovered"),r.a.createElement(k.a,{align:"left"},"No. of cases confirmed:"),r.a.createElement(k.a,{align:"left"},r.a.createElement(D.a,{start:0,end:e.recovered.value,separator:",",duration:2})),r.a.createElement(k.a,{color:"textSecondary",align:"left"},"Last Updated: ",new Date(e.lastUpdate).toDateString())))))}}]),a}(n.Component)),N=a(61),C=(a(174),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={data:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"label_create",value:function(e){e.map((function(e){return console.log(e.reportDate)}))}},{key:"render",value:function(){if(null===this.state.data)return r.a.createElement("div",null);var e=r.a.createElement(N.Line,{data:{labels:this.state.data.map((function(e){return e.reportDate})),datasets:[{data:this.state.data.map((function(e){return e.totalConfirmed})),label:"Infected",borderColor:"rgba(0,0,255,0.5)",fill:!1},{data:this.state.data.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"rgba(255,0,0,0.5)",fill:!1}]}});return r.a.createElement("div",null,e)}}]),a}(n.Component)),U=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={df:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({df:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null==this.state.df?r.a.createElement("div",null):r.a.createElement("div",{className:"App"},r.a.createElement(S,{props:this.state.df}),r.a.createElement(C,null))}}]),a}(n.Component);o.a.render(r.a.createElement(U,null),document.getElementById("root"))},63:function(e,t,a){e.exports=a(175)},68:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.c6075fdf.chunk.js.map