(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{1:function(t,e,a){t.exports={App:"style_App__3MUIh",title:"style_title__3oEQ0",timer:"style_timer__35Cgg",timerSection:"style_timerSection__xg6NA",timerSection__input:"style_timerSection__input__13jCl",timerSection__label:"style_timerSection__label__20uD5",iconSection:"style_iconSection__1tmRD",disabled:"style_disabled__3lUiL",disabledInput:"style_disabledInput__HGPw_",stopWatch:"style_stopWatch__Nbiir",alarm:"style_alarm__2f2bP",stopWatch__visibility:"style_stopWatch__visibility__1Uavb"}},11:function(t,e,a){t.exports=a(16)},16:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(6),s=a.n(c),l=a(2),o=a(7),r=a(8),u=a(10),m=a(9),p=a(3),d=a.n(p),h=a(4),_=a.n(h),I=a(1),b=a.n(I),f=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={hoursInput:0,minutesInput:0,secondsInput:0,editIcon:!0,intervalId:"",flag:!0,stopWatchVisibility:!1},t.stopAlarmBySpace=function(e){var a=t.state,n=a.stopWatchVisibility,i=a.secondsInput,c=a.editIcon;13!==e.which||n||t.handleEditIcon(),32===e.which&&n?t.hideStopWatch():32!==e.which||n||0===i||c||t.timerStart()},t.handleInputChange=function(e){var a=Number(e.target.value);a.length>2||("hoursInput"===e.target.name?t.setState({hoursInput:"".concat(a>99||a<0?99:parseInt(a,10))}):t.setState(Object(l.a)({},e.target.name,"".concat(a>59||a<0?59:parseInt(a,10)))))},t.handleEditIcon=function(){clearInterval(t.state.intervalId),t.setState({editIcon:!t.state.editIcon,flag:!0})},t.timerStart=function(){if(t.state.flag){var e=setInterval((function(){var e=t.state,a=e.secondsInput,n=e.minutesInput,i=e.hoursInput;a>0&&t.setState({secondsInput:a-1}),0===a&&n>0&&t.setState({secondsInput:59,minutesInput:n-1}),0===a&&0===n&&i>0&&t.setState({secondsInput:59,minutesInput:59,hoursInput:i-1}),document.title="".concat(t.state.stopWatchVisibility?document.title="TIME IS UP":document.title="".concat("".concat(i<=9?"0".concat(i):i),":","".concat(n<=9?"0".concat(n):n),":","".concat(a<=9?"0".concat(a):a))),0!==i||0!==n||0!==a||t.state.flag||(document.querySelector("audio").play(),t.setState({flag:!t.state.flag,stopWatchVisibility:!0}))}),1e3);t.setState({intervalId:e,flag:!t.state.flag})}else clearInterval(t.state.intervalId),t.setState({flag:!t.state.flag})},t.resetTimer=function(){clearInterval(t.state.intervalId),t.setState({hoursInput:0,minutesInput:0,secondsInput:0,editIcon:!0,flag:!0})},t.hideStopWatch=function(){document.querySelector("audio").pause(),document.title="Timer With Alarm",t.setState({stopWatchVisibility:!1}),t.resetTimer()},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("keypress",(function(e){return t.stopAlarmBySpace(e)}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.editIcon,n=e.secondsInput,c=e.minutesInput,s=e.hoursInput,o=e.flag,r=e.stopWatchVisibility;return i.a.createElement("div",{className:b.a.timer},i.a.createElement("section",{className:b.a.timerSection},i.a.createElement("input",{className:d()(b.a.timerSection__input,Object(l.a)({},b.a.disabledInput,!a)),type:"number",value:s<=9?"0".concat(s):s,onChange:function(e){return t.handleInputChange(e)},name:"hoursInput",disabled:!a}),i.a.createElement("label",{className:b.a.timerSection__label,htmlFor:"hours"},"Hours")),i.a.createElement("section",{className:b.a.timerSection},i.a.createElement("input",{className:d()(b.a.timerSection__input,Object(l.a)({},b.a.disabledInput,!a)),type:"number",value:c<=9?"0".concat(c):c,onChange:function(e){return t.handleInputChange(e)},name:"minutesInput",disabled:!a}),i.a.createElement("label",{className:b.a.timerSection__label,htmlFor:""},"Minutes")),i.a.createElement("section",{className:b.a.timerSection},i.a.createElement("input",{className:d()(b.a.timerSection__input,Object(l.a)({},b.a.disabledInput,!a)),type:"number",min:"0",max:"59",value:n<=9?"0".concat(n):n,onChange:function(e){return t.handleInputChange(e)},name:"secondsInput",disabled:!a}),i.a.createElement("label",{className:b.a.timerSection__label,htmlFor:""},"Seconds")),i.a.createElement("section",{className:b.a.iconSection},i.a.createElement("div",{onClick:r?null:this.handleEditIcon,className:d()(Object(l.a)({"fas fa-edit":!a,"fas fa-check":a},b.a.disabled,r))}),i.a.createElement("div",{className:d()(Object(l.a)({"fas fa-play":o,"fas fa-pause":!o},b.a.disabled,a||0===n&&0===s&&0===c)),onClick:a||0===n&&0===s&&0===c?null:this.timerStart}),i.a.createElement("div",{className:d()("fas fa-undo-alt",Object(l.a)({},b.a.disabled,r)),onClick:r?null:this.resetTimer})),i.a.createElement("div",{className:d()("fas fa-stopwatch",b.a.stopWatch,Object(l.a)({},b.a.stopWatch__visibility,r)),onClick:this.hideStopWatch}),i.a.createElement("audio",{loop:"loop"},i.a.createElement("source",{src:_.a,type:"audio/mpeg"}),i.a.createElement("source",{src:_.a,type:"audio/wav"}),i.a.createElement("source",{src:_.a,type:"audio/ogg"})))}}]),a}(i.a.Component);var v=function(){return i.a.createElement("div",{className:b.a.App},i.a.createElement("h1",{className:b.a.title},"TIMER"),i.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t,e,a){t.exports=a.p+"static/media/clockAlarm.e548390a.mp3"}},[[11,1,2]]]);
//# sourceMappingURL=main.646a4595.chunk.js.map