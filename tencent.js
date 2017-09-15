window={};navigator={};RSA=function(){function t(t,e){return new r(t,e)}
function e(t,e){if(e<t.length+11)
return uv_alert("Message too long for RSA"),null;for(var i=new Array,n=t.length-1;n>=0&&e>0;){var o=t.charCodeAt(n--);i[--e]=o}
i[--e]=0;for(var p=new Y,s=new Array;e>2;){for(s[0]=0;0==s[0];)
p.nextBytes(s);i[--e]=s[0]}
return i[--e]=2,i[--e]=0,new r(i)}
function i(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}
function n(e,i){null!=e&&null!=i&&e.length>0&&i.length>0?(this.n=t(e,16),this.e=parseInt(i,16)):uv_alert("Invalid RSA public key")}
function o(t){return t.modPowInt(this.e,this.n)}
function p(t){var i=e(t,this.n.bitLength()+7>>3);if(null==i)
return null;var n=this.doPublic(i);if(null==n)
return null;var o=n.toString(16);return 0==(1&o.length)?o:"0"+o}
function r(t,e,i){null!=t&&("number"==typeof t?this.fromNumber(t,e,i):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}
function s(){return new r(null)}
function l(t,e,i,n,o,p){for(;--p>=0;){var r=e*this[t++]+i[n]+o;o=Math.floor(r/67108864),i[n++]=67108863&r}
return o}
function a(t,e,i,n,o,p){for(var r=32767&e,s=e>>15;--p>=0;){var l=32767&this[t],a=this[t++]>>15,c=s*l+a*r;l=r*l+((32767&c)<<15)+i[n]+(1073741823&o),o=(l>>>30)+(c>>>15)+s*a+(o>>>30),i[n++]=1073741823&l}
return o}
function c(t,e,i,n,o,p){for(var r=16383&e,s=e>>14;--p>=0;){var l=16383&this[t],a=this[t++]>>14,c=s*l+a*r;l=r*l+((16383&c)<<14)+i[n]+o,o=(l>>28)+(c>>14)+s*a,i[n++]=268435455&l}
return o}
function u(t){return ut.charAt(t)}
function g(t,e){var i=gt[t.charCodeAt(e)];return null==i?-1:i}
function d(t){for(var e=this.t-1;e>=0;--e)
t[e]=this[e];t.t=this.t,t.s=this.s}
function h(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+DV:this.t=0}
function f(t){var e=s();return e.fromInt(t),e}
function m(t,e){var i;if(16==e)
i=4;else if(8==e)
i=3;else if(256==e)
i=8;else if(2==e)
i=1;else if(32==e)
i=5;else{if(4!=e)
return void this.fromRadix(t,e);i=2}
this.t=0,this.s=0;for(var n=t.length,o=!1,p=0;--n>=0;){var s=8==i?255&t[n]:g(t,n);0>s?"-"==t.charAt(n)&&(o=!0):(o=!1,0==p?this[this.t++]=s:p+i>this.DB?(this[this.t-1]|=(s&(1<<this.DB-p)-1)<<p,this[this.t++]=s>>this.DB-p):this[this.t-1]|=s<<p,p+=i,p>=this.DB&&(p-=this.DB))}
8==i&&0!=(128&t[0])&&(this.s=-1,p>0&&(this[this.t-1]|=(1<<this.DB-p)-1<<p)),this.clamp(),o&&r.ZERO.subTo(this,this)}
function _(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)
--this.t}
function $(t){if(this.s<0)
return"-"+this.negate().toString(t);var e;if(16==t)
e=4;else if(8==t)
e=3;else if(2==t)
e=1;else if(32==t)
e=5;else{if(4!=t)
return this.toRadix(t);e=2}
var i,n=(1<<e)-1,o=!1,p="",r=this.t,s=this.DB-r*this.DB%e;if(r-->0)
for(s<this.DB&&(i=this[r]>>s)>0&&(o=!0,p=u(i));r>=0;)
e>s?(i=(this[r]&(1<<s)-1)<<e-s,i|=this[--r]>>(s+=this.DB-e)):(i=this[r]>>(s-=e)&n,0>=s&&(s+=this.DB,--r)),i>0&&(o=!0),o&&(p+=u(i));return o?p:"0"}
function v(){var t=s();return r.ZERO.subTo(this,t),t}
function w(){return this.s<0?this.negate():this}
function y(t){var e=this.s-t.s;if(0!=e)
return e;var i=this.t;if(e=i-t.t,0!=e)
return e;for(;--i>=0;)
if(0!=(e=this[i]-t[i]))
return e;return 0}
function b(t){var e,i=1;return 0!=(e=t>>>16)&&(t=e,i+=16),0!=(e=t>>8)&&(t=e,i+=8),0!=(e=t>>4)&&(t=e,i+=4),0!=(e=t>>2)&&(t=e,i+=2),0!=(e=t>>1)&&(t=e,i+=1),i}
function k(){return this.t<=0?0:this.DB*(this.t-1)+b(this[this.t-1]^this.s&this.DM)}
function q(t,e){var i;for(i=this.t-1;i>=0;--i)
e[i+t]=this[i];for(i=t-1;i>=0;--i)
e[i]=0;e.t=this.t+t,e.s=this.s}
function S(t,e){for(var i=t;i<this.t;++i)
e[i-t]=this[i];e.t=Math.max(this.t-t,0),e.s=this.s}
function T(t,e){var i,n=t%this.DB,o=this.DB-n,p=(1<<o)-1,r=Math.floor(t/this.DB),s=this.s<<n&this.DM;for(i=this.t-1;i>=0;--i)
e[i+r+1]=this[i]>>o|s,s=(this[i]&p)<<n;for(i=r-1;i>=0;--i)
e[i]=0;e[r]=s,e.t=this.t+r+1,e.s=this.s,e.clamp()}
function x(t,e){e.s=this.s;var i=Math.floor(t/this.DB);if(i>=this.t)
return void(e.t=0);var n=t%this.DB,o=this.DB-n,p=(1<<n)-1;e[0]=this[i]>>n;for(var r=i+1;r<this.t;++r)
e[r-i-1]|=(this[r]&p)<<o,e[r-i]=this[r]>>n;n>0&&(e[this.t-i-1]|=(this.s&p)<<o),e.t=this.t-i,e.clamp()}
function C(t,e){for(var i=0,n=0,o=Math.min(t.t,this.t);o>i;)
n+=this[i]-t[i],e[i++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;i<this.t;)
n+=this[i],e[i++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;i<t.t;)
n-=t[i],e[i++]=n&this.DM,n>>=this.DB;n-=t.s}
e.s=0>n?-1:0,-1>n?e[i++]=this.DV+n:n>0&&(e[i++]=n),e.t=i,e.clamp()}
function N(t,e){var i=this.abs(),n=t.abs(),o=i.t;for(e.t=o+n.t;--o>=0;)
e[o]=0;for(o=0;o<n.t;++o)
e[o+i.t]=i.am(0,n[o],e,o,0,i.t);e.s=0,e.clamp(),this.s!=t.s&&r.ZERO.subTo(e,e)}
function E(t){for(var e=this.abs(),i=t.t=2*e.t;--i>=0;)
t[i]=0;for(i=0;i<e.t-1;++i){var n=e.am(i,e[i],t,2*i,0,1);(t[i+e.t]+=e.am(i+1,2*e[i],t,2*i+1,n,e.t-i-1))>=e.DV&&(t[i+e.t]-=e.DV,t[i+e.t+1]=1)}
t.t>0&&(t[t.t-1]+=e.am(i,e[i],t,2*i,0,1)),t.s=0,t.clamp()}
function A(t,e,i){var n=t.abs();if(!(n.t<=0)){var o=this.abs();if(o.t<n.t)
return null!=e&&e.fromInt(0),void(null!=i&&this.copyTo(i));null==i&&(i=s());var p=s(),l=this.s,a=t.s,c=this.DB-b(n[n.t-1]);c>0?(n.lShiftTo(c,p),o.lShiftTo(c,i)):(n.copyTo(p),o.copyTo(i));var u=p.t,g=p[u-1];if(0!=g){var d=g*(1<<this.F1)+(u>1?p[u-2]>>this.F2:0),h=this.FV/d,f=(1<<this.F1)/d,m=1<<this.F2,_=i.t,$=_-u,v=null==e?s():e;for(p.dlShiftTo($,v),i.compareTo(v)>=0&&(i[i.t++]=1,i.subTo(v,i)),r.ONE.dlShiftTo(u,v),v.subTo(p,p);p.t<u;)
p[p.t++]=0;for(;--$>=0;){var w=i[--_]==g?this.DM:Math.floor(i[_]*h+(i[_-1]+m)*f);if((i[_]+=p.am(0,w,i,$,0,u))<w)
for(p.dlShiftTo($,v),i.subTo(v,i);i[_]<--w;)
i.subTo(v,i)}
null!=e&&(i.drShiftTo(u,e),l!=a&&r.ZERO.subTo(e,e)),i.t=u,i.clamp(),c>0&&i.rShiftTo(c,i),0>l&&r.ZERO.subTo(i,i)}}}
function L(t){var e=s();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(r.ZERO)>0&&t.subTo(e,e),e}
function P(t){this.m=t}
function I(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}
function H(t){return t}
function Q(t){t.divRemTo(this.m,null,t)}
function M(t,e,i){t.multiplyTo(e,i),this.reduce(i)}
function D(t,e){t.squareTo(e),this.reduce(e)}
function V(){if(this.t<1)
return 0;var t=this[0];if(0==(1&t))
return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}
function j(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}
function B(t){var e=s();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(r.ZERO)>0&&this.m.subTo(e,e),e}
function U(t){var e=s();return t.copyTo(e),this.reduce(e),e}
function O(t){for(;t.t<=this.mt2;)
t[t.t++]=0;for(var e=0;e<this.m.t;++e){var i=32767&t[e],n=i*this.mpl+((i*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(i=e+this.m.t,t[i]+=this.m.am(0,n,t,e,0,this.m.t);t[i]>=t.DV;)
t[i]-=t.DV,t[++i]++}
t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}
function R(t,e){t.squareTo(e),this.reduce(e)}
function F(t,e,i){t.multiplyTo(e,i),this.reduce(i)}
function z(){return 0==(this.t>0?1&this[0]:this.s)}
function G(t,e){if(t>4294967295||1>t)
return r.ONE;var i=s(),n=s(),o=e.convert(this),p=b(t)-1;for(o.copyTo(i);--p>=0;)
if(e.sqrTo(i,n),(t&1<<p)>0)
e.mulTo(n,o,i);else{var l=i;i=n,n=l}
return e.revert(i)}
function W(t,e){var i;return i=256>t||e.isEven()?new P(e):new j(e),this.exp(t,i)}
function X(t){ht[ft++]^=255&t,ht[ft++]^=t>>8&255,ht[ft++]^=t>>16&255,ht[ft++]^=t>>24&255,ft>=$t&&(ft-=$t)}
function Z(){X((new Date).getTime())}
function K(){if(null==dt){for(Z(),dt=nt(),dt.init(ht),ft=0;ft<ht.length;++ft)
ht[ft]=0;ft=0}
return dt.next()}
function J(t){var e;for(e=0;e<t.length;++e)
t[e]=K()}
function Y(){}
function tt(){this.i=0,this.j=0,this.S=new Array}
function et(t){var e,i,n;for(e=0;256>e;++e)
this.S[e]=e;for(i=0,e=0;256>e;++e)
i=i+this.S[e]+t[e%t.length]&255,n=this.S[e],this.S[e]=this.S[i],this.S[i]=n;this.i=0,this.j=0}
function it(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}
function nt(){return new tt}
function ot(t,e,n){e="e9a815ab9d6e86abbf33a4ac64e9196d5be44a09bd0ed6ae052914e1a865ac8331fed863de8ea697e9a7f63329e5e23cda09c72570f46775b7e39ea9670086f847d3c9c51963b131409b1e04265d9747419c635404ca651bbcbc87f99b8008f7f5824653e3658be4ba73e4480156b390bb73bc1f8b33578e7a4e12440e9396f2552c1aff1c92e797ebacdc37c109ab7bce2367a19c56a033ee04534723cc2558cb27368f5b9d32c04d12dbd86bbd68b1d99b7c349a8453ea75d1b2e94491ab30acf6c46a36a75b721b312bedf4e7aad21e54e9bcbcf8144c79b6e3c05eb4a1547750d224c0085d80e6da3907c3d945051c13c7c1dcefd6520ee8379c4f5231ed",n="10001";var o=new i;return o.setPublic(e,n),o.encrypt(t)}
i.prototype.doPublic=o,i.prototype.setPublic=n,i.prototype.encrypt=p;var pt,rt=0xdeadbeefcafe,st=15715070==(16777215&rt);st&&"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=a,pt=30):st&&"Netscape"!=navigator.appName?(r.prototype.am=l,pt=26):(r.prototype.am=c,pt=28),r.prototype.DB=pt,r.prototype.DM=(1<<pt)-1,r.prototype.DV=1<<pt;var lt=52;r.prototype.FV=Math.pow(2,lt),r.prototype.F1=lt-pt,r.prototype.F2=2*pt-lt;var at,ct,ut="0123456789abcdefghijklmnopqrstuvwxyz",gt=new Array;for(at="0".charCodeAt(0),ct=0;9>=ct;++ct)
gt[at++]=ct;for(at="a".charCodeAt(0),ct=10;36>ct;++ct)
gt[at++]=ct;for(at="A".charCodeAt(0),ct=10;36>ct;++ct)
gt[at++]=ct;P.prototype.convert=I,P.prototype.revert=H,P.prototype.reduce=Q,P.prototype.mulTo=M,P.prototype.sqrTo=D,j.prototype.convert=B,j.prototype.revert=U,j.prototype.reduce=O,j.prototype.mulTo=F,j.prototype.sqrTo=R,r.prototype.copyTo=d,r.prototype.fromInt=h,r.prototype.fromString=m,r.prototype.clamp=_,r.prototype.dlShiftTo=q,r.prototype.drShiftTo=S,r.prototype.lShiftTo=T,r.prototype.rShiftTo=x,r.prototype.subTo=C,r.prototype.multiplyTo=N,r.prototype.squareTo=E,r.prototype.divRemTo=A,r.prototype.invDigit=V,r.prototype.isEven=z,r.prototype.exp=G,r.prototype.toString=$,r.prototype.negate=v,r.prototype.abs=w,r.prototype.compareTo=y,r.prototype.bitLength=k,r.prototype.mod=L,r.prototype.modPowInt=W,r.ZERO=f(0),r.ONE=f(1);var dt,ht,ft;if(null==ht){ht=new Array,ft=0;var mt;if("Netscape"==navigator.appName&&navigator.appVersion<"5"&&window.crypto&&window.crypto.random){var _t=window.crypto.random(32);for(mt=0;mt<_t.length;++mt)
ht[ft++]=255&_t.charCodeAt(mt)}
for(;$t>ft;)
mt=Math.floor(65536*Math.random()),ht[ft++]=mt>>>8,ht[ft++]=255&mt;ft=0,Z()}
Y.prototype.nextBytes=J,tt.prototype.init=et,tt.prototype.next=it;var $t=256;return{rsa_encrypt:ot}}
(),function(t){function e(){return Math.round(4294967295*Math.random())}
function i(t,e,i){(!i||i>4)&&(i=4);for(var n=0,o=e;e+i>o;o++)
n<<=8,n|=t[o];return(4294967295&n)>>>0}
function n(t,e,i){t[e+3]=i>>0&255,t[e+2]=i>>8&255,t[e+1]=i>>16&255,t[e+0]=i>>24&255}
function o(t){if(!t)
return"";for(var e="",i=0;i<t.length;i++){var n=Number(t[i]).toString(16);1==n.length&&(n="0"+n),e+=n}
return e}
function p(t){for(var e="",i=0;i<t.length;i+=2)
e+=String.fromCharCode(parseInt(t.substr(i,2),16));return e}
function r(t,e){if(!t)
return"";e&&(t=s(t));for(var i=[],n=0;n<t.length;n++)
i[n]=t.charCodeAt(n);return o(i)}
function s(t){var e,i,n=[],o=t.length;for(e=0;o>e;e++)
i=t.charCodeAt(e),i>0&&127>=i?n.push(t.charAt(e)):i>=128&&2047>=i?n.push(String.fromCharCode(192|i>>6&31),String.fromCharCode(128|63&i)):i>=2048&&65535>=i&&n.push(String.fromCharCode(224|i>>12&15),String.fromCharCode(128|i>>6&63),String.fromCharCode(128|63&i));return n.join("")}
function l(t){_=new Array(8),$=new Array(8),v=w=0,k=!0,m=0;var i=t.length,n=0;m=(i+10)%8,0!=m&&(m=8-m),y=new Array(i+m+10),_[0]=255&(248&e()|m);for(var o=1;m>=o;o++)
_[o]=255&e();m++;for(var o=0;8>o;o++)
$[o]=0;for(n=1;2>=n;)
8>m&&(_[m++]=255&e(),n++),8==m&&c();for(var o=0;i>0;)
8>m&&(_[m++]=t[o++],i--),8==m&&c();for(n=1;7>=n;)
8>m&&(_[m++]=0,n++),8==m&&c();return y}
function a(t){var e=0,i=new Array(8),n=t.length;if(b=t,n%8!=0||16>n)
return null;if($=g(t),m=7&$[0],e=n-m-10,0>e)
return null;for(var o=0;o<i.length;o++)
i[o]=0;y=new Array(e),w=0,v=8,m++;for(var p=1;2>=p;)
if(8>m&&(m++,p++),8==m&&(i=t,!d()))
return null;for(var o=0;0!=e;)
if(8>m&&(y[o]=255&(i[w+m]^$[m]),o++,e--,m++),8==m&&(i=t,w=v-8,!d()))
return null;for(p=1;8>p;p++){if(8>m){if(0!=(i[w+m]^$[m]))
return null;m++}
if(8==m&&(i=t,w=v,!d()))
return null}
return y}
function c(){for(var t=0;8>t;t++)
_[t]^=k?$[t]:y[w+t];for(var e=u(_),t=0;8>t;t++)
y[v+t]=e[t]^$[t],$[t]=_[t];w=v,v+=8,m=0,k=!1}
function u(t){for(var e=16,o=i(t,0,4),p=i(t,4,4),r=i(f,0,4),s=i(f,4,4),l=i(f,8,4),a=i(f,12,4),c=0,u=2654435769;e-->0;)
c+=u,c=(4294967295&c)>>>0,o+=(p<<4)+r^p+c^(p>>>5)+s,o=(4294967295&o)>>>0,p+=(o<<4)+l^o+c^(o>>>5)+a,p=(4294967295&p)>>>0;var g=new Array(8);return n(g,0,o),n(g,4,p),g}
function g(t){for(var e=16,o=i(t,0,4),p=i(t,4,4),r=i(f,0,4),s=i(f,4,4),l=i(f,8,4),a=i(f,12,4),c=3816266640,u=2654435769;e-->0;)
p-=(o<<4)+l^o+c^(o>>>5)+a,p=(4294967295&p)>>>0,o-=(p<<4)+r^p+c^(p>>>5)+s,o=(4294967295&o)>>>0,c-=u,c=(4294967295&c)>>>0;var g=new Array(8);return n(g,0,o),n(g,4,p),g}
function d(){for(var t=(b.length,0);8>t;t++)
$[t]^=b[v+t];return $=g($),v+=8,m=0,!0}
function h(t,e){var i=[];if(e)
for(var n=0;n<t.length;n++)
i[n]=255&t.charCodeAt(n);else
for(var o=0,n=0;n<t.length;n+=2)
i[o++]=parseInt(t.substr(n,2),16);return i}
var f="",m=0,_=[],$=[],v=0,w=0,y=[],b=[],k=!0;TEA=t.TEA={encrypt:function(t,e){var i=h(t,e),n=l(i);return o(n)},enAsBase64:function(t,e){for(var i=h(t,e),n=l(i),o="",p=0;p<n.length;p++)
o+=String.fromCharCode(n[p]);return btoa(o)},decrypt:function(t){var e=h(t,!1),i=a(e);return o(i)},initkey:function(t,e){f=h(t,e)},bytesToStr:p,strToBytes:r,bytesInStr:o,dataFromStr:h};var q={};q.PADCHAR="=",q.ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",q.getbyte=function(t,e){var i=t.charCodeAt(e);if(i>255)
throw"INVALID_CHARACTER_ERR: DOM Exception 5";return i},q.encode=function(t){if(1!=arguments.length)
throw"SyntaxError: Not enough arguments";var e,i,n=q.PADCHAR,o=q.ALPHA,p=q.getbyte,r=[];t=""+t;var s=t.length-t.length%3;if(0==t.length)
return t;for(e=0;s>e;e+=3)
i=p(t,e)<<16|p(t,e+1)<<8|p(t,e+2),r.push(o.charAt(i>>18)),r.push(o.charAt(i>>12&63)),r.push(o.charAt(i>>6&63)),r.push(o.charAt(63&i));switch(t.length-s){case 1:i=p(t,e)<<16,r.push(o.charAt(i>>18)+o.charAt(i>>12&63)+n+n);break;case 2:i=p(t,e)<<16|p(t,e+1)<<8,r.push(o.charAt(i>>18)+o.charAt(i>>12&63)+o.charAt(i>>6&63)+n)}
return r.join("")},btoa=window.btoa||(window.btoa=q.encode)}
(window),$=window.$||{},$pt=window.$pt||{},function md5(t){return hex_md5(t)}
function hex_md5(t){return binl2hex(core_md5(str2binl(t),t.length*chrsz))}
function str_md5(t){return binl2str(core_md5(str2binl(t),t.length*chrsz))}
function hex_hmac_md5(t,e){return binl2hex(core_hmac_md5(t,e))}
function b64_hmac_md5(t,e){return binl2b64(core_hmac_md5(t,e))}
function str_hmac_md5(t,e){return binl2str(core_hmac_md5(t,e))}
function core_md5(t,e){t[e>>5]|=128<<e%32,t[(e+64>>>9<<4)+14]=e;for(var i=1732584193,n=-271733879,o=-1732584194,p=271733878,r=0;r<t.length;r+=16){var s=i,l=n,a=o,c=p;i=md5_ff(i,n,o,p,t[r+0],7,-680876936),p=md5_ff(p,i,n,o,t[r+1],12,-389564586),o=md5_ff(o,p,i,n,t[r+2],17,606105819),n=md5_ff(n,o,p,i,t[r+3],22,-1044525330),i=md5_ff(i,n,o,p,t[r+4],7,-176418897),p=md5_ff(p,i,n,o,t[r+5],12,1200080426),o=md5_ff(o,p,i,n,t[r+6],17,-1473231341),n=md5_ff(n,o,p,i,t[r+7],22,-45705983),i=md5_ff(i,n,o,p,t[r+8],7,1770035416),p=md5_ff(p,i,n,o,t[r+9],12,-1958414417),o=md5_ff(o,p,i,n,t[r+10],17,-42063),n=md5_ff(n,o,p,i,t[r+11],22,-1990404162),i=md5_ff(i,n,o,p,t[r+12],7,1804603682),p=md5_ff(p,i,n,o,t[r+13],12,-40341101),o=md5_ff(o,p,i,n,t[r+14],17,-1502002290),n=md5_ff(n,o,p,i,t[r+15],22,1236535329),i=md5_gg(i,n,o,p,t[r+1],5,-165796510),p=md5_gg(p,i,n,o,t[r+6],9,-1069501632),o=md5_gg(o,p,i,n,t[r+11],14,643717713),n=md5_gg(n,o,p,i,t[r+0],20,-373897302),i=md5_gg(i,n,o,p,t[r+5],5,-701558691),p=md5_gg(p,i,n,o,t[r+10],9,38016083),o=md5_gg(o,p,i,n,t[r+15],14,-660478335),n=md5_gg(n,o,p,i,t[r+4],20,-405537848),i=md5_gg(i,n,o,p,t[r+9],5,568446438),p=md5_gg(p,i,n,o,t[r+14],9,-1019803690),o=md5_gg(o,p,i,n,t[r+3],14,-187363961),n=md5_gg(n,o,p,i,t[r+8],20,1163531501),i=md5_gg(i,n,o,p,t[r+13],5,-1444681467),p=md5_gg(p,i,n,o,t[r+2],9,-51403784),o=md5_gg(o,p,i,n,t[r+7],14,1735328473),n=md5_gg(n,o,p,i,t[r+12],20,-1926607734),i=md5_hh(i,n,o,p,t[r+5],4,-378558),p=md5_hh(p,i,n,o,t[r+8],11,-2022574463),o=md5_hh(o,p,i,n,t[r+11],16,1839030562),n=md5_hh(n,o,p,i,t[r+14],23,-35309556),i=md5_hh(i,n,o,p,t[r+1],4,-1530992060),p=md5_hh(p,i,n,o,t[r+4],11,1272893353),o=md5_hh(o,p,i,n,t[r+7],16,-155497632),n=md5_hh(n,o,p,i,t[r+10],23,-1094730640),i=md5_hh(i,n,o,p,t[r+13],4,681279174),p=md5_hh(p,i,n,o,t[r+0],11,-358537222),o=md5_hh(o,p,i,n,t[r+3],16,-722521979),n=md5_hh(n,o,p,i,t[r+6],23,76029189),i=md5_hh(i,n,o,p,t[r+9],4,-640364487),p=md5_hh(p,i,n,o,t[r+12],11,-421815835),o=md5_hh(o,p,i,n,t[r+15],16,530742520),n=md5_hh(n,o,p,i,t[r+2],23,-995338651),i=md5_ii(i,n,o,p,t[r+0],6,-198630844),p=md5_ii(p,i,n,o,t[r+7],10,1126891415),o=md5_ii(o,p,i,n,t[r+14],15,-1416354905),n=md5_ii(n,o,p,i,t[r+5],21,-57434055),i=md5_ii(i,n,o,p,t[r+12],6,1700485571),p=md5_ii(p,i,n,o,t[r+3],10,-1894986606),o=md5_ii(o,p,i,n,t[r+10],15,-1051523),n=md5_ii(n,o,p,i,t[r+1],21,-2054922799),i=md5_ii(i,n,o,p,t[r+8],6,1873313359),p=md5_ii(p,i,n,o,t[r+15],10,-30611744),o=md5_ii(o,p,i,n,t[r+6],15,-1560198380),n=md5_ii(n,o,p,i,t[r+13],21,1309151649),i=md5_ii(i,n,o,p,t[r+4],6,-145523070),p=md5_ii(p,i,n,o,t[r+11],10,-1120210379),o=md5_ii(o,p,i,n,t[r+2],15,718787259),n=md5_ii(n,o,p,i,t[r+9],21,-343485551),i=safe_add(i,s),n=safe_add(n,l),o=safe_add(o,a),p=safe_add(p,c)}
return 16==mode?Array(n,o):Array(i,n,o,p)}
function md5_cmn(t,e,i,n,o,p){return safe_add(bit_rol(safe_add(safe_add(e,t),safe_add(n,p)),o),i)}
function md5_ff(t,e,i,n,o,p,r){return md5_cmn(e&i|~e&n,t,e,o,p,r)}
function md5_gg(t,e,i,n,o,p,r){return md5_cmn(e&n|i&~n,t,e,o,p,r)}
function md5_hh(t,e,i,n,o,p,r){return md5_cmn(e^i^n,t,e,o,p,r)}
function md5_ii(t,e,i,n,o,p,r){return md5_cmn(i^(e|~n),t,e,o,p,r)}
function core_hmac_md5(t,e){var i=str2binl(t);i.length>16&&(i=core_md5(i,t.length*chrsz));for(var n=Array(16),o=Array(16),p=0;16>p;p++)
n[p]=909522486^i[p],o[p]=1549556828^i[p];var r=core_md5(n.concat(str2binl(e)),512+e.length*chrsz);return core_md5(o.concat(r),640)}
function safe_add(t,e){var i=(65535&t)+(65535&e),n=(t>>16)+(e>>16)+(i>>16);return n<<16|65535&i}
function bit_rol(t,e){return t<<e|t>>>32-e}
function str2binl(t){for(var e=Array(),i=(1<<chrsz)-1,n=0;n<t.length*chrsz;n+=chrsz)
e[n>>5]|=(t.charCodeAt(n/chrsz)&i)<<n%32;return e}
function binl2str(t){for(var e="",i=(1<<chrsz)-1,n=0;n<32*t.length;n+=chrsz)
e+=String.fromCharCode(t[n>>5]>>>n%32&i);return e}
function binl2hex(t){for(var e=hexcase?"0123456789ABCDEF":"0123456789abcdef",i="",n=0;n<4*t.length;n++)
i+=e.charAt(t[n>>2]>>n%4*8+4&15)+e.charAt(t[n>>2]>>n%4*8&15);return i}
function binl2b64(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i="",n=0;n<4*t.length;n+=3)
for(var o=(t[n>>2]>>8*(n%4)&255)<<16|(t[n+1>>2]>>8*((n+1)%4)&255)<<8|t[n+2>>2]>>8*((n+2)%4)&255,p=0;4>p;p++)
i+=8*n+6*p>32*t.length?b64pad:e.charAt(o>>6*(3-p)&63);return i}
function hexchar2bin(str){for(var arr=[],i=0;i<str.length;i+=2)
arr.push("\\x"+str.substr(i,2));return arr=arr.join(""),eval("var temp = '"+arr+"'"),temp}
function __monitor(t,e){if(!(Math.random()>(e||1)))
try{var i=location.protocol+"//ui.ptlogin2.qq.com/cgi-bin/report?id="+t,n=document.createElement("img");n.src=i}catch(o){}}
function getEncryption(t,e,i,n){e=uin2hex(e);i=i||"",t=t||"";for(var o=n?t:hex_md5(t),p=hexchar2bin(o),r=hex_md5(p+e),s=TEA.strToBytes(i.toUpperCase(),!0),l=Number(s.length/2).toString(16);l.length<4;)
l="0"+l;TEA.initkey(r);var a=TEA.encrypt(o+TEA.strToBytes(e)+l+s);TEA.initkey("");for(var c=Number(a.length/2).toString(16);c.length<4;)
c="0"+c;var u=RSA.rsa_encrypt(hexchar2bin(c+a));return btoa(hexchar2bin(u)).replace(/[\/\+=]/g,function(t){return{"/":"-","+":"*","=":"_"}[t]})}
function getRSAEncryption(t,e,i){var n=i?t:hex_md5(t),o=n+e.toUpperCase(),p=$.RSA.rsa_encrypt(o);return p}
var hexcase=1,b64pad="",chrsz=8,mode=32;uin2hex=function(str){var maxLength=16;str=parseInt(str);for(var hex=str.toString(16),len=hex.length,i=len;maxLength>i;i++)
hex="0"+hex;for(var arr=[],j=0;maxLength>j;j+=2)
arr.push("\\x"+hex.substr(j,2));var result=arr.join("");return eval('result="'+result+'"'),result}




function getGTK(str){
   var hash = 5381;
   for(var i = 0, len = str.length; i < len; ++i)
   {
   hash += (hash << 5) + str.charAt(i).charCodeAt();
   }
   return hash & 0x7fffffff;
}
function role(json){
	
	
}
function getGtk32(skey)
{return _getAntiCSRFToken(skey);}
function _getAntiCSRFToken(skey_){var CONST_SALT=5381;var CONST_MD5_KEY='tencentQQVIP123443safde&!%^%1282';var salt=CONST_SALT;var skey=skey_;var md5key=CONST_MD5_KEY;var hash=[],ASCIICode;hash.push((salt<<5));for(var i=0,len=skey.length;i<len;++i){ASCIICode=skey.charAt(i).charCodeAt();hash.push((salt<<5)+ASCIICode);salt=ASCIICode;}
var md5str=_md5(hash.join('')+md5key);return md5str;}
var chrsz=8;var mode=32;var hexcase=0;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz));};function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz));};function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz));};function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data));};function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data));};function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data));};function core_md5(x,len){x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}
if(mode==16){return Array(b,c);}else{return Array(a,b,c,d);}};function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);};function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t);};function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);};function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t);};function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t);};function _md5(s){return hex_md5(s);}function binl2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+
hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF);}
return str;};function str2binl(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz)
bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);return bin;};function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);};function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt));};function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}
function test(){
	return window.ActiveXObject
}
