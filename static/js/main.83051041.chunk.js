(this["webpackJsonptwitch-vod-sync"]=this["webpackJsonptwitch-vod-sync"]||[]).push([[0],{14:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(12),r=a.n(s),o=(a(19),a(6)),l=a(2),c=a(3),h=a(1),d=a(5),u=a(4),p=(a(20),a(9));function v(e,t){for(var a=""+e;a.length<t;)a="0"+a;return a}function f(e){return e.getFullYear()+"-"+v(e.getMonth()+1,2)+"-"+v(e.getDate(),2)+" "+v(e.getHours(),2)+":"+v(e.getMinutes(),2)+":"+v(e.getSeconds(),2)}function m(e){var t=e.match(/(?:([0-9]+)h)?([0-9]+)m([0-9]+)s/);if(t)return t[1]?3600*Number(t[1])+60*Number(t[2])+Number(t[3]):60*Number(t[2])+Number(t[3]);throw Error("Invalid duration")}a(21);function y(e){return 1===e?"#aaf":2===e?"#faa":3===e?"#afa":4===e?"#aff":5===e?"#faf":"#ffa"}function g(e){if(0===e.videos.size)return n.a.createElement("div",{className:"timestamps"});var t=Array.from(e.videos.entries());t.sort((function(e,t){return e[0]-t[0]}));var a=new Date(Math.min.apply(Math,Object(o.a)(t.map((function(e){var t=Object(p.a)(e,2);t[0];return t[1].startDate.getTime()}))))),i=new Date(Math.max.apply(Math,Object(o.a)(t.map((function(e){var t=Object(p.a)(e,2),a=(t[0],t[1]);return a.startDate.getTime()+1e3*a.duration}))))),s=a.getTime(),r=i.getTime();var l=100/t.length,c=t.map((function(e,t){var a=Object(p.a)(e,2),i=a[0],o=a[1];return n.a.createElement("rect",{key:i,height:l+"%",y:l*t+"%",x:(o.startDate.getTime()-s)/(r-s)*100+"%",width:o.duration/(r-s)*1e3*100+"%",style:{fill:y(i)}})})),h=void 0;return e.currentPosition&&(h=n.a.createElement("rect",{height:"100%",width:"2px",x:(e.currentPosition.getTime()-s)/(r-s)*100+"%",style:{fill:"black"}})),n.a.createElement("div",{className:"timestamps",onClick:function(t){var a=t.clientX/window.innerWidth;e.onSeek(new Date(s+(r-s)*a))}},n.a.createElement("svg",{style:{width:"100%",position:"absolute",height:"100%"}},c,h),n.a.createElement("div",null,n.a.createElement("div",null,f(a)),n.a.createElement("div",null,e.currentPosition?f(e.currentPosition):void 0),n.a.createElement("div",null,f(i))))}var w=a(10),b=a.n(w),k=a(13),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).inputRef=void 0,i.handleSubmit=i.handleSubmit.bind(Object(h.a)(i)),i.inputRef=n.a.createRef(),i}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.inputRef.current){var t=this.inputRef.current.value,a=t.match(/^(?:https?:\/\/(?:www\.|m\.)?twitch\.tv\/videos\/)?([0-9]+)(?:\?.*)?$/);if(a){var i=Number(a[1]);console.log("Picked video: ",t," ",i),this.props.onVideoPicked(i)}else console.log("Wrong URL: ",t)}else console.error("No inputRef")}},{key:"render",value:function(){return n.a.createElement("div",{className:"picker"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",name:"video",ref:this.inputRef,placeholder:"Twitch video URL"}),n.a.createElement("input",{type:"submit",value:"Watch"})))}}]),a}(n.a.PureComponent),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).player=void 0,i.delayRef=void 0,i.state=i.initialState(),i.player=void 0,i.delayRef=n.a.createRef(),i.handleVideoPicked=i.handleVideoPicked.bind(Object(h.a)(i)),i.handleDelayChange=i.handleDelayChange.bind(Object(h.a)(i)),i.reset=i.reset.bind(Object(h.a)(i)),i}return Object(c.a)(a,[{key:"initialState",value:function(){return{delay:0}}},{key:"componentDidUpdate",value:function(e,t){if(this.props.state&&(this.props.state!==e.state||this.state.delay!==t.delay)&&this.player&&this.state.videoDate)if("paused"===this.props.state.state)this.player.pause(),this.player.seek((this.props.state.position.getTime()-this.state.videoDate.getTime())/1e3+this.state.delay);else if("playing"===this.props.state.state){var a=(new Date).getTime()/1e3+this.props.state.offset-this.state.videoDate.getTime()/1e3+this.state.delay;this.player.seek(a),this.player.play()}}},{key:"handleVideoPicked",value:function(){var e=Object(k.a)(b.a.mark((function e(t){var a,i,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({video:t}),e.next=3,fetch("https://api.twitch.tv/helix/videos?id="+t,{headers:{"Client-ID":this.props.clientId,Authorization:"Bearer "+this.props.accessToken}});case 3:if(200!==(a=e.sent).status){e.next=14;break}return e.next=7,a.json();case 7:i=e.sent,n=i.data[0],console.log("Got video date: ",n.created_at),s=new Date(n.created_at),r=m(n.duration),this.setState({videoDate:s,videoDuration:r}),this.props.setVideoInfo(this.props.id,{startDate:s,duration:r});case 14:this.player=new Twitch.Player("player"+this.props.id,{width:"100%",height:"100%",video:t,autoplay:!1}),console.log("Created player",this.player);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelayChange",value:function(e){var t;if(e.preventDefault(),null===(t=this.delayRef)||void 0===t?void 0:t.current){var a=Number(this.delayRef.current.value);isNaN(a)&&(a=0),this.setState({delay:a}),this.delayRef.current.value=""+a}}},{key:"reset",value:function(){this.setState({delay:0,video:void 0,videoDate:void 0,videoDuration:void 0}),this.props.setVideoInfo(this.props.id,void 0)}},{key:"render",value:function(){return this.state.video?n.a.createElement("div",{style:{width:this.props.width+"px",height:this.props.height+"px"}},n.a.createElement("div",{id:"player"+this.props.id,className:"player",style:{width:this.props.width+"px",height:this.props.height-35+"px"}}),n.a.createElement("div",{style:{height:"35px",display:"flex",justifyContent:"space-evenly"}},n.a.createElement("form",{onSubmit:this.handleDelayChange},"Delay:"," ",n.a.createElement("input",{type:"text",name:"delay",ref:this.delayRef,defaultValue:this.state.delay})," ",n.a.createElement("input",{type:"submit",value:"Set"})),n.a.createElement("input",{type:"button",onClick:this.reset,value:"Reset"}))):n.a.createElement("div",{style:{width:this.props.width+"px",height:this.props.height+"px"}},n.a.createElement(S,{onVideoPicked:this.handleVideoPicked}))}}]),a}(n.a.PureComponent),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).interval=void 0,i.state=i.initialState(),i.setVideoInfo=i.setVideoInfo.bind(Object(h.a)(i)),i.handlePlayerStateChange=i.handlePlayerStateChange.bind(Object(h.a)(i)),i.handleSeek=i.handleSeek.bind(Object(h.a)(i)),i.resized=i.resized.bind(Object(h.a)(i)),window.addEventListener("resize",i.resized),i}return Object(c.a)(a,[{key:"initialState",value:function(){var e=window.location.hash.match(/#access_token=([^&]+)/),t=null;return e&&e[1]&&(t=e[1],console.log("Got access token: ",t)),{accessToken:t,playerState:{state:"paused",position:new Date(1)},videos:new Map,width:window.innerWidth/2-6,height:window.innerHeight-20-6}}},{key:"componentDidMount",value:function(){this.interval=window.setInterval(this.computeCurrentPosition.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){void 0!==this.interval&&(window.clearInterval(this.interval),this.interval=void 0),window.removeEventListener("resize",this.resized)}},{key:"resized",value:function(){this.setState({width:window.innerWidth/2-6,height:window.innerHeight-20-6})}},{key:"setVideoInfo",value:function(e,t){var a=this;console.log("setVideoInfo: ",e,", ",t),this.setState((function(i){var n=new Map(i.videos);t?n.set(e,t):n.delete(e);var s=i.playerState;if(i.videos.size>0){var r=Array.from(i.videos.values()),l=Math.min.apply(Math,Object(o.a)(r.map((function(e){return e.startDate.getTime()})))),c=Math.max.apply(Math,Object(o.a)(r.map((function(e){return e.startDate.getTime()+1e3*e.duration}))));if("paused"===a.state.playerState.state)a.state.playerState.position.getTime()<l?s={state:"paused",position:new Date(l)}:a.state.playerState.position.getTime()>c&&(s={state:"paused",position:new Date(c)});else if("playing"===a.state.playerState.state){var h=(l-(new Date).getTime())/1e3,d=(c-(new Date).getTime())/1e3;a.state.playerState.offset<h?s={state:"playing",offset:h}:a.state.playerState.offset>d&&(s={state:"playing",offset:d})}}return{videos:n,playerState:s}}))}},{key:"handlePlayerStateChange",value:function(e,t){}},{key:"computeCurrentPosition",value:function(){this.setState((function(e){var t,a,i;if("paused"===(null===(t=e.playerState)||void 0===t?void 0:t.state))i=e.playerState.position;else{if("playing"!==(null===(a=e.playerState)||void 0===a?void 0:a.state))return{};i=new Date((new Date).getTime()+1e3*e.playerState.offset)}return{currentPosition:i}}))}},{key:"handleSeek",value:function(e){var t=(e.getTime()-(new Date).getTime())/1e3;this.setState({playerState:{state:"playing",offset:t}})}},{key:"render",value:function(){return this.state.accessToken?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement(D,{id:1,clientId:"r69vc9claq1m3n960hrkuszot4nx54",accessToken:this.state.accessToken,state:this.state.playerState,setVideoInfo:this.setVideoInfo,onChange:this.handlePlayerStateChange,width:this.state.width,height:this.state.height}),n.a.createElement(D,{id:2,clientId:"r69vc9claq1m3n960hrkuszot4nx54",accessToken:this.state.accessToken,state:this.state.playerState,setVideoInfo:this.setVideoInfo,onChange:this.handlePlayerStateChange,width:this.state.width,height:this.state.height})),n.a.createElement(g,{currentPosition:this.state.currentPosition,videos:this.state.videos,onSeek:this.handleSeek})):(setTimeout((function(){window.location.href="https://id.twitch.tv/oauth2/authorize?client_id=r69vc9claq1m3n960hrkuszot4nx54&redirect_uri=https://remram44.github.io/twitch-vod-sync/&response_type=token&scope="}),2e3),n.a.createElement("p",null,"Redirecting you to Twitch to authorize use of their API..."))}}]),a}(n.a.PureComponent);function j(){return n.a.createElement(E,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.83051041.chunk.js.map