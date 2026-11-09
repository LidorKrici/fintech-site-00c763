(()=>{var Nx=Object.defineProperty;var Ox=(r,t,e)=>t in r?Nx(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var zt=(r,t,e)=>Ox(r,typeof t!="symbol"?t+"":t,e);function nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function bp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qo={duration:.5,overwrite:!1,delay:0},Nh,mn,Fe,vi=1e8,we=1/vi,Eh=Math.PI*2,Ux=Eh/4,Fx=0,wp=Math.sqrt,Bx=Math.cos,zx=Math.sin,on=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},rr=function(t){return typeof t=="number"},Rl=function(t){return typeof t>"u"},ki=function(t){return typeof t=="object"},qn=function(t){return t!==!1},Oh=function(){return typeof window<"u"},xl=function(t){return We(t)||on(t)},Tp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,kx=/random\([^)]+\)/g,Gx=/,\s*/g,mp=/(?:-?\.?\d|\.)+/gi,Uh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fh=/[+-]=-?[.\d]+/,Vx=/[^,'"\[\]\s]+/gi,Hx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Bi,Ah,Bh,ri={},Ml={},Ep,Ap=function(t){return(Ml=qs(t,ri))&&bn},Pl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$o=function(t,e){return!e&&console.warn(t)},Cp=function(t,e){return t&&(ri[t]=e)&&Ml&&(Ml[t]=e)||ri},ta=function(){return 0},Wx={suppressEvents:!0,isStart:!0,kill:!1},vl={suppressEvents:!0,kill:!1},Xx={suppressEvents:!0},zh={},Pr=[],Ch={},Rp,Wn={},yh={},gp=30,yl=[],kh="",Gh=function(t){var e=t[0],n,i;if(ki(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=yl.length;i--&&!yl[i].targetTest(e););n=yl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Xh(t[i],n)))||t.splice(i,1);return t},Ir=function(t){return t._gsap||Gh(yi(t))[0]._gsap},Vh=function(t,e,n){return(n=t[e])&&We(n)?t[e]():Rl(n)&&t.getAttribute&&t.getAttribute(e)||n},Dn=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},hs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},qx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},bl=function(){var t=Pr.length,e=Pr.slice(0),n,i;for(Ch={},Pr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hh=function(t){return!!(t._initted||t._startAt||t.add)},Pp=function(t,e,n,i){Pr.length&&!mn&&bl(),t.render(e,n,i||!!(mn&&e<0&&Hh(t))),Pr.length&&!mn&&bl()},Ip=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Vx).length<2?e:on(t)?t.trim():t},Lp=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Yx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},qs=function(t,e){for(var n in e)t[n]=e[n];return t},_p=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ki(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},wl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Jo=function(t){var e=t.parent||ke,n=t.keyframes?Yx(Mn(t.keyframes)):si;if(qn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Zx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Dp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Il=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Lr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},as=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Jx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Rh=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(vl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Kx=function r(t){return!t||t._ts&&r(t.parent)},xp=function(t){return t._repeat?Ys(t._tTime,t=t.duration()+t._rDelay)*t:0},Ys=function(t,e){var n=Math.floor(t=ze(t/e));return t&&n===t?n-1:n},Tl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ll=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Dl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ll(t),n._dirty||as(n,t)),t},Np=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Tl(t.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),as(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},zi=function(t,e,n,i){return e.parent&&Lr(e),e._start=ze((rr(n)?n:!n&&El(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==ke?xi(t,n,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Dp(t,e,"_first","_last",t._sort?"_start":0),El(e)||(t._recent=e),i||Np(t,e),t._ts<0&&Dl(t,t._tTime),t},Op=function(t,e){return(ri.ScrollTrigger||Pl("scrollTrigger",e))&&ri.ScrollTrigger.create(e,t)},Up=function(t,e,n,i,s){if(Zh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Rp!==Xn.frame)return Pr.push(t),t._lazy=[s,i],1},jx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},El=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Qx=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&jx(t)&&!(!t._initted&&El(t))||(t._ts<0||t._dp._ts<0)&&!El(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=ra(0,t._tDur,e),u=Ys(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ys(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||mn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&Up(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Rh(t,e,n,!0),t._onUpdate&&!n&&ii(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ii(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Lr(t,1),!n&&!mn&&(ii(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},$x=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Zs=function(t,e,n,i){var s=t._repeat,o=ze(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ze(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Dl(t,t._tTime=t._tDur*a),t.parent&&Ll(t),n||as(t.parent,t),t},vp=function(t){return t instanceof Sn?as(t):Zs(t,t._dur)},tv={_start:0,endTime:ta,totalDuration:ta},xi=function r(t,e,n){var i=t.labels,s=t._recent||tv,o=t.duration()>=vi?s.endTime(!1):t._dur,a,l,c;return on(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ko=function(t,e,n){var i=rr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;o.immediateRender=qn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ze(e[0],o,e[s+1])},Dr=function(t,e){return t||t===0?e(t):e},ra=function(t,e,n){return n<t?t:n>e?e:n},gn=function(t,e){return!on(t)||!(e=Hx.exec(t))?"":e[1]},ev=function(t,e,n){return Dr(n,function(i){return ra(t,e,i)})},Ph=[].slice,Fp=function(t,e){return t&&ki(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ki(t[0]))&&!t.nodeType&&t!==Bi},nv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return on(i)&&!e||Fp(i,1)?(s=n).push.apply(s,yi(i)):n.push(i)})||n},yi=function(t,e,n){return Fe&&!e&&Fe.selector?Fe.selector(t):on(t)&&!n&&(Ah||!Js())?Ph.call((e||Bh).querySelectorAll(t),0):Mn(t)?nv(t,n):Fp(t)?Ph.call(t,0):t?[t]:[]},Ih=function(t){return t=yi(t)[0]||$o("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yi(e,n.querySelectorAll?n:n===t?$o("Invalid scope")||Bh.createElement("div"):t)}},Bp=function(t){return t.sort(function(){return .5-Math.random()})},zp=function(t){if(We(t))return t;var e=ki(t)?t:{each:t},n=ls(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return on(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||e).length,m=o[_],x,v,T,S,w,C,p,y,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,vi])[1],!M){for(p=-vi;p<(p=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],x=l?Math.min(M,_)*u-.5:i%M,v=M===vi?0:l?_*f/M-.5:i/M|0,p=0,y=vi,C=0;C<_;C++)T=C%M-x,S=v-(C/M|0),m[C]=w=c?Math.abs(c==="y"?S:T):wp(T*T+S*S),w>p&&(p=w),w<y&&(y=w);i==="random"&&Bp(m),m.max=p-y,m.min=y,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=gn(e.amount||e.each)||0,n=n&&_<0?mv(n):n}return _=(m[h]-m.min)/m.max||0,ze(m.b+(n?n(_):_)*m.v)+m.u}},Lh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ze(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(rr(n)?0:gn(n))}},kp=function(t,e){var n=Mn(t),i,s;return!n&&ki(t)&&(i=n=t.radius||vi,t.values?(t=yi(t.values),(s=!rr(t[0]))&&(i*=i)):t=Lh(t.increment)),Dr(e,n?We(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=vi,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:o,s||u===o||rr(o)?u:u+gn(o)}:Lh(t))},Gp=function(t,e,n,i){return Dr(Mn(t)?!e:n===!0?!!(n=0):!i,function(){return Mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},iv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},rv=function(t,e){return function(n){return t(parseFloat(n))+(e||gn(n))}},sv=function(t,e,n){return Hp(t,e,0,1,n)},Vp=function(t,e,n){return Dr(n,function(i){return t[~~e(i)]})},ov=function r(t,e,n){var i=e-t;return Mn(t)?Vp(t,r(0,t.length),e):Dr(n,function(s){return(i+(s-t)%i)%i+t})},av=function r(t,e,n){var i=e-t,s=i*2;return Mn(t)?Vp(t,r(0,t.length-1),e):Dr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ks=function(t){return t.replace(kx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Gx);return Gp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Hp=function(t,e,n,i,s){var o=e-t,a=i-n;return Dr(s,function(l){return n+((l-t)/o*a||0)})},lv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=on(t),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Mn(t)&&!Mn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=qs(Mn(t)?[]:{},t));if(!u){for(l in e)qh.call(a,t,l,"get",e[l]);s=function(g){return jh(g,a)||(o?t.p:t)}}}return Dr(n,s)},yp=function(t,e,n){var i=t.labels,s=vi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(t,e,n){var i=t.vars,s=i[e],o=Fe,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Pr.length&&bl(),a&&(Fe=a),u=l?s.apply(c,l):s.call(c),Fe=o,u},Yo=function(t){return Lr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&ii(t,"onInterrupt"),t},Xs,Wp=[],Xp=function(t){if(t)if(t=!t.name&&t.default||t,Oh()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ta,render:jh,add:qh,kill:Tv,modifier:wv,rawVars:0},o={targetTest:0,get:0,getSetter:Nl,aliases:{},register:0};if(Js(),t!==i){if(Wn[e])return;si(i,si(wl(t,s),o)),qs(i.prototype,qs(s,wl(t,o))),Wn[i.prop=e]=i,t.targetTest&&(yl.push(i),zh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Cp(e,i),t.register&&t.register(bn,i,Nn)}else Wp.push(t)},Ce=255,Zo={aqua:[0,Ce,Ce],lime:[0,Ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ce],navy:[0,0,128],white:[Ce,Ce,Ce],olive:[128,128,0],yellow:[Ce,Ce,0],orange:[Ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ce,0,0],pink:[Ce,192,203],cyan:[0,Ce,Ce],transparent:[Ce,Ce,Ce,0]},Sh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ce+.5|0},qp=function(t,e,n){var i=t?rr(t)?[t>>16,t>>8&Ce,t&Ce]:0:Zo.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zo[t])i=Zo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ce,i&Ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ce,t&Ce]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(mp),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Sh(l+1/3,s,o),i[1]=Sh(l,s,o),i[2]=Sh(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Uh),n&&i.length<4&&(i[3]=1),i}else i=t.match(mp)||Zo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Ce,o=i[1]/Ce,a=i[2]/Ce,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yp=function(t){var e=[],n=[],i=-1;return t.split(ir).forEach(function(s){var o=s.match(us)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Sp=function(t,e,n){var i="",s=(t+i).match(ir),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=qp(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Yp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ir,"1").split(us),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ir),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),cv=/hsl[a]?\(/,Wh=function(t){var e=t.join(" "),n;if(ir.lastIndex=0,ir.test(e))return n=cv.test(e),t[1]=Sp(t[1],n),t[0]=Sp(t[0],n,Yp(t[1])),!0},ea,Xn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var x=r()-i,v=m===!0,T,S,w,C;if((x>t||x<0)&&(n+=x-e),i+=x,w=i-n,T=w-o,(T>0||v)&&(C=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=T+(T>=s?0:s-T),S=1),v||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](w,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Ep&&(!Ah&&Oh()&&(Bi=Ah=window,Bh=Bi.document||{},ri.gsap=bn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(bn.version),Ap(Ml||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),Wp.forEach(Xp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ea=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ea=0,c=ta},lagSmoothing:function(m,x){t=m||1/0,e=Math.min(x||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,x,v){var T=x?function(S,w,C,p){m(S,w,C,p),f.remove(T)}:m;return f.remove(m),a[v?"unshift":"push"](T),Js(),T},remove:function(m,x){~(x=a.indexOf(m))&&a.splice(x,1)&&d>=x&&d--},_listeners:a},f})(),Js=function(){return!ea&&Xn.wake()},he={},uv=/^[\d.\-M][\d.\-,\s]/,hv=/["']/g,fv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(hv,"").trim():+c,i=l.substr(a+1).trim();return e},dv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},pv=function(t){var e=(t+"").split("("),n=he[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[fv(e[1])]:dv(t).split(",").map(Ip)):he._CE&&uv.test(t)?he._CE("",t):n},mv=function(t){return function(e){return 1-t(1-e)}},ls=function(t,e){return t&&(We(t)?t:he[t]||pv(t))||e},fs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Dn(t,function(a){he[a]=ri[a]=s,he[o=a.toLowerCase()]=n;for(var l in s)he[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=he[a+"."+l]=s[l]}),s},Zp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Mh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Eh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*zx((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Zp(a);return s=Eh/s,l.config=function(c,u){return r(t,c,u)},l},bh=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Zp(n);return i.config=function(s){return r(t,s)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;fs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});he.Linear.easeNone=he.none=he.Linear.easeIn;fs("Elastic",Mh("in"),Mh("out"),Mh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);fs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fs("Circ",function(r){return-(wp(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-Bx(r*Ux)+1});fs("Back",bh("in"),bh("out"),bh());he.SteppedEase=he.steps=ri.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*ra(0,o,a)|0)+s)*n}}};Qo.ease=he["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return kh+=r+","+r+"Params,"});var Xh=function(t,e){this.id=Fx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Vh,this.set=e?e.getSetter:Nl},na=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Zs(this,+e.duration,1,1),this.data=e.data,Fe&&(this._ctx=Fe,Fe.data.push(this)),ea||Xn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Dl(this,n),!s._dp||s.parent||Np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ys(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Tl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(ra(-Math.abs(this._delay),a,s),i!==!1),Ll(this),Jx(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Js(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==we,o;if(s)for(this._tTime-=we,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+we){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=ze(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Xx);var i=mn;return mn=n,Hh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(xi(this,n),qn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qn(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=We(n)?n:Lp,l=function(){var u=i.then;i.then=null,s&&s(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Yo(this)},r})();si(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var Sn=(function(r){bp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qn(n.sortChildren),ke&&zi(n.parent||ke,nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Op(nr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ko(0,arguments,this),this},e.from=function(i,s,o){return Ko(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ko(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Jo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ze(i,s,xi(this,o),1),this},e.call=function(i,s,o){return zi(this,Ze.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ze(i,o,xi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Jo(o).immediateRender=qn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Jo(a).immediateRender=qn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ze(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,x,v,T,S,w,C,p;if(this!==ke&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,S=this._start,T=this._ts,x=!T,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=ze(u%m),u===l?(_=this._repeat,h=c):(w=ze(u/m),_=~~w,_&&_===w&&(h=c,_--),h>c&&(h=c)),w=Ys(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),C&&_&1&&(h=c-h,p=1),_!==w&&!this._lock){var y=C&&w&1,M=y===(C&&_&1);if(_<w&&(y=!y),a=y?0:u%c?c:u,this._lock=1,this.render(a||(p?0:ze(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=$x(this,ze(a),ze(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!w&&(ii(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!x){v=0,g&&(u+=this._zTime=-we);break}}d=g}else{d=this._last;for(var b=i<0?i:h;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||mn&&Hh(d)),h!==this._time||!this._ts&&!x){v=0,g&&(u+=this._zTime=b?-we:we);break}}d=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-we)._zTime=h>=a?1:-1,this._ts))return this._start=S,Ll(this),this.render(i,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Lr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(rr(s)||(s=xi(this,s,i)),!(i instanceof na)){if(Mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(on(i))return this.addLabel(i,s);if(We(i))i=Ze.delayedCall(0,i);else return this}return this!==i?zi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ze?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return on(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&Il(this,i),i===this._recent&&(this._recent=this._last),as(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=xi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ze.delayedCall(0,s||ta,o);return a.data="isPause",this._hasPause=1,zi(this,a,xi(this,i))},e.removePause=function(i){var s=this._first;for(i=xi(this,i);s;)s._start===i&&s.data==="isPause"&&Lr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Rr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=yi(i),l=this._first,c=rr(s),u;l;)l instanceof Ze?qx(l._targets,a)&&(c?(!Rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=xi(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Ze.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Zs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,si({startAt:{time:xi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),yp(this,xi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),yp(this,xi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ze(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return as(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),as(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=vi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=ze(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Zs(o,o===ke&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ke._ts&&(Pp(ke,Tl(i,ke)),Rp=Xn.frame),Xn.frame>=gp){gp+=Yn.autoSleep||120;var s=ke._first;if((!s||!s._ts)&&Yn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},t})(na);si(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var gv=function(t,e,n,i,s,o,a){var l=new Nn(this._pt,t,e,0,1,Kh,null,s),c=0,u=0,f,h,d,g,_,m,x,v;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=Ks(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),h=n.match(vh)||[];f=vh.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?hs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=vh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Fh.test(i)||x)&&(l.e=0),this._pt=l,l},qh=function(t,e,n,i,s,o,a,l,c,u){We(i)&&(i=i(s||0,t,o));var f=t[e],h=n!=="get"?n:We(f)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=We(f)?c?Sv:Kp:Jh,g;if(on(i)&&(~i.indexOf("random(")&&(i=Ks(i)),i.charAt(1)==="="&&(g=hs(h,i)+(gn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Dh)return!isNaN(h*i)&&i!==""?(g=new Nn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?bv:jp,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Pl(e,i),gv.call(this,t,e,h,i,d,l||Yn.stringFilter,c))},_v=function(t,e,n,i,s){if(We(t)&&(t=jo(t,s,e,n,i)),!ki(t)||t.style&&t.nodeType||Mn(t)||Tp(t))return on(t)?jo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=jo(t[a],s,e,n,i);return o},Yh=function(t,e,n,i,s,o){var a,l,c,u;if(Wn[t]&&(a=new Wn[t]).init(s,a.rawVars?e[t]:_v(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Nn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Xs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Rr,Dh,Zh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,x=t.parent,v=x&&x.data==="nested"?x.vars.targets:m,T=t._overwrite==="auto"&&!Nh,S=t.timeline,w=i.easeReverse||f,C,p,y,M,b,R,P,U,D,z,G,O,Z;if(S&&(!h||!s)&&(s="none"),t._ease=ls(s,Qo.ease),t._rEase=w&&(ls(w)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||h&&!i.stagger){if(U=m[0]?Ir(m[0]).harness:0,O=U&&i[U.prop],C=wl(i,zh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?vl:Wx),_._lazy=0),o){if(Lr(t._startAt=Ze.set(m,si({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!d)&&t._startAt.revert(vl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),y=si({overwrite:!1,data:"isFromStart",lazy:a&&!_&&qn(l),immediateRender:a,stagger:0,parent:x},C),O&&(y[U.prop]=O),Lr(t._startAt=Ze.set(m,y)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(vl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&qn(l)||l&&!g,p=0;p<m.length;p++){if(b=m[p],P=b._gsap||Gh(m)[p]._gsap,t._ptLookup[p]=z={},Ch[P.id]&&Pr.length&&bl(),G=v===m?p:v.indexOf(b),U&&(D=new U).init(b,O||C,t,G,v)!==!1&&(t._pt=M=new Nn(t._pt,b,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(H){z[H]=M}),D.priority&&(R=1)),!U||O)for(y in C)Wn[y]&&(D=Yh(y,C,t,G,b,v))?D.priority&&(R=1):z[y]=M=qh.call(t,b,y,"get",C[y],G,v,0,i.stringFilter);t._op&&t._op[p]&&t.kill(b,t._op[p]),T&&t._pt&&(Rr=t,ke.killTweensOf(b,z,t.globalTime(e)),Z=!t.parent,Rr=0),t._pt&&l&&(Ch[P.id]=1)}R&&Qh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,h&&e<=0&&S.render(vi,!0,!0)},xv=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Dh=1,t.vars[e]="+=0",Zh(t,a),Dh=0,l?$o(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Xe(n)+gn(f.e)),f.b&&(f.b=u.s+gn(f.b))},vv=function(t,e){var n=t[0]?Ir(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=qs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},yv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},jo=function(t,e,n,i,s){return We(t)?t.call(e,n,i,s):on(t)&&~t.indexOf("random(")?Ks(t):t},Al=kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jp={};Dn(Al+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jp[r]=1});Al=Al.split(",");var Ze=(function(r){bp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Jo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,x=i.parent||ke,v=(Mn(n)||Tp(n)?rr(n[0]):"length"in i)?[n]:yi(n),T,S,w,C,p,y,M,b;if(a._targets=v.length?Gh(v):$o("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||xl(c)||xl(u)){i=a.vars;var R=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Sn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),T.kill(),T.parent=T._dp=nr(a),T._start=0,h||xl(c)||xl(u)){if(C=v.length,M=h&&zp(h),ki(h))for(p in h)~Al.indexOf(p)&&(b||(b={}),b[p]=h[p]);for(S=0;S<C;S++)w=wl(i,Jp),w.stagger=0,R&&(w.easeReverse=R),b&&qs(w,b),y=v[S],w.duration=+jo(c,nr(a),S,y,v),w.delay=(+jo(u,nr(a),S,y,v)||0)-a._delay,!h&&C===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),T.to(y,w,M?M(S,y,v):0),T._ease=he.none;T.duration()?c=u=0:a.timeline=0}else if(g){Jo(si(T.vars.defaults,{ease:"none"})),T._ease=ls(g.ease||i.ease||"none");var P=0,U,D,z;if(Mn(g))g.forEach(function(G){return T.to(v,G,">")}),T.duration();else{w={};for(p in g)p==="ease"||p==="easeEach"||yv(p,g[p],w,g.easeEach);for(p in w)for(U=w[p].sort(function(G,O){return G.t-O.t}),P=0,S=0;S<U.length;S++)D=U[S],z={ease:D.e,duration:(D.t-(S?U[S-1].t:0))/100*c},z[p]=D.v,T.to(v,z,P),P+=z.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return d===!0&&!Nh&&(Rr=nr(a),ke.killTweensOf(v),Rr=0),zi(x,nr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===ze(x._time)&&qn(f)&&Kx(nr(a))&&x.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-u)||0)),m&&Op(nr(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-we&&!u?l:i<we?0:i,h,d,g,_,m,x,v,T;if(!c)Qx(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=ze(f%_),f===l?(g=this._repeat,h=c):(m=ze(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),x=this._yoyo&&g&1,x&&(h=c-h),m=Ys(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!x&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(ze(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Up(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var w=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(ii(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Rh(this,i,s,o),ii(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Rh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Lr(this,1),!s&&!(u&&!a)&&(f||a||x)&&(ii(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ea||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Zh(this,c),u=this._ease(c/this._dur),xv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Dl(this,0),this.parent||Dp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Rr&&Rr.vars.overwrite!==!0)._first||Yo(this),this.parent&&o!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yi(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,x;if((!s||s==="all")&&Zx(a,l))return s==="all"&&(this._pt=0),Yo(this);for(f=this._op=this._op||[],s!=="all"&&(on(s)&&(_={},Dn(s,function(v){return _[v]=1}),s=_),s=vv(a,s)),x=a.length;x--;)if(~l.indexOf(a[x])){h=c[x],s==="all"?(f[x]=s,g=h,d={}):(d=f[x]=f[x]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Il(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Yo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ko(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ko(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ke.killTweensOf(i,s,o)},t})(na);si(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(r){Ze[r]=function(){var t=new Sn,e=Ph.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Jh=function(t,e,n){return t[e]=n},Kp=function(t,e,n){return t[e](n)},Sv=function(t,e,n,i){return t[e](i.fp,n)},Mv=function(t,e,n){return t.setAttribute(e,n)},Nl=function(t,e){return We(t[e])?Kp:Rl(t[e])&&t.setAttribute?Mv:Jh},jp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},bv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Kh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},jh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},wv=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Tv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Il(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ev=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Qh=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Nn=(function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||jp,this.d=l||this,this.set=c||Jh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ev,this.m=n,this.mt=s,this.tween=i},r})();Dn(kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return zh[r]=1});ri.TweenMax=ri.TweenLite=Ze;ri.TimelineLite=ri.TimelineMax=Sn;ke=new Sn({sortChildren:!1,defaults:Qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=Wh;var cs=[],Sl={},Av=[],Mp=0,Cv=0,wh=function(t){return(Sl[t]||Av).map(function(e){return e()})},ia=function(){var t=Date.now(),e=[];t-Mp>2&&(wh("matchMediaInit"),cs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Bi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),wh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mp=t,wh("matchMedia"))},Qp=(function(){function r(e,n){this.selector=n&&Ih(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Cv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){We(n)&&(s=i,i=n,n=We);var o=this,a=function(){var c=Fe,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ih(s)),Fe=o,f=i.apply(o,arguments),We(f)&&o._r.push(f),Fe=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Fe;Fe=null,n(this),Fe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ze)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=cs.length;o--;)cs[o].id===this.id&&cs.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ia):a.removeEventListener("change",ia)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),Rv=(function(){function r(e){this.contexts=[],this.scope=e,Fe&&Fe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ki(n)||(n={matches:n});var o=new Qp(0,s||this.scope),a=o.conditions={},l,c,u;Fe&&!o.selector&&(o.selector=Fe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Bi.matchMedia(n[c]),l&&(cs.indexOf(o)<0&&cs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ia):l.addEventListener("change",ia),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Cl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Xp(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,n,i){on(t)&&(t=yi(t)[0]);var s=Ir(t||{}).get,o=n?Lp:Ip;return n==="native"&&(n=""),t&&(e?o((Wn[e]&&Wn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Wn[a]&&Wn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yi(t),t.length>1){var i=t.map(function(u){return bn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=Wn[e],a=Ir(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;Xs._pt=0,f.init(t,n?u+n:u,Xs,0,[t]),f.render(1,f),Xs._pt&&jh(1,Xs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=bn.to(t,si((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ls(t.ease,Qo.ease)),_p(Qo,t||{})},config:function(t){return _p(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wn[a]&&!ri[a]&&$o(e+" effect requires "+a+" plugin.")}),yh[e]=function(a,l,c){return n(yi(a),si(l||{},s),c)},o&&(Sn.prototype[e]=function(a,l,c){return this.add(yh[e](a,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){he[t]=ls(e)},parseEase:function(t,e){return arguments.length?ls(t,e):he},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=qn(t.smoothChildTiming),ke.remove(n),n._dp=0,n._time=n._tTime=ke._time,i=ke._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ze&&i.vars.onComplete===i._targets[0]))&&zi(n,i,i._start-i._delay),i=s;return zi(ke,n,0),n},context:function(t,e){return t?new Qp(t,e):Fe},matchMedia:function(t){return new Rv(t)},matchMediaRefresh:function(){return cs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ia()},addEventListener:function(t,e){var n=Sl[t]||(Sl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Sl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:ov,wrapYoyo:av,distribute:zp,random:Gp,snap:kp,normalize:sv,getUnit:gn,clamp:ev,splitColor:qp,toArray:yi,selector:Ih,mapRange:Hp,pipe:iv,unitize:rv,interpolate:lv,shuffle:Bp},install:Ap,effects:yh,ticker:Xn,updateRoot:Sn.updateRoot,plugins:Wn,globalTimeline:ke,core:{PropTween:Nn,globals:Cp,Tween:Ze,Timeline:Sn,Animation:na,getCache:Ir,_removeLinkedListItem:Il,reverting:function(){return mn},context:function(t){return t&&Fe&&(Fe.data.push(t),t._ctx=Fe),Fe},suppressOverwrites:function(t){return Nh=t}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Cl[r]=Ze[r]});Xn.add(Sn.updateRoot);Xs=Cl.to({},{duration:0});var Pv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Iv=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Pv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Th=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(on(s)&&(l={},Dn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Iv(a,s)}}}},bn=Cl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Th("roundProps",Lh),Th("modifiers"),Th("snap",kp))||Cl;Ze.version=Sn.version=bn.version="3.15.1";Ep=1;Oh()&&Js();var Lv=he.Power0,Dv=he.Power1,Nv=he.Power2,Ov=he.Power3,Uv=he.Power4,Fv=he.Linear,Bv=he.Quad,zv=he.Cubic,kv=he.Quart,Gv=he.Quint,Vv=he.Strong,Hv=he.Elastic,Wv=he.Back,Xv=he.SteppedEase,qv=he.Bounce,Yv=he.Sine,Zv=he.Expo,Jv=he.Circ;var $p,Nr,Qs,sf,gs,Kv,tm,of,jv=function(){return typeof window<"u"},or={},ms=180/Math.PI,$s=Math.PI/180,js=Math.atan2,em=1e8,af=/([A-Z])/g,Qv=/(left|right|width|margin|padding|x)/i,$v=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ty=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ey=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ny=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},iy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},cm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},um=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ry=function(t,e,n){return t.style[e]=n},sy=function(t,e,n){return t.style.setProperty(e,n)},oy=function(t,e,n){return t._gsap[e]=n},ay=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ly=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},cy=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ge="transform",Zn=Ge+"Origin",uy=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in or&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Gi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=sr(i,a)}):this.tfm[t]=o.x?o[t]:sr(i,t),t===Zn&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ge)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zn,e,"")),t=Ge}(s||e)&&this.props.push(t,e,s[t])},hm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},hy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(af,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=of(),(!s||!s.isStart)&&!n[Ge]&&(hm(n),i.zOrigin&&n[Zn]&&(n[Zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},fm=function(t,e){var n={target:t,props:[],revert:hy,save:uy};return t._gsap||bn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},dm,ef=function(t,e){var n=Nr.createElementNS?Nr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Nr.createElement(t);return n&&n.style?n:Nr.createElement(t)},oi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(af,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,to(e)||e,1)||""},nm="O,Moz,ms,Ms,Webkit".split(","),to=function(t,e,n){var i=e||gs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(nm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?nm[o]:"")+t},nf=function(){jv()&&window.document&&($p=window,Nr=$p.document,Qs=Nr.documentElement,gs=ef("div")||{style:{}},Kv=ef("div"),Ge=to(Ge),Zn=Ge+"Origin",gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dm=!!to("perspective"),of=bn.core.reverting,sf=1)},im=function(t){var e=t.ownerSVGElement,n=ef("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Qs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Qs.removeChild(n),s},rm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},pm=function(t){var e,n;try{e=t.getBBox()}catch{e=im(t),n=1}return e&&(e.width||e.height)||n||(e=im(t)),e&&!e.width&&!e.x&&!e.y?{x:+rm(t,["x","cx","x1"])||0,y:+rm(t,["y","cy","y1"])||0,width:0,height:0}:e},mm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&pm(t))},Ur=function(t,e){if(e){var n=t.style,i;e in or&&e!==Zn&&(e=Ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(af,"-$1").toLowerCase())):n.removeAttribute(e)}},Or=function(t,e,n,i,s,o){var a=new Nn(t._pt,e,n,0,1,o?um:cm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},sm={deg:1,rad:1,turn:1},fy={grid:1,flex:1},Fr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=gs.style,l=Qv.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,x;if(i===o||!s||sm[i]||sm[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),x=t.getCTM&&mm(t),(d||o==="%")&&(or[e]||~e.indexOf("adius")))return g=x?t.getBBox()[l?"width":"height"]:t[u],Xe(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,x&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Nr||!_.appendChild)&&(_=Nr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Xn.time&&!m.uncache)return Xe(s/m.width*f);if(d&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=f+i,g=t[u],v?t.style[e]=v:Ur(t,e)}else(d||o==="%")&&!fy[oi(_,"display")]&&(a.position=oi(t,"position")),_===t&&(a.position="static"),_.appendChild(gs),g=gs[u],_.removeChild(gs),a.position="absolute";return l&&d&&(m=Ir(_),m.time=Xn.time,m.width=_[u]),Xe(h?g*s/f:g&&s?f/g*s:0)},sr=function(t,e,n,i){var s;return sf||nf(),e in Gi&&e!=="transform"&&(e=Gi[e],~e.indexOf(",")&&(e=e.split(",")[0])),or[e]&&e!=="transform"?(s=aa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ul(oi(t,Zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ol[e]&&Ol[e](t,e,n)||oi(t,e)||Vh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fr(t,e,s,n)+n:s},dy=function(t,e,n,i){if(!n||n==="none"){var s=to(e,t,1),o=s&&oi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new Nn(this._pt,t.style,e,0,1,Kh),l=0,c=0,u,f,h,d,g,_,m,x,v,T,S,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=oi(t,e)||i,_?t.style[e]=_:Ur(t,e)),u=[n,i],Wh(u),n=u[0],i=u[1],h=n.match(us)||[],w=i.match(us)||[],w.length){for(;f=us.exec(i);)m=f[0],v=i.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=hs(d,m)+S),x=parseFloat(m),T=m.substr((x+"").length),l=us.lastIndex-T.length,T||(T=T||Yn.units[e]||S,l===i.length&&(i+=T,a.e+=T)),S!==T&&(d=Fr(t,e,_,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:x-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?um:cm;return Fh.test(i)&&(a.e=0),this._pt=a,a},om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},py=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=om[n]||n,e[1]=om[i]||i,e.join(" ")},my=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],or[a]&&(l=1,a=a==="transformOrigin"?Zn:Ge),Ur(n,a);l&&(Ur(n,Ge),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",aa(n,1),o.uncache=1,hm(i)))}},Ol={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Nn(t._pt,e,n,0,0,my);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},oa=[1,0,0,1,0,0],gm={},_m=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},am=function(t){var e=oi(t,Ge);return _m(e)?oa:e.substr(7).match(Uh).map(Xe)},lf=function(t,e){var n=t._gsap||Ir(t),i=t.style,s=am(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oa:s):(s===oa&&!t.offsetParent&&t!==Qs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Qs.appendChild(t)),s=am(t),l?i.display=l:Ur(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Qs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rf=function(t,e,n,i,s,o){var a=t._gsap,l=s||lf(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],x=l[4],v=l[5],T=e.split(" "),S=parseFloat(T[0])||0,w=parseFloat(T[1])||0,C,p,y,M;n?l!==oa&&(p=d*m-g*_)&&(y=S*(m/p)+w*(-_/p)+(_*v-m*x)/p,M=S*(-g/p)+w*(d/p)-(d*v-g*x)/p,S=y,w=M):(C=pm(t),S=C.x+(~T[0].indexOf("%")?S/100*C.width:S),w=C.y+(~(T[1]||T[0]).indexOf("%")?w/100*C.height:w)),i||i!==!1&&a.smooth?(x=S-c,v=w-u,a.xOffset=f+(x*d+v*_)-x,a.yOffset=h+(x*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Zn]="0px 0px",o&&(Or(o,a,"xOrigin",c,S),Or(o,a,"yOrigin",u,w),Or(o,a,"xOffset",f,a.xOffset),Or(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+w)},aa=function(t,e){var n=t._gsap||new Xh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=oi(t,Zn)||"0",u,f,h,d,g,_,m,x,v,T,S,w,C,p,y,M,b,R,P,U,D,z,G,O,Z,H,I,et,xt,yt,J,at;return u=f=h=_=m=x=v=T=S=0,d=g=1,n.svg=!!(t.getCTM&&mm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ge]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ge]!=="none"?l[Ge]:"")),i.scale=i.rotate=i.translate="none"),p=lf(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),rf(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,p)),w=n.xOrigin||0,C=n.yOrigin||0,p!==oa&&(R=p[0],P=p[1],U=p[2],D=p[3],u=z=p[4],f=G=p[5],p.length===6?(d=Math.sqrt(R*R+P*P),g=Math.sqrt(D*D+U*U),_=R||P?js(P,R)*ms:0,v=U||D?js(U,D)*ms+_:0,v&&(g*=Math.abs(Math.cos(v*$s))),n.svg&&(u-=w-(w*R+C*U),f-=C-(w*P+C*D))):(at=p[6],yt=p[7],I=p[8],et=p[9],xt=p[10],J=p[11],u=p[12],f=p[13],h=p[14],y=js(at,xt),m=y*ms,y&&(M=Math.cos(-y),b=Math.sin(-y),O=z*M+I*b,Z=G*M+et*b,H=at*M+xt*b,I=z*-b+I*M,et=G*-b+et*M,xt=at*-b+xt*M,J=yt*-b+J*M,z=O,G=Z,at=H),y=js(-U,xt),x=y*ms,y&&(M=Math.cos(-y),b=Math.sin(-y),O=R*M-I*b,Z=P*M-et*b,H=U*M-xt*b,J=D*b+J*M,R=O,P=Z,U=H),y=js(P,R),_=y*ms,y&&(M=Math.cos(y),b=Math.sin(y),O=R*M+P*b,Z=z*M+G*b,P=P*M-R*b,G=G*M-z*b,R=O,z=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,x=180-x),d=Xe(Math.sqrt(R*R+P*P+U*U)),g=Xe(Math.sqrt(G*G+at*at)),y=js(z,G),v=Math.abs(y)>2e-4?y*ms:0,S=J?1/(J<0?-J:J):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!_m(oi(t,Ge)),O&&t.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Xe(d),n.scaleY=Xe(g),n.rotation=Xe(_)+a,n.rotationX=Xe(m)+a,n.rotationY=Xe(x)+a,n.skewX=v+a,n.skewY=T+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Zn]=Ul(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?_y:dm?xm:gy,n.uncache=0,n},Ul=function(t){return(t=t.split(" "))[0]+" "+t[1]},$h=function(t,e,n){var i=gn(e);return Xe(parseFloat(e)+parseFloat(Fr(t,"x",n+"px",i)))+i},gy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,xm(t,e)},ds="0deg",sa="0px",ps=") ",xm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,x=n.force3D,v=n.target,T=n.zOrigin,S="",w=x==="auto"&&t&&t!==1||x===!0;if(T&&(f!==ds||u!==ds)){var C=parseFloat(u)*$s,p=Math.sin(C),y=Math.cos(C),M;C=parseFloat(f)*$s,M=Math.cos(C),o=$h(v,o,p*M*-T),a=$h(v,a,-Math.sin(C)*-T),l=$h(v,l,y*M*-T+T)}m!==sa&&(S+="perspective("+m+ps),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(w||o!==sa||a!==sa||l!==sa)&&(S+=l!==sa||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ps),c!==ds&&(S+="rotate("+c+ps),u!==ds&&(S+="rotateY("+u+ps),f!==ds&&(S+="rotateX("+f+ps),(h!==ds||d!==ds)&&(S+="skew("+h+", "+d+ps),(g!==1||_!==1)&&(S+="scale("+g+", "+_+ps),v.style[Ge]=S||"translate(0, 0)"},_y=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,x=n.yOffset,v=n.forceCSS,T=parseFloat(o),S=parseFloat(a),w,C,p,y,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$s,c*=$s,w=Math.cos(l)*f,C=Math.sin(l)*f,p=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=$s,M=Math.tan(c-u),M=Math.sqrt(1+M*M),p*=M,y*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,C*=M)),w=Xe(w),C=Xe(C),p=Xe(p),y=Xe(y)):(w=f,y=h,C=p=0),(T&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(T=Fr(d,"x",o,"px"),S=Fr(d,"y",a,"px")),(g||_||m||x)&&(T=Xe(T+g-(g*w+_*p)+m),S=Xe(S+_-(g*C+_*y)+x)),(i||s)&&(M=d.getBBox(),T=Xe(T+i/100*M.width),S=Xe(S+s/100*M.height)),M="matrix("+w+","+C+","+p+","+y+","+T+","+S+")",d.setAttribute("transform",M),v&&(d.style[Ge]=M)},xy=function(t,e,n,i,s){var o=360,a=on(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ms:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*em)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*em)%o-~~(c/o)*o)),t._pt=h=new Nn(t._pt,e,n,i,c,ty),h.e=u,h.u="deg",t._props.push(n),h},lm=function(t,e){for(var n in e)t[n]=e[n];return t},vy=function(t,e,n){var i=lm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ge]=e,a=aa(n,1),Ur(n,Ge),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ge],o[Ge]=e,a=aa(n,1),o[Ge]=c);for(l in or)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=gn(c),g=gn(u),f=d!==g?Fr(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new Nn(t._pt,a,l,f,h-f,tf),t._pt.u=g||0,t._props.push(l));lm(a,i)};Dn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ol[t>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return sr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var cf={name:"css",register:nf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,x,v,T,S,w,C,p,y,M;sf||nf(),this.styles=this.styles||fm(t),y=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Wn[_]&&Yh(_,e,n,i,t,s)))){if(d=typeof u,g=Ol[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ks(u)),g)g(this,t,_,u,n)&&(p=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ir.lastIndex=0,ir.test(c)||(m=gn(c),x=gn(u),x?m!==x&&(c=Fr(t,_,c,x)+x):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),y.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],on(c)&&~c.indexOf("random(")&&(c=Ks(c)),gn(c+"")||c==="auto"||(c+=Yn.units[_]||gn(sr(t,_))||""),(c+"").charAt(1)==="="&&(c=sr(t,_))):c=sr(t,_),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),_ in Gi&&(_==="autoAlpha"&&(h===1&&sr(t,"visibility")==="hidden"&&f&&(h=0),y.push("visibility",0,a.visibility),Or(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in or,T){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=oi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=oi(t,"perspective"),b?t.style.perspective=b:Ur(t,"perspective")}f=parseFloat(u)}if(S||(w=t._gsap,w.renderTransform&&!e.parseTransform||aa(t,e.parseTransform),C=e.smoothOrigin!==!1&&w.smooth,S=this._pt=new Nn(this._pt,a,Ge,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new Nn(this._pt,w,"scaleY",w.scaleY,(v?hs(w.scaleY,v+f):f)-w.scaleY||0,tf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(Zn,0,a[Zn]),u=py(u),w.svg?rf(t,u,0,C,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==w.zOrigin&&Or(this,w,"zOrigin",w.zOrigin,x),Or(this,a,_,Ul(c),Ul(u)));continue}else if(_==="svgOrigin"){rf(t,u,1,C,0,this);continue}else if(_ in gm){xy(this,w,_,h,v?hs(h,v+u):u);continue}else if(_==="smoothOrigin"){Or(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){vy(this,u,t);continue}}else _ in a||(_=to(_)||_);if(T||(f||f===0)&&(h||h===0)&&!$v.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),x=gn(u)||(_ in Yn.units?Yn.units[_]:m),m!==x&&(h=Fr(t,_,c,x)),this._pt=new Nn(this._pt,T?w:a,_,h,(v?hs(h,v+f):f)-h,!T&&(x==="px"||_==="zIndex")&&e.autoRound!==!1?iy:tf),this._pt.u=x||0,T&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=ny):m!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=ey);else if(_ in a)dy.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Pl(_,u);continue}T||(_ in a?y.push(_,0,a[_]):typeof t[_]=="function"?y.push(_,2,t[_]()):y.push(_,1,c||t[_])),o.push(_)}}p&&Qh(this)},render:function(t,e){if(e.tween._time||!of())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:sr,aliases:Gi,getSetter:function(t,e,n){var i=Gi[e];return i&&i.indexOf(",")<0&&(e=i),e in or&&e!==Zn&&(t._gsap.x||sr(t,"x"))?n&&tm===n?e==="scale"?ay:oy:(tm=n||{})&&(e==="scale"?ly:cy):t.style&&!Rl(t.style[e])?ry:~e.indexOf("-")?sy:Nl(t,e)},core:{_removeProperty:Ur,_getMatrix:lf}};bn.utils.checkPrefix=to;bn.core.getStyleSaver=fm;(function(r,t,e,n){var i=Dn(r+","+t+","+e,function(s){or[s]=1});Dn(t,function(s){Yn.units[s]="deg",gm[s]=1}),Gi[i[13]]=r+","+t,Dn(n,function(s){var o=s.split(":");Gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});bn.registerPlugin(cf);var jt=bn.registerPlugin(cf)||bn,rE=jt.core.Tween;function vm(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function yy(r,t,e){return t&&vm(r.prototype,t),e&&vm(r,e),r}var _n,zl,Sy,Jn,Br,zr,no,Sm,_s,io,Mm,ar,Ci,bm,wm=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Tm=1,eo=[],$t=[],Ri=[],ca=Date.now,uf=function(t,e){return e},My=function(){var t=io.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,$t),i.push.apply(i,Ri),$t=n,Ri=i,uf=function(o,a){return e[o](a)}},cr=function(t,e){return~Ri.indexOf(t)&&Ri[Ri.indexOf(t)+1][e]},ua=function(t){return!!~Mm.indexOf(t)},Un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},On=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Fl="scrollLeft",Bl="scrollTop",hf=function(){return ar&&ar.isPressed||$t.cache++},kl=function(t,e){var n=function i(s){if(s||s===0){Tm&&Jn.history.scrollRestoration!=="manual"&&(Jn.history.scrollRestoration="manual");var o=ar&&ar.isPressed;s=i.v=Math.round(s)||(ar&&ar.iOS?1:0),t(s),i.cacheID=$t.cache,o&&uf("ss",s)}else(e||$t.cache!==i.cacheID||uf("ref"))&&(i.cacheID=$t.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Fl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:kl(function(r){return arguments.length?Jn.scrollTo(r,$e.sc()):Jn.pageXOffset||Br[Fl]||zr[Fl]||no[Fl]||0})},$e={s:Bl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:kl(function(r){return arguments.length?Jn.scrollTo(wn.sc(),r):Jn.pageYOffset||Br[Bl]||zr[Bl]||no[Bl]||0})},Fn=function(t,e){return(e&&e._ctx&&e._ctx.selector||_n.utils.toArray)(t)[0]||(typeof t=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},by=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},lr=function(t,e){var n=e.s,i=e.sc;ua(t)&&(t=Br.scrollingElement||zr);var s=$t.indexOf(t),o=i===$e.sc?1:2;!~s&&(s=$t.push(t)-1),$t[s+o]||Un(t,"scroll",hf);var a=$t[s+o],l=a||($t[s+o]=kl(cr(t,n),!0)||(ua(t)?i:kl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=_n.getProperty(t,"scrollBehavior")==="smooth"),l},Gl=function(t,e,n){var i=t,s=t,o=ca(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=ca();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,m=s,x=ca();return(g||g===0)&&g!==i&&u(g),o===a||x-a>c?0:(i+(n?m:-m))/((n?x:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},la=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},ym=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Em=function(){io=_n.core.globals().ScrollTrigger,io&&io.core&&My()},Am=function(t){return _n=t||wm(),!zl&&_n&&typeof document<"u"&&document.body&&(Jn=window,Br=document,zr=Br.documentElement,no=Br.body,Mm=[Jn,Br,zr,no],Sy=_n.utils.clamp,bm=_n.core.context||function(){},_s="onpointerenter"in no?"pointer":"mouse",Sm=qe.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=qe.eventTypes=("ontouchstart"in zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Tm=0},500),zl=1),io||Em(),zl};wn.op=$e;$t.cache=0;var qe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){zl||Am(_n)||console.warn("Please gsap.registerPlugin(Observer)"),io||Em();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,x=n.onDragEnd,v=n.onDrag,T=n.onPress,S=n.onRelease,w=n.onRight,C=n.onLeft,p=n.onUp,y=n.onDown,M=n.onChangeX,b=n.onChangeY,R=n.onChange,P=n.onToggleX,U=n.onToggleY,D=n.onHover,z=n.onHoverEnd,G=n.onMove,O=n.ignoreCheck,Z=n.isNormalizer,H=n.onGestureStart,I=n.onGestureEnd,et=n.onWheel,xt=n.onEnable,yt=n.onDisable,J=n.onClick,at=n.scrollSpeed,pt=n.capture,wt=n.allowClicks,_t=n.lockAxis,It=n.onLockAxis;this.target=a=Fn(a)||zr,this.vars=n,d&&(d=_n.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,at=at||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(no).lineHeight)||22);var Mt,At,kt,Pt,Ft,se,re,$=this,Kt=0,Ue=0,ge=n.passive||!u&&n.passive!==!1,Qt=lr(a,wn),De=lr(a,$e),Ne=Qt(),k=De(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ci[0]==="pointerdown",ie=ua(a),Ht=a.ownerDocument||Br,mt=[0,0,0],oe=[0,0,0],Dt=0,Gt=function(){return Dt=ca()},L=function(dt,nt){return($.event=dt)&&d&&by(dt.target,d)||nt&&pe&&dt.pointerType!=="touch"||O&&O(dt,nt)},E=function(){$._vx.reset(),$._vy.reset(),At.pause(),f&&f($)},X=function(){var dt=$.deltaX=ym(mt),nt=$.deltaY=ym(oe),it=Math.abs(dt)>=i,vt=Math.abs(nt)>=i;R&&(it||vt)&&R($,dt,nt,mt,oe),it&&(w&&$.deltaX>0&&w($),C&&$.deltaX<0&&C($),M&&M($),P&&$.deltaX<0!=Kt<0&&P($),Kt=$.deltaX,mt[0]=mt[1]=mt[2]=0),vt&&(y&&$.deltaY>0&&y($),p&&$.deltaY<0&&p($),b&&b($),U&&$.deltaY<0!=Ue<0&&U($),Ue=$.deltaY,oe[0]=oe[1]=oe[2]=0),(Pt||kt)&&(G&&G($),kt&&(m&&kt===1&&m($),v&&v($),kt=0),Pt=!1),se&&!(se=!1)&&It&&It($),Ft&&(et($),Ft=!1),Mt=0},ft=function(dt,nt,it){mt[it]+=dt,oe[it]+=nt,$._vx.update(dt),$._vy.update(nt),c?Mt||(Mt=requestAnimationFrame(X)):X()},st=function(dt,nt){_t&&!re&&($.axis=re=Math.abs(dt)>Math.abs(nt)?"x":"y",se=!0),re!=="y"&&(mt[2]+=dt,$._vx.update(dt,!0)),re!=="x"&&(oe[2]+=nt,$._vy.update(nt,!0)),c?Mt||(Mt=requestAnimationFrame(X)):X()},gt=function(dt){if(!L(dt,1)){dt=la(dt,u);var nt=dt.clientX,it=dt.clientY,vt=nt-$.x,ot=it-$.y,Tt=$.isDragging;$.x=nt,$.y=it,(Tt||(vt||ot)&&(Math.abs($.startX-nt)>=s||Math.abs($.startY-it)>=s))&&(kt||(kt=Tt?2:1),Tt||($.isDragging=!0),st(vt,ot))}},W=$.onPress=function(ut){L(ut,1)||ut&&ut.button||($.axis=re=null,At.pause(),$.isPressed=!0,ut=la(ut),Kt=Ue=0,$.startX=$.x=ut.clientX,$.startY=$.y=ut.clientY,$._vx.reset(),$._vy.reset(),Un(Z?a:Ht,Ci[1],gt,ge,!0),$.deltaX=$.deltaY=0,T&&T($))},F=$.onRelease=function(ut){if(!L(ut,1)){On(Z?a:Ht,Ci[1],gt,!0);var dt=!isNaN($.y-$.startY),nt=$.isDragging,it=nt&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),vt=la(ut);!it&&dt&&($._vx.reset(),$._vy.reset(),u&&wt&&_n.delayedCall(.08,function(){if(ca()-Dt>300&&!ut.defaultPrevented){if(ut.target.click)ut.target.click();else if(Ht.createEvent){var ot=Ht.createEvent("MouseEvents");ot.initMouseEvent("click",!0,!0,Jn,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),ut.target.dispatchEvent(ot)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,f&&nt&&!Z&&At.restart(!0),kt&&X(),x&&nt&&x($),S&&S($,it)}},V=function(dt){return dt.touches&&dt.touches.length>1&&($.isGesturing=!0)&&H(dt,$.isDragging)},rt=function(){return($.isGesturing=!1)||I($)},N=function(dt){if(!L(dt)){var nt=Qt(),it=De();ft((nt-Ne)*at,(it-k)*at,1),Ne=nt,k=it,f&&At.restart(!0)}},Y=function(dt){if(!L(dt)){dt=la(dt,u),et&&(Ft=!0);var nt=(dt.deltaMode===1?l:dt.deltaMode===2?Jn.innerHeight:1)*g;ft(dt.deltaX*nt,dt.deltaY*nt,0),f&&!Z&&At.restart(!0)}},j=function(dt){if(!L(dt)){var nt=dt.clientX,it=dt.clientY,vt=nt-$.x,ot=it-$.y;$.x=nt,$.y=it,Pt=!0,f&&At.restart(!0),(vt||ot)&&st(vt,ot)}},ct=function(dt){$.event=dt,D($)},lt=function(dt){$.event=dt,z($)},ht=function(dt){return L(dt)||la(dt,u)&&J($)};At=$._dc=_n.delayedCall(h||.25,E).pause(),$.deltaX=$.deltaY=0,$._vx=Gl(0,50,!0),$._vy=Gl(0,50,!0),$.scrollX=Qt,$.scrollY=De,$.isDragging=$.isGesturing=$.isPressed=!1,bm(this),$.enable=function(ut){return $.isEnabled||(Un(ie?Ht:a,"scroll",hf),o.indexOf("scroll")>=0&&Un(ie?Ht:a,"scroll",N,ge,pt),o.indexOf("wheel")>=0&&Un(a,"wheel",Y,ge,pt),(o.indexOf("touch")>=0&&Sm||o.indexOf("pointer")>=0)&&(Un(a,Ci[0],W,ge,pt),Un(Ht,Ci[2],F),Un(Ht,Ci[3],F),wt&&Un(a,"click",Gt,!0,!0),J&&Un(a,"click",ht),H&&Un(Ht,"gesturestart",V),I&&Un(Ht,"gestureend",rt),D&&Un(a,_s+"enter",ct),z&&Un(a,_s+"leave",lt),G&&Un(a,_s+"move",j)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Pt=kt=!1,$._vx.reset(),$._vy.reset(),Ne=Qt(),k=De(),ut&&ut.type&&W(ut),xt&&xt($)),$},$.disable=function(){$.isEnabled&&(eo.filter(function(ut){return ut!==$&&ua(ut.target)}).length||On(ie?Ht:a,"scroll",hf),$.isPressed&&($._vx.reset(),$._vy.reset(),On(Z?a:Ht,Ci[1],gt,!0)),On(ie?Ht:a,"scroll",N,pt),On(a,"wheel",Y,pt),On(a,Ci[0],W,pt),On(Ht,Ci[2],F),On(Ht,Ci[3],F),On(a,"click",Gt,!0),On(a,"click",ht),On(Ht,"gesturestart",V),On(Ht,"gestureend",rt),On(a,_s+"enter",ct),On(a,_s+"leave",lt),On(a,_s+"move",j),$.isEnabled=$.isPressed=$.isDragging=!1,yt&&yt($))},$.kill=$.revert=function(){$.disable();var ut=eo.indexOf($);ut>=0&&eo.splice(ut,1),ar===$&&(ar=0)},eo.push($),Z&&ua(a)&&(ar=$),$.enable(_)},yy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qe.version="3.15.1";qe.create=function(r){return new qe(r)};qe.register=Am;qe.getAll=function(){return eo.slice()};qe.getById=function(r){return eo.filter(function(t){return t.vars.id===r})[0]};wm()&&_n.registerPlugin(qe);var Lt,ao,ne,be,ci,Se,Tf,ic,ba,_a,fa,Vl,Tn,oc,xf,zn,Cm,Rm,lo,Xm,ff,qm,Bn,vf,Ym,Zm,kr,yf,Ef,co,Af,Gr,Sf,df,Hl=1,En=Date.now,pf=En(),bi=0,da=0,Pm=function(t,e,n){var i=li(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Im=function(t,e){return e&&(!li(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},wy=function r(){return da&&requestAnimationFrame(r)},Lm=function(){return oc=1},Dm=function(){return oc=0},Vi=function(t){return t},pa=function(t){return Math.round(t*1e5)/1e5||0},Jm=function(){return typeof window<"u"},Km=function(){return Lt||Jm()&&(Lt=window.gsap)&&Lt.registerPlugin&&Lt},bs=function(t){return!!~Tf.indexOf(t)},jm=function(t){return(t==="Height"?Af:ne["inner"+t])||ci["client"+t]||Se["client"+t]},Qm=function(t){return cr(t,"getBoundingClientRect")||(bs(t)?function(){return nc.width=ne.innerWidth,nc.height=Af,nc}:function(){return ur(t)})},Ty=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=cr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?jm(s):t["client"+s])||0}},Ey=function(t,e){return!e||~Ri.indexOf(t)?Qm(t):function(){return nc}},Hi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=cr(t,n))?o()-Qm(t)()[s]:bs(t)?(ci[n]||Se[n])-jm(i):t[n]-t["offset"+i])},Wl=function(t,e){for(var n=0;n<lo.length;n+=3)(!e||~e.indexOf(lo[n+1]))&&t(lo[n],lo[n+1],lo[n+2])},li=function(t){return typeof t=="string"},An=function(t){return typeof t=="function"},ma=function(t){return typeof t=="number"},xs=function(t){return typeof t=="object"},ha=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ro=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},so=Math.abs,$m="left",tg="top",Cf="right",Rf="bottom",ys="width",Ss="height",xa="Right",va="Left",ya="Top",Sa="Bottom",tn="padding",Si="margin",ho="Width",Pf="Height",an="px",Mi=function(t){return ne.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Ay=function(t){var e=Mi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Nm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ur=function(t,e){var n=e&&Mi(t)[xf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Lt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},rc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},eg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Cy=function(t){return function(e){return Lt.utils.snap(eg(t),e)}},If=function(t){var e=Lt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Ry=function(t){return function(e,n){return If(eg(t))(e,n.direction)}},Xl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},fn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ql=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Om={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yl={toggleActions:"play",anticipatePin:0},sc={top:0,left:0,center:.5,bottom:1,right:1},Ql=function(t,e){if(li(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in sc?sc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Zl=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=be.createElement("div"),_=bs(n)||cr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,x=_?Se:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,T=v?c:u,S="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===$e?Cf:Rf)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=S,g.innerText=e||e===0?t+"-"+e:t,x.children[0]?x.insertBefore(g,x.children[0]):x.appendChild(g),g._offset=g["offset"+i.op.d2],$l(g,0,i,v),g},$l=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ho]=1,s["border"+a+ho]=0,s[n.p]=e+"px",Lt.set(t,s)},ee=[],Mf={},wa,Um=function(){return En()-bi>34&&(wa||(wa=requestAnimationFrame(hr)))},oo=function(){(!Bn||!Bn.isPressed||Bn.startX>Se.clientWidth)&&($t.cache++,Bn?wa||(wa=requestAnimationFrame(hr)):hr(),bi||Ts("scrollStart"),bi=En())},mf=function(){Zm=ne.innerWidth,Ym=ne.innerHeight},ga=function(t){$t.cache++,(t===!0||!Tn&&!qm&&!be.fullscreenElement&&!be.webkitFullscreenElement&&(!vf||Zm!==ne.innerWidth||Math.abs(ne.innerHeight-Ym)>ne.innerHeight*.25))&&ic.restart(!0)},ws={},Py=[],ng=function r(){return hn(Vt,"scrollEnd",r)||vs(!0)},Ts=function(t){return ws[t]&&ws[t].map(function(e){return e()})||Py},ai=[],ig=function(t){for(var e=0;e<ai.length;e+=5)(!t||ai[e+4]&&ai[e+4].query===t)&&(ai[e].style.cssText=ai[e+1],ai[e].getBBox&&ai[e].setAttribute("transform",ai[e+2]||""),ai[e+3].uncache=1)},rg=function(){$t.cache++,$t.forEach(function(t){return An(t)&&(t.rec=t())})},Lf=function(t,e){var n;for(zn=0;zn<ee.length;zn++)n=ee[zn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Gr=!0,e&&ig(e),e||Ts("revert")},sg=function(t,e){$t.cache++,(e||!kn)&&$t.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),li(t)&&(Ef=t,ne.history.scrollRestoration!==t&&(ne.history.scrollRestoration=t))},kn,Ms=0,Fm,Iy=function(){if(Fm!==Ms){var t=Fm=Ms;requestAnimationFrame(function(){return t===Ms&&vs(!0)})}},og=function(){Se.appendChild(co),Af=!Bn&&co.offsetHeight||ne.innerHeight,Se.removeChild(co)},Bm=function(t){return ba(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},vs=function(t,e){if(ci=be.documentElement,Se=be.body,Tf=[ne,be,ci,Se],bi&&!t&&!Gr){fn(Vt,"scrollEnd",ng);return}og(),kn=Vt.isRefreshing=!0,Gr||rg();var n=Ts("refreshInit");Xm&&Vt.sort(),e||Lf(),$t.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),Gr=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Sf=1,Bm(!0),ee.forEach(function(i){var s=Hi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Bm(!1),Sf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),$t.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),sg(Ef,1),ic.pause(),Ms++,kn=2,hr(2),ee.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),kn=Vt.isRefreshing=!1,Ts("refresh")},bf=0,tc=1,Ma,hr=function(t){if(t===2||!kn&&!Gr){Vt.isUpdating=!0,Ma&&Ma.update(0);var e=ee.length,n=En(),i=n-pf>=50,s=e&&ee[0].scroll();if(tc=bf>s?-1:1,kn||(bf=s),i&&(bi&&!oc&&n-bi>200&&(bi=0,Ts("scrollEnd")),fa=pf,pf=n),tc<0){for(zn=e;zn-- >0;)ee[zn]&&ee[zn].update(0,i);tc=1}else for(zn=0;zn<e;zn++)ee[zn]&&ee[zn].update(0,i);Vt.isUpdating=!1}wa=0},wf=[$m,tg,Rf,Cf,Si+Sa,Si+xa,Si+ya,Si+va,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ec=wf.concat([ys,Ss,"boxSizing","max"+ho,"max"+Pf,"position",Si,tn,tn+ya,tn+xa,tn+Sa,tn+va]),Ly=function(t,e,n){uo(n);var i=t._gsap;if(i.spacerIsNative)uo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},gf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=wf.length,o=e.style,a=t.style,l;s--;)l=wf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Rf]=a[Cf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ys]=rc(t,wn)+an,o[Ss]=rc(t,$e)+an,o[tn]=a[Si]=a[tg]=a[$m]="0",uo(i),a[ys]=a["max"+ho]=n[ys],a[Ss]=a["max"+Pf]=n[Ss],a[tn]=n[tn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Dy=/([A-Z])/g,uo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Lt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Dy,"-$1").toLowerCase())}},Jl=function(t){for(var e=ec.length,n=t.style,i=[],s=0;s<e;s++)i.push(ec[s],n[ec[s]]);return i.t=t,i},Ny=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},nc={left:0,top:0},zm=function(t,e,n,i,s,o,a,l,c,u,f,h,d,g){An(t)&&(t=t(l)),li(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Ql("0"+t.substr(3),n):0));var _=d?d.time():0,m,x,v;if(d&&d.seek(0),isNaN(t)||(t=+t),ma(t))d&&(t=Lt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),a&&$l(a,n,i,!0);else{An(e)&&(e=e(l));var T=(t||"0").split(" "),S,w,C,p;v=Fn(e,l)||Se,S=ur(v)||{},(!S||!S.left&&!S.top)&&Mi(v).display==="none"&&(p=v.style.display,v.style.display="block",S=ur(v),p?v.style.display=p:v.style.removeProperty("display")),w=Ql(T[0],S[i.d]),C=Ql(T[1]||"0",n),t=S[i.p]-c[i.p]-u+w+s-C,a&&$l(a,C,i,n-C<20||a._isStart&&C>20),n-=n-C}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var y=t+n,M=o._isStart;m="scroll"+i.d2,$l(o,y,i,M&&y>20||!M&&(f?Math.max(Se[m],ci[m]):o.parentNode[m])<=y+1),f&&(c=ur(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return d&&v&&(m=ur(v),d.seek(h),x=ur(v),d._caScrollDist=m[i.p]-x[i.p],t=t/d._caScrollDist*h),d&&d.seek(_),d?t:Math.round(t)},Oy=/(webkit|moz|length|cssText|inset)/i,km=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Se){t._stOrig=s.cssText,a=Mi(t);for(o in a)!+o&&!Oy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Lt.core.getCache(t).uncache=1,e.appendChild(t)}},ag=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Kl=function(t,e,n){var i={};i[e.p]="+="+n,Lt.set(t,i)},Gm=function(t,e){var n=lr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=ag(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){$t.cache++,o.tween&&hr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Lt.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(t,"wheel",n.wheelHandler),Vt.isTouch&&fn(t,"touchmove",n.wheelHandler),s},Vt=(function(){function r(e,n){ao||r.register(Lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!da){this.update=this.refresh=this.kill=Vi;return}n=Nm(li(n)||ma(n)||n.nodeType?{trigger:n}:n,Yl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,x=s.onScrubComplete,v=s.onSnapComplete,T=s.once,S=s.snap,w=s.pinReparent,C=s.pinSpacer,p=s.containerAnimation,y=s.fastScrollEnd,M=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:$e,R=!f&&f!==0,P=Fn(n.scroller||ne),U=Lt.core.getCache(P),D=bs(P),z=("pinType"in n?n.pinType:cr(P,"pinType")||D&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=R&&n.toggleActions.split(" "),Z="markers"in n?n.markers:Yl.markers,H=D?0:parseFloat(Mi(P)["border"+b.p2+ho])||0,I=this,et=n.onRefreshInit&&function(){return n.onRefreshInit(I)},xt=Ty(P,D,b),yt=Ey(P,D),J=0,at=0,pt=0,wt=lr(P,b),_t,It,Mt,At,kt,Pt,Ft,se,re,$,Kt,Ue,ge,Qt,De,Ne,k,pe,ie,Ht,mt,oe,Dt,Gt,L,E,X,ft,st,gt,W,F,V,rt,N,Y,j,ct,lt;if(I._startClamp=I._endClamp=!1,I._dir=b,m*=45,I.scroller=P,I.scroll=p?p.time.bind(p):wt,At=wt(),Gr&&wt.rec==null&&(wt.rec=At),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xm=1,n.refreshPriority===-9999&&(Ma=I)),U.tweenScroll=U.tweenScroll||{top:Gm(P,$e),left:Gm(P,wn)},I.tweenTo=_t=U.tweenScroll[b.p],I.scrubDuration=function(it){V=ma(it)&&it,V?F?F.duration(it):F=Lt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:V,paused:!0,onComplete:function(){return x&&x(I)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),gt=0,l||(l=i.vars.id)),S&&((!xs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Se.style&&Lt.set(D?[Se,ci]:P,{scrollBehavior:"auto"}),$t.forEach(function(it){return An(it)&&it.target===(D?be.scrollingElement||ci:P)&&(it.smooth=!1)}),Mt=An(S.snapTo)?S.snapTo:S.snapTo==="labels"?Cy(i):S.snapTo==="labelsDirectional"?Ry(i):S.directional!==!1?function(it,vt){return If(S.snapTo)(it,En()-at<500?0:vt.direction)}:Lt.utils.snap(S.snapTo),rt=S.duration||{min:.1,max:2},rt=xs(rt)?_a(rt.min,rt.max):_a(rt,rt),N=Lt.delayedCall(S.delay||V/2||.1,function(){var it=wt(),vt=En()-at<500,ot=_t.tween;if((vt||Math.abs(I.getVelocity())<10)&&!ot&&!oc&&J!==it){var Tt=(it-Pt)/Qt,Zt=i&&!R?i.totalProgress():Tt,Wt=vt?0:(Zt-W)/(En()-fa)*1e3||0,_e=Lt.utils.clamp(-Tt,1-Tt,so(Wt/2)*Wt/.185),Te=Tt+(S.inertia===!1?0:_e),Re,xe,ye=S,nn=ye.onStart,Ee=ye.onInterrupt,xn=ye.onComplete;if(Re=Mt(Te,I),ma(Re)||(Re=Te),xe=Math.max(0,Math.round(Pt+Re*Qt)),it<=Ft&&it>=Pt&&xe!==it){if(ot&&!ot._initted&&ot.data<=so(xe-it))return;S.inertia===!1&&(_e=Re-Tt),_t(xe,{duration:rt(so(Math.max(so(Te-Zt),so(Re-Zt))*.185/Wt/.05||0)),ease:S.ease||"power3",data:so(xe-it),onInterrupt:function(){return N.restart(!0)&&Ee&&ro(I,Ee)},onComplete:function(){I.update(),J=wt(),i&&!R&&(F?F.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),gt=W=i&&!R?i.totalProgress():I.progress,v&&v(I),xn&&ro(I,xn)}},it,_e*Qt,xe-it-_e*Qt),nn&&ro(I,nn,_t.tween)}}else I.isActive&&J!==it&&N.restart(!0)}).pause()),l&&(Mf[l]=I),h=I.trigger=Fn(h||d!==!0&&d),lt=h&&h._gsap&&h._gsap.stRevert,lt&&(lt=lt(I)),d=d===!0?h:Fn(d),li(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Si||(g=!g&&d.parentNode&&d.parentNode.style&&Mi(d.parentNode).display==="flex"?!1:tn),I.pin=d,It=Lt.core.getCache(d),It.spacer?De=It.pinState:(C&&(C=Fn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),It.spacerIsNative=!!C,C&&(It.spacerState=Jl(C))),It.spacer=pe=C||be.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),It.pinState=De=Jl(d)),n.force3D!==!1&&Lt.set(d,{force3D:!0}),I.spacer=pe=It.spacer,st=Mi(d),Gt=st[g+b.os2],Ht=Lt.getProperty(d),mt=Lt.quickSetter(d,b.a,an),gf(d,pe,st),k=Jl(d)),Z){Ue=xs(Z)?Nm(Z,Om):Om,$=Zl("scroller-start",l,P,b,Ue,0),Kt=Zl("scroller-end",l,P,b,Ue,0,$),ie=$["offset"+b.op.d2];var ht=Fn(cr(P,"content")||P);se=this.markerStart=Zl("start",l,ht,b,Ue,ie,0,p),re=this.markerEnd=Zl("end",l,ht,b,Ue,ie,0,p),p&&(ct=Lt.quickSetter([se,re],b.a,an)),!z&&!(Ri.length&&cr(P,"fixedMarkers")===!0)&&(Ay(D?Se:P),Lt.set([$,Kt],{force3D:!0}),E=Lt.quickSetter($,b.a,an),ft=Lt.quickSetter(Kt,b.a,an))}if(p){var ut=p.vars.onUpdate,dt=p.vars.onUpdateParams;p.eventCallback("onUpdate",function(){I.update(0,0,1),ut&&ut.apply(p,dt||[])})}if(I.previous=function(){return ee[ee.indexOf(I)-1]},I.next=function(){return ee[ee.indexOf(I)+1]},I.revert=function(it,vt){if(!vt)return I.kill(!0);var ot=it!==!1||!I.enabled,Tt=Tn;ot!==I.isReverted&&(ot&&(Y=Math.max(wt(),I.scroll.rec||0),pt=I.progress,j=i&&i.progress()),se&&[se,re,$,Kt].forEach(function(Zt){return Zt.style.display=ot?"none":"block"}),ot&&(Tn=I,I.update(ot)),d&&(!w||!I.isActive)&&(ot?Ly(d,pe,De):gf(d,pe,Mi(d),L)),ot||I.update(ot),Tn=Tt,I.isReverted=ot)},I.refresh=function(it,vt,ot,Tt){if(!((Tn||!I.enabled)&&!vt)){if(d&&it&&bi){fn(r,"scrollEnd",ng);return}!kn&&et&&et(I),Tn=I,_t.tween&&!ot&&(_t.tween.kill(),_t.tween=0),F&&F.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(q){return q.vars.immediateRender&&q.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Zt=xt(),Wt=yt(),_e=p?p.duration():Hi(P,b),Te=Qt<=.01||!Qt,Re=0,xe=Tt||0,ye=xs(ot)?ot.end:n.end,nn=n.endTrigger||h,Ee=xs(ot)?ot.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),xn=I.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,I),ei=h&&Math.max(0,ee.indexOf(I))||0,Ve=ei,je,rn,ni,Ws,sn,He,_i,qo,gl,Ar,A,B,tt;for(Z&&xs(ot)&&(B=Lt.getProperty($,b.p),tt=Lt.getProperty(Kt,b.p));Ve-- >0;)He=ee[Ve],He.end||He.refresh(0,1)||(Tn=I),_i=He.pin,_i&&(_i===h||_i===d||_i===xn)&&!He.isReverted&&(Ar||(Ar=[]),Ar.unshift(He),He.revert(!0,!0)),He!==ee[Ve]&&(ei--,Ve--);for(An(Ee)&&(Ee=Ee(I)),Ee=Pm(Ee,"start",I),Pt=zm(Ee,h,Zt,b,wt(),se,$,I,Wt,H,z,_e,p,I._startClamp&&"_startClamp")||(d?-.001:0),An(ye)&&(ye=ye(I)),li(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(li(Ee)?Ee.split(" ")[0]:"")+ye:(Re=Ql(ye.substr(2),Zt),ye=li(Ee)?Ee:(p?Lt.utils.mapRange(0,p.duration(),p.scrollTrigger.start,p.scrollTrigger.end,Pt):Pt)+Re,nn=h)),ye=Pm(ye,"end",I),Ft=Math.max(Pt,zm(ye||(nn?"100% 0":_e),nn,Zt,b,wt()+Re,re,Kt,I,Wt,H,z,_e,p,I._endClamp&&"_endClamp"))||-.001,Re=0,Ve=ei;Ve--;)He=ee[Ve]||{},_i=He.pin,_i&&He.start-He._pinPush<=Pt&&!p&&He.end>0&&(je=He.end-(I._startClamp?Math.max(0,He.start):He.start),(_i===h&&He.start-He._pinPush<Pt||_i===xn)&&isNaN(Ee)&&(Re+=je*(1-He.progress)),_i===d&&(xe+=je));if(Pt+=Re,Ft+=Re,I._startClamp&&(I._startClamp+=Re),I._endClamp&&!kn&&(I._endClamp=Ft||-.001,Ft=Math.min(Ft,Hi(P,b))),Qt=Ft-Pt||(Pt-=.01)&&.001,Te&&(pt=Lt.utils.clamp(0,1,Lt.utils.normalize(Pt,Ft,Y))),I._pinPush=xe,se&&Re&&(je={},je[b.a]="+="+Re,xn&&(je[b.p]="-="+wt()),Lt.set([se,re],je)),d&&!(Sf&&I.end>=Hi(P,b)))je=Mi(d),Ws=b===$e,ni=wt(),oe=parseFloat(Ht(b.a))+xe,!_e&&Ft>1&&(A=(D?be.scrollingElement||ci:P).style,A={style:A,value:A["overflow"+b.a.toUpperCase()]},D&&Mi(Se)["overflow"+b.a.toUpperCase()]!=="scroll"&&(A.style["overflow"+b.a.toUpperCase()]="scroll")),gf(d,pe,je),k=Jl(d),rn=ur(d,!0),qo=z&&lr(P,Ws?wn:$e)(),g?(L=[g+b.os2,Qt+xe+an],L.t=pe,Ve=g===tn?rc(d,b)+Qt+xe:0,Ve&&(L.push(b.d,Ve+an),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=Ve+an)),uo(L),xn&&ee.forEach(function(q){q.pin===xn&&q.vars.pinSpacing!==!1&&(q._subPinOffset=!0)}),z&&wt(Y)):(Ve=rc(d,b),Ve&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=Ve+an)),z&&(sn={top:rn.top+(Ws?ni-Pt:qo)+an,left:rn.left+(Ws?qo:ni-Pt)+an,boxSizing:"border-box",position:"fixed"},sn[ys]=sn["max"+ho]=Math.ceil(rn.width)+an,sn[Ss]=sn["max"+Pf]=Math.ceil(rn.height)+an,sn[Si]=sn[Si+ya]=sn[Si+xa]=sn[Si+Sa]=sn[Si+va]="0",sn[tn]=je[tn],sn[tn+ya]=je[tn+ya],sn[tn+xa]=je[tn+xa],sn[tn+Sa]=je[tn+Sa],sn[tn+va]=je[tn+va],Ne=Ny(De,sn,w),kn&&wt(0)),i?(gl=i._initted,ff(1),i.render(i.duration(),!0,!0),Dt=Ht(b.a)-oe+Qt+xe,X=Math.abs(Qt-Dt)>1,z&&X&&Ne.splice(Ne.length-2,2),i.render(0,!0,!0),gl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ff(0)):Dt=Qt,A&&(A.value?A.style["overflow"+b.a.toUpperCase()]=A.value:A.style.removeProperty("overflow-"+b.a));else if(h&&wt()&&!p)for(rn=h.parentNode;rn&&rn!==Se;)rn._pinOffset&&(Pt-=rn._pinOffset,Ft-=rn._pinOffset),rn=rn.parentNode;Ar&&Ar.forEach(function(q){return q.revert(!1,!0)}),I.start=Pt,I.end=Ft,At=kt=kn?Y:wt(),!p&&!kn&&!Gr&&(At<Y&&wt(Y),I.scroll.rec=0),I.revert(!1,!0),at=En(),N&&(J=-1,N.restart(!0)),Tn=0,i&&R&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Te||pt!==I.progress||p||_||i&&!i._initted)&&(i&&!R&&(i._initted||pt||i.vars.immediateRender!==!1)&&i.totalProgress(p&&Pt<-.001&&!pt?Lt.utils.normalize(Pt,Ft,0):pt,!0),I.progress=Te||(At-Pt)/Qt===pt?0:pt),d&&g&&(pe._pinOffset=Math.round(I.progress*Dt)),F&&F.invalidate(),isNaN(B)||(B-=Lt.getProperty($,b.p),tt-=Lt.getProperty(Kt,b.p),Kl($,b,B),Kl(se,b,B-(Tt||0)),Kl(Kt,b,tt),Kl(re,b,tt-(Tt||0))),Te&&!kn&&I.update(),u&&!kn&&!ge&&(ge=!0,u(I),ge=!1)}},I.getVelocity=function(){return(wt()-kt)/(En()-fa)*1e3||0},I.endAnimation=function(){ha(I.callbackAnimation),i&&(F?F.progress(1):i.paused()?R||ha(i,I.direction<0,1):ha(i,i.reversed()))},I.labelToScroll=function(it){return i&&i.labels&&(Pt||I.refresh()||Pt)+i.labels[it]/i.duration()*Qt||0},I.getTrailing=function(it){var vt=ee.indexOf(I),ot=I.direction>0?ee.slice(0,vt).reverse():ee.slice(vt+1);return(li(it)?ot.filter(function(Tt){return Tt.vars.preventOverlaps===it}):ot).filter(function(Tt){return I.direction>0?Tt.end<=Pt:Tt.start>=Ft})},I.update=function(it,vt,ot){if(!(p&&!ot&&!it)){var Tt=kn===!0?Y:I.scroll(),Zt=it?0:(Tt-Pt)/Qt,Wt=Zt<0?0:Zt>1?1:Zt||0,_e=I.progress,Te,Re,xe,ye,nn,Ee,xn,ei;if(vt&&(kt=At,At=p?wt():Tt,S&&(W=gt,gt=i&&!R?i.totalProgress():Wt)),m&&d&&!Tn&&!Hl&&bi&&(!Wt&&Pt<Tt+(Tt-kt)/(En()-fa)*m?Wt=1e-4:Wt===1&&Ft>Tt+(Tt-kt)/(En()-fa)*m&&(Wt=.9999)),Wt!==_e&&I.enabled){if(Te=I.isActive=!!Wt&&Wt<1,Re=!!_e&&_e<1,Ee=Te!==Re,nn=Ee||!!Wt!=!!_e,I.direction=Wt>_e?1:-1,I.progress=Wt,nn&&!Tn&&(xe=Wt&&!_e?0:Wt===1?1:_e===1?2:3,R&&(ye=!Ee&&O[xe+1]!=="none"&&O[xe+1]||O[xe],ei=i&&(ye==="complete"||ye==="reset"||ye in i))),M&&(Ee||ei)&&(ei||f||!i)&&(An(M)?M(I):I.getTrailing(M).forEach(function(ni){return ni.endAnimation()})),R||(F&&!Tn&&!Hl?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",Wt,i._tTime/i._tDur):(F.vars.totalProgress=Wt,F.invalidate().restart())):i&&i.totalProgress(Wt,!!(Tn&&(at||it)))),d){if(it&&g&&(pe.style[g+b.os2]=Gt),!z)mt(pa(oe+Dt*Wt));else if(nn){if(xn=!it&&Wt>_e&&Ft+1>Tt&&Tt+1>=Hi(P,b),w)if(!it&&(Te||xn)){var Ve=ur(d,!0),je=Tt-Pt;km(d,Se,Ve.top+(b===$e?je:0)+an,Ve.left+(b===$e?0:je)+an)}else km(d,pe);uo(Te||xn?Ne:k),X&&Wt<1&&Te||mt(oe+(Wt===1&&!xn?Dt:0))}}S&&!_t.tween&&!Tn&&!Hl&&N.restart(!0),a&&(Ee||T&&Wt&&(Wt<1||!df))&&ba(a.targets).forEach(function(ni){return ni.classList[Te||T?"add":"remove"](a.className)}),o&&!R&&!it&&o(I),nn&&!Tn?(R&&(ei&&(ye==="complete"?i.pause().totalProgress(1):ye==="reset"?i.restart(!0).pause():ye==="restart"?i.restart(!0):i[ye]()),o&&o(I)),(Ee||!df)&&(c&&Ee&&ro(I,c),G[xe]&&ro(I,G[xe]),T&&(Wt===1?I.kill(!1,1):G[xe]=0),Ee||(xe=Wt===1?1:3,G[xe]&&ro(I,G[xe]))),y&&!Te&&Math.abs(I.getVelocity())>(ma(y)?y:2500)&&(ha(I.callbackAnimation),F?F.progress(1):ha(i,ye==="reverse"?1:!Wt,1))):R&&o&&!Tn&&o(I)}if(ft){var rn=p?Tt/p.duration()*(p._caScrollDist||0):Tt;E(rn+($._isFlipped?1:0)),ft(rn)}ct&&ct(-Tt/p.duration()*(p._caScrollDist||0))}},I.enable=function(it,vt){I.enabled||(I.enabled=!0,fn(P,"resize",ga),D||fn(P,"scroll",oo),et&&fn(r,"refreshInit",et),it!==!1&&(I.progress=pt=0,At=kt=J=wt()),vt!==!1&&I.refresh())},I.getTween=function(it){return it&&_t?_t.tween:F},I.setPositions=function(it,vt,ot,Tt){if(p){var Zt=p.scrollTrigger,Wt=p.duration(),_e=Zt.end-Zt.start;it=Zt.start+_e*it/Wt,vt=Zt.start+_e*vt/Wt}I.refresh(!1,!1,{start:Im(it,ot&&!!I._startClamp),end:Im(vt,ot&&!!I._endClamp)},Tt),I.update()},I.adjustPinSpacing=function(it){if(L&&it){var vt=L.indexOf(b.d)+1;L[vt]=parseFloat(L[vt])+it+an,L[1]=parseFloat(L[1])+it+an,uo(L)}},I.disable=function(it,vt){if(it!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,vt||F&&F.pause(),Y=0,It&&(It.uncache=1),et&&hn(r,"refreshInit",et),N&&(N.pause(),_t.tween&&_t.tween.kill()&&(_t.tween=0)),!D)){for(var ot=ee.length;ot--;)if(ee[ot].scroller===P&&ee[ot]!==I)return;hn(P,"resize",ga),D||hn(P,"scroll",oo)}},I.kill=function(it,vt){I.disable(it,vt),F&&!vt&&F.kill(),l&&delete Mf[l];var ot=ee.indexOf(I);ot>=0&&ee.splice(ot,1),ot===zn&&tc>0&&zn--,ot=0,ee.forEach(function(Tt){return Tt.scroller===I.scroller&&(ot=1)}),ot||kn||Gr||(I.scroll.rec=0),i&&(i.scrollTrigger=null,it&&i.revert({kill:!1}),vt||i.kill()),se&&[se,re,$,Kt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Ma===I&&(Ma=0),d&&(It&&(It.uncache=1),ot=0,ee.forEach(function(Tt){return Tt.pin===d&&ot++}),ot||(It.spacer=0)),n.onKill&&n.onKill(I)},ee.push(I),I.enable(!1,!1),lt&&lt(I),i&&i.add&&!Qt){var nt=I.update;I.update=function(){I.update=nt,$t.cache++,Pt||Ft||I.refresh()},Lt.delayedCall(.01,I.update),Qt=.01,Pt=Ft=0}else I.refresh();d&&Iy()},r.register=function(n){return ao||(Lt=n||Km(),Jm()&&window.document&&r.enable(),ao=da),ao},r.defaults=function(n){if(n)for(var i in n)Yl[i]=n[i];return Yl},r.disable=function(n,i){da=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(ne,"wheel",oo),hn(be,"scroll",oo),clearInterval(Vl),hn(be,"touchcancel",Vi),hn(Se,"touchstart",Vi),Xl(hn,be,"pointerdown,touchstart,mousedown",Lm),Xl(hn,be,"pointerup,touchend,mouseup",Dm),ic.kill(),Wl(hn);for(var s=0;s<$t.length;s+=3)ql(hn,$t[s],$t[s+1]),ql(hn,$t[s],$t[s+2])},r.enable=function(){if(ne=window,be=document,ci=be.documentElement,Se=be.body,Lt){if(ba=Lt.utils.toArray,_a=Lt.utils.clamp,yf=Lt.core.context||Vi,ff=Lt.core.suppressOverwrites||Vi,Ef=ne.history.scrollRestoration||"auto",bf=ne.pageYOffset||0,Lt.core.globals("ScrollTrigger",r),Se){da=1,co=document.createElement("div"),co.style.height="100vh",co.style.position="absolute",og(),wy(),qe.register(Lt),r.isTouch=qe.isTouch,kr=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vf=qe.isTouch===1,fn(ne,"wheel",oo),Tf=[ne,be,ci,Se],Lt.matchMedia?(r.matchMedia=function(u){var f=Lt.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Lt.addEventListener("matchMediaInit",function(){rg(),Lf()}),Lt.addEventListener("matchMediaRevert",function(){return ig()}),Lt.addEventListener("matchMedia",function(){vs(0,1),Ts("matchMedia")}),Lt.matchMedia().add("(orientation: portrait)",function(){return mf(),mf})):console.warn("Requires GSAP 3.11.0 or later"),mf(),fn(be,"scroll",oo);var n=Se.hasAttribute("style"),i=Se.style,s=i.borderTopStyle,o=Lt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ur(Se),$e.m=Math.round(a.top+$e.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Se.setAttribute("style",""),Se.removeAttribute("style")),Vl=setInterval(Um,250),Lt.delayedCall(.5,function(){return Hl=0}),fn(be,"touchcancel",Vi),fn(Se,"touchstart",Vi),Xl(fn,be,"pointerdown,touchstart,mousedown",Lm),Xl(fn,be,"pointerup,touchend,mouseup",Dm),xf=Lt.utils.checkPrefix("transform"),ec.push(xf),ao=En(),ic=Lt.delayedCall(.2,vs).pause(),lo=[be,"visibilitychange",function(){var u=ne.innerWidth,f=ne.innerHeight;be.hidden?(Cm=u,Rm=f):(Cm!==u||Rm!==f)&&ga()},be,"DOMContentLoaded",vs,ne,"load",vs,ne,"resize",ga],Wl(fn),ee.forEach(function(u){return u.enable(0,1)}),l=0;l<$t.length;l+=3)ql(hn,$t[l],$t[l+1]),ql(hn,$t[l],$t[l+2])}else if(be){var c=function u(){r.enable(),be.removeEventListener("DOMContentLoaded",u)};be.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(df=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Vl)||(Vl=i)&&setInterval(Um,i),"ignoreMobileResize"in n&&(vf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Wl(hn)||Wl(fn,n.autoRefreshEvents||"none"),qm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),o=$t.indexOf(s),a=bs(s);~o&&$t.splice(o,a?6:2),i&&(a?Ri.unshift(ne,i,Se,i,ci,i):Ri.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(li(n)?Fn(n):n).getBoundingClientRect(),a=o[s?ys:Ss]*i||0;return s?o.right-a>0&&o.left+a<ne.innerWidth:o.bottom-a>0&&o.top+a<ne.innerHeight},r.positionInViewport=function(n,i,s){li(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?ys:Ss],l=i==null?a/2:i in sc?sc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ne.innerWidth:(o.top+l)/ne.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ws.killAll||[];ws={},i.forEach(function(s){return s()})}},r})();Vt.version="3.15.1";Vt.saveStyles=function(r){return r?ba(r).forEach(function(t){if(t&&t.style){var e=ai.indexOf(t);e>=0&&ai.splice(e,5),ai.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Lt.core.getCache(t),yf())}}):ai};Vt.revert=function(r,t){return Lf(!r,t)};Vt.create=function(r,t){return new Vt(r,t)};Vt.refresh=function(r){return r?ga(!0):(ao||Vt.register())&&vs(!0)};Vt.update=function(r){return++$t.cache&&hr(r===!0?2:0)};Vt.clearScrollMemory=sg;Vt.maxScroll=function(r,t){return Hi(r,t?wn:$e)};Vt.getScrollFunc=function(r,t){return lr(Fn(r),t?wn:$e)};Vt.getById=function(r){return Mf[r]};Vt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Vt.isScrolling=function(){return!!bi};Vt.snapDirectional=If;Vt.addEventListener=function(r,t){var e=ws[r]||(ws[r]=[]);~e.indexOf(t)||e.push(t)};Vt.removeEventListener=function(r,t){var e=ws[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Vt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Lt.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&An(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return An(s)&&(s=s(),fn(Vt,"refresh",function(){return s=t.batchMax()})),ba(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Vt.create(c))}),e};var Vm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},_f=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===ci&&r(Se,e)},jl={auto:1,scroll:1},Uy=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Lt.core.getCache(s),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Se&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(jl[(l=Mi(s)).overflowY]||jl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!bs(s)&&(jl[(l=Mi(s)).overflowY]||jl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},lg=function(t,e,n,i){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Uy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(be,qe.eventTypes[0],Wm,!1,!0)},onDisable:function(){return hn(be,qe.eventTypes[0],Wm,!0)}})},Fy=/(input|label|select|textarea)/i,Hm,Wm=function(t){var e=Fy.test(t.target.tagName);(e||Hm)&&(t._gsapAllow=!0,Hm=e)},By=function(t){xs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Fn(t.target)||ci,u=Lt.core.globals().ScrollSmoother,f=u&&u.get(),h=kr&&(t.content&&Fn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=lr(c,$e),g=lr(c,wn),_=1,m=(qe.isTouch&&ne.visualViewport?ne.visualViewport.scale*ne.visualViewport.width:ne.outerWidth)/ne.innerWidth,x=0,v=An(i)?function(){return i(a)}:function(){return i||2.8},T,S,w=lg(c,t.type,!0,s),C=function(){return S=!1},p=Vi,y=Vi,M=function(){l=Hi(c,$e),y=_a(kr?1:0,l),n&&(p=_a(0,Hi(c,wn))),T=Ms},b=function(){h._gsap.y=pa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(S){requestAnimationFrame(C);var Z=pa(a.deltaY/2),H=y(d.v-Z);if(h&&H!==d.v+d.offset){d.offset=H-d.v;var I=pa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",h._gsap.y=I+"px",d.cacheID=$t.cache,hr()}return!0}d.offset&&b(),S=!0},P,U,D,z,G=function(){M(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return h&&Lt.set(h,{y:"+=0"}),t.ignoreCheck=function(O){return kr&&O.type==="touchmove"&&R(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){S=!1;var O=_;_=pa((ne.visualViewport&&ne.visualViewport.scale||1)/m),P.pause(),O!==_&&_f(c,_>1.01?!0:n?!1:"x"),U=g(),D=d(),M(),T=Ms},t.onRelease=t.onGestureStart=function(O,Z){if(d.offset&&b(),!Z)z.restart(!0);else{$t.cache++;var H=v(),I,et;n&&(I=g(),et=I+H*.05*-O.velocityX/.227,H*=Vm(g,I,et,Hi(c,wn)),P.vars.scrollX=p(et)),I=d(),et=I+H*.05*-O.velocityY/.227,H*=Vm(d,I,et,Hi(c,$e)),P.vars.scrollY=y(et),P.invalidate().duration(H).play(.01),(kr&&P.vars.scrollY>=l||I>=l-1)&&Lt.to({},{onUpdate:G,duration:H})}o&&o(O)},t.onWheel=function(){P._ts&&P.pause(),En()-x>1e3&&(T=0,x=En())},t.onChange=function(O,Z,H,I,et){if(Ms!==T&&M(),Z&&n&&g(p(I[2]===Z?U+(O.startX-O.x):g()+Z-I[1])),H){d.offset&&b();var xt=et[2]===H,yt=xt?D+O.startY-O.y:d()+H-et[1],J=y(yt);xt&&yt!==J&&(D+=J-yt),d(J)}(H||Z)&&hr()},t.onEnable=function(){_f(c,n?!1:"x"),Vt.addEventListener("refresh",G),fn(ne,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},t.onDisable=function(){_f(c,!0),hn(ne,"resize",G),Vt.removeEventListener("refresh",G),w.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=kr,kr&&!d()&&d(1),kr&&Lt.ticker.add(Vi),z=a._dc,P=Lt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ag(d,d(),function(){return P.pause()})},onUpdate:hr,onComplete:z.vars.onComplete}),a};Vt.sort=function(r){if(An(r))return ee.sort(r);var t=ne.pageYOffset||0;return Vt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ne.innerHeight}),ee.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Vt.observe=function(r){return new qe(r)};Vt.normalizeScroll=function(r){if(typeof r>"u")return Bn;if(r===!0&&Bn)return Bn.enable();if(r===!1){Bn&&Bn.kill(),Bn=r;return}var t=r instanceof qe?r:By(r);return Bn&&Bn.target===t.target&&Bn.kill(),bs(t.target)&&(Bn=t),t};Vt.core={_getVelocityProp:Gl,_inputObserver:lg,_scrollers:$t,_proxies:Ri,bridge:{ss:function(){bi||Ts("scrollStart"),bi=En()},ref:function(){return Tn}}};Km()&&Lt.registerPlugin(Vt);var Ta,Ea,cg=typeof Symbol=="function"?Symbol():"_split",Nf,zy=()=>Nf||Es.register(window.gsap),ug=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Aa=r=>r?typeof r=="string"?Aa(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...Aa(e)):t.push(e),t),[]):[r]:[],hg=r=>Aa(r).filter(t=>t&&t.nodeType===1),ac=[],Df=function(){},ky={add:r=>r()},Gy=/\s+/g,fg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),lc={left:0,top:0,width:0,height:0},Vy=(r,t)=>{for(;++t<r.length&&r[t]===lc;);return r[t]||lc},dg=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},pg=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||ac),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},mg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),fo=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),Of=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),h=e.length+1;return n&&(f.className=n+(l?" "+n+h:"")),o&&f.style.setProperty("--"+r,h+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=u,e.push(f),f};return l&&(n=n.replace("++","")),c.collection=e,c},Hy=(r,t,e,n)=>{let i=Of("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},gg=(r,t,e,n,i,s,o,a,l,c)=>{var u;let f=Array.from(r.childNodes),h=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=t,m=r.getBoundingClientRect(),x=m,v=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",T=s&&c&&window.getComputedStyle(r).direction==="rtl",S=0,w=e.collection,C,p,y,M,b,R,P,U,D,z,G,O,Z,H,I,et,xt,yt;for(typeof d=="object"?(y=d.delimiter||d,p=d.replaceWith||""):p=d===""?"":d||" ",C=p!==" ";h<f.length;h++)if(M=f[h],M.nodeType===3){for(I=M.textContent||"",g?I=I.replace(Gy," "):v&&(I=I.replace(/\n/g,p+`
`)),_&&(I=_(I,r)),M.textContent=I,b=p||y?I.split(y||p):I.match(a)||ac,xt=b[b.length-1],U=C?xt.slice(-1)===" ":!xt,xt||b.pop(),x=m,P=C?b[0].charAt(0)===" ":!b[0],P&&fo(" ",r,M),b[0]||b.shift(),pg(b,l),s&&c||(M.textContent=""),D=1;D<=b.length;D++)if(et=b[D-1],!g&&v&&et.charAt(0)===`
`&&((u=M.previousSibling)==null||u.remove(),fo(document.createElement("br"),r,M),et=et.slice(1)),!g&&et==="")fo(p,r,M);else if(et===" ")r.insertBefore(document.createTextNode(" "),M);else{if(C&&et.charAt(0)===" "&&fo(" ",r,M),S&&D===1&&!P&&w.indexOf(S.parentNode)>-1?(R=w[w.length-1],R.appendChild(document.createTextNode(n?"":et))):(R=e(n?"":et),fo(R,r,M),S&&D===1&&!P&&R.insertBefore(S,R.firstChild)),n){if(G=ug?pg([...ug.segment(et)].map(J=>J.segment),l):et.match(a)||ac,l){let J=et.match(l);J&&J.some(at=>G.indexOf(at)<0)&&(G=et.match(a)||ac)}for(yt=0;yt<G.length;yt++)R.appendChild(G[yt]===" "?document.createTextNode(" "):n(G[yt]))}if(s&&c){if(I=M.textContent=I.substring(et.length+1,I.length),z=R.getBoundingClientRect(),z.top>x.top&&(T?z.left>=x.left:z.left<=x.left)){for(O=r.cloneNode(),Z=r.childNodes[0];Z&&Z!==R;)H=Z,Z=Z.nextSibling,O.appendChild(H);r.parentNode.insertBefore(O,r),i&&mg(O)}x=z}(D<b.length||U)&&fo(D>=b.length?" ":C&&et.slice(-1)===" "?" "+p:p,r,M)}r.removeChild(M),S=0}else M.nodeType===1&&(o&&o.indexOf(M)>-1?(w.indexOf(M.previousSibling)>-1&&w[w.length-1].appendChild(M),S=M):(gg(M,t,e,n,i,s,o,a,l,!0),S=0),i&&mg(M))},_g=class xg{constructor(t,e){this.isSplit=!1,zy(),this.elements=hg(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(s=>{var o;e.overwrite!==!1&&((o=s[cg])==null||o._data.orig.filter(({element:a})=>a===s).forEach(dg)),s[cg]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let s=n.length,o;for(;s--;){o=n[s];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Df(this),this.split(e)}split(t){return(this._ctx||ky).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=e.indexOf("lines")>-1,f=e.indexOf("chars")>-1,h=e.indexOf("words")>-1,d=f&&!h&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+fg.source,"gu"):fg,m=!!t.ignore&&hg(t.ignore),{orig:x,animTime:v,obs:T}=this._data,S;(f||h||u)&&(this.elements.forEach((w,C)=>{x[C]={element:w,html:w.innerHTML,ariaL:w.getAttribute("aria-label"),ariaH:w.getAttribute("aria-hidden")},n==="auto"?w.setAttribute("aria-label",(w.textContent||"").trim()):n==="hidden"&&w.setAttribute("aria-hidden","true");let p=[],y=[],M=[],b=f?Of("char",t,p):null,R=Of("word",t,y),P,U,D,z;if(gg(w,t,R,b,d,i&&(u||d),m,_,g,!1),u){let G=Aa(w.childNodes),O=Hy(w,G,t,M),Z,H=[],I=0,et=window.getComputedStyle(w).direction==="rtl",xt=G.map(at=>at.nodeType===1?at.getBoundingClientRect():lc),yt=lc,J;for(P=0;P<G.length;P++)Z=G[P],Z.nodeType===1&&(Z.nodeName==="BR"?((!P||G[P-1].nodeName!=="BR")&&(H.push(Z),O(I,P+1)),I=P+1,yt=Vy(xt,P)):(J=xt[P],P&&J.top>yt.top&&(et?J.left+J.width>yt.left+1:J.left<yt.left+yt.width-1)&&(O(I,P),I=P),yt=J));I<P&&O(I,P),H.forEach(at=>{var pt;return(pt=at.parentNode)==null?void 0:pt.removeChild(at)})}if(!h){for(P=0;P<y.length;P++)if(U=y[P],f||!U.nextSibling||U.nextSibling.nodeType!==3)if(s&&!u){for(D=document.createElement("span"),D.style.whiteSpace="nowrap";U.firstChild;)D.appendChild(U.firstChild);U.replaceWith(D)}else U.replaceWith(...U.childNodes);else z=U.nextSibling,z&&z.nodeType===3&&(z.textContent=(U.textContent||"")+(z.textContent||""),U.remove());y.length=0,w.normalize()}this.lines.push(...M),this.words.push(...y),this.chars.push(...p)}),c&&this[c]&&this.masks.push(...this[c].map(w=>{let C=w.cloneNode();return w.replaceWith(C),C.appendChild(w),w.className&&(C.className=w.className.trim().split(" ").map(p=>p+"-mask").join(" ")),C.style.overflow="clip",C.style.verticalAlign="top",C}))),this.isSplit=!0,Ea&&u&&a&&Ea.addEventListener("loadingdone",this._split),(S=o&&o(this))&&S.totalTime&&(this._data.anim=v?S.totalTime(v):S),u&&a&&this.elements.forEach((w,C)=>{x[C].width=w.offsetWidth,T&&T.observe(w)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),Ea?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(dg),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new xg(t,e)}static register(t){Ta=Ta||t||window.gsap,Ta&&(Aa=Ta.utils.toArray,Df=Ta.core.context||Df),!Nf&&window.innerWidth>0&&(Ea=document.fonts,Nf=!0)}};_g.version="3.15.1";var Es=_g;var Wi,Bf,Wy,fc,Tg,Eg,vg,Ff,Ag,Cg=function(){return typeof window<"u"},Rg=function(){return Wi||Cg()&&(Wi=window.gsap)&&Wi.registerPlugin&&Wi},Xy=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Uf={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},As=function(t){return Math.round(t*1e4)/1e4},fr=function(t){return parseFloat(t)||0},yg=function(t,e){var n=fr(t);return~t.indexOf("%")?n/100*e:n},cc=function(t,e){return fr(t.getAttribute(e))},uc=Math.sqrt,Sg=function(t,e,n,i,s,o){return uc(Math.pow((fr(n)-fr(t))*s,2)+Math.pow((fr(i)-fr(e))*o,2))},Mg=function(t){return console.warn(t)},Pg=function(t){return t.getAttribute("vector-effect")==="non-scaling-stroke"},qy=1,Yy=function(t,e,n){var i=t.indexOf(" "),s,o;return i<0?(s=n!==void 0?n+"":t,o=t):(s=t.substr(0,i),o=t.substr(i+1)),s=yg(s,e),o=yg(o,e),s>o?[o,s]:[s,o]},hc=function(t){if(t=Bf(t)[0],!t)return 0;var e=t.tagName.toLowerCase(),n=t.style,i=1,s=1,o,a,l,c,u,f,h;Pg(t)&&(s=t.getScreenCTM(),i=uc(s.a*s.a+s.b*s.b),s=uc(s.d*s.d+s.c*s.c));try{a=t.getBBox()}catch{Mg("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var d=a||{x:0,y:0,width:0,height:0},g=d.x,_=d.y,m=d.width,x=d.height;if((!a||!m&&!x)&&Uf[e]&&(m=cc(t,Uf[e][0]),x=cc(t,Uf[e][1]),e!=="rect"&&e!=="line"&&(m*=2,x*=2),e==="line"&&(g=cc(t,"x1"),_=cc(t,"y1"),m=Math.abs(m-g),x=Math.abs(x-_))),e==="path")c=n.strokeDasharray,n.strokeDasharray="none",o=t.getTotalLength()||0,As(i)!==As(s)&&!vg&&(vg=1)&&Mg("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(i+s)/2,n.strokeDasharray=c;else if(e==="rect")o=m*2*i+x*2*s;else if(e==="line")o=Sg(g,_,g+m,_+x,i,s);else if(e==="polyline"||e==="polygon")for(l=t.getAttribute("points").match(Xy)||[],e==="polygon"&&l.push(l[0],l[1]),o=0,u=2;u<l.length;u+=2)o+=Sg(l[u-2],l[u-1],l[u],l[u+1],i,s)||0;else(e==="circle"||e==="ellipse")&&(f=m/2*i,h=x/2*s,o=Math.PI*(3*(f+h)-uc((3*f+h)*(f+3*h))));return o||0},bg=function(t,e){if(t=Bf(t)[0],!t)return[0,0];e||(e=hc(t)+1);var n=fc.getComputedStyle(t),i=n.strokeDasharray||"",s=fr(n.strokeDashoffset),o=i.indexOf(",");return o<0&&(o=i.indexOf(" ")),i=o<0?e:fr(i.substr(0,o)),i>e&&(i=e),[-s||0,i-s||0]},wg=function(){Cg()&&(Wy=document,fc=window,Eg=Wi=Rg(),Bf=Wi.utils.toArray,Ff=Wi.core.getStyleSaver,Ag=Wi.core.reverting||function(){},Tg=((fc.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},zf={version:"3.15.1",name:"drawSVG",register:function(t){Wi=t,wg()},init:function(t,e,n,i,s){if(!t.getBBox)return!1;Eg||wg();var o=hc(t),a,l,c;return this.styles=Ff&&Ff(t,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=n,this._style=t.style,this._target=t,e+""=="true"?e="0 100%":e?(e+"").indexOf(" ")===-1&&(e="0 "+e):e="0 0",a=bg(t,o),l=Yy(e,o,a[0]),this._length=As(o),this._dash=As(a[1]-a[0]),this._offset=As(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,As(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,As(-l[0]),0,0,0,0,0,1),Tg&&(c=fc.getComputedStyle(t),c.strokeLinecap!==c.strokeLinejoin&&(l=fr(c.strokeMiterlimit),this.add(t.style,"strokeMiterlimit",l,l+.01))),this._live=Pg(t)||~(e+"").indexOf("live"),this._nowrap=~(e+"").indexOf("nowrap"),this._props.push("drawSVG"),qy},render:function(t,e){if(e.tween._time||!Ag()){var n=e._pt,i=e._style,s,o,a,l;if(n){for(e._live&&(s=hc(e._target),s!==e._length&&(o=s/e._length,e._length=s,e._offsetPT&&(e._offsetPT.s*=o,e._offsetPT.c*=o),e._dashPT?(e._dashPT.s*=o,e._dashPT.c*=o):e._dash*=o));n;)n.r(t,n.d),n=n._next;a=e._dash||t&&t!==1&&1e-4||0,s=e._length-a+.1,l=e._offset,a&&l&&a+Math.abs(l%e._length)>e._length-.05&&(l+=l<0?.005:-.005)&&(s+=.005),i.strokeDashoffset=a?l:l+.001,i.strokeDasharray=s<.1?"none":a?a+"px,"+(e._nowrap?999999:s)+"px":"0px, 999999px"}}else e.styles.revert()},getLength:hc,getPosition:bg};Rg()&&Wi.registerPlugin(zf);var Ca=document.documentElement;function Zy(){try{return JSON.parse(localStorage.getItem("prefs")||"{}")||{}}catch{return{}}}function Jy(){try{return JSON.parse(document.getElementById("site-data").textContent)}catch{return{atlas:[],arcs:[],s:{}}}}var Ig=Zy(),Rt={root:Ca,lang:Ca.lang||"en",rtl:Ca.dir==="rtl",dir:Ca.dir==="rtl"?-1:1,reduced:window.matchMedia("(prefers-reduced-motion: reduce)").matches||!!Ig.motion,touch:window.matchMedia("(hover: none), (pointer: coarse)").matches,small:window.matchMedia("(max-width: 900px)").matches,arriving:Ca.classList.contains("arrive"),prefs:Ig,data:Jy()};function kf(){try{localStorage.setItem("prefs",JSON.stringify(Rt.prefs))}catch{}}var dc=r=>new Promise(t=>setTimeout(t,r));var Gf=(r,t)=>String(r||"").replace(/\{(\w+)\}/g,(e,n)=>n in t?t[n]:e);function Lg(r,t){let e;return(...n)=>{clearTimeout(e),e=setTimeout(()=>r(...n),t)}}function Ye(r,t){try{return t()}catch(e){console.error(`[${r}]`,e);return}}var Dg="1.3.27";function Ug(r,t,e){return Math.max(r,Math.min(t,e))}function Ky(r,t,e){return(1-e)*r+e*t}function jy(r,t,e,n){return Ky(r,t,1-Math.exp(-e*n))}function Qy(r,t){return(r%t+t)%t}var $y=class{constructor(){zt(this,"isRunning",!1);zt(this,"value",0);zt(this,"from",0);zt(this,"to",0);zt(this,"currentTime",0);zt(this,"lerp");zt(this,"duration");zt(this,"easing");zt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Ug(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=jy(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function tS(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var eS=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){zt(this,"width",0);zt(this,"height",0);zt(this,"scrollHeight",0);zt(this,"scrollWidth",0);zt(this,"debouncedResize");zt(this,"wrapperResizeObserver");zt(this,"contentResizeObserver");zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=tS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Fg=class{constructor(){zt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},nS=100/6,Vr={passive:!1};function Ng(r,t){return r===1?nS:r===2?t:1}var iS=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){zt(this,"touchStart",{x:0,y:0});zt(this,"lastDelta",{x:0,y:0});zt(this,"window",{width:0,height:0});zt(this,"emitter",new Fg);zt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});zt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});zt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});zt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Ng(n,this.window.width),s=Ng(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vr),this.element.addEventListener("touchstart",this.onTouchStart,Vr),this.element.addEventListener("touchmove",this.onTouchMove,Vr),this.element.addEventListener("touchend",this.onTouchEnd,Vr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Vr),this.element.removeEventListener("touchstart",this.onTouchStart,Vr),this.element.removeEventListener("touchmove",this.onTouchMove,Vr),this.element.removeEventListener("touchend",this.onTouchEnd,Vr)}},Og=r=>Math.min(1,1.001-2**(-10*r)),Bg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:x,overscroll:v=!0,autoRaf:T=!1,anchors:S=!1,autoToggle:w=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:p=!1,naiveDimensions:y=p,stopInertiaOnNavigate:M=!1,respectReducedMotion:b=!0}={}){zt(this,"_isScrolling",!1);zt(this,"_isStopped",!1);zt(this,"_isLocked",!1);zt(this,"_preventNextNativeScrollEvent",!1);zt(this,"_resetVelocityTimeout",null);zt(this,"_rafId",null);zt(this,"_isDraggingSelection",!1);zt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));zt(this,"isTouching");zt(this,"isIos");zt(this,"time",0);zt(this,"userData",{});zt(this,"lastVelocity",0);zt(this,"velocity",0);zt(this,"direction",0);zt(this,"options");zt(this,"targetScroll");zt(this,"animatedScroll");zt(this,"animate",new $y);zt(this,"emitter",new Fg);zt(this,"dimensions");zt(this,"virtualScroll");zt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});zt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});zt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});zt(this,"onPointerDown",r=>{r.button===1&&this.reset()});zt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});zt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Dg,window.lenis||(window.lenis={}),window.lenis.version=Dg,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Og:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:x,overscroll:v,autoRaf:T,anchors:S,autoToggle:w,allowNestedScroll:C,naiveDimensions:y,stopInertiaOnNavigate:M,respectReducedMotion:b},this.dimensions=new eS(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new iS(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(g=h),g){if(this.options.wrapper!==window){let S=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?S.left:S.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),x=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(T)?0:T)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=Ug(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Og:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,u,f,h,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();let C=window.getComputedStyle(r);if(i.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),o=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=f>d,l=h>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,x,v,T,S,w;if(_==="horizontal")m=Math.round(r.scrollLeft),x=f-d,v=t,T=s,S=a,w=c;else if(_==="vertical")m=Math.round(r.scrollTop),x=h-g,v=e,T=o,S=l,w=u;else return!1;return!w&&(m>=x||m<=0)?!0:(v>0?m<x:m>0)&&T&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Qy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Pi=null,pc=0,rS=()=>-((document.getElementById("nav")?.offsetHeight||72)-1);function zg(){Rt.reduced||(Pi=new Bg({lerp:.11,wheelMultiplier:1,autoRaf:!1}),Pi.on("scroll",Vt.update),jt.ticker.add(t=>Pi.raf(t*1e3)),jt.ticker.lagSmoothing(0)),document.addEventListener("click",t=>{let e=t.target.closest('a[href^="#"]');if(!e||t.defaultPrevented)return;let n=e.getAttribute("href"),i=n.length>1?document.querySelector(n):null;i&&(t.preventDefault(),requestAnimationFrame(()=>dr(i,{keyboard:t.detail===0})),history.replaceState(null,"",n))});let r=document.querySelector("main");if(r&&"ResizeObserver"in window){let t=r.offsetHeight,e=Lg(()=>Vt.refresh(),250);new ResizeObserver(()=>{let n=r.offsetHeight;Math.abs(n-t)>2&&(t=n,e())}).observe(r)}}function dr(r,{keyboard:t=!1,offset:e}={}){let n=e??(r.id==="top"?0:rS());if(Pi)Pi.scrollTo(r,{offset:n,immediate:t,duration:1.3,easing:i=>1-Math.pow(1-i,4),force:!0});else{let i=r.getBoundingClientRect().top+window.scrollY+n;window.scrollTo(0,Math.max(0,i))}t&&r.id!=="top"&&(r.hasAttribute("tabindex")||r.setAttribute("tabindex","-1"),r.focus({preventScroll:!0}))}function kg(r){Pi?Pi.scrollTo(r,{immediate:!0,force:!0}):window.scrollTo(0,r)}function Gg(){pc++,Pi&&Pi.stop()}function Vg(){pc=Math.max(0,pc-1),!pc&&Pi&&Pi.start()}var Hg=r=>r.replace(/index\.html$/,""),sS=r=>r.protocol===location.protocol&&r.host===location.host&&/(\.html|\/)$/.test(r.pathname),mc=r=>{try{return r(sessionStorage)}catch{return null}};function oS(r,t){if(document.querySelectorAll("dialog[open]").forEach(n=>n.close()),mc(n=>n.setItem("arrive","1")),t||Rt.reduced){window.location.href=r;return}let e=document.createElement("div");e.className="curtain",document.body.appendChild(e),jt.to(e,{clipPath:"inset(0% 0 0 0)",duration:.26,ease:"power2.inOut",onComplete:()=>{window.location.href=r}}),setTimeout(()=>e.remove(),6e3)}function Vf(r,{keyboard:t=!1}={}){let e=new URL(r,window.location.href);if(Hg(e.pathname)!==Hg(window.location.pathname)){oS(e.href,t);return}let n=e.hash?document.getElementById(decodeURIComponent(e.hash.slice(1))):document.body;n&&dr(n,{keyboard:t})}function Wg(){document.addEventListener("click",r=>{let t=r.target.closest("a[href]");if(!t||r.defaultPrevented||r.button!==0||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||t.target||t.hasAttribute("download")||t.getAttribute("href").startsWith("#"))return;let e=new URL(t.href);sS(e)&&(r.preventDefault(),t.hasAttribute("hreflang")&&(e.hash=window.location.hash),Vf(e.href,{keyboard:r.detail===0}))}),window.addEventListener("pagehide",()=>{mc(r=>r.setItem(`y:${window.location.pathname}`,String(Math.round(window.scrollY))))}),window.addEventListener("pageshow",r=>{r.persisted&&(document.querySelectorAll(".curtain").forEach(t=>t.remove()),mc(t=>t.removeItem("arrive")))})}function Xg(){let[r]=performance.getEntriesByType("navigation");if(!r||r.type!=="back_forward")return;let t=Number(mc(e=>e.getItem(`y:${window.location.pathname}`)))||0;t>0&&kg(t)}var v0=0,xd=1,y0=2;var Qa=1,S0=2,Fo=3,ts=0,Hn=1,ji=2,Ds=0,Bo=1,Ns=2,vd=3,yd=4,M0=5;var Os=100,b0=101,w0=102,T0=103,E0=104,A0=200,C0=201,R0=202,P0=203,Sd=204,Md=205,I0=206,L0=207,D0=208,N0=209,O0=210,U0=211,F0=212,B0=213,z0=214,Vc=0,Hc=1,Wc=2,Co=3,Xc=4,qc=5,Yc=6,Zc=7,bd=0,k0=1,G0=2,Qi=0,wd=1,Td=2,Ed=3,Ad=4,Cd=5,Rd=6,Pd=7;var Id=300,Us=301,zo=302,Tu=303,Eu=304,Jc=1e3,qi=1001,Kc=1002,Ke=1003,V0=1004;var $a=1005;var Vn=1006,Au=1007;var wr=1008;var mi=1009,Ld=1010,Dd=1011,ko=1012,Cu=1013,Oi=1014,Ui=1015,Fi=1016,Ru=1017,Pu=1018,Fs=1020,Nd=35902,Od=35899,Ud=1021,Fd=1022,gi=1023,Sr=1026,Tr=1027,Bd=1028,Iu=1029,es=1030,Lu=1031;var Du=1033,tl=33776,el=33777,nl=33778,il=33779,Nu=35840,Ou=35841,Uu=35842,Fu=35843,Bu=36196,zu=37492,ku=37496,Gu=37488,Vu=37489,rl=37490,Hu=37491,Wu=37808,Xu=37809,qu=37810,Yu=37811,Zu=37812,Ju=37813,Ku=37814,ju=37815,Qu=37816,$u=37817,th=37818,eh=37819,nh=37820,ih=37821,rh=36492,sh=36494,oh=36495,ah=36283,lh=36284,sl=36285,ch=36286;var Oa=2300,jc=2301,kc=2302,hd=2303,fd=2400,dd=2401,pd=2402;var H0=3200;var zd=0,W0=1,Er="",fi="srgb",Ua="srgb-linear",Fa="linear",Me="srgb";var Gc=7680;var X0=519,q0=512,Y0=513,Z0=514,kd=515,J0=516,K0=517,Gd=518,Vd=519,j0=35044;var Hd="300 es",Ti=2e3,Ba=2001;function aS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function za(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Q0(){let r=za("canvas");return r.style.display="block",r}var qg={},Ro=null;function Wd(...r){let t="THREE."+r.shift();Ro?Ro("log",t,...r):console.log(t,...r)}function $0(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xt(...r){r=$0(r);let t="THREE."+r.shift();if(Ro)Ro("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Yt(...r){r=$0(r);let t="THREE."+r.shift();if(Ro)Ro("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Na(...r){let t=r.join(" ");t in qg||(qg[t]=!0,Xt(...r))}function t_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var e_={[Vc]:Vc,[Wc]:Yc,[Xc]:Xc,[Co]:qc,[Hc]:Hc,[Yc]:Wc,[Zc]:Zc,[qc]:Co},Yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hf=Math.PI/180,Qc=180/Math.PI;function ol(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function fe(r,t,e){return Math.max(t,Math.min(e,r))}function cS(r,t){return(r%t+t)%t}function Wf(r,t,e){return(1-e)*r+e*t}function n_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xd(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uS(r,t){if(t.constructor===Float32Array)return r;let e=Xd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function hS(r,t){if(t.constructor===Float32Array)return r;let e=Xd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var Kd=class Kd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kd.prototype.isVector2=!0;var ue=Kd,Zi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let x=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);x=Math.sin(x*v)/T,a=Math.sin(a*v)/T,l=l*x+h*a,c=c*x+d*a,u=u*x+g*a,f=f*x+_*a}else{l=l*x+h*a,c=c*x+d*a,u=u*x+g*a,f=f*x+_*a;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jd=class jd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xf.copy(this).projectOnVector(t),this.sub(Xf)}reflect(t){return this.sub(Xf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jd.prototype.isVector3=!0;var Q=jd,Xf=new Q,Yg=new Zi,Qd=class Qd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],x=i[6],v=i[1],T=i[4],S=i[7],w=i[2],C=i[5],p=i[8];return s[0]=o*_+a*v+l*w,s[3]=o*m+a*T+l*C,s[6]=o*x+a*S+l*p,s[1]=c*_+u*v+f*w,s[4]=c*m+u*T+f*C,s[7]=c*x+u*S+f*p,s[2]=h*_+d*v+g*w,s[5]=h*m+d*T+g*C,s[8]=h*x+d*S+g*p,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Na("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qf.makeScale(t,e)),this}rotate(t){return Na("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qf.makeRotation(-t)),this}translate(t,e){return Na("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qd.prototype.isMatrix3=!0;var qt=Qd,qf=new qt,Zg=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fS(){let r={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(i.r=Ao(i.r),i.g=Ao(i.g),i.b=Ao(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Er?Fa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ua]:{primaries:t,whitePoint:n,transfer:Fa,toXYZ:Zg,fromXYZ:Jg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Zg,fromXYZ:Jg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}var ce=fS();function yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var po,$c=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{po===void 0&&(po=za("canvas")),po.width=t.width,po.height=t.height;let i=po.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=po}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=za("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yr(e[n]/255)*255):e[n]=yr(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dS=0,Po=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Yf(i[o].image)):s.push(Yf(i[o]))}else s=Yf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Yf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var pS=0,Zf=new Q,jn=class r extends Yi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=qi,i=qi,s=Vn,o=wr,a=gi,l=mi,c=r.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=ol(),this.name="",this.source=new Po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zf).x}get height(){return this.source.getSize(Zf).y}get depth(){return this.source.getSize(Zf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jc:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jc:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Id;jn.DEFAULT_ANISOTROPY=1;var $d=class $d{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,S=(d+1)/2,w=(x+1)/2,C=(u+h)/4,p=(f+_)/4,y=(g+m)/4;return T>S&&T>w?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=C/n,s=p/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=C/i,s=y/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=p/s,i=y/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;var Le=$d,tu=class extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new jn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Po(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends tu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ka=class extends jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eu=class extends jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wu=class wu{constructor(t,e,n,i,s,o,a,l,c,u,f,h,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,f,h,d,g,_,m){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=f,x[14]=h,x[3]=d,x[7]=g,x[11]=_,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/mo.setFromMatrixColumn(t,0).length(),s=1/mo.setFromMatrixColumn(t,1).length(),o=1/mo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){let h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mS,t,gS)}lookAt(t,e,n){let i=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Hr.crossVectors(n,ui),Hr.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Hr.crossVectors(n,ui)),Hr.normalize(),gc.crossVectors(ui,Hr),i[0]=Hr.x,i[4]=gc.x,i[8]=ui.x,i[1]=Hr.y,i[5]=gc.y,i[9]=ui.y,i[2]=Hr.z,i[6]=gc.z,i[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],x=n[14],v=n[3],T=n[7],S=n[11],w=n[15],C=i[0],p=i[4],y=i[8],M=i[12],b=i[1],R=i[5],P=i[9],U=i[13],D=i[2],z=i[6],G=i[10],O=i[14],Z=i[3],H=i[7],I=i[11],et=i[15];return s[0]=o*C+a*b+l*D+c*Z,s[4]=o*p+a*R+l*z+c*H,s[8]=o*y+a*P+l*G+c*I,s[12]=o*M+a*U+l*O+c*et,s[1]=u*C+f*b+h*D+d*Z,s[5]=u*p+f*R+h*z+d*H,s[9]=u*y+f*P+h*G+d*I,s[13]=u*M+f*U+h*O+d*et,s[2]=g*C+_*b+m*D+x*Z,s[6]=g*p+_*R+m*z+x*H,s[10]=g*y+_*P+m*G+x*I,s[14]=g*M+_*U+m*O+x*et,s[3]=v*C+T*b+S*D+w*Z,s[7]=v*p+T*R+S*z+w*H,s[11]=v*y+T*P+S*G+w*I,s[15]=v*M+T*U+S*O+w*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],x=t[15],v=l*d-c*h,T=a*d-c*f,S=a*h-l*f,w=o*d-c*u,C=o*h-l*u,p=o*f-a*u;return e*(_*v-m*T+x*S)-n*(g*v-m*w+x*C)+i*(g*T-_*w+x*p)-s*(g*S-_*C+m*p)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],x=t[15],v=e*a-n*o,T=e*l-i*o,S=e*c-s*o,w=n*l-i*a,C=n*c-s*a,p=i*c-s*l,y=u*_-f*g,M=u*m-h*g,b=u*x-d*g,R=f*m-h*_,P=f*x-d*_,U=h*x-d*m,D=v*U-T*P+S*R+w*b-C*M+p*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return t[0]=(a*U-l*P+c*R)*z,t[1]=(i*P-n*U-s*R)*z,t[2]=(_*p-m*C+x*w)*z,t[3]=(h*C-f*p-d*w)*z,t[4]=(l*b-o*U-c*M)*z,t[5]=(e*U-i*b+s*M)*z,t[6]=(m*S-g*p-x*T)*z,t[7]=(u*p-h*S+d*T)*z,t[8]=(o*P-a*b+c*y)*z,t[9]=(n*b-e*P-s*y)*z,t[10]=(g*C-_*S+x*v)*z,t[11]=(f*S-u*C-d*v)*z,t[12]=(a*M-o*R-l*y)*z,t[13]=(e*R-n*M+i*y)*z,t[14]=(_*T-g*w-m*v)*z,t[15]=(u*w-f*T+h*v)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,x=a*f,v=l*c,T=l*u,S=l*f,w=n.x,C=n.y,p=n.z;return i[0]=(1-(_+x))*w,i[1]=(d+S)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(d-S)*C,i[5]=(1-(h+x))*C,i[6]=(m+v)*C,i[7]=0,i[8]=(g+T)*p,i[9]=(m-v)*p,i[10]=(1-(h+_))*p,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=mo.set(i[0],i[1],i[2]).length(),a=mo.set(i[4],i[5],i[6]).length(),l=mo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ii.copy(this);let c=1/o,u=1/a,f=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Ti,l=!1){let c=this.elements,u=2*s/(e-t),f=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Ti)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ba)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ti,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-i),h=-(e+t)/(e-t),d=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Ti)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ba)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wu.prototype.isMatrix4=!0;var Ie=wu,mo=new Q,Ii=new Ie,mS=new Q(0,0,0),gS=new Q(1,1,1),Hr=new Q,gc=new Q,ui=new Q,Kg=new Ie,jg=new Zi,Ji=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jg.setFromEuler(this),this.setFromQuaternion(jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var Ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_S=0,Qg=new Q,go=new Zi,pr=new Ie,_c=new Q,Ra=new Q,xS=new Q,vS=new Zi,$g=new Q(1,0,0),t0=new Q(0,1,0),e0=new Q(0,0,1),n0={type:"added"},yS={type:"removed"},_o={type:"childadded",child:null},Jf={type:"childremoved",child:null},Qn=class r extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Q,e=new Ji,n=new Zi,i=new Q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new qt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return go.setFromAxisAngle(t,e),this.quaternion.multiply(go),this}rotateOnWorldAxis(t,e){return go.setFromAxisAngle(t,e),this.quaternion.premultiply(go),this}rotateX(t){return this.rotateOnAxis($g,t)}rotateY(t){return this.rotateOnAxis(t0,t)}rotateZ(t){return this.rotateOnAxis(e0,t)}translateOnAxis(t,e){return Qg.copy(t).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($g,t)}translateY(t){return this.translateOnAxis(t0,t)}translateZ(t){return this.translateOnAxis(e0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_c.copy(t):_c.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Ra,_c,this.up):pr.lookAt(_c,Ra,this.up),this.quaternion.setFromRotationMatrix(pr),i&&(pr.extractRotation(i.matrixWorld),go.setFromRotationMatrix(pr),this.quaternion.premultiply(go.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n0),_o.child=t,this.dispatchEvent(_o),_o.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yS),Jf.child=t,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pr.multiply(t.parent.matrixWorld)),t.applyMatrix4(pr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n0),_o.child=t,this.dispatchEvent(_o),_o.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,xS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,vS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qn.DEFAULT_UP=new Q(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vr=class extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}},SS={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),x=this._getHandJoint(c,_);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Kf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=cS(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Kf(o,s,t+1/3),this.g=Kf(o,s,t),this.b=Kf(o,s,t-1/3)}return ce.colorSpaceToWorking(this,i),this}setStyle(t,e=fi){function n(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fi){let n=i_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return ce.workingToColorSpace(Rn.copy(this),t),Math.round(fe(Rn.r*255,0,255))*65536+Math.round(fe(Rn.g*255,0,255))*256+Math.round(fe(Rn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,s=Rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=fi){ce.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==fi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wr),this.setHSL(Wr.h+t,Wr.s+e,Wr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wr),t.getHSL(xc);let n=Wf(Wr.h,xc.h,e),i=Wf(Wr.s,xc.s,e),s=Wf(Wr.l,xc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new de;de.NAMES=i_;var Va=class extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new Q,mr=new Q,jf=new Q,gr=new Q,xo=new Q,vo=new Q,i0=new Q,Qf=new Q,$f=new Q,td=new Q,ed=new Le,nd=new Le,id=new Le,Zr=class r{constructor(t=new Q,e=new Q,n=new Q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Li.subVectors(i,e),mr.subVectors(n,e),jf.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(mr),l=Li.dot(jf),c=mr.dot(mr),u=mr.dot(jf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return ed.setScalar(0),nd.setScalar(0),id.setScalar(0),ed.fromBufferAttribute(t,e),nd.fromBufferAttribute(t,n),id.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ed,s.x),o.addScaledVector(nd,s.y),o.addScaledVector(id,s.z),o}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),mr.subVectors(t,e),Li.cross(mr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Li.cross(mr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;xo.subVectors(i,n),vo.subVectors(s,n),Qf.subVectors(t,n);let l=xo.dot(Qf),c=vo.dot(Qf);if(l<=0&&c<=0)return e.copy(n);$f.subVectors(t,i);let u=xo.dot($f),f=vo.dot($f);if(u>=0&&f<=u)return e.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(xo,o);td.subVectors(t,s);let d=xo.dot(td),g=vo.dot(td);if(g>=0&&d<=g)return e.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(vo,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return i0.subVectors(s,i),a=(f-u)/(f-u+(d-g)),e.copy(i).addScaledVector(i0,a);let x=1/(m+_+h);return o=_*x,a=h*x,e.copy(n).addScaledVector(xo,o).addScaledVector(vo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jr=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vc.copy(n.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pa),yc.subVectors(this.max,Pa),yo.subVectors(t.a,Pa),So.subVectors(t.b,Pa),Mo.subVectors(t.c,Pa),Xr.subVectors(So,yo),qr.subVectors(Mo,So),Cs.subVectors(yo,Mo);let e=[0,-Xr.z,Xr.y,0,-qr.z,qr.y,0,-Cs.z,Cs.y,Xr.z,0,-Xr.x,qr.z,0,-qr.x,Cs.z,0,-Cs.x,-Xr.y,Xr.x,0,-qr.y,qr.x,0,-Cs.y,Cs.x,0];return!rd(e,yo,So,Mo,yc)||(e=[1,0,0,0,1,0,0,0,1],!rd(e,yo,So,Mo,yc))?!1:(Sc.crossVectors(Xr,qr),e=[Sc.x,Sc.y,Sc.z],rd(e,yo,So,Mo,yc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_r),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_r=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Di=new Q,vc=new Jr,yo=new Q,So=new Q,Mo=new Q,Xr=new Q,qr=new Q,Cs=new Q,Pa=new Q,yc=new Q,Sc=new Q,Rs=new Q;function rd(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Rs.fromArray(r,s);let a=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),l=t.dot(Rs),c=e.dot(Rs),u=n.dot(Rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var en=new Q,Mc=new ue,MS=0,Je=class extends Yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=j0,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=t!==void 0?Xd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mc.fromBufferAttribute(this,e),Mc.applyMatrix3(t),this.setXY(e,Mc.x,Mc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uS(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):hS(t,this.array)}};var Ha=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wa=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kn=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},bS=new Jr,Ia=new Q,sd=new Q,Kr=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bS.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ia.subVectors(t,this.center);let e=Ia.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ia,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ia.copy(t.center).add(sd)),this.expandByPoint(Ia.copy(t.center).sub(sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wS=0,wi=new Ie,od=new Qn,bo=new Q,hi=new Jr,La=new Jr,dn=new Q,$n=class r extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(aS(t)?Wa:Ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,n){return wi.makeTranslation(t,e,n),this.applyMatrix4(wi),this}scale(t,e,n){return wi.makeScale(t,e,n),this.applyMatrix4(wi),this}lookAt(t){return od.lookAt(t),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];La.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(hi.min,La.min),hi.expandByPoint(dn),dn.addVectors(hi.max,La.max),hi.expandByPoint(dn)):(hi.expandByPoint(La.min),hi.expandByPoint(La.max))}hi.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)dn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(dn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dn.fromBufferAttribute(a,c),l&&(bo.fromBufferAttribute(t,c),dn.add(bo)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Je(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let M=0;M<n.count;M++)a[M]=new Q,l[M]=new Q;let u=new Q,f=new Q,h=new Q,d=new ue,g=new ue,_=new ue,m=new Q,x=new Q;function v(M,b,R){c[M]=c[b]=c[R]=1,u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,b),h.fromBufferAttribute(n,R),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),_.fromBufferAttribute(s,R),f.sub(u),h.sub(u),g.sub(d),_.sub(d);let P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(h,-g.y).multiplyScalar(P),x.copy(h).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(P),a[M].add(m),a[b].add(m),a[R].add(m),l[M].add(x),l[b].add(x),l[R].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let M=0,b=T.length;M<b;++M){let R=T[M],P=R.start,U=R.count;for(let D=P,z=P+U;D<z;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let S=new Q,w=new Q,C=new Q,p=new Q;function y(M){C.fromBufferAttribute(i,M),p.copy(C);let b=a[M];S.copy(b),S.sub(C.multiplyScalar(C.dot(b))).normalize(),w.crossVectors(p,b);let P=w.dot(l[M])<0?-1:1;o.setXYZW(M,S.x,S.y,S.z,P)}for(let M=0,b=n.count;M<b;++M)c[M]&&y(M);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new Q,s=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,f=new Q;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let x=0;x<u;x++)h[g++]=c[d++]}return new Je(h,u,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ad=new Q,TS=new Q,ES=new qt,Ni=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ad.subVectors(n,e).cross(TS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ad),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ES.getNormalMatrix(t),i=this.coplanarPoint(ad).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},AS=0,Mr=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Bo,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gc,this.stencilZFail=Gc,this.stencilZPass=Gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xr=new Q,ld=new Q,bc=new Q,wc=new Q,Lo=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xr.copy(this.origin).addScaledVector(this.direction,e),xr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ld.copy(t).add(e).multiplyScalar(.5),bc.copy(e).sub(t).normalize(),wc.copy(this.origin).sub(ld);let s=t.distanceTo(e)*.5,o=-this.direction.dot(bc),a=wc.dot(this.direction),l=-wc.dot(bc),c=wc.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ld).addScaledVector(bc,h),d}intersectSphere(t,e){if(t.radius<0)return null;xr.subVectors(t.center,this.origin);let n=xr.dot(this.direction),i=xr.dot(xr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,_=e.y-o.y,m=e.z-o.z,x=n.x-o.x,v=n.y-o.y,T=n.z-o.z,S=Math.abs(l),w=Math.abs(c),C=Math.abs(u),p,y,M,b,R,P,U,D,z,G,O,Z;if(S>=w&&S>=C?(M=l,P=f,z=g,Z=x,l>=0?(p=c,y=u,b=h,R=d,U=_,D=m,G=v,O=T):(p=u,y=c,b=d,R=h,U=m,D=_,G=T,O=v)):w>=C?(M=c,P=h,z=_,Z=v,c>=0?(p=u,y=l,b=d,R=f,U=m,D=g,G=T,O=x):(p=l,y=u,b=f,R=d,U=g,D=m,G=x,O=T)):(M=u,P=d,z=m,Z=T,u>=0?(p=l,y=c,b=f,R=h,U=g,D=_,G=x,O=v):(p=c,y=l,b=h,R=f,U=_,D=g,G=v,O=x)),M===0)return null;let H=p/M,I=y/M,et=1/M,xt=b-H*P,yt=R-I*P,J=U-H*z,at=D-I*z,pt=G-H*Z,wt=O-I*Z,_t=pt*at-wt*J,It=xt*wt-yt*pt,Mt=J*yt-at*xt;if(i){if(_t<0||It<0||Mt<0)return null}else if((_t<0||It<0||Mt<0)&&(_t>0||It>0||Mt>0))return null;let At=_t+It+Mt;if(At===0)return null;let kt=et*(_t*P+It*z+Mt*Z);return(At>0?kt<0:kt>0)?null:this.at(kt/At,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nu=class extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},r0=new Ie,Ps=new Lo,Tc=new Kr,s0=new Q,Ec=new Q,Ac=new Q,Cc=new Q,cd=new Q,Rc=new Q,o0=new Q,Pc=new Q,Ki=class extends Qn{constructor(t=new $n,e=new nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(cd.fromBufferAttribute(f,t),o?Rc.addScaledVector(cd,u):Rc.addScaledVector(cd.sub(e),u))}e.add(Rc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(s),Ps.copy(t.ray).recast(t.near),!(Tc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Tc,s0)===null||Ps.origin.distanceToSquared(s0)>(t.far-t.near)**2))&&(r0.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(r0),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ps)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],x=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,w=T;S<w;S+=3){let C=a.getX(S),p=a.getX(S+1),y=a.getX(S+2);i=Ic(this,x,t,n,c,u,f,C,p,y),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,x=_;m<x;m+=3){let v=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);i=Ic(this,o,t,n,c,u,f,v,T,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],x=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,w=T;S<w;S+=3){let C=S,p=S+1,y=S+2;i=Ic(this,x,t,n,c,u,f,C,p,y),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,x=_;m<x;m+=3){let v=m,T=m+1,S=m+2;i=Ic(this,o,t,n,c,u,f,v,T,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function CS(r,t,e,n,i,s,o,a){let l;if(t.side===Hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ts,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Pc);return c<e.near||c>e.far?null:{distance:c,point:Pc.clone(),object:r}}function Ic(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ec),r.getVertexPosition(l,Ac),r.getVertexPosition(c,Cc);let u=CS(r,t,e,n,Ec,Ac,Cc,o0);if(u){let f=new Q;Zr.getBarycoord(o0,Ec,Ac,Cc,f),i&&(u.uv=Zr.getInterpolatedAttribute(i,a,l,c,f,new ue)),s&&(u.uv1=Zr.getInterpolatedAttribute(s,a,l,c,f,new ue)),o&&(u.normal=Zr.getInterpolatedAttribute(o,a,l,c,f,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new Q,materialIndex:0};Zr.getNormal(Ec,Ac,Cc,h.normal),u.face=h,u.barycoord=f}return u}var Do=class extends jn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Ke,u=Ke,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=new Kr,RS=new ue(.5,.5),Lc=new Q,Ls=class{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],x=s[11],v=s[12],T=s[13],S=s[14],w=s[15];if(i[0].setComponents(c-o,d-u,x-g,w-v).normalize(),i[1].setComponents(c+o,d+u,x+g,w+v).normalize(),i[2].setComponents(c+a,d+f,x+_,w+T).normalize(),i[3].setComponents(c-a,d-f,x-_,w-T).normalize(),n)i[4].setComponents(l,h,m,S).normalize(),i[5].setComponents(c-l,d-h,x-m,w-S).normalize();else if(i[4].setComponents(c-l,d-h,x-m,w-S).normalize(),e===Ti)i[5].setComponents(c+l,d+h,x+m,w+S).normalize();else if(e===Ba)i[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){Is.center.set(0,0,0);let e=RS.distanceTo(t.center);return Is.radius=.7071067811865476+e,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Lc.x=i.normal.x>0?t.max.x:t.min.x,Lc.y=i.normal.y>0?t.max.y:t.min.y,Lc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},a0=new Ie,iu=class r{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];a0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ls),n[i].setFromProjectionMatrix(a0,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ls),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var ru=class extends Mr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},su=new Q,ou=new Q,l0=new Ie,Da=new Lo,Dc=new Kr,ud=new Q,c0=new Q,au=class extends Qn{constructor(t=new $n,e=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)su.fromBufferAttribute(e,i-1),ou.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=su.distanceTo(ou);t.setAttribute("lineDistance",new Kn(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(i),Dc.radius+=s,t.ray.intersectsSphere(Dc)===!1)return;l0.copy(i).invert(),Da.copy(t.ray).applyMatrix4(l0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let x=u.getX(_),v=u.getX(_+1),T=Nc(this,t,Da,l,x,v,_);T&&e.push(T)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(d),x=Nc(this,t,Da,l,_,m,g-1);x&&e.push(x)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let x=Nc(this,t,Da,l,_,_+1,_);x&&e.push(x)}if(this.isLineLoop){let _=Nc(this,t,Da,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nc(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(su.fromBufferAttribute(a,i),ou.fromBufferAttribute(a,s),e.distanceSqToSegment(su,ou,ud,c0)>n)return;ud.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ud);if(!(c<t.near||c>t.far))return{distance:c,point:c0.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var u0=new Q,h0=new Q,Xa=class extends au{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)u0.fromBufferAttribute(e,i),h0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+u0.distanceTo(h0);t.setAttribute("lineDistance",new Kn(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lu=class extends Mr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},f0=new Ie,md=new Lo,Oc=new Kr,Uc=new Q,No=class extends Qn{constructor(t=new $n,e=new lu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(i),Oc.radius+=s,t.ray.intersectsSphere(Oc)===!1)return;f0.copy(i).invert(),md.copy(t.ray).applyMatrix4(f0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){let m=c.getX(g);Uc.fromBufferAttribute(f,m),d0(Uc,m,l,i,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Uc.fromBufferAttribute(f,g),d0(Uc,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function d0(r,t,e,n,i,s,o){let a=md.distanceSqToPoint(r);if(a<e){let l=new Q;md.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var qa=class extends jn{constructor(t=[],e=Us,n,i,s,o,a,l,c,u){super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var br=class extends jn{constructor(t,e,n=Oi,i,s,o,a=Ke,l=Ke,c,u=Sr,f=1){if(u!==Sr&&u!==Tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Po(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ya=class extends br{constructor(t,e=Oi,n=Us,i,s,o=Ke,a=Ke,l,c=Sr){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Za=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Oo=class r extends $n{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(f,2));function g(_,m,x,v,T,S,w,C,p,y,M){let b=S/p,R=w/y,P=S/2,U=w/2,D=C/2,z=p+1,G=y+1,O=0,Z=0,H=new Q;for(let I=0;I<G;I++){let et=I*R-U;for(let xt=0;xt<z;xt++){let yt=xt*b-P;H[_]=yt*v,H[m]=et*T,H[x]=D,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[x]=C>0?1:-1,u.push(H.x,H.y,H.z),f.push(xt/p),f.push(1-I/y),O+=1}}for(let I=0;I<y;I++)for(let et=0;et<p;et++){let xt=h+et+z*I,yt=h+et+z*(I+1),J=h+(et+1)+z*(I+1),at=h+(et+1)+z*I;l.push(xt,yt,at),l.push(yt,J,at),Z+=6}a.addGroup(d,Z,M),d+=Z,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ja=class r extends $n{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let x=0;x<u;x++){let v=x*h-o;for(let T=0;T<c;T++){let S=T*f-s;g.push(S,-v,0),_.push(0,0,1),m.push(T/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let T=v+c*x,S=v+c*(x+1),w=v+1+c*(x+1),C=v+1+c*x;d.push(T,S,C),d.push(S,w,C)}this.setIndex(d),this.setAttribute("position",new Kn(g,3)),this.setAttribute("normal",new Kn(_,3)),this.setAttribute("uv",new Kn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Bs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(p0(i))i.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(p0(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Pn(r){let t={};for(let e=0;e<r.length;e++){let n=Bs(r[e]);for(let i in n)t[i]=n[i]}return t}function p0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function PS(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function qd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var r_={clone:Bs,merge:Pn},IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=PS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(i.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},cu=class extends ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var uu=class extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hu=class extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Fc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var jr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fu=class extends jr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case dd:s=t,a=2*e-n;break;case pd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dd:o=t,l=2*n-e;break;case pd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,x=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,T=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let w=0;w!==a;++w)s[w]=x*o[u+w]+v*o[c+w]+T*o[l+w]+S*o[f+w];return s}},du=class extends jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},pu=class extends jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},mu=class extends jr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(i-e),_=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*g;return s}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],x=d*h+g*2,v=f[x],T=f[x+1],S=t*h+g*2,w=u[S],C=u[S+1],p=NS(n,e,v,w,i);s[g]=s_(p,_,T,C,m)}return s}};function s_(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function DS(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function NS(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=s_(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=DS(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wo(e,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wo(t.times,Array),values:wo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Fc(t.settings)&&(n.settings={inTangents:wo(t.settings.inTangents,Array),outTangents:wo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new mu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Oa:e=this.InterpolantFactoryMethodDiscrete;break;case jc:e=this.InterpolantFactoryMethodLinear;break;case kc:e=this.InterpolantFactoryMethodSmooth;break;case hd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return kc;case this.InterpolantFactoryMethodBezier:return hd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Fc(this.settings)&&(m0(this.settings.inTangents,t),m0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Fc(this.settings)&&(g0(this.settings.inTangents,t),g0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&lS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[h+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Fc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function m0(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function g0(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=jc;var Qr=class extends pi{constructor(t,e,n){super(t,e,n)}};Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Oa;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};gu.prototype.ValueTypeName="color";var _u=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};_u.prototype.ValueTypeName="number";var xu=class extends jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)Zi.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ka=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new xu(this.times,this.values,this.getValueSize(),t)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends pi{constructor(t,e,n){super(t,e,n)}};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Oa;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var vu=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};vu.prototype.ValueTypeName="vector";var yu=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},o_=new yu,Su=class{constructor(t){this.manager=t!==void 0?t:o_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Su.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bc=new Q,zc=new Zi,Xi=new Q,ja=class extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bc,zc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,zc,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bc,zc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,zc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yr=new Q,_0=new ue,x0=new ue,Gn=class extends ja{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z)}getViewSize(t,e){return this.getViewBounds(t,_0,x0),e.subVectors(x0,_0)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hf*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mu=class extends ja{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var To=-90,Eo=1,Uo=class extends Qn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gn(To,Eo,t,e);i.layers=this.layers,this.add(i);let s=new Gn(To,Eo,t,e);s.layers=this.layers,this.add(s);let o=new Gn(To,Eo,t,e);o.layers=this.layers,this.add(o);let a=new Gn(To,Eo,t,e);a.layers=this.layers,this.add(a);let l=new Gn(To,Eo,t,e);l.layers=this.layers,this.add(l);let c=new Gn(To,Eo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},bu=class extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Yd="\\[\\]\\.:\\/",OS=new RegExp("["+Yd+"]","g"),Zd="[^"+Yd+"]",US="[^"+Yd.replace("\\.","")+"]",FS=/((?:WC+[\/:])*)/.source.replace("WC",Zd),BS=/(WCOD+)?/.source.replace("WCOD",US),zS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zd),kS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zd),GS=new RegExp("^"+FS+BS+zS+kS+"$"),VS=["material","materials","bones","map"],gd=class{constructor(t,e,n){let i=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(OS,"")}static parseTrackName(t){let e=GS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);VS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=gd;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CE=new Float32Array(1);var tp=class tp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};tp.prototype.isMatrix2=!0;var _d=tp;function Jd(r,t,e,n){let i=HS(n);switch(e){case Ud:return r*t;case Bd:return r*t/i.components*i.byteLength;case Iu:return r*t/i.components*i.byteLength;case es:return r*t*2/i.components*i.byteLength;case Lu:return r*t*2/i.components*i.byteLength;case Fd:return r*t*3/i.components*i.byteLength;case gi:return r*t*4/i.components*i.byteLength;case Du:return r*t*4/i.components*i.byteLength;case tl:case el:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nl:case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ou:case Fu:return Math.max(r,16)*Math.max(t,8)/4;case Nu:case Uu:return Math.max(r,8)*Math.max(t,8)/2;case Bu:case zu:case Gu:case Vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ku:case rl:case Hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case qu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ju:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ju:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Qu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $u:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case nh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ih:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case rh:case sh:case oh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ah:case lh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case sl:case ch:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function HS(r){switch(r){case mi:case Ld:return{byteLength:1,components:1};case ko:case Dd:case Fi:return{byteLength:2,components:1};case Ru:case Pu:return{byteLength:2,components:4};case Oi:case Cu:case Ui:return{byteLength:4,components:1};case Nd:case Od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function C_(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function XS(r){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,e1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S1="gl_FragColor = linearToOutputTexel( gl_FragColor );",M1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,F1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,B1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$M=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ub=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,db=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:qS,alphahash_pars_fragment:YS,alphamap_fragment:ZS,alphamap_pars_fragment:JS,alphatest_fragment:KS,alphatest_pars_fragment:jS,aomap_fragment:QS,aomap_pars_fragment:$S,batching_pars_vertex:t1,batching_vertex:e1,begin_vertex:n1,beginnormal_vertex:i1,bsdfs:r1,iridescence_fragment:s1,bumpmap_pars_fragment:o1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:l1,clipping_planes_pars_vertex:c1,clipping_planes_vertex:u1,color_fragment:h1,color_pars_fragment:f1,color_pars_vertex:d1,color_vertex:p1,common:m1,defaultnormal_vertex:g1,displacementmap_pars_vertex:_1,displacementmap_vertex:x1,emissivemap_fragment:v1,emissivemap_pars_fragment:y1,colorspace_fragment:S1,colorspace_pars_fragment:M1,envmap_fragment:b1,envmap_common_pars_fragment:w1,envmap_pars_fragment:T1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:F1,envmap_vertex:A1,fog_vertex:C1,fog_pars_vertex:R1,fog_fragment:P1,fog_pars_fragment:I1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:D1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:O1,lights_pars_begin:U1,lights_toon_fragment:B1,lights_toon_pars_fragment:z1,lights_phong_fragment:k1,lights_phong_pars_fragment:G1,lights_physical_fragment:V1,lights_physical_pars_fragment:H1,lights_fragment_begin:W1,lights_fragment_maps:X1,lights_fragment_end:q1,lightprobes_pars_fragment:Y1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:K1,logdepthbuf_vertex:j1,map_fragment:Q1,map_pars_fragment:$1,map_particle_fragment:tM,map_particle_pars_fragment:eM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphinstance_vertex:rM,morphcolor_vertex:sM,morphnormal_vertex:oM,morphtarget_pars_vertex:aM,morphtarget_vertex:lM,normal_fragment_begin:cM,normal_fragment_maps:uM,normal_pars_fragment:hM,normal_pars_vertex:fM,normal_vertex:dM,normalmap_pars_fragment:pM,clearcoat_normal_fragment_begin:mM,clearcoat_normal_fragment_maps:gM,clearcoat_pars_fragment:_M,iridescence_pars_fragment:xM,opaque_fragment:vM,packing:yM,premultiplied_alpha_fragment:SM,project_vertex:MM,dithering_fragment:bM,dithering_pars_fragment:wM,roughnessmap_fragment:TM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:CM,shadowmap_vertex:RM,shadowmask_pars_fragment:PM,skinbase_vertex:IM,skinning_pars_vertex:LM,skinning_vertex:DM,skinnormal_vertex:NM,specularmap_fragment:OM,specularmap_pars_fragment:UM,tonemapping_fragment:FM,tonemapping_pars_fragment:BM,transmission_fragment:zM,transmission_pars_fragment:kM,uv_pars_fragment:GM,uv_pars_vertex:VM,uv_vertex:HM,worldpos_vertex:WM,background_vert:XM,background_frag:qM,backgroundCube_vert:YM,backgroundCube_frag:ZM,cube_vert:JM,cube_frag:KM,depth_vert:jM,depth_frag:QM,distance_vert:$M,distance_frag:tb,equirect_vert:eb,equirect_frag:nb,linedashed_vert:ib,linedashed_frag:rb,meshbasic_vert:sb,meshbasic_frag:ob,meshlambert_vert:ab,meshlambert_frag:lb,meshmatcap_vert:cb,meshmatcap_frag:ub,meshnormal_vert:hb,meshnormal_frag:fb,meshphong_vert:db,meshphong_frag:pb,meshphysical_vert:mb,meshphysical_frag:gb,meshtoon_vert:_b,meshtoon_frag:xb,points_vert:vb,points_frag:yb,shadow_vert:Sb,shadow_frag:Mb,sprite_vert:bb,sprite_frag:wb},Et={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},tr={basic:{uniforms:Pn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Pn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Pn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Pn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Pn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new de(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Pn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Pn([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Pn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Pn([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Pn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Pn([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Pn([Et.common,Et.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Pn([Et.lights,Et.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};tr.physical={uniforms:Pn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var uh={r:0,b:0,g:0},Tb=new Ie,R_=new qt;R_.set(-1,0,0,0,1,0,0,0,1);function Eb(r,t,e,n,i,s){let o=new de(0),a=i===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let S=v.backgroundBlurriness>0;T=t.get(T,S)}return T}function g(v){let T=!1,S=d(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),T=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,T){let S=d(T);S&&S.isCubeTexture?(c===void 0&&(c=new Ki(new Oo(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Bs(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(R_),c.material.toneMapped=ce.getTransfer(S.colorSpace)!==Me,(u!==S||f!==S.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ki(new Ja(2,2),new ti({name:"BackgroundMaterial",uniforms:Bs(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ce.getTransfer(S.colorSpace)!==Me,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(uh,qd(r)),e.buffers.color.setClear(uh.r,uh.g,uh.b,T,s)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:_,dispose:x}}function Ab(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,o=!1;function a(R,P,U,D,z){let G=!1,O=f(R,D,U,P);s!==O&&(s=O,c(s.object)),G=d(R,D,U,z),G&&g(R,D,U,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(R,P,U,D),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function f(R,P,U,D){let z=D.wireframe===!0,G=n[P.id];G===void 0&&(G={},n[P.id]=G);let O=R.isInstancedMesh===!0?R.id:0,Z=G[O];Z===void 0&&(Z={},G[O]=Z);let H=Z[U.id];H===void 0&&(H={},Z[U.id]=H);let I=H[z];return I===void 0&&(I=h(l()),H[z]=I),I}function h(R){let P=[],U=[],D=[];for(let z=0;z<e;z++)P[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:D,object:R,attributes:{},index:null}}function d(R,P,U,D){let z=s.attributes,G=P.attributes,O=0,Z=U.getAttributes();for(let H in Z)if(Z[H].location>=0){let et=z[H],xt=G[H];if(xt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),et===void 0||et.attribute!==xt||xt&&et.data!==xt.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function g(R,P,U,D){let z={},G=P.attributes,O=0,Z=U.getAttributes();for(let H in Z)if(Z[H].location>=0){let et=G[H];et===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let xt={};xt.attribute=et,et&&et.data&&(xt.data=et.data),z[H]=xt,O++}s.attributes=z,s.attributesNum=O,s.index=D}function _(){let R=s.newAttributes;for(let P=0,U=R.length;P<U;P++)R[P]=0}function m(R){x(R,0)}function x(R,P){let U=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;U[R]=1,D[R]===0&&(r.enableVertexAttribArray(R),D[R]=1),z[R]!==P&&(r.vertexAttribDivisor(R,P),z[R]=P)}function v(){let R=s.newAttributes,P=s.enabledAttributes;for(let U=0,D=P.length;U<D;U++)P[U]!==R[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function T(R,P,U,D,z,G,O){O===!0?r.vertexAttribIPointer(R,P,U,z,G):r.vertexAttribPointer(R,P,U,D,z,G)}function S(R,P,U,D){_();let z=D.attributes,G=U.getAttributes(),O=P.defaultAttributeValues;for(let Z in G){let H=G[Z];if(H.location>=0){let I=z[Z];if(I===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),I!==void 0){let et=I.normalized,xt=I.itemSize,yt=t.get(I);if(yt===void 0)continue;let J=yt.buffer,at=yt.type,pt=yt.bytesPerElement,wt=at===r.INT||at===r.UNSIGNED_INT||I.gpuType===Cu;if(I.isInterleavedBufferAttribute){let _t=I.data,It=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,Mt=I.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let At=0;At<H.locationSize;At++)x(H.location+At,_t.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let At=0;At<H.locationSize;At++)m(H.location+At);r.bindBuffer(r.ARRAY_BUFFER,J);for(let At=0;At<H.locationSize;At++)T(H.location+At,xt/H.locationSize,at,et,It*pt,(Mt+xt/H.locationSize*At)*pt,wt)}else{if(I.isInstancedBufferAttribute){for(let _t=0;_t<H.locationSize;_t++)x(H.location+_t,I.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let _t=0;_t<H.locationSize;_t++)m(H.location+_t);r.bindBuffer(r.ARRAY_BUFFER,J);for(let _t=0;_t<H.locationSize;_t++)T(H.location+_t,xt/H.locationSize,at,et,xt*pt,xt/H.locationSize*_t*pt,wt)}}else if(O!==void 0){let et=O[Z];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(H.location,et);break;case 3:r.vertexAttrib3fv(H.location,et);break;case 4:r.vertexAttrib4fv(H.location,et);break;default:r.vertexAttrib1fv(H.location,et)}}}}v()}function w(){M();for(let R in n){let P=n[R];for(let U in P){let D=P[U];for(let z in D){let G=D[z];for(let O in G)u(G[O].object),delete G[O];delete D[z]}}delete n[R]}}function C(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let U in P){let D=P[U];for(let z in D){let G=D[z];for(let O in G)u(G[O].object),delete G[O];delete D[z]}}delete n[R.id]}function p(R){for(let P in n){let U=n[P];for(let D in U){let z=U[D];if(z[R.id]===void 0)continue;let G=z[R.id];for(let O in G)u(G[O].object),delete G[O];delete z[R.id]}}}function y(R){for(let P in n){let U=n[P],D=R.isInstancedMesh===!0?R.id:0,z=U[D];if(z!==void 0){for(let G in z){let O=z[G];for(let Z in O)u(O[Z].object),delete O[Z];delete z[G]}delete U[D],Object.keys(U).length===0&&delete n[P]}}}function M(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:p,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Cb(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Rb(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let p=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(p){return!(p!==gi&&n.convert(p)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(p){let y=p===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(p!==mi&&p!==Ui&&!y&&n.convert(p)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:C}}function Pb(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ni,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,x=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{let v=s?0:n,T=v*4,S=x.clippingState||null;l.value=S,S=u(g,h,T,d);for(let w=0;w!==T;++w)S[w]=e[w];x.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let x=d+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<x)&&(m=new Float32Array(x));for(let T=0,S=d;T!==_;++T,S+=4)o.copy(f[T]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var cl=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Oo(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Ds});s.uniforms.tEquirect.value=e;let o=new Ki(i,s),a=e.minFilter;return e.minFilter===wr&&(e.minFilter=Vn),new Uo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},a_=256,Ib=3,Lb=20,P_=256,I_=16,Db=3,Nb=new Q,Ob=new de,fh=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Uo(1,10,null),this._boxMesh=new Ki(new Oo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=Nb}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Ob));let m=new Uo(n,i,u);return m.position.copy(a),m.update(l,t),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=g,t.background=_,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(a_,n_(t))}_fromTexture(t,e){t.mapping===Us||t.mapping===zo?this._setSize(t.image.length===0?a_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=l_(t,!1,!1),n=Math.log2(t)-Ib;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=l_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Us||t.mapping===zo?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=c_()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ub(),this._integrationMaterial=Fb());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/I_);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-Db)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(P_*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Bb());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function l_(r,t,e){return new cl(r,{minFilter:wr,generateMipmaps:t,type:Fi,colorSpace:Ua,depthBuffer:e})}function ul(r,t,e){return new ti({name:r,uniforms:t,vertexShader:te.cube_vert,fragmentShader:e,side:Hn,blending:Ds,depthTest:!1,depthWrite:!1})}function Ub(){return ul("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${P_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fb(){return ul("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:I_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bb(){return ul("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function c_(){return ul("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function u_(){return ul("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zb(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Tu||d===Eu)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new cl(g.height);return _.fromEquirectangularTexture(r,h),t.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,g=d===Tu||d===Eu,_=d===Us||d===zo;if(g||_){let m=e.get(h),x=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new fh(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new fh(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Tu?h.mapping=Us:d===Eu&&(h.mapping=zo),h}function l(h){let d=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function kb(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Na("WebGLRenderer: "+n+" extension not supported."),i}}}function Gb(r,t,e,n){let i={},s=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let _=s.get(g);_&&(t.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function u(g){let _=g.attributes;for(let m in _)t.update(_[m],r.ARRAY_BUFFER)}function f(g){let _=g.index,m=g.attributes.position,x=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,T=m.count>=65535?Wa:Ha,S=new T(Math.ceil(v/3)*6,1),w=S.array;if(_!==null){let p=_.array;x=_.version;for(let y=0,M=0;y<v;y+=3){let b=p[y+0],R=p[y+1],P=p[y+2];w[M++]=b,w[M++]=R,w[M++]=R,w[M++]=P,w[M++]=P,w[M++]=b}}else{x=m.version;for(let p=0,y=0;p<v;p+=3){let M=p+0,b=p+1,R=p+2;w[y++]=M,w[y++]=b,w[y++]=b,w[y++]=R,w[y++]=R,w[y++]=M}}S.version=x;let C=s.get(g);C&&t.remove(C),s.set(g,S)}function h(g){let _=s.get(g);if(_){let m=g.index;m!==null&&_.version<m.version&&f(g)}else f(g);return s.get(g)}function d(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function Vb(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*o),e.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let _=0;for(let m=0;m<d;m++)_+=h[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Hb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wb(r,t,e){let n=new WeakMap,i=new Le;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let M=function(){p.dispose(),n.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let S=a.attributes.position.count*T,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let C=new Float32Array(S*w*4*f),p=new ka(C,S,w,f);p.type=Ui,p.needsUpdate=!0;let y=T*4;for(let b=0;b<f;b++){let R=m[b],P=x[b],U=v[b],D=S*w*4*b;for(let z=0;z<R.count;z++){let G=z*y;d===!0&&(i.fromBufferAttribute(R,z),C[D+G+0]=i.x,C[D+G+1]=i.y,C[D+G+2]=i.z,C[D+G+3]=0),g===!0&&(i.fromBufferAttribute(P,z),C[D+G+4]=i.x,C[D+G+5]=i.y,C[D+G+6]=i.z,C[D+G+7]=0),_===!0&&(i.fromBufferAttribute(U,z),C[D+G+8]=i.x,C[D+G+9]=i.y,C[D+G+10]=i.z,C[D+G+11]=U.itemSize===4?i.w:1)}}h={count:f,texture:p,size:new ue(S,w)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Xb(r,t,e,n,i){let s=new WeakMap;function o(c){let u=i.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var qb={[wd]:"LINEAR_TONE_MAPPING",[Td]:"REINHARD_TONE_MAPPING",[Ed]:"CINEON_TONE_MAPPING",[Ad]:"ACES_FILMIC_TONE_MAPPING",[Rd]:"AGX_TONE_MAPPING",[Pd]:"NEUTRAL_TONE_MAPPING",[Cd]:"CUSTOM_TONE_MAPPING"};function Yb(r,t,e,n,i,s){let o=new di(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new $n;u.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Kn([0,2,0,0,2,0],2));let f=new cu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ki(u,f),d=new Mu(-1,1,1,-1,0,1),g=null,_=null,m=!1,x,v=null,T=[],S=!1;this.setSize=function(w,C){o.setSize(w,C),a!==null&&a.setSize(w,C),l!==null&&l.setSize(w,C);for(let p=0;p<T.length;p++){let y=T[p];y.setSize&&y.setSize(w,C)}},this.setEffects=function(w){T=w,S=T.length>0&&T[0].isRenderPass===!0;let C=o.width,p=o.height;T.length>0&&a===null&&(a=new di(C,p,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new di(C,p,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));let y=i===!0&&T.some(M=>M.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new br(C,p),s===!0&&(c.format=Tr,c.type=Fs)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let M=0;M<T.length;M++){let b=T[M];b.setSize&&b.setSize(C,p),y&&b.needsDepthTexture===!0&&b.setDepthTexture&&b.setDepthTexture(c)}},this.begin=function(w,C){if(m||w.toneMapping===Qi&&T.length===0)return!1;if(v=C,C!==null){let p=C.width,y=C.height;(o.width!==p||o.height!==y)&&this.setSize(p,y)}return S===!1&&w.setRenderTarget(o),x=w.toneMapping,w.toneMapping=Qi,!0},this.hasRenderPass=function(){return S},this.end=function(w,C){w.toneMapping=x,m=!0;let p=o,y=a;for(let M=0;M<T.length;M++){let b=T[M];b.enabled!==!1&&(b.render(w,y,p,C),b.needsSwap!==!1&&(p=y,y=y===a?l:a))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,f.defines={},ce.getTransfer(g)===Me&&(f.defines.SRGB_TRANSFER="");let M=qb[_];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=p.texture,w.setRenderTarget(v),w.render(h,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var L_=new jn,D_=new br(1,1),N_=new Ya(1),O_=new ka,U_=new eu,F_=new qa,h_=[],f_=[],d_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function Vo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=h_[i];if(s===void 0&&(s=new Float32Array(i),h_[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ln(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function cn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ph(r,t){let e=f_[t];e===void 0&&(e=new Int32Array(t),f_[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Zb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Jb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2fv(this.addr,t),cn(e,t)}}function Kb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;r.uniform3fv(this.addr,t),cn(e,t)}}function jb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4fv(this.addr,t),cn(e,t)}}function Qb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;m_.set(n),r.uniformMatrix2fv(this.addr,!1,m_),cn(e,n)}}function $b(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;p_.set(n),r.uniformMatrix3fv(this.addr,!1,p_),cn(e,n)}}function tw(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;d_.set(n),r.uniformMatrix4fv(this.addr,!1,d_),cn(e,n)}}function ew(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function nw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2iv(this.addr,t),cn(e,t)}}function iw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3iv(this.addr,t),cn(e,t)}}function rw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4iv(this.addr,t),cn(e,t)}}function sw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ow(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2uiv(this.addr,t),cn(e,t)}}function aw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3uiv(this.addr,t),cn(e,t)}}function lw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4uiv(this.addr,t),cn(e,t)}}function mh(r){return r.version===0&&(r.compareFunction=Vd,r.needsUpdate=!0),r}function cw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=mh(D_):s=L_,e.setTexture2D(t||s,i)}function uw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||U_,i)}function hw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=mh(N_):s=F_,e.setTextureCube(t||s,i)}function fw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||O_,i)}function dw(r){switch(r){case 5126:return Zb;case 35664:return Jb;case 35665:return Kb;case 35666:return jb;case 35674:return Qb;case 35675:return $b;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return ow;case 36295:return aw;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return fw}}function pw(r,t){r.uniform1fv(this.addr,t)}function mw(r,t){let e=Vo(t,this.size,2);r.uniform2fv(this.addr,e)}function gw(r,t){let e=Vo(t,this.size,3);r.uniform3fv(this.addr,e)}function _w(r,t){let e=Vo(t,this.size,4);r.uniform4fv(this.addr,e)}function xw(r,t){let e=Vo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function vw(r,t){let e=Vo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function yw(r,t){let e=Vo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Sw(r,t){r.uniform1iv(this.addr,t)}function Mw(r,t){r.uniform2iv(this.addr,t)}function bw(r,t){r.uniform3iv(this.addr,t)}function ww(r,t){r.uniform4iv(this.addr,t)}function Tw(r,t){r.uniform1uiv(this.addr,t)}function Ew(r,t){r.uniform2uiv(this.addr,t)}function Aw(r,t){r.uniform3uiv(this.addr,t)}function Cw(r,t){r.uniform4uiv(this.addr,t)}function Rw(r,t,e){let n=this.cache,i=t.length,s=ph(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=mh(D_):o=L_;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Pw(r,t,e){let n=this.cache,i=t.length,s=ph(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||U_,s[o])}function Iw(r,t,e){let n=this.cache,i=t.length,s=ph(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=mh(N_):o=F_;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function Lw(r,t,e){let n=this.cache,i=t.length,s=ph(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||O_,s[o])}function Dw(r){switch(r){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return _w;case 35674:return xw;case 35675:return vw;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Mw;case 35668:case 35672:return bw;case 35669:case 35673:return ww;case 5125:return Tw;case 36294:return Ew;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Lw}}var ip=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dw(e.type)}},rp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dw(e.type)}},sp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},ep=/(\w+)(\])?(\[|\.)?/g;function g_(r,t){r.seq.push(t),r.map[t.id]=t}function Nw(r,t,e){let n=r.name,i=n.length;for(ep.lastIndex=0;;){let s=ep.exec(n),o=ep.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){g_(e,c===void 0?new ip(a,r,t):new rp(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new sp(a),g_(e,f)),e=f}}}var Go=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Nw(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function __(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Ow=37297,Uw=0;function Fw(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var x_=new qt;function Bw(r){ce._getMatrix(x_,ce.workingColorSpace,r);let t=`mat3( ${x_.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(r)){case Fa:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function v_(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Fw(r.getShaderSource(t),a)}else return s}function zw(r,t){let e=Bw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kw={[wd]:"Linear",[Td]:"Reinhard",[Ed]:"Cineon",[Ad]:"ACESFilmic",[Rd]:"AgX",[Pd]:"Neutral",[Cd]:"Custom"};function Gw(r,t){let e=kw[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hh=new Q;function Vw(){ce.getLuminanceCoefficients(hh);let r=hh.x.toFixed(4),t=hh.y.toFixed(4),e=hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function Ww(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xw(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ll(r){return r!==""}function y_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function S_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(r){return r.replace(qw,Yw)}function Yw(r,t){let e=te[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return op(e)}var Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(r){return r.replace(Zw,Jw)}function Jw(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function b_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Kw={[Qa]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function jw(r){return Kw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qw={[zo]:"ENVMAP_MODE_REFRACTION"};function $w(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tT={[bd]:"ENVMAP_BLENDING_MULTIPLY",[k0]:"ENVMAP_BLENDING_MIX",[G0]:"ENVMAP_BLENDING_ADD"};function eT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":tT[r.combine]||"ENVMAP_BLENDING_NONE"}function nT(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jw(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=$w(e),f=eT(e),h=Hw(e),d=Ww(s),g=i.createProgram(),_,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ll).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ll).join(`
`),m.length>0&&(m+=`
`)):(_=[b_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),m=[b_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?te.tonemapping_pars_fragment:"",e.toneMapping!==Qi?Gw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,zw("linearToOutputTexel",e.outputColorSpace),Vw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ll).join(`
`)),o=op(o),o=y_(o,e),o=S_(o,e),a=op(a),a=y_(a,e),a=S_(a,e),o=M_(o),a=M_(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+_+o,T=x+m+a,S=__(i,i.VERTEX_SHADER,v),w=__(i,i.FRAGMENT_SHADER,T);i.attachShader(g,S),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(b){if(r.debug.checkShaderErrors){let R=i.getProgramInfoLog(g)||"",P=i.getShaderInfoLog(S)||"",U=i.getShaderInfoLog(w)||"",D=R.trim(),z=P.trim(),G=U.trim(),O=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,S,w);else{let H=v_(i,S,"vertex"),I=v_(i,w,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+H+`
`+I)}else D!==""?Xt("WebGLProgram: Program Info Log:",D):(z===""||G==="")&&(Z=!1);Z&&(b.diagnostics={runnable:O,programLog:D,vertexShader:{log:z,prefix:_},fragmentShader:{log:G,prefix:m}})}i.deleteShader(S),i.deleteShader(w),p=new Go(i,g),y=Xw(i,g)}let p;this.getUniforms=function(){return p===void 0&&C(this),p};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,Ow)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uw++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var iT=0,ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lp(t),e.set(t,n)),n}},lp=class{constructor(t){this.id=iT++,this.code=t,this.usedTimes=0}};function rT(r){return r===es||r===rl||r===sl}function sT(r,t,e,n,i,s){let o=new Ga,a=new ap,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(p){return l.add(p),p===0?"uv":`uv${p}`}function g(p,y,M,b,R,P){let U=b.fog,D=R.geometry,z=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?b.environment:null,G=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,O=t.get(p.envMap||z,G),Z=h[p.type],H=n.precision;p.precision!==null&&(H=n.getMaxPrecision(p.precision),H!==p.precision&&Xt("WebGLProgram.getParameters:",p.precision,"not supported, using",H,"instead."));let I=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,et=I!==void 0?I.length:0,xt=0;D.morphAttributes.position!==void 0&&(xt=1),D.morphAttributes.normal!==void 0&&(xt=2),D.morphAttributes.color!==void 0&&(xt=3);let yt,J,at,pt;if(Z){let ot=tr[Z];yt=ot.vertexShader,J=ot.fragmentShader}else{yt=p.vertexShader,J=p.fragmentShader;let ot=a.getVertexShaderStage(p),Tt=a.getFragmentShaderStage(p);a.update(p,ot,Tt),at=ot.id,pt=Tt.id}let wt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),It=R.isInstancedMesh===!0,Mt=R.isBatchedMesh===!0,At=!!p.map,kt=!!p.matcap,Pt=!!O,Ft=Pt&&O.isPMREMTexture===!0,se=!!p.aoMap,re=!!p.lightMap,$=!!p.bumpMap&&p.wireframe===!1,Kt=!!p.normalMap,Ue=!!p.displacementMap,ge=!!p.emissiveMap,Qt=!!p.metalnessMap,De=!!p.roughnessMap,Ne=p.anisotropy>0,k=p.clearcoat>0,pe=p.diffuseRoughness>0,ie=p.dispersion>0,Ht=p.retroreflectivity>0,mt=p.iridescence>0,oe=p.sheen>0,Dt=p.transmission>0,Gt=Ne&&!!p.anisotropyMap,L=k&&!!p.clearcoatMap,E=k&&!!p.clearcoatNormalMap,X=k&&!!p.clearcoatRoughnessMap,ft=pe&&!!p.diffuseRoughnessMap,st=mt&&!!p.iridescenceMap,gt=mt&&!!p.iridescenceThicknessMap,W=oe&&!!p.sheenColorMap,F=oe&&!!p.sheenRoughnessMap,V=!!p.specularMap,rt=!!p.specularColorMap,N=!!p.specularIntensityMap,Y=Dt&&!!p.transmissionMap,j=Dt&&!!p.thicknessMap,ct=!!p.gradientMap,lt=!!p.alphaMap,ht=p.alphaTest>0,ut=!!p.alphaHash,dt=!!p.extensions,nt=Qi;p.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(nt=r.toneMapping);let it=Ft?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,vt={shaderID:Z,shaderType:p.type,shaderName:p.name,vertexShader:yt,fragmentShader:J,defines:p.defines,customVertexShaderID:at,customFragmentShaderID:pt,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:H,batching:Mt,batchingColor:Mt&&R._colorsTexture!==null,instancing:It,instancingColor:It&&R.instanceColor!==null,instancingMorph:It&&R.morphTexture!==null,outputColorSpace:wt===null?r.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:At,matcap:kt,envMap:Pt,envMapMode:Pt&&O.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?it.length-1:null,envMapSize:Ft?it[0].width:null,aoMap:se,lightMap:re,bumpMap:$,normalMap:Kt,displacementMap:Ue,emissiveMap:ge,normalMapObjectSpace:Kt&&p.normalMapType===W0,normalMapTangentSpace:Kt&&p.normalMapType===zd,packedNormalMap:Kt&&p.normalMapType===zd&&rT(p.normalMap.format),metalnessMap:Qt,roughnessMap:De,anisotropy:Ne,anisotropyMap:Gt,clearcoat:k,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:pe,diffuseRoughnessMap:ft,dispersion:ie,retroreflection:Ht,iridescence:mt,iridescenceMap:st,iridescenceThicknessMap:gt,sheen:oe,sheenColorMap:W,sheenRoughnessMap:F,specularMap:V,specularColorMap:rt,specularIntensityMap:N,transmission:Dt,transmissionMap:Y,thicknessMap:j,gradientMap:ct,opaque:p.transparent===!1&&p.blending===Bo&&p.alphaToCoverage===!1,alphaMap:lt,alphaTest:ht,alphaHash:ut,combine:p.combine,mapUv:At&&d(p.map.channel),aoMapUv:se&&d(p.aoMap.channel),lightMapUv:re&&d(p.lightMap.channel),bumpMapUv:$&&d(p.bumpMap.channel),normalMapUv:Kt&&d(p.normalMap.channel),displacementMapUv:Ue&&d(p.displacementMap.channel),emissiveMapUv:ge&&d(p.emissiveMap.channel),metalnessMapUv:Qt&&d(p.metalnessMap.channel),roughnessMapUv:De&&d(p.roughnessMap.channel),anisotropyMapUv:Gt&&d(p.anisotropyMap.channel),clearcoatMapUv:L&&d(p.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&d(p.diffuseRoughnessMap.channel),iridescenceMapUv:st&&d(p.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&d(p.iridescenceThicknessMap.channel),sheenColorMapUv:W&&d(p.sheenColorMap.channel),sheenRoughnessMapUv:F&&d(p.sheenRoughnessMap.channel),specularMapUv:V&&d(p.specularMap.channel),specularColorMapUv:rt&&d(p.specularColorMap.channel),specularIntensityMapUv:N&&d(p.specularIntensityMap.channel),transmissionMapUv:Y&&d(p.transmissionMap.channel),thicknessMapUv:j&&d(p.thicknessMap.channel),alphaMapUv:lt&&d(p.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Kt||Ne),vertexNormals:!!D.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(At||lt),fog:!!U,useFog:p.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||D.attributes.normal===void 0&&Kt===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:xt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:P.filter(ot=>ot.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:p.dithering,shadowMapEnabled:r.shadowMap.enabled&&M.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:At&&p.map.isVideoTexture===!0&&ce.getTransfer(p.map.colorSpace)===Me,decodeVideoTextureEmissive:ge&&p.emissiveMap.isVideoTexture===!0&&ce.getTransfer(p.emissiveMap.colorSpace)===Me,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===ji,flipSided:p.side===Hn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:dt&&p.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&p.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function _(p){let y=[];if(p.shaderID?y.push(p.shaderID):(y.push(p.customVertexShaderID),y.push(p.customFragmentShaderID)),p.defines!==void 0)for(let M in p.defines)y.push(M),y.push(p.defines[M]);return p.isRawShaderMaterial===!1&&(m(y,p),x(y,p),y.push(r.outputColorSpace)),y.push(p.customProgramCacheKey),y.join()}function m(p,y){p.push(y.precision),p.push(y.outputColorSpace),p.push(y.envMapMode),p.push(y.envMapPMREM),p.push(y.envMapMaxLod),p.push(y.envMapSize),p.push(y.mapUv),p.push(y.alphaMapUv),p.push(y.lightMapUv),p.push(y.aoMapUv),p.push(y.bumpMapUv),p.push(y.normalMapUv),p.push(y.displacementMapUv),p.push(y.emissiveMapUv),p.push(y.metalnessMapUv),p.push(y.roughnessMapUv),p.push(y.anisotropyMapUv),p.push(y.clearcoatMapUv),p.push(y.clearcoatNormalMapUv),p.push(y.clearcoatRoughnessMapUv),p.push(y.diffuseRoughnessMapUv),p.push(y.iridescenceMapUv),p.push(y.iridescenceThicknessMapUv),p.push(y.sheenColorMapUv),p.push(y.sheenRoughnessMapUv),p.push(y.specularMapUv),p.push(y.specularColorMapUv),p.push(y.specularIntensityMapUv),p.push(y.transmissionMapUv),p.push(y.thicknessMapUv),p.push(y.combine),p.push(y.fogExp2),p.push(y.sizeAttenuation),p.push(y.morphTargetsCount),p.push(y.numSunLights),p.push(y.numDirLights),p.push(y.numPointLights),p.push(y.numSpotLights),p.push(y.numSpotLightMaps),p.push(y.numHemiLights),p.push(y.numRectAreaLights),p.push(y.numSunLightShadows),p.push(y.numDirLightShadows),p.push(y.numPointLightShadows),p.push(y.numSpotLightShadows),p.push(y.numSpotLightShadowsWithMaps),p.push(y.numLightProbes),p.push(y.numLightProbeGrids),p.push(y.shadowMapType),p.push(y.toneMapping),p.push(y.numClippingPlanes),p.push(y.numClipIntersection),p.push(y.depthPacking)}function x(p,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),p.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),p.push(o.mask)}function v(p){let y=h[p.type],M;if(y){let b=tr[y];M=r_.clone(b.uniforms)}else M=p.uniforms;return M}function T(p,y){let M=u.get(y);return M!==void 0?++M.usedTimes:(M=new nT(r,y,p,i),c.push(M),u.set(y,M)),M}function S(p){if(--p.usedTimes===0){let y=c.indexOf(p);c[y]=c[c.length-1],c.pop(),u.delete(p.cacheKey),p.destroy()}}function w(p){a.remove(p)}function C(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:C}}function oT(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function aT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function w_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function T_(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,_,m,x){let v=r[t];return v===void 0?(v={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:x},r[t]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=g,v.materialVariant=o(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=x),t++,v}function l(h,d,g,_,m,x,v){v.reversedDepth===!0&&(m=-m);let T=a(h,d,g,_,m,x);g.transmission>0?n.push(T):g.transparent===!0?i.push(T):e.push(T)}function c(h,d,g,_,m,x){let v=a(h,d,g,_,m,x);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):e.unshift(v)}function u(h,d){e.length>1&&e.sort(h||aT),n.length>1&&n.sort(d||w_),i.length>1&&i.sort(d||w_)}function f(){for(let h=t,d=r.length;h<d;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function lT(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new T_,r.set(n,[o])):i>=s.length?(o=new T_,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function cT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new de};break;case"SpotLight":e={position:new Q,direction:new Q,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=e,e}}}function uT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var hT=0;function fT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function dT(r){let t=new cT,e=uT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);let i=new Q,s=new Ie,o=new Ie;function a(c){let u=0,f=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,g=0,_=0,m=0,x=0,v=0,T=0,S=0,w=0,C=0,p=0,y=0,M=0,b=0;c.sort(fT);for(let P=0,U=c.length;P<U;P++){let D=c[P],z=D.color,G=D.intensity,O=D.distance,Z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===es?Z=D.shadow.map.texture:Z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=z.r*G,f+=z.g*G,h+=z.b*G;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],G);b++}else if(D.isSunLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let I=D.shadow,et=e.get(D);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=Z;let xt=I.getViewportCount();for(let yt=0;yt<xt;yt++)n.sunShadowMatrix[_+yt]=I.getMatrix(yt),n.sunShadowCascade[_+yt]=I._cascadeData[yt];_+=xt,g++}n.sun[d]=H,d++}else if(D.isDirectionalLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let I=D.shadow,et=e.get(D);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=H,m++}else if(D.isSpotLight){let H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(z).multiplyScalar(G),H.distance=O,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[v]=H;let I=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,I.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[v]=I.matrix,D.castShadow){let et=e.get(D);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,n.spotShadow[v]=et,n.spotShadowMap[v]=Z,p++}v++}else if(D.isRectAreaLight){let H=t.get(D);H.color.copy(z).multiplyScalar(G),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=H,T++}else if(D.isPointLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let I=D.shadow,et=e.get(D);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,et.shadowCameraNear=I.camera.near,et.shadowCameraFar=I.camera.far,n.pointShadow[x]=et,n.pointShadowMap[x]=Z,n.pointShadowMatrix[x]=D.shadow.matrix,C++}n.point[x]=H,x++}else if(D.isHemisphereLight){let H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(G),H.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[S]=H,S++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let R=n.hash;(R.sunLength!==d||R.directionalLength!==m||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==T||R.hemiLength!==S||R.numSunShadows!==g||R.numDirectionalShadows!==w||R.numPointShadows!==C||R.numSpotShadows!==p||R.numSpotMaps!==y||R.numLightProbes!==b)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=x,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=p,n.spotShadowMap.length=p,n.spotLightMatrix.length=p+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=b,R.sunLength=d,R.directionalLength=m,R.pointLength=x,R.spotLength=v,R.rectAreaLength=T,R.hemiLength=S,R.numSunShadows=g,R.numDirectionalShadows=w,R.numPointShadows=C,R.numSpotShadows=p,R.numSpotMaps=y,R.numLightProbes=b,n.version=hT++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0,m=0,x=u.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let S=c[v];if(S.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(x),f++}else if(S.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),h++}else if(S.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),g++}else if(S.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),o.identity(),s.copy(S.matrixWorld),s.premultiply(x),o.extractRotation(s),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),d++}else if(S.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function E_(r){let t=new dT(r),e=[],n=[],i=[];function s(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){f.isLightProbeGrid?i.push(f):e.push(f)}function a(f){n.push(f)}function l(){t.setup(e),i.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function pT(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new E_(r),t.set(i,[a])):s>=o.length?(a=new E_(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_T=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],xT=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],A_=new Ie,al=new Q,np=new Q;function vT(r,t,e){let n=new Ls,i=new ue,s=new ue,o=new Le,a=new uu,l=new hu,c={},u=e.maxTextureSize,f={[ts]:Hn,[Hn]:ts,[ji]:ji},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:mT,fragmentShader:gT}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new $n;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ki(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let x=this.type;this.render=function(C,p,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===S0&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qa);let M=r.getRenderTarget(),b=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Ds),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=x!==this.type;U&&p.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=C.length;D<z;D++){let G=C[D],O=G.shadow;if(O===void 0){Xt("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let Z=O.getFrameExtents();i.multiply(Z),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,O.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Fo){if(G.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new di(i.x,i.y,{format:es,type:Fi,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new br(i.x,i.y,Ui),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=Sr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ke,O.map.depthTexture.magFilter=Ke}else G.isPointLight?(O.map=new cl(i.x),O.map.depthTexture=new Ya(i.x,Oi)):(O.map=new di(i.x,i.y),O.map.depthTexture=new br(i.x,i.y,Oi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=Sr,this.type===Qa?(O.map.depthTexture.compareFunction=H?Gd:kd,O.map.depthTexture.minFilter=Vn,O.map.depthTexture.magFilter=Vn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ke,O.map.depthTexture.magFilter=Ke);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let I=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,y);let et=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:y.layers;for(let xt=0;xt<I;xt++){let yt=O.getCamera(xt);if(G.isPointLight){let J=O.camera,at=O.matrix,pt=G.distance||J.far;pt!==J.far&&(J.far=pt,J.updateProjectionMatrix()),al.setFromMatrixPosition(G.matrixWorld),J.position.copy(al),np.copy(J.position),np.add(_T[xt]),J.up.copy(xT[xt]),J.lookAt(np),J.updateMatrixWorld(),at.makeTranslation(-al.x,-al.y,-al.z),A_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(A_,J.coordinateSystem,J.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(O.map),r.clear());let J=O.getViewport(xt);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),P.viewport(o)}n=O.getFrustum(xt),S(p,y,yt,G,et,this.type)}O.isPointLightShadow!==!0&&this.type===Fo&&v(O,y),O.needsUpdate=!1}x=this.type,m.needsUpdate=!1,r.setRenderTarget(M,b,R)};function v(C,p){let y=t.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new di(i.x,i.y,{format:es,type:Fi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(p,null,y,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(p,null,y,d,_,null)}function T(C,p,y,M){let b=null,R=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)b=R;else if(b=y.isPointLight===!0?l:a,r.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let P=b.uuid,U=p.uuid,D=c[P];D===void 0&&(D={},c[P]=D);let z=D[U];z===void 0&&(z=b.clone(),D[U]=z,p.addEventListener("dispose",w)),b=z}if(b.visible=p.visible,b.wireframe=p.wireframe,M===Fo?b.side=p.shadowSide!==null?p.shadowSide:p.side:b.side=p.shadowSide!==null?p.shadowSide:f[p.side],b.alphaMap=p.alphaMap,b.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,b.map=p.map,b.clipShadows=p.clipShadows,b.clippingPlanes=p.clippingPlanes,b.clipIntersection=p.clipIntersection,b.displacementMap=p.displacementMap,b.displacementScale=p.displacementScale,b.displacementBias=p.displacementBias,b.wireframeLinewidth=p.wireframeLinewidth,b.linewidth=p.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let P=r.properties.get(b);P.light=y}return b}function S(C,p,y,M,b,R){if(C.visible===!1)return;if(C.layers.test(b)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&R===Fo)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);let D=t.update(C),z=C.material;if(Array.isArray(z)){let G=D.groups;for(let O=0,Z=G.length;O<Z;O++){let H=G[O],I=z[H.materialIndex];if(I&&I.visible){let et=T(C,I,M,R);C.onBeforeShadow(r,C,p,y,D,et,H),r.renderBufferDirect(y,null,D,et,C,H),C.onAfterShadow(r,C,p,y,D,et,H)}}}else if(z.visible){let G=T(C,z,M,R);C.onBeforeShadow(r,C,p,y,D,G,null),r.renderBufferDirect(y,null,D,G,C,null),C.onAfterShadow(r,C,p,y,D,G,null)}}let U=C.children;for(let D=0,z=U.length;D<z;D++)S(U[D],p,y,M,b,R)}function w(C){C.target.removeEventListener("dispose",w);for(let y in c){let M=c[y],b=C.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function yT(r,t){function e(){let N=!1,Y=new Le,j=null,ct=new Le(0,0,0,0);return{setMask:function(lt){j!==lt&&!N&&(r.colorMask(lt,lt,lt,lt),j=lt)},setLocked:function(lt){N=lt},setClear:function(lt,ht,ut,dt,nt){nt===!0&&(lt*=dt,ht*=dt,ut*=dt),Y.set(lt,ht,ut,dt),ct.equals(Y)===!1&&(r.clearColor(lt,ht,ut,dt),ct.copy(Y))},reset:function(){N=!1,j=null,ct.set(-1,0,0,0)}}}function n(){let N=!1,Y=!1,j=null,ct=null,lt=null;return{setReversed:function(ht){if(Y!==ht){let ut=t.get("EXT_clip_control");ht?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),Y=ht;let dt=lt;lt=null,this.setClear(dt)}},getReversed:function(){return Y},setTest:function(ht){ht?_t(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(ht){j!==ht&&!N&&(r.depthMask(ht),j=ht)},setFunc:function(ht){if(Y&&(ht=e_[ht]),ct!==ht){switch(ht){case Vc:r.depthFunc(r.NEVER);break;case Hc:r.depthFunc(r.ALWAYS);break;case Wc:r.depthFunc(r.LESS);break;case Co:r.depthFunc(r.LEQUAL);break;case Xc:r.depthFunc(r.EQUAL);break;case qc:r.depthFunc(r.GEQUAL);break;case Yc:r.depthFunc(r.GREATER);break;case Zc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=ht}},setLocked:function(ht){N=ht},setClear:function(ht){lt!==ht&&(lt=ht,Y&&(ht=1-ht),r.clearDepth(ht))},reset:function(){N=!1,j=null,ct=null,lt=null,Y=!1}}}function i(){let N=!1,Y=null,j=null,ct=null,lt=null,ht=null,ut=null,dt=null,nt=null;return{setTest:function(it){N||(it?_t(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(it){Y!==it&&!N&&(r.stencilMask(it),Y=it)},setFunc:function(it,vt,ot){(j!==it||ct!==vt||lt!==ot)&&(r.stencilFunc(it,vt,ot),j=it,ct=vt,lt=ot)},setOp:function(it,vt,ot){(ht!==it||ut!==vt||dt!==ot)&&(r.stencilOp(it,vt,ot),ht=it,ut=vt,dt=ot)},setLocked:function(it){N=it},setClear:function(it){nt!==it&&(r.clearStencil(it),nt=it)},reset:function(){N=!1,Y=null,j=null,ct=null,lt=null,ht=null,ut=null,dt=null,nt=null}}}let s=new e,o=new n,a=new i,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],_=null,m=!1,x=null,v=null,T=null,S=null,w=null,C=null,p=null,y=new de(0,0,0),M=0,b=!1,R=null,P=null,U=null,D=null,z=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=Z>=2);let I=null,et={},xt=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),J=new Le().fromArray(xt),at=new Le().fromArray(yt);function pt(N,Y,j,ct){let lt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(N,ht),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<j;ut++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Y,0,r.RGBA,1,1,ct,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(Y+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ht}let wt={};wt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),wt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),wt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(r.DEPTH_TEST),o.setFunc(Co),$(!1),Kt(xd),_t(r.CULL_FACE),se(Ds);function _t(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function It(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function Mt(N,Y){return h[N]!==Y?(r.bindFramebuffer(N,Y),h[N]=Y,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Y),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Y),!0):!1}function At(N,Y){let j=g,ct=!1;if(N){j=d.get(Y),j===void 0&&(j=[],d.set(Y,j));let lt=N.textures;if(j.length!==lt.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,ut=lt.length;ht<ut;ht++)j[ht]=r.COLOR_ATTACHMENT0+ht;j.length=lt.length,ct=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,ct=!0);ct&&r.drawBuffers(j)}function kt(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Pt={[Os]:r.FUNC_ADD,[b0]:r.FUNC_SUBTRACT,[w0]:r.FUNC_REVERSE_SUBTRACT};Pt[T0]=r.MIN,Pt[E0]=r.MAX;let Ft={[A0]:r.ZERO,[C0]:r.ONE,[R0]:r.SRC_COLOR,[Sd]:r.SRC_ALPHA,[O0]:r.SRC_ALPHA_SATURATE,[D0]:r.DST_COLOR,[I0]:r.DST_ALPHA,[P0]:r.ONE_MINUS_SRC_COLOR,[Md]:r.ONE_MINUS_SRC_ALPHA,[N0]:r.ONE_MINUS_DST_COLOR,[L0]:r.ONE_MINUS_DST_ALPHA,[U0]:r.CONSTANT_COLOR,[F0]:r.ONE_MINUS_CONSTANT_COLOR,[B0]:r.CONSTANT_ALPHA,[z0]:r.ONE_MINUS_CONSTANT_ALPHA};function se(N,Y,j,ct,lt,ht,ut,dt,nt,it){if(N===Ds){m===!0&&(It(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),N!==M0){if(N!==x||it!==b){if((v!==Os||w!==Os)&&(r.blendEquation(r.FUNC_ADD),v=Os,w=Os),it)switch(N){case Bo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ns:r.blendFunc(r.ONE,r.ONE);break;case vd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",N);break}else switch(N){case Bo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vd:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yd:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",N);break}T=null,S=null,C=null,p=null,y.set(0,0,0),M=0,x=N,b=it}return}lt=lt||Y,ht=ht||j,ut=ut||ct,(Y!==v||lt!==w)&&(r.blendEquationSeparate(Pt[Y],Pt[lt]),v=Y,w=lt),(j!==T||ct!==S||ht!==C||ut!==p)&&(r.blendFuncSeparate(Ft[j],Ft[ct],Ft[ht],Ft[ut]),T=j,S=ct,C=ht,p=ut),(dt.equals(y)===!1||nt!==M)&&(r.blendColor(dt.r,dt.g,dt.b,nt),y.copy(dt),M=nt),x=N,b=!1}function re(N,Y){N.side===ji?It(r.CULL_FACE):_t(r.CULL_FACE);let j=N.side===Hn;Y&&(j=!j),$(j),N.blending===Bo&&N.transparent===!1?se(Ds):se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let ct=N.stencilWrite;a.setTest(ct),ct&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){R!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),R=N)}function Kt(N){N!==v0?(_t(r.CULL_FACE),N!==P&&(N===xd?r.cullFace(r.BACK):N===y0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),P=N}function Ue(N){N!==U&&(O&&r.lineWidth(N),U=N)}function ge(N,Y,j){N?(_t(r.POLYGON_OFFSET_FILL),(D!==Y||z!==j)&&(D=Y,z=j,o.getReversed()&&(Y=-Y,j=-j),r.polygonOffset(Y,j))):It(r.POLYGON_OFFSET_FILL)}function Qt(N){N?_t(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function De(N){N===void 0&&(N=r.TEXTURE0+G-1),I!==N&&(r.activeTexture(N),I=N)}function Ne(N,Y,j){j===void 0&&(I===null?j=r.TEXTURE0+G-1:j=I);let ct=et[j];ct===void 0&&(ct={type:void 0,texture:void 0},et[j]=ct),(ct.type!==N||ct.texture!==Y)&&(I!==j&&(r.activeTexture(j),I=j),r.bindTexture(N,Y||wt[N]),ct.type=N,ct.texture=Y)}function k(){let N=et[I];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function pe(){try{r.compressedTexImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function Ht(){try{r.texSubImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function mt(){try{r.texSubImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function Dt(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function Gt(){try{r.texStorage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function L(){try{r.texStorage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function E(){try{r.texImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function X(){try{r.texImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function ft(N){return f[N]!==void 0?f[N]:r.getParameter(N)}function st(N,Y){f[N]!==Y&&(r.pixelStorei(N,Y),f[N]=Y)}function gt(N){J.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),J.copy(N))}function W(N){at.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),at.copy(N))}function F(N,Y){let j=c.get(Y);j===void 0&&(j=new WeakMap,c.set(Y,j));let ct=j.get(N);ct===void 0&&(ct=r.getUniformBlockIndex(Y,N.name),r.uniformBlockBinding(Y,ct,ct),j.set(N,ct))}function V(N,Y,j){let lt=c.get(Y).get(N);l[lt]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,lt,j),l[lt]=j)}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},I=null,et={},h={},l={},d=new WeakMap,g=[],_=null,m=!1,x=null,v=null,T=null,S=null,w=null,C=null,p=null,y=new de(0,0,0),M=0,b=!1,R=null,P=null,U=null,D=null,z=null,J.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_t,disable:It,bindFramebuffer:Mt,drawBuffers:At,useProgram:kt,setBlending:se,setMaterial:re,setFlipSided:$,setCullFace:Kt,setLineWidth:Ue,setPolygonOffset:ge,setScissorTest:Qt,activeTexture:De,bindTexture:Ne,unbindTexture:k,compressedTexImage2D:pe,compressedTexImage3D:ie,texImage2D:E,texImage3D:X,pixelStorei:st,getParameter:ft,updateUBOMapping:F,uniformBlockBinding:V,texStorage2D:Gt,texStorage3D:L,texSubImage2D:Ht,texSubImage3D:mt,compressedTexSubImage2D:oe,compressedTexSubImage3D:Dt,scissor:gt,viewport:W,reset:rt}}function ST(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,f=new Set,h,d=new WeakMap,g=new Set,_=new FinalizationRegistry(L=>g.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return m?new OffscreenCanvas(L,E):za("canvas")}function v(L,E,X){let ft=1,st=Gt(L);if((st.width>X||st.height>X)&&(ft=X/Math.max(st.width,st.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let gt=Math.floor(ft*st.width),W=Math.floor(ft*st.height);h===void 0&&(h=x(gt,W));let F=E?x(gt,W):h;return F.width=gt,F.height=W,F.getContext("2d").drawImage(L,0,0,gt,W),Xt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+gt+"x"+W+")."),F}else return"data"in L&&Xt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function T(L){return L.generateMipmaps}function S(L){r.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,E,X,ft,st,gt=!1){if(L!==null){if(r[L]!==void 0)return r[L];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let W;ft&&(W=t.get("EXT_texture_norm16"),W||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=E;if(E===r.RED&&(X===r.FLOAT&&(F=r.R32F),X===r.HALF_FLOAT&&(F=r.R16F),X===r.UNSIGNED_BYTE&&(F=r.R8),X===r.UNSIGNED_SHORT&&W&&(F=W.R16_EXT),X===r.SHORT&&W&&(F=W.R16_SNORM_EXT)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(F=r.R8UI),X===r.UNSIGNED_SHORT&&(F=r.R16UI),X===r.UNSIGNED_INT&&(F=r.R32UI),X===r.BYTE&&(F=r.R8I),X===r.SHORT&&(F=r.R16I),X===r.INT&&(F=r.R32I)),E===r.RG&&(X===r.FLOAT&&(F=r.RG32F),X===r.HALF_FLOAT&&(F=r.RG16F),X===r.UNSIGNED_BYTE&&(F=r.RG8),X===r.UNSIGNED_SHORT&&W&&(F=W.RG16_EXT),X===r.SHORT&&W&&(F=W.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(F=r.RG8UI),X===r.UNSIGNED_SHORT&&(F=r.RG16UI),X===r.UNSIGNED_INT&&(F=r.RG32UI),X===r.BYTE&&(F=r.RG8I),X===r.SHORT&&(F=r.RG16I),X===r.INT&&(F=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(F=r.RGB8UI),X===r.UNSIGNED_SHORT&&(F=r.RGB16UI),X===r.UNSIGNED_INT&&(F=r.RGB32UI),X===r.BYTE&&(F=r.RGB8I),X===r.SHORT&&(F=r.RGB16I),X===r.INT&&(F=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(F=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(F=r.RGBA16UI),X===r.UNSIGNED_INT&&(F=r.RGBA32UI),X===r.BYTE&&(F=r.RGBA8I),X===r.SHORT&&(F=r.RGBA16I),X===r.INT&&(F=r.RGBA32I)),E===r.RGB&&(X===r.UNSIGNED_SHORT&&W&&(F=W.RGB16_EXT),X===r.SHORT&&W&&(F=W.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(F=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(F=r.R11F_G11F_B10F)),E===r.RGBA){let V=gt?Fa:ce.getTransfer(st);X===r.FLOAT&&(F=r.RGBA32F),X===r.HALF_FLOAT&&(F=r.RGBA16F),X===r.UNSIGNED_BYTE&&(F=V===Me?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&W&&(F=W.RGBA16_EXT),X===r.SHORT&&W&&(F=W.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(F=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(F=r.RGB5_A1)}return(F===r.R16F||F===r.R32F||F===r.RG16F||F===r.RG32F||F===r.RGBA16F||F===r.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function p(L,E){let X;return L?E===null||E===Oi||E===Fs?X=r.DEPTH24_STENCIL8:E===Ui?X=r.DEPTH32F_STENCIL8:E===ko&&(X=r.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===Fs?X=r.DEPTH_COMPONENT24:E===Ui?X=r.DEPTH_COMPONENT32F:E===ko&&(X=r.DEPTH_COMPONENT16),X}function y(L,E){return T(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ke&&L.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function M(L){let E=new WeakRef(L);n.get(L).__ref=E,g.add(E),_.register(L,E,E)}function b(L){let E=n.get(L).__ref;E!==void 0&&(g.delete(E),_.unregister(E))}function R(L){U(L.target)}function P(L){D(L.target)}function U(L){L.removeEventListener("dispose",R),b(L),G(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&f.delete(L)}function D(L){L.removeEventListener("dispose",P),b(L),Z(L)}function z(){for(let L of g){let E=L.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):U(E))}g.clear(),f.clear()}function G(L){let E=n.get(L);if(E.__webglInit===void 0)return;let X=L.source,ft=d.get(X);if(ft){let st=ft[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&O(L),Object.keys(ft).length===0&&d.delete(X)}n.remove(L)}function O(L){let E=n.get(L);r.deleteTexture(E.__webglTexture);let X=L.source,ft=d.get(X);delete ft[E.__cacheKey],o.memory.textures--}function Z(L){let E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();let X=L.depthTexture;if(X&&X.renderTarget===L&&U(X),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let gt=0;gt<E.__webglFramebuffer[st].length;gt++)r.deleteFramebuffer(E.__webglFramebuffer[st][gt]);else r.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)r.deleteFramebuffer(E.__webglFramebuffer[st]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ft=L.textures;for(let st=0,gt=ft.length;st<gt;st++){let W=n.get(ft[st]);W.__webglTexture&&(r.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(ft[st])}n.remove(L)}let H=0;function I(){H=0}function et(){return H}function xt(L){H=L}function yt(){let L=H;return L>=i.maxTextures&&Xt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,L}function J(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function at(L,E){let X=n.get(L);if(L.isVideoTexture&&oe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let ft=L.image;if(ft===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(X,L,E);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function pt(L,E){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){re(X,L,E);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function wt(L,E){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){re(X,L,E);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function _t(L,E){let X=n.get(L);if(L.version>0&&X.__version!==L.version){$(X,L,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}let It={[Jc]:r.REPEAT,[qi]:r.CLAMP_TO_EDGE,[Kc]:r.MIRRORED_REPEAT},Mt={[Ke]:r.NEAREST,[V0]:r.NEAREST_MIPMAP_NEAREST,[$a]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Au]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},At={[q0]:r.NEVER,[Vd]:r.ALWAYS,[Y0]:r.LESS,[kd]:r.LEQUAL,[Z0]:r.EQUAL,[Gd]:r.GEQUAL,[J0]:r.GREATER,[K0]:r.NOTEQUAL};function kt(L,E){if(E.type===Ui&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Au||E.magFilter===$a||E.magFilter===wr||E.minFilter===Vn||E.minFilter===Au||E.minFilter===$a||E.minFilter===wr)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,It[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,It[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,It[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Mt[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ke||E.minFilter!==$a&&E.minFilter!==wr||E.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Pt(L,E){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R),M(E));let ft=E.source,st=d.get(ft);st===void 0&&(st={},d.set(ft,st));let gt=J(E);if(gt!==L.__cacheKey){st[gt]===void 0&&(st[gt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),st[gt].usedTimes++;let W=st[L.__cacheKey];W!==void 0&&(st[L.__cacheKey].usedTimes--,W.usedTimes===0&&O(E)),L.__cacheKey=gt,L.__webglTexture=st[gt].texture}return X}function Ft(L,E,X){return Math.floor(Math.floor(L/X)/E)}function se(L,E,X,ft){let gt=L.updateRanges;if(gt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,X,ft,E.data);else{gt.sort((N,Y)=>N.start-Y.start);let W=0;for(let N=1;N<gt.length;N++){let Y=gt[W],j=gt[N],ct=Y.start+Y.count,lt=Ft(j.start,E.width,4),ht=Ft(Y.start,E.width,4);j.start<=ct+1&&lt===ht&&Ft(j.start+j.count-1,E.width,4)===lt?Y.count=Math.max(Y.count,j.start+j.count-Y.start):(++W,gt[W]=j)}gt.length=W+1;let F=e.getParameter(r.UNPACK_ROW_LENGTH),V=e.getParameter(r.UNPACK_SKIP_PIXELS),rt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let N=0,Y=gt.length;N<Y;N++){let j=gt[N],ct=Math.floor(j.start/4),lt=Math.ceil(j.count/4),ht=ct%E.width,ut=Math.floor(ct/E.width),dt=lt,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(r.UNPACK_SKIP_ROWS,ut),e.texSubImage2D(r.TEXTURE_2D,0,ht,ut,dt,nt,X,ft,E.data)}L.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,F),e.pixelStorei(r.UNPACK_SKIP_PIXELS,V),e.pixelStorei(r.UNPACK_SKIP_ROWS,rt)}}function re(L,E,X){let ft=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=r.TEXTURE_3D);let st=Pt(L,E),gt=E.source;e.bindTexture(ft,L.__webglTexture,r.TEXTURE0+X);let W=n.get(gt);if(gt.version!==W.__version||st===!0){if(e.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let nt=ce.getPrimaries(ce.workingColorSpace),it=E.colorSpace===Er?null:ce.getPrimaries(E.colorSpace),vt=E.colorSpace===Er||nt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let V=v(E.image,!1,i.maxTextureSize);V=Dt(E,V);let rt=s.convert(E.format,E.colorSpace),N=s.convert(E.type),Y=C(E.internalFormat,rt,N,E.normalized,E.colorSpace,E.isVideoTexture);kt(ft,E);let j,ct=E.mipmaps,lt=E.isVideoTexture!==!0,ht=W.__version===void 0||st===!0,ut=gt.dataReady,dt=y(E,V);if(E.isDepthTexture)Y=p(E.format===Tr,E.type),ht&&(lt?e.texStorage2D(r.TEXTURE_2D,1,Y,V.width,V.height):e.texImage2D(r.TEXTURE_2D,0,Y,V.width,V.height,0,rt,N,null));else if(E.isDataTexture)if(ct.length>0){lt&&ht&&e.texStorage2D(r.TEXTURE_2D,dt,Y,ct[0].width,ct[0].height);for(let nt=0,it=ct.length;nt<it;nt++)j=ct[nt],lt?ut&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,j.width,j.height,rt,N,j.data):e.texImage2D(r.TEXTURE_2D,nt,Y,j.width,j.height,0,rt,N,j.data);E.generateMipmaps=!1}else lt?(ht&&e.texStorage2D(r.TEXTURE_2D,dt,Y,V.width,V.height),ut&&se(E,V,rt,N)):e.texImage2D(r.TEXTURE_2D,0,Y,V.width,V.height,0,rt,N,V.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){lt&&ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Y,ct[0].width,ct[0].height,V.depth);for(let nt=0,it=ct.length;nt<it;nt++)if(j=ct[nt],E.format!==gi)if(rt!==null)if(lt){if(ut)if(E.layerUpdates.size>0){let vt=Jd(j.width,j.height,E.format,E.type);for(let ot of E.layerUpdates){let Tt=j.data.subarray(ot*vt/j.data.BYTES_PER_ELEMENT,(ot+1)*vt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,ot,j.width,j.height,1,rt,Tt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,j.width,j.height,V.depth,rt,j.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,Y,j.width,j.height,V.depth,0,j.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?ut&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,j.width,j.height,V.depth,rt,N,j.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,Y,j.width,j.height,V.depth,0,rt,N,j.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{lt&&ht&&e.texStorage2D(r.TEXTURE_2D,dt,Y,ct[0].width,ct[0].height);for(let nt=0,it=ct.length;nt<it;nt++)j=ct[nt],E.format!==gi?rt!==null?lt?ut&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,j.width,j.height,rt,j.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,Y,j.width,j.height,0,j.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?ut&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,j.width,j.height,rt,N,j.data):e.texImage2D(r.TEXTURE_2D,nt,Y,j.width,j.height,0,rt,N,j.data)}else if(E.isDataArrayTexture)if(lt){if(ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Y,V.width,V.height,V.depth),ut)if(E.layerUpdates.size>0){let nt=Jd(V.width,V.height,E.format,E.type);for(let it of E.layerUpdates){let vt=V.data.subarray(it*nt/V.data.BYTES_PER_ELEMENT,(it+1)*nt/V.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,it,V.width,V.height,1,rt,N,vt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,rt,N,V.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Y,V.width,V.height,V.depth,0,rt,N,V.data);else if(E.isData3DTexture)lt?(ht&&e.texStorage3D(r.TEXTURE_3D,dt,Y,V.width,V.height,V.depth),ut&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,rt,N,V.data)):e.texImage3D(r.TEXTURE_3D,0,Y,V.width,V.height,V.depth,0,rt,N,V.data);else if(E.isFramebufferTexture){if(ht)if(lt)e.texStorage2D(r.TEXTURE_2D,dt,Y,V.width,V.height);else{let nt=V.width,it=V.height;for(let vt=0;vt<dt;vt++)e.texImage2D(r.TEXTURE_2D,vt,Y,nt,it,0,rt,N,null),nt>>=1,it>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),V.parentNode!==nt){nt.appendChild(V),f.add(E),nt.onpaint=it=>{let vt=it.changedElements;for(let ot of f)vt.includes(ot.image)&&(ot.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,V);else{let vt=r.RGBA,ot=r.RGBA,Tt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,vt,ot,Tt,V)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ct.length>0){if(lt&&ht){let nt=Gt(ct[0]);e.texStorage2D(r.TEXTURE_2D,dt,Y,nt.width,nt.height)}for(let nt=0,it=ct.length;nt<it;nt++)j=ct[nt],lt?ut&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,rt,N,j):e.texImage2D(r.TEXTURE_2D,nt,Y,rt,N,j);E.generateMipmaps=!1}else if(lt){if(ht){let nt=Gt(V);e.texStorage2D(r.TEXTURE_2D,dt,Y,nt.width,nt.height)}ut&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,N,V)}else e.texImage2D(r.TEXTURE_2D,0,Y,rt,N,V);T(E)&&E.mipmapsAutoUpdate===!0&&S(ft),W.__version=gt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function $(L,E,X){if(E.image.length!==6)return;let ft=Pt(L,E),st=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);let gt=n.get(st);if(st.version!==gt.__version||ft===!0){e.activeTexture(r.TEXTURE0+X);let W=ce.getPrimaries(ce.workingColorSpace),F=E.colorSpace===Er?null:ce.getPrimaries(E.colorSpace),V=E.colorSpace===Er||W===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let rt=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let ot=0;ot<6;ot++)!rt&&!N?Y[ot]=v(E.image[ot],!0,i.maxCubemapSize):Y[ot]=N?E.image[ot].image:E.image[ot],Y[ot]=Dt(E,Y[ot]);let j=Y[0],ct=s.convert(E.format,E.colorSpace),lt=s.convert(E.type),ht=C(E.internalFormat,ct,lt,E.normalized,E.colorSpace),ut=E.isVideoTexture!==!0,dt=gt.__version===void 0||ft===!0,nt=st.dataReady,it=y(E,j);kt(r.TEXTURE_CUBE_MAP,E);let vt;if(E.isDepthTexture){if(ht=p(E.format===Tr,E.type),dt)if(ut)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,ht,j.width,j.height);else for(let ot=0;ot<6;ot++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,j.width,j.height,0,ct,lt,null)}else if(rt){ut&&dt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,ht,j.width,j.height);for(let ot=0;ot<6;ot++){vt=Y[ot].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){let Zt=vt[Tt];E.format!==gi?ct!==null?ut?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Zt.width,Zt.height,ct,Zt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,ht,Zt.width,Zt.height,0,Zt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Zt.width,Zt.height,ct,lt,Zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,ht,Zt.width,Zt.height,0,ct,lt,Zt.data)}}}else{if(vt=E.mipmaps,ut&&dt){vt.length>0&&it++;let ot=Gt(Y[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,ht,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(N){ut?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Y[ot].width,Y[ot].height,ct,lt,Y[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,Y[ot].width,Y[ot].height,0,ct,lt,Y[ot].data);for(let Tt=0;Tt<vt.length;Tt++){let Wt=vt[Tt].image[ot].image;ut?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Wt.width,Wt.height,ct,lt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,ht,Wt.width,Wt.height,0,ct,lt,Wt.data)}}else{ut?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ct,lt,Y[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,ct,lt,Y[ot]);for(let Tt=0;Tt<vt.length;Tt++){let Zt=vt[Tt];ut?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,ct,lt,Zt.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,ht,ct,lt,Zt.image[ot])}}}T(E)&&E.mipmapsAutoUpdate===!0&&S(r.TEXTURE_CUBE_MAP),gt.__version=st.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Kt(L,E,X,ft,st,gt){let W=s.convert(X.format,X.colorSpace),F=s.convert(X.type),V=C(X.internalFormat,W,F,X.normalized,X.colorSpace),rt=n.get(E),N=n.get(X);if(N.__renderTarget=E,!rt.__hasExternalTextures){let Y=Math.max(1,E.width>>gt),j=Math.max(1,E.height>>gt);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,gt,V,Y,j,E.depth,0,W,F,null):e.texImage2D(st,gt,V,Y,j,0,W,F,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),mt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,st,N.__webglTexture,0,Ht(E)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,st,N.__webglTexture,gt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(L,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){let ft=E.depthTexture,st=ft&&ft.isDepthTexture?ft.type:null,gt=p(E.stencilBuffer,st),W=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht(E),gt,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht(E),gt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,gt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,L)}else{let ft=E.textures;for(let st=0;st<ft.length;st++){let gt=ft[st],W=s.convert(gt.format,gt.colorSpace),F=s.convert(gt.type),V=C(gt.internalFormat,W,F,gt.normalized,gt.colorSpace);mt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht(E),V,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht(E),V,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,V,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(L,E,X){let ft=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(E.depthTexture);st.__renderTarget=E;let gt=ft?E.depthTexture.image[0]:E.depthTexture.image;(!st.__webglTexture||gt.width!==E.width||gt.height!==E.height)&&(gt.width=E.width,gt.height=E.height,E.depthTexture.needsUpdate=!0),ft?_t(E.depthTexture,0):at(E.depthTexture,0);let W=st.__webglTexture,F=Ht(E),V=ft?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,rt=E.depthTexture.format===Tr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sr)mt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,V,W,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,rt,V,W,0);else if(E.depthTexture.format===Tr)mt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,V,W,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,rt,V,W,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(L){let E=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let ft=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){let st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",st)};ft.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=ft}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let ft=0;ft<6;ft++)ge(E.__webglFramebuffer[ft],L,ft);else L.texture.mipmaps.length>0?ge(E.__webglFramebuffer[0],L,0):ge(E.__webglFramebuffer,L,0);else if(X){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=r.createRenderbuffer(),Ue(E.__webglDepthbuffer[ft],L,!1);else{let st=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,gt)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ue(E.__webglDepthbuffer,L,!1);else{let st=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,gt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function De(L,E,X){let ft=n.get(L);E!==void 0&&Kt(ft.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Qt(L)}function Ne(L){let E=L.texture,X=n.get(L),ft=n.get(E);L.addEventListener("dispose",P),M(L);let st=L.textures,gt=L.isWebGLCubeRenderTarget===!0,W=st.length>1;if(W||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=E.version,o.memory.textures++),gt){X.__webglFramebuffer=[];for(let F=0;F<6;F++)if(E.mipmaps.length>0){X.__webglFramebuffer[F]=[];for(let V=0;V<E.mipmaps.length;V++)X.__webglFramebuffer[F][V]=r.createFramebuffer()}else X.__webglFramebuffer[F]=r.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let F=0;F<E.mipmaps.length;F++)X.__webglFramebuffer[F]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(W)for(let F=0,V=st.length;F<V;F++){let rt=n.get(st[F]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&mt(L)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let F=0;F<st.length;F++){let V=st[F];X.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[F]);let rt=s.convert(V.format,V.colorSpace),N=s.convert(V.type),Y=C(V.internalFormat,rt,N,V.normalized,V.colorSpace,L.isXRRenderTarget===!0),j=Ht(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,Y,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,X.__webglColorRenderbuffer[F])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(gt){e.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),kt(r.TEXTURE_CUBE_MAP,E);for(let F=0;F<6;F++)if(E.mipmaps.length>0)for(let V=0;V<E.mipmaps.length;V++)Kt(X.__webglFramebuffer[F][V],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,V);else Kt(X.__webglFramebuffer[F],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);T(E)?S(r.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(W){for(let F=0,V=st.length;F<V;F++){let rt=st[F],N=n.get(rt),Y=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Y=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Y,N.__webglTexture),kt(Y,rt),Kt(X.__webglFramebuffer,L,rt,r.COLOR_ATTACHMENT0+F,Y,0),T(rt)&&S(Y)}e.unbindTexture()}else{let F=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(F=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(F,ft.__webglTexture),kt(F,E),E.mipmaps.length>0)for(let V=0;V<E.mipmaps.length;V++)Kt(X.__webglFramebuffer[V],L,E,r.COLOR_ATTACHMENT0,F,V);else Kt(X.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,F,0);T(E)?S(F):E.mipmaps.length>0&&r.texParameteri(F,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Qt(L)}function k(L){let E=L.textures;for(let X=0,ft=E.length;X<ft;X++){let st=E[X];if(T(st)&&st.mipmapsAutoUpdate===!0){let gt=w(L),W=n.get(st).__webglTexture;e.bindTexture(gt,W),S(gt),e.unbindTexture()}}}let pe=[];function ie(L){if(L.samples>0){if(mt(L)===!1){let E=L.textures,X=L.width,ft=L.height,st=r.COLOR_BUFFER_BIT,gt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=n.get(L),F=E.length>1;if(F)for(let rt=0;rt<E.length;rt++)e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,W.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),F){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,W.__webglColorRenderbuffer[rt]);let N=n.get(E[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,X,ft,0,0,X,ft,st,r.NEAREST),l===!0&&(pe.length=0,pe.push(r.COLOR_ATTACHMENT0+rt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&pe.push(gt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),F)for(let rt=0;rt<E.length;rt++){e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,W.__webglColorRenderbuffer[rt]);let N=n.get(E[rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,W.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,N,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ht(L){return Math.min(i.maxSamples,L.samples)}function mt(L){let E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(L){let E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Dt(L,E){let X=L.colorSpace,ft=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Ua&&X!==Er&&(ce.getTransfer(X)===Me?(ft!==gi||st!==mi)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",X)),E}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=yt,this.resetTextureUnits=I,this.getTextureUnits=et,this.setTextureUnits=xt,this.setTexture2D=at,this.setTexture2DArray=pt,this.setTexture3D=wt,this.setTextureCube=_t,this.rebindTextures=De,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=mt,this.dispose=z}function MT(r,t){function e(n,i=Er){let s,o=ce.getTransfer(i);if(n===mi)return r.UNSIGNED_BYTE;if(n===Ru)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ld)return r.BYTE;if(n===Dd)return r.SHORT;if(n===ko)return r.UNSIGNED_SHORT;if(n===Cu)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===Ud)return r.ALPHA;if(n===Fd)return r.RGB;if(n===gi)return r.RGBA;if(n===Sr)return r.DEPTH_COMPONENT;if(n===Tr)return r.DEPTH_STENCIL;if(n===Bd)return r.RED;if(n===Iu)return r.RED_INTEGER;if(n===es)return r.RG;if(n===Lu)return r.RG_INTEGER;if(n===Du)return r.RGBA_INTEGER;if(n===tl||n===el||n===nl||n===il)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nu||n===Ou||n===Uu||n===Fu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bu||n===zu||n===ku||n===Gu||n===Vu||n===rl||n===Hu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bu||n===zu)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ku)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gu)return s.COMPRESSED_R11_EAC;if(n===Vu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===rl)return s.COMPRESSED_RG11_EAC;if(n===Hu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===Ju||n===Ku||n===ju||n===Qu||n===$u||n===th||n===eh||n===nh||n===ih)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ju)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ku)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ju)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$u)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===th)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ih)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rh||n===sh||n===oh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rh)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===lh||n===sl||n===ch)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ah)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ch)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Za(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ti({vertexShader:bT,fragmentShader:wT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ki(new Ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},up=class extends Yi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new cp,x={},v=e.getContextAttributes(),T=null,S=null,w=[],C=[],p=new ue,y=null,M=null,b=new Gn;b.viewport=new Le;let R=new Gn;R.viewport=new Le;let P=[b,R],U=new bu,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=w[J];return at===void 0&&(at=new Io,w[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=w[J];return at===void 0&&(at=new Io,w[J]=at),at.getGripSpace()},this.getHand=function(J){let at=w[J];return at===void 0&&(at=new Io,w[J]=at),at.getHandSpace()};function G(J){let at=C.indexOf(J.inputSource);if(at===-1)return;let pt=w[at];pt!==void 0&&(pt.update(J.inputSource,J.frame,c||o),pt.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",Z);for(let J=0;J<w.length;J++){let at=C[J];at!==null&&(C[J]=null,w[J].disconnect(at))}D=null,z=null,m.reset();for(let J in x)delete x[J];if(t.setRenderTarget(T),d=null,h=null,f=null,i=null,S=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(p.width,p.height,!1),M!==null){let J=M.camera;J.fov=M.fov,J.zoom=M.zoom,J.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",O),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(p),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,wt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=v.stencil?Tr:Sr,wt=v.stencil?Fs:Oi);let It={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(It),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new di(h.textureWidth,h.textureHeight,{format:gi,type:mi,depthTexture:new br(h.textureWidth,h.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let pt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new di(d.framebufferWidth,d.framebufferHeight,{format:gi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(J){for(let at=0;at<J.removed.length;at++){let pt=J.removed[at],wt=C.indexOf(pt);wt>=0&&(C[wt]=null,w[wt].disconnect(pt))}for(let at=0;at<J.added.length;at++){let pt=J.added[at],wt=C.indexOf(pt);if(wt===-1){for(let It=0;It<w.length;It++)if(It>=C.length){C.push(pt),wt=It;break}else if(C[It]===null){C[It]=pt,wt=It;break}if(wt===-1)break}let _t=w[wt];_t&&_t.connect(pt)}}function H(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let at=J.near,pt=J.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),U.near=R.near=b.near=at,U.far=R.far=b.far=pt,(D!==U.near||z!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,z=U.far),U.layers.mask=J.layers.mask|6,b.layers.mask=U.layers.mask&-5,R.layers.mask=U.layers.mask&-3;let wt=J.parent,_t=U.cameras;H(U,wt);for(let It=0;It<_t.length;It++)H(_t[It],wt);U.projectionMatrix.copy(b.projectionMatrix),U.projectionMatrixInverse.copy(b.projectionMatrixInverse),M===null&&J.isPerspectiveCamera&&(M={camera:J,fov:J.fov,zoom:J.zoom}),I(J,U,wt)};function I(J,at,pt){pt===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return x[J]};let et=null;function xt(J,at){if(u=at.getViewerPose(c||o),g=at,u!==null){let pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let wt=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,wt=!0);for(let At=0;At<pt.length;At++){let kt=pt[At],Pt=null;if(d!==null)Pt=d.getViewport(kt);else{let se=f.getViewSubImage(h,kt);Pt=se.viewport,At===0&&(t.setRenderTargetTextures(S,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(S))}let Ft=P[At];Ft===void 0&&(Ft=new Gn,Ft.layers.enable(At),Ft.viewport=new Le,P[At]=Ft),Ft.matrix.fromArray(kt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(kt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),At===0&&(U.matrix.copy(Ft.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),wt===!0&&U.cameras.push(Ft)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let At=f.getDepthInformation(pt[0]);At&&At.isValid&&At.texture&&m.init(At,i.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let At=0;At<pt.length;At++){let kt=pt[At].camera;if(kt){let Pt=x[kt];Pt||(Pt=new Za,x[kt]=Pt);let Ft=f.getCameraImage(kt);Pt.sourceTexture=Ft}}}}for(let pt=0;pt<w.length;pt++){let wt=C[pt],_t=w[pt];wt!==null&&_t!==void 0&&_t.update(wt,at,c||o)}et&&et(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let yt=new C_;yt.setAnimationLoop(xt),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}},TT=new Ie,B_=new qt;B_.set(-1,0,0,0,1,0,0,0,1);function ET(r,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,qd(r)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function i(m,x,v,T,S){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(m,x):x.isMeshLambertMaterial?(s(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(m,x),f(m,x)):x.isMeshPhongMaterial?(s(m,x),u(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(m,x),h(m,x),x.isMeshPhysicalMaterial&&d(m,x,S)):x.isMeshMatcapMaterial?(s(m,x),g(m,x)):x.isMeshDepthMaterial?s(m,x):x.isMeshDistanceMaterial?(s(m,x),_(m,x)):x.isMeshNormalMaterial?s(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,v,T):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===Hn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===Hn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let v=t.get(x),T=v.envMap,S=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(TT.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(B_),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,v,T){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*v,m.scale.value=T*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function u(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function f(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function h(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function d(m,x,v){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,e(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,x){x.matcap&&(m.matcap.value=x.matcap)}function _(m,x){let v=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AT(r,t,e,n){let i={},s={};function o(v,T){let S=T.program;n.uniformBlockBinding(v,S,i[v.id])}function a(v,T){let S=i[v.id];S===void 0&&(g(v),S=l(v),i[v.id]=S,v.addEventListener("dispose",m));let w=T.program;n.updateUBOMapping(v,w);let C=t.render.frame;s[v.id]!==C&&(c(v),s[v.id]=C)}function l(v){let T=r.createBuffer(),S=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,S,w),r.bindBuffer(r.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],S=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let C=0,p=S.length;C<p;C++){let y=S[C];if(Array.isArray(y))for(let M=0,b=y.length;M<b;M++)u(y[M],C,M,w);else u(y,C,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,T,S,w){if(h(v,T,S,w)===!0){let C=v.__offset,p=v.value;if(Array.isArray(p)){let y=0;for(let M=0;M<p.length;M++){let b=p[M],R=_(b,!0);f(b,v.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(p,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,C,v.__data)}}function f(v,T,S){typeof v=="number"||typeof v=="boolean"?T[S]=v:v.isMatrix3?(T[S]=v.elements[0],T[S+1]=v.elements[1],T[S+2]=v.elements[2],T[S+3]=0,T[S+4]=v.elements[3],T[S+5]=v.elements[4],T[S+6]=v.elements[5],T[S+7]=0,T[S+8]=v.elements[6],T[S+9]=v.elements[7],T[S+10]=v.elements[8],T[S+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-S),S):v.toArray(T,S)}function h(v,T,S,w){let C=v.value,p=T+"_"+S;if(Array.isArray(C)){w[p]===void 0&&(w[p]=[]);let y=w[p],M=!1;for(let b=0;b<C.length;b++)d(C[b],y,b)===!0&&(M=!0);return M}return d(C,w,p)}function d(v,T,S){if(T[S]===void 0)return typeof v=="number"||typeof v=="boolean"?T[S]=v:ArrayBuffer.isView(v)?T[S]=v.slice():T[S]=v.clone(),!0;{let w=T[S];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(v){let T=v.uniforms,S=0,w=16;for(let p=0,y=T.length;p<y;p++){let M=Array.isArray(T[p])?T[p]:[T[p]];for(let b=0,R=M.length;b<R;b++){let P=M[b],U=Array.isArray(P.value)?P.value:[P.value],D=Array.isArray(T[p])||Array.isArray(P.value),z=S;for(let O=0,Z=U.length;O<Z;O++){let H=U[O],I=_(H,D),et=S%w,xt=et%I.boundary,yt=et+xt;S+=xt,yt!==0&&w-yt<I.storage&&(S+=w-yt),O===0&&(z=S),S+=I.storage}let G=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new G((S-z)/Float32Array.BYTES_PER_ELEMENT),P.__offset=z}}let C=S%w;return C>0&&(S+=w-C),v.__size=S,v.__cache={},this}function _(v,T){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let T=v.target;T.removeEventListener("dispose",m),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function x(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:o,update:a,dispose:x}}var CT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function RT(){return $i===null&&($i=new Do(CT,16,16,es,Fi),$i.name="DFG_LUT",$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=qi,$i.wrapT=qi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var dh=class{constructor(t={}){let{canvas:e=Q0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=mi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=d,m=new Set([Du,Lu,Iu]),x=new Set([mi,Oi,ko,Fs,Ru,Pu]),v=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,C=null,p=[],y=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,R=!1,P=null,U=null,D=null,z=null;this._outputColorSpace=fi;let G=0,O=0,Z=null,H=-1,I=null,et=new Le,xt=new Le,yt=null,J=new de(0),at=0,pt=e.width,wt=e.height,_t=1,It=null,Mt=null,At=new Le(0,0,pt,wt),kt=new Le(0,0,pt,wt),Pt=!1,Ft=new Ls,se=new iu,re=!1,$=!1,Kt=new Ie,Ue=new Q,ge=new Le,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Ne(){return Z===null?_t:1}let k=n;function pe(A,B){return e.getContext(A,B)}let ie,Ht,mt,oe,Dt,Gt,L,E,X,ft,st,gt,W,F,V,rt,N,Y,j,ct,lt,ht,ut;try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),k===null){let B="webgl2";if(k=pe(B,A),k===null)throw pe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(A){throw e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Yt("WebGLRenderer: "+A.message),A}function dt(){ie=new kb(k),ie.init(),lt=new MT(k,ie),Ht=new Rb(k,ie,t,lt),mt=new yT(k,ie),Ht.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),U=k.createFramebuffer(),D=k.createFramebuffer(),z=k.createFramebuffer(),oe=new Hb(k),Dt=new oT,Gt=new ST(k,ie,mt,Dt,Ht,lt,oe),L=new zb(b),E=new XS(k),ht=new Ab(k,E),X=new Gb(k,E,oe,ht),ft=new Xb(k,X,E,ht,oe),Y=new Wb(k,Ht,Gt),V=new Pb(Dt),st=new sT(b,L,ie,Ht,ht,V),gt=new ET(b,Dt),W=new lT,F=new pT(ie),N=new Eb(b,L,mt,ft,g,l),rt=new vT(b,ft,Ht),ut=new AT(k,oe,Ht,mt),j=new Cb(k,ie,oe),ct=new Vb(k,ie,oe),oe.programs=st.programs,b.capabilities=Ht,b.extensions=ie,b.properties=Dt,b.renderLists=W,b.shadowMap=rt,b.state=mt,b.info=oe}_!==mi&&(M=new Yb(_,e.width,e.height,a,i,s));let nt=new up(b,k);this.xr=nt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(A){A!==void 0&&(_t=A,this.setSize(pt,wt,!1))},this.getSize=function(A){return A.set(pt,wt)},this.setSize=function(A,B,tt=!0){if(nt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=A,wt=B,e.width=Math.floor(A*_t),e.height=Math.floor(B*_t),tt===!0&&(e.style.width=A+"px",e.style.height=B+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(pt*_t,wt*_t).floor()},this.setDrawingBufferSize=function(A,B,tt){pt=A,wt=B,_t=tt,e.width=Math.floor(A*tt),e.height=Math.floor(B*tt),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(_===mi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(At)},this.setViewport=function(A,B,tt,q){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,B,tt,q),mt.viewport(et.copy(At).multiplyScalar(Ne()).round())},this.getScissor=function(A){return A.copy(kt)},this.setScissor=function(A,B,tt,q){A.isVector4?kt.set(A.x,A.y,A.z,A.w):kt.set(A,B,tt,q),mt.scissor(xt.copy(kt).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){mt.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){It=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,tt=!0){let q=0;if(A){let K=!1;if(Z!==null){let bt=Z.texture.format;K=m.has(bt)}if(K){let bt=Z.texture.type,Nt=x.has(bt),St=N.getClearColor(),Ct=N.getClearAlpha(),Bt=St.r,Jt=St.g,ae=St.b;Nt?(v[0]=Bt,v[1]=Jt,v[2]=ae,v[3]=Ct,k.clearBufferuiv(k.COLOR,0,v)):(T[0]=Bt,T[1]=Jt,T[2]=ae,T[3]=Ct,k.clearBufferiv(k.COLOR,0,T))}else q|=k.COLOR_BUFFER_BIT}B&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),N.dispose(),W.dispose(),F.dispose(),Gt.dispose(),Dt.dispose(),L.dispose(),ft.dispose(),X.dispose(),ht.dispose(),ut.dispose(),st.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",xe),nt.removeEventListener("sessionend",ye),nn.stop()};function it(A){A.preventDefault(),Wd("WebGLRenderer: Context Lost."),R=!0}function vt(){Wd("WebGLRenderer: Context Restored."),R=!1;let A=oe.autoReset,B=rt.enabled,tt=rt.autoUpdate,q=rt.needsUpdate,K=rt.type;dt(),oe.autoReset=A,rt.enabled=B,rt.autoUpdate=tt,rt.needsUpdate=q,rt.type=K}function ot(A){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Tt(A){let B=A.target;B.removeEventListener("dispose",Tt),Zt(B)}function Zt(A){Wt(A),Dt.remove(A)}function Wt(A){let B=Dt.get(A).programs;B!==void 0&&(B.forEach(function(tt){st.releaseProgram(tt)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,tt,q,K,bt){B===null&&(B=Qt);let Nt=K.isMesh&&K.matrixWorld.determinantAffine()<0,St=_i(A,B,tt,q,K);mt.setMaterial(q,Nt);let Ct=tt.index,Bt=1;if(q.wireframe===!0){if(Ct=X.getWireframeAttribute(tt),Ct===void 0)return;Bt=2}let Jt=tt.drawRange,ae=tt.attributes.position,Ot=Jt.start*Bt,le=(Jt.start+Jt.count)*Bt;bt!==null&&(Ot=Math.max(Ot,bt.start*Bt),le=Math.min(le,(bt.start+bt.count)*Bt)),Ct!==null?(Ot=Math.max(Ot,0),le=Math.min(le,Ct.count)):ae!=null&&(Ot=Math.max(Ot,0),le=Math.min(le,ae.count));let Qe=le-Ot;if(Qe<0||Qe===1/0)return;ht.setup(K,q,St,tt,Ct);let Pe,Ae=j;if(Ct!==null&&(Pe=E.get(Ct),Ae=ct,Ae.setIndex(Pe)),K.isMesh)q.wireframe===!0?(mt.setLineWidth(q.wireframeLinewidth*Ne()),Ae.setMode(k.LINES)):Ae.setMode(k.TRIANGLES);else if(K.isLine){let vn=q.linewidth;vn===void 0&&(vn=1),mt.setLineWidth(vn*Ne()),K.isLineSegments?Ae.setMode(k.LINES):K.isLineLoop?Ae.setMode(k.LINE_LOOP):Ae.setMode(k.LINE_STRIP)}else K.isPoints?Ae.setMode(k.POINTS):K.isSprite&&Ae.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let vn=K._multiDrawStarts,Ut=K._multiDrawCounts,Ln=K._multiDrawCount,ve=Ct?E.get(Ct).bytesPerElement:1,ss=Dt.get(q).currentProgram.getUniforms();for(let yn=0;yn<Ln;yn++)ss.setValue(k,"_gl_DrawID",yn),Ae.render(vn[yn]/ve,Ut[yn])}else if(K.isInstancedMesh)Ae.renderInstances(Ot,Qe,K.count);else if(tt.isInstancedBufferGeometry){let vn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ut=Math.min(tt.instanceCount,vn);Ae.renderInstances(Ot,Qe,Ut)}else Ae.render(Ot,Qe)};function _e(A,B,tt,q){P!==null&&A.isNodeMaterial&&P.setObject(q,A),re===!0&&V.setState(A,tt,!1),A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,ni(A,B,q),A.side=ts,A.needsUpdate=!0,ni(A,B,q),A.side=ji):ni(A,B,q)}this.compile=function(A,B,tt=null){tt===null&&(tt=A),P!==null&&P.renderStart(A,B,tt),C=F.get(tt),C.init(B),y.push(C),tt.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),A!==tt&&A.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),C.setupLights(),P!==null&&P.updateLights(C.state.lightsArray),$=this.localClippingEnabled,re=V.init(this.clippingPlanes,$),re===!0&&V.setGlobalState(this.clippingPlanes,B),P!==null&&rt.render(C.state.shadowsArray,tt,B);let q=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let bt=K.material;if(bt)if(Array.isArray(bt))for(let Nt=0;Nt<bt.length;Nt++){let St=bt[Nt];_e(St,tt,B,K),q.add(St)}else _e(bt,tt,B,K),q.add(bt)}),C=y.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(A,B,tt=null){let q=this.compile(A,B,tt);return new Promise(K=>{function bt(){if(q.forEach(function(Nt){let Ct=Dt.get(Nt).currentProgram;(Ct===void 0||Ct.isReady())&&q.delete(Nt)}),q.size===0){K(A);return}setTimeout(bt,10)}ie.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Te=null;function Re(A){Te&&Te(A)}function xe(){nn.stop()}function ye(){nn.start()}let nn=new C_;nn.setAnimationLoop(Re),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(A){Te=A,nt.setAnimationLoop(A),A===null?nn.stop():nn.start()},nt.addEventListener("sessionstart",xe),nt.addEventListener("sessionend",ye),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(A,B);let tt=nt.enabled===!0&&nt.isPresenting===!0,q=M!==null&&(Z===null||tt)&&M.begin(b,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(B),B=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,B,Z),C=F.get(A,y.length),C.init(B),C.state.textureUnits=Gt.getTextureUnits(),y.push(C),Kt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?se.setFromArrayCamera(B):Ft.setFromProjectionMatrix(Kt,Ti,B.reversedDepth),$=this.localClippingEnabled,re=V.init(this.clippingPlanes,$),w=W.get(A,p.length),w.init(),p.push(w),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Nt=b.xr.getDepthSensingMesh();Nt!==null&&Ee(Nt,B,-1/0,b.sortObjects)}Ee(A,B,0,b.sortObjects),w.finish(),P!==null&&P.updateLights(C.state.lightsArray),b.sortObjects===!0&&w.sort(It,Mt),De=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,De&&N.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),re===!0&&V.beginShadows();let K=C.state.shadowsArray;if(rt.render(K,A,B),re===!0&&V.endShadows(),(q&&M.hasRenderPass())===!1){let Nt=w.opaque,St=w.transmissive;if(C.setupLights(),B.isArrayCamera){let Ct=B.cameras;if(St.length>0)for(let Bt=0,Jt=Ct.length;Bt<Jt;Bt++){let ae=Ct[Bt];ei(Nt,St,A,ae)}De&&N.render(A);for(let Bt=0,Jt=Ct.length;Bt<Jt;Bt++){let ae=Ct[Bt];xn(w,A,ae,ae.viewport)}}else St.length>0&&ei(Nt,St,A,B),De&&N.render(A),xn(w,A,B)}Z!==null&&O===0&&(Gt.updateMultisampleRenderTarget(Z),Gt.updateRenderTargetMipmap(Z)),q&&M.end(b),A.isScene===!0&&A.onAfterRender(b,A,B),ht.resetDefaultState(),H=-1,I=null,y.pop(),y.length>0?(C=y[y.length-1],Gt.setTextureUnits(C.state.textureUnits),re===!0&&V.setGlobalState(b.clippingPlanes,C.state.camera)):C=null,p.pop(),p.length>0?w=p[p.length-1]:w=null,P!==null&&P.renderEnd()};function Ee(A,B,tt,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){let Nt=B.isArrayCamera?se:Ft;if(!A.frustumCulled||A.intersectsFrustum(Nt)){q&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Kt);let St=ft.update(A),Ct=A.material;Ct.visible&&w.push(A,St,Ct,tt,ge.z,null,B)}}else if(A.isMesh||A.isLine||A.isPoints){let Nt=B.isArrayCamera?se:Ft;if(!A.frustumCulled||A.intersectsFrustum(Nt)){let St=ft.update(A),Ct=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ge.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ge.copy(St.boundingSphere.center)),ge.applyMatrix4(A.matrixWorld).applyMatrix4(Kt)),Array.isArray(Ct)){let Bt=St.groups;for(let Jt=0,ae=Bt.length;Jt<ae;Jt++){let Ot=Bt[Jt],le=Ct[Ot.materialIndex];le&&le.visible&&w.push(A,St,le,tt,ge.z,Ot,B)}}else Ct.visible&&w.push(A,St,Ct,tt,ge.z,null,B)}}}let bt=A.children;for(let Nt=0,St=bt.length;Nt<St;Nt++)Ee(bt[Nt],B,tt,q)}function xn(A,B,tt,q){let{opaque:K,transmissive:bt,transparent:Nt}=A;C.setupLightsView(tt),re===!0&&V.setGlobalState(b.clippingPlanes,tt),q&&mt.viewport(et.copy(q)),K.length>0&&Ve(K,B,tt),bt.length>0&&Ve(bt,B,tt),Nt.length>0&&Ve(Nt,B,tt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ei(A,B,tt,q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[q.id]===void 0){let Ot=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[q.id]=new di(1,1,{generateMipmaps:!0,type:Ot?Fi:mi,minFilter:wr,samples:Math.max(4,Ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let bt=C.state.transmissionRenderTarget[q.id],Nt=q.viewport||et;bt.setSize(Nt.z*b.transmissionResolutionScale,Nt.w*b.transmissionResolutionScale);let St=b.getRenderTarget(),Ct=b.getActiveCubeFace(),Bt=b.getActiveMipmapLevel();b.setRenderTarget(bt),b.getClearColor(J),at=b.getClearAlpha(),at<1&&b.setClearColor(16777215,.5),b.clear(),De&&N.render(tt);let Jt=b.toneMapping;b.toneMapping=Qi;let ae=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),C.setupLightsView(q),re===!0&&V.setGlobalState(b.clippingPlanes,q),Ve(A,tt,q),Gt.updateMultisampleRenderTarget(bt),Gt.updateRenderTargetMipmap(bt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let le=0,Qe=B.length;le<Qe;le++){let Pe=B[le],{object:Ae,geometry:vn,material:Ut,group:Ln}=Pe;if(Ut.side===ji&&Ae.layers.test(q.layers)){let ve=Ut.side;Ut.side=Hn,Ut.needsUpdate=!0,je(Ae,tt,q,vn,Ut,Ln),Ut.side=ve,Ut.needsUpdate=!0,Ot=!0}}Ot===!0&&(Gt.updateMultisampleRenderTarget(bt),Gt.updateRenderTargetMipmap(bt))}b.setRenderTarget(St,Ct,Bt),b.setClearColor(J,at),ae!==void 0&&(q.viewport=ae),b.toneMapping=Jt}function Ve(A,B,tt){let q=B.isScene===!0?B.overrideMaterial:null;for(let K=0,bt=A.length;K<bt;K++){let Nt=A[K],{object:St,geometry:Ct,group:Bt}=Nt,Jt=Nt.material;Jt.allowOverride===!0&&q!==null&&(Jt=q),St.layers.test(tt.layers)&&je(St,B,tt,Ct,Jt,Bt)}}function je(A,B,tt,q,K,bt){P!==null&&K.isNodeMaterial&&P.setObject(A,K),A.onBeforeRender(b,B,tt,q,K,bt),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(b,B,tt,q,A,bt),K.transparent===!0&&K.side===ji&&K.forceSinglePass===!1?(K.side=Hn,K.needsUpdate=!0,b.renderBufferDirect(tt,B,q,K,A,bt),K.side=ts,K.needsUpdate=!0,b.renderBufferDirect(tt,B,q,K,A,bt),K.side=ji):b.renderBufferDirect(tt,B,q,K,A,bt),A.onAfterRender(b,B,tt,q,K,bt)}function rn(A){let B=0;for(let tt of A)tt.texture!==null&&B++;return B}function ni(A,B,tt){B.isScene!==!0&&(B=Qt);let q=Dt.get(A),K=C.state.lights,bt=C.state.shadowsArray,Nt=K.state.version,St=st.getParameters(A,K.state,bt,B,tt,C.state.lightProbeGridArray),Ct=st.getProgramCacheKey(St),Bt=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let Jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=L.get(A.envMap||q.environment,Jt),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",Tt),Bt=new Map,q.programs=Bt,q.programVariants=new Map);let ae=Bt.get(Ct);if(ae!==void 0){if(q.currentProgram===ae&&q.lightsStateVersion===Nt)return He(A,St),ae}else St.uniforms=st.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,tt,St),A.onBeforeCompile(St,b),ae=st.acquireProgram(St,Ct),Bt.set(Ct,ae),q.uniforms=St.uniforms;let Ot=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=V.uniform),He(A,St),q.needsLights=gl(A),q.lightsStateVersion=Nt,q.needsLights&&(Ot.ambientLightColor.value=K.state.ambient,Ot.lightProbe.value=K.state.probe,Ot.sunLights.value=K.state.sun,Ot.sunLightShadows.value=K.state.sunShadow,Ot.directionalLights.value=K.state.directional,Ot.directionalLightShadows.value=K.state.directionalShadow,Ot.spotLights.value=K.state.spot,Ot.spotLightShadows.value=K.state.spotShadow,Ot.rectAreaLights.value=K.state.rectArea,Ot.ltc_1.value=K.state.rectAreaLTC1,Ot.ltc_2.value=K.state.rectAreaLTC2,Ot.pointLights.value=K.state.point,Ot.pointLightShadows.value=K.state.pointShadow,Ot.hemisphereLights.value=K.state.hemi,Ot.sunShadowMatrix.value=K.state.sunShadowMatrix,Ot.sunShadowCascade.value=K.state.sunShadowCascade,Ot.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ot.spotLightMatrix.value=K.state.spotLightMatrix,Ot.spotLightMap.value=K.state.spotLightMap,Ot.pointShadowMatrix.value=K.state.pointShadowMatrix),q.numLightProbeGrids=rn(C.state.lightProbeGridArray),q.currentProgram=ae,q.uniformsList=null,ae}function Ws(A,B,tt,q,K){let bt=Dt.get(A),Nt=bt.currentProgram.id+","+q+","+K,St=bt.programVariants.get(Nt);return St===void 0?(St=ni(A,B,tt),bt.programVariants.set(Nt,St)):(bt.currentProgram=St,bt.uniformsList=null,bt.outputColorSpace=q,bt.toneMapping=K),St}function sn(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Go.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function He(A,B){let tt=Dt.get(A);tt.outputColorSpace=B.outputColorSpace,tt.batching=B.batching,tt.batchingColor=B.batchingColor,tt.instancing=B.instancing,tt.instancingColor=B.instancingColor,tt.instancingMorph=B.instancingMorph,tt.skinning=B.skinning,tt.morphTargets=B.morphTargets,tt.morphNormals=B.morphNormals,tt.morphColors=B.morphColors,tt.morphTargetsCount=B.morphTargetsCount,tt.numClippingPlanes=B.numClippingPlanes,tt.numIntersection=B.numClipIntersection,tt.vertexAlphas=B.vertexAlphas,tt.vertexTangents=B.vertexTangents,tt.toneMapping=B.toneMapping}function _i(A,B,tt,q,K){B.isScene!==!0&&(B=Qt),Gt.resetTextureUnits();let bt=B.fog,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,St=Z===null?b.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ce.workingColorSpace,Ct=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Bt=L.get(q.envMap||Nt,Ct),Jt=q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ae=!!tt.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!tt.morphAttributes.position,le=!!tt.morphAttributes.normal,Qe=!!tt.morphAttributes.color,Pe=Qi;q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pe=b.toneMapping);let Ae=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,vn=Ae!==void 0?Ae.length:0,Ut=Dt.get(q),Ln=C.state.lights;if(re===!0&&($===!0||A!==I)){let Be=A===I&&q.id===H;V.setState(q,A,Be)}let ve=!1,ss=!1;q.version===Ut.__version?Ut.needsLights&&Ut.lightsStateVersion!==Ln.state.version||K.isBatchedMesh&&Ut.batching===!1||!K.isBatchedMesh&&Ut.batching===!0||K.isBatchedMesh&&Ut.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ut.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ut.instancing===!1||!K.isInstancedMesh&&Ut.instancing===!0||K.isSkinnedMesh&&Ut.skinning===!1||!K.isSkinnedMesh&&Ut.skinning===!0||K.isInstancedMesh&&Ut.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ut.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ut.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ut.instancingMorph===!1&&K.morphTexture!==null||Ut.envMap!==Bt||q.fog===!0&&Ut.fog!==bt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==V.numPlanes||Ut.numIntersection!==V.numIntersection)||Ut.vertexAlphas!==Jt||Ut.vertexTangents!==ae||Ut.morphTargets!==Ot||Ut.morphNormals!==le||Ut.morphColors!==Qe||Ut.morphTargetsCount!==vn||Ut.numLightProbeGrids!==rn(C.state.lightProbeGridArray)?ve=!0:(Ut.outputColorSpace!==St||Ut.toneMapping!==Pe)&&(ss=!0):(ve=!0,Ut.__version=q.version);let yn=Ut.currentProgram;(ve===!0||ss===!0)&&(yn=ss===!0?Ws(q,B,K,St,Pe):ni(q,B,K),P&&q.isNodeMaterial&&P.onUpdateProgram(q,yn,Ut));let _l=!1,Cr=!1,os=!1,me=yn.getUniforms(),pn=Ut.uniforms;if(mt.useProgram(yn.program)&&(_l=!0,Cr=!0,os=!0),q.id!==H&&(H=q.id,Cr=!0),_l||I!==A){mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),me.setValue(k,"projectionMatrix",A.projectionMatrix),me.setValue(k,"viewMatrix",A.matrixWorldInverse);let un=me.map.cameraPosition;un!==void 0&&un.setValue(k,Ue.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&me.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,Cr=!0,os=!0)}if(Ut.needsLights&&(Ln.state.sunShadowMap.length>0&&me.setValue(k,"sunShadowMap",Ln.state.sunShadowMap,Gt),Ln.state.directionalShadowMap.length>0&&me.setValue(k,"directionalShadowMap",Ln.state.directionalShadowMap,Gt),Ln.state.spotShadowMap.length>0&&me.setValue(k,"spotShadowMap",Ln.state.spotShadowMap,Gt),Ln.state.pointShadowMap.length>0&&me.setValue(k,"pointShadowMap",Ln.state.pointShadowMap,Gt)),K.isSkinnedMesh){me.setOptional(k,K,"bindMatrix"),me.setOptional(k,K,"bindMatrixInverse");let Be=K.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),me.setValue(k,"boneTexture",Be.boneTexture,Gt))}K.isBatchedMesh&&(me.setOptional(k,K,"batchingTexture"),me.setValue(k,"batchingTexture",K._matricesTexture,Gt),me.setOptional(k,K,"batchingIdTexture"),me.setValue(k,"batchingIdTexture",K._indirectTexture,Gt),me.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&me.setValue(k,"batchingColorTexture",K._colorsTexture,Gt));let Ai=tt.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Y.update(K,tt,yn),(Cr||Ut.receiveShadow!==K.receiveShadow)&&(Ut.receiveShadow=K.receiveShadow,me.setValue(k,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(pn.envMapIntensity.value=B.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=RT()),Cr){if(me.setValue(k,"toneMappingExposure",b.toneMappingExposure),Ut.needsLights&&qo(pn,os),bt&&q.fog===!0&&gt.refreshFogUniforms(pn,bt),gt.refreshMaterialUniforms(pn,q,_t,wt,C.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.numLightProbeGrids>0){let Be=S,un=0;for(let er of C.state.lightProbeGridArray)er.texture!==null&&(Be.textures[un]=er.texture,Be.min[un]=er.boundingBox.min,Be.max[un]=er.boundingBox.max,Be.resolution[un]=er.resolution,un++);for(let er in Be)Be[er].length=un;pn.probesSH.value=Be.textures,pn.probesMin.value=Be.min,pn.probesMax.value=Be.max,pn.probesResolution.value=Be.resolution}Go.upload(k,sn(Ut),pn,Gt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Go.upload(k,sn(Ut),pn,Gt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(k,"center",K.center),me.setValue(k,"modelViewMatrix",K.modelViewMatrix),me.setValue(k,"normalMatrix",K.normalMatrix),me.setValue(k,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){let Be=q.uniformsGroups;for(let un=0,er=Be.length;un<er;un++){let pp=Be[un];ut.update(pp,yn),ut.bind(pp,yn)}}return yn}function qo(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function gl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,B,tt){let q=Dt.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Dt.get(A.texture).__webglTexture=B,Dt.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:tt,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let tt=Dt.get(A);tt.__webglFramebuffer=B,tt.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,tt=0){Z=A,G=B,O=tt;let q=null,K=!1,bt=!1;if(A){let St=Dt.get(A);if(St.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(k.FRAMEBUFFER,St.__webglFramebuffer),et.copy(A.viewport),xt.copy(A.scissor),yt=A.scissorTest,mt.viewport(et),mt.scissor(xt),mt.setScissorTest(yt),H=-1;return}else if(St.__webglFramebuffer===void 0)Gt.setupRenderTarget(A);else if(St.__hasExternalTextures)Gt.rebindTextures(A,Dt.get(A.texture).__webglTexture,Dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Jt=A.depthTexture;if(St.__boundDepthTexture!==Jt){if(Jt!==null&&Dt.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(A)}}let Ct=A.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(bt=!0);let Bt=Dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[B])?q=Bt[B][tt]:q=Bt[B],K=!0):A.samples>0&&Gt.useMultisampledRTT(A)===!1?q=Dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[tt]:q=Bt,et.copy(A.viewport),xt.copy(A.scissor),yt=A.scissorTest}else et.copy(At).multiplyScalar(_t).floor(),xt.copy(kt).multiplyScalar(_t).floor(),yt=Pt;if(tt!==0&&(q=U),mt.bindFramebuffer(k.FRAMEBUFFER,q)&&mt.drawBuffers(A,q),mt.viewport(et),mt.scissor(xt),mt.setScissorTest(yt),K){let St=Dt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,tt)}else if(bt){let St=B;for(let Ct=0;Ct<A.textures.length;Ct++){let Bt=Dt.get(A.textures[Ct]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ct,Bt.__webglTexture,tt,St)}}else if(A!==null&&tt!==0){let St=Dt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,St.__webglTexture,tt)}H=-1};function Ar(A){let B=Dt.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=Ht.textureFormatReadable(A.format),B.__typeReadable=Ht.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,tt,q,K,bt,Nt,St=0){if(!(A&&A.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ct=Ct[Nt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){mt.bindFramebuffer(k.FRAMEBUFFER,Ct);try{let Bt=A.textures[St],Jt=Bt.format,ae=Bt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let Ot=Ar(Bt);if(Ot.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&tt>=0&&tt<=A.height-K&&k.readPixels(B,tt,q,K,lt.convert(Jt),lt.convert(ae),bt)}finally{let Bt=Z!==null?Dt.get(Z).__webglFramebuffer:null;mt.bindFramebuffer(k.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,B,tt,q,K,bt,Nt,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ct=Ct[Nt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(B>=0&&B<=A.width-q&&tt>=0&&tt<=A.height-K){mt.bindFramebuffer(k.FRAMEBUFFER,Ct);let Bt=A.textures[St],Jt=Bt.format,ae=Bt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let Ot=Ar(Bt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,le),k.bufferData(k.PIXEL_PACK_BUFFER,bt.byteLength,k.STREAM_READ),k.readPixels(B,tt,q,K,lt.convert(Jt),lt.convert(ae),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Qe=Z!==null?Dt.get(Z).__webglFramebuffer:null;mt.bindFramebuffer(k.FRAMEBUFFER,Qe);let Pe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await t_(k,Pe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,le),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,bt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(le),k.deleteSync(Pe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,tt=0){let q=Math.pow(2,-tt),K=Math.floor(A.image.width*q),bt=Math.floor(A.image.height*q),Nt=B!==null?B.x:0,St=B!==null?B.y:0;Gt.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,tt,0,0,Nt,St,K,bt),mt.unbindTexture()},this.copyTextureToTexture=function(A,B,tt=null,q=null,K=0,bt=0){let Nt,St,Ct,Bt,Jt,ae,Ot,le,Qe,Pe=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(tt!==null)Nt=tt.max.x-tt.min.x,St=tt.max.y-tt.min.y,Ct=tt.isBox3?tt.max.z-tt.min.z:1,Bt=tt.min.x,Jt=tt.min.y,ae=tt.isBox3?tt.min.z:0;else{let me=Math.pow(2,-K);Nt=Math.floor(Pe.width*me),St=Math.floor(Pe.height*me),A.isDataArrayTexture?Ct=Pe.depth:A.isData3DTexture?Ct=Math.floor(Pe.depth*me):Ct=1,Bt=0,Jt=0,ae=0}q!==null?(Ot=q.x,le=q.y,Qe=q.z):(Ot=0,le=0,Qe=0);let Ae=lt.convert(B.format),vn=lt.convert(B.type),Ut;B.isData3DTexture?(Gt.setTexture3D(B,0),Ut=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Gt.setTexture2DArray(B,0),Ut=k.TEXTURE_2D_ARRAY):(Gt.setTexture2D(B,0),Ut=k.TEXTURE_2D),mt.activeTexture(k.TEXTURE0),mt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),mt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),mt.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Ln=mt.getParameter(k.UNPACK_ROW_LENGTH),ve=mt.getParameter(k.UNPACK_IMAGE_HEIGHT),ss=mt.getParameter(k.UNPACK_SKIP_PIXELS),yn=mt.getParameter(k.UNPACK_SKIP_ROWS),_l=mt.getParameter(k.UNPACK_SKIP_IMAGES);mt.pixelStorei(k.UNPACK_ROW_LENGTH,Pe.width),mt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pe.height),mt.pixelStorei(k.UNPACK_SKIP_PIXELS,Bt),mt.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),mt.pixelStorei(k.UNPACK_SKIP_IMAGES,ae);let Cr=A.isDataArrayTexture||A.isData3DTexture,os=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let me=Dt.get(A),pn=Dt.get(B),Ai=Dt.get(me.__renderTarget),Be=Dt.get(pn.__renderTarget);mt.bindFramebuffer(k.READ_FRAMEBUFFER,Ai.__webglFramebuffer),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let un=0;un<Ct;un++)Cr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.get(A).__webglTexture,K,ae+un),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.get(B).__webglTexture,bt,Qe+un)),k.blitFramebuffer(Bt,Jt,Bt+Nt,Jt+St,Ot,le,Ot+Nt,le+St,k.DEPTH_BUFFER_BIT,k.NEAREST);mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Dt.has(A)){let me=Dt.get(A),pn=Dt.get(B);mt.bindFramebuffer(k.READ_FRAMEBUFFER,D),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let Ai=0;Ai<Ct;Ai++)Cr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,me.__webglTexture,K,ae+Ai):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,me.__webglTexture,K),os?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,bt,Qe+Ai):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,bt),K!==0?k.blitFramebuffer(Bt,Jt,Bt+Nt,Jt+St,Ot,le,Ot+Nt,le+St,k.COLOR_BUFFER_BIT,k.NEAREST):os?k.copyTexSubImage3D(Ut,bt,Ot,le,Qe+Ai,Bt,Jt,Nt,St):k.copyTexSubImage2D(Ut,bt,Ot,le,Bt,Jt,Nt,St);mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else os?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ut,bt,Ot,le,Qe,Nt,St,Ct,Ae,vn,Pe.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,bt,Ot,le,Qe,Nt,St,Ct,Ae,Pe.data):k.texSubImage3D(Ut,bt,Ot,le,Qe,Nt,St,Ct,Ae,vn,Pe):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,bt,Ot,le,Nt,St,Ae,vn,Pe.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,bt,Ot,le,Pe.width,Pe.height,Ae,Pe.data):k.texSubImage2D(k.TEXTURE_2D,bt,Ot,le,Nt,St,Ae,vn,Pe);mt.pixelStorei(k.UNPACK_ROW_LENGTH,Ln),mt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ve),mt.pixelStorei(k.UNPACK_SKIP_PIXELS,ss),mt.pixelStorei(k.UNPACK_SKIP_ROWS,yn),mt.pixelStorei(k.UNPACK_SKIP_IMAGES,_l),bt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(Ut),mt.unbindTexture()},this.initRenderTarget=function(A){Dt.get(A).__webglFramebuffer===void 0&&Gt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Gt.setTextureCube(A,0):A.isData3DTexture?Gt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Gt.setTexture2DArray(A,0):Gt.setTexture2D(A,0),mt.unbindTexture()},this.resetState=function(){G=0,O=0,Z=null,mt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var gh={w:720,h:360,d:"7d37j9XlnQfwjyDZ4YdNOvuL+yNy6aYi1e3SlkFtGkuym3hY5ZaBOiVpYsBKwxKCdhsvaF3GUSucscXVINb5ZdulVGtNWWwrDsskAzuA0MGprSGL84sTMrLnT9h878/zfJ/r9/o83+/n3TqXc84cznzPaz7zeS7nOwAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGgyknJ7z/Tpzw3/CDxwhTbqYApryE78hEF2lRDrWe0Ased0yhikOnU7ph7Aa1OFYMJ04AQsbUgNg4VAE+kT/ET0Fyx7Y573SQi+2USdQMblDX5ROFhnN/9lDuFKkZfzLKK8zRJ8CKFUs+UUlqLcQdknAn/jj8IA/uThw0WFabAVOSEWC1mKFIy9tg2zb/HWzzPzAxR37U8Yl3CvlRQc3VtM1kxZ5KcZ9KT1yUVJRzYN4WJPTrv40v3GYmuswevNNB1YVMXChZg3wOo3zOOUvztoQ0BdgKypwiHX2GRLMW5LBXTmuufPRXQstMV2OLqrK2bUyGCQ1SqS8ZJG1z1SPA3K3zNrLzANPOuR7N4ScolKtWsIRHXcLegFeiq+wySNNFjAaJyuxEmcbIpt9S1yn8082H+PZVeD5REGbbAHdUHQca5ozrKL1Cl+zcs3o5uwLOUOSMcxWci2FY9mxHx1HLZN9Atcux7bijUBZ10Q8CZc/ibqO6GbfsiFOY6bS+m2bmjfnUU3rZS/Q3z5VUtJ2Yi8hRSjuaMVu+6SS/LhrUvQj7BnqKjhgPTuk3G5WIhhNgK+n8Fdkw2f8BiFflG1Hn9UQK9oZmqNDFibYWcy7NnfIxJ61QE8eB1afh7UZFPUaH3PjUluGfvMWQT9dxt88RVzFTeFWBBrs559LsF2cwwRz2znkamwZxZsd79EJKepaOGgWmFr+rAB18reWjQJ3JCmk7q12Xpc2HXkPiLGjuZiJiXZsquwTYCLmA81SW+gy5q7PFxVmzeneSX/qdvIGMHXZDqjN/eoMZ3YmWXdh7INe/q+mgARz13El7ltbagsJnS7ctDk7cyTXzpivSu+xAvsVOs5su4JWETk5r0ICA7oTLJc0Z/3XSoguedy87U1NT1Cf8cL6Kujj6VPISWPVDOdHJCLnTid5jrIo++X7oJ1Pmcopgrx2za1T9km5V72F0rg2qeQaAcgt08FIV/9VXWTZ2iJ9c6qk374EdgKqFWRx9vDLUoEItv0z8WpWp4oeE0Q9CeQlerlLAC69SDjpyz9CEypsDswZuah6DnY0DVYElpqN5ZZss2IL7E4smFqxtaZ5pxNuOeQlKdPYVOApDhzcAc7KT6GR9YWO/SdI7i3Q6ClGdZUeEQP5YpOek4x8Xs50d9mAOFdOej23T28MmekrZ4Zi033ANOO/Sggd75iG+jB4wTtFjv/ijZLSXGvpNMQ9C4zFnGQ4WHA9v8NZ7f+wYofmY8eidmuTodIRrcewctO3pmP5WqskzcwfMDEh4p52006kO5w7Cq6ibThU1xVFSpdnW2RaRjnIsCSiHdakSrPfUN/xlgHXW5+gr6XsIeQbEO+kvSv9EMHenrNMndEGX/cuTwsyAlpPOvl2j6S+Zqs0zU00z3JBqN0SPJEenUX43KPOsGuqhZtnkjiueU720xuPIKLr84sxyJkGLJt+yTmRFPwNNZVxkpZ6qNB1+aywabRoX6I4U88svU5+8nKN9lnEm6jM7T4GnwNDa3tSx3XPUKAv7Ym5zPsWf2+hkLMwv+4RfJpJnbiMdbsOBJ5LTbZuLaaIrLc6dKd5MCLfJEI8Ic/QYL6dSzFiQFY2cM8vmr6ToL6pU6Jlz8gLBEo580Zu/oqI8WC8DpDhnXUT5eyrhNUR9Ti8XOL4WUspu1DIWCavkzNvTIdivZLo8qHlOjbyYoyVBnmdqwk7nNSEYg19a1njm/M0J4J9gRld0vgXtHJaBhznkfEzEGWPumd1ZZLp/o4LSzN2zxzvxzBSfu7JAl55turUZRRdYoPsNU6Hl9B679AZVdv+SJujqNNOeRZoRtGYPrQLdb5tn8b7qKWo8yOyuVqUUzv+lxkyDBhCCRq2qTa6FbxWtwrPi5QIZT/9VkmdTzmLP2ETI53WKGQbyrq6Nc3oUCJlFV+o5EQ0Cz6gZZCc4NTr24qlnSF6RUpVnMPJseo7GBHW1nhX1GTsMcltGHs3ShRRqtaUi01k8T/EmQiRVupyzaizR8uyJ/k8CdNGb052fr0ia6Hwbt0WcebeE0kBD9vo8VeepH0UTz+L5unJea+E65+KW+XkvexW/stsv0SXUaXPO1AlobPQMjOfkRr+K0qoembe7W/B5Ls8QnoAD9E5SELXXha8NmnKmTkxqD+jkJATC2txGzupdc0XvjyW6DfVNy+g8TAt09gmPQprmJUuWLBGJDj7icv5VIhoxQ/7TWUs9RyNFjZkRsAt09RVawJkI7ZlEvX///jZ41sZcvGhifk7nxlBGhQaHKvSSKILrT54kQSec9+/fH7z1gsW5LM+mZ60LSnnFkx1TFoIWafY9Q6rh2E8FG+dSPGc4B2N/dBLHakAzf5TCjhZa7PnkSRo00Wj8MEjzPYOx505dmJMS3V/lhHQRk9hFDwj5oCPNJ4Gddf5hkv2fBGmtZiihOvsoc82HVLUKXsCcX3F5SdFxnDwJJxPU5FOYeP7kk+JBDw8Pd4Yd0Vy855yneu7XdZafdLErjbk1vxQ5Fnk+evRoOCSM8sAD8RNIay7O83AYKzh3cniu9fXAlewitYjzSy8FnJdIe+ijvmjvvwAzlcJBD1PpxCV6uE7S0Zn2dP/cS/5VwbySqyjPRqAByjf9UhjpoPBoEhbzAw888EkqBUmmUddaq4k/RFS65/6iSnP41qoCXRVocg6aAP3d7373KJ0HNEB3igddbvcxEUTDdaeS+lwg6NI9T9nqmQC9JNacwXOnRM6lgJ4govbckXuutybzKnSpXQfYVaBf4nM28cypzkuXLi3Nc82glX/+M8uUnPNjQqvKM7vkTXE+elRZnz9Z6ifUvDRMWZx1Qe/atat4z4qTndp6brMqTjRjYL+ebRx/8ZL2nAa9lBdNutkK9LAWZz+mnKWgQenZTs0VzHPol+bKPJO1eWxszPf8F1bze++9pwdaSpozdTGsX6D9W3N+GHZxPO8y5SwDrfBs64kn6xYM5JmSquK8hHrp4NhYKJrF7OeB9zQ4C00PG7DV7zwYv7tI0BzYu7J77rhUnBPRdbiGFOEql71pzYHof+V5fo+s0ktVydQkG4LeRYf9nC3V4QUTHM2ZPdudOkSzG/CA/JO0lVsOc5QP+p4was4s6OGC0+Hj3SUiTXw2IYzEs6t/aMA31J8xeU4SzW19qrHM8cyQfu+9Tz9NNN9zzz11c56YmNiVMROyiDZyuHt29n7I7plE3W846cHv5KuvzBzOn4YJKP/ES6R2/fe/XwPowF4ZnkPQExk2JtnqOXmReN7k5lzNuFDb80+SrI/zfa7ozNPMBp4zk56QqA57a2YhxeU/ntFfZFSg+6M6zl+3rKqBTnO+08unVLicPc8c0FAq6ImcoA3aDvtnMSr1rACd3EJw3q+6PN8Z5oUXXngh5PwNLmceaNE5k4aHg3+tGMplgk6dRwZBK0QD43kqXtGp55tmOI/deecLPmY/3/Dy/vtczkEHDUBgFnmO/q0COU8U3kBTnm1fM6mBs6xEM1cH+/xs8Dw29gIRCDj7uffee+9lPFOIxZyTf6ve8pyBsytLgtV4TotOinN4LZB/PcgyzwDwPpGU5/VL1wOlWLs49/X19Zlpzl2fNSxzOI+MuIq5Cs+cc6FCrZYV9dm//v33PwqSLtDrU4u/Wpz7omTuNYxUT+iFv0U0Ad3BfoPxnD4TqgWnyx3jeAYQeaZFC/Y1cD0Pczz35fesQdrYM8XZBz2C/XMaNEdztbtDNSfsgssT0JHowPPly5cvr1+/3nt3GbKB7jMFnc/zLkPPwHgeGUHO7JIh7zTVNeXrdGjHkeaoQkeiP/rokUfuvffZCPRlCWcAeOMNacPRl04ezxOFlOcJ7l9VG3EYdIWewR7PHumvJ2U55ky2HADw0SOPPPLss8+SnC9L/pE3vIimN/rkoJ95xvsvjpKznLQBZ7ZHdhlzee0z/0+8WAXaD9WDJBU6vvCRzz9/9tkf/MDAc0Sa8Lx8eeh5+fLly/men0lleEI/xo79fPvb3+Z8EyOpGY62g54S/82i2nK/Fx3PTM8Bn3/+Ay8h5hUrVsS3X+GH5/mNa9cI0MsBPNCBZtpzBLovpXnCPGaYPc08zuCu5PIaDstqcwRapplqOwjQgecjXi4fOZIQXpGEBO5r9kFfu0bc43IiKc/eB8/05eVsjJnP2XnR7fEs10x2GYTozz//3Md8BI74YlnMbD777LPProUhC/RyIem+vr5V/kdlWwagNAs8j4yMIGfbNfPKc7oqMyXaGx9CwBm8/+SQCc+fUZ6Xc0I1HatWrYrqc5k1GULPUs3x5DOCdsxzOEoUePYtezkSlGcAPc6BaLo+gxz0qkraDAg5A0g1o2cV5X6whPP9itaZ9Rx9eiQBfUSD86FD1659ds17K/O8nCjOQZ5ZtapkzjARPp5Ge4ayPZfN+f5s0xuqL0l0J/VZq0IfCkKOB5dLRK9KUipmIk1uN0oGXcmpy7L0G0rORLU+Avr9c+z50CHG8yGBaE/yjRulkk5zXrNmDTRxOFi66Gq6jfs1POtyphdUPM1JfT6S1XNwCU/0qgo8B4NB4ntas0YAeqQJnps9FOR4Ftzoi7ypOwDCs6JC33HwIAk6Jk1cQmq+ceNGX9+qG6tu3PA931h1o+y5OhXokRGsz26AhmjNG4DkPD8/P++/mZ//opdU88wmWkIJ36+AFXesuOOOFSvu8HLQzyEG9CEqpGYiq24M+pkoe1AYa2Y9O75xo4WeKcmh4iQEZ0XiRRX/3R1xDh5Mg+aE63kwykQVo0LK8wjFuQme2wL6YbFmuj4b5I60Z5XoFGbS82AVkxyc+jyCoF0rz/Dwww8HpufnTT1HS95Efvc72rMu5xu8JJ4H/2+09CkO0vMIGff3I5UM2jLOQYScTQr0738PAs+HzD0TnEdHR0ufgl7DDgEDyg2xXJpoy77DhyWgM3Yb8NRTBZbn0TgVrKr4lTh03JQ2o1TS1moWes4g+qmU5gyeidJcoWcYiUg3p80oEbS9mgv0/NSLvubnDh7UBm2B5zVUqwHNTWM43y/lLGmgH/dCf23qAiIvep6fe47xfNDMM9U7l+Z5It1uNLTNILLbT8OrM9/zfMyZIv04R3iSHz8X5qC+aNlgcLA8ztyOo+GcI9AE6Wy8neqdE8+PizwLTL8YeF7nRxc0g/nGYLo+V7PRrvnl2fdMss5Yr13kPD9PcE74Jhe848W/LProxy++GGtmQOu20IODg4MV9RsT0MYEoHfvziW6CZ5D0oxnOr7nBPQ604ZjUMC5qhmO1nrerdoT2k8NJ8FW0POyPC7NOzzPz9GetUDf0PI8OjrxULGa2+lZUqAZ1T5j2m/814Ws5DyvyOPmoGnNiegf/ehHkNpaZ1KeR0cf8oIFupghIQ80W6aTST56076N2zbUmI0LtNdFwzqWcwA65Mz3fGiQHw5nMehR9GxWoXfzo9Mj139yr2yczRsOWCeKDLQO58gzV3TGBrulmj3LoACtXJWp+Zv4OttslOAZ3nlnnSQgqdCHlJy5ov+UaPZyMR/nkdaA5k7akZ7Vi4xODQQz1mfvH8gImrHM0UyTfuih0dE/eSGuvHgRq7P+moqwQqu12gM65vy9UvoNLdCg9DwqDe35T4nmi2agoc1RgAY1aGs8f8/Pnho8E6DhEO3awPNo5HmULs5mnqGt3UYMGiSg3fAclubA854984XP14FegU7VaXXvzMnV0RTni9g8mwwLhWPCALsctC2e9xApfP5ZARrgn+MHszUBPZjN89WrBXpuYccBYtHKr7aG8/f27NEXbb6eoirQsedbtyZ1enAQBoMPjUQTno05o+fdMtB6d/G/lnneu3fv3mo9rws933or4ZmMvuerYbJ3z1/+MoIWgAYHQIfNM+NZIXre0LMS9K2xZxHo0VHxfB0HdBbPyFnRcjjw4KOhYMpzZtBCz1LRtwbZ6oX3OEd1w2rWJx1ybr1n2A180OCO5z1pz1LRQ0NDPt6zZwvyvI7wzBVt5PmqN80h8HyztHNGz8wCi6bnP0Spt+1IdxuE570SzV4eHzrrRcezBmiP9NatYtC6pq9evQqe6IsXeaBv9iMeBiJnMWgp58S0ZeWZ8CwQPRTn7Nm06HckoNepIgEdaAWtAg1Ae/bRPn1zFNmcBnrOVqDhD0mdrnswyMzWyUEPDaU8U6K/KoiRZ2F11vDs3/jqxYtsgX6aBxrRZi/QAuQ1it7Dzd69YtFDdM6mRRfhWdxuyD0nt73I5mkKtH8bhzH311Kfd/OuBetBSzwPCT3HomWeIQ9ngFFVEw1i0E+HiTUDYHEuwLNkcGgL6L17BaKH0jmbEi31DDqeYavsEetxZkCvXMnx7HIq2Skhn4Hmev5b8pPDhw/Du+9aVp8T0SrOnuivigMq0YrqrOCcuiWpmfIclecJbDhygNYZIx4+fPhdLzZ6HhrS8Hw2s+etWxWTdSrQYs8rVyagk+YZB4O5pjj0FllCz/WC3svJ0FB5nhcuXLhQV7PQM+eWFOekQAN6ztdEEx//mfMFzz///PNRdT58+F14F7z/wxe+8IVmeea30AvD6HIGbc4RaMKz/1bePm/YsGEDIla1Hbt3737ttdde+/Ofze7or5voGXicF2pqFngGDc8Ra/l4EDnrgX7N92zdI9VsoIvw/NZbb0WgA8Ik5wA0ZPMsuindcKzUAo31WZO0lZ73VOf5rZRnOlt1H7ORZ7gINOhgUIieM4sGAnQ2z2NjpT3Gb3nJ7vlsNs/A4az/mDUxB+U5eGcAGjlLSUeyXwsCPw1jyQP8Fhe0ruezBp7feisBnYsz6HJOWLMNx9PiNRXkrOc64PzTn9bt+X84nD3Qe8UZGhrKX50Vno2+BzPOACtTnsWg0bMeaNbzd+ypzn74lC9dGhoqhnPoOSSd3XIWzxcNPAOgZ534nH8dYfZiF2i+5ksy0Gaej4fxQefiTIE283zhwoULTz994cIFWcOBpDXzay8BZjs4e6B/JvJ86RLt+cEHc809HydAL4QcmDN4vkhwDiLuN4L/YdehKRqyeP6nsh7PzzzNP+OBvhQn0vygB/rB6GPvTZbyHILObjljw+F30ZTnm8X1GSu0fr5jU30WNtCXLjGgH+TkfDbPAehcj1uD82hGz0g5G2jBtWfOVPpg/t3Lq148xa9yPV8a+pjL2QQ0yfn4b3/725wP26w8ew2H/16Hs+95wwbAjsMMtBWcQ9GvRuFpvnTp0scfZ/e8OsX5eIrz2uyg9epz6BkIzrIlQqzTxqD5mH3OixYtWlQh51fJcDx/7IXP+bxGB831fFfyAO5au3atuWcwrM9Aer5Z5TkYEiJU3XzwwQcf8DCfObMoDH3d35X6aASeX/fzpS99LAJ9nvV87hyH8+oU5+PH77rLA31XkPI9x+UZdDQHcxwYM858z4sWwaIkca2uzvOrp/aeOnXqVOL59S8J6/N5BvS5cz5oX3DCefXq1SnPx+8iksuz3o1XEh9LMW+gJjkwuqAhDTryTILmV+syRH/zm98MPcd5nSzQGt3Gudjz6rg0+5xXHy/Bc3g2DviaqWfQWBrEJZUMNXqL/37Lli1bCM58z2WD9jiHoE+xoH3PD6rbjXOh59XpHJeCzsY5Ol3S13RAr1y5kvSs4hx+hKSNQG8J4pGOuuekf664QCs8i7qN8zRmz/NqPc+J6LXZPXvvdDyvpDyDmnPYcyBos4SlecuWM2cUnhcteqV8z088QXGWez5/ngR9Lome5ph0Vs4e6MBzcaApy7ivPytoHc+vvFI+aM8zv3+Wej7HxAD08eNrs3sO8jXNhsNQM6DnTKCJqTop6FfKB/2El1P88aDI8zleDEDn5ux5Lgj0Pqrx8E0j0Gw5Q4fPuWTQT+h7Pn8+Ks/n8oHOz1nXMyg7jn37sHsuybMH+gzHc7mggQH9ejwB7V+bajWEnLVBry3Gs9bt9u2Tg96HnsvznCrSoedX/sFPNaADzcm1ac5Cz+e0PK8twrN29rFi01fvk013YHJ5ZvqNaYLz2FhZL/gmPQOtOQGt9DyeBn3gQD2cu91uVwg2xVkuHlOc5+nphLPvuawzGHieRdelOCeex8fH4w/8sJwP8DGXXp27sWiZ1z+i5mo8T0ecfdCk57HaHiwHdIg41sygPuAnlHyA1Fx+txGDlojd98d9+7rdLnKuAHScxLMPenq6pof6Ngg9p7J62bLVy5YtO3AgEX3gwIG1FXJmQScX070G0ZhgyhwPEpzJAj1dm2e6Qp87d/r06dMiz+PLghygUilnBrSodUbPJXPmen7FOs/ntTwvq41zlwDN8xw2zt0ugi6XMws68jw9PT02PeZfVKfnN998M/As5Sz3XNnjFYPep/RsJfJ/c4/z9DTTQHucp+nU1UG//fbbb7755uk42TxX+Ii7iWgSM1Oeu65wtju/4Vj2Qg8Hp6dZzbV7jkkrOXM8V4g5Bt1lkBOUieu7pGRsQkw1exGIVqSuh/xmHIVnLucDVRdnTybfMxvqUkDPmT3/5sxvjDVPT8N0zZ5Pa3pOT29U/phDo12ZZ2faZ0vgijl72Whcneuq0fnK84E6OPMqNL888z0j67RcUHjeaFyg/Ro9XRvnCLSxZ7DCM0g8d5Ob0FMkCFuj2wg9J6JNOFdepFnP4tHgfbeHYUBXj5nQKwQd9cu8zgPnp009b8ziGWoZG9KehZzvu+++GDQlup5DnbDtcj3TdZiqxF1ip54PHuHqed545sxGs36jPs+nFdWZ9nx7zZy7vALNK8/COtzFUq0veiOVDJ4rNU0upog9f3jfh7eTqbM4M3xDnVzPIJroCBvoOJsRr8DzxkI4V6haY65ufPzDDz/kgLbBM30h0O0G0T936UajG9029LyZI7rlyDduTHPO6bkS0Tpr3SznADRYAJpzBXSBMx7sku+7zPhxsx+syJRnTnme3jjtDuhxSVjOHuh6D3dX2fx2uwCSW6Q9M6I3t7pCe3xpztOFpArQ18fHx6Wcx29Pp/YjruVZr2vZzAPd8oLNthrTxaXkR359XBme59ttAK3wrCl6Mwf05tb3z6V5Lhn0eDbPNqSb9avoKbvNNGiS9mb07JpnuB7GyLMloDNOINMLMZs3p0TjNAeUxrkqz9edK9Dk5tCMhZ31jPN2XNAueaYLNJ+1pfUZVLtEtb5e6hkA7m6952knPV8PPPMqta2e6QVwoemuoOWm558FoO9uK2lX63MCWth5LLDXM1OoTTrsYMG8mzgWgMYCvbFJnhd4sdxzUn/J/RnBZbfddtttsi8h5zMkC4V3txm005yvpzmnRDvzpNzWvU19oxhx2HkgaE6B3ujIEqGm5wWPPvqoO57JjUkmEY8KW9h18CehZ2Zm7F7yloNeQIB2r0BnmPbA3UkyzzMzeTxX8rAzed7ZVM6S3N1y0BtnwtjtmQP6+vUF4wsknnfu3OnkEzQLs7xLZ7EWVwIaavS8gON5JxH/K//bLc2zfLzo2dTzjGucr4eGPdDjYs9kHnOjPochCvUsetYFPUPEpW4j9hyIjuY3XPc8S4S+GOUaezYVXV91XkBF2/Nj7nIuzfM/Ngv0DBsHPRPzz4+KPT/2mFueZ6vxDOjZUs87d9KgHfIceqU5z6JnY88z9nu+ruU5NCwG/Zi9nuNyLGg3gHMRhi+6IZ53cjynOVsKOqrHs7OS/tkM9F+1FPRMngJtjeebblJ5DjU/Zi/ndPJ4bm2JboLnm7xEntOcH0tio2ah58RvJs+CEv3LZouemcleouvzfJ3VHJN+NF2dbeYs0xwLni3Oc1M1R6JnrPe8Y8eOHTLQN9GeRa2GnZ5nlaFvVfsD/g+7QU/OzOQQXZlnIpFn72OG8038iTq3PQvHiFnyyyaXZw/05GQOzxU9yB3pXLly5Yr35iY6zfeMI0JpJl3wDFzOQbieQeTZfc7oWeV50vJ2w9hz+uub5BlBGxXoTUGsKs9p0FcEoAV7+G31PJspiNbc8ya7/o6KxDMlWuE5fc2/uIYZRRt53mSnZ9Dz7Eq7MZs3ivv/efym7Q20gWewxfMVhWfRcHDMWc7KAt1Oyw55BpnnSLRgF79l5Xm2iChB/7zdnufm5ua8N5s26Yqu+oFKNF+5MjAgnHy2zfNsJZ7b3G5MBpyDbNqkRxos8jwQxAXPs8UFx34iz5OTc3zQllBWeB7Q9Nyg8oyepZ7n5vig7dEs8TzgkudZLNDle55jIxRd4yNVex5omWcEzfc8NycGbQ1nkeeBAdYzCCbsoHGe+WcGQ8/ccDzX+1ATzwN8zgPCM9Y1aSkFPWfyHNbnOWs4pzwPDAywnh044LPYcdTqec5GzwNsZfbyla/Yf0LRWfRcw3CQz9mu+jzgpOeCOaNns/I8Z5NnIOozN18ZGMB+Az3PSWLRcFDt2QXOWKDL9qzNuXbPsGPHgPOesUDXV54t4wwwMMDl/OST7nBGz7WVZ+s4e6A5efLJALQjBx091+PZQs7QAM7ouR7P04sJzLZ4FoAeaKtnJMx4FnJevHjxYsuKs7DhcIozeq7Ncywa7Aft0FFHz7V5XmwbZ3CfMyh9oufSPPuiwXrQ0ATP5jUcBWuPBxcnoK3n7NhR14KJnAv1THC23jO47llyK0DORpzVnm170I5j1uUc/ok2LM/FeAZrPYOrjlOe1TcELM8Ftc9zAGClZg+068ddk+Os/AUA6Fe/PAegMY7MhiizfTt6xlhgWQja8J5aAHpSsVsUOdlcoY3vZXsbPMs28yNom0Fn8Ly98ZwnkXN7PG9vt2dkZDPoDHfig24u6kkcDjonGnJM1G0P00bP6Kd5aThnwWoKPu+N5ty+6Q185psMutmekXPLQGN5xlg1KkTP+p6Ri/2eMy92N73bAJgE9OwqaBwK8jhPYrfhJmgcCep4BkDPTfTcDs48zxgXQBemeXvTSCPnpmf79lY0z+i5TZpbgTk1YYdPP3J2ujqTnvHJx17DfdDIGctzUzCj53aAblG3MYnNM6aR7TOKxjjuGafrMFieMRgXPOMRwbjuGTmL8wv4BR4E5IzB1D8axOOBaVD/jEcD04QCjZ4xTWyh09fdcsstt+ARwjhWn4PAZNozHiCMk6R91ngsMI3oOAA9Y5rEeTLcBo1HA9OMniN8GWGeO/kbPI4Ym7roaN5uDkFjmkEajwIGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDcTg96PV6eBgw7kNGyZhGYe75H2AwbmPuhZgxmEZ4RsyYRnFGz5jmtM1ew9GOH9uSf3Y5/4TuvxnfDmtLXs1t+EYJzsV8wz2N0DcT3IHs3ky/SRwFtqMa5LWiT1hNO8MdYenVf4Za5zgTmV6dwQE7zmxA9jpqE2Us0hmmNnrO91/Ms10gmp51gR6u5IqqcnKMGvBjWVCba7dmLNvpIXA8MeTIUdGe7OpBLx9C5zRjJ0L8hrbnkLAdTy99eU/UYZTAouda2j6fka7QtQiWF0RIP2f0gkNZLnruBVpsu0csRVUtOp5/tXgKoed82iVZANreObRqFfQaElfrbIYF/3iGvuIDYDuAHmq2asTfM5xHru4QOCClOZYd9MzuDKBHeLRqsjEE0W/VMvd1OTekQskFTVjpPh7t409tYaz2OPQc84yay1y5o6cDyi965fZE6KzJmkXTVbynnrc9oXgl0PJeoxGUe3V2vVl/+MqYK23tjAYW5gY+p4gYRetv+mrTEUBUTfVMrHJY+A1jSUbQ+psimM02jf8JRklWPb+9cp5UaMfPMSqy7Zlt8vMLBSCW/CSgINtA9/Kt8lq67ZEzw6deulFpxuJst+T8v3iFz7T17UVPsu4o/VY4Ezhou1ktpPgOHfi2VYdC78D1oIdFu6lTdRY/q8pNQ/LvAAeGbdVs6zMs2D9CbDPV6psRcRtIt+RAoJ5WleiGHwu00zbTrh4Gxdwjasamw82DgTLaw1r2dU04DsihjYUaDxmm4dUag3HWdqUTJhgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBGOb/AQ=="},zs={w:880,h:390,lon0:-26,lon1:62,lat0:23,lat1:62,d:"7d09bxTJugfwCv0l7j1jyyYFIkdsYFk3GmNn+EgkZMNqA5YEuJZYaZGMZGAmILSMRHiQCBwdvCvnmxKQgHRlRxucgc9wNdM9M/1SVV3v9VT1/6+zXnuYFy/Tv/NUPVXdwxhikn86yW2DKP6CH7xliJgn9eP+3zGxWevz6I1BG7yhuIXzxsAN3gDOEpzObwlt8OZ6OPnv1MX9E9zgDfO3YNw0xUX0BizwRqu6Mf/gonkDFXij4o3ZeUuhvkEKvMXTVopb2LMcZpL3BibwRkMc4YYJtMEb1gPCrQdAG7zBm/WCd1hvAAJvrjJIbvUtuDf4gLf42kpwLAq4gN6K4wNG4M3W2sDWW9w9lKyb3YcPjH3QNVe7/+LQgBF4cwHOoTYrfrfNolbjlMscK/7hPAeMwJu9t4GdNlZf7A7PrS3uX//6Fw/chw9K6CT/tUACb5bYLL2xf1ZOgbOcyd22SZUbH9y8xjEzaCAHbyS6JS6Xvd1w42n7wD6sWic8c/r/wfACb3G8VapbNG68aRy3xhW0bLEBHLxFXfF20KS8fds1uI6eJbNxBnLwli63224SQBuMwVtsb/bLcGG5GSmDNHij4c1IGnPOzet/JHTAG6UBpZU3Oto+rgJw8Ebcm4Y8xmJ1SmTGOFncCTzgjZQ3vTrHHIJjzILcR8WAB7wZr7cNXHPTHlbWHxCpwH38CG3w1od5XP0hcbh9BDd4813bBoO43FblsMjt2x42lsiVwRu8hQQ38IRNiVzzcdbejCqanjfIgDdTbVGHkpwHhh5GGngDDHiza5dk4s2wR6I5gYMLeEuyV8J9XKSV7Zk61Dd48zB+HCxPKx0MPLZLjLSZFzjL1Tb2UX1ACRjwpjZDG3ASp8SJHxXOW3vfCLzBm8vuY1BuMnGyB8VY3q7d0uUOMOBNqG0QT5tQnfzuwde3dVe+AQPeBNjk3EJ1TpiGtpD1jbGPRjtNIAPeRODE3iI0K9XuHc6bGTd4gzcBOG7JC61NP+68SSV+FA40f1sG4ODNZO9IxOoWwJvoSYxe/bdGAA7eDGdz/fFmMcz87Te5OMCAN+EyQPkNj9uAEMJPn6zE8bmp0dIFBxfwJhpLrhANlBLJ2iwuvak0UVaYFLzNxC3gwQW8dXUoBwO63j7xvDHf3mqYFLxVAhjw1pTWXPEmz+2T1RxOe/bWNKTjDeLgTeBttexNndvc2ydDb8UDLLjVwf0GcPBm6G0xm6PH7dOnFbZ2edMC1+A2f6xmC1JHG7zBW5c+Ut4+tWO1KtDk1vmZwjxD6trADd40l9/ic6uzs1uGa3vT56YT0IA3W3AR+v9d3pgyN62V7d+suUEcvNkVt5CTtwJY1/RNAxy7HdYbKhy8yfomCi3KeH1JqTclcaHLG8DBm7S6lftNiHArq5szcCxCeQM4eJMNJ2XDyriFrQOdWq9Ea18yvMFbAG8DQuWNhLdnlcx+qmJ6Vv8R4ODNZdeEgDfG41a0QvSWutW8PesOvMGbZZWj0ClRrWyS8qa8zibw9kw58AZvZm3KklvtSq9xtkyqcStv93E95Wd64WL7VgRG4I1X21ZXVhYOLGN7W5n7VF0T93Dx8mfPbMV9awRU4K06bROf5x1BnKC4far8efUcVOcfFaDvrSnu2zeAgzfBSHIJTWGvSaT6Jl6ea4KL5e2ZCNrSG+jBWwWa4omn8cqbeNcJiQL37Nmzb6oBHPQnV92RATFxrHYFkzbE28l5gzh4K+ZwNLw1Twyo+WrVPefcnjHf3OCtb97evOENKhW4BWqacL0JCpz7oLzBm0ts7M0s2rtMYoETeRM/1vLFh0NM4ODNTV2bS5t/4RGiciLcJ66xeo9S+mBjaoW3oQE5FDh443KbeRMQonLmabuGfdIQZe5tyJbelnE9eQO4vnh7swyf0EDpqubef82zeoGbDymX48RGv9JdKm/pUBPcN3CDN5k3kSGFjxAIAG7m7WyWqqrS3aqFwnxw48exNnDrg7c3b8TcVuBUuif+C9xZ4a0MZ6Bp+swHlShzGzrmBnC9qG8ybQJEEadwInCNmdwSqJ61ObeDSOUN4vrUn9QwFLVrIvQmuKuOtVZ9G8IbvIXUNtBfjAtY4M4Elaz8qYvbwYHcW8fb7IEbwPVlPLnkIlwTYP+ID+6Mk7KT0r5XV307sI97bwCXnbdlf6RY366Da8zkqtz+QaLEnQnMce7AvFqTkPv2zVwc+GRX394IUnJbgWMibotLLUQQJ+fW+oMzf9JE4GZqLAocxOU3nnyjkM4nITOklJa+KscDL3EzjgS5bMeTbrjR8SYPK8QdeItrbPCmluMySfRLvJY3b+DK7ogmOOaV28E39wEmDW/H/RhPRmiZnBnGr7hvngJRuXh749sbcwauZqY+SNTJwUFaBQ7g1Lkd56CtE1yYs3POzIml7w3g1ND1wpsvcA+cjCCDevMHDuJUKlwe48k3HF+1BThPJ6A+WMWdtzN4g7fY5phefev8sFMrbw+a2Ir0usCBlJK4xLZOKo8nB3pxwa2H3mbHEbTpoMsBm6jA+eL2gM/tQRLcXIKDnwz3c6nN4ay5acF7wE0a3OAt4nrAMJP61tSmaa52ZzNsyZS3A8za4i2/Hec5mjSZwimL8+ztLCVvAKfHLQVv9XPfonvzzS2pBQFgys+baX1jAb2duU06iwHQlJu3N8G5DaL1Sjx7w7Ib5m/eqpsnbw8CjCfP0lnpbh5aG9CV7n7lrmmbDNwgMLcH9Aucz30lG/WAWIL1zXyX8sAq8bmdpbOZi8sN4ATTt+NUR5PmJwN44XbWv4ZJxdYGJ3DWspbCeFJXm0dskuLWvwblRmeA7ZiT5Lgx+clug9DV7ezMeXHzuQAn4eKWG8BxxSXXnrQ7s9Rq13KIgWQYb1InjrgBHE8ceW01cioPEX30IvOzjystcEpcnHhLhwP/B0/g0ll/M3ksf0Oy4VAyiwK3oZpvFX0tg7lUt8Wu/eb3/d6vbBPpp5zqjCZLXl8X//MM7iw6OF7RW3yTibdjWfy8FutHrGZxX5e8vi7i39sZMW81eVlM34674uP1wK3DW8FrTuxrPX650fW2kUW35FghHl4SxqTevsqToLdw4CjDO1YN6ptXbtVneP/+69dOb8lxA7hjrcifqfaUPfZmWdvel4ni7eLiYubt4uIC4KJzmzPiWKp5VMSZrzet65W0Ktv792re/EzfLubeZl8vUOEIcCvBHSs9CbwZfETH+/dVcXJ17q3VkwW3jZS1Lbw1Fsa7wXEf0QNttVsX36p666xyPrEtzV2gvkXTNmNzzFkY7zR3nNp+ZSfcDJ7gfQRwFx2Bt2jaKt50uizHPfE2cO9NTi41bRHGkxtpe3OYXLUtvmWOvHkDd6GUAooLeRsxszz2AxmsTajgzRO3yo/MmTchOhtritqW4qzL3Ub0VK69EKiiwZvX2mb9NFrcngYobsuuSQbcgo4yj+mBy66++dO2AFdh9/Tp07Ng4KzncxvkMvR7BT2VhiG8xcz7jnytl7mn1uBMxRmY26CYcnjpuUECb+lR4wwrnz59GqvC6ZvboB3P7Ugaszd408ZWI/fUWtxFKG8bCSS77j+8lbIsuS3F2Re4izDiNhIJvGUJzppbAS76gLL0dicXbs7QHcNb5Py3rMCZkSsTzdudWQ4Oiq/wBm/k52rW1mKKu1NLUehWAu9UGcIbvEXIfzny5dabmbg7d1re7rTTV29UxaEZ6dLc+3Di7qgmPW9DeIM336XOm7c7d+5sbBz0TRu89cSbhbk6qOvr62sn2mbeescN8zd40wN3vUgdmja2tLhl3i457oetsODM+ybXbW2luOLrHZNsYPIGb6Fr2Op2sjO4mbdrHreVO3hLnNsxBoxkuF2fXXdEi9nbNAeTG/AGbiG8XXdHRVklFt5++QXTN3hLAd0ZHW9vi580oS2DESW80S9xvqwpeXvLjfqhvrf3yy/xxWH9DeB8crtWjgyaSJuyuL0i0cVlveANbCl5u1YtaTxxe3sq3BrgwqMbwhvIkRhOXl9fL7ogutzevl1y2pNZE4D7Bd7gjSS4M6/gKn1HPW97nPCo8b2FqHFD99dUgLfs3a0I3fJR394aZU8UrjY+uKSvRAlvuZqrILo1Tye0s2s1cW9Ns6ef4N568dEBvdqvHMjbLU7OClLikqZY4IJx44hLGRspcDgvwB01Prdbt0pUZ4t/a3Uko3AL2qMc9gkcuPksbRVv12bKLIeTe3uuwP2SNLchrvcayRyLxM0ygbmFBseGQ8b6AA5nmvrmdut/k/QWbEg5l1a8Pfi8RYiz5iaucCcnnsHt2UUNHDOF1n5zogwp568Mbylxu9WZmZhbK2dlCFc3Hji3dS2sNYG31esH0gdvIbgVKYGdVKLG7aefSHgTiGP2pS1Oz6R1dBw39cEbRXDq3lpR5PZTFG4K4Ji2N8Y2WAxu8w+BUz7y4Y0suFu3LLx1mftpkSjcOr0xHW/892NIpLYFAscALlRxE3njuvupmRjcJN4Wf5urb0y0DUNG55hHfaMqrtOZtLbVUsDiabucJaK3+QVNauIqf53mtS0wuKH6EQ9vVMXNtnG12J2c1L89UQD3kzCXi4TmtidskzANb7wZWyxxQ8UDBN6okuN5m/FpzNnMvV1e6nrb23PEbU/YJqlg6xIn5xZYHIO3tL3d4g0rT5bgTnTSoU0mbmdn5+3OjlNr1elb5/CwvjYwHFbvudH1VtDjBm/k+5ScPqQDbi1wlyJuRfacRtiVVPOjct+A2nSODnhzrM3TukANmaa3EyVvl0Jr7sGZcasS2khwLOl1gwnqm6PwADnwdsnL0trl5eVOM8696XKrHeQbCRY37OeiX+BOLMNOThhTwtbIzo4/cW1u+oPDDQrcNA8OeEuzvmlwK1KWuEsNcD697dW5GU7FonIzOTRwfkAK4qyxrerb5aV6fbv0XN80qpvuMR+I2zCYtzV4k2ijAK76G11eXtaExfe2pzN1Uykyw9DgTKqbkbi1MvAmrm7xp3D1X+nSLD5HlLULMHd4k/ip2Jp/S200ecwsTkBdqwfeQkzfHHoTy/sSYw63t7oorIvFNIpdSfPp2Bov8BbAm+XUbeWNXda5ffnypfhapsVuR5A951H7q+0QkM3urTVx4I1qs6QFjhXeWNXbl6q3WiTe9mJ5Y5KiFnQdoGuWZs5trTPwRr05WYKbfalN5r5IE8QbYzrcmMqBn/Jgck0p8OZ3/ubCGysmb1VvX1RC2lusxYDuNqRXb3xyWH2L6o37q+nUNyE3l+I0/2rVDvl0d0uurZmLAzc6/RK+t0tjbyU5a3mm3Gx7K1T3S66tmYuDN3reSnTK4HY6E7S+aR3yEbkZX3Fybc1cHLgR9aYOjhi3eicyEji/27bWzMXBmy9v89ex8KYMbsczOP/vRhxy4bxVxMGbH3CrlzIvcMpTOK/gwrwhKdU4eKPgbU7uPY9RfHCfP39W5dW+Z7LgfIlbswAHbz7KXOv1fIP70sVNBdznZSJ48yGOkLc1XH8yIDcxuf8Ri6vvpLQob0rcPrcSmFskcKG8rcGbJ26C1zRcFlASp+Lts4zdZ15Ce3Mvzk+BW1szFwdvLiN90RNbcVbehPVLyK28D0sYHPNS4dYswCWIZbsMOW4dr2q6NGAN7rNVWMLgiHlbS9DbtjQ+vXU8rvNVjRe/u8Dt7Ozs+AMX+g0eDofv3oXd1hXM21pu3qroqj9tu+AmfazCr26z+L1k19L28887PsGFf4eH7xbJz9taftrkDre3nYwVDbTZgStPReV68yYu1rv87p0rcvAWh1ojLmZm+tzYiWWFm4FrY2uCe+EKXMQ3+50jcvBGQJuut655oPJ/xIllgbtsivt5lRW3F47AxX3D3/FD4QNx4E2X27bDtqNGTuwLXB3cz7UsvfHEfU7Mm9Ccp9Pg4M1jfdMqcrZLfa5aJourCTG+tlLcixdccJ9T9Mbsa5wPcL2Yv23HEsdcemP29a1S4TjgXixj3Z5kZMHpkNN6OXjzC66qTijQjbeFJQcDytk/PG8vasnCmz057deDN8/euoqeFbb24x0UOFaK+1kKbmkuZW3yQWXxnVxfKG+b8+S0/hbG23/+8x833oSPdwOOXVapfed5S3vy1lXgVMtdUG+b8KbtrVbkto3BmXnTEVfhVkQwokyamyo4sbkQ3mbQNhXIwZt0aGmxM1paHx2BY3Vu33ncnqQ+nrT2NvTvrXCmAI4BnOp+TJfeTE+H44v7vkoN3JMin7OcwHkaUq5YLfQoe2sE9S2ONwNwmiXuexPckycvnlQCcLre6nKk3jaFSdzb9vb2/v7+fireWFe/xeEsrg7uSTsazLa2tpyC2wo4oHznxtvm5uInrjg1bel729+ve9vf396nX98kd3EkruHtCTeq1orMvzPBxUnIGZzQnIa3lbaVt5o4RW6pe9tfeCvV7Tf90SpvKruZHVyGuUjF2xNzb3ZQtkQJ7O3dldXHU21WvTG5t82O5OCtGarcmPU1TXQqXRc3BXBWTrZkCcrtap4Wt6srtdeqc+MWOGVvifdL9veDk7P7he0vaqI8sLT2dnp6emrsZKsrzMbdOwNvTXGzW0zA8bomvfe2T1KbkjfmmNt30/J2ag5uSzXW3La2DMEVt9gVuE1488rNxa/s4rImJ469nRZRKXAqRLY0YtTf3Nraere1/GoA7moZRXBMDq7n3rbpclOMtbjvSt5OW+mqb51ItjQzf4hlF0ZMTDCHu9IE1y54dXBrFuBY8uBSx7ZSZ7HnpMvbqShVhPplacswVhPDFra//75qeHtXrXBXut42JeJ0U99hmYE32tQ094oYVzlJgTuVcTtV4bZod7S4bJnHbl5YMqukYqoyomzH7G3cdJTkvRG1Vju31OXIUsHbd6W6puRteczbyFJWV79F/sC/m7lSDIsMDt78jSJNth8bTuUE3rqIMSbw5mrgqGhOXk6VwP3tENymN2+b8OaD20ldjktv3Gf73shpN7Raurj5FWeUv03FaXcoNzfdcUvdG1FwFufXGNU4TW+lsZo4r/2RIN7cDSnrODZdBt681DcrcLP7a5H7ruNtVdJElBKobrwZnDK4K0VuPoL2pJe5m12B0+6cdHtjwrFkw1US2GzKW7c5eEvOG7P2xvjG+M/Zqa3SGGm90OqmRfOiRS8Fb7rgruAtojevW0YcbTpp3K7njVUrnWhyxsQ9Q/redMXF4LaZNjfC+0nccztp/qnAm3DOtrJ2SrwZYgrOSYsS3rwvBzCv3k6YE3HtP+NXOEmPpNWWXFW2xLgJvP3toj8Jb56Hk2qvr+XSfjzZfB7O7ZyeiXy5TQQuwfrGF3cFb/S9dTlbedsO7o2JnqR9i2whoN0baa0KbKUZ7dGk6v6SvnuLw61+B8MC52Jgyl2l0wfX7E0up3JbWz0Bp/wXD29evHVpM5zgeffWLlTShe7O10kZ3JWGOHgz4hagNWnVT3HtrRtcbfNxb7xNJpOZIjG44s8NThCAt8Ctye1tFp+buGXSGhpagVssvKXHbQluqa6mbXEHPW+bnsD1fvGtuykZ25sGuFOrCpdilat7anKbLKLrref9yf14awGGq3N+vHU+lQW4+Z8naK3qqe5twuGmfpEueIuxGBBvudtwq4rE2ulq4Ml9VHLljQOqIs6Cmz90vffmFRxbXVshwICyA1yxbZm/l2u51WsrgwrX0GYwnPQHLiFvLMh6gCOBbiqbSYFjZtO3xAvcwlRZ3iaNLLSpTt+8gUu5vvkYUboreO64iTeZaJhjai2TdL1VFgau+No0lt68VbhkuLH9pLYrexqcGmI7nQ8ka+BOsxA3UYnFxbngzcu1FGoVLnFuomWB1Zgxo/WAyURHHLzFX3+jX990h5LynkmHuTy9TeCNjrckBpN6k0Fxy4QPbtErydZbIS4+t3S8tdH1ZO5mUt9Y7QJBCr3Kpbcc529LcPBmU+P6oU13ZYF7qht/4bsBzuN1y0mAm0wwnrQaU+bv7eREm1uTGWeEyXgDykRPEIjmbTKZ4PolSXI74SzWLdfbtOdulasDtU/urm01yaFf4tmbTFsZeEuLG09VZTuJ8TYVyQdzcK6unPX6mztvnOfs0fVLshhNdl1E2dCbYDmgKi0DcZOg3vhPquttv7f9khS4mUgTcmvM8EQ1DgWO5036xDr1rdgMnJy3TJolrrktGKlco4u3Dnea84jSwlvnc2c+f8tmNcC5N+GIsr1q0L7pNPEty77AKTx3cSd4S2AdwAO3xqqbaJ2bV+pyBjfx502p0vXSG9lVbX/ehLuVObdl7U1PnQk3Kbh01wNyW+N27625BqD8OLq4xltb47ELcIrk9K11gEt3PSAVbjdu3LjBbtwwEOeQ2+mp3kPpSbt5c8Ztka3iB+/gDJ96kp+38kbi3m6sol/jfHrrOPOUnraZt3EzBTufBW7iWFxC3KruKrdH5zadLr+ZCrUtvXXDcwZO4fol7c2UZC5icrOZ8ZjjbfbV2IRPbwJxq4OYpZr43kpoy2/a2JbgVAqdw4aJ9HOEueWNRqPy5k0VbmUsTPj0xhXHckgIbtNKBDfXw/OmOLB0dnGv+gcJa62XS7kZWeQ/phgpdmqTcLMCN5FBs/U2ydObBFdJzAIaH1OHNY42rXkcc3gxPbbYriwh2fq5A5ZiBWw8U/FDxdcSU4e1Dm524CZua1o/vTkdK5rEjpvbiD+yu6NJKRxZqo05q/dgVW8FsZsaGXv0VkU3cZyejCdjKXNU3Xx46wYnmchJvAnJibqeN7Uz7syEfLLyxlxRm7oKJW6yvr/ZepzK6oHoOdxjSwJcrt5IaBN6S0pbbcont6TOTRvcOA9weXlj9tymTkOwup3qc+MNKVXq35bsLn68jeEtgjgi2ih6Y5bclAec8rvc9MQN3iKIo6LNytuvZMCZtzPdecsFXIbeGKPuTbHA/ZokN5USePOmP2+0xeXobTQa6UsLyU3V2685/p/abM3Nr7cUwOWETdvb1FtIrb+R8WaUsW7gLRi3EQls0gVv+uJOU/aG8WRQbyMa3Ah76z7T25G3P/5w4m2ch7fJj6y8jUZ64KbTnnpTOFfg1Ic2Y3CZePvx48ePLL0piZv23ZvZVRa6kf1R/usPVwPKTGZvc2+zZOitIq74tmlwGiBUwYk/Du7UibcyDN643H7kyI2TwNqonSHQAU97Nwknf/45c/Zn8S9467m3MtNQSaE/6XJo+Wclc3axvE3gjQ63cOBSWA5wOX/7sxaHCwK5dCd76i2UuN6td3dzC+BtAm/UuIUBJy9vN7L25nbBO7PyBm8ob87IsT/ld7h58+bzXg4nf2TlbUTOGzZPcvP8+fPnfdyt/CMrb6MRMXDYqyzUpgtuDG/Je0Nxi8nteQ+3TmY1nhwRq2/gJvf23NdC9ziB6gZv4EaS23g8zm1nSR7eRrS83cDkzcFwcpwPt8y8jeAtu27JeAxv+WiL5U3946j6PZwcGwfeKGqL5u1G7735q22EweXibTSi6E0Krr+jSu+1jS64LLyNrBLVWy/NKXkbOwjW36hhi7X+1ucap8Jt7CbwRkxbfG83wK2Vl+NxvuASHk+ORvCWordXr169kmh7mbO3hOdvoxF9cCribhzBW41bxt4S7peMRkmAUxB3dHTUG3Kvyki0OQQHb+S4+T8FTslbX8RJvb186dgbOXFhvO0T5kbG20KcH31H9RehyO3lSw/eiIkL5G0WotwIgDsSxTE1AuTE3l7WMs5VXKjx5D5VbQRmcEeSuNcWk1ypbSZKps2xtzH6k6S8xV4VOPIHznPpdOTt5Uu/3giJS9HbKDFvXeKOuuJcWzxvr1+/LrxVyL30740OOXgLcZUuK26mQI6oeZtze/369coVX5sXb2N4I+It6kWWj1TjlFsccG1vkmQKDt5igjvSiFNuUdSV3iJxg7dI3KaRYqVN14a3smnVLVH2tjtPhuCS85Yst6mVNl/eAspT9rZbT1bgUvM2gjc/3I4CcFPwtstNPuB65m0aMXbc9EAc0QNXrL3JvO1KAm+pcZtGjw22AN7O/XMT17fdzsAbvAX15hnc+dzbeRHNt6X7Ea+X3F4bWHMkDvO3gKNJQt6OjryDM/HWiqq07oe8Xpa3V6baHIAjtuQNb8S96YhzwE3BnOKdX79a5aUFuN2szhSAN/rglM258iYRx78v5/7nUm9a4HZz8TaBt0S8qblz501gTnTP5r3nt0q96YHbhbdEVgMy8yYn59ZbW925VuTeNMHtwlsK3tJvUOqY8+FtRe783Km3UOAokcva25RGPHATiHPSnxSIOzeInJs2uF14A7dY3nji/HkzS5e3UODQn/TubUonnri1xR1R83bewU0f3G7S3nLdXzIlFW/cGuDocev2FgYcpcsq5OdtSi3+vB3ZbZ5M0ZsdOMZibzHJ7/wAit6OvMVCm3duJTiX2gzFLbjF39GVnbcpPW9HNHMe29vubjBw47K8scjcfoCb7xwd9dfbuRdvuxbeCnHB4eV6Ps4U3pLxtmsRJWO/z9P0xlbsIpyRk5W36RTeYoFjet52LaPM7ffff58dROPWYRXnBLhsuE3Jps/ezi3PxbERt/JWkIM3N9ym1NMHb6L9la9eeeLWCe73alhUcPfu3UvF2wje4M1IXFUb11tYcKW5hLlNk0kPwAnPH3jlj5sUnLy2xQF3717C3qbwlkKBYx65ScCpcIsBLlFu07TSi4YJ49/qk5tYXOfsLRI4cEOB81jgGCtZeNImAvc7vLnjNp3CG0lvTOzNeyTcSHibxPa2vb3dF2698cbieWtGEVzoChfTW1+0wdtuZHXw1p+xZF+88cDF5rZLbkQZfJTYQ2098XaepLfA4EIPE1XuNsqNG7wBXAnOvTclWLIyOIK3RE/JaYJj8b2RmsFNJvciNSGNuMEb9VPgGuAoeFuEhreJX2tibtt575jsqbc6OErcdokUOM/FbVuzq5L4mQC991YDR8obEXA+F9cq3ralczzVk2/gjf4lFVj1A1N34S2gt8osrXuZYJTDmW693rDcArd4awEuzHhSZWSZ/vVJ4E0Ejpg3EuDiexvBW37e6p/ASN8bS9Obwe6SEbzldkm89ptM31sodCldXPIhvCXqLRVw/snBG/qTvfGmIi5vbyN464U3gIM3ePN1SXPC4GIPKRPiNnr4CN6S8AZwmXh7BG9JeKM8hXMgzkJlEt4elnn0KFFx8JYYOKZkJjVvcl8tbnNvSYqDt+TAMbGX1Sdb5eDtYT3Vnx89SlUcvCVzsoAUXFWbETiC5e2hMI+SBQdvxMCZiGOrT0c1Bkd2NCn1lpy4vnkjD07nQK1qs21l0muVPFTylpi43nmjDk7vYBVCScXbyIRb3dsjaIO3UOCcLdWlxK3hLRVxR0d99NYPcEl4Gxlya3lLQtwRvOXn7dAQ3D1a3LS9PYI3qt4SmMH9n6m2Q0Nv9+4l0ikRektAHLxR3UdZeLt7967mEbyehTc+J4XAG0lvtMEtvd29qwtuPSlvI+feqIvrq7fzdLzdNfXGeukN4JLxtkvs4gp3tb2tr68fmjUpY3z+m2T29uhRruJ66u2c743R86alrelN2VxO3kiLgzeCFc6ovK2XMVmQi/H5piN/3gCOnDcRODojSk1v613eyr1fvfBGWRy80eyZ6HlbV/BWt1elR8rbQxfe6IrrqTfa4Fbe7upxO1zXOeZz9vYI3uDNk7f1dd361hhl5uiNqLi+eqO+6K3hbd3GG8Wz3sx4PW4H4Oh4Iw5O3VtlMMlbEOizt8fwRt3bLi1vGsXt8LC2vyRNbw/deqMorq/eaF87SNHbetXbPClzk23/N/T2GN5Ie6MFTmfqlrw3+ek2xuAeAxwNbxlcrIvj7TDV6vbQl7fHWBqANxfeao3JpbfD1Lk590ZW3LRf3pK8tMK6CNxhIuBGEbyRBTftlTfip3rPIllRW19P0ZvCNRQ8eMOgkoQ34TYTRs9bZTF7va0tlRGlyiVLvHgDOAreyINbIFvvziH9Cqd2hSA/3oiK65k36qcK7K4r5bCZZIubR28AR3c8mRi4Q04SAad4uTsX3rDBi7K3lMAdCpIiN+PzAwAubW8JgTuUhLS3h4G9YUclvNl7O+xKH8qbojdy4u7fv38f3pICd5gEOCVvFieYPk4R3P1lOkz89ddff+XuLRFwh4cpgPO2EKDtjY64+81IsP3lT9w5CpwOuMMUwHlb5zbx9pimNgG5v6rJ2lsa4LLwZn/BkseP0xJ3XxSJNj/izlHgNMAdHtqD+38="},z_={100:209,104:206,108:207,112:219,116:205,120:204,124:203,132:202,136:24,140:201,144:54,148:200,152:199,156:196,158:46,170:195,174:194,178:193,180:192,184:96,188:191,191:189,192:188,196:187,203:185,204:216,208:184,212:180,214:179,218:178,222:176,226:175,231:172,232:174,233:173,234:183,238:23,239:18,242:171,246:170,248:169,250:161,258:166,260:168,262:181,266:160,268:158,270:159,275:140,276:157,288:156,296:132,300:155,304:182,308:154,316:14,320:153,324:152,328:150,332:149,334:228,336:6,340:148,344:198,348:147,352:146,356:145,360:144,364:143,368:142,372:141,376:139,380:138,384:190,388:137,392:136,398:134,400:135,404:133,408:90,410:56,414:130,417:129,418:128,422:126,426:125,428:127,430:124,434:123,438:122,440:121,442:120,446:197,450:118,454:117,458:116,462:115,466:114,470:113,478:112,480:111,484:110,492:109,496:107,498:108,499:106,500:28,504:104,508:103,512:88,516:102,520:101,524:100,528:97,531:99,533:98,534:241,540:167,548:7,554:94,558:93,562:92,566:91,570:95,574:229,578:89,580:12,583:10,584:11,585:86,586:87,591:85,598:84,600:83,604:82,608:81,612:21,616:80,620:79,624:151,626:42,630:16,634:78,642:77,643:76,646:75,652:165,654:20,659:74,660:22,662:73,663:164,666:162,670:72,674:70,678:69,682:68,686:67,688:66,690:65,694:64,702:63,703:61,704:4,705:62,706:58,710:57,716:1,724:55,728:52,729:53,732:105,740:51,748:50,752:49,756:48,760:47,762:45,764:43,768:41,776:40,780:39,784:33,788:38,792:37,795:36,796:27,800:35,804:34,807:119,818:177,826:32,831:30,832:29,833:31,834:44,840:17,850:13,854:208,858:9,860:8,862:5,876:163,882:71,887:3,894:2,"016":15,"086":19,"060":25,"092":26,"090":60,"096":210,"076":211,"072":212,"070":213,"068":214,"064":215,"084":217,"056":218,"052":220,"050":221,"048":222,"044":223,"031":224,"040":225,"036":230,"051":231,"032":232,"028":233,"024":234,"020":235,"012":236,"008":237,"004":238,"010":240};async function k_(r){let t=Uint8Array.from(atob(r),n=>n.charCodeAt(0)),e=new Blob([t]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(e).arrayBuffer())}async function G_(){let[r,t]=await Promise.all([k_(gh.d),k_(zs.d)]);return{world:{w:gh.w,h:gh.h,grid:r},eu:{...zs,d:void 0,grid:t},iso:z_}}var g2={lon0:zs.lon0,lon1:zs.lon1,lat0:zs.lat0,lat1:zs.lat1};var fl={seal:0,dust:1,globe:2,rails:3,lattice:4,map:5,horizon:6},hl=Math.PI*2,ks=Math.PI/180;function Vs(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Hs=r=>({pos:new Float32Array(r*4),meta:new Float32Array(r*4)});function Ei(r,t,e,n,i,s,o=0,a=0,l=0,c=0){let u=t*4;r.pos[u]=e,r.pos[u+1]=n,r.pos[u+2]=i,r.pos[u+3]=s,r.meta[u]=o,r.meta[u+1]=a,r.meta[u+2]=l,r.meta[u+3]=c}var Gs=(r,t,e=1)=>{let n=t*ks,i=r*ks;return[Math.cos(n)*Math.sin(i)*e,Math.sin(n)*e,Math.cos(n)*Math.cos(i)*e]},hp=[{r:.165,a:.075,n:5,j:5,z:.075,m:0,w:5},{r:.355,a:.07,n:8,j:6,z:.085,m:4,w:9},{r:.545,a:.07,n:12,j:7,z:.09,m:6,w:14},{r:.73,a:.062,n:18,j:8,z:.08,m:6,w:18},{r:.885,a:.04,n:30,j:6,z:.05,m:0,w:16},{r:.985,a:.011,n:96,j:3,z:0,m:0,w:8}];function V_(r){let t=Hs(r),e=Vs(11),n=hp.reduce((s,o)=>s+o.w,0),i=0;return hp.forEach((s,o)=>{let a=o===hp.length-1?r-i:Math.floor(r*s.w/n),l=Math.floor(a/s.j);for(let c=0;c<a;c++){let u=Math.min(s.j-1,Math.floor(c/l)),f=c%l/l*hl+e()*6e-4,h=s.n*f+hl*u/s.j,d=1+(s.m?.32*Math.cos(s.m*f):0),g=s.r+s.a*d*Math.cos(h);Ei(t,i++,g*Math.cos(f),g*Math.sin(f),s.z*d*Math.sin(h),.5+e()*.4,o,f/hl,g,e())}}),t}function H_(r){let t=Hs(r),e=Vs(23);for(let n=0;n<r;n++){let i=e()<.1;Ei(t,n,(e()*2-1)*2.7,(e()*2-1)*1.3,.7-e()*2.6,i?.45+e()*.4:.05+e()*.2,e(),e(),e(),e())}return t}function W_(r,t){let e=Hs(r),n=Vs(37),i=Math.floor(r*.7),s=Math.floor(r*.18),o=Math.floor(r*.05),a=0,l=Math.floor(i/.262),c=Math.PI*(3-Math.sqrt(5));for(let _=0;_<l&&a<i;_++){let m=1-2*(_+.5)/l,x=Math.asin(m)/ks;if(x<-58)break;let v=Math.sqrt(1-m*m),T=_*c,S=Math.cos(T)*v,w=Math.sin(T)*v,C=Math.atan2(S,w)/ks,p=Math.min(t.w-1,Math.floor((C+180)/360*t.w)),y=Math.min(t.h-1,Math.floor((90-x)/180*t.h)),M=t.grid[y*t.w+p];M&&Ei(e,a++,S,m,w,.5+n()*.45,M,0,n(),n())}let u=a,f=[];for(let _=-180;_<180;_+=30)f.push({lon:_,len:180});for(let _ of[-60,-30,0,30,60])f.push({lat:_,len:360*Math.cos(_*ks)});let h=f.reduce((_,m)=>_+m.len,0),d=u+s;for(let _ of f){let m=Math.floor(s*_.len/h);for(let x=0;x<m&&a<d;x++){let v=x/m,T=_.lon!==void 0?Gs(_.lon,-88+v*176,.997):Gs(-180+v*360,_.lat,.997);Ei(e,a++,T[0],T[1],T[2],.13,0,1,n(),n())}}let g=Math.min(r,a+o);for(;a<g;){let _=n()*hl,m=1.26+(n()-.5)*.004;Ei(e,a++,Math.cos(_)*m,0,Math.sin(_)*m,.1+n()*.14,0,2,n(),n())}for(;a<r;){let _=Gs(n()*360-180,Math.asin(n()*2-1)/ks,.9);Ei(e,a++,_[0],_[1],_[2],0,0,3,n(),n())}return e}var PT=r=>(r.lon1-r.lon0)*Math.cos((r.lat0+r.lat1)/2*ks)/(r.lat1-r.lat0);function X_(r,t){let e=Hs(r),n=Vs(53),i=PT(t),s=0;for(let f=0;f<t.grid.length;f++)t.grid[f]&&s++;let o=s/t.grid.length,a=Math.floor(r*.94),l=Math.sqrt(4*i*o/(.866*a)),c=0,u=0;for(let f=-1+l/2;f<1&&c<a;f+=l*.866,u++)for(let h=-i+(u%2?l/2:0);h<i&&c<a;h+=l){let d=h+(n()-.5)*l*.3,g=f+(n()-.5)*l*.3,_=Math.floor((d/i+1)/2*t.w),m=Math.floor((1-g)/2*t.h);if(_<0||m<0||_>=t.w||m>=t.h)continue;let x=t.grid[m*t.w+_];if(!x)continue;let v=(d/i+1)/2,T=(g+1)/2,S=Math.min(1,Math.min(v,1-v,T,1-T)/.07);Ei(e,c++,d,g,(n()-.5)*.01,(.45+n()*.45)*S*S,x,0,n(),n())}for(;c<r;)Ei(e,c++,(n()*2-1)*i,n()*2-1,-.2-n()*.4,0,0,3,n(),n());return e}function q_(r){let t=Hs(r),e=Vs(71),n=[{y:.9,z:-.7},{y:-.1,z:.1},{y:-.8,z:-.3}],i=16,s=[];for(let a of n)for(let l=0;l<i;l++)s.push({y:a.y+(l-(i-1)/2)*.017,z:a.z+(e()-.5)*.12,speed:e(),phase:e(),r:e()});let o=Math.floor(r/s.length);for(let a=0;a<r;a++){let l=s[Math.min(s.length-1,Math.floor(a/o))],c=(a%o+e()*.6)/o*5.4-2.7;Ei(t,a,c,l.y,l.z,.3+e()*.2,l.speed,l.phase,l.r,e())}return t}function Y_(r){let t=Hs(r),e=Vs(89),n=[4,6,7,6,3],i=[-1.16,-.58,0,.58,1.16],s=n.map((u,f)=>Array.from({length:u},(h,d)=>[i[f],(d-(u-1)/2)*(1.72/6),Math.sin(d*2.1+f*1.7)*.3])),o=[];for(let u=0;u<n.length-1;u++)for(let f of s[u])for(let h of s[u+1])o.push([f,h,e()]);let a=s.flat(),l=Math.floor(r*.1),c=0;for(;c<l;c++){let u=a[c%a.length],f=e()*hl,h=.042+(e()-.5)*.004;Ei(t,c,u[0]+Math.cos(f)*h,u[1]+Math.sin(f)*h,u[2],.5+e()*.3,0,0,c%a.length/a.length,e())}for(;c<r;c++){let u=o[c%o.length],f=.06+e()*.88,h=()=>(e()-.5)*.006;Ei(t,c,u[0][0]+(u[1][0]-u[0][0])*f+h(),u[0][1]+(u[1][1]-u[0][1])*f+h(),u[0][2]+(u[1][2]-u[0][2])*f+h(),.16+e()*.14,1,f,u[2],e())}return t}function Z_(r){let t=Hs(r),e=Vs(97),n=58,i=Math.floor(r/n);for(let s=0;s<r;s++){let a=Math.min(n-1,Math.floor(s/i))/(n-1),l=(s%i+e()*.4)/i*2-1;Ei(t,s,l*(2.9+a*4.2),-.6,.9-a*8.5,.07+.6*Math.pow(1-a,1.5),a,e(),e(),e())}return t}var J_=`
uniform float uTime;
uniform float uMix;
uniform float uPx;
uniform float uSize;
uniform int uFromType;
uniform int uToType;
uniform vec4 uFromT;
uniform vec4 uToT;
uniform vec2 uAlpha;
uniform vec2 uSizeK;
uniform mat3 uGlobeRot;
uniform vec2 uPointer;
uniform float uDir;
uniform float uReduced;
uniform float uTurb;
uniform sampler2D uLutG;
uniform sampler2D uLutM;

attribute vec4 aFrom;
attribute vec4 aFromM;
attribute vec4 aTo;
attribute vec4 aToM;
attribute vec2 aRnd;

varying float vAlpha;
varying float vHot;

const float TAU = 6.28318530718;

vec3 rx(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c); }
vec3 ry(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c); }
vec3 rz(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z); }

void shape(int type, vec4 p4, vec4 m, out vec3 pos, out float alpha, out float hot, out float sz) {
  pos = p4.xyz;
  alpha = p4.w;
  hot = 0.0;
  sz = 1.0;

  if (type == 0) {
    // seal: counter-rotating bands on slow gimbals, one accent bead circling each band
    float band = m.x;
    float dir = mod(band, 2.0) < 0.5 ? 1.0 : -1.0;
    pos = rz(pos, uTime * (0.022 + 0.009 * band) * dir);
    pos = rx(pos, 0.27 * sin(uTime * 0.19 + band * 1.3));
    pos = ry(pos, 0.22 * cos(uTime * 0.15 + band * 0.9));
    pos = rx(pos, -0.4 + uPointer.y * 0.1);
    pos = ry(pos, 0.34 * uDir + uPointer.x * 0.14);
    float bead = abs(fract(m.y + uTime * 0.05 * (1.0 + band * 0.35) * dir + band * 0.21) - 0.5);
    hot = (1.0 - smoothstep(0.0, 0.012, bead)) * step(band, 4.5);
    sz = 1.0 + hot * 0.9;
    // nearer strands read brighter, which is what makes the rings look solid
    alpha *= (0.5 + 0.5 * smoothstep(-0.32, 0.32, pos.z)) * (0.8 + 0.2 * sin(uTime * 0.6 + m.w * TAU)) + hot * 0.5;
  } else if (type == 1) {
    // dust
    pos.x += sin(uTime * 0.07 + m.x * TAU) * 0.1;
    pos.y += cos(uTime * 0.05 + m.y * TAU) * 0.1;
    pos.xy += uPointer * (0.03 + 0.07 * m.z);
    alpha *= 0.6 + 0.4 * sin(uTime * 0.5 + m.w * TAU);
  } else if (type == 2) {
    // globe
    if (m.y > 1.5 && m.y < 2.5) {
      pos = ry(pos, uTime * 0.05);
      pos = rz(pos, 0.42);
      pos = rx(pos, 0.3);
      alpha *= 0.35 + 0.65 * smoothstep(-0.7, 0.7, pos.z);
    } else {
      pos = uGlobeRot * pos;
      alpha *= mix(0.06, 1.0, smoothstep(-0.2, 0.45, pos.z));
      if (m.y < 0.5) {
        hot = texture2D(uLutG, vec2((m.x + 0.5) / 256.0, 0.5)).r;
        sz = 1.0 + hot * 0.5;
        alpha *= 0.8 + 0.2 * sin(uTime * 0.8 + m.w * TAU) + hot * 0.45;
      }
    }
  } else if (type == 3) {
    // rails: steady lines, with comets of light travelling along each lane
    float x = pos.x;
    pos.y += 0.018 * sin(x * 1.3 + uTime * 0.22);
    float u = fract(m.y + (uTime * (0.3 + m.x) * 0.5 - x * uDir) * 0.2);
    float pulse = exp(-u * 12.0);
    float echo = exp(-fract(u + 0.41 + m.z * 0.3) * 20.0) * 0.5;
    hot = pulse * step(0.8, m.z);
    alpha *= (0.14 + (pulse + echo) * 1.7) * smoothstep(2.7, 2.2, abs(x));
    sz = 1.0 + pulse * 0.9;
  } else if (type == 4) {
    // lattice
    if (m.x > 0.5) {
      float w = fract(m.y - uTime * (0.1 + 0.16 * m.z) + m.z * 7.0);
      float pulse = 1.0 - smoothstep(0.0, 0.1, w);
      hot = pulse * step(0.78, fract(m.z * 13.7));
      alpha *= 0.5 + pulse * 1.3;
      sz = 1.0 + pulse * 0.7;
    } else {
      alpha *= 0.75 + 0.25 * sin(uTime * 1.3 + m.z * 40.0);
    }
    pos = ry(pos, 0.32 * sin(uTime * 0.17) + uPointer.x * 0.18 - 0.22 * uDir);
    pos = rx(pos, -0.1 + uPointer.y * 0.1);
  } else if (type == 5) {
    // flat map
    if (m.y < 0.5) {
      hot = texture2D(uLutM, vec2((m.x + 0.5) / 256.0, 0.5)).r;
      alpha *= 0.72 + 0.28 * sin(uTime * 0.7 + m.w * TAU) + hot * 0.35;
      sz = 1.0 + hot * 0.25;
    }
  } else {
    // horizon
    pos.y += (0.06 + 0.11 * m.x) * sin(pos.x * 1.15 + pos.z * 0.8 + uTime * 0.45)
           + 0.045 * sin(pos.x * 2.9 - pos.z * 1.4 - uTime * 0.3);
  }
}

void main() {
  vec3 pa; vec3 pb;
  float aa; float ab; float ha; float hb; float sa; float sb;
  shape(uFromType, aFrom, aFromM, pa, aa, ha, sa);
  shape(uToType, aTo, aToM, pb, ab, hb, sb);
  pa = pa * uFromT.w + uFromT.xyz;
  pb = pb * uToT.w + uToT.xyz;

  float t = clamp((uMix - aRnd.x * 0.3) / 0.7, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  float fade = 1.0;
  if (uReduced > 0.5) {
    // reduced motion: no flight between shapes, only a crossfade
    t = step(0.5, uMix);
    fade = abs(uMix * 2.0 - 1.0);
  }

  vec3 p = mix(pa, pb, t);
  float bump = sin(t * 3.14159265);
  vec3 swirl = vec3(aRnd.y - 0.5, fract(aRnd.y * 7.13) - 0.5, fract(aRnd.x * 3.71) - 0.5);
  p += swirl * bump * uTurb * mix(uFromT.w, uToT.w, t);

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = uSize * mix(sa * uSizeK.x, sb * uSizeK.y, t) * (0.72 + 0.56 * aRnd.y);
  gl_PointSize = size * uPx * (10.0 / max(0.1, -mv.z));
  vAlpha = mix(aa * uAlpha.x, ab * uAlpha.y, t) * fade;
  vHot = mix(ha, hb, t);
}
`,K_=`
uniform vec3 uColor;
uniform vec3 uHot;
varying float vAlpha;
varying float vHot;

void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.12, d) * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(mix(uColor, uHot, clamp(vHot, 0.0, 1.0)), a);
}
`,j_=`
attribute float aState;
attribute float aPhase;
uniform float uPx;
uniform float uSize;
varying float vState;
varying float vPhase;
varying float vFace;

void main() {
  vec3 n = normalize(mat3(modelMatrix) * position);
  vFace = smoothstep(0.02, 0.3, n.z);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  gl_PointSize = uSize * uPx * (1.0 + aState * 0.55);
  vState = aState;
  vPhase = aPhase;
}
`,Q_=`
uniform vec3 uColor;
uniform vec3 uHot;
uniform float uOpacity;
uniform float uTime;
varying float vState;
varying float vPhase;
varying float vFace;

void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float core = 1.0 - smoothstep(0.1, 0.17, d);
  float ring = smoothstep(0.33, 0.37, d) * (1.0 - smoothstep(0.41, 0.45, d));
  float w = fract(uTime * 0.4 + vPhase);
  float pr = 0.22 + w * 0.72;
  float pulse = smoothstep(pr - 0.07, pr, d) * (1.0 - smoothstep(pr, pr + 0.035, d)) * (1.0 - w);
  float a = (core + ring * (0.5 + 0.5 * vState) + pulse * (0.3 + 0.7 * vState)) * vFace * uOpacity;
  if (a < 0.01) discard;
  gl_FragColor = vec4(mix(uColor, uHot, vState), a);
}
`,$_=`
attribute float aT;
attribute float aArc;
varying float vT;
varying float vArc;
varying float vFace;

void main() {
  vec3 n = normalize(mat3(modelMatrix) * position);
  vFace = smoothstep(-0.15, 0.35, n.z);
  vT = aT;
  vArc = aArc;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,tx=`
uniform vec3 uColor;
uniform vec3 uHot;
uniform float uOpacity;
uniform float uTime;
varying float vT;
varying float vArc;
varying float vFace;

void main() {
  float w = fract(uTime * 0.16 + vArc - vT);
  float trail = exp(-w * 7.0);
  float a = (0.1 + trail * 0.9) * vFace * uOpacity;
  if (a < 0.01) discard;
  gl_FragColor = vec4(mix(uColor, uHot, trail * trail), a);
}
`;var rx=35,sx=10,ex=2*Math.tan(rx*Math.PI/360)*sx,fp=Math.PI/180,IT=1,LT=.8,nx={seal:{alpha:.9,size:1,k:.98},dust:{alpha:.5,size:1.25,k:1},globe:{alpha:1,size:1.2,k:.76},rails:{alpha:.6,size:1.15,k:1},lattice:{alpha:.95,size:1.15,k:.74},map:{alpha:1,size:1.3,k:1},horizon:{alpha:.85,size:1.3,k:1}},DT=new Set(["dust","rails","horizon"]),Ho=(r,t,e)=>Math.min(e,Math.max(t,r)),NT=(r,t,e)=>{let n=Ho((e-r)/(t-r),0,1);return n*n*(3-2*n)},ix=(r,t)=>{let e=/^#?([0-9a-f]{6})$/i.exec((r||"").trim())||/^#?([0-9a-f]{6})$/i.exec(t),n=parseInt(e[1],16);return new Q((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)};function ox(r,t){let e;try{e=new dh({canvas:r,alpha:!0,antialias:!1,powerPreference:"high-performance"})}catch{return null}e.setClearColor(0,0);let n=t.touch||t.small,i=n?24e3:56e3,s=n?1.5:2,o=new Va,a=new Gn(rx,1,.1,140);a.position.z=sx;let l=getComputedStyle(document.documentElement),c=ix(l.getPropertyValue("--gl-paper"),"#ebe7df"),u=ix(l.getPropertyValue("--gl-seal"),"#e9523f"),f=new $n;f.setAttribute("position",new Je(new Float32Array(i*3),3));let h=new Float32Array(i*2),d=1234567;for(let W=0;W<h.length;W++)d=d*1664525+1013904223>>>0,h[W]=d/4294967296;f.setAttribute("aRnd",new Je(h,2));let g=()=>{let W=new Do(new Uint8Array(1024),256,1,gi);return W.magFilter=Ke,W.minFilter=Ke,W.needsUpdate=!0,W},_=g(),m=g(),x={value:0},v={value:1},T={uTime:x,uPx:v,uMix:{value:0},uSize:{value:1.9},uFromType:{value:fl.dust},uToType:{value:fl.dust},uFromT:{value:new Le(0,0,0,1)},uToT:{value:new Le(0,0,0,1)},uAlpha:{value:new ue(0,0)},uSizeK:{value:new ue(1,1)},uGlobeRot:{value:new qt},uPointer:{value:new ue},uDir:{value:t.dir},uReduced:{value:t.reduced?1:0},uTurb:{value:.5},uLutG:{value:_},uLutM:{value:m},uColor:{value:c},uHot:{value:u}},S=new ti({uniforms:T,vertexShader:J_,fragmentShader:K_,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ns}),w=new No(f,S);w.frustumCulled=!1,o.add(w);let C={},p=(W,F)=>{C[W]={pos:new Je(F.pos,4),meta:new Je(F.meta,4)}},y=[],M=0,b=0,R=1,P=0,U=!0,D=null,z=null,G=null,O={v:0,done:!1},Z={type:"dust",viewport:!0,alpha:0,size:1.25,k:1.7,rect:null},H={x:0,y:0,tx:0,ty:0},I={},et=(W,F)=>(I[W]||[]).forEach(V=>V(F));function xt(){y=[...document.querySelectorAll("[data-gl]")].map(F=>{let V=F.dataset.gl,rt=nx[V]||nx.dust,N=M<900;return{el:F,type:V,viewport:DT.has(V),alpha:(parseFloat(F.dataset.glAlpha)||rt.alpha)*(N&&V==="seal"?.5:1),size:rt.size*(M<700&&V==="map"?.62:1),k:parseFloat(F.dataset.glScale)||rt.k,rect:null}}).filter(F=>C[F.type]);let W=y.find(F=>F.type==="globe");W&&!W.el.dataset.bound&&L(W.el)}function yt(W,F){if(W.viewport)return F.set(0,0,0,ex/2*W.k);let V=W.rect;return F.set((V.left+V.width/2-M/2)*R,-(V.top+V.height/2-b/2)*R,0,Math.min(V.width,V.height)/2*R*W.k)}function J(W,F){z!==W.type&&(z=W.type,f.setAttribute("aFrom",C[W.type].pos),f.setAttribute("aFromM",C[W.type].meta),T.uFromType.value=fl[W.type]),G!==F.type&&(G=F.type,f.setAttribute("aTo",C[F.type].pos),f.setAttribute("aToM",C[F.type].meta),T.uToType.value=fl[F.type])}let at=t.data.atlas||[],pt=new vr;pt.visible=!1,o.add(pt);let wt=new Ji(0,0,0,"XYZ"),_t=new Ie,It=new Q,Mt={yaw:-22*fp,pitch:.5,vyaw:0,vpitch:0,dragging:!1,auto:!0,w:0,hover:-1,selected:-1,moved:0,lx:0,ly:0},At=null,kt=null,Pt=null,Ft=new Float32Array(at.length*3),se=new Float32Array(at.length),re=new Float32Array(at.length),$=new Float32Array(at.length),Kt=new Float32Array(at.length),Ue=new Float32Array(at.length),ge=new Uint8Array(at.length);at.forEach((W,F)=>{Ft.set(Gs(W.lon,W.lat,1.012),F*3),$[F]=F*.37%1});let Qt=new $n;Qt.setAttribute("position",new Je(Ft,3));let De=new Je(se,1);Qt.setAttribute("aState",De),Qt.setAttribute("aPhase",new Je($,1));let Ne=new ti({uniforms:{uTime:x,uPx:v,uSize:{value:30},uOpacity:{value:0},uColor:{value:c},uHot:{value:u}},vertexShader:j_,fragmentShader:Q_,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ns}),k=new No(Qt,Ne);k.frustumCulled=!1,pt.add(k);let pe=new ti({uniforms:{uTime:x,uOpacity:{value:0},uColor:{value:c},uHot:{value:u}},vertexShader:$_,fragmentShader:tx,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ns});(function(){let F=(t.data.arcs||[]).map(([lt,ht])=>[at.find(ut=>ut.id===lt),at.find(ut=>ut.id===ht)]).filter(([lt,ht])=>lt&&ht);if(!F.length)return;let V=56,rt=[],N=[],Y=[];F.forEach(([lt,ht],ut)=>{let dt=Gs(lt.lon,lt.lat),nt=Gs(ht.lon,ht.lat),it=Math.acos(Ho(dt[0]*nt[0]+dt[1]*nt[1]+dt[2]*nt[2],-1,1)),vt=Math.sin(it)||1,ot=.04+.26*(it/Math.PI),Tt=Zt=>{let Wt=Math.sin((1-Zt)*it)/vt,_e=Math.sin(Zt*it)/vt,Te=[dt[0]*Wt+nt[0]*_e,dt[1]*Wt+nt[1]*_e,dt[2]*Wt+nt[2]*_e],Re=Math.hypot(Te[0],Te[1],Te[2])||1,xe=(1.012+ot*Math.sin(Math.PI*Zt))/Re;return[Te[0]*xe,Te[1]*xe,Te[2]*xe]};for(let Zt=0;Zt<V;Zt++){let Wt=Zt/V,_e=(Zt+1)/V;rt.push(...Tt(Wt),...Tt(_e)),N.push(Wt,_e),Y.push(ut*.618%1,ut*.618%1)}});let j=new $n;j.setAttribute("position",new Je(new Float32Array(rt),3)),j.setAttribute("aT",new Je(new Float32Array(N),1)),j.setAttribute("aArc",new Je(new Float32Array(Y),1));let ct=new Xa(j,pe);ct.frustumCulled=!1,pt.add(ct)})();let ie=new Float32Array(256),Ht=new Float32Array(256),mt=!1;function oe(W,{rotate:F=!0}={}){if(W<0||W>=at.length)return;Mt.selected=W;let V=at[W];if(re.fill(0),re[W]=1,ie.fill(0),At)for(let rt of V.iso||[]){let N=At.iso[rt];N&&(ie[N]=1)}if(mt=!0,F){Mt.auto=!1,Mt.vyaw=0,Mt.vpitch=0;let N=((-V.lon*fp-Mt.yaw)%(Math.PI*2)+Math.PI*3)%(Math.PI*2)-Math.PI;jt.to(Mt,{yaw:Mt.yaw+N,pitch:Ho(V.lat*fp*.8,-.9,.9),duration:t.reduced?0:1.3,ease:"power3.inOut",overwrite:!0})}}function Dt(W,F){if(Mt.w<.9)return-1;let V=-1,rt=676;for(let N=0;N<at.length;N++){if(!ge[N])continue;let Y=(Kt[N]-W)**2+(Ue[N]-F)**2;Y<rt&&(rt=Y,V=N)}return V}function Gt(W){W!==Mt.hover&&(Mt.hover=W,Pt&&Pt.classList.toggle("is-hot",W>=0))}function L(W){W.dataset.bound="1",Pt=W,kt=W.querySelector("[data-globe-tag]"),W.addEventListener("pointerdown",V=>{Mt.w<.9||V.pointerType==="mouse"&&V.button!==0||(Mt.dragging=!0,Mt.moved=0,Mt.lx=V.clientX,Mt.ly=V.clientY,Mt.auto=!1,Mt.vyaw=0,Mt.vpitch=0,jt.killTweensOf(Mt),W.setPointerCapture(V.pointerId),W.classList.add("is-dragging"))}),W.addEventListener("pointermove",V=>{if(Mt.dragging){let rt=V.clientX-Mt.lx,N=V.clientY-Mt.ly;Mt.lx=V.clientX,Mt.ly=V.clientY,Mt.moved+=Math.abs(rt)+Math.abs(N),Mt.yaw+=rt*.0055,Mt.pitch=Ho(Mt.pitch+N*.0055,-1.05,1.05),Mt.vyaw=rt*.0055,Mt.vpitch=N*.0028}else V.pointerType==="mouse"&&Gt(Dt(V.clientX,V.clientY))});let F=V=>{if(Mt.dragging&&(Mt.dragging=!1,W.classList.remove("is-dragging"),V.type==="pointerup"&&Mt.moved<6)){let rt=Dt(V.clientX,V.clientY);rt>=0&&(oe(rt),et("select",at[rt].id))}};W.addEventListener("pointerup",F),W.addEventListener("pointercancel",F),W.addEventListener("pointerleave",()=>Gt(-1))}function E(W,F,V){Mt.w=F;let rt=NT(.8,1,F);if(Ne.uniforms.uOpacity.value=rt,pe.uniforms.uOpacity.value=rt*.85,pt.visible=rt>.002,Mt.dragging||(Mt.auto&&!t.reduced&&(Mt.yaw+=W*.05),Mt.yaw+=Mt.vyaw,Mt.pitch=Ho(Mt.pitch+Mt.vpitch,-1.05,1.05),Mt.vyaw*=.93,Mt.vpitch*=.88),wt.set(Mt.pitch,Mt.yaw,0,"XYZ"),_t.makeRotationFromEuler(wt),T.uGlobeRot.value.setFromMatrix4(_t),mt){let Y=0,j=_.image.data;for(let ct=0;ct<256;ct++){let lt=ie[ct]-Ht[ct];Math.abs(lt)>.004?(Ht[ct]+=lt*(t.reduced?1:.12),Y++):Ht[ct]=ie[ct],j[ct*4]=Math.round(Ht[ct]*255)}_.needsUpdate=!0,mt=Y>0}if(!V||!pt.visible){kt&&kt.classList.remove("is-on");return}pt.position.set(V.x,V.y,0),pt.scale.setScalar(V.w),pt.rotation.copy(wt);let N=!1;for(let Y=0;Y<at.length;Y++){let j=re[Y]-se[Y];Math.abs(j)>.003&&(se[Y]+=j*(t.reduced?1:.16),N=!0),It.fromArray(Ft,Y*3).applyMatrix4(_t),ge[Y]=It.z>.1?1:0,It.multiplyScalar(V.w).add(pt.position).project(a),Kt[Y]=(It.x*.5+.5)*M,Ue[Y]=(-It.y*.5+.5)*b}if(N&&(De.needsUpdate=!0),kt&&Pt){let Y=Mt.hover>=0?Mt.hover:Mt.selected,j=Y>=0&&ge[Y]&&rt>.9;if(kt.classList.toggle("is-on",!!j),j){let ct=Pt.getBoundingClientRect();kt.dataset.i!==String(Y)&&(kt.dataset.i=String(Y),kt.textContent=at[Y].name),kt.style.transform=`translate3d(${(Kt[Y]-ct.left).toFixed(1)}px, ${(Ue[Y]-ct.top).toFixed(1)}px, 0)`}}}function X(){let W=r.clientWidth||window.innerWidth,F=r.clientHeight||window.innerHeight;if(W===M&&F===b)return;M=W,b=F;let V=Math.min(window.devicePixelRatio||1,s);e.setPixelRatio(V),e.setSize(W,F,!1),a.aspect=W/F,a.updateProjectionMatrix(),R=ex/F,v.value=V,T.uSize.value=W<700?1.65:1.9,Ne.uniforms.uSize.value=W<700?24:30,y.length&&xt()}function ft(W,F){if(!U||document.hidden||!y.length)return;let V=Math.min(F||16,64)/1e3;t.reduced||(P+=V),H.x+=(H.tx-H.x)*.06,H.y+=(H.ty-H.y)*.06,T.uPointer.value.set(H.x,H.y);let rt=y.length;for(let nt=0;nt<rt;nt++)y[nt].rect=y[nt].el.getBoundingClientRect();let N=0;for(let nt=1;nt<rt;nt++){let it=Ho((b*IT-y[nt].rect.top)/(b*LT),0,1);if(N+=it,it<=0)break}let Y=Math.min(Math.floor(N),rt-1),j=Math.min(Y+1,rt-1),ct=Y===j?0:N-Y,lt=y[Y],ht=y[j];O.done||(N>.05||O.v>=1?O.done=!0:(lt=Z,ht=y[0],ct=O.v)),J(lt,ht),yt(lt,T.uFromT.value),yt(ht,T.uToT.value),T.uAlpha.value.set(lt.alpha,ht.alpha),T.uSizeK.value.set(lt.size,ht.size),T.uMix.value=ct,x.value=P;let ut=(lt.type==="globe"?1-ct:0)+(ht.type==="globe"?ct:0);E(V,ut,ht.type==="globe"&&ct>.5?T.uToT.value:lt.type==="globe"?T.uFromT.value:ht.type==="globe"?T.uToT.value:null);let dt=ct>.92?ht.el:ct<.08?lt.el:null;dt!==D&&(D&&D.classList.remove("is-live"),dt&&dt.classList.add("is-live"),D=dt),e.render(o,a)}r.addEventListener("webglcontextlost",W=>{W.preventDefault(),U=!1}),r.addEventListener("webglcontextrestored",()=>{U=!0}),t.touch||window.addEventListener("pointermove",W=>{H.tx=W.clientX/window.innerWidth*2-1,H.ty=-(W.clientY/window.innerHeight*2-1)},{passive:!0}),new ResizeObserver(X).observe(r);let st=new Set([...document.querySelectorAll("[data-gl]")].map(W=>W.dataset.gl));return p("dust",H_(i)),Object.entries({seal:V_,rails:q_,lattice:Y_,horizon:Z_}).forEach(([W,F])=>{st.has(W)&&p(W,F(i))}),{ready:(st.has("globe")||st.has("map")?G_():Promise.resolve(null)).then(W=>{if(W&&(At=W,st.has("globe")&&p("globe",W_(i,At.world)),st.has("map"))){p("map",X_(i,At.eu));let F=m.image.data;for(let V of t.data.mapHot||[]){let rt=At.iso[V];rt&&(F[rt*4]=255)}m.needsUpdate=!0}}).catch(W=>{console.warn("map data unavailable",W)}).then(()=>{X(),xt(),jt.ticker.add(ft),Mt.selected>=0&&oe(Mt.selected,{rotate:!0})}),refresh:xt,intro(W=2.6){O.done||jt.to(O,{v:1,duration:t.reduced?.01:W,ease:"power1.inOut"})},select(W,F){let V=at.findIndex(rt=>rt.id===W);V>=0&&oe(V,F)},on(W,F){(I[W]=I[W]||[]).push(F)}}}function dl(r,t=3400){let e=document.getElementById("toasts");if(!e||!r)return;let n=document.createElement("div");n.className="toast",n.textContent=r,e.appendChild(n),setTimeout(()=>{n.classList.add("is-out"),setTimeout(()=>n.remove(),320)},t)}function _h(r){let t=document.getElementById(r);if(!t||t.open)return t;document.querySelectorAll("dialog[open]").forEach(n=>n.close());let e=document.getElementById("a11yPanel");return e&&e.matches(":popover-open")&&e.hidePopover(),t.showModal(),t}function lx(){document.querySelectorAll("dialog").forEach(t=>{new MutationObserver(()=>t.open?Gg():null).observe(t,{attributes:!0,attributeFilter:["open"]}),t.addEventListener("close",Vg),t.addEventListener("click",n=>{(n.target===t||n.target.closest("[data-close]"))&&t.close()})}),document.addEventListener("click",t=>{let e=t.target.closest("[data-open]");e&&_h(e.dataset.open);let n=t.target.closest("[data-insight]");n&&OT(n.dataset.insight)});let r=document.getElementById("draftbar");r&&r.querySelector("button").addEventListener("click",()=>r.remove())}function OT(r){let t=document.getElementById("reader");if(!t)return;let e=null;t.querySelectorAll(".reader__doc").forEach(n=>{let i=n.dataset.doc===r;n.hidden=!i;let s=n.querySelector("h2");s.removeAttribute("id"),i&&(e=s)}),e&&(e.id="readerTitle",_h("reader"),t.querySelector(".reader__scroll").scrollTop=0)}function cx(){let r=document.getElementById("nav");if(!r)return;Vt.create({start:60,end:"max",onToggle:e=>r.classList.toggle("is-solid",e.isActive),onUpdate:e=>{let n=e.direction===1&&e.scroll()>window.innerHeight*.9&&!r.contains(document.activeElement);r.classList.toggle("is-hidden",n)}});let t=document.getElementById("progress");t&&jt.to(t,{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.3}})}function ux(){let r=document.getElementById("a11yPanel");if(!r)return;let t=[...r.querySelectorAll("[data-pref]")];t.forEach(n=>{let i=n.dataset.pref;n.checked=!!Rt.prefs[i],n.addEventListener("change",()=>{Rt.prefs[i]=n.checked,kf(),Rt.root.classList.toggle(`pref-${i}`,n.checked),i==="motion"?ax():Vt.refresh()})});let e=r.querySelector("[data-pref-reset]");e&&e.addEventListener("click",()=>{let n=!!Rt.prefs.motion;t.forEach(i=>{i.checked=!1,Rt.prefs[i.dataset.pref]=!1,Rt.root.classList.remove(`pref-${i.dataset.pref}`)}),kf(),n?ax():Vt.refresh()})}function ax(){dl(Rt.data.s.reload,1200),setTimeout(()=>window.location.reload(),900)}function hx({selectJurisdiction:r,openRule:t,downloadCard:e}){let n=document.getElementById("palette"),i=document.getElementById("paletteInput"),s=document.getElementById("paletteList"),o=document.getElementById("paletteEmpty");if(!n||!i||!s)return;let a=Rt.data.s.palette||{},{page:l,pages:c={}}=Rt.data,u=v=>Vf(v,{keyboard:!0}),f=[];(Rt.data.sections||[]).forEach(v=>{f.push({group:a.sections,label:v.label,key:v.label,run:()=>u(v.href)})}),(Rt.data.atlas||[]).forEach(v=>{f.push({group:a.jur,label:v.name,key:`${v.name} ${v.id}`,run:()=>{if(l!=="atlas"){u(`${c.atlas}#${v.id}`);return}r(v.id),dr(document.getElementById("atlas"),{keyboard:!0})}})}),(Rt.data.rules||[]).forEach(v=>{f.push({group:a.rules,label:v.short,hint:v.name,key:v.key,run:()=>{l==="rulebook"?t(v.id):u(`${c.rulebook}#rule-${v.id}`)}})}),f.push({group:a.actions,label:a.actLang,key:"language english hebrew \u05E2\u05D1\u05E8\u05D9\u05EA \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05E9\u05E4\u05D4",run:()=>u(Rt.data.otherHref)}),f.push({group:a.actions,label:a.actCard,key:"vcard contact card \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D1\u05D9\u05E7\u05D5\u05E8",run:e}),Rt.data.email&&f.push({group:a.actions,label:a.actEmail,key:`email mail ${Rt.data.email} \u05D3\u05D5\u05D0\u05DC`,run:()=>navigator.clipboard?.writeText(Rt.data.email).then(()=>dl(Rt.data.s.copied),()=>{})}),f.forEach(v=>{v.key=`${v.label} ${v.hint||""} ${v.key||""}`.toLowerCase()});let h=[],d=0;function g(){let T=i.value.trim().toLowerCase().split(/\s+/).filter(Boolean);h=f.filter(w=>T.every(C=>w.key.includes(C))).slice(0,60),d=0,s.textContent="";let S=null;h.forEach((w,C)=>{if(w.group!==S){S=w.group;let M=document.createElement("li");M.className="palette__group",M.setAttribute("role","presentation"),M.textContent=S,s.appendChild(M)}let p=document.createElement("li");p.className="palette__opt",p.id=`pal-${C}`,p.setAttribute("role","option"),p.dataset.i=C;let y=document.createElement("span");if(y.textContent=w.label,p.appendChild(y),w.hint){let M=document.createElement("small");M.textContent=w.hint.length>46?`${w.hint.slice(0,44)}\u2026`:w.hint,p.appendChild(M)}s.appendChild(p)}),o.hidden=h.length>0,s.hidden=h.length===0,_()}function _(){s.querySelectorAll(".palette__opt").forEach(v=>{let T=Number(v.dataset.i)===d;v.setAttribute("aria-selected",T?"true":"false"),T&&(i.setAttribute("aria-activedescendant",v.id),v.scrollIntoView({block:"nearest"}))}),h.length||i.removeAttribute("aria-activedescendant")}function m(v){let T=h[v];T&&(n.close(),T.run())}function x(){i.value="",g(),_h("palette"),i.focus()}i.addEventListener("input",g),i.addEventListener("keydown",v=>{if(v.key==="ArrowDown"||v.key==="ArrowUp"){if(v.preventDefault(),!h.length)return;d=(d+(v.key==="ArrowDown"?1:-1)+h.length)%h.length,_()}else v.key==="Enter"&&(v.preventDefault(),m(d))}),s.addEventListener("click",v=>{let T=v.target.closest(".palette__opt");T&&m(Number(T.dataset.i))}),s.addEventListener("pointermove",v=>{let T=v.target.closest(".palette__opt");T&&Number(T.dataset.i)!==d&&(d=Number(T.dataset.i),_())}),document.addEventListener("keydown",v=>{let T=/^(input|textarea|select)$/i.test(v.target.tagName)||v.target.isContentEditable;(v.key==="k"||v.key==="K")&&(v.ctrlKey||v.metaKey)?(v.preventDefault(),n.open?n.close():x()):v.key==="/"&&!T&&!document.querySelector("dialog[open]")&&(v.preventDefault(),x())}),document.querySelectorAll('[data-open="palette"]').forEach(v=>v.addEventListener("click",()=>{i.value="",g()})),/Mac|iPhone|iPad/.test(navigator.platform||"")&&document.querySelectorAll(".nav__search kbd").forEach(v=>{v.textContent="\u2318 K"})}function fx(r,t){let e=document.getElementById("pre"),n=document.getElementById("preCount");if(!e)return t();let i=!1;try{i=sessionStorage.getItem("seen")==="1",sessionStorage.setItem("seen","1")}catch{}if(Rt.reduced){r.then(()=>{e.remove(),t()});return}if(Rt.arriving){r.then(()=>{t(),jt.to(e,{clipPath:"inset(0 0 100% 0)",duration:.5,ease:"power3.inOut",onComplete:()=>e.remove()})});return}let s={v:0},o=()=>{n.textContent=String(Math.round(s.v)).padStart(3,"0")},a=i?.5:1.25;jt.to(s,{v:91,duration:a,ease:"power2.out",onUpdate:o}),jt.from(e.querySelectorAll(".pre__mark path"),{drawSVG:0,duration:a+.2,ease:"power2.inOut",stagger:.012}),Promise.all([r,dc(a*1e3)]).then(()=>{jt.to(s,{v:100,duration:.22,ease:"none",overwrite:!0,onUpdate:o,onComplete:()=>{t(),jt.to(e,{clipPath:"inset(0 0 100% 0)",duration:.85,ease:"power4.inOut",onComplete:()=>e.remove()})}})})}function dx(){let r=document.querySelector('[data-hero="title"]'),t=[...document.querySelectorAll("[data-hero]")].filter(e=>e!==r);!r||Rt.reduced||(jt.set(t,{autoAlpha:0,y:22}),Es.create(r,{type:"lines,words",mask:"lines",linesClass:"sl",autoSplit:!0,onSplit(e){return jt.set(r,{visibility:"visible"}),jt.from(e.words,{yPercent:112,duration:1.15,ease:"expo.out",stagger:.055,delay:.3})}}),jt.to(t,{autoAlpha:1,y:0,duration:.9,ease:"power3.out",stagger:.09,delay:.85}))}function px(){Rt.reduced||(document.querySelectorAll('[data-reveal="lines"]').forEach(r=>{Es.create(r,{type:"lines",mask:"lines",linesClass:"sl",autoSplit:!0,onSplit(t){return jt.set(r,{visibility:"visible"}),jt.from(t.lines,{yPercent:108,duration:1,ease:"expo.out",stagger:.09,scrollTrigger:{trigger:r,start:"top 90%",once:!0}})}})}),Vt.batch('[data-reveal="fade"]',{start:"top 92%",once:!0,onEnter:r=>jt.fromTo(r,{autoAlpha:0,y:20},{autoAlpha:1,y:0,duration:.8,ease:"power3.out",stagger:.08})}),document.querySelectorAll("[data-reveal-group]").forEach(r=>{let t=[...r.children];jt.set(t,{autoAlpha:0,y:24}),Vt.create({trigger:r,start:"top 88%",once:!0,onEnter:()=>jt.to(t,{autoAlpha:1,y:0,duration:.75,ease:"power3.out",stagger:.055,clearProps:"transform"})})}))}function mx(){let r=document.querySelector("[data-words]");!r||Rt.reduced||Es.create(r,{type:"words",wordsClass:"w",autoSplit:!0,onSplit(t){return jt.fromTo(t.words,{opacity:.16},{opacity:1,ease:"none",stagger:.5,scrollTrigger:{trigger:r,start:"top 80%",end:"bottom 52%",scrub:.4}})}})}var UT=864e5;function xh(r,t,e,n){r.classList.toggle("is-open",t),r.querySelector(e).setAttribute("aria-expanded",t?"true":"false"),r.querySelector(n).inert=!t}function gx(){let r=[...document.querySelectorAll(".plist__item")];r.forEach(t=>{t.querySelector(".plist__row").addEventListener("click",()=>{let e=!t.classList.contains("is-open");r.forEach(n=>{n!==t&&xh(n,!1,".plist__row",".plist__panel")}),xh(t,e,".plist__row",".plist__panel")})})}function _x(r){let t=[...document.querySelectorAll('.atlas__picker [role="tab"]')];if(!t.length)return()=>{};let e=t[0].dataset.jur;function n(i,{focus:s=!1,tellStage:o=!0}={}){let a=t.find(l=>l.dataset.jur===i);a&&(t.forEach(l=>{let c=l===a;l.setAttribute("aria-selected",c?"true":"false"),l.tabIndex=c?0:-1;let u=document.getElementById(l.getAttribute("aria-controls"));c&&u.hidden&&!Rt.reduced?(u.hidden=!1,u.animate([{opacity:0,filter:"blur(3px)"},{opacity:1,filter:"blur(0)"}],{duration:240,easing:"cubic-bezier(0.23, 1, 0.32, 1)"})):u.hidden=!c}),s&&a.focus(),e=i,o&&r&&r.select(i))}return t.forEach((i,s)=>{i.addEventListener("click",()=>n(i.dataset.jur)),i.addEventListener("keydown",o=>{let a=Rt.rtl?"ArrowLeft":"ArrowRight",l=Rt.rtl?"ArrowRight":"ArrowLeft",c=-1;o.key===a||o.key==="ArrowDown"?c=(s+1)%t.length:o.key===l||o.key==="ArrowUp"?c=(s-1+t.length)%t.length:o.key==="Home"?c=0:o.key==="End"&&(c=t.length-1),!(c<0)&&(o.preventDefault(),n(t[c].dataset.jur,{focus:!0}))})}),r&&(r.on("select",i=>n(i,{tellStage:!1})),r.select(e)),i=>n(i)}function xx(){let r=document.getElementById("rbList");if(!r)return()=>{};let t=[...r.querySelectorAll(".rb__item")],e=document.getElementById("rbSearch"),n=document.getElementById("rbCount"),i=document.getElementById("rbEmpty"),s={region:"all",topic:"all",q:""},o=Rt.data.s;function a(){let c=s.q.toLowerCase().split(/\s+/).filter(Boolean),u=0;t.forEach(f=>{let h=(s.region==="all"||f.dataset.region===s.region)&&(s.topic==="all"||f.dataset.topics.split(" ").includes(s.topic))&&c.every(d=>f.dataset.search.includes(d));f.hidden=!h,h&&u++}),n.textContent=u===1?o.count1:Gf(o.count,{n:u}),i.hidden=u>0,r.hidden=u===0}function l(c,u){s[c]=u,document.querySelectorAll(`[data-${c}]`).forEach(f=>{f.setAttribute("aria-pressed",f.dataset[c]===u?"true":"false")}),a()}return document.querySelectorAll(".rb__filter .chip").forEach(c=>{c.addEventListener("click",()=>{c.dataset.region?l("region",c.dataset.region):l("topic",c.dataset.topic)})}),e.addEventListener("input",()=>{s.q=e.value.trim(),a()}),document.getElementById("rbClear").addEventListener("click",()=>{e.value="",s.q="",l("region","all"),l("topic","all"),e.focus()}),t.forEach(c=>{c.querySelector(".rb__row").addEventListener("click",()=>{xh(c,!c.classList.contains("is-open"),".rb__row",".rb__panel")})}),function(u){let f=document.getElementById(`rule-${u}`);f&&(f.hidden&&(e.value="",s.q="",l("region","all"),l("topic","all")),xh(f,!0,".rb__row",".rb__panel"),dr(f,{keyboard:!0,offset:-110}),f.querySelector(".rb__row").focus({preventScroll:!0}))}}function vx(){let r=document.getElementById("tlTrack"),t=document.getElementById("tlViewport");if(!r||!t)return;let e=Rt.data.s,n=new Date;n.setHours(0,0,0,0);let i=[...r.querySelectorAll(".tl__event")],s=null;i.forEach(u=>{let[f,h,d]=u.dataset.date.split("-").map(Number),g=new Date(f,(h||1)-1,d||1),_=g<n;u.classList.add(_?"is-past":"is-future"),!_&&!s&&(s={ev:u,days:Math.round((g-n)/UT)})});let o=document.createElement("li");if(o.className="tl__now",o.setAttribute("aria-hidden","true"),o.innerHTML='<span class="mono"></span>',o.firstChild.textContent=e.now,s){let u=s.ev.previousElementSibling;r.insertBefore(o,u&&u.classList.contains("tl__year")?u:s.ev),s.ev.classList.add("is-next");let f=document.getElementById("tlNext");document.getElementById("tlNextTitle").textContent=s.ev.querySelector("h3").textContent,document.getElementById("tlNextCount").textContent=s.days===0?e.today:s.days===1?e.inDay:Gf(e.inDays,{n:s.days}),f.hidden=!1}else r.appendChild(o);if(!(!Rt.reduced&&!Rt.touch&&!Rt.small)){requestAnimationFrame(()=>{let u=o.getBoundingClientRect(),f=t.getBoundingClientRect();t.scrollLeft+=Rt.rtl?u.right-(f.right-f.width*.3):u.left-(f.left+f.width*.3)});return}t.classList.add("is-driven"),t.removeAttribute("tabindex");let l=()=>Math.max(0,r.scrollWidth-window.innerWidth),c=jt.to(r,{x:()=>-l()*Rt.dir,ease:"none",scrollTrigger:{trigger:".timeline",start:"top top",end:()=>`+=${l()}`,pin:".tl__pin",scrub:.6,invalidateOnRefresh:!0,anticipatePin:1}});jt.from(i,{autoAlpha:0,y:26,duration:.7,ease:"power3.out",stagger:.05,scrollTrigger:{trigger:".timeline",start:"top 55%",once:!0}}),i.forEach(u=>{u.addEventListener("focusin",()=>{let f=c.scrollTrigger,h=Math.abs(u.offsetLeft-(Rt.rtl?r.scrollWidth-u.offsetWidth:0));window.scrollTo(0,f.start+Math.min(l(),Math.max(0,h-window.innerWidth*.3)))})})}function yx(){let r=[...document.querySelectorAll(".flow__step")],t=[...document.querySelectorAll(".flow__node")],e=document.getElementById("flowLine");if(!r.length||Rt.reduced){r.forEach(a=>a.classList.add("is-on")),t.forEach(a=>a.classList.add("is-on"));return}let n=a=>{r.forEach((l,c)=>l.classList.toggle("is-on",c===a)),t.forEach((l,c)=>l.classList.toggle("is-on",c<=a))};if(r.forEach((a,l)=>{Vt.create({trigger:a,start:"top 62%",end:"bottom 62%",onToggle:c=>{c.isActive&&n(l)}})}),!e)return;let i=document.getElementById("flowFill"),s=document.getElementById("flowPulse"),o=jt.quickSetter(s,"y","px");Vt.create({trigger:"#flowSteps",start:"top 62%",end:"bottom 62%",scrub:.5,onUpdate:a=>{let l=a.progress;o(l*(e.offsetHeight-11)),i.style.transform=`scaleY(${l.toFixed(4)})`}})}function Sx(){if(Rt.reduced)return;let r=[...document.querySelectorAll(".ai__card")];r.forEach((t,e)=>{let n=r[e+1];n&&jt.to(t.querySelector(".ai__inner"),{scale:.94,opacity:.35,ease:"none",scrollTrigger:{trigger:n,start:"top bottom",end:"top top",scrub:!0}})})}function Mx(){let r=document.getElementById("nv");if(!r)return;let t=[...document.querySelectorAll(".nv__res")],e=document.getElementById("nvEmpty"),n=document.getElementById("nvAfter"),i=document.getElementById("nvCta");function s(){let o=r.elements.model.value,a=[...r.querySelectorAll('input[name="region"]:checked')].map(u=>u.value),l=[];t.forEach(u=>{let f=u.dataset.model===o&&a.includes(u.dataset.region);f&&u.hidden&&l.push(u),u.hidden=!f});let c=!!o&&a.length>0;if(e.hidden=c,n.hidden=!c,l.length&&!Rt.reduced&&jt.fromTo(l,{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.45,ease:"power3.out",stagger:.05,clearProps:"all"}),c){let u=d=>d.nextElementSibling.textContent.trim(),f=u(r.querySelector('input[name="model"]:checked')),h=[...r.querySelectorAll('input[name="region"]:checked')].map(u).join(", ");i.dataset.prefill=`${f}. ${h}.`}}r.addEventListener("change",s),r.addEventListener("submit",o=>o.preventDefault()),i.addEventListener("click",()=>{try{i.dataset.prefill&&sessionStorage.setItem("prefill",i.dataset.prefill)}catch{}}),s()}function bx(){let r=document.getElementById("sigmaPath"),t=document.querySelector(".sigma__map");!r||!t||Rt.reduced||jt.fromTo(r,{drawSVG:"0%"},{drawSVG:"100%",duration:1.8,ease:"power2.inOut",scrollTrigger:{trigger:t,start:"top 42%",once:!0}})}var Wo=function(r,t){let i=r,s=pl[t],o=null,a=0,l=null,c=[],u={},f=function(p,y){a=i*4+17,o=(function(M){let b=new Array(M);for(let R=0;R<M;R+=1){b[R]=new Array(M);for(let P=0;P<M;P+=1)b[R][P]=null}return b})(a),h(0,0),h(a-7,0),h(0,a-7),_(),g(),x(p,y),i>=7&&m(p),l==null&&(l=S(i,s,c)),v(l,y)},h=function(p,y){for(let M=-1;M<=7;M+=1)if(!(p+M<=-1||a<=p+M))for(let b=-1;b<=7;b+=1)y+b<=-1||a<=y+b||(0<=M&&M<=6&&(b==0||b==6)||0<=b&&b<=6&&(M==0||M==6)||2<=M&&M<=4&&2<=b&&b<=4?o[p+M][y+b]=!0:o[p+M][y+b]=!1)},d=function(){let p=0,y=0;for(let M=0;M<8;M+=1){f(!0,M);let b=is.getLostPoint(u);(M==0||p>b)&&(p=b,y=M)}return y},g=function(){for(let p=8;p<a-8;p+=1)o[p][6]==null&&(o[p][6]=p%2==0);for(let p=8;p<a-8;p+=1)o[6][p]==null&&(o[6][p]=p%2==0)},_=function(){let p=is.getPatternPosition(i);for(let y=0;y<p.length;y+=1)for(let M=0;M<p.length;M+=1){let b=p[y],R=p[M];if(o[b][R]==null)for(let P=-2;P<=2;P+=1)for(let U=-2;U<=2;U+=1)P==-2||P==2||U==-2||U==2||P==0&&U==0?o[b+P][R+U]=!0:o[b+P][R+U]=!1}},m=function(p){let y=is.getBCHTypeNumber(i);for(let M=0;M<18;M+=1){let b=!p&&(y>>M&1)==1;o[Math.floor(M/3)][M%3+a-8-3]=b}for(let M=0;M<18;M+=1){let b=!p&&(y>>M&1)==1;o[M%3+a-8-3][Math.floor(M/3)]=b}},x=function(p,y){let M=s<<3|y,b=is.getBCHTypeInfo(M);for(let R=0;R<15;R+=1){let P=!p&&(b>>R&1)==1;R<6?o[R][8]=P:R<8?o[R+1][8]=P:o[a-15+R][8]=P}for(let R=0;R<15;R+=1){let P=!p&&(b>>R&1)==1;R<8?o[8][a-R-1]=P:R<9?o[8][15-R-1+1]=P:o[8][15-R-1]=P}o[a-8][8]=!p},v=function(p,y){let M=-1,b=a-1,R=7,P=0,U=is.getMaskFunction(y);for(let D=a-1;D>0;D-=2)for(D==6&&(D-=1);;){for(let z=0;z<2;z+=1)if(o[b][D-z]==null){let G=!1;P<p.length&&(G=(p[P]>>>R&1)==1),U(b,D-z)&&(G=!G),o[b][D-z]=G,R-=1,R==-1&&(P+=1,R=7)}if(b+=M,b<0||a<=b){b-=M,M=-M;break}}},T=function(p,y){let M=0,b=0,R=0,P=new Array(y.length),U=new Array(y.length);for(let O=0;O<y.length;O+=1){let Z=y[O].dataCount,H=y[O].totalCount-Z;b=Math.max(b,Z),R=Math.max(R,H),P[O]=new Array(Z);for(let yt=0;yt<P[O].length;yt+=1)P[O][yt]=255&p.getBuffer()[yt+M];M+=Z;let I=is.getErrorCorrectPolynomial(H),xt=ml(P[O],I.getLength()-1).mod(I);U[O]=new Array(I.getLength()-1);for(let yt=0;yt<U[O].length;yt+=1){let J=yt+xt.getLength()-U[O].length;U[O][yt]=J>=0?xt.getAt(J):0}}let D=0;for(let O=0;O<y.length;O+=1)D+=y[O].totalCount;let z=new Array(D),G=0;for(let O=0;O<b;O+=1)for(let Z=0;Z<y.length;Z+=1)O<P[Z].length&&(z[G]=P[Z][O],G+=1);for(let O=0;O<R;O+=1)for(let Z=0;Z<y.length;Z+=1)O<U[Z].length&&(z[G]=U[Z][O],G+=1);return z},S=function(p,y,M){let b=wx.getRSBlocks(p,y),R=Tx();for(let U=0;U<M.length;U+=1){let D=M[U];R.put(D.getMode(),4),R.put(D.getLength(),is.getLengthInBits(D.getMode(),p)),D.write(R)}let P=0;for(let U=0;U<b.length;U+=1)P+=b[U].dataCount;if(R.getLengthInBits()>P*8)throw"code length overflow. ("+R.getLengthInBits()+">"+P*8+")";for(R.getLengthInBits()+4<=P*8&&R.put(0,4);R.getLengthInBits()%8!=0;)R.putBit(!1);for(;!(R.getLengthInBits()>=P*8||(R.put(236,8),R.getLengthInBits()>=P*8));)R.put(17,8);return T(R,b)};u.addData=function(p,y){y=y||"Byte";let M=null;switch(y){case"Numeric":M=FT(p);break;case"Alphanumeric":M=BT(p);break;case"Byte":M=zT(p);break;case"Kanji":M=kT(p);break;default:throw"mode:"+y}c.push(M),l=null},u.isDark=function(p,y){if(p<0||a<=p||y<0||a<=y)throw p+","+y;return o[p][y]},u.getModuleCount=function(){return a},u.make=function(){if(i<1){let p=1;for(;p<40;p++){let y=wx.getRSBlocks(p,s),M=Tx();for(let R=0;R<c.length;R++){let P=c[R];M.put(P.getMode(),4),M.put(P.getLength(),is.getLengthInBits(P.getMode(),p)),P.write(M)}let b=0;for(let R=0;R<y.length;R++)b+=y[R].dataCount;if(M.getLengthInBits()<=b*8)break}i=p}f(!1,d())},u.createTableTag=function(p,y){p=p||2,y=typeof y>"u"?p*4:y;let M="";M+='<table style="',M+=" border-width: 0px; border-style: none;",M+=" border-collapse: collapse;",M+=" padding: 0px; margin: "+y+"px;",M+='">',M+="<tbody>";for(let b=0;b<u.getModuleCount();b+=1){M+="<tr>";for(let R=0;R<u.getModuleCount();R+=1)M+='<td style="',M+=" border-width: 0px; border-style: none;",M+=" border-collapse: collapse;",M+=" padding: 0px; margin: 0px;",M+=" width: "+p+"px;",M+=" height: "+p+"px;",M+=" background-color: ",M+=u.isDark(b,R)?"#000000":"#ffffff",M+=";",M+='"/>';M+="</tr>"}return M+="</tbody>",M+="</table>",M},u.createSvgTag=function(p,y,M,b){let R={};typeof arguments[0]=="object"&&(R=arguments[0],p=R.cellSize,y=R.margin,M=R.alt,b=R.title),p=p||2,y=typeof y>"u"?p*4:y,M=typeof M=="string"?{text:M}:M||{},M.text=M.text||null,M.id=M.text?M.id||"qrcode-description":null,b=typeof b=="string"?{text:b}:b||{},b.text=b.text||null,b.id=b.text?b.id||"qrcode-title":null;let P=u.getModuleCount()*p+y*2,U,D,z,G,O="",Z;for(Z="l"+p+",0 0,"+p+" -"+p+",0 0,-"+p+"z ",O+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',O+=R.scalable?"":' width="'+P+'px" height="'+P+'px"',O+=' viewBox="0 0 '+P+" "+P+'" ',O+=' preserveAspectRatio="xMinYMin meet"',O+=b.text||M.text?' role="img" aria-labelledby="'+w([b.id,M.id].join(" ").trim())+'"':"",O+=">",O+=b.text?'<title id="'+w(b.id)+'">'+w(b.text)+"</title>":"",O+=M.text?'<description id="'+w(M.id)+'">'+w(M.text)+"</description>":"",O+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',O+='<path d="',z=0;z<u.getModuleCount();z+=1)for(G=z*p+y,U=0;U<u.getModuleCount();U+=1)u.isDark(z,U)&&(D=U*p+y,O+="M"+D+","+G+Z);return O+='" stroke="transparent" fill="black"/>',O+="</svg>",O},u.createDataURL=function(p,y){p=p||2,y=typeof y>"u"?p*4:y;let M=u.getModuleCount()*p+y*2,b=y,R=M-y;return WT(M,M,function(P,U){if(b<=P&&P<R&&b<=U&&U<R){let D=Math.floor((P-b)/p),z=Math.floor((U-b)/p);return u.isDark(z,D)?0:1}else return 1})},u.createImgTag=function(p,y,M){p=p||2,y=typeof y>"u"?p*4:y;let b=u.getModuleCount()*p+y*2,R="";return R+="<img",R+=' src="',R+=u.createDataURL(p,y),R+='"',R+=' width="',R+=b,R+='"',R+=' height="',R+=b,R+='"',M&&(R+=' alt="',R+=w(M),R+='"'),R+="/>",R};let w=function(p){let y="";for(let M=0;M<p.length;M+=1){let b=p.charAt(M);switch(b){case"<":y+="&lt;";break;case">":y+="&gt;";break;case"&":y+="&amp;";break;case'"':y+="&quot;";break;default:y+=b;break}}return y},C=function(p){p=typeof p>"u"?2:p;let M=u.getModuleCount()*1+p*2,b=p,R=M-p,P,U,D,z,G,O={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},Z={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},H="";for(P=0;P<M;P+=2){for(D=Math.floor((P-b)/1),z=Math.floor((P+1-b)/1),U=0;U<M;U+=1)G="\u2588",b<=U&&U<R&&b<=P&&P<R&&u.isDark(D,Math.floor((U-b)/1))&&(G=" "),b<=U&&U<R&&b<=P+1&&P+1<R&&u.isDark(z,Math.floor((U-b)/1))?G+=" ":G+="\u2588",H+=p<1&&P+1>=R?Z[G]:O[G];H+=`
`}return M%2&&p>0?H.substring(0,H.length-M-1)+Array(M+1).join("\u2580"):H.substring(0,H.length-1)};return u.createASCII=function(p,y){if(p=p||1,p<2)return C(y);p-=1,y=typeof y>"u"?p*2:y;let M=u.getModuleCount()*p+y*2,b=y,R=M-y,P,U,D,z,G=Array(p+1).join("\u2588\u2588"),O=Array(p+1).join("  "),Z="",H="";for(P=0;P<M;P+=1){for(D=Math.floor((P-b)/p),H="",U=0;U<M;U+=1)z=1,b<=U&&U<R&&b<=P&&P<R&&u.isDark(D,Math.floor((U-b)/p))&&(z=0),H+=z?G:O;for(D=0;D<p;D+=1)Z+=H+`
`}return Z.substring(0,Z.length-1)},u.renderTo2dContext=function(p,y){y=y||2;let M=u.getModuleCount();for(let b=0;b<M;b++)for(let R=0;R<M;R++)p.fillStyle=u.isDark(b,R)?"black":"white",p.fillRect(R*y,b*y,y,y)},u};Wo.stringToBytes=function(r){let t=[];for(let e=0;e<r.length;e+=1){let n=r.charCodeAt(e);t.push(n&255)}return t};Wo.createStringToBytes=function(r,t){let e=(function(){let i=VT(r),s=function(){let l=i.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=i.read();if(l==-1)break;let c=s(),u=s(),f=s(),h=String.fromCharCode(l<<8|c),d=u<<8|f;a[h]=d,o+=1}if(o!=t)throw o+" != "+t;return a})(),n=63;return function(i){let s=[];for(let o=0;o<i.length;o+=1){let a=i.charCodeAt(o);if(a<128)s.push(a);else{let l=e[i.charAt(o)];typeof l=="number"?(l&255)==l?s.push(l):(s.push(l>>>8),s.push(l&255)):s.push(n)}}return s}};var In={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},pl={L:1,M:0,Q:3,H:2},ns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},is=(function(){let r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,e=7973,n=21522,i={},s=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return i.getBCHTypeInfo=function(o){let a=o<<10;for(;s(a)-s(t)>=0;)a^=t<<s(a)-s(t);return(o<<10|a)^n},i.getBCHTypeNumber=function(o){let a=o<<12;for(;s(a)-s(e)>=0;)a^=e<<s(a)-s(e);return o<<12|a},i.getPatternPosition=function(o){return r[o-1]},i.getMaskFunction=function(o){switch(o){case ns.PATTERN000:return function(a,l){return(a+l)%2==0};case ns.PATTERN001:return function(a,l){return a%2==0};case ns.PATTERN010:return function(a,l){return l%3==0};case ns.PATTERN011:return function(a,l){return(a+l)%3==0};case ns.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case ns.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case ns.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case ns.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},i.getErrorCorrectPolynomial=function(o){let a=ml([1],0);for(let l=0;l<o;l+=1)a=a.multiply(ml([1,rs.gexp(l)],0));return a},i.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case In.MODE_NUMBER:return 10;case In.MODE_ALPHA_NUM:return 9;case In.MODE_8BIT_BYTE:return 8;case In.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case In.MODE_NUMBER:return 12;case In.MODE_ALPHA_NUM:return 11;case In.MODE_8BIT_BYTE:return 16;case In.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case In.MODE_NUMBER:return 14;case In.MODE_ALPHA_NUM:return 13;case In.MODE_8BIT_BYTE:return 16;case In.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},i.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let f=0;f<a;f+=1)for(let h=0;h<a;h+=1){let d=0,g=o.isDark(f,h);for(let _=-1;_<=1;_+=1)if(!(f+_<0||a<=f+_))for(let m=-1;m<=1;m+=1)h+m<0||a<=h+m||_==0&&m==0||g==o.isDark(f+_,h+m)&&(d+=1);d>5&&(l+=3+d-5)}for(let f=0;f<a-1;f+=1)for(let h=0;h<a-1;h+=1){let d=0;o.isDark(f,h)&&(d+=1),o.isDark(f+1,h)&&(d+=1),o.isDark(f,h+1)&&(d+=1),o.isDark(f+1,h+1)&&(d+=1),(d==0||d==4)&&(l+=3)}for(let f=0;f<a;f+=1)for(let h=0;h<a-6;h+=1)o.isDark(f,h)&&!o.isDark(f,h+1)&&o.isDark(f,h+2)&&o.isDark(f,h+3)&&o.isDark(f,h+4)&&!o.isDark(f,h+5)&&o.isDark(f,h+6)&&(l+=40);for(let f=0;f<a;f+=1)for(let h=0;h<a-6;h+=1)o.isDark(h,f)&&!o.isDark(h+1,f)&&o.isDark(h+2,f)&&o.isDark(h+3,f)&&o.isDark(h+4,f)&&!o.isDark(h+5,f)&&o.isDark(h+6,f)&&(l+=40);let c=0;for(let f=0;f<a;f+=1)for(let h=0;h<a;h+=1)o.isDark(h,f)&&(c+=1);let u=Math.abs(100*c/a/a-50)/5;return l+=u*10,l},i})(),rs=(function(){let r=new Array(256),t=new Array(256);for(let n=0;n<8;n+=1)r[n]=1<<n;for(let n=8;n<256;n+=1)r[n]=r[n-4]^r[n-5]^r[n-6]^r[n-8];for(let n=0;n<255;n+=1)t[r[n]]=n;let e={};return e.glog=function(n){if(n<1)throw"glog("+n+")";return t[n]},e.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return r[n]},e})(),ml=function(r,t){if(typeof r.length>"u")throw r.length+"/"+t;let e=(function(){let i=0;for(;i<r.length&&r[i]==0;)i+=1;let s=new Array(r.length-i+t);for(let o=0;o<r.length-i;o+=1)s[o]=r[o+i];return s})(),n={};return n.getAt=function(i){return e[i]},n.getLength=function(){return e.length},n.multiply=function(i){let s=new Array(n.getLength()+i.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<i.getLength();a+=1)s[o+a]^=rs.gexp(rs.glog(n.getAt(o))+rs.glog(i.getAt(a)));return ml(s,0)},n.mod=function(i){if(n.getLength()-i.getLength()<0)return n;let s=rs.glog(n.getAt(0))-rs.glog(i.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<i.getLength();a+=1)o[a]^=rs.gexp(rs.glog(i.getAt(a))+s);return ml(o,0).mod(i)},n},wx=(function(){let r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(i,s){let o={};return o.totalCount=i,o.dataCount=s,o},e={},n=function(i,s){switch(s){case pl.L:return r[(i-1)*4+0];case pl.M:return r[(i-1)*4+1];case pl.Q:return r[(i-1)*4+2];case pl.H:return r[(i-1)*4+3];default:return}};return e.getRSBlocks=function(i,s){let o=n(i,s);if(typeof o>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+s;let a=o.length/3,l=[];for(let c=0;c<a;c+=1){let u=o[c*3+0],f=o[c*3+1],h=o[c*3+2];for(let d=0;d<u;d+=1)l.push(t(f,h))}return l},e})(),Tx=function(){let r=[],t=0,e={};return e.getBuffer=function(){return r},e.getAt=function(n){let i=Math.floor(n/8);return(r[i]>>>7-n%8&1)==1},e.put=function(n,i){for(let s=0;s<i;s+=1)e.putBit((n>>>i-s-1&1)==1)},e.getLengthInBits=function(){return t},e.putBit=function(n){let i=Math.floor(t/8);r.length<=i&&r.push(0),n&&(r[i]|=128>>>t%8),t+=1},e},FT=function(r){let t=In.MODE_NUMBER,e=r,n={};n.getMode=function(){return t},n.getLength=function(o){return e.length},n.write=function(o){let a=e,l=0;for(;l+2<a.length;)o.put(i(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(i(a.substring(l,l+1)),4):a.length-l==2&&o.put(i(a.substring(l,l+2)),7))};let i=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+s(o.charAt(l));return a},s=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},BT=function(r){let t=In.MODE_ALPHA_NUM,e=r,n={};n.getMode=function(){return t},n.getLength=function(s){return e.length},n.write=function(s){let o=e,a=0;for(;a+1<o.length;)s.put(i(o.charAt(a))*45+i(o.charAt(a+1)),11),a+=2;a<o.length&&s.put(i(o.charAt(a)),6)};let i=function(s){if("0"<=s&&s<="9")return s.charCodeAt(0)-48;if("A"<=s&&s<="Z")return s.charCodeAt(0)-65+10;switch(s){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+s}};return n},zT=function(r){let t=In.MODE_8BIT_BYTE,e=r,n=Wo.stringToBytes(r),i={};return i.getMode=function(){return t},i.getLength=function(s){return n.length},i.write=function(s){for(let o=0;o<n.length;o+=1)s.put(n[o],8)},i},kT=function(r){let t=In.MODE_KANJI,e=r,n=Wo.stringToBytes;(function(o,a){let l=n(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let i=n(r),s={};return s.getMode=function(){return t},s.getLength=function(o){return~~(i.length/2)},s.write=function(o){let a=i,l=0;for(;l+1<a.length;){let c=(255&a[l])<<8|255&a[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},s},Ex=function(){let r=[],t={};return t.writeByte=function(e){r.push(e&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(let s=0;s<i;s+=1)t.writeByte(e[s+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return r},t.toString=function(){let e="";e+="[";for(let n=0;n<r.length;n+=1)n>0&&(e+=","),e+=r[n];return e+="]",e},t},GT=function(){let r=0,t=0,e=0,n="",i={},s=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return i.writeByte=function(a){for(r=r<<8|a&255,t+=8,e+=1;t>=6;)s(r>>>t-6),t-=6},i.flush=function(){if(t>0&&(s(r<<6-t),r=0,t=0),e%3!=0){let a=3-e%3;for(let l=0;l<a;l+=1)n+="="}},i.toString=function(){return n},i},VT=function(r){let t=r,e=0,n=0,i=0,s={};s.read=function(){for(;i<8;){if(e>=t.length){if(i==0)return-1;throw"unexpected end of file./"+i}let l=t.charAt(e);if(e+=1,l=="=")return i=0,-1;if(l.match(/^\s$/))continue;n=n<<6|o(l.charCodeAt(0)),i+=6}let a=n>>>i-8&255;return i-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return s},HT=function(r,t){let e=r,n=t,i=new Array(r*t),s={};s.setPixel=function(c,u,f){i[u*e+c]=f},s.write=function(c){c.writeString("GIF87a"),c.writeShort(e),c.writeShort(n),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(e),c.writeShort(n),c.writeByte(0);let u=2,f=a(u);c.writeByte(u);let h=0;for(;f.length-h>255;)c.writeByte(255),c.writeBytes(f,h,255),h+=255;c.writeByte(f.length-h),c.writeBytes(f,h,f.length-h),c.writeByte(0),c.writeString(";")};let o=function(c){let u=c,f=0,h=0,d={};return d.write=function(g,_){if(g>>>_)throw"length over";for(;f+_>=8;)u.writeByte(255&(g<<f|h)),_-=8-f,g>>>=8-f,h=0,f=0;h=g<<f|h,f=f+_},d.flush=function(){f>0&&u.writeByte(h)},d},a=function(c){let u=1<<c,f=(1<<c)+1,h=c+1,d=l();for(let v=0;v<u;v+=1)d.add(String.fromCharCode(v));d.add(String.fromCharCode(u)),d.add(String.fromCharCode(f));let g=Ex(),_=o(g);_.write(u,h);let m=0,x=String.fromCharCode(i[m]);for(m+=1;m<i.length;){let v=String.fromCharCode(i[m]);m+=1,d.contains(x+v)?x=x+v:(_.write(d.indexOf(x),h),d.size()<4095&&(d.size()==1<<h&&(h+=1),d.add(x+v)),x=v)}return _.write(d.indexOf(x),h),_.write(f,h),_.flush(),g.toByteArray()},l=function(){let c={},u=0,f={};return f.add=function(h){if(f.contains(h))throw"dup key:"+h;c[h]=u,u+=1},f.size=function(){return u},f.indexOf=function(h){return c[h]},f.contains=function(h){return typeof c[h]<"u"},f};return s},WT=function(r,t,e){let n=HT(r,t);for(let a=0;a<t;a+=1)for(let l=0;l<r;l+=1)n.setPixel(l,a,e(l,a));let i=Ex();n.write(i);let s=GT(),o=i.toByteArray();for(let a=0;a<o.length;a+=1)s.writeByte(o[a]);return s.flush(),"data:image/gif;base64,"+s},Ax=Wo,q2=Wo.stringToBytes;var Xo=r=>String(r||"").replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;");function Rx({compact:r=!1}={}){let t=Rt.data.vcard||{},e=String(t.fn||"").trim().split(/\s+/),n=e.length>1?e.pop():"";return["BEGIN:VCARD","VERSION:3.0",`N:${Xo(n)};${Xo(e.join(" "))};;;`,`FN:${Xo(t.fn)}`,t.org&&`ORG:${Xo(t.org)}`,t.title&&`TITLE:${Xo(t.title)}`,t.email&&`EMAIL;TYPE=INTERNET,WORK:${t.email}`,t.tel&&`TEL;TYPE=WORK,VOICE:${t.tel}`,!r&&t.adr&&`ADR;TYPE=WORK:;;${Xo(t.adr)};;;;`,t.url&&`URL:${t.url}`,"END:VCARD"].filter(Boolean).join(`\r
`)}function dp(){let r=new Blob([Rx()],{type:"text/vcard;charset=utf-8"}),t=URL.createObjectURL(r),e=document.createElement("a");e.href=t,e.download=`${(Rt.data.vcard?.fn||"contact").replace(/\s+/g,"-").toLowerCase()}.vcf`,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),2e3),dl(Rt.data.s.card)}function XT(r){let t=Ax(0,"M");t.addData(Rx({compact:!0})),t.make();let e=t.getModuleCount(),n="";for(let i=0;i<e;i++)for(let s=0;s<e;s++)t.isDark(i,s)&&(n+=`M${s} ${i}h1v1h-1z`);r.innerHTML=`<svg viewBox="0 0 ${e} ${e}" shape-rendering="crispEdges" aria-hidden="true" focusable="false"><path fill="currentColor" d="${n}"/></svg>`}function Cx(r){let t=Math.min(window.devicePixelRatio||1,2),e=r.clientWidth,n=r.clientHeight;if(!e||!n)return;r.width=Math.round(e*t),r.height=Math.round(n*t);let i=r.getContext("2d");i.scale(t,t);let s=getComputedStyle(document.documentElement),o=s.getPropertyValue("--gl-paper").trim()||"#ebe7df",a=s.getPropertyValue("--gl-seal").trim()||"#e9523f";i.lineWidth=.6,i.strokeStyle=o,i.globalAlpha=.07;for(let h=n*.46;h<n+10;h+=5){i.beginPath();for(let d=0;d<=e;d+=4){let g=h+Math.sin(d*.028+h*.05)*5+Math.sin(d*.011-h*.02)*7;d===0?i.moveTo(d,g):i.lineTo(d,g)}i.stroke()}let l=e*.62,c=n*.3,u=Math.min(e,n)*.46,f=(h,d,g,_,m,x)=>{i.strokeStyle=m,i.globalAlpha=x;for(let v=0;v<_;v++){i.beginPath();for(let T=0;T<=420;T++){let S=T/420*Math.PI*2,w=(h+d*Math.cos(g*S+Math.PI*2*v/_))*u,C=l+w*Math.cos(S),p=c+w*Math.sin(S);T===0?i.moveTo(C,p):i.lineTo(C,p)}i.closePath(),i.stroke()}};f(.2,.08,5,5,o,.3),f(.42,.075,8,6,o,.26),f(.63,.07,12,7,a,.55),f(.83,.06,18,8,o,.22),f(.98,.035,30,6,o,.18),i.globalAlpha=1}function Px(){document.querySelectorAll("[data-vcard]").forEach(a=>a.addEventListener("click",dp));let r=document.getElementById("passQr");r&&XT(r);let t=document.getElementById("passArt"),e=document.getElementById("pass");if(!t||!e)return;if(Cx(t),"ResizeObserver"in window){let a=t.clientWidth;new ResizeObserver(()=>{Math.abs(t.clientWidth-a)>1&&(a=t.clientWidth,Cx(t))}).observe(t)}if(Rt.reduced||Rt.touch)return;let n=e.querySelector(".pass__sheen"),i=jt.quickTo(e,"rotationX",{duration:.6,ease:"power3.out"}),s=jt.quickTo(e,"rotationY",{duration:.6,ease:"power3.out"}),o=e.parentElement;o.addEventListener("pointermove",a=>{let l=e.getBoundingClientRect(),c=(a.clientX-l.left)/l.width,u=(a.clientY-l.top)/l.height;s((c-.5)*16),i(-(u-.5)*12),n.style.setProperty("--mx",`${(c*100).toFixed(1)}%`),n.style.setProperty("--my",`${(u*100).toFixed(1)}%`)}),o.addEventListener("pointerleave",()=>{i(0),s(0)})}var qT=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;function Lx(){let r=document.getElementById("cform");r&&YT(r);let t=document.getElementById("mapLoad");t&&t.addEventListener("click",()=>ZT(t))}function YT(r){let t=Rt.data.s,e=document.getElementById("cfStatus"),n=document.getElementById("cfSend"),i=[...r.querySelectorAll(".field__input")];try{let o=sessionStorage.getItem("prefill"),a=document.getElementById("cf-message");o&&a&&!a.value.trim()&&(a.value=o),sessionStorage.removeItem("prefill")}catch{}function s(o){let a=o.closest("[data-field]"),l=a.querySelector(".field__error"),c=o.value.trim(),u="";return o.required&&!c?u=t.errRequired:o.type==="email"&&c&&!qT.test(c)&&(u=t.errEmail),a.classList.toggle("has-error",!!u),l.textContent=u,u?o.setAttribute("aria-invalid","true"):o.removeAttribute("aria-invalid"),!u}i.forEach(o=>{o.addEventListener("blur",()=>s(o)),o.addEventListener("input",()=>{o.closest("[data-field]").classList.contains("has-error")&&s(o)})}),r.addEventListener("submit",async o=>{o.preventDefault();let a=i.filter(h=>!s(h));if(a.length){a[0].focus();return}let l=Object.fromEntries(new FormData(r).entries());if(e.className="cform__status",e.textContent="",Rt.data.formEndpoint){n.classList.add("is-busy"),n.setAttribute("aria-busy","true");try{let h=await fetch(Rt.data.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l)});if(!h.ok)throw new Error(String(h.status));r.reset(),e.classList.add("is-ok"),e.textContent=t.sentRemote}catch{e.classList.add("is-err"),e.textContent=t.failed}finally{n.classList.remove("is-busy"),n.removeAttribute("aria-busy")}return}let c=t.labels,u=[`${c.name}: ${l.name}`,l.company&&`${c.company}: ${l.company}`,`${c.email}: ${l.email}`,`${c.topic}: ${l.topic}`,"",l.message].filter(h=>h!==!1&&h!==void 0&&h!==null).join(`
`),f=`mailto:${Rt.data.email}?subject=${encodeURIComponent(`${t.subject}: ${l.topic}`)}&body=${encodeURIComponent(u)}`;window.location.href=f,e.classList.add("is-ok"),e.textContent=t.sent})}function Ix(r,t){return new Promise((e,n)=>{let i=document.createElement(r);Object.assign(i,t),i.onload=e,i.onerror=n,document.head.appendChild(i)})}async function ZT(r){let t=document.getElementById("map"),e=document.getElementById("mapCover"),n=Number(t.dataset.lat),i=Number(t.dataset.lon);r.classList.add("is-busy"),r.setAttribute("aria-busy","true");try{await Promise.all([Ix("link",{rel:"stylesheet",href:"assets/vendor/maplibre-gl.css"}),Ix("script",{src:"assets/vendor/maplibre-gl.js"})]);let{maplibregl:s}=window,o=document.createElement("div");t.appendChild(o);let a=new s.Map({container:o,style:"https://tiles.openfreemap.org/styles/dark",center:[i,n],zoom:15.4,pitch:Rt.reduced?0:52,bearing:Rt.reduced?0:-18,cooperativeGestures:!0,attributionControl:{compact:!0}});a.addControl(new s.NavigationControl({showCompass:!1}),Rt.rtl?"top-left":"top-right");let l=document.createElement("div");l.className="mappin",new s.Marker({element:l}).setLngLat([i,n]).addTo(a),a.once("load",()=>{e.remove(),Rt.reduced||a.easeTo({bearing:12,duration:9e3,easing:c=>1-Math.pow(1-c,3)})}),a.on("error",()=>{})}catch{r.classList.remove("is-busy"),r.removeAttribute("aria-busy");let o=e.querySelector(".contact__mapnote");o&&(o.textContent=Rt.data.s.mapFail)}}jt.registerPlugin(Vt,Es,zf);function JT({selectJurisdiction:r,openRule:t}){let e=decodeURIComponent(window.location.hash.slice(1));if(!e){Xg();return}if(e.startsWith("rule-")){t(e.slice(5));return}if((Rt.data.atlas||[]).some(i=>i.id===e)){r(e);return}let n=document.getElementById(e);n&&dr(n,{keyboard:!0})}function Dx(){let{root:r}=Rt;Rt.reduced||r.classList.add("anim"),window.addEventListener("error",()=>r.classList.remove("anim"),{once:!0}),"scrollRestoration"in history&&(history.scrollRestoration="manual"),Ye("scroll",zg),Ye("pages",Wg);let t=Ye("stage",()=>ox(document.getElementById("gl"),Rt))||null;t||r.classList.add("no-gl"),Ye("dialogs",lx),Ye("nav",cx),Ye("a11y",ux),Ye("practice",gx);let e=Ye("atlas",()=>_x(t))||(()=>{}),n=Ye("rulebook",xx)||(()=>{});Ye("timeline",vx),Ye("flow",yx),Ye("ai",Sx),Ye("navigator",Mx),Ye("sigma",bx),Ye("card",Px),Ye("contact",Lx),Ye("palette",()=>hx({selectJurisdiction:e,openRule:n,downloadCard:dp}));let i=document.fonts?document.fonts.ready:Promise.resolve(),s=Promise.race([Promise.all([i,t?t.ready:null]),dc(Rt.arriving?1600:4500)]);fx(s,()=>{Ye("manifesto",mx),Ye("reveals",px),Ye("hero",dx),t&&t.intro(Rt.arriving?1.4:void 0),Vt.refresh(),Ye("hash",()=>JT({selectJurisdiction:e,openRule:n}))})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Dx):Dx();})();
/*! For license information please see app.js.LEGAL.txt */
