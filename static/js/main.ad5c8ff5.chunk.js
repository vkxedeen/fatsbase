(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),l=n.n(r),i=n(7),c=n(8),u=n(10),m=n(2),s=n(9),d=n(34),f=n(35),h=n(36),g=n(6),p=Object(g.a)({data:null,signInFormShown:!1,menuFormShown:!1}),b=n(20),v=n.n(b);function E(e,t){v.a.chart(e,{chart:{animation:!1,height:60,width:5*(t.sF+t.mUF+t.omega6+t.omega3+2.5),type:"bar",title:null},title:{text:null},tooltip:{outside:!0,followPointer:!0,headerFormat:null,pointFormat:"<br/>{series.name}: <b>{point.y}%</b><br/>",hideDelay:0},xAxis:{tickPositions:[],lineWidth:0},yAxis:{title:{text:null},startOnTick:!1,endOnTick:!1,tickPositions:[]},legend:{enabled:!1},plotOptions:{series:{animation:!1,stacking:"normal",dataLabels:{enabled:!0,align:"center",color:"#000000"},maxPointWidth:25}},series:[{name:"Omega 6",data:[t.omega6]},{name:"Omega 3",data:[t.omega3]},{name:"Monounsaturated fats",data:[t.mUF]},{name:"Saturated fats",data:[t.sF]}],navigation:{buttonOptions:{enabled:!1}},credits:{enabled:!1}})}function y(e){return(e.sF+e.mUF>=95?e.fireP:.87*e.fireP)>=200}var k=Object(g.a)({inputValue:void 0,sort:null,fryChecked:!1,vegChecked:!1,sortDirection:!0});function O(e){k.sort=e}var C=n(33),F=Object(g.b)(function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){E(this.elem,this.props.item)}},{key:"componentDidUpdate",value:function(){E(this.elem,this.props.item)}},{key:"componentWillUnmount",value:function(){this.elem.remove()}},{key:"render",value:function(){var e=this,t=this.props.item.name;return o.a.createElement("div",null,o.a.createElement(C.a,{to:"/".concat(t)},t),o.a.createElement("div",{ref:function(t){return e.elem=t}}))}}]),t}(o.a.Component)),w=n(12);var j=Object(g.b)(function(){var e=p.data,t=k.inputValue,n=k.sortDirection,a=k.fryChecked,r=k.vegChecked,l=k.sort;if(e){var i=w.c(w.a(function(e){if(!e)return function(e){return e};var t=new RegExp(e.toLowerCase());return function(e){return t.test(e.name.toLowerCase())}}(t)),w.a(function(e,t){return e&&t?function(e){return!0===e.isVegeterian&&!0===y(e)&&!0===e.isSelect}:e?function(e){return!0===y(e)&&!0===e.isSelect}:t?function(e){return!0===e.isVegeterian&&!0===e.isSelect}:function(e){return!0===e.isSelect}}(a,r)),w.d(function(e,t){return e?function(e,n){return e[t]-n[t]}:function(e,n){return n[t]-e[t]}}(n,l)),w.b(function(e){return o.a.createElement(F,{item:e,key:function(e){for(var t="",n=0;n<e.length;n++)t+=+e.charCodeAt(n);return t}(e.name)})}))(e);return o.a.createElement("div",{id:"container"},o.a.createElement("p",null,o.a.createElement("b",null,"Find:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",size:"40",defaultValue:t,onChange:function(e){return t=e.target.value,void(k.inputValue=t);var t}})),o.a.createElement("p",null,"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u043f\u043e",o.a.createElement("select",{value:n,onChange:function(){k.sortDirection=!k.sortDirection}},o.a.createElement("option",{value:!0},"\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"),o.a.createElement("option",{value:!1},"\u0423\u0431\u044b\u0432\u0430\u043d\u0438\u044e")),o.a.createElement("input",{type:"checkbox",id:"frying",checked:a,onChange:function(){k.fryChecked=!k.fryChecked}}),o.a.createElement("label",{htmlFor:"frying"},"Frying frendly"),o.a.createElement("input",{type:"checkbox",id:"vegeterian",checked:r,onChange:function(){k.vegChecked=!k.vegChecked}}),o.a.createElement("label",{htmlFor:"vegeterian"},"Vegeterian"),o.a.createElement("br",null)),o.a.createElement("p",null,o.a.createElement("input",{type:"radio",id:"sf",name:"sort",onChange:function(){return O("sF")}}),o.a.createElement("label",{htmlFor:"sF"},"Saturated fats"),o.a.createElement("input",{type:"radio",id:"mUF",name:"sort",onChange:function(){return O("mUF")}}),o.a.createElement("label",{htmlFor:"mUF"},"Monounsaturated fats"),o.a.createElement("input",{type:"radio",id:"om3",name:"sort",onChange:function(){return O("omega3")}}),o.a.createElement("label",{htmlFor:"om3"},"Omega 3"),o.a.createElement("input",{type:"radio",id:"om6",name:"sort",onChange:function(){return O("omega6")}}),o.a.createElement("label",{htmlFor:"om6"},"Omega 6")),i)}return o.a.createElement("div",null,"Loading...")});function S(e){return o.a.createElement("div",null,"Not Found")}var x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){n.setState(function(e){return{on:!e.on}})},n.state={on:Boolean(e.on)},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return(0,this.props.children)({on:this.state.on,toggle:this.toggle})}}]),t}(o.a.Component),D=Object(g.a)({name:null,password:null});var U=document.getElementById("modal"),V=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).el=document.createElement("div"),n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){U.appendChild(this.el),document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){U.removeChild(this.el),document.body.style.overflow="visible"}},{key:"render",value:function(){return l.a.createPortal(o.a.createElement("div",{className:"modal"},o.a.createElement("form",{onSubmit:function(e){return function(e){console.log("-------------Global states--------------"),console.log("Fats data:",p.data),console.log("Sign in modal window visibility:",p.signInFormShown),console.log("Menu modal window visibility:",p.menuFormShown),console.log("-------------Table states--------------"),console.log("Filtered by pattern:",k.inputValue),console.log("Sorting by:",k.sort),console.log("Is good for cooking:",k.fryChecked),console.log("Is vegeterian:",k.vegChecked),console.log("Sort direction:",k.sortDirection),console.log("-------------SignIn states--------------"),console.log("User name:",D.name),console.log("User password:",D.password),e.preventDefault()}(e)}},o.a.createElement("input",{type:"text",size:"40",defaultValue:D.name,onChange:function(e){return t=e.target.value,void(D.name=t);var t}}),o.a.createElement("div",null,"Password"),o.a.createElement("input",{type:"text",size:"40",defaultValue:D.password,onChange:function(e){return t=e.target.value,void(D.password=t);var t}}),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("button",{onClick:this.props.toggle},"Close")),this.el)}}]),t}(o.a.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){fetch("./data.json").then(function(e){return e.json()}).then(function(e){p.data=e.map(function(e){return e.isSelect=!0,e})}).catch(function(e){return console.log(e.message)})}},{key:"render",value:function(){return p.data?o.a.createElement("div",null,o.a.createElement(x,null,function(e){var t=e.on,n=e.toggle;return o.a.createElement("div",null,t&&o.a.createElement(V,{toggle:n}),o.a.createElement("button",{onClick:n},"Sign in"))}),o.a.createElement("button",{onClick:function(){p.menuFormShown=!p.menuFormShown}},"Menu"),o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(f.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:j}),o.a.createElement(h.a,{path:"/:name"}),"/>",o.a.createElement(h.a,{path:"*",component:S}))))):o.a.createElement("div",null,"Loading...")}}]),t}(o.a.Component),I=Object(g.b)(P);l.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.ad5c8ff5.chunk.js.map