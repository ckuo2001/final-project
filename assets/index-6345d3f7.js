(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(t,e){if(!t)throw Xt(e)},Xt=function(t){return new Error("Firebase Database ("+ql.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kd=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[h],n[u],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new zd;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),u!==64){const y=c<<6&192|u;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gl=function(t){const e=Wl(t);return Hr.encodeByteArray(e,!0)},wi=function(t){return Gl(t).replace(/\./g,"")},nr=function(t){try{return Hr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t){return Kl(void 0,t)}function Kl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yd(n)||(t[n]=Kl(t[n],e[n]));return t}function Yd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=()=>Xd().__FIREBASE_DEFAULTS__,Zd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ef=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nr(t[1]);return e&&JSON.parse(e)},zl=()=>{try{return Jd()||Zd()||ef()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tf=t=>{var e,n;return(n=(e=zl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nf=t=>{const e=tf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},sf=()=>{var t;return(t=zl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wi(JSON.stringify(n)),wi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ql(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(of())}function af(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yl(){return ql.NODE_ADMIN===!0}function Xl(){try{return typeof indexedDB=="object"}catch{return!1}}function Jl(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function cf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="FirebaseError";class Ze extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=hf,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?uf(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ze(s,a,i)}}function uf(t,e){return t.replace(df,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const df=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){return JSON.parse(t)}function ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Cn(nr(r[0])||""),n=Cn(nr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},ff=function(t){const e=Zl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pf=function(t){const e=Zl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $t(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ia(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ei(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Ti(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(sa(r)&&sa(o)){if(!Ti(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function sa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function yf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ji=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=1e3,wf=2,Ef=4*60*60*1e3,Tf=.5;function ra(t,e=vf,n=wf){const i=e*Math.pow(n,t),s=Math.round(Tf*i*(Math.random()-.5)*2);return Math.min(Ef,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Oe{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new qr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sf(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Cf(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cf(t){return t===it?void 0:t}function Sf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new If(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const bf={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Nf=R.INFO,Rf={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Df=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Rf[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zi{constructor(e){this.name=e,this._logLevel=Nf,this._logHandler=Df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const kf=(t,e)=>e.some(n=>t instanceof n);let oa,aa;function xf(){return oa||(oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Of(){return aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ec=new WeakMap,ir=new WeakMap,tc=new WeakMap,xs=new WeakMap,Wr=new WeakMap;function Mf(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ec.set(n,t)}).catch(()=>{}),Wr.set(e,t),e}function Pf(t){if(ir.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ir.set(t,e)}let sr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ir.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lf(t){sr=t(sr)}function Ff(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Os(this),e,...n);return tc.set(i,e.sort?e.sort():[e]),qe(i)}:Of().includes(t)?function(...e){return t.apply(Os(this),e),qe(ec.get(this))}:function(...e){return qe(t.apply(Os(this),e))}}function $f(t){return typeof t=="function"?Ff(t):(t instanceof IDBTransaction&&Pf(t),kf(t,xf())?new Proxy(t,sr):t)}function qe(t){if(t instanceof IDBRequest)return Mf(t);if(xs.has(t))return xs.get(t);const e=$f(t);return e!==t&&(xs.set(t,e),Wr.set(e,t)),e}const Os=t=>Wr.get(t);function nc(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=qe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(qe(o.result),l.oldVersion,l.newVersion,qe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Uf=["get","getKey","getAll","getAllKeys","count"],Vf=["put","add","delete","clear"],Ms=new Map;function la(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ms.get(e))return Ms.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Vf.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Uf.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ms.set(e,r),r}Lf(t=>({...t,get:(e,n,i)=>la(e,n)||t.get(e,n,i),has:(e,n)=>!!la(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jf(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function jf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rr="@firebase/app",ca="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Zi("@firebase/app"),Hf="@firebase/app-compat",qf="@firebase/analytics-compat",Wf="@firebase/analytics",Gf="@firebase/app-check-compat",Kf="@firebase/app-check",zf="@firebase/auth",Qf="@firebase/auth-compat",Yf="@firebase/database",Xf="@firebase/database-compat",Jf="@firebase/functions",Zf="@firebase/functions-compat",ep="@firebase/installations",tp="@firebase/installations-compat",np="@firebase/messaging",ip="@firebase/messaging-compat",sp="@firebase/performance",rp="@firebase/performance-compat",op="@firebase/remote-config",ap="@firebase/remote-config-compat",lp="@firebase/storage",cp="@firebase/storage-compat",hp="@firebase/firestore",up="@firebase/firestore-compat",dp="firebase",fp="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]",pp={[rr]:"fire-core",[Hf]:"fire-core-compat",[Wf]:"fire-analytics",[qf]:"fire-analytics-compat",[Kf]:"fire-app-check",[Gf]:"fire-app-check-compat",[zf]:"fire-auth",[Qf]:"fire-auth-compat",[Yf]:"fire-rtdb",[Xf]:"fire-rtdb-compat",[Jf]:"fire-fn",[Zf]:"fire-fn-compat",[ep]:"fire-iid",[tp]:"fire-iid-compat",[np]:"fire-fcm",[ip]:"fire-fcm-compat",[sp]:"fire-perf",[rp]:"fire-perf-compat",[op]:"fire-rc",[ap]:"fire-rc-compat",[lp]:"fire-gcs",[cp]:"fire-gcs-compat",[hp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[dp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map,ar=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ue(t){const e=t.name;if(ar.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;ar.set(e,t);for(const n of Ii.values())gp(n,t);return!0}function jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new Xi("app","Firebase",mp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=fp;function sc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:or,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(n||(n=sf()),!n)throw We.create("no-options");const r=Ii.get(s);if(r){if(Ti(n,r.options)&&Ti(i,r.config))return r;throw We.create("duplicate-app",{appName:s})}const o=new Af(s);for(const l of ar.values())o.addComponent(l);const a=new yp(n,i,o);return Ii.set(s,a),a}function rc(t=or){const e=Ii.get(t);if(!e&&t===or)return sc();if(!e)throw We.create("no-app",{appName:t});return e}function Ee(t,e,n){var i;let s=(i=pp[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}Ue(new Oe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="firebase-heartbeat-database",vp=1,Sn="firebase-heartbeat-store";let Ps=null;function oc(){return Ps||(Ps=nc(_p,vp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sn)}}}).catch(t=>{throw We.create("idb-open",{originalErrorMessage:t.message})})),Ps}async function wp(t){try{return(await oc()).transaction(Sn).objectStore(Sn).get(ac(t))}catch(e){if(e instanceof Ze)ft.warn(e.message);else{const n=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function ha(t,e){try{const i=(await oc()).transaction(Sn,"readwrite");return await i.objectStore(Sn).put(e,ac(t)),i.done}catch(n){if(n instanceof Ze)ft.warn(n.message);else{const i=We.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(i.message)}}}function ac(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1024,Tp=30*24*60*60*1e3;class Ip{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sp(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ua();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ua(),{heartbeatsToSend:n,unsentEntries:i}=Cp(this._heartbeatsCache.heartbeats),s=wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ua(){return new Date().toISOString().substring(0,10)}function Cp(t,e=Ep){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),da(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),da(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xl()?Jl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function da(t){return wi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){Ue(new Oe("platform-logger",e=>new Bf(e),"PRIVATE")),Ue(new Oe("heartbeat",e=>new Ip(e),"PRIVATE")),Ee(rr,ca,t),Ee(rr,ca,"esm2017"),Ee("fire-js","")}Ap("");var bp="firebase",Np="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(bp,Np,"app");const lc="@firebase/installations",Gr="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=1e4,hc=`w:${Gr}`,uc="FIS_v2",Rp="https://firebaseinstallations.googleapis.com/v1",Dp=60*60*1e3,kp="installations",xp="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},pt=new Xi(kp,xp,Op);function dc(t){return t instanceof Ze&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc({projectId:t}){return`${Rp}/projects/${t}/installations`}function pc(t){return{token:t.token,requestStatus:2,expiresIn:Pp(t.expiresIn),creationTime:Date.now()}}async function gc(t,e){const i=(await e.json()).error;return pt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function mc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Mp(t,{refreshToken:e}){const n=mc(t);return n.append("Authorization",Lp(e)),n}async function yc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Pp(t){return Number(t.replace("s","000"))}function Lp(t){return`${uc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=fc(t),s=mc(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:uc,appId:t.appId,sdkVersion:hc},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await yc(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:pc(c.authToken)}}else throw await gc("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=/^[cdef][\w-]{21}$/,lr="";function Vp(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Bp(t);return Up.test(n)?n:lr}catch{return lr}}function Bp(t){return $p(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Map;function wc(t,e){const n=es(t);Ec(n,e),jp(n,e)}function Ec(t,e){const n=vc.get(t);if(n)for(const i of n)i(e)}function jp(t,e){const n=Hp();n&&n.postMessage({key:t,fid:e}),qp()}let rt=null;function Hp(){return!rt&&"BroadcastChannel"in self&&(rt=new BroadcastChannel("[Firebase] FID Change"),rt.onmessage=t=>{Ec(t.data.key,t.data.fid)}),rt}function qp(){vc.size===0&&rt&&(rt.close(),rt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="firebase-installations-database",Gp=1,gt="firebase-installations-store";let Ls=null;function Kr(){return Ls||(Ls=nc(Wp,Gp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gt)}}})),Ls}async function Ci(t,e){const n=es(t),s=(await Kr()).transaction(gt,"readwrite"),r=s.objectStore(gt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&wc(t,e.fid),e}async function Tc(t){const e=es(t),i=(await Kr()).transaction(gt,"readwrite");await i.objectStore(gt).delete(e),await i.done}async function ts(t,e){const n=es(t),s=(await Kr()).transaction(gt,"readwrite"),r=s.objectStore(gt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&wc(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t){let e;const n=await ts(t.appConfig,i=>{const s=Kp(i),r=zp(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===lr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Kp(t){const e=t||{fid:Vp(),registrationStatus:0};return Ic(e)}function zp(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(pt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Qp(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Yp(t)}:{installationEntry:e}}async function Qp(t,e){try{const n=await Fp(t,e);return Ci(t.appConfig,n)}catch(n){throw dc(n)&&n.customData.serverCode===409?await Tc(t.appConfig):await Ci(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Yp(t){let e=await fa(t.appConfig);for(;e.registrationStatus===1;)await _c(100),e=await fa(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await zr(t);return i||n}return e}function fa(t){return ts(t,e=>{if(!e)throw pt.create("installation-not-found");return Ic(e)})}function Ic(t){return Xp(t)?{fid:t.fid,registrationStatus:0}:t}function Xp(t){return t.registrationStatus===1&&t.registrationTime+cc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp({appConfig:t,heartbeatServiceProvider:e},n){const i=Zp(t,n),s=Mp(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:hc,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await yc(()=>fetch(i,a));if(l.ok){const c=await l.json();return pc(c)}else throw await gc("Generate Auth Token",l)}function Zp(t,{fid:e}){return`${fc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e=!1){let n;const i=await ts(t.appConfig,r=>{if(!Cc(r))throw pt.create("not-registered");const o=r.authToken;if(!e&&ng(o))return r;if(o.requestStatus===1)return n=eg(t,e),r;{if(!navigator.onLine)throw pt.create("app-offline");const a=sg(r);return n=tg(t,a),a}});return n?await n:i.authToken}async function eg(t,e){let n=await pa(t.appConfig);for(;n.authToken.requestStatus===1;)await _c(100),n=await pa(t.appConfig);const i=n.authToken;return i.requestStatus===0?Qr(t,e):i}function pa(t){return ts(t,e=>{if(!Cc(e))throw pt.create("not-registered");const n=e.authToken;return rg(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tg(t,e){try{const n=await Jp(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ci(t.appConfig,i),n}catch(n){if(dc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Tc(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ci(t.appConfig,i)}throw n}}function Cc(t){return t!==void 0&&t.registrationStatus===2}function ng(t){return t.requestStatus===2&&!ig(t)}function ig(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Dp}function sg(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function rg(t){return t.requestStatus===1&&t.requestTime+cc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(t){const e=t,{installationEntry:n,registrationPromise:i}=await zr(e);return i?i.catch(console.error):Qr(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e=!1){const n=t;return await lg(n),(await Qr(n,e)).token}async function lg(t){const{registrationPromise:e}=await zr(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){if(!t||!t.options)throw Fs("App Configuration");if(!t.name)throw Fs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fs(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="installations",hg="installations-internal",ug=t=>{const e=t.getProvider("app").getImmediate(),n=cg(e),i=jn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},dg=t=>{const e=t.getProvider("app").getImmediate(),n=jn(e,Sc).getImmediate();return{getId:()=>og(n),getToken:s=>ag(n,s)}};function fg(){Ue(new Oe(Sc,ug,"PUBLIC")),Ue(new Oe(hg,dg,"PRIVATE"))}fg();Ee(lc,Gr);Ee(lc,Gr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="analytics",pg="firebase_id",gg="origin",mg=60*1e3,yg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ac="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Zi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _g(t,e){const n=document.createElement("script");n.src=`${Ac}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function vg(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wg(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await bc(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){ye.error(a)}t("config",s,r)}async function Eg(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await bc(n);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){ye.error(r)}}function Tg(t,e,n,i){async function s(r,o,a){try{r==="event"?await Eg(t,e,n,o,a):r==="config"?await wg(t,e,n,i,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){ye.error(l)}}return s}function Ig(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Tg(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Cg(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ac)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Te=new Xi("analytics","Analytics",Sg);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=30,bg=1e3;class Ng{constructor(e={},n=bg){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Nc=new Ng;function Rg(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Dg(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Rg(i)},r=yg.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function kg(t,e=Nc,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Te.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Te.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Mg;return setTimeout(async()=>{a.abort()},n!==void 0?n:mg),Rc({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Rc(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Nc){var r;const{appId:o,measurementId:a}=t;try{await xg(i,e)}catch(l){if(a)return ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Dg(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Og(c)){if(s.deleteThrottleMetadata(o),a)return ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?ra(n,s.intervalMillis,Ag):ra(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,u),ye.debug(`Calling attemptFetch again in ${h} millis`),Rc(t,u,i,s)}}function xg(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Te.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Og(t){if(!(t instanceof Ze)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Pg(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(){if(Xl())try{await Jl()}catch(t){return ye.warn(Te.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ye.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fg(t,e,n,i,s,r,o){var a;const l=kg(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&ye.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ye.error(f)),e.push(l);const c=Lg().then(f=>{if(f)return i.getId()}),[h,u]=await Promise.all([l,c]);Cg(r)||_g(r,h.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[gg]="firebase",d.update=!0,u!=null&&(d[pg]=u),s("config",h.measurementId,d),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.app=e}_delete(){return delete gn[this.app.options.appId],Promise.resolve()}}let gn={},ga=[];const ma={};let $s="dataLayer",Ug="gtag",ya,Dc,_a=!1;function Vg(){const t=[];if(af()&&t.push("This is a browser extension environment."),cf()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:e});ye.warn(n.message)}}function Bg(t,e,n){Vg();const i=t.options.appId;if(!i)throw Te.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(gn[i]!=null)throw Te.create("already-exists",{id:i});if(!_a){vg($s);const{wrappedGtag:r,gtagCore:o}=Ig(gn,ga,ma,$s,Ug);Dc=r,ya=o,_a=!0}return gn[i]=Fg(t,ga,ma,e,ya,$s,n),new $g(t)}function jg(t=rc()){t=ze(t);const e=jn(t,Si);return e.isInitialized()?e.getImmediate():Hg(t)}function Hg(t,e={}){const n=jn(t,Si);if(n.isInitialized()){const s=n.getImmediate();if(Ti(e,n.getOptions()))return s;throw Te.create("already-initialized")}return n.initialize({options:e})}function qg(t,e,n,i){t=ze(t),Pg(Dc,gn[t.app.options.appId],e,n,i).catch(s=>ye.error(s))}const va="@firebase/analytics",wa="0.9.4";function Wg(){Ue(new Oe(Si,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Bg(i,s,n)},"PUBLIC")),Ue(new Oe("analytics-internal",t,"PRIVATE")),Ee(va,wa),Ee(va,wa,"esm2017");function t(e){try{const n=e.getProvider(Si).getImmediate();return{logEvent:(i,s,r)=>qg(n,i,s,r)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}Wg();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Us;const Ai=window,Ut=Ai.trustedTypes,Ea=Ut?Ut.createPolicy("lit-html",{createHTML:t=>t}):void 0,He=`lit$${(Math.random()+"").slice(9)}$`,kc="?"+He,Gg=`<${kc}>`,Vt=document,An=(t="")=>Vt.createComment(t),bn=t=>t===null||typeof t!="object"&&typeof t!="function",xc=Array.isArray,Kg=t=>xc(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",an=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ta=/-->/g,Ia=/>/g,nt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ca=/'/g,Sa=/"/g,Oc=/^(?:script|style|textarea|title)$/i,Nn=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Aa=new WeakMap,Ot=Vt.createTreeWalker(Vt,129,null,!1),zg=(t,e)=>{const n=t.length-1,i=[];let s,r=e===2?"<svg>":"",o=an;for(let l=0;l<n;l++){const c=t[l];let h,u,d=-1,f=0;for(;f<c.length&&(o.lastIndex=f,u=o.exec(c),u!==null);)f=o.lastIndex,o===an?u[1]==="!--"?o=Ta:u[1]!==void 0?o=Ia:u[2]!==void 0?(Oc.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=nt):u[3]!==void 0&&(o=nt):o===nt?u[0]===">"?(o=s??an,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?nt:u[3]==='"'?Sa:Ca):o===Sa||o===Ca?o=nt:o===Ta||o===Ia?o=an:(o=nt,s=void 0);const y=o===nt&&t[l+1].startsWith("/>")?" ":"";r+=o===an?c+Gg:d>=0?(i.push(h),c.slice(0,d)+"$lit$"+c.slice(d)+He+y):c+He+(d===-2?(i.push(void 0),l):y)}const a=r+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ea!==void 0?Ea.createHTML(a):a,i]};let cr=class Mc{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,h]=zg(e,n);if(this.el=Mc.createElement(c,i),Ot.currentNode=this.el.content,n===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(s=Ot.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(He)){const f=h[o++];if(u.push(d),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(He),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:w[2],strings:y,ctor:w[1]==="."?Yg:w[1]==="?"?Jg:w[1]==="@"?Zg:ns})}else l.push({type:6,index:r})}for(const d of u)s.removeAttribute(d)}if(Oc.test(s.tagName)){const u=s.textContent.split(He),d=u.length-1;if(d>0){s.textContent=Ut?Ut.emptyScript:"";for(let f=0;f<d;f++)s.append(u[f],An()),Ot.nextNode(),l.push({type:2,index:++r});s.append(u[d],An())}}}else if(s.nodeType===8)if(s.data===kc)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(He,u+1))!==-1;)l.push({type:7,index:r}),u+=He.length-1}r++}}static createElement(e,n){const i=Vt.createElement("template");return i.innerHTML=e,i}};function Bt(t,e,n=t,i){var s,r,o,a;if(e===Nn)return e;let l=i!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[i]:n._$Cl;const c=bn(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,i)),i!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:n._$Cl=l),l!==void 0&&(e=Bt(t,l._$AS(t,e.values),l,i)),e}let Qg=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:i},parts:s}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Vt).importNode(i,!0);Ot.currentNode=r;let o=Ot.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new Yr(o,o.nextSibling,this,e):c.type===1?h=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(h=new em(o,this,e)),this.u.push(h),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Ot.nextNode(),a++)}return r}p(e){let n=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}},Yr=class Pc{constructor(e,n,i,s){var r;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Bt(this,e,n),bn(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==Nn&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kg(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==K&&bn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Vt.createTextNode(e)),this._$AH=e}$(e){var n;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=cr.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.p(i);else{const o=new Qg(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let n=Aa.get(e.strings);return n===void 0&&Aa.set(e.strings,n=new cr(e)),n}k(e){xc(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const r of e)s===n.length?n.push(i=new Pc(this.O(An()),this.O(An()),this,this.options)):i=n[s],i._$AI(r),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},ns=class{constructor(e,n,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Bt(this,e,n,0),o=!bn(e)||e!==this._$AH&&e!==Nn,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Bt(this,a[i+l],n,l),c===Nn&&(c=this._$AH[l]),o||(o=!bn(c)||c!==this._$AH[l]),c===K?e=K:e!==K&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Yg=class extends ns{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}};const Xg=Ut?Ut.emptyScript:"";let Jg=class extends ns{constructor(){super(...arguments),this.type=4}j(e){e&&e!==K?this.element.setAttribute(this.name,Xg):this.element.removeAttribute(this.name)}},Zg=class extends ns{constructor(e,n,i,s,r){super(e,n,i,s,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=Bt(this,e,n,0))!==null&&i!==void 0?i:K)===Nn)return;const s=this._$AH,r=e===K&&s!==K||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==K&&(s===K||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},em=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Bt(this,e)}};const ba=Ai.litHtmlPolyfillSupport;ba==null||ba(cr,Yr),((Us=Ai.litHtmlVersions)!==null&&Us!==void 0?Us:Ai.litHtmlVersions=[]).push("2.6.1");const tm=(t,e,n)=>{var i,s;const r=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Yr(e.insertBefore(An(),a),a,void 0,n??{})}return o._$AI(t),o};var nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,Xr=Xr||{},E=nm||self;function bi(){}function is(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function im(t){return Object.prototype.hasOwnProperty.call(t,Vs)&&t[Vs]||(t[Vs]=++sm)}var Vs="closure_uid_"+(1e9*Math.random()>>>0),sm=0;function rm(t,e,n){return t.call.apply(t.bind,arguments)}function om(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function he(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?he=rm:he=om,he.apply(null,arguments)}function ai(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function ne(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function et(){this.s=this.s,this.o=this.o}var am=0;et.prototype.s=!1;et.prototype.na=function(){!this.s&&(this.s=!0,this.M(),am!=0)&&im(this)};et.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Na(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(is(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var lm=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",bi,e),E.removeEventListener("test",bi,e)}catch{}return t}();function Ni(t){return/^[\s\xa0]*$/.test(t)}var Ra=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Bs(t,e){return t<e?-1:t>e?1:0}function ss(){var t=E.navigator;return t&&(t=t.userAgent)?t:""}function De(t){return ss().indexOf(t)!=-1}function Zr(t){return Zr[" "](t),t}Zr[" "]=bi;function cm(t){var e=dm;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hm=De("Opera"),jt=De("Trident")||De("MSIE"),Fc=De("Edge"),hr=Fc||jt,$c=De("Gecko")&&!(ss().toLowerCase().indexOf("webkit")!=-1&&!De("Edge"))&&!(De("Trident")||De("MSIE"))&&!De("Edge"),um=ss().toLowerCase().indexOf("webkit")!=-1&&!De("Edge");function Uc(){var t=E.document;return t?t.documentMode:void 0}var Ri;e:{var js="",Hs=function(){var t=ss();if($c)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fc)return/Edge\/([\d\.]+)/.exec(t);if(jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(um)return/WebKit\/(\S+)/.exec(t);if(hm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hs&&(js=Hs?Hs[1]:""),jt){var qs=Uc();if(qs!=null&&qs>parseFloat(js)){Ri=String(qs);break e}}Ri=js}var dm={};function fm(){return cm(function(){let t=0;const e=Ra(String(Ri)).split("."),n=Ra("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Bs(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Bs(s[2].length==0,r[2].length==0)||Bs(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var ur;if(E.document&&jt){var Da=Uc();ur=Da||parseInt(Ri,10)||void 0}else ur=void 0;var pm=ur;function Rn(t,e){if(ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($c){e:{try{Zr(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rn.X.h.call(this)}}ne(Rn,ue);var gm={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),mm=0;function ym(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++mm,this.ba=this.ea=!1}function rs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function eo(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Vc(t){const e={};for(const n in t)e[n]=t[n];return e}const ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<ka.length;r++)n=ka[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function os(t){this.src=t,this.g={},this.h=0}os.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=fr(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ym(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function dr(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Lc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(rs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var to="closure_lm_"+(1e6*Math.random()|0),Ws={};function jc(t,e,n,i,s){if(i&&i.once)return qc(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)jc(t,e[r],n,i,s);return null}return n=so(n),t&&t[qn]?t.N(e,n,Hn(i)?!!i.capture:!!i,s):Hc(t,e,n,!1,i,s)}function Hc(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Hn(s)?!!s.capture:!!s,a=io(t);if(a||(t[to]=a=new os(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=_m(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)lm||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Gc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _m(){function t(n){return e.call(t.src,t.listener,n)}const e=vm;return t}function qc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)qc(t,e[r],n,i,s);return null}return n=so(n),t&&t[qn]?t.O(e,n,Hn(i)?!!i.capture:!!i,s):Hc(t,e,n,!0,i,s)}function Wc(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Wc(t,e[r],n,i,s);else i=Hn(i)?!!i.capture:!!i,n=so(n),t&&t[qn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=fr(r,n,i,s),-1<n&&(rs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=io(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fr(e,n,i,s)),(n=-1<t?e[t]:null)&&no(n))}function no(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[qn])dr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Gc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=io(e))?(dr(n,t),n.h==0&&(n.src=null,e[to]=null)):rs(t)}}}function Gc(t){return t in Ws?Ws[t]:Ws[t]="on"+t}function vm(t,e){if(t.ba)t=!0;else{e=new Rn(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&no(t),t=n.call(i,e)}return t}function io(t){return t=t[to],t instanceof os?t:null}var Gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function so(t){return typeof t=="function"?t:(t[Gs]||(t[Gs]=function(e){return t.handleEvent(e)}),t[Gs])}function X(){et.call(this),this.i=new os(this),this.P=this,this.I=null}ne(X,et);X.prototype[qn]=!0;X.prototype.removeEventListener=function(t,e,n,i){Wc(this,t,e,n,i)};function te(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new ue(e,t);else if(e instanceof ue)e.target=e.target||t;else{var s=e;e=new ue(i,t),Bc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=li(o,i,!0,e)&&s}if(o=e.g=t,s=li(o,i,!0,e)&&s,s=li(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=li(o,i,!1,e)&&s}X.prototype.M=function(){if(X.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)rs(n[i]);delete t.g[e],t.h--}}this.I=null};X.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};X.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function li(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&dr(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var ro=E.JSON.stringify;function wm(){var t=Qc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Em{constructor(){this.h=this.g=null}add(e,n){const i=Kc.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Kc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tm,t=>t.reset());class Tm{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Im(t){E.setTimeout(()=>{throw t},0)}function zc(t,e){pr||Cm(),gr||(pr(),gr=!0),Qc.add(t,e)}var pr;function Cm(){var t=E.Promise.resolve(void 0);pr=function(){t.then(Sm)}}var gr=!1,Qc=new Em;function Sm(){for(var t;t=wm();){try{t.h.call(t.g)}catch(n){Im(n)}var e=Kc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gr=!1}function as(t,e){X.call(this),this.h=t||1,this.g=e||E,this.j=he(this.lb,this),this.l=Date.now()}ne(as,X);_=as.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),te(this,"tick"),this.ca&&(oo(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}_.M=function(){as.X.M.call(this),oo(this),delete this.g};function ao(t,e,n){if(typeof t=="function")n&&(t=he(t,n));else if(t&&typeof t.handleEvent=="function")t=he(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function Yc(t){t.g=ao(()=>{t.g=null,t.i&&(t.i=!1,Yc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Am extends et{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yc(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dn(t){et.call(this),this.h=t,this.g={}}ne(Dn,et);var xa=[];function Xc(t,e,n,i){Array.isArray(n)||(n&&(xa[0]=n.toString()),n=xa);for(var s=0;s<n.length;s++){var r=jc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Jc(t){eo(t.g,function(e,n){this.g.hasOwnProperty(n)&&no(e)},t),t.g={}}Dn.prototype.M=function(){Dn.X.M.call(this),Jc(this)};Dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ls(){this.g=!0}ls.prototype.Aa=function(){this.g=!1};function bm(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Nm(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Dt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Dm(t,n)+(i?" "+i:"")})}function Rm(t,e){t.info(function(){return"TIMEOUT: "+e})}ls.prototype.info=function(){};function Dm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ro(n)}catch{return e}}var It={},Oa=null;function cs(){return Oa=Oa||new X}It.Pa="serverreachability";function Zc(t){ue.call(this,It.Pa,t)}ne(Zc,ue);function kn(t){const e=cs();te(e,new Zc(e))}It.STAT_EVENT="statevent";function eh(t,e){ue.call(this,It.STAT_EVENT,t),this.stat=e}ne(eh,ue);function de(t){const e=cs();te(e,new eh(e,t))}It.Qa="timingevent";function th(t,e){ue.call(this,It.Qa,t),this.size=e}ne(th,ue);function Wn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var hs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function lo(){}lo.prototype.h=null;function Ma(t){return t.h||(t.h=t.i())}function ih(){}var Gn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function co(){ue.call(this,"d")}ne(co,ue);function ho(){ue.call(this,"c")}ne(ho,ue);var mr;function us(){}ne(us,lo);us.prototype.g=function(){return new XMLHttpRequest};us.prototype.i=function(){return{}};mr=new us;function Kn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Dn(this),this.O=km,t=hr?125:void 0,this.T=new as(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new sh}function sh(){this.i=null,this.g="",this.h=!1}var km=45e3,yr={},Di={};_=Kn.prototype;_.setTimeout=function(t){this.O=t};function _r(t,e,n){t.K=1,t.v=fs(Ve(e)),t.s=n,t.P=!0,rh(t,null)}function rh(t,e){t.F=Date.now(),zn(t),t.A=Ve(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),fh(n.i,"t",i),t.C=0,n=t.l.H,t.h=new sh,t.g=Mh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Am(he(t.La,t,t.g),t.N)),Xc(t.S,t.g,"readystatechange",t.ib),e=t.H?Vc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),kn(),bm(t.j,t.u,t.A,t.m,t.U,t.s)}_.ib=function(t){t=t.target;const e=this.L;e&&Pe(t)==3?e.l():this.La(t)};_.La=function(t){try{if(t==this.g)e:{const h=Pe(this.g);var e=this.g.Ea();const u=this.g.aa();if(!(3>h)&&(h!=3||hr||this.g&&(this.h.h||this.g.fa()||$a(this.g)))){this.I||h!=4||e==7||(e==8||0>=u?kn(3):kn(2)),ds(this);var n=this.g.aa();this.Y=n;t:if(oh(this)){var i=$a(this.g);t="";var s=i.length,r=Pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ot(this),mn(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Nm(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ni(a)){var c=a;break t}}c=null}if(n=c)Dt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vr(this,n);else{this.i=!1,this.o=3,de(12),ot(this),mn(this);break e}}this.P?(ah(this,h,o),hr&&this.i&&h==3&&(Xc(this.S,this.T,"tick",this.hb),this.T.start())):(Dt(this.j,this.m,o,null),vr(this,o)),h==4&&ot(this),this.i&&!this.I&&(h==4?Dh(this.l,this):(this.i=!1,zn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),ot(this),mn(this)}}}catch{}finally{}};function oh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ah(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=xm(t,n),s==Di){e==4&&(t.o=4,de(14),i=!1),Dt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==yr){t.o=4,de(15),Dt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Dt(t.j,t.m,s,null),vr(t,s);oh(t)&&s!=Di&&s!=yr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,de(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_o(e),e.K=!0,de(11))):(Dt(t.j,t.m,n,"[Invalid Chunked Response]"),ot(t),mn(t))}_.hb=function(){if(this.g){var t=Pe(this.g),e=this.g.fa();this.C<e.length&&(ds(this),ah(this,t,e),this.i&&t!=4&&zn(this))}};function xm(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Di:(n=Number(e.substring(n,i)),isNaN(n)?yr:(i+=1,i+n>e.length?Di:(e=e.substr(i,n),t.C=i+n,e)))}_.cancel=function(){this.I=!0,ot(this)};function zn(t){t.V=Date.now()+t.O,lh(t,t.O)}function lh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wn(he(t.gb,t),e)}function ds(t){t.B&&(E.clearTimeout(t.B),t.B=null)}_.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Rm(this.j,this.A),this.K!=2&&(kn(),de(17)),ot(this),this.o=2,mn(this)):lh(this,this.V-t)};function mn(t){t.l.G==0||t.I||Dh(t.l,t)}function ot(t){ds(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,oo(t.T),Jc(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wr(n.h,t))){if(!t.J&&wr(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Oi(n),ms(n);else break e;yo(n),de(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Wn(he(n.cb,n),6e3));if(1>=mh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else at(n,11)}else if((t.J||n.g==t)&&Oi(n),!Ni(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const u=c[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=i.h;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(uo(r,r.h),r.h=null))}if(i.D){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(i.za=w,$(i.F,i.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Oh(i,i.H?i.ka:null,i.V),o.J){yh(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(ds(a),zn(a)),i.g=o}else Nh(i);0<n.i.length&&ys(n)}else c[0]!="stop"&&c[0]!="close"||at(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?at(n,7):mo(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}kn(4)}catch{}}function Om(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(is(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Mm(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(is(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ch(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(is(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Mm(t),i=Om(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pm(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ht(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ht){this.h=e!==void 0?e:t.h,ki(this,t.j),this.s=t.s,this.g=t.g,xi(this,t.m),this.l=t.l,e=t.i;var n=new xn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pa(this,n),this.o=t.o}else t&&(n=String(t).match(hh))?(this.h=!!e,ki(this,n[1]||"",!0),this.s=fn(n[2]||""),this.g=fn(n[3]||"",!0),xi(this,n[4]),this.l=fn(n[5]||"",!0),Pa(this,n[6]||"",!0),this.o=fn(n[7]||"")):(this.h=!!e,this.i=new xn(null,this.h))}ht.prototype.toString=function(){var t=[],e=this.j;e&&t.push(pn(e,La,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(pn(e,La,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(pn(n,n.charAt(0)=="/"?$m:Fm,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",pn(n,Vm)),t.join("")};function Ve(t){return new ht(t)}function ki(t,e,n){t.j=n?fn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pa(t,e,n){e instanceof xn?(t.i=e,Bm(t.i,t.h)):(n||(e=pn(e,Um)),t.i=new xn(e,t.h))}function $(t,e,n){t.i.set(e,n)}function fs(t){return $(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Lm),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lm(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var La=/[#\/\?@]/g,Fm=/[#\?:]/g,$m=/[#\?]/g,Um=/[#\?@]/g,Vm=/#/g;function xn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tt(t){t.g||(t.g=new Map,t.h=0,t.i&&Pm(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_=xn.prototype;_.add=function(t,e){tt(this),this.i=null,t=Jt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function uh(t,e){tt(t),e=Jt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dh(t,e){return tt(t),e=Jt(t,e),t.g.has(e)}_.forEach=function(t,e){tt(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};_.oa=function(){tt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};_.W=function(t){tt(this);let e=[];if(typeof t=="string")dh(this,t)&&(e=e.concat(this.g.get(Jt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};_.set=function(t,e){return tt(this),this.i=null,t=Jt(this,t),dh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function fh(t,e,n){uh(t,e),0<n.length&&(t.i=null,t.g.set(Jt(t,e),Jr(n)),t.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Jt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bm(t,e){e&&!t.j&&(tt(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(uh(this,i),fh(this,s,n))},t)),t.j=e}var jm=class{constructor(e,n){this.h=e,this.g=n}};function ph(t){this.l=t||Hm,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hm=10;function gh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mh(t){return t.h?1:t.g?t.g.size:0}function wr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function uo(t,e){t.g?t.g.add(e):t.h=e}function yh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ph.prototype.cancel=function(){if(this.i=_h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _h(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Jr(t.i)}function fo(){}fo.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};fo.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function qm(){this.g=new fo}function Wm(t,e,n){const i=n||"";try{ch(t,function(s,r){let o=s;Hn(s)&&(o=ro(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Gm(t,e){const n=new ls;if(E.Image){const i=new Image;i.onload=ai(ci,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ai(ci,n,i,"TestLoadImage: error",!1,e),i.onabort=ai(ci,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ai(ci,n,i,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ci(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Qn(t){this.l=t.ac||null,this.j=t.jb||!1}ne(Qn,lo);Qn.prototype.g=function(){return new ps(this.l,this.j)};Qn.prototype.i=function(t){return function(){return t}}({});function ps(t,e){X.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=po,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ne(ps,X);var po=0;_=ps.prototype;_.open=function(t,e){if(this.readyState!=po)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,On(this)};_.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=po};_.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function vh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}_.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yn(this):On(this),this.readyState==3&&vh(this)}};_.Va=function(t){this.g&&(this.response=this.responseText=t,Yn(this))};_.Ua=function(t){this.g&&(this.response=t,Yn(this))};_.ga=function(){this.g&&Yn(this)};function Yn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,On(t)}_.setRequestHeader=function(t,e){this.v.append(t,e)};_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function On(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Km=E.JSON.parse;function B(t){X.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wh,this.K=this.L=!1}ne(B,X);var wh="",zm=/^https?$/i,Qm=["POST","PUT"];_=B.prototype;_.Ka=function(t){this.L=t};_.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mr.g(),this.C=this.u?Ma(this.u):Ma(mr),this.g.onreadystatechange=he(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Fa(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=E.FormData&&t instanceof E.FormData,!(0<=Lc(Qm,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ih(this),0<this.B&&((this.K=Ym(this.g))?(this.g.timeout=this.B,this.g.ontimeout=he(this.qa,this)):this.A=ao(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Fa(this,r)}};function Ym(t){return jt&&fm()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_.qa=function(){typeof Xr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function Fa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Eh(t),gs(t)}function Eh(t){t.D||(t.D=!0,te(t,"complete"),te(t,"error"))}_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,te(this,"complete"),te(this,"abort"),gs(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gs(this,!0)),B.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?Th(this):this.fb())};_.fb=function(){Th(this)};function Th(t){if(t.h&&typeof Xr<"u"&&(!t.C[1]||Pe(t)!=4||t.aa()!=2)){if(t.v&&Pe(t)==4)ao(t.Ha,0,t);else if(te(t,"readystatechange"),Pe(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(hh)[1]||null;if(!s&&E.self&&E.self.location){var r=E.self.location.protocol;s=r.substr(0,r.length-1)}i=!zm.test(s?s.toLowerCase():"")}n=i}if(n)te(t,"complete"),te(t,"success");else{t.m=6;try{var o=2<Pe(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Eh(t)}}finally{gs(t)}}}}function gs(t,e){if(t.g){Ih(t);const n=t.g,i=t.C[0]?bi:null;t.g=null,t.C=null,e||te(t,"ready");try{n.onreadystatechange=i}catch{}}}function Ih(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function Pe(t){return t.g?t.g.readyState:0}_.aa=function(){try{return 2<Pe(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Km(e)}};function $a(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ch(t){let e="";return eo(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function go(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Ch(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$(t,e,n))}function ln(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sh(t){this.Ca=0,this.i=[],this.j=new ls,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ln("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ln("baseRetryDelayMs",5e3,t),this.bb=ln("retryDelaySeedMs",1e4,t),this.$a=ln("forwardChannelMaxRetries",2,t),this.ta=ln("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ph(t&&t.concurrentRequestLimit),this.Fa=new qm,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=Sh.prototype;_.ma=8;_.G=1;function mo(t){if(Ah(t),t.G==3){var e=t.U++,n=Ve(t.F);$(n,"SID",t.I),$(n,"RID",e),$(n,"TYPE","terminate"),Xn(t,n),e=new Kn(t,t.j,e,void 0),e.K=2,e.v=fs(Ve(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mh(e.l,null),e.g.da(e.v)),e.F=Date.now(),zn(e)}xh(t)}function ms(t){t.g&&(_o(t),t.g.cancel(),t.g=null)}function Ah(t){ms(t),t.u&&(E.clearTimeout(t.u),t.u=null),Oi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function ys(t){gh(t.h)||t.m||(t.m=!0,zc(t.Ja,t),t.C=0)}function Xm(t,e){return mh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Wn(he(t.Ja,t,e),kh(t,t.C)),t.C++,!0)}_.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Kn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Vc(r),Bc(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=bh(this,s,e),n=Ve(this.F),$(n,"RID",t),$(n,"CVER",22),this.D&&$(n,"X-HTTP-Session-Id",this.D),Xn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Ch(r)))+"&"+e:this.o&&go(n,this.o,r)),uo(this.h,s),this.Ya&&$(n,"TYPE","init"),this.O?($(n,"$req",e),$(n,"SID","null"),s.Z=!0,_r(s,n,null)):_r(s,n,e),this.G=2}}else this.G==3&&(t?Ua(this,t):this.i.length==0||gh(this.h)||Ua(this))};function Ua(t,e){var n;e?n=e.m:n=t.U++;const i=Ve(t.F);$(i,"SID",t.I),$(i,"RID",n),$(i,"AID",t.T),Xn(t,i),t.o&&t.s&&go(i,t.o,t.s),n=new Kn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=bh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),uo(t.h,n),_r(n,i,e)}function Xn(t,e){t.ia&&eo(t.ia,function(n,i){$(e,i,n)}),t.l&&ch({},function(n,i){$(e,i,n)})}function bh(t,e,n){n=Math.min(t.i.length,n);var i=t.l?he(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const h=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{Wm(h,o,"req"+c+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Nh(t){t.g||t.u||(t.Z=1,zc(t.Ia,t),t.A=0)}function yo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Wn(he(t.Ia,t),kh(t,t.A)),t.A++,!0)}_.Ia=function(){if(this.u=null,Rh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wn(he(this.eb,this),t)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,de(10),ms(this),Rh(this))};function _o(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function Rh(t){t.g=new Kn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ve(t.sa);$(e,"RID","rpc"),$(e,"SID",t.I),$(e,"CI",t.L?"0":"1"),$(e,"AID",t.T),$(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&go(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=fs(Ve(e)),n.s=null,n.P=!0,rh(n,t)}_.cb=function(){this.v!=null&&(this.v=null,ms(this),yo(this),de(19))};function Oi(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function Dh(t,e){var n=null;if(t.g==e){Oi(t),_o(t),t.g=null;var i=2}else if(wr(t.h,e))n=e.D,yh(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=cs(),te(i,new th(i,n)),ys(t)}else Nh(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Xm(t,e)||i==2&&yo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:at(t,5);break;case 4:at(t,10);break;case 3:at(t,6);break;default:at(t,2)}}}function kh(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function at(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=he(t.kb,t);n||(n=new ht("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||ki(n,"https"),fs(n)),Gm(n.toString(),i)}else de(2);t.G=0,t.l&&t.l.va(e),xh(t),Ah(t)}_.kb=function(t){t?(this.j.info("Successfully pinged google.com"),de(2)):(this.j.info("Failed to ping google.com"),de(1))};function xh(t){if(t.G=0,t.la=[],t.l){const e=_h(t.h);(e.length!=0||t.i.length!=0)&&(Na(t.la,e),Na(t.la,t.i),t.h.i.length=0,Jr(t.i),t.i.length=0),t.l.ua()}}function Oh(t,e,n){var i=n instanceof ht?Ve(n):new ht(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),xi(i,i.m);else{var s=E.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new ht(null,void 0);i&&ki(r,i),e&&(r.g=e),s&&xi(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&$(i,n,e),$(i,"VER",t.ma),Xn(t,i),i}function Mh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new B(new Qn({jb:!0})):new B(t.ra),e.Ka(t.H),e}function Ph(){}_=Ph.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function Mi(){if(jt&&!(10<=Number(pm)))throw Error("Environmental error: no available transport.")}Mi.prototype.g=function(t,e){return new ve(t,e)};function ve(t,e){X.call(this),this.g=new Sh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ni(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ni(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zt(this)}ne(ve,X);ve.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;de(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Oh(t,null,t.V),ys(t)};ve.prototype.close=function(){mo(this.g)};ve.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ro(t),t=n);e.i.push(new jm(e.ab++,t)),e.G==3&&ys(e)};ve.prototype.M=function(){this.g.l=null,delete this.j,mo(this.g),delete this.g,ve.X.M.call(this)};function Lh(t){co.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ne(Lh,co);function Fh(){ho.call(this),this.status=1}ne(Fh,ho);function Zt(t){this.g=t}ne(Zt,Ph);Zt.prototype.xa=function(){te(this.g,"a")};Zt.prototype.wa=function(t){te(this.g,new Lh(t))};Zt.prototype.va=function(t){te(this.g,new Fh)};Zt.prototype.ua=function(){te(this.g,"b")};Mi.prototype.createWebChannel=Mi.prototype.g;ve.prototype.send=ve.prototype.u;ve.prototype.open=ve.prototype.m;ve.prototype.close=ve.prototype.close;hs.NO_ERROR=0;hs.TIMEOUT=8;hs.HTTP_ERROR=6;nh.COMPLETE="complete";ih.EventType=Gn;Gn.OPEN="a";Gn.CLOSE="b";Gn.ERROR="c";Gn.MESSAGE="d";X.prototype.listen=X.prototype.N;B.prototype.listenOnce=B.prototype.O;B.prototype.getLastError=B.prototype.Oa;B.prototype.getLastErrorCode=B.prototype.Ea;B.prototype.getStatus=B.prototype.aa;B.prototype.getResponseJson=B.prototype.Sa;B.prototype.getResponseText=B.prototype.fa;B.prototype.send=B.prototype.da;B.prototype.setWithCredentials=B.prototype.Ka;var Jm=function(){return new Mi},Zm=function(){return cs()},Ks=hs,ey=nh,ty=It,Va={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ny=Qn,hi=ih,iy=B;const Ba="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Zi("@firebase/firestore");function ja(){return mt.logLevel}function v(t,...e){if(mt.logLevel<=R.DEBUG){const n=e.map(vo);mt.debug(`Firestore (${en}): ${t}`,...n)}}function yt(t,...e){if(mt.logLevel<=R.ERROR){const n=e.map(vo);mt.error(`Firestore (${en}): ${t}`,...n)}}function Er(t,...e){if(mt.logLevel<=R.WARN){const n=e.map(vo);mt.warn(`Firestore (${en}): ${t}`,...n)}}function vo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t="Unexpected state"){const e=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: `+t;throw yt(e),new Error(e)}function H(t,e){t||S()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Ze{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class ry{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oy{constructor(e){this.t=e,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ut,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(H(typeof i.accessToken=="string"),new $h(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new se(e)}}class ay{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=se.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(H(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ly{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new ay(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hy{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.A=n.token,new cy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=uy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function O(t,e){return t<e?-1:t>e?1:0}function Ht(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Y(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new Y(0,0))}static max(){return new U(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,i){n===void 0?n=0:n>e.length&&S(),i===void 0?i=e.length-n:i>e.length-n&&S(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class V extends Mn{construct(e,n,i){return new V(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new T(g.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new V(n)}static emptyPath(){return new V([])}}const dy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends Mn{construct(e,n,i){return new le(e,n,i)}static isValidIdentifier(e){return dy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new T(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new T(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(n)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(V.fromString(e))}static fromName(e){return new I(V.fromString(e).popFirst(5))}static empty(){return new I(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return V.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new V(e.slice()))}}function fy(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=U.fromTimestamp(i===1e9?new Y(n+1,0):new Y(n,i));return new Qe(s,I.empty(),e)}function py(t){return new Qe(t.readTime,t.key,-1)}class Qe{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Qe(U.min(),I.empty(),-1)}static max(){return new Qe(U.max(),I.empty(),-1)}}function gy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=I.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vh(t){if(t.code!==g.FAILED_PRECONDITION||t.message!==my)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,i)=>{n(e)})}static reject(e){return new p((n,i)=>{i(e)})}static waitFor(e){return new p((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=p.resolve(!1);for(const i of e)n=n.next(s=>s?p.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new p((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&i(o)},h=>s(h))}})}static doWhile(e,n){return new p((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function _s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>n.writeSequenceNumber(i))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Bh.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){return t==null}function Li(t){return t===0&&1/t==-1/0}function vy(t){return typeof t=="number"&&Number.isInteger(t)&&!Li(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw s instanceof DOMException?new wy("Invalid base64 string: "+s):s}}(e);return new Be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const Ey=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(t){if(H(!!t),typeof t=="string"){let e=0;const n=Ey.exec(t);if(H(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:J(t.seconds),nanos:J(t.nanos)}}function J(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pn(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fi(t){const e=_t(t.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ty(t)?4:Iy(t)?9007199254740991:10:S()}function Me(t,e){if(t===e)return!0;const n=qt(t);if(n!==qt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fi(t).isEqual(Fi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=_t(i.timestampValue),o=_t(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pn(i.bytesValue).isEqual(Pn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return J(i.geoPointValue.latitude)===J(s.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return J(i.integerValue)===J(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=J(i.doubleValue),o=J(s.doubleValue);return r===o?Li(r)===Li(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ht(t.arrayValue.values||[],e.arrayValue.values||[],Me);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Ha(r)!==Ha(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Me(r[a],o[a])))return!1;return!0}(t,e);default:return S()}}function Ln(t,e){return(t.values||[]).find(n=>Me(n,e))!==void 0}function Wt(t,e){if(t===e)return 0;const n=qt(t),i=qt(e);if(n!==i)return O(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=J(s.integerValue||s.doubleValue),a=J(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return qa(t.timestampValue,e.timestampValue);case 4:return qa(Fi(t),Fi(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Pn(s),a=Pn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=O(o[l],a[l]);if(c!==0)return c}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=O(J(s.latitude),J(r.latitude));return o!==0?o:O(J(s.longitude),J(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Wt(o[l],a[l]);if(c)return c}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===ui.mapValue&&r===ui.mapValue)return 0;if(s===ui.mapValue)return 1;if(r===ui.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const u=O(a[h],c[h]);if(u!==0)return u;const d=Wt(o[a[h]],l[c[h]]);if(d!==0)return d}return O(a.length,c.length)}(t.mapValue,e.mapValue);default:throw S()}}function qa(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=_t(t),i=_t(e),s=O(n.seconds,i.seconds);return s!==0?s:O(n.nanos,i.nanos)}function Gt(t){return Tr(t)}function Tr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=_t(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Tr(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Tr(i.fields[a])}`;return r+"}"}(t.mapValue):S();var e,n}function Ir(t){return!!t&&"integerValue"in t}function Eo(t){return!!t&&"arrayValue"in t}function _i(t){return!!t&&"mapValue"in t}function yn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jn(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=yn(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Iy(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.position=e,this.inclusive=n}}function Wa(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=I.comparator(I.fromName(o.referenceValue),n.key):i=Wt(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ga(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Me(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{}class z extends Hh{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Sy(e,n,i):n==="array-contains"?new Ny(e,i):n==="in"?new Ry(e,i):n==="not-in"?new Dy(e,i):n==="array-contains-any"?new ky(e,i):new z(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Ay(e,i):new by(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wt(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.matchesComparison(Wt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ye extends Hh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Ye(e,n)}matches(e){return qh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qh(t){return t.op==="and"}function Wh(t){return Cy(t)&&qh(t)}function Cy(t){for(const e of t.filters)if(e instanceof Ye)return!1;return!0}function Cr(t){if(t instanceof z)return t.field.canonicalString()+t.op.toString()+Gt(t.value);if(Wh(t))return t.filters.map(e=>Cr(e)).join(",");{const e=t.filters.map(n=>Cr(n)).join(",");return`${t.op}(${e})`}}function Gh(t,e){return t instanceof z?function(n,i){return i instanceof z&&n.op===i.op&&n.field.isEqual(i.field)&&Me(n.value,i.value)}(t,e):t instanceof Ye?function(n,i){return i instanceof Ye&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&Gh(r,i.filters[o]),!0):!1}(t,e):void S()}function Kh(t){return t instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${Gt(e.value)}`}(t):t instanceof Ye?function(e){return e.op.toString()+" {"+e.getFilters().map(Kh).join(" ,")+"}"}(t):"Filter"}class Sy extends z{constructor(e,n,i){super(e,n,i),this.key=I.fromName(i.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ay extends z{constructor(e,n){super(e,"in",n),this.keys=zh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class by extends z{constructor(e,n){super(e,"not-in",n),this.keys=zh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>I.fromName(i.referenceValue))}class Ny extends z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eo(n)&&Ln(n.arrayValue,this.value)}}class Ry extends z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ln(this.value.arrayValue,n)}}class Dy extends z{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ln(this.value.arrayValue,n)}}class ky extends z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ln(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n="asc"){this.field=e,this.dir=n}}function xy(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.comparator=e,this.root=n||Z.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new di(this.root,e,this.comparator,!1)}getReverseIterator(){return new di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new di(this.root,e,this.comparator,!0)}}class di{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Z.RED,this.left=s??Z.EMPTY,this.right=r??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Z(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Z.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Z(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ka(this.data.getIterator())}getIteratorFrom(e){return new Ka(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class Ka{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new be([])}unionWith(e){let n=new fe(le.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new be(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ht(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!_i(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yn(n)}setAll(e){let n=le.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=yn(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());_i(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Me(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];_i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Jn(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Se(yn(this.value))}}function Qh(t){const e=[];return Jn(t.fields,(n,i)=>{const s=new le([n]);if(_i(i)){const r=Qh(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,U.min(),U.min(),U.min(),Se.empty(),0)}static newFoundDocument(e,n,i,s){return new Ce(e,1,n,U.min(),i,s,0)}static newNoDocument(e,n){return new Ce(e,2,n,U.min(),U.min(),Se.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,U.min(),U.min(),Se.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function za(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Oy(t,e,n,i,s,r,o)}function To(t){const e=L(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Cr(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Gt(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Gt(i)).join(",")),e._t=n}return e._t}function Io(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xy(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ga(t.startAt,e.startAt)&&Ga(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function My(t,e,n,i,s,r,o,a){return new vs(t,e,n,i,s,r,o,a)}function Py(t){return new vs(t)}function Qa(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ly(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fy(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $y(t){return t.collectionGroup!==null}function Mt(t){const e=L(t);if(e.wt===null){e.wt=[];const n=Fy(e),i=Ly(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new _n(n)),e.wt.push(new _n(le.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new _n(le.keyField(),r))}}}return e.wt}function Kt(t){const e=L(t);if(!e.gt)if(e.limitType==="F")e.gt=za(e.path,e.collectionGroup,Mt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Mt(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new _n(r.field,o))}const i=e.endAt?new $i(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new $i(e.startAt.position,e.startAt.inclusive):null;e.gt=za(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.gt}function Sr(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yh(t,e){return Io(Kt(t),Kt(e))&&t.limitType===e.limitType}function Xh(t){return`${To(Kt(t))}|lt:${t.limitType}`}function Ya(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Kh(i)).join(", ")}]`),wo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Gt(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Gt(i)).join(",")),`Target(${n})`}(Kt(t))}; limitType=${t.limitType})`}function Co(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):I.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of Mt(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Wa(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,Mt(n),i)||n.endAt&&!function(s,r,o){const a=Wa(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,Mt(n),i))}(t,e)}function Uy(t){return(e,n)=>{let i=!1;for(const s of Mt(t)){const r=Vy(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Vy(t,e,n){const i=t.field.isKeyField()?I.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Wt(a,l):S()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function Zh(t){return{integerValue:""+t}}function By(t,e){return vy(e)?Zh(e):Jh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this._=void 0}}function jy(t,e,n){return t instanceof Ui?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Fn?tu(t,e):t instanceof $n?nu(t,e):function(i,s){const r=eu(i,s),o=Xa(r)+Xa(i.It);return Ir(r)&&Ir(i.It)?Zh(o):Jh(i.Tt,o)}(t,e)}function Hy(t,e,n){return t instanceof Fn?tu(t,e):t instanceof $n?nu(t,e):n}function eu(t,e){return t instanceof Vi?Ir(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Ui extends ws{}class Fn extends ws{constructor(e){super(),this.elements=e}}function tu(t,e){const n=iu(e);for(const i of t.elements)n.some(s=>Me(s,i))||n.push(i);return{arrayValue:{values:n}}}class $n extends ws{constructor(e){super(),this.elements=e}}function nu(t,e){let n=iu(e);for(const i of t.elements)n=n.filter(s=>!Me(s,i));return{arrayValue:{values:n}}}class Vi extends ws{constructor(e,n){super(),this.Tt=e,this.It=n}}function Xa(t){return J(t.integerValue||t.doubleValue)}function iu(t){return Eo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qy(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Fn&&i instanceof Fn||n instanceof $n&&i instanceof $n?Ht(n.elements,i.elements,Me):n instanceof Vi&&i instanceof Vi?Me(n.It,i.It):n instanceof Ui&&i instanceof Ui}(t.transform,e.transform)}class Wy{constructor(e,n){this.version=e,this.transformResults=n}}class Fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Es{}function su(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ou(t.key,Fe.none()):new Zn(t.key,t.data,Fe.none());{const n=t.data,i=Se.empty();let s=new fe(le.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ct(t.key,i,new be(s.toArray()),Fe.none())}}function Gy(t,e,n){t instanceof Zn?function(i,s,r){const o=i.value.clone(),a=Za(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ct?function(i,s,r){if(!vi(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Za(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(ru(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function vn(t,e,n,i){return t instanceof Zn?function(s,r,o,a){if(!vi(s.precondition,r))return o;const l=s.value.clone(),c=el(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ct?function(s,r,o,a){if(!vi(s.precondition,r))return o;const l=el(s.fieldTransforms,a,r),c=r.data;return c.setAll(ru(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,i):function(s,r,o){return vi(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Ky(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=eu(i.transform,s||null);r!=null&&(n===null&&(n=Se.empty()),n.set(i.field,r))}return n||null}function Ja(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ht(n,i,(s,r)=>qy(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zn extends Es{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ct extends Es{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ru(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Za(t,e,n){const i=new Map;H(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Hy(o,a,n[s]))}return i}function el(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,jy(r,o,e))}return i}class ou extends Es{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zy extends Es{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,A;function Qy(t){switch(t){default:return S();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Yy(t){if(t===void 0)return yt("GRPC error has no .code"),g.UNKNOWN;switch(t){case j.OK:return g.OK;case j.CANCELLED:return g.CANCELLED;case j.UNKNOWN:return g.UNKNOWN;case j.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case j.INTERNAL:return g.INTERNAL;case j.UNAVAILABLE:return g.UNAVAILABLE;case j.UNAUTHENTICATED:return g.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case j.NOT_FOUND:return g.NOT_FOUND;case j.ALREADY_EXISTS:return g.ALREADY_EXISTS;case j.PERMISSION_DENIED:return g.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case j.ABORTED:return g.ABORTED;case j.OUT_OF_RANGE:return g.OUT_OF_RANGE;case j.UNIMPLEMENTED:return g.UNIMPLEMENTED;case j.DATA_LOSS:return g.DATA_LOSS;default:return S()}}(A=j||(j={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return jh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=new me(I.comparator);function Bi(){return Xy}const au=new me(I.comparator);function fi(...t){let e=au;for(const n of t)e=e.insert(n.key,n);return e}function lu(t){let e=au;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function lt(){return wn()}function cu(){return wn()}function wn(){return new tn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jy=new me(I.comparator),Zy=new fe(I.comparator);function re(...t){let e=Zy;for(const n of t)e=e.add(n);return e}const e_=new fe(O);function t_(){return e_}class n_{constructor(e,n){this.databaseId=e,this.yt=n}}function Ar(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i_(t,e){return t.yt?e.toBase64():e.toUint8Array()}function s_(t,e){return Ar(t,e.toTimestamp())}function Pt(t){return H(!!t),U.fromTimestamp(function(e){const n=_t(e);return new Y(n.seconds,n.nanos)}(t))}function hu(t,e){return function(n){return new V(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function r_(t){const e=V.fromString(t);return H(f_(e)),e}function br(t,e){return hu(t.databaseId,e.path)}function o_(t){const e=r_(t);return e.length===4?V.emptyPath():l_(e)}function a_(t){return new V(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function l_(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tl(t,e,n){return{name:br(t,e),fields:n.value.mapValue.fields}}function c_(t,e){let n;if(e instanceof Zn)n={update:tl(t,e.key,e.value)};else if(e instanceof ou)n={delete:br(t,e.key)};else if(e instanceof Ct)n={update:tl(t,e.key,e.data),updateMask:d_(e.fieldMask)};else{if(!(e instanceof zy))return S();n={verify:br(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Ui)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $n)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vi)return{fieldPath:r.field.canonicalString(),increment:o.It};throw S()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:s_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:S()}(t,e.precondition)),n}function h_(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Pt(i.updateTime):Pt(s);return r.isEqual(U.min())&&(r=Pt(s)),new Wy(r,i.transformResults||[])}(n,e))):[]}function u_(t){let e=o_(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){H(i===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(h){const u=uu(h);return u instanceof Ye&&Wh(u)?u.getFilters():[u]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(u){return new _n(Rt(u.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(u.direction))}(h)));let a=null;n.limit&&(a=function(h){let u;return u=typeof h=="object"?h.value:h,wo(u)?null:u}(n.limit));let l=null;n.startAt&&(l=function(h){const u=!!h.before,d=h.values||[];return new $i(d,u)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const u=!h.before,d=h.values||[];return new $i(d,u)}(n.endAt)),My(e,s,o,r,a,"F",l,c)}function uu(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rt(e.unaryFilter.field);return z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Rt(e.unaryFilter.field);return z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rt(e.unaryFilter.field);return z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rt(e.unaryFilter.field);return z.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(t):t.fieldFilter!==void 0?function(e){return z.create(Rt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ye.create(e.compositeFilter.filters.map(n=>uu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(t):S()}function Rt(t){return le.fromServerFormat(t.fieldPath)}function d_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function f_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Gy(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=vn(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=vn(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=cu();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=su(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ht(this.mutations,e.mutations,(n,i)=>Ja(n,i))&&Ht(this.baseMutations,e.baseMutations,(n,i)=>Ja(n,i))}}class So{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){H(e.mutations.length===i.length);let s=Jy;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new So(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.oe=e}}function y_(t){const e=u_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.Ze=new v_}addToCollectionParentIndex(e,n){return this.Ze.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(Qe.min())}updateCollectionGroup(e,n,i){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class v_{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new fe(V.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new fe(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new zt(0)}static Sn(){return new zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.changes=new tn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?p.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&vn(i.mutation,s,be.empty(),Y.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,re()).next(()=>i))}getLocalViewOfDocuments(e,n,i=re()){const s=lt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=fi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=lt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,re()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Bi();const o=wn(),a=wn();return n.forEach((l,c)=>{const h=i.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof Ct)?r=r.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),vn(h.mutation,c,h.mutation.getFieldMask(),Y.now())):o.set(c.key,be.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var u;return a.set(c,new E_(h,(u=o.get(c))!==null&&u!==void 0?u:null))}),a))}recalculateAndSaveOverlays(e,n){const i=wn();let s=new me((o,a)=>o-a),r=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=i.get(l)||be.empty();h=a.applyToLocalView(c,h),i.set(l,h);const u=(s.get(a.batchId)||re()).add(l);s=s.insert(a.batchId,u)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,u=cu();h.forEach(d=>{if(!r.has(d)){const f=su(n.get(d),i.get(d));f!==null&&u.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,u))}return p.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$y(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):p.resolve(lt());let a=-1,l=r;return o.next(c=>p.forEach(c,(h,u)=>(a<u.largestBatchId&&(a=u.largestBatchId),r.get(h)?p.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,re())).next(h=>({batchId:a,changes:lu(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new I(n)).next(i=>{let s=fi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=fi();return this.indexManager.getCollectionParents(e,s).next(o=>p.forEach(o,a=>{const l=function(c,h){return new vs(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((h,u)=>{r=r.insert(h,u)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ce.newInvalidDocument(c)))});let o=fi();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&vn(c.mutation,l,be.empty(),Y.now()),Co(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return p.resolve(this.es.get(n))}saveBundleMetadata(e,n){var i;return this.es.set(n.id,{id:(i=n).id,version:i.version,createTime:Pt(i.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(i){return{name:i.name,query:y_(i.bundledQuery),readTime:Pt(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.overlays=new me(I.comparator),this.ss=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){const i=lt();return p.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.ce(e,n,r)}),p.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ss.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(i)),p.resolve()}getOverlaysForCollection(e,n,i){const s=lt(),r=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return p.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new me((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let h=r.get(c.largestBatchId);h===null&&(h=lt(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=lt(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=s)););return p.resolve(a)}ce(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ss.get(s.largestBatchId).delete(i.key);this.ss.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new g_(n,i));let r=this.ss.get(n);r===void 0&&(r=re(),this.ss.set(n,r)),this.ss.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.rs=new fe(W.os),this.us=new fe(W.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const i=new W(e,n);this.rs=this.rs.add(i),this.us=this.us.add(i)}hs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ls(new W(e,n))}fs(e,n){e.forEach(i=>this.removeReference(i,n))}ds(e){const n=new I(new V([])),i=new W(n,e),s=new W(n,e+1),r=[];return this.us.forEachInRange([i,s],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new I(new V([])),i=new W(n,e),s=new W(n,e+1);let r=re();return this.us.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new W(e,0),i=this.rs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class W{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return I.comparator(e.key,n.key)||O(e.gs,n.gs)}static cs(e,n){return O(e.gs,n.gs)||I.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new fe(W.os)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new p_(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.ps=this.ps.add(new W(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Ts(i),r=s<0?0:s;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new W(n,0),s=new W(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([i,s],o=>{const a=this.Is(o.gs);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new fe(O);return n.forEach(s=>{const r=new W(s,0),o=new W(s,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{i=i.add(a.gs)})}),p.resolve(this.Es(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;I.isDocumentKey(r)||(r=r.child(""));const o=new W(new I(r),0);let a=new fe(O);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gs)),!0)},o),p.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(i=>{const s=this.Is(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){H(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ps;return p.forEach(n.mutations,s=>{const r=new W(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ps=i})}bn(e){}containsKey(e,n){const i=new W(n,0),s=this.ps.firstAfterOrEqual(i);return p.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.Rs=e,this.docs=new me(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Rs(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return p.resolve(i?i.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let i=Bi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ce.newInvalidDocument(s))}),p.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Bi();const o=n.path,a=new I(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gy(py(h),i)<=0||(s.has(h.key)||Co(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,n,i,s){S()}bs(e,n){return p.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new b_(this)}getSize(e){return p.resolve(this.size)}}class b_ extends w_{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Xn.addEntry(e,s)):this.Xn.removeEntry(i)}),p.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.persistence=e,this.vs=new tn(n=>To(n),Io),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Ao,this.targetCount=0,this.Ss=zt.Vn()}forEachTarget(e,n){return this.vs.forEach((i,s)=>n(s)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ps&&(this.Ps=n),p.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new zt(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.xn(n),p.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),p.waitFor(r).next(()=>s)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const i=this.vs.get(n)||null;return p.resolve(i)}addMatchingKeys(e,n,i){return this.Vs.hs(n,i),p.resolve()}removeMatchingKeys(e,n,i){this.Vs.fs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),p.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Vs.ws(n);return p.resolve(i)}containsKey(e,n){return p.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Bh(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new N_(this),this.indexManager=new __,this.remoteDocumentCache=function(i){return new A_(i)}(i=>this.referenceDelegate.ks(i)),this.Tt=new m_(n),this.Os=new I_(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new C_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ds[e.toKey()];return i||(i=new S_(n,this.referenceDelegate),this.Ds[e.toKey()]=i),i}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,i){v("MemoryPersistence","Starting transaction:",e);const s=new D_(this.Cs.next());return this.referenceDelegate.Ms(),i(s).next(r=>this.referenceDelegate.Fs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}$s(e,n){return p.or(Object.values(this.Ds).map(i=>()=>i.containsKey(e,n)))}}class D_ extends yy{constructor(e){super(),this.currentSequenceNumber=e}}class bo{constructor(e){this.persistence=e,this.Bs=new Ao,this.Ls=null}static qs(e){return new bo(e)}get Us(){if(this.Ls)return this.Ls;throw S()}addReference(e,n,i){return this.Bs.addReference(i,n),this.Us.delete(i.toString()),p.resolve()}removeReference(e,n,i){return this.Bs.removeReference(i,n),this.Us.add(i.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),p.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(s=>this.Us.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Us.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Us,i=>{const s=I.fromPath(i);return this.Ks(e,s).next(r=>{r||n.removeEntry(s,U.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(i=>{i?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return p.or([()=>p.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Ci=i,this.xi=s}static Ni(e,n){let i=re(),s=re();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new No(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Mi(e,n).next(r=>r||this.Fi(e,n,s,i)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Qa(n))return p.resolve(null);let i=Kt(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sr(n,null,"F"),i=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=re(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,Sr(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,i,s){return Qa(n)||s.isEqual(U.min())?this.$i(e,n):this.Oi.getDocuments(e,i).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,i,s)?this.$i(e,n):(ja()<=R.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ya(n)),this.qi(e,o,n,fy(s,-1)))})}Bi(e,n){let i=new fe(Uy(e));return n.forEach((s,r)=>{Co(e,r)&&(i=i.add(r))}),i}Li(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}$i(e,n){return ja()<=R.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ya(n)),this.Oi.getDocumentsMatchingQuery(e,n,Qe.min())}qi(e,n,i,s){return this.Oi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,i,s){this.persistence=e,this.Ui=n,this.Tt=s,this.Ki=new me(O),this.Gi=new tn(r=>To(r),Io),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(i)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T_(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function O_(t,e,n,i){return new x_(t,e,n,i)}async function du(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.zi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=re();for(const c of s){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function M_(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,u=h.keys();let d=p.resolve();return u.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(y=>{const w=l.docVersions.get(f);H(w!==null),y.version.compareTo(w)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),c.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=re();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function P_(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function L_(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class nl{constructor(){this.activeTargetIds=t_()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F_{constructor(){this.Ur=new nl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,i){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new nl,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,i,s,r){const o=this.fo(e,n);v("RestConnection","Sending: ",o,i);const a={};return this._o(a,s,r),this.wo(e,o,a,i).then(l=>(v("RestConnection","Received: ",l),l),l=>{throw Er("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}mo(e,n,i,s,r,o){return this.lo(e,n,i,s,r)}_o(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+en,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}fo(e,n){const i=U_[e];return`${this.co}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,i,s){return new Promise((r,o)=>{const a=new iy;a.setWithCredentials(!0),a.listenOnce(ey.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ks.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Ks.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new T(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ks.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let u=a.getResponseJson();Array.isArray(u)&&(u=u[0]);const d=u==null?void 0:u.error;if(d&&d.status&&d.message){const f=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(w)>=0?w:g.UNKNOWN}(d.status);o(new T(f,d.message))}else o(new T(g.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(g.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}yo(e,n,i){const s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Jm(),o=Zm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ny({})),this._o(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const l=s.join("");v("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,u=!1;const d=new V_({Yr:y=>{u?v("Connection","Not sending because WebChannel is closed:",y):(h||(v("Connection","Opening WebChannel transport."),c.open(),h=!0),v("Connection","WebChannel sending:",y),c.send(y))},Zr:()=>c.close()}),f=(y,w,x)=>{y.listen(w,pe=>{try{x(pe)}catch(ie){setTimeout(()=>{throw ie},0)}})};return f(c,hi.EventType.OPEN,()=>{u||v("Connection","WebChannel transport opened.")}),f(c,hi.EventType.CLOSE,()=>{u||(u=!0,v("Connection","WebChannel transport closed"),d.oo())}),f(c,hi.EventType.ERROR,y=>{u||(u=!0,Er("Connection","WebChannel transport errored:",y),d.oo(new T(g.UNAVAILABLE,"The operation could not be completed")))}),f(c,hi.EventType.MESSAGE,y=>{var w;if(!u){const x=y.data[0];H(!!x);const pe=x,ie=pe.error||((w=pe[0])===null||w===void 0?void 0:w.error);if(ie){v("Connection","WebChannel received error:",ie);const bt=ie.status;let on=function(Gd){const na=j[Gd];if(na!==void 0)return Yy(na)}(bt),ta=ie.message;on===void 0&&(on=g.INTERNAL,ta="Unknown error status: "+bt+" with message "+ie.message),u=!0,d.oo(new T(on,ta)),c.close()}else v("Connection","WebChannel received:",x),d.uo(x)}}),f(o,ty.STAT_EVENT,y=>{y.stat===Va.PROXY?v("Connection","Detected buffering proxy"):y.stat===Va.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function zs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){return new n_(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=i,this.Io=s,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),i=Math.max(0,Date.now()-this.Ro),s=Math.max(0,n-i);s>0&&v("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,i,s,r,o,a,l){this.Ys=e,this.So=i,this.Do=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new fu(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Co===n&&this.jo(i,s)},i=>{e(()=>{const s=new T(g.UNKNOWN,"Fetching auth token failed: "+i.message);return this.zo(s)})})}jo(e,n){const i=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{i(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(s=>{i(()=>this.zo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H_ extends j_{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=h_(e.writeResults,e.commitTime),i=Pt(e.commitTime);return this.listener.eu(i,n)}return H(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=a_(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>c_(this.Tt,i))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_ extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.Tt=s,this.iu=!1}ru(){if(this.iu)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.lo(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(g.UNKNOWN,s.toString())})}mo(e,n,i,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(g.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class W_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(yt(n),this.cu=!1):v("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{i.enqueueAndForget(async()=>{ti(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=L(a);l.mu.add(4),await ei(l),l.pu.set("Unknown"),l.mu.delete(4),await Is(l)}(this))})}),this.pu=new W_(i,s)}}async function Is(t){if(ti(t))for(const e of t.gu)await e(!0)}async function ei(t){for(const e of t.gu)await e(!1)}function ti(t){return L(t).mu.size===0}async function pu(t,e,n){if(!_s(e))throw e;t.mu.add(1),await ei(t),t.pu.set("Offline"),n||(n=()=>P_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Is(t)})}function gu(t,e){return e().catch(n=>pu(t,n,e))}async function Cs(t){const e=L(t),n=Xe(e);let i=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;K_(e);)try{const s=await L_(e.localStore,i);if(s===null){e._u.length===0&&n.Bo();break}i=s.batchId,z_(e,s)}catch(s){await pu(e,s)}mu(e)&&yu(e)}function K_(t){return ti(t)&&t._u.length<10}function z_(t,e){t._u.push(e);const n=Xe(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function mu(t){return ti(t)&&!Xe(t).Oo()&&t._u.length>0}function yu(t){Xe(t).start()}async function Q_(t){Xe(t).su()}async function Y_(t){const e=Xe(t);for(const n of t._u)e.tu(n.mutations)}async function X_(t,e,n){const i=t._u.shift(),s=So.from(i,e,n);await gu(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Cs(t)}async function J_(t,e){e&&Xe(t).Xo&&await async function(n,i){if(s=i.code,Qy(s)&&s!==g.ABORTED){const r=n._u.shift();Xe(n).$o(),await gu(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Cs(n)}var s}(t,e),mu(t)&&yu(t)}async function sl(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const i=ti(n);n.mu.add(3),await ei(n),i&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Is(n)}async function Z_(t,e){const n=L(t);e?(n.mu.delete(2),await Is(n)):e||(n.mu.add(2),await ei(n),n.pu.set("Unknown"))}function Xe(t){return t.Eu||(t.Eu=function(e,n,i){const s=L(e);return s.ru(),new H_(n,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,i)}(t.datastore,t.asyncQueue,{Xr:Q_.bind(null,t),no:J_.bind(null,t),nu:Y_.bind(null,t),eu:X_.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Cs(t)):(await t.Eu.stop(),t._u.length>0&&(v("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Ro(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(t,e){if(yt("AsyncQueue",`${e}: ${t}`),_s(t))return new T(g.UNAVAILABLE,`${e}: ${t}`);throw t}class ev{constructor(){this.queries=new tn(e=>Xh(e),Yh),this.onlineState="Unknown",this.vu=new Set}}function tv(t){t.vu.forEach(e=>{e.next()})}class nv{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new tn(a=>Xh(a),Yh),this.uc=new Map,this.cc=new Set,this.ac=new me(I.comparator),this.hc=new Map,this.lc=new Ao,this.fc={},this.dc=new Map,this._c=zt.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function iv(t,e,n){const i=av(t);try{const s=await function(r,o){const a=L(r),l=Y.now(),c=o.reduce((d,f)=>d.add(f.key),re());let h,u;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Bi(),y=re();return a.ji.getEntries(d,c).next(w=>{f=w,f.forEach((x,pe)=>{pe.isValidDocument()||(y=y.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(w=>{h=w;const x=[];for(const pe of o){const ie=Ky(pe,h.get(pe.key).overlayedDocument);ie!=null&&x.push(new Ct(pe.key,ie,Qh(ie.value.mapValue),Fe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,x,o)}).next(w=>{u=w;const x=w.applyToLocalDocumentSet(h,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,x)})}).then(()=>({batchId:u.batchId,changes:lu(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new me(O)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(i,s.batchId,n),await Ss(i,s.changes),await Cs(i.remoteStore)}catch(s){const r=_u(s,"Failed to persist write");n.reject(r)}}function rl(t,e,n){const i=L(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=L(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const u of h.listeners)u.Pu(o)&&(l=!0)}),l&&tv(a)}(i.eventManager,e),s.length&&i.rc.Ho(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function sv(t,e){const n=L(t),i=e.batch.batchId;try{const s=await M_(n.localStore,e);wu(n,i,null),vu(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Ss(n,s)}catch(s){await Vh(s)}}async function rv(t,e,n){const i=L(t);try{const s=await function(r,o){const a=L(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(H(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);wu(i,e,n),vu(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Ss(i,s)}catch(s){await Vh(s)}}function vu(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function wu(t,e,n){const i=L(t);let s=i.fc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.fc[i.currentUser.toKey()]=s}}async function Ss(t,e,n){const i=L(t),s=[],r=[],o=[];i.oc.isEmpty()||(i.oc.forEach((a,l)=>{o.push(i.mc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const h=No.Ni(l.targetId,c);r.push(h)}}))}),await Promise.all(o),i.rc.Ho(s),await async function(a,l){const c=L(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(l,u=>p.forEach(u.Ci,d=>c.persistence.referenceDelegate.addReference(h,u.targetId,d)).next(()=>p.forEach(u.xi,d=>c.persistence.referenceDelegate.removeReference(h,u.targetId,d)))))}catch(h){if(!_s(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const u=h.targetId;if(!h.fromCache){const d=c.Ki.get(u),f=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(f);c.Ki=c.Ki.insert(u,y)}}}(i.localStore,r))}async function ov(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const i=await du(n.localStore,e);n.currentUser=e,function(s,r){s.dc.forEach(o=>{o.forEach(a=>{a.reject(new T(g.CANCELLED,r))})}),s.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ss(n,i.Wi)}}function av(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rv.bind(null,e),e}class lv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Ts(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return O_(this.persistence,new k_,e.initialUser,this.Tt)}Tc(e){return new R_(bo.qs,this.Tt)}Ic(e){return new F_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>rl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ov.bind(null,this.syncEngine),await Z_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ev}createDatastore(e){const n=Ts(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new B_(s));var s;return function(r,o,a,l){return new q_(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>rl(this.syncEngine,a,0),o=il.C()?new il:new $_,new G_(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const h=new nv(i,s,r,o,a,l);return c&&(h.wc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);v("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await ei(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=Uh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=_u(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function uv(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await du(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function dv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fv(t);v("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>sl(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>sl(e.remoteStore,r)),t.onlineComponents=e}async function fv(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await uv(t,new lv)),t.offlineComponents}async function pv(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await dv(t,new cv)),t.onlineComponents}function gv(t){return pv(t).then(e=>e.syncEngine)}const ol=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e,n){if(!n)throw new T(g.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mv(t,e,n,i){if(e===!0&&i===!0)throw new T(g.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function al(t){if(!I.isDocumentKey(t))throw new T(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ll(t){if(I.isDocumentKey(t))throw new T(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Do(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":S()}function Nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Do(t);throw new T(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sy;switch(n.type){case"gapi":const i=n.client;return new ly(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ol.get(e);n&&(v("ComponentProvider","Removing Datastore"),ol.delete(e),n.terminate())}(this),Promise.resolve()}}function yv(t,e,n,i={}){var s;const r=(t=Nr(t,As))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Er("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=se.MOCK_USER;else{o=rf(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new T(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new se(l)}t._authCredentials=new ry(new $h(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class ko{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ko(this.firestore,e,this._query)}}class Ge extends ko{constructor(e,n,i){super(e,n,Py(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new I(e))}withConverter(e){return new Ge(this.firestore,e,this._path)}}function Tu(t,e,...n){if(t=ze(t),Eu("collection","path",e),t instanceof As){const i=V.fromString(e,...n);return ll(i),new Ge(t,null,i)}{if(!(t instanceof xe||t instanceof Ge))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(V.fromString(e,...n));return ll(i),new Ge(t.firestore,null,i)}}function _v(t,e,...n){if(t=ze(t),arguments.length===1&&(e=Uh.R()),Eu("doc","path",e),t instanceof As){const i=V.fromString(e,...n);return al(i),new xe(t,null,new I(i))}{if(!(t instanceof xe||t instanceof Ge))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(V.fromString(e,...n));return al(i),new xe(t.firestore,t instanceof Ge?t.converter:null,new I(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new fu(this,"async_queue_retry"),this.Hc=()=>{const n=zs();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=zs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=zs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new ut;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!_s(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(i=>{this.Qc=i,this.jc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw yt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.jc=!1,i))));return this.qc=n,n}enqueueAfterDelay(e,n,i){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const s=Ro.createAndSchedule(this,e,n,i,r=>this.Xc(r));return this.Gc.push(s),s}Jc(){this.Qc&&S()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class Iu extends As{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new vv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cu(this),this._firestoreClient.terminate()}}function wv(t,e){const n=typeof t=="object"?t:rc(),i=typeof t=="string"?t:e||"(default)",s=jn(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=nf("firestore");r&&yv(s,...r)}return s}function Ev(t){return t._firestoreClient||Cu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cu(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new _y(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hv(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Be.fromBase64String(e))}catch(n){throw new T(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=/^__.*__$/;class Iv{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ct(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zn(e,this.data,n,this.fieldTransforms)}}function Nu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class xo{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.Tt=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new xo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.oa({path:i,ca:!1});return s.aa(e),s}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.oa({path:i,ca:!1});return s.ia(),s}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return ji(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Nu(this.ra)&&Tv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Cv{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=i||Ts(e)}wa(e,n,i,s=!1){return new xo({ra:e,methodName:n,_a:i,path:le.emptyPath(),ca:!1,da:s},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Sv(t){const e=t._freezeSettings(),n=Ts(t._databaseId);return new Cv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Av(t,e,n,i,s,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,s);xu("Data must be an object, but it was:",o,i);const a=Du(i,o);let l,c;if(r.merge)l=new be(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const u of r.mergeFields){const d=bv(e,u,n);if(!o.contains(d))throw new T(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Dv(h,d)||h.push(d)}l=new be(h),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new Iv(new Se(a),l,c)}function Ru(t,e){if(ku(t=ze(t)))return xu("Unsupported field value:",e,t),Du(t,e);if(t instanceof Au)return function(n,i){if(!Nu(i.ra))throw i.fa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.fa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Ru(o,i.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return By(i.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Y.fromDate(n);return{timestampValue:Ar(i.Tt,s)}}if(n instanceof Y){const s=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ar(i.Tt,s)}}if(n instanceof bu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Un)return{bytesValue:i_(i.Tt,n._byteString)};if(n instanceof xe){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hu(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.fa(`Unsupported field value: ${Do(n)}`)}(t,e)}function Du(t,e){const n={};return jh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(t,(i,s)=>{const r=Ru(s,e.ua(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function ku(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Y||t instanceof bu||t instanceof Un||t instanceof xe||t instanceof Au)}function xu(t,e,n){if(!ku(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Do(n);throw i==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+i)}}function bv(t,e,n){if((e=ze(e))instanceof Su)return e._internalPath;if(typeof e=="string")return Rv(t,e);throw ji("Field path arguments must be of type string or ",t,!1,void 0,n)}const Nv=new RegExp("[~\\*/\\[\\]]");function Rv(t,e,n){if(e.search(Nv)>=0)throw ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Su(...e.split("."))._internalPath}catch{throw ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ji(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new T(g.INVALID_ARGUMENT,a+t+l)}function Dv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function xv(t,e,n){t=Nr(t,xe);const i=Nr(t.firestore,Iu),s=kv(t.converter,e,n);return Ov(i,[Av(Sv(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Fe.none())])}function Ov(t,e){return function(n,i){const s=new ut;return n.asyncQueue.enqueueAndForget(async()=>iv(await gv(n),i,s)),s.promise}(Ev(t),e)}(function(t,e=!0){(function(n){en=n})(ic),Ue(new Oe("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Iu(new oy(n.getProvider("auth-internal")),new hy(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ee(Ba,"3.8.4",t),Ee(Ba,"3.8.4","esm2017")})();const hl="@firebase/database",ul="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou="";function Mv(t){Ou=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return je(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pv(e)}}catch{}return new Lv},ct=Mu("localStorage"),Rr=Mu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Zi("@firebase/database"),Fv=function(){let t=1;return function(){return t++}}(),Pu=function(t){const e=_f(t),n=new mf;n.update(e);const i=n.digest();return Hr.encodeByteArray(i)},ni=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ni.apply(null,i):typeof i=="object"?e+=ee(i):e+=i,e+=" "}return e};let dt=null,dl=!0;const $v=function(t,e){m(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Lt.logLevel=R.VERBOSE,dt=Lt.log.bind(Lt),e&&Rr.set("logging_enabled",!0)):typeof t=="function"?dt=t:(dt=null,Rr.remove("logging_enabled"))},oe=function(...t){if(dl===!0&&(dl=!1,dt===null&&Rr.get("logging_enabled")===!0&&$v(!0)),dt){const e=ni.apply(null,t);dt(e)}},ii=function(t){return function(...e){oe(t,...e)}},Dr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ni(...t);Lt.error(e)},vt=function(...t){const e=`FIREBASE FATAL ERROR: ${ni(...t)}`;throw Lt.error(e),new Error(e)},_e=function(...t){const e="FIREBASE WARNING: "+ni(...t);Lt.warn(e)},Uv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qt="[MIN_NAME]",wt="[MAX_NAME]",nn=function(t,e){if(t===e)return 0;if(t===Qt||e===wt)return-1;if(e===Qt||t===wt)return 1;{const n=fl(t),i=fl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Bv=function(t,e){return t===e?0:t<e?-1:1},cn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ee(e))},Oo=function(t){if(typeof t!="object"||t===null)return ee(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ee(e[i]),n+=":",n+=Oo(t[e[i]]);return n+="}",n},Fu=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $u=function(t){m(!Lu(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},jv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},qv=new RegExp("^-?(0*)\\d{1,10}$"),Wv=-2147483648,Gv=2147483647,fl=function(t){if(qv.test(t)){const e=Number(t);if(e>=Wv&&e<=Gv)return e}return null},si=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _e("Exception was thrown by user callback.",n),e},Math.floor(0))}},Kv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},En=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){_e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_e(e)}}class kr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="5",Uu="v",Vu="s",Bu="r",ju="f",Hu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qu="ls",Wu="p",xr="ac",Gu="websocket",Ku="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ct.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ct.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Xv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zu(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let i;if(e===Gu)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ku)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Xv(t)&&(n.ns=t.namespace);const s=[];return Ie(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.counters_={}}incrementCounter(e,n=1){je(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Qd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={},Ys={};function Po(t){const e=t.toString();return Qs[e]||(Qs[e]=new Jv),Qs[e]}function Zv(t,e){const n=t.toString();return Ys[n]||(Ys[n]=e()),Ys[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&si(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="start",tw="close",nw="pLPCommand",iw="pRTLPCB",Qu="id",Yu="pw",Xu="ser",sw="cb",rw="seg",ow="ts",aw="d",lw="dframe",Ju=1870,Zu=30,cw=Ju-Zu,hw=25e3,uw=3e4;class kt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ii(e),this.stats_=Po(n),this.urlFn=l=>(this.appCheckToken&&(l[xr]=this.appCheckToken),zu(n,Ku,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ew(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uw)),Vv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lo((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pl)this.id=a,this.password=l;else if(o===tw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[pl]="t",i[Xu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[sw]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Uu]=Mo,this.transportSessionId&&(i[Vu]=this.transportSessionId),this.lastSessionId&&(i[qu]=this.lastSessionId),this.applicationId&&(i[Wu]=this.applicationId),this.appCheckToken&&(i[xr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Hu.test(location.hostname)&&(i[Bu]=ju);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kt.forceAllow_=!0}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){return kt.forceAllow_?!0:!kt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jv()&&!Hv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Gl(n),s=Fu(i,cw);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[lw]="t",i[Qu]=e,i[Yu]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lo{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fv(),window[nw+this.uniqueCallbackIdentifier]=e,window[iw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){oe("frame writing exception"),a.stack&&oe(a.stack),oe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||oe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qu]=this.myID,e[Yu]=this.myPW,e[Xu]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zu+i.length<=Ju;){const o=this.pendingSegs.shift();i=i+"&"+rw+s+"="+o.seg+"&"+ow+s+"="+o.ts+"&"+aw+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(hw)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=16384,fw=45e3;let Hi=null;typeof MozWebSocket<"u"?Hi=MozWebSocket:typeof WebSocket<"u"&&(Hi=WebSocket);class Ae{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ii(this.connId),this.stats_=Po(n),this.connURL=Ae.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Uu]=Mo,typeof location<"u"&&location.hostname&&Hu.test(location.hostname)&&(o[Bu]=ju),n&&(o[Vu]=n),i&&(o[qu]=i),s&&(o[xr]=s),r&&(o[Wu]=r),zu(e,Gu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ct.set("previous_websocket_failure",!0);try{let i;Yl(),this.mySock=new Hi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ae.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hi!==null&&!Ae.forceDisallow_}static previouslyFailed(){return ct.isInMemoryStorage||ct.get("previous_websocket_failure")===!0}markConnectionHealthy(){ct.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Cn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Fu(n,dw);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ae.responsesRequiredToBeHealthy=2;Ae.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[kt,Ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ae&&Ae.isAvailable();let i=n&&!Ae.previouslyFailed();if(e.webSocketOnly&&(n||_e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ae];else{const s=this.transports_=[];for(const r of Vn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Vn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=6e4,gw=5e3,mw=10*1024,yw=100*1024,Xs="t",gl="d",_w="s",ml="r",vw="e",yl="o",_l="a",vl="n",wl="p",ww="h";class Ew{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ii("c:"+this.id+":"),this.transportManager_=new Vn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=En(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xs in e){const n=e[Xs];n===_l?this.upgradeIfSecondaryHealthy_():n===ml?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cn("t",e),i=cn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_l,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cn("t",e),i=cn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cn(Xs,e);if(gl in e){const i=e[gl];if(n===ww){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===vl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_w?this.onConnectionShutdown_(i):n===ml?this.onReset_(i):n===vw?Dr("Server Error: "+i):n===yl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mo!==i&&_e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),En(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):En(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ct.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends td{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ql()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qi}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=32,Tl=768;class F{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function k(){return new F("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Je(t){return t.pieces_.length-t.pieceNum_}function P(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new F(t.pieces_,e)}function nd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Tw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function id(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function sd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new F(e,0)}function Q(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof F)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new F(n,0)}function C(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=b(t),i=b(e);if(n===null)return e;if(n===i)return we(P(t),P(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rd(t,e){if(Je(t)!==Je(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ne(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Je(t)>Je(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Iw{constructor(e,n){this.errorPrefix_=n,this.parts_=id(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ji(this.parts_[i]);od(this)}}function Cw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ji(e),od(t)}function Sw(t){const e=t.parts_.pop();t.byteLength_-=Ji(e),t.parts_.length>0&&(t.byteLength_-=1)}function od(t){if(t.byteLength_>Tl)throw new Error(t.errorPrefix_+"has a key path longer than "+Tl+" bytes ("+t.byteLength_+").");if(t.parts_.length>El)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+El+") or object contains a cycle "+st(t))}function st(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends td{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Fo}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=1e3,Aw=60*5*1e3,Il=30*1e3,bw=1.3,Nw=3e4,Rw="server_kill",Cl=3;class $e extends ed{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$e.nextPersistentConnectionId_++,this.log_=ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hn,this.maxReconnectDelay_=Aw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Yl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ee(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new qr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$e.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&je(e,"w")){const i=$t(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();_e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Il)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ff(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dr("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nw&&(this.reconnectDelay_=hn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$e.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?oe("getToken() completed but was canceled"):(oe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Ew(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{_e(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rw)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&_e(u),l())}}}interrupt(e){oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ia(this.interruptReasons_)&&(this.reconnectDelay_=hn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Oo(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new F(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cl&&(this.reconnectDelay_=Il,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ou.replace(/\./g,"-")]=1,Ql()?e["framework.cordova"]=1:lf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qi.getInstance().currentlyOnline();return ia(this.interruptReasons_)&&e}}$e.nextPersistentConnectionId_=0;$e.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new N(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new N(Qt,e),s=new N(Qt,n);return this.compare(i,s)!==0}minPost(){return N.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class ad extends bs{static get __EMPTY_NODE(){return pi}static set __EMPTY_NODE(e){pi=e}compare(e,n){return nn(e.name,n.name)}isDefinedOn(e){throw Xt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return N.MIN}maxPost(){return new N(wt,pi)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,pi)}toString(){return".key"}}const Ft=new ad;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??G.RED,this.left=s??ge.EMPTY_NODE,this.right=r??ge.EMPTY_NODE}copy(e,n,i,s,r){return new G(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Dw{copy(e,n,i,s,r){return this}insert(e,n,i){return new G(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ge{constructor(e,n=ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gi(this.root_,null,this.comparator_,!0,e)}}ge.EMPTY_NODE=new Dw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e){return nn(t.name,e.name)}function $o(t,e){return nn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;function xw(t){Or=t}const ld=function(t){return typeof t=="number"?"number:"+$u(t):"string:"+t},cd=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&je(e,".sv"),"Priority must be a string or number.")}else m(t===Or||t.isEmpty(),"priority of unexpected type.");m(t===Or||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;class q{constructor(e,n=q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cd(this.priorityNode_)}static set __childrenNodeConstructor(e){Sl=e}static get __childrenNodeConstructor(){return Sl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return C(e)?this:b(e)===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=b(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||Je(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,q.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ld(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$u(this.value_):e+=this.value_,this.lazyHash_=Pu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof q.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=q.VALUE_TYPE_ORDER.indexOf(n),r=q.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd,ud;function Ow(t){hd=t}function Mw(t){ud=t}class Pw extends bs{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?nn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return N.MIN}maxPost(){return new N(wt,new q("[PRIORITY-POST]",ud))}makePost(e,n){const i=hd(e);return new N(n,new q("[PRIORITY-POST]",i))}toString(){return".priority"}}const ce=new Pw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=Math.log(2);class Fw{constructor(e){const n=r=>parseInt(Math.log(r)/Lw,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wi=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new G(d,u.node,G.BLACK,null,null);{const f=parseInt(h/2,10)+l,y=s(l,f),w=s(f+1,c);return u=t[f],d=n?n(u):u,new G(d,u.node,G.BLACK,y,w)}},r=function(l){let c=null,h=null,u=t.length;const d=function(y,w){const x=u-y,pe=u;u-=y;const ie=s(x+1,pe),bt=t[x],on=n?n(bt):bt;f(new G(on,bt.node,w,null,ie))},f=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));w?d(x,G.BLACK):(d(x,G.BLACK),d(x,G.RED))}return h},o=new Fw(t.length),a=r(o);return new ge(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js;const Nt={};class Le{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return m(Nt&&ce,"ChildrenNode.ts has not been loaded"),Js=Js||new Le({".priority":Nt},{".priority":ce}),Js}get(e){const n=$t(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ge?n:null}hasIndex(e){return je(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Ft,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(N.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Wi(i,e.getCompare()):a=Nt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Le(h,c)}addToIndexes(e,n){const i=Ei(this.indexes_,(s,r)=>{const o=$t(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===Nt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Wi(a,o.getCompare())}else return Nt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new Le(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ei(this.indexes_,s=>{if(s===Nt)return s;{const r=n.get(e.name);return r?s.remove(new N(e.name,r)):s}});return new Le(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;class D{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&cd(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return un||(un=new D(new ge($o),null,Le.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||un}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?un:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(P(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new N(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?un:this.priorityNode_;return new D(s,o,r)}}updateChild(e,n){const i=b(e);if(i===null)return n;{m(b(e)!==".priority"||Je(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(P(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),i++,r&&D.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ld(this.getPriority().val())+":"),this.forEachChild(ce,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Pu(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new N(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new N(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new N(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ri?-1:0}withIndex(e){if(e===Ft||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ft||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ce),s=n.getIterator(ce);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ft?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $w extends D{constructor(){super(new ge($o),D.EMPTY_NODE,Le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ri=new $w;Object.defineProperties(N,{MIN:{value:new N(Qt,D.EMPTY_NODE)},MAX:{value:new N(wt,ri)}});ad.__EMPTY_NODE=D.EMPTY_NODE;q.__childrenNodeConstructor=D;xw(ri);Mw(ri);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=!0;function ae(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new q(n,ae(e))}if(!(t instanceof Array)&&Uw){const n=[];let i=!1;if(Ie(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ae(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new N(o,l)))}}),n.length===0)return D.EMPTY_NODE;const r=Wi(n,kw,o=>o.name,$o);if(i){const o=Wi(n,ce.getCompare());return new D(r,ae(e),new Le({".priority":o},{".priority":ce}))}else return new D(r,ae(e),Le.Default)}else{let n=D.EMPTY_NODE;return Ie(t,(i,s)=>{if(je(t,i)&&i.substring(0,1)!=="."){const r=ae(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ae(e))}}Ow(ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw extends bs{constructor(e){super(),this.indexPath_=e,m(!C(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?nn(e.name,n.name):r}makePost(e,n){const i=ae(e),s=D.EMPTY_NODE.updateChild(this.indexPath_,i);return new N(n,s)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ri);return new N(wt,e)}toString(){return id(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw extends bs{compare(e,n){const i=e.node.compareTo(n.node);return i===0?nn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,n){const i=ae(e);return new N(n,i)}toString(){return".value"}}const jw=new Bw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){return{type:"value",snapshotNode:t}}function qw(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ww(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Al(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Gw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new Uo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===jw?n="$value":t.index_===Ft?n="$key":(m(t.index_ instanceof Vw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ee(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ee(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ee(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ee(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Nl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends ed{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ii("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Gi.getListenId_(e,i),a={};this.listens_[o]=a;const l=bl(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),$t(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Gi.getListenId_(e,n);delete this.listens_[i]}get(e){const n=bl(e._queryParams),i=e._path.toString(),s=new qr;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+gf(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Cn(a.responseText)}catch{_e("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&_e("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){return{value:null,children:new Map}}function dd(t,e,n){if(C(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=b(e);t.children.has(i)||t.children.set(i,Ki());const s=t.children.get(i);e=P(e),dd(s,e,n)}}function Mr(t,e,n){t.value!==null?n(e,t.value):zw(t,(i,s)=>{const r=new F(e.toString()+"/"+i);Mr(s,r,n)})}function zw(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=10*1e3,Yw=30*1e3,Xw=5*60*1e3;class Jw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Qw(e);const i=Rl+(Yw-Rl)*Math.random();En(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ie(e,(s,r)=>{r>0&&je(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),En(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ke||(ke={}));function fd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ke.ACK_USER_WRITE,this.source=fd()}operationForChild(e){if(C(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new F(e));return new zi(k(),n,this.revert)}}else return m(b(this.path)===e,"operationForChild called for unrelated child."),new zi(P(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ke.OVERWRITE}operationForChild(e){return C(this.path)?new Et(this.source,k(),this.snap.getImmediateChild(e)):new Et(this.source,P(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ke.MERGE}operationForChild(e){if(C(this.path)){const n=this.children.subtree(new F(e));return n.isEmpty()?null:n.value?new Et(this.source,k(),n.value):new Bn(this.source,k(),n)}else return m(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bn(this.source,P(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(C(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Zw(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Gw(o.childName,o.snapshotNode))}),dn(t,s,"child_removed",e,i,n),dn(t,s,"child_added",e,i,n),dn(t,s,"child_moved",r,i,n),dn(t,s,"child_changed",e,i,n),dn(t,s,"value",e,i,n),s}function dn(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>tE(t,a,l)),o.forEach(a=>{const l=eE(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function eE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tE(t,e,n){if(e.childName==null||n.childName==null)throw Xt("Should only compare child_ events.");const i=new N(e.childName,e.snapshotNode),s=new N(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){return{eventCache:t,serverCache:e}}function Tn(t,e,n,i){return md(new Vo(e,n,i),t.serverCache)}function yd(t,e,n,i){return md(t.eventCache,new Vo(e,n,i))}function Pr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Tt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;const nE=()=>(Zs||(Zs=new ge(Bv)),Zs);class M{constructor(e,n=nE()){this.value=e,this.children=n}static fromObject(e){let n=new M(null);return Ie(e,(i,s)=>{n=n.set(new F(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:k(),value:this.value};if(C(e))return null;{const i=b(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(P(e),n);return r!=null?{path:Q(new F(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(C(e))return this;{const n=b(e),i=this.children.get(n);return i!==null?i.subtree(P(e)):new M(null)}}set(e,n){if(C(e))return new M(n,this.children);{const i=b(e),r=(this.children.get(i)||new M(null)).set(P(e),n),o=this.children.insert(i,r);return new M(this.value,o)}}remove(e){if(C(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const n=b(e),i=this.children.get(n);if(i){const s=i.remove(P(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(C(e))return this.value;{const n=b(e),i=this.children.get(n);return i?i.get(P(e)):null}}setTree(e,n){if(C(e))return n;{const i=b(e),r=(this.children.get(i)||new M(null)).setTree(P(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new M(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Q(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,k(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(C(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(P(e),Q(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,k(),n)}foreachOnPath_(e,n,i){if(C(e))return this;{this.value&&i(n,this.value);const s=b(e),r=this.children.get(s);return r?r.foreachOnPath_(P(e),Q(n,s),i):new M(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Q(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.writeTree_=e}static empty(){return new Re(new M(null))}}function In(t,e,n){if(C(e))return new Re(new M(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=we(s,e);return r=r.updateChild(o,n),new Re(t.writeTree_.set(s,r))}else{const s=new M(n),r=t.writeTree_.setTree(e,s);return new Re(r)}}}function Dl(t,e,n){let i=t;return Ie(n,(s,r)=>{i=In(i,Q(e,s),r)}),i}function kl(t,e){if(C(e))return Re.empty();{const n=t.writeTree_.setTree(e,new M(null));return new Re(n)}}function Lr(t,e){return St(t,e)!=null}function St(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function xl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(i,s)=>{e.push(new N(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new N(i,s.value))}),e}function Ke(t,e){if(C(e))return t;{const n=St(t,e);return n!=null?new Re(new M(n)):new Re(t.writeTree_.subtree(e))}}function Fr(t){return t.writeTree_.isEmpty()}function Yt(t,e){return _d(k(),t.writeTree_,e)}function _d(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=_d(Q(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Q(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e){return Cd(e,t)}function iE(t,e,n,i,s){m(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=In(t.visibleWrites,e,n)),t.lastWriteId=i}function sE(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function rE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&oE(a,i.path)?s=!1:Ne(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return aE(t),!0;if(i.snap)t.visibleWrites=kl(t.visibleWrites,i.path);else{const a=i.children;Ie(a,l=>{t.visibleWrites=kl(t.visibleWrites,Q(i.path,l))})}return!0}else return!1}function oE(t,e){if(t.snap)return Ne(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ne(Q(t.path,n),e))return!0;return!1}function aE(t){t.visibleWrites=wd(t.allWrites,lE,k()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lE(t){return t.visible}function wd(t,e,n){let i=Re.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Ne(n,o)?(a=we(n,o),i=In(i,a,r.snap)):Ne(o,n)&&(a=we(o,n),i=In(i,k(),r.snap.getChild(a)));else if(r.children){if(Ne(n,o))a=we(n,o),i=Dl(i,a,r.children);else if(Ne(o,n))if(a=we(o,n),C(a))i=Dl(i,k(),r.children);else{const l=$t(r.children,b(a));if(l){const c=l.getChild(P(a));i=In(i,k(),c)}}}else throw Xt("WriteRecord should have .snap or .children")}}return i}function Ed(t,e,n,i,s){if(!i&&!s){const r=St(t.visibleWrites,e);if(r!=null)return r;{const o=Ke(t.visibleWrites,e);if(Fr(o))return n;if(n==null&&!Lr(o,k()))return null;{const a=n||D.EMPTY_NODE;return Yt(o,a)}}}else{const r=Ke(t.visibleWrites,e);if(!s&&Fr(r))return n;if(!s&&n==null&&!Lr(r,k()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Ne(c.path,e)||Ne(e,c.path))},a=wd(t.allWrites,o,e),l=n||D.EMPTY_NODE;return Yt(a,l)}}}function cE(t,e,n){let i=D.EMPTY_NODE;const s=St(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ce,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ke(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=Yt(Ke(r,new F(o)),a);i=i.updateImmediateChild(o,l)}),xl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ke(t.visibleWrites,e);return xl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function hE(t,e,n,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,n);if(Lr(t.visibleWrites,r))return null;{const o=Ke(t.visibleWrites,r);return Fr(o)?s.getChild(n):Yt(o,s.getChild(n))}}function uE(t,e,n,i){const s=Q(e,n),r=St(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ke(t.visibleWrites,s);return Yt(o,i.getNode().getImmediateChild(n))}else return null}function dE(t,e){return St(t.visibleWrites,e)}function fE(t,e,n,i,s,r,o){let a;const l=Ke(t.visibleWrites,e),c=St(l,k());if(c!=null)a=c;else if(n!=null)a=Yt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&h.length<s;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function pE(){return{visibleWrites:Re.empty(),allWrites:[],lastWriteId:-1}}function $r(t,e,n,i){return Ed(t.writeTree,t.treePath,e,n,i)}function Td(t,e){return cE(t.writeTree,t.treePath,e)}function Ol(t,e,n,i){return hE(t.writeTree,t.treePath,e,n,i)}function Qi(t,e){return dE(t.writeTree,Q(t.treePath,e))}function gE(t,e,n,i,s,r){return fE(t.writeTree,t.treePath,e,n,i,s,r)}function Bo(t,e,n){return uE(t.writeTree,t.treePath,e,n)}function Id(t,e){return Cd(Q(t.treePath,e),t.writeTree)}function Cd(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Al(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ww(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,qw(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Al(i,e.snapshotNode,s.oldSnap));else throw Xt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Sd=new yE;class jo{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Vo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bo(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tt(this.viewCache_),r=gE(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function _E(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vE(t,e,n,i,s){const r=new mE;let o,a;if(n.type===ke.OVERWRITE){const c=n;c.source.fromUser?o=Ur(t,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!C(c.path),o=Yi(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===ke.MERGE){const c=n;c.source.fromUser?o=EE(t,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Vr(t,e,c.path,c.children,i,s,a,r))}else if(n.type===ke.ACK_USER_WRITE){const c=n;c.revert?o=CE(t,e,c.path,i,s,r):o=TE(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===ke.LISTEN_COMPLETE)o=IE(t,e,n.path,i,r);else throw Xt("Unknown operation type: "+n.type);const l=r.getChanges();return wE(e,o,l),{viewCache:o,changes:l}}function wE(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Pr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Hw(Pr(e)))}}function Ad(t,e,n,i,s,r){const o=e.eventCache;if(Qi(i,n)!=null)return e;{let a,l;if(C(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Tt(e),h=c instanceof D?c:D.EMPTY_NODE,u=Td(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=$r(i,Tt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=b(n);if(c===".priority"){m(Je(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Ol(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=P(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ol(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Bo(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return Tn(e,a,o.isFullyInitialized()||C(n),t.filter.filtersNodes())}}function Yi(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(C(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),f,null)}else{const f=b(n);if(!l.isCompleteForPath(n)&&Je(n)>1)return e;const y=P(n),x=l.getNode().getImmediateChild(f).updateChild(y,i);f===".priority"?c=h.updatePriority(l.getNode(),x):c=h.updateChild(l.getNode(),f,x,y,Sd,null)}const u=yd(e,c,l.isFullyInitialized()||C(n),h.filtersNodes()),d=new jo(s,u,r);return Ad(t,u,n,s,d,a)}function Ur(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new jo(s,e,r);if(C(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Tn(e,c,!0,t.filter.filtersNodes());else{const u=b(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Tn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=P(n),f=a.getNode().getImmediateChild(u);let y;if(C(d))y=i;else{const w=h.getCompleteChild(u);w!=null?nd(d)===".priority"&&w.getChild(sd(d)).isEmpty()?y=w:y=w.updateChild(d,i):y=D.EMPTY_NODE}if(f.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),u,y,d,h,o);l=Tn(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ml(t,e){return t.eventCache.isCompleteForChild(e)}function EE(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=Q(n,l);Ml(e,b(h))&&(a=Ur(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=Q(n,l);Ml(e,b(h))||(a=Ur(t,a,h,c,s,r,o))}),a}function Pl(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Vr(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;C(n)?c=i:c=new M(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),y=Pl(t,f,d);l=Yi(t,l,new F(u),y,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const y=e.serverCache.getNode().getImmediateChild(u),w=Pl(t,y,d);l=Yi(t,l,new F(u),w,s,r,o,a)}}),l}function TE(t,e,n,i,s,r,o){if(Qi(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(C(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yi(t,e,n,l.getNode().getChild(n),s,r,a,o);if(C(n)){let c=new M(null);return l.getNode().forEachChild(Ft,(h,u)=>{c=c.set(new F(h),u)}),Vr(t,e,n,c,s,r,a,o)}else return e}else{let c=new M(null);return i.foreach((h,u)=>{const d=Q(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Vr(t,e,n,c,s,r,a,o)}}function IE(t,e,n,i,s){const r=e.serverCache,o=yd(e,r.getNode(),r.isFullyInitialized()||C(n),r.isFiltered());return Ad(t,o,n,i,Sd,s)}function CE(t,e,n,i,s,r){let o;if(Qi(i,n)!=null)return e;{const a=new jo(i,e,s),l=e.eventCache.getNode();let c;if(C(n)||b(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=$r(i,Tt(e));else{const u=e.serverCache.getNode();m(u instanceof D,"serverChildren would be complete if leaf node"),h=Td(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=b(n);let u=Bo(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,P(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,D.EMPTY_NODE,P(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$r(i,Tt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qi(i,k())!=null,Tn(e,c,o,t.filter.filtersNodes())}}function SE(t,e){const n=Tt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!C(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function Ll(t,e,n,i){e.type===ke.MERGE&&e.source.queryId!==null&&(m(Tt(t.viewCache_),"We should always have a full cache before handling merges"),m(Pr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=vE(t.processor_,s,e,n,i);return _E(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,AE(t,r.changes,r.viewCache.eventCache.getNode(),null)}function AE(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Zw(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;function bE(t){m(!Fl,"__referenceConstructor has already been defined"),Fl=t}function Ho(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),Ll(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Ll(o,e,n,i));return r}}function qo(t,e){let n=null;for(const i of t.views.values())n=n||SE(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;function NE(t){m(!$l,"__referenceConstructor has already been defined"),$l=t}class Ul{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=pE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function RE(t,e,n,i,s){return iE(t.pendingWriteTree_,e,n,i,s),s?Rs(t,new Et(fd(),e,n)):[]}function xt(t,e,n=!1){const i=sE(t.pendingWriteTree_,e);if(rE(t.pendingWriteTree_,e)){let r=new M(null);return i.snap!=null?r=r.set(k(),!0):Ie(i.children,o=>{r=r.set(new F(o),!0)}),Rs(t,new zi(i.path,r,n))}else return[]}function Ns(t,e,n){return Rs(t,new Et(pd(),e,n))}function DE(t,e,n){const i=M.fromObject(n);return Rs(t,new Bn(pd(),e,i))}function kE(t,e,n,i){const s=Dd(t,i);if(s!=null){const r=kd(s),o=r.path,a=r.queryId,l=we(o,e),c=new Et(gd(a),l,n);return xd(t,o,c)}else return[]}function xE(t,e,n,i){const s=Dd(t,i);if(s){const r=kd(s),o=r.path,a=r.queryId,l=we(o,e),c=M.fromObject(n),h=new Bn(gd(a),l,c);return xd(t,o,h)}else return[]}function bd(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=we(o,e),c=qo(a,l);if(c)return c});return Ed(s,e,r,n,!0)}function Rs(t,e){return Nd(e,t.syncPointTree_,null,vd(t.pendingWriteTree_,k()))}function Nd(t,e,n,i){if(C(t.path))return Rd(t,e,n,i);{const s=e.get(k());n==null&&s!=null&&(n=qo(s,k()));let r=[];const o=b(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Id(i,o);r=r.concat(Nd(a,l,c,h))}return s&&(r=r.concat(Ho(s,t,i,n))),r}}function Rd(t,e,n,i){const s=e.get(k());n==null&&s!=null&&(n=qo(s,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Id(i,o),h=t.operationForChild(o);h&&(r=r.concat(Rd(h,a,l,c)))}),s&&(r=r.concat(Ho(s,t,i,n))),r}function Dd(t,e){return t.tagToQueryMap.get(e)}function kd(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new F(t.substr(0,e))}}function xd(t,e,n){const i=t.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=vd(t.pendingWriteTree_,e);return Ho(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wo(n)}node(){return this.node_}}class Go{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Q(this.path_,e);return new Go(this.syncTree_,n)}node(){return bd(this.syncTree_,this.path_)}}const OE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vl=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ME(t[".sv"],e,n);if(typeof t[".sv"]=="object")return PE(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ME=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},PE=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},LE=function(t,e,n,i){return Ko(e,new Go(n,t),i)},FE=function(t,e,n){return Ko(t,new Wo(e),n)};function Ko(t,e,n){const i=t.getPriority().val(),s=Vl(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Vl(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new q(a,ae(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new q(s))),o.forEachChild(ce,(a,l)=>{const c=Ko(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Qo(t,e){let n=e instanceof F?e:new F(e),i=t,s=b(n);for(;s!==null;){const r=$t(i.node.children,s)||{children:{},childCount:0};i=new zo(s,i,r),n=P(n),s=b(n)}return i}function sn(t){return t.node.value}function Od(t,e){t.node.value=e,Br(t)}function Md(t){return t.node.childCount>0}function $E(t){return sn(t)===void 0&&!Md(t)}function Ds(t,e){Ie(t.node.children,(n,i)=>{e(new zo(n,t,i))})}function Pd(t,e,n,i){n&&!i&&e(t),Ds(t,s=>{Pd(s,e,!0,i)}),n&&i&&e(t)}function UE(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function oi(t){return new F(t.parent===null?t.name:oi(t.parent)+"/"+t.name)}function Br(t){t.parent!==null&&VE(t.parent,t.name,t)}function VE(t,e,n){const i=$E(n),s=je(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Br(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Br(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=/[\[\].#$\/\u0000-\u001F\u007F]/,jE=/[\[\].#$\u0000-\u001F\u007F]/,er=10*1024*1024,Ld=function(t){return typeof t=="string"&&t.length!==0&&!BE.test(t)},HE=function(t){return typeof t=="string"&&t.length!==0&&!jE.test(t)},qE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),HE(t)},Fd=function(t,e,n){const i=n instanceof F?new Iw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+st(i));if(typeof e=="function")throw new Error(t+"contains a function "+st(i)+" with contents = "+e.toString());if(Lu(e))throw new Error(t+"contains "+e.toString()+" "+st(i));if(typeof e=="string"&&e.length>er/3&&Ji(e)>er)throw new Error(t+"contains a string greater than "+er+" utf8 bytes "+st(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ie(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ld(o)))throw new Error(t+" contains an invalid key ("+o+") "+st(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cw(i,o),Fd(t,a,i),Sw(i)}),s&&r)throw new Error(t+' contains ".value" child '+st(i)+" in addition to actual children.")}},WE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ld(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qE(n))throw new Error(yf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function KE(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!rd(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function At(t,e,n){KE(t,n),zE(t,i=>Ne(i,e)||Ne(e,i))}function zE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(QE(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function QE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();dt&&oe("event: "+n.toString()),si(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="repo_interrupt",XE=25;class JE{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ki(),this.transactionQueueTree_=new zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZE(t,e,n){if(t.stats_=Po(t.repoInfo_),t.forceRestClient_||Kv())t.server_=new Gi(t.repoInfo_,(i,s,r,o)=>{Bl(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $e(t.repoInfo_,e,(i,s,r,o)=>{Bl(t,i,s,r,o)},i=>{jl(t,i)},i=>{t0(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Zv(t.repoInfo_,()=>new Jw(t.stats_,t.server_)),t.infoData_=new Kw,t.infoSyncTree_=new Ul({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ns(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yo(t,"connected",!1),t.serverSyncTree_=new Ul({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);At(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function e0(t){const n=t.infoData_.getNode(new F(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $d(t){return OE({timestamp:e0(t)})}function Bl(t,e,n,i,s){t.dataUpdateCount++;const r=new F(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Ei(n,c=>ae(c));o=xE(t.serverSyncTree_,r,l,s)}else{const l=ae(n);o=kE(t.serverSyncTree_,r,l,s)}else if(i){const l=Ei(n,c=>ae(c));o=DE(t.serverSyncTree_,r,l)}else{const l=ae(n);o=Ns(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Jo(t,r)),At(t.eventQueue_,a,o)}function jl(t,e){Yo(t,"connected",e),e===!1&&i0(t)}function t0(t,e){Ie(e,(n,i)=>{Yo(t,n,i)})}function Yo(t,e,n){const i=new F("/.info/"+e),s=ae(n);t.infoData_.updateSnapshot(i,s);const r=Ns(t.infoSyncTree_,i,s);At(t.eventQueue_,i,r)}function n0(t){return t.nextWriteId_++}function i0(t){Ud(t,"onDisconnectEvents");const e=$d(t),n=Ki();Mr(t.onDisconnect_,k(),(s,r)=>{const o=LE(s,r,t.serverSyncTree_,e);dd(n,s,o)});let i=[];Mr(n,k(),(s,r)=>{i=i.concat(Ns(t.serverSyncTree_,s,r));const o=a0(t,s);Jo(t,o)}),t.onDisconnect_=Ki(),At(t.eventQueue_,k(),i)}function s0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(YE)}function Ud(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),oe(n,...e)}function Vd(t,e,n){return bd(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Xo(t,e=t.transactionQueueTree_){if(e||ks(t,e),sn(e)){const n=jd(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&r0(t,oi(e),n)}else Md(e)&&Ds(e,n=>{Xo(t,n)})}function r0(t,e,n){const i=n.map(c=>c.currentWriteId),s=Vd(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=we(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ud(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(xt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ks(t,Qo(t.transactionQueueTree_,e)),Xo(t,t.transactionQueueTree_),At(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)si(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{_e("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Jo(t,e)}},o)}function Jo(t,e){const n=Bd(t,e),i=oi(n),s=jd(t,n);return o0(t,s,i),i}function o0(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=we(n,l.path);let h=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(xt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XE)h=!0,u="maxretry",s=s.concat(xt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Vd(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Fd("transaction failed: Data returned ",f,l.path);let y=ae(f);typeof f=="object"&&f!=null&&je(f,".priority")||(y=y.updatePriority(d.getPriority()));const x=l.currentWriteId,pe=$d(t),ie=FE(y,d,pe);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=ie,l.currentWriteId=n0(t),o.splice(o.indexOf(x),1),s=s.concat(RE(t.serverSyncTree_,l.path,ie,l.currentWriteId,l.applyLocally)),s=s.concat(xt(t.serverSyncTree_,x,!0))}else h=!0,u="nodata",s=s.concat(xt(t.serverSyncTree_,l.currentWriteId,!0))}At(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}ks(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)si(i[a]);Xo(t,t.transactionQueueTree_)}function Bd(t,e){let n,i=t.transactionQueueTree_;for(n=b(e);n!==null&&sn(i)===void 0;)i=Qo(i,n),e=P(e),n=b(e);return i}function jd(t,e){const n=[];return Hd(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Hd(t,e,n){const i=sn(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ds(e,s=>{Hd(t,s,n)})}function ks(t,e){const n=sn(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Od(e,n.length>0?n:void 0)}Ds(e,i=>{ks(t,i)})}function a0(t,e){const n=oi(Bd(t,e)),i=Qo(t.transactionQueueTree_,e);return UE(i,s=>{tr(t,s)}),tr(t,i),Pd(i,s=>{tr(t,s)}),n}function tr(t,e){const n=sn(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(xt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Od(e,void 0):n.length=r+1,At(t.eventQueue_,oi(e),s);for(let o=0;o<i.length;o++)si(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function c0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):_e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hl=function(t,e){const n=h0(t),i=n.namespace;n.domain==="firebase.com"&&vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Uv();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yv(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new F(n.pathString)}},h0=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=l0(t.substring(h,u)));const d=c0(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return C(this._path)?null:nd(this._path)}get ref(){return new rn(this._repo,this._path)}get _queryIdentifier(){const e=Nl(this._queryParams),n=Oo(e);return n==="{}"?"default":n}get _queryObject(){return Nl(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof Zo))return!1;const n=this._repo===e._repo,i=rd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Tw(this._path)}}class rn extends Zo{constructor(e,n){super(e,n,new Uo,!1)}get parent(){const e=sd(this._path);return e===null?null:new rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}bE(rn);NE(rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="FIREBASE_DATABASE_EMULATOR_HOST",jr={};let d0=!1;function f0(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),oe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hl(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[u0]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Hl(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new kr(kr.OWNER):new Qv(t.name,t.options,e);WE("Invalid Firebase Database URL",o),C(o.path)||vt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=g0(a,t,h,new zv(t.name,n));return new m0(u,t)}function p0(t,e){const n=jr[e];(!n||n[t.key]!==t)&&vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),s0(t),delete n[t.key]}function g0(t,e,n,i){let s=jr[e.name];s||(s={},jr[e.name]=s);let r=s[t.toURLString()];return r&&vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new JE(t,d0,n,i),s[t.toURLString()]=r,r}class m0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rn(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(p0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vt("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){Mv(ic),Ue(new Oe("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return f0(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ee(hl,ul,t),Ee(hl,ul,"esm2017")}$e.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$e.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};y0();const _0={apiKey:"AIzaSyD-OP6xCH6Mjk_fIjE72qlvkEe4cgST1k8",authDomain:"final-project-9900f.firebaseapp.com",projectId:"final-project-9900f",storageBucket:"final-project-9900f.appspot.com",messagingSenderId:"680888784335",appId:"1:680888784335:web:eae497e39825627ba06eba",measurementId:"G-BEGD4JP81N"},qd=sc(_0);jg(qd);const ea=wv(qd);let mi=[],yi=[];Tu(ea,"about");Tu(ea,"newAllRecipes");function v0(){if(document.body.id==="aboutMePage"){let e=document.getElementById("aboutPageContent");for(var t=0;t<mi.length;t++){let n=document.createElement("p");console.log(mi[t].content[0]);let i=document.createElement("p");n.append(mi[t].content[0]),i.append(mi[t].content[1]),e.append(n),e.append(i)}}else if(document.body.id==="backendPage"){let e=document.getElementById("submitAbout"),n=document.getElementById("submitRecipe");e.addEventListener("click",T0),n.addEventListener("click",I0);let i=document.getElementById("addAboutInputBtn"),s=document.getElementById("addRecipeInputBtn");i.addEventListener("click",E0),s.addEventListener("click",w0)}else if(document.body.id==="recipePage"){document.getElementById("recipePageContent");for(var t=0;t<yi.length;t++)document.createElement("p"),document.createElement("p")}else if(document.body.id==="allRecipsePage"){let e=document.getElementById("allRecipesPageContent");for(var t=0;t<yi.length;t++){let i=document.createElement("p"),s=document.createElement("p");i.append(yi[t][0]),s.append(yi[t][1]),e.append(i),e.append(s)}}}function w0(){console.log("adding input box");let t=[],e=document.getElementById("recipeInputs"),n=e.childElementCount+1,i=document.createElement("div");i.setAttribute("id","step-"+n);let s=document.createElement("p");s.textContent="Step title";let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("class","array");let o=document.createElement("p");o.textContent="Step content";let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("class","array"),t.push(s,r,o,a),t.forEach(l=>{i.append(l)}),e.appendChild(i)}function E0(){console.log("adding input box");let t=[],e=document.getElementById("aboutInputs"),n=e.childElementCount+1,i=document.createElement("div");i.setAttribute("id","about-"+n);let s=document.createElement("p");s.textContent="paragraph title";let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("class","array");let o=document.createElement("p");o.textContent="paragraph content";let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("class","array"),t.push(s,r,o,a),t.forEach(l=>{i.append(l)}),e.appendChild(i)}tm(v0(),document.body);function T0(t){let e=[],n=document.getElementById("aboutInputs");for(var i=0;i<n.children.length;i++){let r=n.children[i].querySelectorAll(".array"),o=[];o.push(n.children[i].id);let a=[];for(var s=0;s<r.length;s++)r[s].value!=""&&a.push(r[s].value);o.push(a),e.push(o)}e.forEach(r=>Wd("about",r[0],r[1]))}function I0(t){const e=new Map;let n=document.getElementById("recipeInputs"),i=document.getElementById("recipe-name").value;for(var s=0;s<n.children.length;s++){let o=n.children[s].querySelectorAll(".array"),a=[];for(var r=0;r<o.length;r++)a.push(o[r].value);e.set(n.children[s].id,a)}Wd("newAllRecipes",i,Object.fromEntries(e))}async function Wd(t,e,n){await xv(_v(ea,t,e),{time:Date.now(),content:n})}
