(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t){},103:function(e,t){},136:function(e,t){},137:function(e,t){},184:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var i=n(7),a=n.n(i),r=n(83),o=n.n(r),s=(n(94),n(15)),c=n.n(s),d=n(30),l=n(84),u=n(85),v=n(87),h=n(86),p=n(88),f=n(13),m=(n(184),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(v.a)(this,Object(h.a)(t).call(this,e))).sortPredictions=function(e,t){return e.probability>t.probability?-1:t.probability>e.probability?1:0},n.detectFaces=Object(d.a)(c.a.mark(function e(){var t,i,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("detecting faces..."),e.next=3,f.c(n.videoRef).withFaceExpressions();case 3:(t=e.sent)&&(i=f.g(t.detection,{width:n.videoRef.clientWidth,height:n.videoRef.clientHeight}),t.expressions=t.expressions.sort(n.sortPredictions),n.canvasRef.height=n.videoRef.clientHeight,n.canvasRef.width=n.videoRef.clientWidth,a=new f.a(new f.b(i.box.x,i.box.y,i.box.width,i.box.height),t.expressions[0].expression.toString()),f.d(n.canvasRef,a,{withScore:!0}),n.setState({detectionsWithExpressions:t}));case 5:case"end":return e.stop()}},e)})),n.getStreamFromCamera=Object(d.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia(n.constraints);case 2:t=e.sent,n.videoRef.srcObject=t,console.log("stream has started");case 5:case"end":return e.stop()}},e)})),n.intervalHr=void 0,n.videoRef=void 0,n.canvasRef=void 0,n.constraints={audio:!1,video:{width:1280,height:720}},n.state={detectionsWithExpressions:void 0,bestPrediction:void 0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"video-container"},a.a.createElement("video",{ref:function(t){return e.videoRef=t},autoPlay:!0}),a.a.createElement("canvas",{ref:function(t){return e.canvasRef=t}}))),a.a.createElement("div",null,this.state.detectionsWithExpressions&&a.a.createElement("div",null,a.a.createElement("span",null,"Expression: ".concat(this.state.detectionsWithExpressions.expressions[0].expression," - ").concat((100*this.state.detectionsWithExpressions.expressions[0].probability).toFixed(2)," %"))))))}},{key:"componentDidMount",value:function(){var e=Object(d.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.f("/models");case 2:return e.next=4,f.e("/models");case 4:return e.next=6,this.getStreamFromCamera();case 6:this.intervalHr=setInterval(this.detectFaces,3e3);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalHr)}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){e.exports=n(185)},94:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.7a340d66.chunk.js.map