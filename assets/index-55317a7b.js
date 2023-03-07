(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
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
 */const Ul={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const y=function(n,e){if(!n)throw ln(e)},ln=function(n){return new Error("Firebase Database ("+Ul.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Vl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new wp;const d=r<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bl=function(n){const e=Vl(n);return _o.encodeByteArray(e,!0)},Us=function(n){return Bl(n).replace(/\./g,"")},Sr=function(n){try{return _o.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ep(n){return ql(void 0,n)}function ql(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tp(t)||(n[t]=ql(n[t],e[t]));return n}function Tp(n){return n!=="__proto__"}/**
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
 */function Ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>Ip().__FIREBASE_DEFAULTS__,Sp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ap=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sr(n[1]);return e&&JSON.parse(e)},jl=()=>{try{return Cp()||Sp()||Ap()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bp=n=>{var e,t;return(t=(e=jl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Np=n=>{const e=bp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Rp=()=>{var n;return(n=jl())===null||n===void 0?void 0:n.config};/**
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
 */class vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Dp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Us(JSON.stringify(t)),Us(JSON.stringify(o)),a].join(".")}/**
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
 */function kp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kp())}function xp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Op(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kl(){return Ul.NODE_ADMIN===!0}function Gl(){try{return typeof indexedDB=="object"}catch{return!1}}function Wl(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Mp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Lp="FirebaseError";class ct extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Lp,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Pp(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ct(i,a,s)}}function Pp(n,e){return n.replace(Fp,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Fp=/\{\$([^}]+)}/g;/**
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
 */function Vn(n){return JSON.parse(n)}function re(n){return JSON.stringify(n)}/**
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
 */const zl=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Vn(Sr(r[0])||""),t=Vn(Sr(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},$p=function(n){const e=zl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Up=function(n){const e=zl(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Qe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function zt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function qa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vs(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Bs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ja(r)&&ja(o)){if(!Bs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ja(n){return n!==null&&typeof n=="object"}/**
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
 */function Vp(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Bp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qp(n,e){return`${n} failed: ${e} argument `}/**
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
 */const jp=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,y(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},mi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Hp=1e3,Kp=2,Gp=4*60*60*1e3,Wp=.5;function Ha(n,e=Hp,t=Kp){const s=e*Math.pow(t,n),i=Math.round(Wp*s*(Math.random()-.5)*2);return Math.min(Gp,s+i)}/**
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
 */function je(n){return n&&n._delegate?n._delegate:n}class Pe{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dt="[DEFAULT]";/**
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
 */class zp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new vo;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yp(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qp(n){return n===dt?void 0:n}function Yp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Jp={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Zp=O.INFO,eg={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},tg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=eg[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yi{constructor(e){this.name=e,this._logLevel=Zp,this._logHandler=tg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const ng=(n,e)=>e.some(t=>n instanceof t);let Ka,Ga;function sg(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ig(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ql=new WeakMap,Ar=new WeakMap,Yl=new WeakMap,er=new WeakMap,wo=new WeakMap;function rg(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(et(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ql.set(t,n)}).catch(()=>{}),wo.set(e,n),e}function og(n){if(Ar.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ar.set(n,e)}let br={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ar.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ag(n){br=n(br)}function cg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(tr(this),e,...t);return Yl.set(s,e.sort?e.sort():[e]),et(s)}:ig().includes(n)?function(...e){return n.apply(tr(this),e),et(Ql.get(this))}:function(...e){return et(n.apply(tr(this),e))}}function lg(n){return typeof n=="function"?cg(n):(n instanceof IDBTransaction&&og(n),ng(n,sg())?new Proxy(n,br):n)}function et(n){if(n instanceof IDBRequest)return rg(n);if(er.has(n))return er.get(n);const e=lg(n);return e!==n&&(er.set(n,e),wo.set(e,n)),e}const tr=n=>wo.get(n);function Xl(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=et(o);return s&&o.addEventListener("upgradeneeded",c=>{s(et(o.result),c.oldVersion,c.newVersion,et(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ug=["get","getKey","getAll","getAllKeys","count"],hg=["put","add","delete","clear"],nr=new Map;function Wa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nr.get(e))return nr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=hg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ug.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return nr.set(e,r),r}ag(n=>({...n,get:(e,t,s)=>Wa(e,t)||n.get(e,t,s),has:(e,t)=>!!Wa(e,t)||n.has(e,t)}));/**
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
 */class dg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function fg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",za="0.9.4";/**
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
 */const Tt=new yi("@firebase/app"),pg="@firebase/app-compat",gg="@firebase/analytics-compat",mg="@firebase/analytics",yg="@firebase/app-check-compat",_g="@firebase/app-check",vg="@firebase/auth",wg="@firebase/auth-compat",Eg="@firebase/database",Tg="@firebase/database-compat",Ig="@firebase/functions",Cg="@firebase/functions-compat",Sg="@firebase/installations",Ag="@firebase/installations-compat",bg="@firebase/messaging",Ng="@firebase/messaging-compat",Rg="@firebase/performance",Dg="@firebase/performance-compat",kg="@firebase/remote-config",xg="@firebase/remote-config-compat",Og="@firebase/storage",Mg="@firebase/storage-compat",Lg="@firebase/firestore",Pg="@firebase/firestore-compat",Fg="firebase",$g="9.17.2";/**
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
 */const Rr="[DEFAULT]",Ug={[Nr]:"fire-core",[pg]:"fire-core-compat",[mg]:"fire-analytics",[gg]:"fire-analytics-compat",[_g]:"fire-app-check",[yg]:"fire-app-check-compat",[vg]:"fire-auth",[wg]:"fire-auth-compat",[Eg]:"fire-rtdb",[Tg]:"fire-rtdb-compat",[Ig]:"fire-fn",[Cg]:"fire-fn-compat",[Sg]:"fire-iid",[Ag]:"fire-iid-compat",[bg]:"fire-fcm",[Ng]:"fire-fcm-compat",[Rg]:"fire-perf",[Dg]:"fire-perf-compat",[kg]:"fire-rc",[xg]:"fire-rc-compat",[Og]:"fire-gcs",[Mg]:"fire-gcs-compat",[Lg]:"fire-fst",[Pg]:"fire-fst-compat","fire-js":"fire-js",[Fg]:"fire-js-all"};/**
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
 */const qs=new Map,Dr=new Map;function Vg(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function He(n){const e=n.name;if(Dr.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,n);for(const t of qs.values())Vg(t,n);return!0}function is(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Bg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new gi("app","Firebase",Bg);/**
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
 */class qg{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Jl=$g;function Zl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw tt.create("bad-app-name",{appName:String(i)});if(t||(t=Rp()),!t)throw tt.create("no-options");const r=qs.get(i);if(r){if(Bs(t,r.options)&&Bs(s,r.config))return r;throw tt.create("duplicate-app",{appName:i})}const o=new Xp(i);for(const c of Dr.values())o.addComponent(c);const a=new qg(t,s,o);return qs.set(i,a),a}function eu(n=Rr){const e=qs.get(n);if(!e&&n===Rr)return Zl();if(!e)throw tt.create("no-app",{appName:n});return e}function Se(n,e,t){var s;let i=(s=Ug[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(a.join(" "));return}He(new Pe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jg="firebase-heartbeat-database",Hg=1,Bn="firebase-heartbeat-store";let sr=null;function tu(){return sr||(sr=Xl(jg,Hg,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bn)}}}).catch(n=>{throw tt.create("idb-open",{originalErrorMessage:n.message})})),sr}async function Kg(n){try{return(await tu()).transaction(Bn).objectStore(Bn).get(nu(n))}catch(e){if(e instanceof ct)Tt.warn(e.message);else{const t=tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(t.message)}}}async function Qa(n,e){try{const s=(await tu()).transaction(Bn,"readwrite");return await s.objectStore(Bn).put(e,nu(n)),s.done}catch(t){if(t instanceof ct)Tt.warn(t.message);else{const s=tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(s.message)}}}function nu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gg=1024,Wg=30*24*60*60*1e3;class zg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ya();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Wg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ya(),{heartbeatsToSend:t,unsentEntries:s}=Qg(this._heartbeatsCache.heartbeats),i=Us(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ya(){return new Date().toISOString().substring(0,10)}function Qg(n,e=Gg){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xa(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Yg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gl()?Wl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xa(n){return Us(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Xg(n){He(new Pe("platform-logger",e=>new dg(e),"PRIVATE")),He(new Pe("heartbeat",e=>new zg(e),"PRIVATE")),Se(Nr,za,n),Se(Nr,za,"esm2017"),Se("fire-js","")}Xg("");var Jg="firebase",Zg="9.17.2";/**
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
 */Se(Jg,Zg,"app");const su="@firebase/installations",Eo="0.6.4";/**
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
 */const iu=1e4,ru=`w:${Eo}`,ou="FIS_v2",em="https://firebaseinstallations.googleapis.com/v1",tm=60*60*1e3,nm="installations",sm="Installations";/**
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
 */const im={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},It=new gi(nm,sm,im);function au(n){return n instanceof ct&&n.code.includes("request-failed")}/**
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
 */function cu({projectId:n}){return`${em}/projects/${n}/installations`}function lu(n){return{token:n.token,requestStatus:2,expiresIn:om(n.expiresIn),creationTime:Date.now()}}async function uu(n,e){const s=(await e.json()).error;return It.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function hu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function rm(n,{refreshToken:e}){const t=hu(n);return t.append("Authorization",am(e)),t}async function du(n){const e=await n();return e.status>=500&&e.status<600?n():e}function om(n){return Number(n.replace("s","000"))}function am(n){return`${ou} ${n}`}/**
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
 */async function cm({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=cu(n),i=hu(n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:t,authVersion:ou,appId:n.appId,sdkVersion:ru},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await du(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:lu(l.authToken)}}else throw await uu("Create Installation",c)}/**
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
 */function fu(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function lm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const um=/^[cdef][\w-]{21}$/,kr="";function hm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=dm(n);return um.test(t)?t:kr}catch{return kr}}function dm(n){return lm(n).substr(0,22)}/**
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
 */function _i(n){return`${n.appName}!${n.appId}`}/**
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
 */const pu=new Map;function gu(n,e){const t=_i(n);mu(t,e),fm(t,e)}function mu(n,e){const t=pu.get(n);if(t)for(const s of t)s(e)}function fm(n,e){const t=pm();t&&t.postMessage({key:n,fid:e}),gm()}let pt=null;function pm(){return!pt&&"BroadcastChannel"in self&&(pt=new BroadcastChannel("[Firebase] FID Change"),pt.onmessage=n=>{mu(n.data.key,n.data.fid)}),pt}function gm(){pu.size===0&&pt&&(pt.close(),pt=null)}/**
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
 */const mm="firebase-installations-database",ym=1,Ct="firebase-installations-store";let ir=null;function To(){return ir||(ir=Xl(mm,ym,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ct)}}})),ir}async function js(n,e){const t=_i(n),i=(await To()).transaction(Ct,"readwrite"),r=i.objectStore(Ct),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&gu(n,e.fid),e}async function yu(n){const e=_i(n),s=(await To()).transaction(Ct,"readwrite");await s.objectStore(Ct).delete(e),await s.done}async function vi(n,e){const t=_i(n),i=(await To()).transaction(Ct,"readwrite"),r=i.objectStore(Ct),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&gu(n,a.fid),a}/**
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
 */async function Io(n){let e;const t=await vi(n.appConfig,s=>{const i=_m(s),r=vm(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===kr?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function _m(n){const e=n||{fid:hm(),registrationStatus:0};return _u(e)}function vm(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(It.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=wm(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Em(n)}:{installationEntry:e}}async function wm(n,e){try{const t=await cm(n,e);return js(n.appConfig,t)}catch(t){throw au(t)&&t.customData.serverCode===409?await yu(n.appConfig):await js(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Em(n){let e=await Ja(n.appConfig);for(;e.registrationStatus===1;)await fu(100),e=await Ja(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Io(n);return s||t}return e}function Ja(n){return vi(n,e=>{if(!e)throw It.create("installation-not-found");return _u(e)})}function _u(n){return Tm(n)?{fid:n.fid,registrationStatus:0}:n}function Tm(n){return n.registrationStatus===1&&n.registrationTime+iu<Date.now()}/**
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
 */async function Im({appConfig:n,heartbeatServiceProvider:e},t){const s=Cm(n,t),i=rm(n,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:ru,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await du(()=>fetch(s,a));if(c.ok){const l=await c.json();return lu(l)}else throw await uu("Generate Auth Token",c)}function Cm(n,{fid:e}){return`${cu(n)}/${e}/authTokens:generate`}/**
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
 */async function Co(n,e=!1){let t;const s=await vi(n.appConfig,r=>{if(!vu(r))throw It.create("not-registered");const o=r.authToken;if(!e&&bm(o))return r;if(o.requestStatus===1)return t=Sm(n,e),r;{if(!navigator.onLine)throw It.create("app-offline");const a=Rm(r);return t=Am(n,a),a}});return t?await t:s.authToken}async function Sm(n,e){let t=await Za(n.appConfig);for(;t.authToken.requestStatus===1;)await fu(100),t=await Za(n.appConfig);const s=t.authToken;return s.requestStatus===0?Co(n,e):s}function Za(n){return vi(n,e=>{if(!vu(e))throw It.create("not-registered");const t=e.authToken;return Dm(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Am(n,e){try{const t=await Im(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await js(n.appConfig,s),t}catch(t){if(au(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await yu(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await js(n.appConfig,s)}throw t}}function vu(n){return n!==void 0&&n.registrationStatus===2}function bm(n){return n.requestStatus===2&&!Nm(n)}function Nm(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+tm}function Rm(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Dm(n){return n.requestStatus===1&&n.requestTime+iu<Date.now()}/**
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
 */async function km(n){const e=n,{installationEntry:t,registrationPromise:s}=await Io(e);return s?s.catch(console.error):Co(e).catch(console.error),t.fid}/**
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
 */async function xm(n,e=!1){const t=n;return await Om(t),(await Co(t,e)).token}async function Om(n){const{registrationPromise:e}=await Io(n);e&&await e}/**
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
 */function Mm(n){if(!n||!n.options)throw rr("App Configuration");if(!n.name)throw rr("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw rr(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function rr(n){return It.create("missing-app-config-values",{valueName:n})}/**
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
 */const wu="installations",Lm="installations-internal",Pm=n=>{const e=n.getProvider("app").getImmediate(),t=Mm(e),s=is(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Fm=n=>{const e=n.getProvider("app").getImmediate(),t=is(e,wu).getImmediate();return{getId:()=>km(t),getToken:i=>xm(t,i)}};function $m(){He(new Pe(wu,Pm,"PUBLIC")),He(new Pe(Lm,Fm,"PRIVATE"))}$m();Se(su,Eo);Se(su,Eo,"esm2017");/**
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
 */const Hs="analytics",Um="firebase_id",Vm="origin",Bm=60*1e3,qm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Eu="https://www.googletagmanager.com/gtag/js";/**
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
 */const we=new yi("@firebase/analytics");/**
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
 */function Tu(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function jm(n,e){const t=document.createElement("script");t.src=`${Eu}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function Hm(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Km(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await Tu(t)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){we.error(a)}n("config",i,r)}async function Gm(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Tu(t);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){we.error(r)}}function Wm(n,e,t,s){async function i(r,o,a){try{r==="event"?await Gm(n,e,t,o,a):r==="config"?await Km(n,e,t,s,o,a):r==="consent"?n("consent","update",a):n("set",o)}catch(c){we.error(c)}}return i}function zm(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Wm(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function Qm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Eu)&&t.src.includes(n))return t;return null}/**
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
 */const Ym={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ae=new gi("analytics","Analytics",Ym);/**
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
 */const Xm=30,Jm=1e3;class Zm{constructor(e={},t=Jm){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Iu=new Zm;function ey(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ty(n){var e;const{appId:t,apiKey:s}=n,i={method:"GET",headers:ey(s)},r=qm.replace("{app-id}",t),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ny(n,e=Iu,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw Ae.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Ae.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ry;return setTimeout(async()=>{a.abort()},t!==void 0?t:Bm),Cu({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Cu(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=Iu){var r;const{appId:o,measurementId:a}=n;try{await sy(s,e)}catch(c){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await ty(n);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!iy(l)){if(i.deleteThrottleMetadata(o),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ha(t,i.intervalMillis,Xm):Ha(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(o,h),we.debug(`Calling attemptFetch again in ${u} millis`),Cu(n,h,s,i)}}function sy(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(Ae.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iy(n){if(!(n instanceof ct)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ry{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oy(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});n("event",t,o)}}/**
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
 */async function ay(){if(Gl())try{await Wl()}catch(n){return we.warn(Ae.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return we.warn(Ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cy(n,e,t,s,i,r,o){var a;const c=ny(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>we.error(f)),e.push(c);const l=ay().then(f=>{if(f)return s.getId()}),[u,h]=await Promise.all([c,l]);Qm(r)||jm(r,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Vm]="firebase",d.update=!0,h!=null&&(d[Um]=h),i("config",u.measurementId,d),u.measurementId}/**
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
 */class ly{constructor(e){this.app=e}_delete(){return delete kn[this.app.options.appId],Promise.resolve()}}let kn={},ec=[];const tc={};let or="dataLayer",uy="gtag",nc,Su,sc=!1;function hy(){const n=[];if(xp()&&n.push("This is a browser extension environment."),Mp()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=Ae.create("invalid-analytics-context",{errorInfo:e});we.warn(t.message)}}function dy(n,e,t){hy();const s=n.options.appId;if(!s)throw Ae.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ae.create("no-api-key");if(kn[s]!=null)throw Ae.create("already-exists",{id:s});if(!sc){Hm(or);const{wrappedGtag:r,gtagCore:o}=zm(kn,ec,tc,or,uy);Su=r,nc=o,sc=!0}return kn[s]=cy(n,ec,tc,e,nc,or,t),new ly(n)}function fy(n=eu()){n=je(n);const e=is(n,Hs);return e.isInitialized()?e.getImmediate():py(n)}function py(n,e={}){const t=is(n,Hs);if(t.isInitialized()){const i=t.getImmediate();if(Bs(e,t.getOptions()))return i;throw Ae.create("already-initialized")}return t.initialize({options:e})}function gy(n,e,t,s){n=je(n),oy(Su,kn[n.app.options.appId],e,t,s).catch(i=>we.error(i))}const ic="@firebase/analytics",rc="0.9.4";function my(){He(new Pe(Hs,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dy(s,i,t)},"PUBLIC")),He(new Pe("analytics-internal",n,"PRIVATE")),Se(ic,rc),Se(ic,rc,"esm2017");function n(e){try{const t=e.getProvider(Hs).getImmediate();return{logEvent:(s,i,r)=>gy(t,s,i,r)}}catch(t){throw Ae.create("interop-component-reg-failed",{reason:t})}}}my();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;const Ks=window,Qt=Ks.trustedTypes,oc=Qt?Qt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ze=`lit$${(Math.random()+"").slice(9)}$`,Au="?"+Ze,yy=`<${Au}>`,Yt=document,qn=(n="")=>Yt.createComment(n),jn=n=>n===null||typeof n!="object"&&typeof n!="function",bu=Array.isArray,_y=n=>bu(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",wn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ac=/-->/g,cc=/>/g,ht=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lc=/'/g,uc=/"/g,Nu=/^(?:script|style|textarea|title)$/i,Hn=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),hc=new WeakMap,jt=Yt.createTreeWalker(Yt,129,null,!1),vy=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":"",o=wn;for(let c=0;c<t;c++){const l=n[c];let u,h,d=-1,f=0;for(;f<l.length&&(o.lastIndex=f,h=o.exec(l),h!==null);)f=o.lastIndex,o===wn?h[1]==="!--"?o=ac:h[1]!==void 0?o=cc:h[2]!==void 0?(Nu.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=ht):h[3]!==void 0&&(o=ht):o===ht?h[0]===">"?(o=i??wn,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?ht:h[3]==='"'?uc:lc):o===uc||o===lc?o=ht:o===ac||o===cc?o=wn:(o=ht,i=void 0);const m=o===ht&&n[c+1].startsWith("/>")?" ":"";r+=o===wn?l+yy:d>=0?(s.push(u),l.slice(0,d)+"$lit$"+l.slice(d)+Ze+m):l+Ze+(d===-2?(s.push(void 0),c):m)}const a=r+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[oc!==void 0?oc.createHTML(a):a,s]};let xr=class Ru{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const a=e.length-1,c=this.parts,[l,u]=vy(e,t);if(this.el=Ru.createElement(l,s),jt.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=jt.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(Ze)){const f=u[o++];if(h.push(d),f!==void 0){const m=i.getAttribute(f.toLowerCase()+"$lit$").split(Ze),w=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:w[2],strings:m,ctor:w[1]==="."?Ey:w[1]==="?"?Iy:w[1]==="@"?Cy:wi})}else c.push({type:6,index:r})}for(const d of h)i.removeAttribute(d)}if(Nu.test(i.tagName)){const h=i.textContent.split(Ze),d=h.length-1;if(d>0){i.textContent=Qt?Qt.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],qn()),jt.nextNode(),c.push({type:2,index:++r});i.append(h[d],qn())}}}else if(i.nodeType===8)if(i.data===Au)c.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(Ze,h+1))!==-1;)c.push({type:7,index:r}),h+=Ze.length-1}r++}}static createElement(e,t){const s=Yt.createElement("template");return s.innerHTML=e,s}};function Xt(n,e,t=n,s){var i,r,o,a;if(e===Hn)return e;let c=s!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[s]:t._$Cl;const l=jn(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),l===void 0?c=void 0:(c=new l(n),c._$AT(n,t,s)),s!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=c:t._$Cl=c),c!==void 0&&(e=Xt(n,c._$AS(n,e.values),c,s)),e}let wy=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:i}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Yt).importNode(s,!0);jt.currentNode=r;let o=jt.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new So(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new Sy(o,this,e)),this.u.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=jt.nextNode(),a++)}return r}p(e){let t=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},So=class Du{constructor(e,t,s,i){var r;this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cm=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Xt(this,e,t),jn(e)?e===ee||e==null||e===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==Hn&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_y(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==ee&&jn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=xr.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(s);else{const o=new wy(r,this),a=o.v(this.options);o.p(s),this.T(a),this._$AH=o}}_$AC(e){let t=hc.get(e.strings);return t===void 0&&hc.set(e.strings,t=new xr(e)),t}k(e){bu(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new Du(this.O(qn()),this.O(qn()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},wi=class{constructor(e,t,s,i,r){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ee}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=Xt(this,e,t,0),o=!jn(e)||e!==this._$AH&&e!==Hn,o&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Xt(this,a[s+c],t,c),l===Hn&&(l=this._$AH[c]),o||(o=!jn(l)||l!==this._$AH[c]),l===ee?e=ee:e!==ee&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ey=class extends wi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ee?void 0:e}};const Ty=Qt?Qt.emptyScript:"";let Iy=class extends wi{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ee?this.element.setAttribute(this.name,Ty):this.element.removeAttribute(this.name)}},Cy=class extends wi{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){var s;if((e=(s=Xt(this,e,t,0))!==null&&s!==void 0?s:ee)===Hn)return;const i=this._$AH,r=e===ee&&i!==ee||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==ee&&(i===ee||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}},Sy=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Xt(this,e)}};const dc=Ks.litHtmlPolyfillSupport;dc==null||dc(xr,So),((ar=Ks.litHtmlVersions)!==null&&ar!==void 0?ar:Ks.litHtmlVersions=[]).push("2.6.1");const ku=(n,e,t)=>{var s,i;const r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let o=r._$litPart$;if(o===void 0){const a=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new So(e.insertBefore(qn(),a),a,void 0,t??{})}return o._$AI(n),o};var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Ao=Ao||{},C=Ay||self;function Gs(){}function Ei(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function rs(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function by(n){return Object.prototype.hasOwnProperty.call(n,cr)&&n[cr]||(n[cr]=++Ny)}var cr="closure_uid_"+(1e9*Math.random()>>>0),Ny=0;function Ry(n,e,t){return n.call.apply(n.bind,arguments)}function Dy(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pe=Ry:pe=Dy,pe.apply(null,arguments)}function bs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function ae(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function lt(){this.s=this.s,this.o=this.o}var ky=0;lt.prototype.s=!1;lt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ky!=0)&&by(this)};lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function bo(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function fc(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Ei(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function ge(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var xy=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{C.addEventListener("test",Gs,e),C.removeEventListener("test",Gs,e)}catch{}return n}();function Ws(n){return/^[\s\xa0]*$/.test(n)}var pc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function lr(n,e){return n<e?-1:n>e?1:0}function Ti(){var n=C.navigator;return n&&(n=n.userAgent)?n:""}function Oe(n){return Ti().indexOf(n)!=-1}function No(n){return No[" "](n),n}No[" "]=Gs;function Oy(n){var e=Py;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var My=Oe("Opera"),Jt=Oe("Trident")||Oe("MSIE"),Ou=Oe("Edge"),Or=Ou||Jt,Mu=Oe("Gecko")&&!(Ti().toLowerCase().indexOf("webkit")!=-1&&!Oe("Edge"))&&!(Oe("Trident")||Oe("MSIE"))&&!Oe("Edge"),Ly=Ti().toLowerCase().indexOf("webkit")!=-1&&!Oe("Edge");function Lu(){var n=C.document;return n?n.documentMode:void 0}var zs;e:{var ur="",hr=function(){var n=Ti();if(Mu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ou)return/Edge\/([\d\.]+)/.exec(n);if(Jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Ly)return/WebKit\/(\S+)/.exec(n);if(My)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(hr&&(ur=hr?hr[1]:""),Jt){var dr=Lu();if(dr!=null&&dr>parseFloat(ur)){zs=String(dr);break e}}zs=ur}var Py={};function Fy(){return Oy(function(){let n=0;const e=pc(String(zs)).split("."),t=pc("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=lr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||lr(i[2].length==0,r[2].length==0)||lr(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Mr;if(C.document&&Jt){var gc=Lu();Mr=gc||parseInt(zs,10)||void 0}else Mr=void 0;var $y=Mr;function Kn(n,e){if(ge.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Mu){e:{try{No(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Uy[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Kn.X.h.call(this)}}ae(Kn,ge);var Uy={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var os="closure_listenable_"+(1e6*Math.random()|0),Vy=0;function By(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++Vy,this.ba=this.ea=!1}function Ii(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Ro(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Pu(n){const e={};for(const t in n)e[t]=n[t];return e}const mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fu(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<mc.length;r++)t=mc[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Ci(n){this.src=n,this.g={},this.h=0}Ci.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Pr(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new By(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Lr(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=xu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ii(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Pr(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var Do="closure_lm_"+(1e6*Math.random()|0),fr={};function $u(n,e,t,s,i){if(s&&s.once)return Vu(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)$u(n,e[r],t,s,i);return null}return t=Oo(t),n&&n[os]?n.N(e,t,rs(s)?!!s.capture:!!s,i):Uu(n,e,t,!1,s,i)}function Uu(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=rs(i)?!!i.capture:!!i,a=xo(n);if(a||(n[Do]=a=new Ci(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=qy(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)xy||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(qu(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function qy(){function n(t){return e.call(n.src,n.listener,t)}const e=jy;return n}function Vu(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Vu(n,e[r],t,s,i);return null}return t=Oo(t),n&&n[os]?n.O(e,t,rs(s)?!!s.capture:!!s,i):Uu(n,e,t,!0,s,i)}function Bu(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Bu(n,e[r],t,s,i);else s=rs(s)?!!s.capture:!!s,t=Oo(t),n&&n[os]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Pr(r,t,s,i),-1<t&&(Ii(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=xo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Pr(e,t,s,i)),(t=-1<n?e[n]:null)&&ko(t))}function ko(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[os])Lr(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(qu(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=xo(e))?(Lr(t,n),t.h==0&&(t.src=null,e[Do]=null)):Ii(n)}}}function qu(n){return n in fr?fr[n]:fr[n]="on"+n}function jy(n,e){if(n.ba)n=!0;else{e=new Kn(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&ko(n),n=t.call(s,e)}return n}function xo(n){return n=n[Do],n instanceof Ci?n:null}var pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oo(n){return typeof n=="function"?n:(n[pr]||(n[pr]=function(e){return n.handleEvent(e)}),n[pr])}function ne(){lt.call(this),this.i=new Ci(this),this.P=this,this.I=null}ae(ne,lt);ne.prototype[os]=!0;ne.prototype.removeEventListener=function(n,e,t,s){Bu(this,n,e,t,s)};function oe(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new ge(e,n);else if(e instanceof ge)e.target=e.target||n;else{var i=e;e=new ge(s,n),Fu(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=Ns(o,s,!0,e)&&i}if(o=e.g=n,i=Ns(o,s,!0,e)&&i,i=Ns(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=Ns(o,s,!1,e)&&i}ne.prototype.M=function(){if(ne.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Ii(t[s]);delete n.g[e],n.h--}}this.I=null};ne.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ne.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Ns(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Lr(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Mo=C.JSON.stringify;function Hy(){var n=Ku;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Ky{constructor(){this.h=this.g=null}add(e,t){const s=ju.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var ju=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Gy,n=>n.reset());class Gy{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Wy(n){C.setTimeout(()=>{throw n},0)}function Hu(n,e){Fr||zy(),$r||(Fr(),$r=!0),Ku.add(n,e)}var Fr;function zy(){var n=C.Promise.resolve(void 0);Fr=function(){n.then(Qy)}}var $r=!1,Ku=new Ky;function Qy(){for(var n;n=Hy();){try{n.h.call(n.g)}catch(t){Wy(t)}var e=ju;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}$r=!1}function Si(n,e){ne.call(this),this.h=n||1,this.g=e||C,this.j=pe(this.lb,this),this.l=Date.now()}ae(Si,ne);v=Si.prototype;v.ca=!1;v.R=null;v.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),oe(this,"tick"),this.ca&&(Lo(this),this.start()))}};v.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lo(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}v.M=function(){Si.X.M.call(this),Lo(this),delete this.g};function Po(n,e,t){if(typeof n=="function")t&&(n=pe(n,t));else if(n&&typeof n.handleEvent=="function")n=pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(n,e||0)}function Gu(n){n.g=Po(()=>{n.g=null,n.i&&(n.i=!1,Gu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Yy extends lt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gu(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(n){lt.call(this),this.h=n,this.g={}}ae(Gn,lt);var yc=[];function Wu(n,e,t,s){Array.isArray(t)||(t&&(yc[0]=t.toString()),t=yc);for(var i=0;i<t.length;i++){var r=$u(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function zu(n){Ro(n.g,function(e,t){this.g.hasOwnProperty(t)&&ko(e)},n),n.g={}}Gn.prototype.M=function(){Gn.X.M.call(this),zu(this)};Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ai(){this.g=!0}Ai.prototype.Aa=function(){this.g=!1};function Xy(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Jy(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function Vt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+e_(n,t)+(s?" "+s:"")})}function Zy(n,e){n.info(function(){return"TIMEOUT: "+e})}Ai.prototype.info=function(){};function e_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mo(t)}catch{return e}}var xt={},_c=null;function bi(){return _c=_c||new ne}xt.Pa="serverreachability";function Qu(n){ge.call(this,xt.Pa,n)}ae(Qu,ge);function Wn(n){const e=bi();oe(e,new Qu(e))}xt.STAT_EVENT="statevent";function Yu(n,e){ge.call(this,xt.STAT_EVENT,n),this.stat=e}ae(Yu,ge);function ye(n){const e=bi();oe(e,new Yu(e,n))}xt.Qa="timingevent";function Xu(n,e){ge.call(this,xt.Qa,n),this.size=e}ae(Xu,ge);function as(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){n()},e)}var Ni={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ju={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Fo(){}Fo.prototype.h=null;function vc(n){return n.h||(n.h=n.i())}function Zu(){}var cs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function $o(){ge.call(this,"d")}ae($o,ge);function Uo(){ge.call(this,"c")}ae(Uo,ge);var Ur;function Ri(){}ae(Ri,Fo);Ri.prototype.g=function(){return new XMLHttpRequest};Ri.prototype.i=function(){return{}};Ur=new Ri;function ls(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new Gn(this),this.O=t_,n=Or?125:void 0,this.T=new Si(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eh}function eh(){this.i=null,this.g="",this.h=!1}var t_=45e3,Vr={},Qs={};v=ls.prototype;v.setTimeout=function(n){this.O=n};function Br(n,e,t){n.K=1,n.v=ki(Ke(e)),n.s=t,n.P=!0,th(n,null)}function th(n,e){n.F=Date.now(),us(n),n.A=Ke(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),lh(t.i,"t",s),n.C=0,t=n.l.H,n.h=new eh,n.g=Dh(n.l,t?e:null,!n.s),0<n.N&&(n.L=new Yy(pe(n.La,n,n.g),n.N)),Wu(n.S,n.g,"readystatechange",n.ib),e=n.H?Pu(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Wn(),Xy(n.j,n.u,n.A,n.m,n.U,n.s)}v.ib=function(n){n=n.target;const e=this.L;e&&$e(n)==3?e.l():this.La(n)};v.La=function(n){try{if(n==this.g)e:{const u=$e(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Or||this.g&&(this.h.h||this.g.fa()||Ic(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Wn(3):Wn(2)),Di(this);var t=this.g.aa();this.Y=t;t:if(nh(this)){var s=Ic(this.g);n="";var i=s.length,r=$e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gt(this),xn(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,Jy(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ws(a)){var l=a;break t}}l=null}if(t=l)Vt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qr(this,t);else{this.i=!1,this.o=3,ye(12),gt(this),xn(this);break e}}this.P?(sh(this,u,o),Or&&this.i&&u==3&&(Wu(this.S,this.T,"tick",this.hb),this.T.start())):(Vt(this.j,this.m,o,null),qr(this,o)),u==4&&gt(this),this.i&&!this.I&&(u==4?Ah(this.l,this):(this.i=!1,us(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ye(12)):(this.o=0,ye(13)),gt(this),xn(this)}}}catch{}finally{}};function nh(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function sh(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=n_(n,t),i==Qs){e==4&&(n.o=4,ye(14),s=!1),Vt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Vr){n.o=4,ye(15),Vt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Vt(n.j,n.m,i,null),qr(n,i);nh(n)&&i!=Qs&&i!=Vr&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ye(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Go(e),e.K=!0,ye(11))):(Vt(n.j,n.m,t,"[Invalid Chunked Response]"),gt(n),xn(n))}v.hb=function(){if(this.g){var n=$e(this.g),e=this.g.fa();this.C<e.length&&(Di(this),sh(this,n,e),this.i&&n!=4&&us(this))}};function n_(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Qs:(t=Number(e.substring(t,s)),isNaN(t)?Vr:(s+=1,s+t>e.length?Qs:(e=e.substr(s,t),n.C=s+t,e)))}v.cancel=function(){this.I=!0,gt(this)};function us(n){n.V=Date.now()+n.O,ih(n,n.O)}function ih(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=as(pe(n.gb,n),e)}function Di(n){n.B&&(C.clearTimeout(n.B),n.B=null)}v.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(Zy(this.j,this.A),this.K!=2&&(Wn(),ye(17)),gt(this),this.o=2,xn(this)):ih(this,this.V-n)};function xn(n){n.l.G==0||n.I||Ah(n.l,n)}function gt(n){Di(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Lo(n.T),zu(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function qr(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||jr(t.h,n))){if(!n.J&&jr(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Js(t),Mi(t);else break e;Ko(t),ye(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=as(pe(t.cb,t),6e3));if(1>=dh(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else mt(t,11)}else if((n.J||t.g==n)&&Js(t),!Ws(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Vo(r,r.h),r.h=null))}if(s.D){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,q(s.F,s.D,w))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=Rh(s,s.H?s.ka:null,s.V),o.J){fh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Di(a),us(a)),s.g=o}else Ch(s);0<t.i.length&&Li(t)}else l[0]!="stop"&&l[0]!="close"||mt(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?mt(t,7):Ho(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}Wn(4)}catch{}}function s_(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ei(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function i_(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ei(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function rh(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Ei(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=i_(n),s=s_(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vt(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof vt){this.h=e!==void 0?e:n.h,Ys(this,n.j),this.s=n.s,this.g=n.g,Xs(this,n.m),this.l=n.l,e=n.i;var t=new zn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),wc(this,t),this.o=n.o}else n&&(t=String(n).match(oh))?(this.h=!!e,Ys(this,t[1]||"",!0),this.s=An(t[2]||""),this.g=An(t[3]||"",!0),Xs(this,t[4]),this.l=An(t[5]||"",!0),wc(this,t[6]||"",!0),this.o=An(t[7]||"")):(this.h=!!e,this.i=new zn(null,this.h))}vt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(bn(e,Ec,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(bn(e,Ec,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(bn(t,t.charAt(0)=="/"?c_:a_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",bn(t,u_)),n.join("")};function Ke(n){return new vt(n)}function Ys(n,e,t){n.j=t?An(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Xs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function wc(n,e,t){e instanceof zn?(n.i=e,h_(n.i,n.h)):(t||(e=bn(e,l_)),n.i=new zn(e,n.h))}function q(n,e,t){n.i.set(e,t)}function ki(n){return q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function An(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function bn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,o_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function o_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ec=/[#\/\?@]/g,a_=/[#\?:]/g,c_=/[#\?]/g,l_=/[#\?@]/g,u_=/#/g;function zn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function ut(n){n.g||(n.g=new Map,n.h=0,n.i&&r_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}v=zn.prototype;v.add=function(n,e){ut(this),this.i=null,n=un(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function ah(n,e){ut(n),e=un(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function ch(n,e){return ut(n),e=un(n,e),n.g.has(e)}v.forEach=function(n,e){ut(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};v.oa=function(){ut(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};v.W=function(n){ut(this);let e=[];if(typeof n=="string")ch(this,n)&&(e=e.concat(this.g.get(un(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};v.set=function(n,e){return ut(this),this.i=null,n=un(this,n),ch(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};v.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function lh(n,e,t){ah(n,e),0<t.length&&(n.i=null,n.g.set(un(n,e),bo(t)),n.h+=t.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function un(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function h_(n,e){e&&!n.j&&(ut(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(ah(this,s),lh(this,i,t))},n)),n.j=e}var d_=class{constructor(e,t){this.h=e,this.g=t}};function uh(n){this.l=n||f_,C.PerformanceNavigationTiming?(n=C.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(C.g&&C.g.Ga&&C.g.Ga()&&C.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var f_=10;function hh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function dh(n){return n.h?1:n.g?n.g.size:0}function jr(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Vo(n,e){n.g?n.g.add(e):n.h=e}function fh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}uh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ph(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return bo(n.i)}function Bo(){}Bo.prototype.stringify=function(n){return C.JSON.stringify(n,void 0)};Bo.prototype.parse=function(n){return C.JSON.parse(n,void 0)};function p_(){this.g=new Bo}function g_(n,e,t){const s=t||"";try{rh(n,function(i,r){let o=i;rs(i)&&(o=Mo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function m_(n,e){const t=new Ai;if(C.Image){const s=new Image;s.onload=bs(Rs,t,s,"TestLoadImage: loaded",!0,e),s.onerror=bs(Rs,t,s,"TestLoadImage: error",!1,e),s.onabort=bs(Rs,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=bs(Rs,t,s,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Rs(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function hs(n){this.l=n.ac||null,this.j=n.jb||!1}ae(hs,Fo);hs.prototype.g=function(){return new xi(this.l,this.j)};hs.prototype.i=function(n){return function(){return n}}({});function xi(n,e){ne.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=qo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(xi,ne);var qo=0;v=xi.prototype;v.open=function(n,e){if(this.readyState!=qo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Qn(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||C).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=qo};v.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gh(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function gh(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}v.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ds(this):Qn(this),this.readyState==3&&gh(this)}};v.Va=function(n){this.g&&(this.response=this.responseText=n,ds(this))};v.Ua=function(n){this.g&&(this.response=n,ds(this))};v.ga=function(){this.g&&ds(this)};function ds(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Qn(n)}v.setRequestHeader=function(n,e){this.v.append(n,e)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Qn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var y_=C.JSON.parse;function j(n){ne.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mh,this.K=this.L=!1}ae(j,ne);var mh="",__=/^https?$/i,v_=["POST","PUT"];v=j.prototype;v.Ka=function(n){this.L=n};v.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ur.g(),this.C=this.u?vc(this.u):vc(Ur),this.g.onreadystatechange=pe(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Tc(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=C.FormData&&n instanceof C.FormData,!(0<=xu(v_,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vh(this),0<this.B&&((this.K=w_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pe(this.qa,this)):this.A=Po(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Tc(this,r)}};function w_(n){return Jt&&Fy()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.qa=function(){typeof Ao<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,oe(this,"timeout"),this.abort(8))};function Tc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,yh(n),Oi(n)}function yh(n){n.D||(n.D=!0,oe(n,"complete"),oe(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,oe(this,"complete"),oe(this,"abort"),Oi(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oi(this,!0)),j.X.M.call(this)};v.Ha=function(){this.s||(this.F||this.v||this.l?_h(this):this.fb())};v.fb=function(){_h(this)};function _h(n){if(n.h&&typeof Ao<"u"&&(!n.C[1]||$e(n)!=4||n.aa()!=2)){if(n.v&&$e(n)==4)Po(n.Ha,0,n);else if(oe(n,"readystatechange"),$e(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(oh)[1]||null;if(!i&&C.self&&C.self.location){var r=C.self.location.protocol;i=r.substr(0,r.length-1)}s=!__.test(i?i.toLowerCase():"")}t=s}if(t)oe(n,"complete"),oe(n,"success");else{n.m=6;try{var o=2<$e(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",yh(n)}}finally{Oi(n)}}}}function Oi(n,e){if(n.g){vh(n);const t=n.g,s=n.C[0]?Gs:null;n.g=null,n.C=null,e||oe(n,"ready");try{t.onreadystatechange=s}catch{}}}function vh(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(C.clearTimeout(n.A),n.A=null)}function $e(n){return n.g?n.g.readyState:0}v.aa=function(){try{return 2<$e(this)?this.g.status:-1}catch{return-1}};v.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),y_(e)}};function Ic(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case mh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}v.Ea=function(){return this.m};v.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wh(n){let e="";return Ro(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function jo(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=wh(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):q(n,e,t))}function En(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Eh(n){this.Ca=0,this.i=[],this.j=new Ai,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=En("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=En("baseRetryDelayMs",5e3,n),this.bb=En("retryDelaySeedMs",1e4,n),this.$a=En("forwardChannelMaxRetries",2,n),this.ta=En("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new uh(n&&n.concurrentRequestLimit),this.Fa=new p_,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}v=Eh.prototype;v.ma=8;v.G=1;function Ho(n){if(Th(n),n.G==3){var e=n.U++,t=Ke(n.F);q(t,"SID",n.I),q(t,"RID",e),q(t,"TYPE","terminate"),fs(n,t),e=new ls(n,n.j,e,void 0),e.K=2,e.v=ki(Ke(t)),t=!1,C.navigator&&C.navigator.sendBeacon&&(t=C.navigator.sendBeacon(e.v.toString(),"")),!t&&C.Image&&(new Image().src=e.v,t=!0),t||(e.g=Dh(e.l,null),e.g.da(e.v)),e.F=Date.now(),us(e)}Nh(n)}function Mi(n){n.g&&(Go(n),n.g.cancel(),n.g=null)}function Th(n){Mi(n),n.u&&(C.clearTimeout(n.u),n.u=null),Js(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&C.clearTimeout(n.m),n.m=null)}function Li(n){hh(n.h)||n.m||(n.m=!0,Hu(n.Ja,n),n.C=0)}function E_(n,e){return dh(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=as(pe(n.Ja,n,e),bh(n,n.C)),n.C++,!0)}v.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new ls(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=Pu(r),Fu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Ih(this,i,e),t=Ke(this.F),q(t,"RID",n),q(t,"CVER",22),this.D&&q(t,"X-HTTP-Session-Id",this.D),fs(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(wh(r)))+"&"+e:this.o&&jo(t,this.o,r)),Vo(this.h,i),this.Ya&&q(t,"TYPE","init"),this.O?(q(t,"$req",e),q(t,"SID","null"),i.Z=!0,Br(i,t,null)):Br(i,t,e),this.G=2}}else this.G==3&&(n?Cc(this,n):this.i.length==0||hh(this.h)||Cc(this))};function Cc(n,e){var t;e?t=e.m:t=n.U++;const s=Ke(n.F);q(s,"SID",n.I),q(s,"RID",t),q(s,"AID",n.T),fs(n,s),n.o&&n.s&&jo(s,n.o,n.s),t=new ls(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Ih(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Vo(n.h,t),Br(t,s,e)}function fs(n,e){n.ia&&Ro(n.ia,function(t,s){q(e,s,t)}),n.l&&rh({},function(t,s){q(e,s,t)})}function Ih(n,e,t){t=Math.min(n.i.length,t);var s=n.l?pe(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{g_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function Ch(n){n.g||n.u||(n.Z=1,Hu(n.Ia,n),n.A=0)}function Ko(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=as(pe(n.Ia,n),bh(n,n.A)),n.A++,!0)}v.Ia=function(){if(this.u=null,Sh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=as(pe(this.eb,this),n)}};v.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ye(10),Mi(this),Sh(this))};function Go(n){n.B!=null&&(C.clearTimeout(n.B),n.B=null)}function Sh(n){n.g=new ls(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Ke(n.sa);q(e,"RID","rpc"),q(e,"SID",n.I),q(e,"CI",n.L?"0":"1"),q(e,"AID",n.T),q(e,"TYPE","xmlhttp"),fs(n,e),n.o&&n.s&&jo(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=ki(Ke(e)),t.s=null,t.P=!0,th(t,n)}v.cb=function(){this.v!=null&&(this.v=null,Mi(this),Ko(this),ye(19))};function Js(n){n.v!=null&&(C.clearTimeout(n.v),n.v=null)}function Ah(n,e){var t=null;if(n.g==e){Js(n),Go(n),n.g=null;var s=2}else if(jr(n.h,e))t=e.D,fh(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=bi(),oe(s,new Xu(s,t)),Li(n)}else Ch(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&E_(n,e)||s==2&&Ko(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:mt(n,5);break;case 4:mt(n,10);break;case 3:mt(n,6);break;default:mt(n,2)}}}function bh(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function mt(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=pe(n.kb,n);t||(t=new vt("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||Ys(t,"https"),ki(t)),m_(t.toString(),s)}else ye(2);n.G=0,n.l&&n.l.va(e),Nh(n),Th(n)}v.kb=function(n){n?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function Nh(n){if(n.G=0,n.la=[],n.l){const e=ph(n.h);(e.length!=0||n.i.length!=0)&&(fc(n.la,e),fc(n.la,n.i),n.h.i.length=0,bo(n.i),n.i.length=0),n.l.ua()}}function Rh(n,e,t){var s=t instanceof vt?Ke(t):new vt(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Xs(s,s.m);else{var i=C.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new vt(null,void 0);s&&Ys(r,s),e&&(r.g=e),i&&Xs(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&q(s,t,e),q(s,"VER",n.ma),fs(n,s),s}function Dh(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new j(new hs({jb:!0})):new j(n.ra),e.Ka(n.H),e}function kh(){}v=kh.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Ra=function(){};function Zs(){if(Jt&&!(10<=Number($y)))throw Error("Environmental error: no available transport.")}Zs.prototype.g=function(n,e){return new Te(n,e)};function Te(n,e){ne.call(this),this.g=new Eh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Ws(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ws(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new hn(this)}ae(Te,ne);Te.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;ye(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Rh(n,null,n.V),Li(n)};Te.prototype.close=function(){Ho(this.g)};Te.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Mo(n),n=t);e.i.push(new d_(e.ab++,n)),e.G==3&&Li(e)};Te.prototype.M=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,Te.X.M.call(this)};function xh(n){$o.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ae(xh,$o);function Oh(){Uo.call(this),this.status=1}ae(Oh,Uo);function hn(n){this.g=n}ae(hn,kh);hn.prototype.xa=function(){oe(this.g,"a")};hn.prototype.wa=function(n){oe(this.g,new xh(n))};hn.prototype.va=function(n){oe(this.g,new Oh)};hn.prototype.ua=function(){oe(this.g,"b")};Zs.prototype.createWebChannel=Zs.prototype.g;Te.prototype.send=Te.prototype.u;Te.prototype.open=Te.prototype.m;Te.prototype.close=Te.prototype.close;Ni.NO_ERROR=0;Ni.TIMEOUT=8;Ni.HTTP_ERROR=6;Ju.COMPLETE="complete";Zu.EventType=cs;cs.OPEN="a";cs.CLOSE="b";cs.ERROR="c";cs.MESSAGE="d";ne.prototype.listen=ne.prototype.N;j.prototype.listenOnce=j.prototype.O;j.prototype.getLastError=j.prototype.Oa;j.prototype.getLastErrorCode=j.prototype.Ea;j.prototype.getStatus=j.prototype.aa;j.prototype.getResponseJson=j.prototype.Sa;j.prototype.getResponseText=j.prototype.fa;j.prototype.send=j.prototype.da;j.prototype.setWithCredentials=j.prototype.Ka;var T_=function(){return new Zs},I_=function(){return bi()},gr=Ni,C_=Ju,S_=xt,Sc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},A_=hs,Ds=Zu,b_=j;const Ac="@firebase/firestore";/**
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
 */class ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ce.UNAUTHENTICATED=new ce(null),ce.GOOGLE_CREDENTIALS=new ce("google-credentials-uid"),ce.FIRST_PARTY=new ce("first-party-uid"),ce.MOCK_USER=new ce("mock-user");/**
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
 */let dn="9.17.2";/**
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
 */const St=new yi("@firebase/firestore");function bc(){return St.logLevel}function E(n,...e){if(St.logLevel<=O.DEBUG){const t=e.map(Wo);St.debug(`Firestore (${dn}): ${n}`,...t)}}function Ge(n,...e){if(St.logLevel<=O.ERROR){const t=e.map(Wo);St.error(`Firestore (${dn}): ${n}`,...t)}}function Hr(n,...e){if(St.logLevel<=O.WARN){const t=e.map(Wo);St.warn(`Firestore (${dn}): ${n}`,...t)}}function Wo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function I(n="Unexpected state"){const e=`FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: `+n;throw Ge(e),new Error(e)}function F(n,e){n||I()}function A(n,e){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ve{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Mh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ce.UNAUTHENTICATED))}shutdown(){}}class R_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D_{constructor(e){this.t=e,this.currentUser=ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new Ve;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ve,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ve)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(F(typeof s.accessToken=="string"),new Mh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new ce(e)}}class k_{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i,this.type="FirstParty",this.user=ce.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(F(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class x_{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i}getToken(){return Promise.resolve(new k_(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=r=>{r.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.A=t.token,new O_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function L_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Lh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=L_(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function M(n,e){return n<e?-1:n>e?1:0}function Zt(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
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
 */class z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new z(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new z(0,0))}static max(){return new S(new z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&I(),s===void 0?s=e.length-t:s>e.length-t&&I(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class V extends Yn{construct(e,t,s){return new V(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new V(t)}static emptyPath(){return new V([])}}const P_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends Yn{construct(e,t,s){return new de(e,t,s)}static isValidIdentifier(e){return P_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new de(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
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
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(V.fromString(e))}static fromName(e){return new T(V.fromString(e).popFirst(5))}static empty(){return new T(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new V(e.slice()))}}function F_(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new z(t+1,0):new z(t,s));return new it(i,T.empty(),e)}function $_(n){return new it(n.readTime,n.key,-1)}class it{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new it(S.min(),T.empty(),-1)}static max(){return new it(S.max(),T.empty(),-1)}}function U_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=T.comparator(n.documentKey,e.documentKey),t!==0?t:M(n.largestBatchId,e.largestBatchId))}/**
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
 */const V_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ps(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==V_)throw n;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,s)=>{t(e)})}static reject(e){return new g((t,s)=>{s(e)})}static waitFor(e){return new g((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=g.resolve(!1);for(const s of e)t=t.next(i=>i?g.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new g((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new g((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function gs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class zo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}zo.at=-1;/**
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
 */class q_{constructor(e,t,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Xn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Nc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ph(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */function Pi(n){return n==null}function ei(n){return n===0&&1/n==-1/0}function j_(n){return typeof n=="number"&&Number.isInteger(n)&&!ei(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */class H_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new H_("Invalid base64 string: "+i):i}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const K_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rt(n){if(F(!!n),typeof n=="string"){let e=0;const t=K_.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:G(n.seconds),nanos:G(n.nanos)}}function G(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
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
 */function Fh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $h(n){const e=n.mapValue.fields.__previous_value__;return Fh(e)?$h(e):e}function Jn(n){const e=rt(n.mapValue.fields.__local_write_time__.timestampValue);return new z(e.seconds,e.nanos)}/**
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
 */const ks={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fh(n)?4:G_(n)?9007199254740991:10:I()}function Fe(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jn(n).isEqual(Jn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=rt(s.timestampValue),o=rt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return en(s.bytesValue).isEqual(en(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return G(s.geoPointValue.latitude)===G(i.geoPointValue.latitude)&&G(s.geoPointValue.longitude)===G(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return G(s.integerValue)===G(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=G(s.doubleValue),o=G(i.doubleValue);return r===o?ei(r)===ei(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return Zt(n.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Nc(r)!==Nc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Fe(r[a],o[a])))return!1;return!0}(n,e);default:return I()}}function Zn(n,e){return(n.values||[]).find(t=>Fe(t,e))!==void 0}function tn(n,e){if(n===e)return 0;const t=At(n),s=At(e);if(t!==s)return M(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return M(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=G(i.integerValue||i.doubleValue),a=G(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Rc(n.timestampValue,e.timestampValue);case 4:return Rc(Jn(n),Jn(e));case 5:return M(n.stringValue,e.stringValue);case 6:return function(i,r){const o=en(i),a=en(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=M(o[c],a[c]);if(l!==0)return l}return M(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=M(G(i.latitude),G(r.latitude));return o!==0?o:M(G(i.longitude),G(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=tn(o[c],a[c]);if(l)return l}return M(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ks.mapValue&&r===ks.mapValue)return 0;if(i===ks.mapValue)return 1;if(r===ks.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=M(a[u],l[u]);if(h!==0)return h;const d=tn(o[a[u]],c[l[u]]);if(d!==0)return d}return M(a.length,l.length)}(n.mapValue,e.mapValue);default:throw I()}}function Rc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return M(n,e);const t=rt(n),s=rt(e),i=M(t.seconds,s.seconds);return i!==0?i:M(t.nanos,s.nanos)}function nn(n){return Kr(n)}function Kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=rt(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?en(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,T.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Kr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Kr(s.fields[a])}`;return r+"}"}(n.mapValue):I();var e,t}function Dc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gr(n){return!!n&&"integerValue"in n}function Qo(n){return!!n&&"arrayValue"in n}function kc(n){return!!n&&"nullValue"in n}function xc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ls(n){return!!n&&"mapValue"in n}function On(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return fn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=On(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=On(n.arrayValue.values[t]);return e}return Object.assign({},n)}function G_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ti{constructor(e,t){this.position=e,this.inclusive=t}}function Oc(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),t.key):s=tn(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Uh{}class W extends Uh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new z_(e,t,s):t==="array-contains"?new X_(e,s):t==="in"?new J_(e,s):t==="not-in"?new Z_(e,s):t==="array-contains-any"?new ev(e,s):new W(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Q_(e,s):new Y_(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(tn(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison(tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xe extends Uh{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new xe(e,t)}matches(e){return Vh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(t=>t.isInequality());return e!==null?e.field:null}dt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Vh(n){return n.op==="and"}function Bh(n){return W_(n)&&Vh(n)}function W_(n){for(const e of n.filters)if(e instanceof xe)return!1;return!0}function Wr(n){if(n instanceof W)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(Bh(n))return n.filters.map(e=>Wr(e)).join(",");{const e=n.filters.map(t=>Wr(t)).join(",");return`${n.op}(${e})`}}function qh(n,e){return n instanceof W?function(t,s){return s instanceof W&&t.op===s.op&&t.field.isEqual(s.field)&&Fe(t.value,s.value)}(n,e):n instanceof xe?function(t,s){return s instanceof xe&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&qh(r,s.filters[o]),!0):!1}(n,e):void I()}function jh(n){return n instanceof W?function(e){return`${e.field.canonicalString()} ${e.op} ${nn(e.value)}`}(n):n instanceof xe?function(e){return e.op.toString()+" {"+e.getFilters().map(jh).join(" ,")+"}"}(n):"Filter"}class z_ extends W{constructor(e,t,s){super(e,t,s),this.key=T.fromName(s.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.matchesComparison(t)}}class Q_ extends W{constructor(e,t){super(e,"in",t),this.keys=Hh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Y_ extends W{constructor(e,t){super(e,"not-in",t),this.keys=Hh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>T.fromName(s.referenceValue))}class X_ extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qo(t)&&Zn(t.arrayValue,this.value)}}class J_ extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zn(this.value.arrayValue,t)}}class Z_ extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Zn(this.value.arrayValue,t)}}class ev extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Zn(this.value.arrayValue,s))}}/**
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
 */class Mn{constructor(e,t="asc"){this.field=e,this.dir=t}}function tv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Y{constructor(e,t){this.comparator=e,this.root=t||ie.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xs(this.root,e,this.comparator,!1)}getReverseIterator(){return new xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xs(this.root,e,this.comparator,!0)}}class xs{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ie{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ie.RED,this.left=i??ie.EMPTY,this.right=r??ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new ie(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ie.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1;ie.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(n,e,t,s,i){return this}insert(n,e,t){return new ie(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Q{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lc(this.data.getIterator())}getIteratorFrom(e){return new Lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Q(this.comparator);return t.data=e,t}}class Lc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Re{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Re([])}unionWith(e){let t=new Q(de.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Re(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=On(t)}setAll(e){let t=de.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=On(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Ls(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){fn(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ie(On(this.value))}}function Kh(n){const e=[];return fn(n.fields,(t,s)=>{const i=new de([t]);if(Ls(s)){const r=Kh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Re(e)}/**
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
 */class le{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new le(e,0,S.min(),S.min(),S.min(),Ie.empty(),0)}static newFoundDocument(e,t,s,i){return new le(e,1,t,S.min(),s,i,0)}static newNoDocument(e,t){return new le(e,2,t,S.min(),S.min(),Ie.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,S.min(),S.min(),Ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nv{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Pc(n,e=null,t=[],s=[],i=null,r=null,o=null){return new nv(n,e,t,s,i,r,o)}function Yo(n){const e=A(n);if(e._t===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Wr(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>nn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>nn(s)).join(",")),e._t=t}return e._t}function Xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mc(n.startAt,e.startAt)&&Mc(n.endAt,e.endAt)}function zr(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ms{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function sv(n,e,t,s,i,r,o,a){return new ms(n,e,t,s,i,r,o,a)}function Jo(n){return new ms(n)}function Fc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gh(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Zo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Wh(n){return n.collectionGroup!==null}function Ht(n){const e=A(n);if(e.wt===null){e.wt=[];const t=Zo(e),s=Gh(e);if(t!==null&&s===null)t.isKeyField()||e.wt.push(new Mn(t)),e.wt.push(new Mn(de.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Mn(de.keyField(),r))}}}return e.wt}function We(n){const e=A(n);if(!e.gt)if(e.limitType==="F")e.gt=Pc(e.path,e.collectionGroup,Ht(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Ht(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Mn(r.field,o))}const s=e.endAt?new ti(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ti(e.startAt.position,e.startAt.inclusive):null;e.gt=Pc(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e.gt}function Qr(n,e){e.getFirstInequalityField(),Zo(n);const t=n.filters.concat([e]);return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yr(n,e,t){return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fi(n,e){return Xo(We(n),We(e))&&n.limitType===e.limitType}function zh(n){return`${Yo(We(n))}|lt:${n.limitType}`}function Xr(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>jh(s)).join(", ")}]`),Pi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>nn(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>nn(s)).join(",")),`Target(${t})`}(We(n))}; limitType=${n.limitType})`}function $i(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):T.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of Ht(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=Oc(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,Ht(t),s)||t.endAt&&!function(i,r,o){const a=Oc(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,Ht(t),s))}(n,e)}function iv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qh(n){return(e,t)=>{let s=!1;for(const i of Ht(n)){const r=rv(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function rv(n,e,t){const s=n.field.isKeyField()?T.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?tn(a,c):I()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function Yh(n,e){if(n.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ei(e)?"-0":e}}function Xh(n){return{integerValue:""+n}}function ov(n,e){return j_(e)?Xh(e):Yh(n,e)}/**
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
 */class Ui{constructor(){this._=void 0}}function av(n,e,t){return n instanceof ni?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof es?Zh(n,e):n instanceof ts?ed(n,e):function(s,i){const r=Jh(s,i),o=$c(r)+$c(s.It);return Gr(r)&&Gr(s.It)?Xh(o):Yh(s.Tt,o)}(n,e)}function cv(n,e,t){return n instanceof es?Zh(n,e):n instanceof ts?ed(n,e):t}function Jh(n,e){return n instanceof si?Gr(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class ni extends Ui{}class es extends Ui{constructor(e){super(),this.elements=e}}function Zh(n,e){const t=td(e);for(const s of n.elements)t.some(i=>Fe(i,s))||t.push(s);return{arrayValue:{values:t}}}class ts extends Ui{constructor(e){super(),this.elements=e}}function ed(n,e){let t=td(e);for(const s of n.elements)t=t.filter(i=>!Fe(i,s));return{arrayValue:{values:t}}}class si extends Ui{constructor(e,t){super(),this.Tt=e,this.It=t}}function $c(n){return G(n.integerValue||n.doubleValue)}function td(n){return Qo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lv(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof es&&s instanceof es||t instanceof ts&&s instanceof ts?Zt(t.elements,s.elements,Fe):t instanceof si&&s instanceof si?Fe(t.It,s.It):t instanceof ni&&s instanceof ni}(n.transform,e.transform)}class uv{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ps(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vi{}function nd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new id(n.key,Be.none()):new ys(n.key,n.data,Be.none());{const t=n.data,s=Ie.empty();let i=new Q(de.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ot(n.key,s,new Re(i.toArray()),Be.none())}}function hv(n,e,t){n instanceof ys?function(s,i,r){const o=s.value.clone(),a=Vc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ot?function(s,i,r){if(!Ps(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Vc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(sd(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Ln(n,e,t,s){return n instanceof ys?function(i,r,o,a){if(!Ps(i.precondition,r))return o;const c=i.value.clone(),l=Bc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ot?function(i,r,o,a){if(!Ps(i.precondition,r))return o;const c=Bc(i.fieldTransforms,a,r),l=r.data;return l.setAll(sd(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return Ps(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function dv(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Jh(s.transform,i||null);r!=null&&(t===null&&(t=Ie.empty()),t.set(s.field,r))}return t||null}function Uc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Zt(t,s,(i,r)=>lv(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ys extends Vi{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ot extends Vi{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function sd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Vc(n,e,t){const s=new Map;F(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,cv(o,a,t[i]))}return s}function Bc(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,av(r,o,e))}return s}class id extends Vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fv extends Vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pv{constructor(e){this.count=e}}/**
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
 */var K,D;function gv(n){switch(n){default:return I();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function rd(n){if(n===void 0)return Ge("GRPC error has no .code"),p.UNKNOWN;switch(n){case K.OK:return p.OK;case K.CANCELLED:return p.CANCELLED;case K.UNKNOWN:return p.UNKNOWN;case K.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case K.INTERNAL:return p.INTERNAL;case K.UNAVAILABLE:return p.UNAVAILABLE;case K.UNAUTHENTICATED:return p.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case K.NOT_FOUND:return p.NOT_FOUND;case K.ALREADY_EXISTS:return p.ALREADY_EXISTS;case K.PERMISSION_DENIED:return p.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case K.ABORTED:return p.ABORTED;case K.OUT_OF_RANGE:return p.OUT_OF_RANGE;case K.UNIMPLEMENTED:return p.UNIMPLEMENTED;case K.DATA_LOSS:return p.DATA_LOSS;default:return I()}}(D=K||(K={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Ph(this.inner)}size(){return this.innerSize}}/**
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
 */const mv=new Y(T.comparator);function ze(){return mv}const od=new Y(T.comparator);function Nn(...n){let e=od;for(const t of n)e=e.insert(t.key,t);return e}function ad(n){let e=od;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function yt(){return Pn()}function cd(){return Pn()}function Pn(){return new pn(n=>n.toString(),(n,e)=>n.isEqual(e))}const yv=new Y(T.comparator),_v=new Q(T.comparator);function N(...n){let e=_v;for(const t of n)e=e.add(t);return e}const vv=new Q(M);function ld(){return vv}/**
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
 */class Bi{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,_s.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Bi(S.min(),i,ld(),ze(),N())}}class _s{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new _s(s,t,N(),N(),N())}}/**
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
 */class Fs{constructor(e,t,s,i){this.Et=e,this.removedTargetIds=t,this.key=s,this.At=i}}class ud{constructor(e,t){this.targetId=e,this.Rt=t}}class hd{constructor(e,t,s=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class qc{constructor(){this.bt=0,this.vt=Hc(),this.Pt=me.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=N(),t=N(),s=N();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:I()}}),new _s(this.Pt,this.Vt,e,t,s)}kt(){this.St=!1,this.vt=Hc()}Ot(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class wv{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=ze(),this.Kt=jc(),this.Gt=new Q(M)}Qt(e){for(const t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(const t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,t=>{const s=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),s.xt(e.resumeToken));break;default:I()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach((s,i)=>{this.Jt(i)&&t(i)})}Zt(e){const t=e.targetId,s=e.Rt.count,i=this.Xt(t);if(i){const r=i.target;if(zr(r))if(s===0){const o=new T(r.path);this.zt(t,o,le.newNoDocument(o,S.min()))}else F(s===1);else this.te(t)!==s&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){const t=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&zr(a.target)){const c=new T(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,le.newNoDocument(c,e))}r.Ct&&(t.set(o,r.Nt()),r.kt())}});let s=N();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Bi(e,t,this.Gt,this.Ut,s);return this.Ut=ze(),this.Kt=jc(),this.Gt=new Q(M),i}jt(e,t){if(!this.Jt(e))return;const s=this.ne(e,t.key)?2:0;this.Ht(e).Ot(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,t)?i.Ot(t,1):i.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.qt.delete(e)}te(e){const t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let t=this.qt.get(e);return t||(t=new qc,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new Q(M),this.Kt=this.Kt.insert(e,t)),t}Jt(e){const t=this.Xt(e)!==null;return t||E("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new qc),this.Lt.getRemoteKeysForTarget(e).forEach(t=>{this.zt(e,t,null)})}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function jc(){return new Y(T.comparator)}function Hc(){return new Y(T.comparator)}/**
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
 */const Ev=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Iv=(()=>({and:"AND",or:"OR"}))();class Cv{constructor(e,t){this.databaseId=e,this.yt=t}}function ii(n,e){return n.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dd(n,e){return n.yt?e.toBase64():e.toUint8Array()}function Sv(n,e){return ii(n,e.toTimestamp())}function Le(n){return F(!!n),S.fromTimestamp(function(e){const t=rt(e);return new z(t.seconds,t.nanos)}(n))}function ea(n,e){return function(t){return new V(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function fd(n){const e=V.fromString(n);return F(yd(e)),e}function Jr(n,e){return ea(n.databaseId,e.path)}function mr(n,e){const t=fd(e);if(t.get(1)!==n.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new T(pd(t))}function Zr(n,e){return ea(n.databaseId,e)}function Av(n){const e=fd(n);return e.length===4?V.emptyPath():pd(e)}function eo(n){return new V(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pd(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Kc(n,e,t){return{name:Jr(n,e),fields:t.value.mapValue.fields}}function bv(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(F(l===void 0||typeof l=="string"),me.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),me.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?p.UNKNOWN:rd(c.code);return new _(l,c.message||"")}(o);t=new hd(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mr(n,s.document.name),r=Le(s.document.updateTime),o=s.document.createTime?Le(s.document.createTime):S.min(),a=new Ie({mapValue:{fields:s.document.fields}}),c=le.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];t=new Fs(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mr(n,s.document),r=s.readTime?Le(s.readTime):S.min(),o=le.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Fs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mr(n,s.document),r=s.removedTargetIds||[];t=new Fs([],r,i,null)}else{if(!("filter"in e))return I();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new pv(i),o=s.targetId;t=new ud(o,r)}}return t}function Nv(n,e){let t;if(e instanceof ys)t={update:Kc(n,e.key,e.value)};else if(e instanceof id)t={delete:Jr(n,e.key)};else if(e instanceof Ot)t={update:Kc(n,e.key,e.data),updateMask:Fv(e.fieldMask)};else{if(!(e instanceof fv))return I();t={verify:Jr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ni)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof es)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ts)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof si)return{fieldPath:r.field.canonicalString(),increment:o.It};throw I()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(n,e.precondition)),t}function Rv(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?Le(s.updateTime):Le(i);return r.isEqual(S.min())&&(r=Le(i)),new uv(r,s.transformResults||[])}(t,e))):[]}function Dv(n,e){return{documents:[Zr(n,e.path)]}}function kv(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Zr(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Zr(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return md(xe.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:$t(u.field),direction:Mv(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||Pi(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function xv(n){let e=Av(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){F(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=gd(u);return h instanceof xe&&Bh(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Mn(Ut(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pi(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ti(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ti(d,h)}(t.endAt)),sv(e,i,o,r,a,"F",c,l)}function Ov(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function gd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ut(e.unaryFilter.field);return W.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Ut(e.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ut(e.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ut(e.unaryFilter.field);return W.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(n):n.fieldFilter!==void 0?function(e){return W.create(Ut(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return xe.create(e.compositeFilter.filters.map(t=>gd(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return I()}}(e.compositeFilter.op))}(n):I()}function Mv(n){return Ev[n]}function Lv(n){return Tv[n]}function Pv(n){return Iv[n]}function $t(n){return{fieldPath:n.canonicalString()}}function Ut(n){return de.fromServerFormat(n.fieldPath)}function md(n){return n instanceof W?function(e){if(e.op==="=="){if(xc(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NAN"}};if(kc(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xc(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NOT_NAN"}};if(kc(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$t(e.field),op:Lv(e.op),value:e.value}}}(n):n instanceof xe?function(e){const t=e.getFilters().map(s=>md(s));return t.length===1?t[0]:{compositeFilter:{op:Pv(e.op),filters:t}}}(n):I()}function Fv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $v{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&hv(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ln(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ln(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=cd();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=nd(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,(t,s)=>Uc(t,s))&&Zt(this.baseMutations,e.baseMutations,(t,s)=>Uc(t,s))}}class ta{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){F(e.mutations.length===s.length);let i=yv;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ta(e,t,s,i)}}/**
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
 */class Uv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wt{constructor(e,t,s,i,r=S.min(),o=S.min(),a=me.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Vv{constructor(e){this.oe=e}}function Bv(n){const e=xv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yr(e,e.limit,"L"):e}/**
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
 */class qv{constructor(){this.Ze=new jv}addToCollectionParentIndex(e,t){return this.Ze.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(it.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(it.min())}updateCollectionGroup(e,t,s){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class jv{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Q(V.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Q(V.comparator)).toArray()}}/**
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
 */class sn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new sn(0)}static Sn(){return new sn(-1)}}/**
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
 */class Hv{constructor(){this.changes=new pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?g.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Gv{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Ln(s.mutation,i,Re.empty(),z.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,t,s=N()){const i=yt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Nn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=yt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,N()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=ze();const o=Pn(),a=Pn();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ot)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ln(u.mutation,l,u.mutation.getFieldMask(),z.now())):o.set(l.key,Re.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new Kv(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Pn();let i=new Y((o,a)=>o-a),r=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||Re.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||N()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=cd();u.forEach(d=>{if(!r.has(d)){const f=nd(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):g.resolve(yt());let a=-1,c=r;return o.next(l=>g.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?g.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,N())).next(u=>({batchId:a,changes:ad(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new T(t)).next(s=>{let i=Nn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Nn();return this.indexManager.getCollectionParents(e,i).next(o=>g.forEach(o,a=>{const c=function(l,u){return new ms(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,le.newInvalidDocument(l)))});let o=Nn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ln(l.mutation,c,Re.empty(),z.now()),$i(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Wv{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return g.resolve(this.es.get(t))}saveBundleMetadata(e,t){var s;return this.es.set(t.id,{id:(s=t).id,version:s.version,createTime:Le(s.createTime)}),g.resolve()}getNamedQuery(e,t){return g.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,function(s){return{name:s.name,query:Bv(s.bundledQuery),readTime:Le(s.readTime)}}(t)),g.resolve()}}/**
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
 */class zv{constructor(){this.overlays=new Y(T.comparator),this.ss=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const s=yt();return g.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ce(e,t,r)}),g.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),g.resolve()}getOverlaysForCollection(e,t,s){const i=yt(),r=t.length+1,o=new T(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Y((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=yt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=yt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return g.resolve(a)}ce(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Uv(t,s));let r=this.ss.get(t);r===void 0&&(r=N(),this.ss.set(t,r)),this.ss.set(t,r.add(s.key))}}/**
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
 */class na{constructor(){this.rs=new Q(J.os),this.us=new Q(J.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){const s=new J(e,t);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ls(new J(e,t))}fs(e,t){e.forEach(s=>this.removeReference(s,t))}ds(e){const t=new T(new V([])),s=new J(t,e),i=new J(t,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const t=new T(new V([])),s=new J(t,e),i=new J(t,e+1);let r=N();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new J(e,0),s=this.rs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class J{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return T.comparator(e.key,t.key)||M(e.gs,t.gs)}static cs(e,t){return M(e.gs,t.gs)||T.comparator(e.key,t.key)}}/**
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
 */class Qv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new Q(J.os)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $v(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new J(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Ts(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new J(t,0),i=new J(t,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Q(M);return t.forEach(i=>{const r=new J(i,0),o=new J(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),g.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new J(new T(r),0);let a=new Q(M);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),g.resolve(this.Es(a))}Es(e){const t=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.As(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return g.forEach(t.mutations,i=>{const r=new J(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,t){const s=new J(t,0),i=this.ps.firstAfterOrEqual(s);return g.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}As(e,t){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Yv{constructor(e){this.Rs=e,this.docs=new Y(T.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return g.resolve(s?s.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let s=ze();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():le.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=ze();const o=t.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||U_($_(u),s)<=0||(i.has(u.key)||$i(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(e,t,s,i){I()}bs(e,t){return g.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Xv(this)}getSize(e){return g.resolve(this.size)}}class Xv extends Hv{constructor(e){super(),this.Xn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),g.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
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
 */class Jv{constructor(e){this.persistence=e,this.vs=new pn(t=>Yo(t),Xo),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new na,this.targetCount=0,this.Ss=sn.Vn()}forEachTarget(e,t){return this.vs.forEach((s,i)=>t(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ps&&(this.Ps=t),g.resolve()}xn(e){this.vs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ss=new sn(t),this.highestTargetId=t),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.xn(t),g.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const s=this.vs.get(t)||null;return g.resolve(s)}addMatchingKeys(e,t,s){return this.Vs.hs(t,s),g.resolve()}removeMatchingKeys(e,t,s){this.Vs.fs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),g.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Vs.ws(t);return g.resolve(s)}containsKey(e,t){return g.resolve(this.Vs.containsKey(t))}}/**
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
 */class Zv{constructor(e,t){this.Ds={},this.overlays={},this.Cs=new zo(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Jv(this),this.indexManager=new qv,this.remoteDocumentCache=function(s){return new Yv(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Vv(t),this.Os=new Wv(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Ds[e.toKey()];return s||(s=new Qv(t,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,t,s){E("MemoryPersistence","Starting transaction:",e);const i=new ew(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,t){return g.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,t)))}}class ew extends B_{constructor(e){super(),this.currentSequenceNumber=e}}class sa{constructor(e){this.persistence=e,this.Bs=new na,this.Ls=null}static qs(e){return new sa(e)}get Us(){if(this.Ls)return this.Ls;throw I()}addReference(e,t,s){return this.Bs.addReference(s,t),this.Us.delete(s.toString()),g.resolve()}removeReference(e,t,s){return this.Bs.removeReference(s,t),this.Us.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),g.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Ms(){this.Ls=new Set}Fs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Us,s=>{const i=T.fromPath(s);return this.Ks(e,i).next(r=>{r||t.removeEntry(i,S.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(s=>{s?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return g.or([()=>g.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.$s(e,t)])}}/**
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
 */class ia{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ci=s,this.xi=i}static Ni(e,t){let s=N(),i=N();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ia(e,t.fromCache,s,i)}}/**
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
 */class tw{constructor(){this.ki=!1}initialize(e,t){this.Oi=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Mi(e,t).next(r=>r||this.Fi(e,t,i,s)).next(r=>r||this.$i(e,t))}Mi(e,t){if(Fc(t))return g.resolve(null);let s=We(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Yr(t,null,"F"),s=We(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=N(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(t,a);return this.Li(t,l,o,c.readTime)?this.Mi(e,Yr(t,null,"F")):this.qi(e,l,t,c)}))})))}Fi(e,t,s,i){return Fc(t)||i.isEqual(S.min())?this.$i(e,t):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(t,r);return this.Li(t,o,s,i)?this.$i(e,t):(bc()<=O.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xr(t)),this.qi(e,o,t,F_(i,-1)))})}Bi(e,t){let s=new Q(Qh(e));return t.forEach((i,r)=>{$i(e,r)&&(s=s.add(r))}),s}Li(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,t){return bc()<=O.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Xr(t)),this.Oi.getDocumentsMatchingQuery(e,t,it.min())}qi(e,t,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class nw{constructor(e,t,s,i){this.persistence=e,this.Ui=t,this.Tt=i,this.Ki=new Y(M),this.Gi=new pn(r=>Yo(r),Xo),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gv(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}function sw(n,e,t,s){return new nw(n,e,t,s)}async function _d(n,e){const t=A(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.zi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=N();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function iw(n,e){const t=A(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=g.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const w=c.docVersions.get(f);F(w!==null),m.version.compareTo(w)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function vd(n){const e=A(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ns.getLastRemoteSnapshotVersion(t))}function rw(n,e){const t=A(n),s=e.snapshotVersion;let i=t.Ki;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.ji.newChangeBuffer({trackRemovals:!0});i=t.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Ns.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(me.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(m,w,b){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(t.Ns.updateTargetData(r,f))});let c=ze(),l=N();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ow(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(S.min())){const u=t.Ns.getLastRemoteSnapshotVersion(r).next(h=>t.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ki=i,r))}function ow(n,e,t){let s=N(),i=N();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=ze();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function aw(n,e){const t=A(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function cw(n,e){const t=A(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Ns.getTargetData(s,e).next(r=>r?(i=r,g.resolve(i)):t.Ns.allocateTargetId(s).next(o=>(i=new wt(e,o,0,s.currentSequenceNumber),t.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ki=t.Ki.insert(s.targetId,s),t.Gi.set(e,s.targetId)),s})}async function to(n,e,t){const s=A(n),i=s.Ki.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!gs(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Gc(n,e,t){const s=A(n);let i=S.min(),r=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=A(a),h=u.Gi.get(l);return h!==void 0?g.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,We(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,t?i:S.min(),t?r:N())).next(a=>(lw(s,iv(e),a),{documents:a,Yi:r})))}function lw(n,e,t){let s=n.Qi.get(e)||S.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Qi.set(e,s)}class Wc{constructor(){this.activeTargetIds=ld()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uw{constructor(){this.Ur=new Wc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,s){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Wc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hw{Gr(e){}shutdown(){}}/**
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
 */class zc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const dw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fw{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */class pw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,s,i,r){const o=this.fo(e,t);E("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(E("RestConnection","Received: ",c),c),c=>{throw Hr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,t,s,i,r,o){return this.lo(e,t,s,i,r)}_o(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+dn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,t){const s=dw[e];return`${this.co}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,s,i){return new Promise((r,o)=>{const a=new b_;a.setWithCredentials(!0),a.listenOnce(C_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case gr.NO_ERROR:const l=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(l)),r(l);break;case gr.TIMEOUT:E("Connection",'RPC "'+e+'" timed out'),o(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const u=a.getStatus();if(E("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(w)>=0?w:p.UNKNOWN}(d.status);o(new _(f,d.message))}else o(new _(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(p.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{E("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,s,15)})}yo(e,t,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=T_(),o=I_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new A_({})),this._o(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=i.join("");E("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new fw({Yr:m=>{h?E("Connection","Not sending because WebChannel is closed:",m):(u||(E("Connection","Opening WebChannel transport."),l.open(),u=!0),E("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),f=(m,w,b)=>{m.listen(w,se=>{try{b(se)}catch(H){setTimeout(()=>{throw H},0)}})};return f(l,Ds.EventType.OPEN,()=>{h||E("Connection","WebChannel transport opened.")}),f(l,Ds.EventType.CLOSE,()=>{h||(h=!0,E("Connection","WebChannel transport closed"),d.oo())}),f(l,Ds.EventType.ERROR,m=>{h||(h=!0,Hr("Connection","WebChannel transport errored:",m),d.oo(new _(p.UNAVAILABLE,"The operation could not be completed")))}),f(l,Ds.EventType.MESSAGE,m=>{var w;if(!h){const b=m.data[0];F(!!b);const se=b,H=se.error||((w=se[0])===null||w===void 0?void 0:w.error);if(H){E("Connection","WebChannel received error:",H);const Ye=H.status;let Xe=function(_p){const Ba=K[_p];if(Ba!==void 0)return rd(Ba)}(Ye),As=H.message;Xe===void 0&&(Xe=p.INTERNAL,As="Unknown error status: "+Ye+" with message "+H.message),h=!0,d.oo(new _(Xe,As)),l.close()}else E("Connection","WebChannel received:",b),d.uo(b)}}),f(o,S_.STAT_EVENT,m=>{m.stat===Sc.PROXY?E("Connection","Detected buffering proxy"):m.stat===Sc.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function yr(){return typeof document<"u"?document:null}/**
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
 */function qi(n){return new Cv(n,!0)}/**
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
 */class wd{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=t,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const t=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,t-s);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Ed{constructor(e,t,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new wd(e,t)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(Ge(t.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===t&&this.jo(s,i)},s=>{e(()=>{const i=new _(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,t){const s=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gw extends Ed{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.Tt=r}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();const t=bv(this.Tt,e),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?Le(r.readTime):S.min()}(e);return this.listener.Ho(t,s)}Jo(e){const t={};t.database=eo(this.Tt),t.addTarget=function(i,r){let o;const a=r.target;return o=zr(a)?{documents:Dv(i,a)}:{query:kv(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=dd(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=ii(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Ov(this.Tt,e);s&&(t.labels=s),this.qo(t)}Yo(e){const t={};t.database=eo(this.Tt),t.removeTarget=e,this.qo(t)}}class mw extends Ed{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const t=Rv(e.writeResults,e.commitTime),s=Le(e.commitTime);return this.listener.eu(s,t)}return F(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=eo(this.Tt),this.qo(e)}tu(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Nv(this.Tt,s))};this.qo(t)}}/**
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
 */class yw extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}mo(e,t,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(p.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class _w{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Ge(t),this.cu=!1):E("OnlineStateTracker",t)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class vw{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Mt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.mu.add(4),await vs(c),c.pu.set("Unknown"),c.mu.delete(4),await ji(c)}(this))})}),this.pu=new _w(s,i)}}async function ji(n){if(Mt(n))for(const e of n.gu)await e(!0)}async function vs(n){for(const e of n.gu)await e(!1)}function Td(n,e){const t=A(n);t.wu.has(e.targetId)||(t.wu.set(e.targetId,e),aa(t)?oa(t):gn(t).Mo()&&ra(t,e))}function Id(n,e){const t=A(n),s=gn(t);t.wu.delete(e),s.Mo()&&Cd(t,e),t.wu.size===0&&(s.Mo()?s.Bo():Mt(t)&&t.pu.set("Unknown"))}function ra(n,e){n.Iu.Ft(e.targetId),gn(n).Jo(e)}function Cd(n,e){n.Iu.Ft(e),gn(n).Yo(e)}function oa(n){n.Iu=new wv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>n.wu.get(e)||null}),gn(n).start(),n.pu.au()}function aa(n){return Mt(n)&&!gn(n).Oo()&&n.wu.size>0}function Mt(n){return A(n).mu.size===0}function Sd(n){n.Iu=void 0}async function ww(n){n.wu.forEach((e,t)=>{ra(n,e)})}async function Ew(n,e){Sd(n),aa(n)?(n.pu.fu(e),oa(n)):n.pu.set("Unknown")}async function Tw(n,e,t){if(n.pu.set("Online"),e instanceof hd&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(n,e)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ri(n,s)}else if(e instanceof Fs?n.Iu.Qt(e):e instanceof ud?n.Iu.Zt(e):n.Iu.Wt(e),!t.isEqual(S.min()))try{const s=await vd(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(me.EMPTY_BYTE_STRING,c.snapshotVersion)),Cd(i,a);const l=new wt(c.target,a,1,c.sequenceNumber);ra(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await ri(n,s)}}async function ri(n,e,t){if(!gs(e))throw e;n.mu.add(1),await vs(n),n.pu.set("Offline"),t||(t=()=>vd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await t(),n.mu.delete(1),await ji(n)})}function Ad(n,e){return e().catch(t=>ri(n,t,e))}async function Hi(n){const e=A(n),t=ot(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Iw(e);)try{const i=await aw(e.localStore,s);if(i===null){e._u.length===0&&t.Bo();break}s=i.batchId,Cw(e,i)}catch(i){await ri(e,i)}bd(e)&&Nd(e)}function Iw(n){return Mt(n)&&n._u.length<10}function Cw(n,e){n._u.push(e);const t=ot(n);t.Mo()&&t.Xo&&t.tu(e.mutations)}function bd(n){return Mt(n)&&!ot(n).Oo()&&n._u.length>0}function Nd(n){ot(n).start()}async function Sw(n){ot(n).su()}async function Aw(n){const e=ot(n);for(const t of n._u)e.tu(t.mutations)}async function bw(n,e,t){const s=n._u.shift(),i=ta.from(s,e,t);await Ad(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Hi(n)}async function Nw(n,e){e&&ot(n).Xo&&await async function(t,s){if(i=s.code,gv(i)&&i!==p.ABORTED){const r=t._u.shift();ot(t).$o(),await Ad(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Hi(t)}var i}(n,e),bd(n)&&Nd(n)}async function Qc(n,e){const t=A(n);t.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=Mt(t);t.mu.add(3),await vs(t),s&&t.pu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.mu.delete(3),await ji(t)}async function Rw(n,e){const t=A(n);e?(t.mu.delete(2),await ji(t)):e||(t.mu.add(2),await vs(t),t.pu.set("Unknown"))}function gn(n){return n.Tu||(n.Tu=function(e,t,s){const i=A(e);return i.ru(),new gw(t,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(n.datastore,n.asyncQueue,{Xr:ww.bind(null,n),no:Ew.bind(null,n),Ho:Tw.bind(null,n)}),n.gu.push(async e=>{e?(n.Tu.$o(),aa(n)?oa(n):n.pu.set("Unknown")):(await n.Tu.stop(),Sd(n))})),n.Tu}function ot(n){return n.Eu||(n.Eu=function(e,t,s){const i=A(e);return i.ru(),new mw(t,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(n.datastore,n.asyncQueue,{Xr:Sw.bind(null,n),no:Nw.bind(null,n),nu:Aw.bind(null,n),eu:bw.bind(null,n)}),n.gu.push(async e=>{e?(n.Eu.$o(),await Hi(n)):(await n.Eu.stop(),n._u.length>0&&(E("RemoteStore",`Stopping write stream with ${n._u.length} pending writes`),n._u=[]))})),n.Eu}/**
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
 */class ca{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new ca(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(n,e){if(Ge("AsyncQueue",`${e}: ${n}`),gs(n))return new _(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||T.comparator(t.key,s.key):(t,s)=>T.comparator(t.key,s.key),this.keyedMap=Nn(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new Kt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Kt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Yc{constructor(){this.Au=new Y(T.comparator)}track(e){const t=e.doc.key,s=this.Au.get(t);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(t,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(t):e.type===1&&s.type===2?this.Au=this.Au.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):I():this.Au=this.Au.insert(t,e)}Ru(){const e=[];return this.Au.inorderTraversal((t,s)=>{e.push(s)}),e}}class rn{constructor(e,t,s,i,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new rn(e,t,Kt.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Dw{constructor(){this.bu=void 0,this.listeners=[]}}class kw{constructor(){this.queries=new pn(e=>zh(e),Fi),this.onlineState="Unknown",this.vu=new Set}}async function Rd(n,e){const t=A(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new Dw),i)try{r.bu=await t.onListen(s)}catch(o){const a=la(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.Pu(t.onlineState),r.bu&&e.Vu(r.bu)&&ua(t)}async function Dd(n,e){const t=A(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function xw(n,e){const t=A(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&ua(t)}function Ow(n,e,t){const s=A(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function ua(n){n.vu.forEach(e=>{e.next()})}class kd{constructor(e,t,s){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new rn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ku(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class xd{constructor(e){this.key=e}}class Od{constructor(e){this.key=e}}class Mw{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=N(),this.mutatedKeys=N(),this.ju=Qh(e),this.zu=new Kt(this.ju)}get Wu(){return this.Ku}Hu(e,t){const s=t?t.Ju:new Yc,i=t?t.zu:this.zu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=$i(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?m!==w&&(s.track({type:3,doc:f}),b=!0):this.Yu(d,f)||(s.track({type:2,doc:f}),b=!0,(c&&this.ju(f,c)>0||l&&this.ju(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),b=!0):d&&!f&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(f?(o=o.add(f),r=w?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return f(h)-f(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=t?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new rn(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Yc,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(t=>this.Ku=this.Ku.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ku=this.Ku.delete(t)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=N(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const t=[];return e.forEach(s=>{this.Qu.has(s)||t.push(new Od(s))}),this.Qu.forEach(s=>{e.has(s)||t.push(new xd(s))}),t}nc(e){this.Ku=e.Yi,this.Qu=N();const t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return rn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Lw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Pw{constructor(e){this.key=e,this.ic=!1}}class Fw{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new pn(a=>zh(a),Fi),this.uc=new Map,this.cc=new Set,this.ac=new Y(T.comparator),this.hc=new Map,this.lc=new na,this.fc={},this.dc=new Map,this._c=sn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function $w(n,e){const t=zw(n);let s,i;const r=t.oc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await cw(t.localStore,We(e));t.isPrimaryClient&&Td(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Uw(t,e,s,a==="current",o.resumeToken)}return i}async function Uw(n,e,t,s,i){n.mc=(h,d,f)=>async function(m,w,b,se){let H=w.view.Hu(b);H.Li&&(H=await Gc(m.localStore,w.query,!1).then(({documents:As})=>w.view.Hu(As,H)));const Ye=se&&se.targetChanges.get(w.targetId),Xe=w.view.applyChanges(H,m.isPrimaryClient,Ye);return Jc(m,w.targetId,Xe.tc),Xe.snapshot}(n,h,d,f);const r=await Gc(n.localStore,e,!0),o=new Mw(e,r.Yi),a=o.Hu(r.documents),c=_s.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Jc(n,t,l.tc);const u=new Lw(e,t,o);return n.oc.set(e,u),n.uc.has(t)?n.uc.get(t).push(e):n.uc.set(t,[e]),l.snapshot}async function Vw(n,e){const t=A(n),s=t.oc.get(e),i=t.uc.get(s.targetId);if(i.length>1)return t.uc.set(s.targetId,i.filter(r=>!Fi(r,e))),void t.oc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await to(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Id(t.remoteStore,s.targetId),no(t,s.targetId)}).catch(ps)):(no(t,s.targetId),await to(t.localStore,s.targetId,!0))}async function Bw(n,e,t){const s=Qw(n);try{const i=await function(r,o){const a=A(r),c=z.now(),l=o.reduce((d,f)=>d.add(f.key),N());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=ze(),m=N();return a.ji.getEntries(d,l).next(w=>{f=w,f.forEach((b,se)=>{se.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(w=>{u=w;const b=[];for(const se of o){const H=dv(se,u.get(se.key).overlayedDocument);H!=null&&b.push(new Ot(se.key,H,Kh(H.value.mapValue),Be.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(w=>{h=w;const b=w.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,w.batchId,b)})}).then(()=>({batchId:h.batchId,changes:ad(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new Y(M)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,t),await ws(s,i.changes),await Hi(s.remoteStore)}catch(i){const r=la(i,"Failed to persist write");t.reject(r)}}async function Md(n,e){const t=A(n);try{const s=await rw(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.hc.get(r);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?F(o.ic):i.removedDocuments.size>0&&(F(o.ic),o.ic=!1))}),await ws(t,s,e)}catch(s){await ps(s)}}function Xc(n,e,t){const s=A(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&ua(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qw(n,e,t){const s=A(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new Y(T.comparator);o=o.insert(r,le.newNoDocument(r,S.min()));const a=N().add(r),c=new Bi(S.min(),new Map,new Q(M),o,a);await Md(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),ha(s)}else await to(s.localStore,e,!1).then(()=>no(s,e,t)).catch(ps)}async function jw(n,e){const t=A(n),s=e.batch.batchId;try{const i=await iw(t.localStore,e);Pd(t,s,null),Ld(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ws(t,i)}catch(i){await ps(i)}}async function Hw(n,e,t){const s=A(n);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(F(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Pd(s,e,t),Ld(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ws(s,i)}catch(i){await ps(i)}}function Ld(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function Pd(n,e,t){const s=A(n);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function no(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.uc.get(e))n.oc.delete(s),t&&n.rc.gc(s,t);n.uc.delete(e),n.isPrimaryClient&&n.lc.ds(e).forEach(s=>{n.lc.containsKey(s)||Fd(n,s)})}function Fd(n,e){n.cc.delete(e.path.canonicalString());const t=n.ac.get(e);t!==null&&(Id(n.remoteStore,t),n.ac=n.ac.remove(e),n.hc.delete(t),ha(n))}function Jc(n,e,t){for(const s of t)s instanceof xd?(n.lc.addReference(s.key,e),Kw(n,s)):s instanceof Od?(E("SyncEngine","Document no longer in limbo: "+s.key),n.lc.removeReference(s.key,e),n.lc.containsKey(s.key)||Fd(n,s.key)):I()}function Kw(n,e){const t=e.key,s=t.path.canonicalString();n.ac.get(t)||n.cc.has(s)||(E("SyncEngine","New document in limbo: "+t),n.cc.add(s),ha(n))}function ha(n){for(;n.cc.size>0&&n.ac.size<n.maxConcurrentLimboResolutions;){const e=n.cc.values().next().value;n.cc.delete(e);const t=new T(V.fromString(e)),s=n._c.next();n.hc.set(s,new Pw(t)),n.ac=n.ac.insert(t,s),Td(n.remoteStore,new wt(We(Jo(t.path)),s,2,zo.at))}}async function ws(n,e,t){const s=A(n),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=ia.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=A(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>g.forEach(c,h=>g.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>g.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!gs(u))throw u;E("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,r))}async function Gw(n,e){const t=A(n);if(!t.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const s=await _d(t.localStore,e);t.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new _(p.CANCELLED,r))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ws(t,s.Wi)}}function Ww(n,e){const t=A(n),s=t.hc.get(e);if(s&&s.ic)return N().add(s.key);{let i=N();const r=t.uc.get(e);if(!r)return i;for(const o of r){const a=t.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function zw(n){const e=A(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Md.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ww.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qw.bind(null,e),e.rc.Ho=xw.bind(null,e.eventManager),e.rc.gc=Ow.bind(null,e.eventManager),e}function Qw(n){const e=A(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hw.bind(null,e),e}class Yw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=qi(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){return sw(this.persistence,new tw,e.initialUser,this.Tt)}Tc(e){return new Zv(sa.qs,this.Tt)}Ic(e){return new uw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gw.bind(null,this.syncEngine),await Rw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kw}createDatastore(e){const t=qi(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new pw(i));var i;return function(r,o,a,c){return new yw(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Xc(this.syncEngine,a,0),o=zc.C()?new zc:new hw,new vw(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,l){const u=new Fw(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=A(e);E("RemoteStore","RemoteStore shutting down."),t.mu.add(5),await vs(t),t.yu.shutdown(),t.pu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class $d{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Jw{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ce.UNAUTHENTICATED,this.clientId=Lh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{E("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(E("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=la(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zw(n,e){n.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await _d(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function eE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tE(n);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>Qc(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Qc(e.remoteStore,r)),n.onlineComponents=e}async function tE(n){return n.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await Zw(n,new Yw)),n.offlineComponents}async function Ud(n){return n.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await eE(n,new Xw)),n.onlineComponents}function nE(n){return Ud(n).then(e=>e.syncEngine)}async function Vd(n){const e=await Ud(n),t=e.eventManager;return t.onListen=$w.bind(null,e.syncEngine),t.onUnlisten=Vw.bind(null,e.syncEngine),t}function sE(n,e,t={}){const s=new Ve;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new $d({next:h=>{r.enqueueAndForget(()=>Dd(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new _(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new _(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new kd(Jo(o.path),l,{includeMetadataChanges:!0,Ou:!0});return Rd(i,u)}(await Vd(n),n.asyncQueue,e,t,s)),s.promise}function iE(n,e,t={}){const s=new Ve;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new $d({next:h=>{r.enqueueAndForget(()=>Dd(i,u)),h.fromCache&&a.source==="server"?c.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new kd(o,l,{includeMetadataChanges:!0,Ou:!0});return Rd(i,u)}(await Vd(n),n.asyncQueue,e,t,s)),s.promise}const Zc=new Map;/**
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
 */function Bd(n,e,t){if(!t)throw new _(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rE(n,e,t,s){if(e===!0&&s===!0)throw new _(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function el(n){if(!T.isDocumentKey(n))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tl(n){if(T.isDocumentKey(n))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ki(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":I()}function bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ki(n);throw new _(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class nl{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Gi{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nl(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new N_;switch(t.type){case"gapi":const s=t.client;return new x_(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Zc.get(e);t&&(E("ComponentProvider","Removing Datastore"),Zc.delete(e),t.terminate())}(this),Promise.resolve()}}function oE(n,e,t,s={}){var i;const r=(n=bt(n,Gi))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ce.MOCK_USER;else{o=Dp(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ce(c)}n._authCredentials=new R_(new Mh(o,a))}}/**
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
 */class ve{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}}class mn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mn(this.firestore,e,this._query)}}class nt extends mn{constructor(e,t,s){super(e,t,Jo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new T(e))}withConverter(e){return new nt(this.firestore,e,this._path)}}function qd(n,e,...t){if(n=je(n),Bd("collection","path",e),n instanceof Gi){const s=V.fromString(e,...t);return tl(s),new nt(n,null,s)}{if(!(n instanceof ve||n instanceof nt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(V.fromString(e,...t));return tl(s),new nt(n.firestore,null,s)}}function jd(n,e,...t){if(n=je(n),arguments.length===1&&(e=Lh.R()),Bd("doc","path",e),n instanceof Gi){const s=V.fromString(e,...t);return el(s),new ve(n,null,new T(s))}{if(!(n instanceof ve||n instanceof nt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(V.fromString(e,...t));return el(s),new ve(n.firestore,n instanceof nt?n.converter:null,new T(s))}}/**
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
 */class aE{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new wd(this,"async_queue_retry"),this.Hc=()=>{const t=yr();t&&E("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const e=yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=yr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const t=new Ve;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!gs(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const t=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ge("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=t,t}enqueueAfterDelay(e,t,s){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);const i=ca.createAndSchedule(this,e,t,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&I()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}class Wi extends Gi{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new aE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hd(this),this._firestoreClient.terminate()}}function cE(n,e){const t=typeof n=="object"?n:eu(),s=typeof n=="string"?n:e||"(default)",i=is(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Np("firestore");r&&oE(i,...r)}return i}function da(n){return n._firestoreClient||Hd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Hd(n){var e;const t=n._freezeSettings(),s=function(i,r,o,a){return new q_(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Jw(n._authCredentials,n._appCheckCredentials,n._queue,s)}/**
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
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(me.fromBase64String(e))}catch(t){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new on(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kd{constructor(e){this._methodName=e}}/**
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
 */class pa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}}/**
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
 */const lE=/^__.*__$/;class uE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new ys(e,this.data,t,this.fieldTransforms)}}function Gd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class ga{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return oi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Gd(this.ra)&&lE.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class hE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=s||qi(e)}wa(e,t,s,i=!1){return new ga({ra:e,methodName:t,_a:s,path:de.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Wd(n){const e=n._freezeSettings(),t=qi(n._databaseId);return new hE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dE(n,e,t,s,i,r={}){const o=n.wa(r.merge||r.mergeFields?2:0,e,t,i);Yd("Data must be an object, but it was:",o,s);const a=zd(s,o);let c,l;if(r.merge)c=new Re(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=pE(e,h,t);if(!o.contains(d))throw new _(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mE(u,d)||u.push(d)}c=new Re(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new uE(new Ie(a),c,l)}function fE(n,e,t,s=!1){return ma(t,n.wa(s?4:3,e))}function ma(n,e){if(Qd(n=je(n)))return Yd("Unsupported field value:",e,n),zd(n,e);if(n instanceof Kd)return function(t,s){if(!Gd(s.ra))throw s.fa(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=ma(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=je(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return ov(s.Tt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=z.fromDate(t);return{timestampValue:ii(s.Tt,i)}}if(t instanceof z){const i=new z(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ii(s.Tt,i)}}if(t instanceof pa)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof on)return{bytesValue:dd(s.Tt,t._byteString)};if(t instanceof ve){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ea(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.fa(`Unsupported field value: ${Ki(t)}`)}(n,e)}function zd(n,e){const t={};return Ph(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(n,(s,i)=>{const r=ma(i,e.ua(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function Qd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof z||n instanceof pa||n instanceof on||n instanceof ve||n instanceof Kd)}function Yd(n,e,t){if(!Qd(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Ki(t);throw s==="an object"?e.fa(n+" a custom object"):e.fa(n+" "+s)}}function pE(n,e,t){if((e=je(e))instanceof fa)return e._internalPath;if(typeof e=="string")return Xd(n,e);throw oi("Field path arguments must be of type string or ",n,!1,void 0,t)}const gE=new RegExp("[~\\*/\\[\\]]");function Xd(n,e,t){if(e.search(gE)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fa(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oi(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(p.INVALID_ARGUMENT,a+n+c)}function mE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Jd{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yE extends Jd{data(){return super.data()}}function Zd(n,e){return typeof e=="string"?Xd(n,e):e instanceof fa?e._internalPath:e._delegate._internalPath}/**
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
 */function _E(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ya{}class vE extends ya{}function wE(n,e,...t){let s=[];e instanceof ya&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof va).length,o=i.filter(a=>a instanceof _a).length;if(r>1||r>0&&o>0)throw new _(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class _a extends vE{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new _a(e,t,s)}_apply(e){const t=this._parse(e);return ef(e._query,t),new mn(e.firestore,e.converter,Qr(e._query,t))}_parse(e){const t=Wd(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){il(u,l);const d=[];for(const f of u)d.push(sl(a,i,f));h={arrayValue:{values:d}}}else h=sl(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||il(u,l),h=fE(o,r,u,l==="in"||l==="not-in");return W.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class va extends ya{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new va(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)ef(r,a),r=Qr(r,a)}(e._query,t),new mn(e.firestore,e.converter,Qr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function sl(n,e,t){if(typeof(t=je(t))=="string"){if(t==="")throw new _(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wh(e)&&t.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(V.fromString(t));if(!T.isDocumentKey(s))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Dc(n,new T(s))}if(t instanceof ve)return Dc(n,t._key);throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ki(t)}.`)}function il(n,e){if(!Array.isArray(n)||n.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ef(n,e){if(e.isInequality()){const s=Zo(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new _(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Gh(n);r!==null&&EE(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function EE(n,e,t){if(!t.isEqual(e))throw new _(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class TE{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw I()}}convertObject(e,t){const s={};return fn(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new pa(G(e.latitude),G(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=$h(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Jn(e));default:return null}}convertTimestamp(e){const t=rt(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=V.fromString(e);F(yd(s));const i=new Xn(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(t)||Ge(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function IE(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
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
 */class Rn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tf extends Jd{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Zd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class $s extends tf{data(e={}){return super.data(e)}}class CE{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Rn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new $s(this._firestore,this._userDataWriter,s.key,s,new Rn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new $s(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Rn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $s(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Rn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:SE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function SE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function AE(n){n=bt(n,ve);const e=bt(n.firestore,Wi);return sE(da(e),n._key).then(t=>DE(e,n,t))}class nf extends TE{constructor(e){super(),this.firestore=e}convertBytes(e){return new on(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}function bE(n){n=bt(n,mn);const e=bt(n.firestore,Wi),t=da(e),s=new nf(e);return _E(n._query),iE(t,n._query).then(i=>new CE(e,s,n,i))}function NE(n,e,t){n=bt(n,ve);const s=bt(n.firestore,Wi),i=IE(n.converter,e,t);return RE(s,[dE(Wd(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Be.none())])}function RE(n,e){return function(t,s){const i=new Ve;return t.asyncQueue.enqueueAndForget(async()=>Bw(await nE(t),s,i)),i.promise}(da(n),e)}function DE(n,e,t){const s=t.docs.get(e._key),i=new nf(n);return new tf(n,i,e._key,s,new Rn(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){dn=t})(Jl),He(new Pe("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Wi(new D_(t.getProvider("auth-internal")),new M_(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Se(Ac,"3.8.4",n),Se(Ac,"3.8.4","esm2017")})();const rl="@firebase/database",ol="0.14.4";/**
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
 */let sf="";function kE(n){sf=n}/**
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
 */class xE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Vn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class OE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Qe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xE(e)}}catch{}return new OE},_t=rf("localStorage"),so=rf("sessionStorage");/**
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
 */const Gt=new yi("@firebase/database"),ME=function(){let n=1;return function(){return n++}}(),of=function(n){const e=jp(n),t=new Bp;t.update(e);const s=t.digest();return _o.encodeByteArray(s)},Es=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Es.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let Et=null,al=!0;const LE=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Gt.logLevel=O.VERBOSE,Et=Gt.log.bind(Gt),e&&so.set("logging_enabled",!0)):typeof n=="function"?Et=n:(Et=null,so.remove("logging_enabled"))},ue=function(...n){if(al===!0&&(al=!1,Et===null&&so.get("logging_enabled")===!0&&LE(!0)),Et){const e=Es.apply(null,n);Et(e)}},Ts=function(n){return function(...e){ue(n,...e)}},io=function(...n){const e="FIREBASE INTERNAL ERROR: "+Es(...n);Gt.error(e)},Nt=function(...n){const e=`FIREBASE FATAL ERROR: ${Es(...n)}`;throw Gt.error(e),new Error(e)},Ee=function(...n){const e="FIREBASE WARNING: "+Es(...n);Gt.warn(e)},PE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},af=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},FE=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},an="[MIN_NAME]",Rt="[MAX_NAME]",yn=function(n,e){if(n===e)return 0;if(n===an||e===Rt)return-1;if(e===an||n===Rt)return 1;{const t=cl(n),s=cl(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},$E=function(n,e){return n===e?0:n<e?-1:1},Tn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+re(e))},wa=function(n){if(typeof n!="object"||n===null)return re(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=re(e[s]),t+=":",t+=wa(n[e[s]]);return t+="}",t},cf=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function be(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const lf=function(n){y(!af(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},UE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},VE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},BE=new RegExp("^-?(0*)\\d{1,10}$"),qE=-2147483648,jE=2147483647,cl=function(n){if(BE.test(n)){const e=Number(n);if(e>=qE&&e<=jE)return e}return null},Is=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ee("Exception was thrown by user callback.",t),e},Math.floor(0))}},HE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class KE{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class GE{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ee(e)}}class ro{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ro.OWNER="owner";/**
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
 */const Ea="5",uf="v",hf="s",df="r",ff="f",pf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gf="ls",mf="p",oo="ac",yf="websocket",_f="long_polling";/**
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
 */class WE{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_t.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_t.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zE(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vf(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let s;if(e===yf)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_f)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zE(n)&&(t.ns=n.namespace);const i=[];return be(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class QE{constructor(){this.counters_={}}incrementCounter(e,t=1){Qe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ep(this.counters_)}}/**
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
 */const _r={},vr={};function Ta(n){const e=n.toString();return _r[e]||(_r[e]=new QE),_r[e]}function YE(n,e){const t=n.toString();return vr[t]||(vr[t]=e()),vr[t]}/**
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
 */class XE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Is(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ll="start",JE="close",ZE="pLPCommand",eT="pRTLPCB",wf="id",Ef="pw",Tf="ser",tT="cb",nT="seg",sT="ts",iT="d",rT="dframe",If=1870,Cf=30,oT=If-Cf,aT=25e3,cT=3e4;class Bt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=Ta(t),this.urlFn=c=>(this.appCheckToken&&(c[oo]=this.appCheckToken),vf(t,_f,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new XE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cT)),FE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ia((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ll)this.id=a,this.password=c;else if(o===JE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ll]="t",s[Tf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[uf]=Ea,this.transportSessionId&&(s[hf]=this.transportSessionId),this.lastSessionId&&(s[gf]=this.lastSessionId),this.applicationId&&(s[mf]=this.applicationId),this.appCheckToken&&(s[oo]=this.appCheckToken),typeof location<"u"&&location.hostname&&pf.test(location.hostname)&&(s[df]=ff);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bt.forceAllow_=!0}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){return Bt.forceAllow_?!0:!Bt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UE()&&!VE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Bl(t),i=cf(s,oT);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[rT]="t",s[wf]=e,s[Ef]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ia{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ME(),window[ZE+this.uniqueCallbackIdentifier]=e,window[eT+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ia.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ue("frame writing exception"),a.stack&&ue(a.stack),ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ue("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wf]=this.myID,e[Ef]=this.myPW,e[Tf]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cf+s.length<=If;){const o=this.pendingSegs.shift();s=s+"&"+nT+i+"="+o.seg+"&"+sT+i+"="+o.ts+"&"+iT+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(aT)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const lT=16384,uT=45e3;let ai=null;typeof MozWebSocket<"u"?ai=MozWebSocket:typeof WebSocket<"u"&&(ai=WebSocket);class Ne{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=Ta(t),this.connURL=Ne.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[uf]=Ea,typeof location<"u"&&location.hostname&&pf.test(location.hostname)&&(o[df]=ff),t&&(o[hf]=t),s&&(o[gf]=s),i&&(o[oo]=i),r&&(o[mf]=r),vf(e,yf,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_t.set("previous_websocket_failure",!0);try{let s;Kl(),this.mySock=new ai(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ne.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ai!==null&&!Ne.forceDisallow_}static previouslyFailed(){return _t.isInMemoryStorage||_t.get("previous_websocket_failure")===!0}markConnectionHealthy(){_t.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Vn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=cf(t,lT);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uT))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ne.responsesRequiredToBeHealthy=2;Ne.healthyTimeout=3e4;/**
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
 */class ns{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bt,Ne]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ne&&Ne.isAvailable();let s=t&&!Ne.previouslyFailed();if(e.webSocketOnly&&(t||Ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ne];else{const i=this.transports_=[];for(const r of ns.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ns.globalTransportInitialized_=!1;/**
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
 */const hT=6e4,dT=5e3,fT=10*1024,pT=100*1024,wr="t",ul="d",gT="s",hl="r",mT="e",dl="o",fl="a",pl="n",gl="p",yT="h";class _T{constructor(e,t,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new ns(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wr in e){const t=e[wr];t===fl?this.upgradeIfSecondaryHealthy_():t===hl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===dl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tn("t",e),s=Tn("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tn("t",e),s=Tn("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tn(wr,e);if(ul in e){const s=e[ul];if(t===yT){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===pl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===gT?this.onConnectionShutdown_(s):t===hl?this.onReset_(s):t===mT?io("Server Error: "+s):t===dl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):io("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ea!==s&&Ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Fn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_t.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sf{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Af{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ci extends Af{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ci}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ml=32,yl=768;class B{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function P(){return new B("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function at(n){return n.pieces_.length-n.pieceNum_}function U(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new B(n.pieces_,e)}function bf(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vT(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Nf(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Rf(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new B(e,0)}function te(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof B)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new B(t,0)}function R(n){return n.pieceNum_>=n.pieces_.length}function Ce(n,e){const t=k(n),s=k(e);if(t===null)return e;if(t===s)return Ce(U(n),U(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Df(n,e){if(at(n)!==at(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function De(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(at(n)>at(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class wT{constructor(e,t){this.errorPrefix_=t,this.parts_=Nf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=mi(this.parts_[s]);kf(this)}}function ET(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=mi(e),kf(n)}function TT(n){const e=n.parts_.pop();n.byteLength_-=mi(e),n.parts_.length>0&&(n.byteLength_-=1)}function kf(n){if(n.byteLength_>yl)throw new Error(n.errorPrefix_+"has a key path longer than "+yl+" bytes ("+n.byteLength_+").");if(n.parts_.length>ml)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ml+") or object contains a cycle "+ft(n))}function ft(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ca extends Af{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ca}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const In=1e3,IT=60*5*1e3,_l=30*1e3,CT=1.3,ST=3e4,AT="server_kill",vl=3;class qe extends Sf{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=qe.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=In,this.maxReconnectDelay_=IT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Kl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ca.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ci.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(re(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new vo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;qe.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Qe(e,"w")){const s=zt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Up(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_l)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$p(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):io("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ST&&(this.reconnectDelay_=In),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ue("getToken() completed but was canceled"):(ue("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new _T(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Ee(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(AT)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ee(h),c())}}}interrupt(e){ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qa(this.interruptReasons_)&&(this.reconnectDelay_=In,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>wa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new B(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ue("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vl&&(this.reconnectDelay_=_l,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ue("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sf.replace(/\./g,"-")]=1,Hl()?e["framework.cordova"]=1:Op()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ci.getInstance().currentlyOnline();return qa(this.interruptReasons_)&&e}}qe.nextPersistentConnectionId_=0;qe.nextConnectionId_=0;/**
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
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
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
 */class zi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new x(an,e),i=new x(an,t);return this.compare(s,i)!==0}minPost(){return x.MIN}}/**
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
 */let Os;class xf extends zi{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,t){return yn(e.name,t.name)}isDefinedOn(e){throw ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(Rt,Os)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,Os)}toString(){return".key"}}const Wt=new xf;/**
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
 */class Ms{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Z{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Z.RED,this.left=i??_e.EMPTY_NODE,this.right=r??_e.EMPTY_NODE}copy(e,t,s,i,r){return new Z(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return _e.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Z.RED=!0;Z.BLACK=!1;class bT{copy(e,t,s,i,r){return this}insert(e,t,s){return new Z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _e{constructor(e,t=_e.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new _e(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Z.BLACK,null,null))}remove(e){return new _e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Z.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ms(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ms(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ms(this.root_,null,this.comparator_,!0,e)}}_e.EMPTY_NODE=new bT;/**
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
 */function NT(n,e){return yn(n.name,e.name)}function Sa(n,e){return yn(n,e)}/**
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
 */let ao;function RT(n){ao=n}const Of=function(n){return typeof n=="number"?"number:"+lf(n):"string:"+n},Mf=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qe(e,".sv"),"Priority must be a string or number.")}else y(n===ao||n.isEmpty(),"priority of unexpected type.");y(n===ao||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wl;class X{constructor(e,t=X.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mf(this.priorityNode_)}static set __childrenNodeConstructor(e){wl=e}static get __childrenNodeConstructor(){return wl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return R(e)?this:k(e)===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:X.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=k(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(y(s!==".priority"||at(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,X.__childrenNodeConstructor.EMPTY_NODE.updateChild(U(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Of(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=lf(this.value_):e+=this.value_,this.lazyHash_=of(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=X.VALUE_TYPE_ORDER.indexOf(t),r=X.VALUE_TYPE_ORDER.indexOf(s);return y(i>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}X.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Lf,Pf;function DT(n){Lf=n}function kT(n){Pf=n}class xT extends zi{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(Rt,new X("[PRIORITY-POST]",Pf))}makePost(e,t){const s=Lf(e);return new x(t,new X("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new xT;/**
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
 */const OT=Math.log(2);class MT{constructor(e){const t=r=>parseInt(Math.log(r)/OT,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(n,e,t,s){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new Z(d,h.node,Z.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=i(c,f),w=i(f+1,l);return h=n[f],d=t?t(h):h,new Z(d,h.node,Z.BLACK,m,w)}},r=function(c){let l=null,u=null,h=n.length;const d=function(m,w){const b=h-m,se=h;h-=m;const H=i(b+1,se),Ye=n[b],Xe=t?t(Ye):Ye;f(new Z(Xe,Ye.node,w,null,H))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const w=c.nextBitIsOne(),b=Math.pow(2,c.count-(m+1));w?d(b,Z.BLACK):(d(b,Z.BLACK),d(b,Z.RED))}return u},o=new MT(n.length),a=r(o);return new _e(s||e,a)};/**
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
 */let Er;const Ft={};class Ue{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(Ft&&fe,"ChildrenNode.ts has not been loaded"),Er=Er||new Ue({".priority":Ft},{".priority":fe}),Er}get(e){const t=zt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof _e?t:null}hasIndex(e){return Qe(this.indexSet_,e.toString())}addIndex(e,t){y(e!==Wt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=li(s,e.getCompare()):a=Ft;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ue(u,l)}addToIndexes(e,t){const s=Vs(this.indexes_,(i,r)=>{const o=zt(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),i===Ft)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(x.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),li(a,o.getCompare())}else return Ft;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new x(e.name,a))),c.insert(e,e.node)}});return new Ue(s,this.indexSet_)}removeFromIndexes(e,t){const s=Vs(this.indexes_,i=>{if(i===Ft)return i;{const r=t.get(e.name);return r?i.remove(new x(e.name,r)):i}});return new Ue(s,this.indexSet_)}}/**
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
 */let Cn;class L{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Mf(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Cn||(Cn=new L(new _e(Sa),null,Ue.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Cn:t}}getChild(e){const t=k(e);return t===null?this:this.getImmediateChild(t).getChild(U(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new x(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Cn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,t){const s=k(e);if(s===null)return t;{y(k(e)!==".priority"||at(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(U(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,a)=>{t[o]=a.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Of(this.getPriority().val())+":"),this.forEachChild(fe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":of(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===Wt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fe),i=t.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wt?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LT extends L{constructor(){super(new _e(Sa),L.EMPTY_NODE,Ue.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Cs=new LT;Object.defineProperties(x,{MIN:{value:new x(an,L.EMPTY_NODE)},MAX:{value:new x(Rt,Cs)}});xf.__EMPTY_NODE=L.EMPTY_NODE;X.__childrenNodeConstructor=L;RT(Cs);kT(Cs);/**
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
 */const PT=!0;function he(n,e=null){if(n===null)return L.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new X(t,he(e))}if(!(n instanceof Array)&&PT){const t=[];let s=!1;if(be(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=he(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new x(o,c)))}}),t.length===0)return L.EMPTY_NODE;const r=li(t,NT,o=>o.name,Sa);if(s){const o=li(t,fe.getCompare());return new L(r,he(e),new Ue({".priority":o},{".priority":fe}))}else return new L(r,he(e),Ue.Default)}else{let t=L.EMPTY_NODE;return be(n,(s,i)=>{if(Qe(n,s)&&s.substring(0,1)!=="."){const r=he(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(he(e))}}DT(he);/**
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
 */class FT extends zi{constructor(e){super(),this.indexPath_=e,y(!R(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?yn(e.name,t.name):r}makePost(e,t){const s=he(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new x(t,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new x(Rt,e)}toString(){return Nf(this.indexPath_,0).join("/")}}/**
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
 */class $T extends zi{compare(e,t){const s=e.node.compareTo(t.node);return s===0?yn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const s=he(e);return new x(t,s)}toString(){return".value"}}const UT=new $T;/**
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
 */function VT(n){return{type:"value",snapshotNode:n}}function BT(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function qT(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function El(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function jT(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Aa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:an}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Aa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===fe?t="$priority":n.index_===UT?t="$value":n.index_===Wt?t="$key":(y(n.index_ instanceof FT,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=re(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=re(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+re(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=re(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Il(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==fe&&(e.i=n.index_.toString()),e}/**
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
 */class ui extends Sf{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ui.getListenId_(e,s),a={};this.listens_[o]=a;const c=Tl(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),zt(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=ui.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Tl(e._queryParams),s=e._path.toString(),i=new vo;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vp(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Vn(a.responseText)}catch{Ee("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ee("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class HT{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function hi(){return{value:null,children:new Map}}function Ff(n,e,t){if(R(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=k(e);n.children.has(s)||n.children.set(s,hi());const i=n.children.get(s);e=U(e),Ff(i,e,t)}}function co(n,e,t){n.value!==null?t(e,n.value):KT(n,(s,i)=>{const r=new B(e.toString()+"/"+s);co(i,r,t)})}function KT(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class GT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&be(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Cl=10*1e3,WT=30*1e3,zT=5*60*1e3;class QT{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new GT(e);const s=Cl+(WT-Cl)*Math.random();Fn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;be(e,(i,r)=>{r>0&&Qe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Fn(this.reportStats_.bind(this),Math.floor(Math.random()*2*zT))}}/**
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
 */var Me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Me||(Me={}));function $f(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vf(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class di{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Me.ACK_USER_WRITE,this.source=$f()}operationForChild(e){if(R(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new B(e));return new di(P(),t,this.revert)}}else return y(k(this.path)===e,"operationForChild called for unrelated child."),new di(U(this.path),this.affectedTree,this.revert)}}/**
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
 */class Dt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Me.OVERWRITE}operationForChild(e){return R(this.path)?new Dt(this.source,P(),this.snap.getImmediateChild(e)):new Dt(this.source,U(this.path),this.snap)}}/**
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
 */class ss{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Me.MERGE}operationForChild(e){if(R(this.path)){const t=this.children.subtree(new B(e));return t.isEmpty()?null:t.value?new Dt(this.source,P(),t.value):new ss(this.source,P(),t)}else return y(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ss(this.source,U(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ba{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(R(e))return this.isFullyInitialized()&&!this.filtered_;const t=k(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YT(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jT(o.childName,o.snapshotNode))}),Sn(n,i,"child_removed",e,s,t),Sn(n,i,"child_added",e,s,t),Sn(n,i,"child_moved",r,s,t),Sn(n,i,"child_changed",e,s,t),Sn(n,i,"value",e,s,t),i}function Sn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>JT(n,a,c)),o.forEach(a=>{const c=XT(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function XT(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function JT(n,e,t){if(e.childName==null||t.childName==null)throw ln("Should only compare child_ events.");const s=new x(e.childName,e.snapshotNode),i=new x(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Bf(n,e){return{eventCache:n,serverCache:e}}function $n(n,e,t,s){return Bf(new ba(e,t,s),n.serverCache)}function qf(n,e,t,s){return Bf(n.eventCache,new ba(e,t,s))}function lo(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Tr;const ZT=()=>(Tr||(Tr=new _e($E)),Tr);class ${constructor(e,t=ZT()){this.value=e,this.children=t}static fromObject(e){let t=new $(null);return be(e,(s,i)=>{t=t.set(new B(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:P(),value:this.value};if(R(e))return null;{const s=k(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(U(e),t);return r!=null?{path:te(new B(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(R(e))return this;{const t=k(e),s=this.children.get(t);return s!==null?s.subtree(U(e)):new $(null)}}set(e,t){if(R(e))return new $(t,this.children);{const s=k(e),r=(this.children.get(s)||new $(null)).set(U(e),t),o=this.children.insert(s,r);return new $(this.value,o)}}remove(e){if(R(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const t=k(e),s=this.children.get(t);if(s){const i=s.remove(U(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(R(e))return this.value;{const t=k(e),s=this.children.get(t);return s?s.get(U(e)):null}}setTree(e,t){if(R(e))return t;{const s=k(e),r=(this.children.get(s)||new $(null)).setTree(U(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new $(this.value,o)}}fold(e){return this.fold_(P(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(te(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,P(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(R(e))return null;{const r=k(e),o=this.children.get(r);return o?o.findOnPath_(U(e),te(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,P(),t)}foreachOnPath_(e,t,s){if(R(e))return this;{this.value&&s(t,this.value);const i=k(e),r=this.children.get(i);return r?r.foreachOnPath_(U(e),te(t,i),s):new $(null)}}foreach(e){this.foreach_(P(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(te(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ke{constructor(e){this.writeTree_=e}static empty(){return new ke(new $(null))}}function Un(n,e,t){if(R(e))return new ke(new $(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ce(i,e);return r=r.updateChild(o,t),new ke(n.writeTree_.set(i,r))}else{const i=new $(t),r=n.writeTree_.setTree(e,i);return new ke(r)}}}function Sl(n,e,t){let s=n;return be(t,(i,r)=>{s=Un(s,te(e,i),r)}),s}function Al(n,e){if(R(e))return ke.empty();{const t=n.writeTree_.setTree(e,new $(null));return new ke(t)}}function uo(n,e){return Lt(n,e)!=null}function Lt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ce(t.path,e)):null}function bl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fe,(s,i)=>{e.push(new x(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new x(s,i.value))}),e}function st(n,e){if(R(e))return n;{const t=Lt(n,e);return t!=null?new ke(new $(t)):new ke(n.writeTree_.subtree(e))}}function ho(n){return n.writeTree_.isEmpty()}function cn(n,e){return jf(P(),n.writeTree_,e)}function jf(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=jf(te(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(te(n,".priority"),s)),t}}/**
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
 */function Hf(n,e){return Qf(e,n)}function eI(n,e,t,s,i){y(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Un(n.visibleWrites,e,t)),n.lastWriteId=s}function tI(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function nI(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&sI(a,s.path)?i=!1:De(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return iI(n),!0;if(s.snap)n.visibleWrites=Al(n.visibleWrites,s.path);else{const a=s.children;be(a,c=>{n.visibleWrites=Al(n.visibleWrites,te(s.path,c))})}return!0}else return!1}function sI(n,e){if(n.snap)return De(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&De(te(n.path,t),e))return!0;return!1}function iI(n){n.visibleWrites=Kf(n.allWrites,rI,P()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function rI(n){return n.visible}function Kf(n,e,t){let s=ke.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)De(t,o)?(a=Ce(t,o),s=Un(s,a,r.snap)):De(o,t)&&(a=Ce(o,t),s=Un(s,P(),r.snap.getChild(a)));else if(r.children){if(De(t,o))a=Ce(t,o),s=Sl(s,a,r.children);else if(De(o,t))if(a=Ce(o,t),R(a))s=Sl(s,P(),r.children);else{const c=zt(r.children,k(a));if(c){const l=c.getChild(U(a));s=Un(s,P(),l)}}}else throw ln("WriteRecord should have .snap or .children")}}return s}function Gf(n,e,t,s,i){if(!s&&!i){const r=Lt(n.visibleWrites,e);if(r!=null)return r;{const o=st(n.visibleWrites,e);if(ho(o))return t;if(t==null&&!uo(o,P()))return null;{const a=t||L.EMPTY_NODE;return cn(o,a)}}}else{const r=st(n.visibleWrites,e);if(!i&&ho(r))return t;if(!i&&t==null&&!uo(r,P()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(De(l.path,e)||De(e,l.path))},a=Kf(n.allWrites,o,e),c=t||L.EMPTY_NODE;return cn(a,c)}}}function oI(n,e,t){let s=L.EMPTY_NODE;const i=Lt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=st(n.visibleWrites,e);return t.forEachChild(fe,(o,a)=>{const c=cn(st(r,new B(o)),a);s=s.updateImmediateChild(o,c)}),bl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=st(n.visibleWrites,e);return bl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function aI(n,e,t,s,i){y(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=te(e,t);if(uo(n.visibleWrites,r))return null;{const o=st(n.visibleWrites,r);return ho(o)?i.getChild(t):cn(o,i.getChild(t))}}function cI(n,e,t,s){const i=te(e,t),r=Lt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=st(n.visibleWrites,i);return cn(o,s.getNode().getImmediateChild(t))}else return null}function lI(n,e){return Lt(n.visibleWrites,e)}function uI(n,e,t,s,i,r,o){let a;const c=st(n.visibleWrites,e),l=Lt(c,P());if(l!=null)a=l;else if(t!=null)a=cn(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function hI(){return{visibleWrites:ke.empty(),allWrites:[],lastWriteId:-1}}function fo(n,e,t,s){return Gf(n.writeTree,n.treePath,e,t,s)}function Wf(n,e){return oI(n.writeTree,n.treePath,e)}function Nl(n,e,t,s){return aI(n.writeTree,n.treePath,e,t,s)}function fi(n,e){return lI(n.writeTree,te(n.treePath,e))}function dI(n,e,t,s,i,r){return uI(n.writeTree,n.treePath,e,t,s,i,r)}function Na(n,e,t){return cI(n.writeTree,n.treePath,e,t)}function zf(n,e){return Qf(te(n.treePath,e),n.writeTree)}function Qf(n,e){return{treePath:n,writeTree:e}}/**
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
 */class fI{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,El(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,qT(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,BT(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,El(s,e.snapshotNode,i.oldSnap));else throw ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pI{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Yf=new pI;class Ra{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ba(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Na(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kt(this.viewCache_),r=dI(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function gI(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mI(n,e,t,s,i){const r=new fI;let o,a;if(t.type===Me.OVERWRITE){const l=t;l.source.fromUser?o=po(n,e,l.path,l.snap,s,i,r):(y(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!R(l.path),o=pi(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===Me.MERGE){const l=t;l.source.fromUser?o=_I(n,e,l.path,l.children,s,i,r):(y(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=go(n,e,l.path,l.children,s,i,a,r))}else if(t.type===Me.ACK_USER_WRITE){const l=t;l.revert?o=EI(n,e,l.path,s,i,r):o=vI(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===Me.LISTEN_COMPLETE)o=wI(n,e,t.path,s,r);else throw ln("Unknown operation type: "+t.type);const c=r.getChanges();return yI(e,o,c),{viewCache:o,changes:c}}function yI(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=lo(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(VT(lo(e)))}}function Xf(n,e,t,s,i,r){const o=e.eventCache;if(fi(s,t)!=null)return e;{let a,c;if(R(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=kt(e),u=l instanceof L?l:L.EMPTY_NODE,h=Wf(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=fo(s,kt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=k(t);if(l===".priority"){y(at(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Nl(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=U(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Nl(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Na(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return $n(e,a,o.isFullyInitialized()||R(t),n.filter.filtersNodes())}}function pi(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(R(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=k(t);if(!c.isCompleteForPath(t)&&at(t)>1)return e;const m=U(t),b=c.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),f,b,m,Yf,null)}const h=qf(e,l,c.isFullyInitialized()||R(t),u.filtersNodes()),d=new Ra(i,h,r);return Xf(n,h,t,i,d,a)}function po(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const u=new Ra(i,e,r);if(R(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=$n(e,l,!0,n.filter.filtersNodes());else{const h=k(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=$n(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=U(t),f=a.getNode().getImmediateChild(h);let m;if(R(d))m=s;else{const w=u.getCompleteChild(h);w!=null?bf(d)===".priority"&&w.getChild(Rf(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=L.EMPTY_NODE}if(f.equals(m))c=e;else{const w=n.filter.updateChild(a.getNode(),h,m,d,u,o);c=$n(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Rl(n,e){return n.eventCache.isCompleteForChild(e)}function _I(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=te(t,c);Rl(e,k(u))&&(a=po(n,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=te(t,c);Rl(e,k(u))||(a=po(n,a,u,l,i,r,o))}),a}function Dl(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function go(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;R(t)?l=s:l=new $(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Dl(n,f,d);c=pi(n,c,new B(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),w=Dl(n,m,d);c=pi(n,c,new B(h),w,i,r,o,a)}}),c}function vI(n,e,t,s,i,r,o){if(fi(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(R(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return pi(n,e,t,c.getNode().getChild(t),i,r,a,o);if(R(t)){let l=new $(null);return c.getNode().forEachChild(Wt,(u,h)=>{l=l.set(new B(u),h)}),go(n,e,t,l,i,r,a,o)}else return e}else{let l=new $(null);return s.foreach((u,h)=>{const d=te(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),go(n,e,t,l,i,r,a,o)}}function wI(n,e,t,s,i){const r=e.serverCache,o=qf(e,r.getNode(),r.isFullyInitialized()||R(t),r.isFiltered());return Xf(n,o,t,s,Yf,i)}function EI(n,e,t,s,i,r){let o;if(fi(s,t)!=null)return e;{const a=new Ra(s,e,i),c=e.eventCache.getNode();let l;if(R(t)||k(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=fo(s,kt(e));else{const h=e.serverCache.getNode();y(h instanceof L,"serverChildren would be complete if leaf node"),u=Wf(s,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=k(t);let h=Na(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,U(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,L.EMPTY_NODE,U(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fo(s,kt(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||fi(s,P())!=null,$n(e,l,o,n.filter.filtersNodes())}}function TI(n,e){const t=kt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!R(e)&&!t.getImmediateChild(k(e)).isEmpty())?t.getChild(e):null}function kl(n,e,t,s){e.type===Me.MERGE&&e.source.queryId!==null&&(y(kt(n.viewCache_),"We should always have a full cache before handling merges"),y(lo(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=mI(n.processor_,i,e,t,s);return gI(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,II(n,r.changes,r.viewCache.eventCache.getNode(),null)}function II(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return YT(n.eventGenerator_,e,t,i)}/**
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
 */let xl;function CI(n){y(!xl,"__referenceConstructor has already been defined"),xl=n}function Da(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return y(r!=null,"SyncTree gave us an op for an invalid query."),kl(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(kl(o,e,t,s));return r}}function ka(n,e){let t=null;for(const s of n.views.values())t=t||TI(s,e);return t}/**
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
 */let Ol;function SI(n){y(!Ol,"__referenceConstructor has already been defined"),Ol=n}class Ml{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=hI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function AI(n,e,t,s,i){return eI(n.pendingWriteTree_,e,t,s,i),i?Yi(n,new Dt($f(),e,t)):[]}function qt(n,e,t=!1){const s=tI(n.pendingWriteTree_,e);if(nI(n.pendingWriteTree_,e)){let r=new $(null);return s.snap!=null?r=r.set(P(),!0):be(s.children,o=>{r=r.set(new B(o),!0)}),Yi(n,new di(s.path,r,t))}else return[]}function Qi(n,e,t){return Yi(n,new Dt(Uf(),e,t))}function bI(n,e,t){const s=$.fromObject(t);return Yi(n,new ss(Uf(),e,s))}function NI(n,e,t,s){const i=tp(n,s);if(i!=null){const r=np(i),o=r.path,a=r.queryId,c=Ce(o,e),l=new Dt(Vf(a),c,t);return sp(n,o,l)}else return[]}function RI(n,e,t,s){const i=tp(n,s);if(i){const r=np(i),o=r.path,a=r.queryId,c=Ce(o,e),l=$.fromObject(t),u=new ss(Vf(a),c,l);return sp(n,o,u)}else return[]}function Jf(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ce(o,e),l=ka(a,c);if(l)return l});return Gf(i,e,r,t,!0)}function Yi(n,e){return Zf(e,n.syncPointTree_,null,Hf(n.pendingWriteTree_,P()))}function Zf(n,e,t,s){if(R(n.path))return ep(n,e,t,s);{const i=e.get(P());t==null&&i!=null&&(t=ka(i,P()));let r=[];const o=k(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=zf(s,o);r=r.concat(Zf(a,c,l,u))}return i&&(r=r.concat(Da(i,n,s,t))),r}}function ep(n,e,t,s){const i=e.get(P());t==null&&i!=null&&(t=ka(i,P()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=zf(s,o),u=n.operationForChild(o);u&&(r=r.concat(ep(u,a,c,l)))}),i&&(r=r.concat(Da(i,n,s,t))),r}function tp(n,e){return n.tagToQueryMap.get(e)}function np(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new B(n.substr(0,e))}}function sp(n,e,t){const s=n.syncPointTree_.get(e);y(s,"Missing sync point for query tag that we're tracking");const i=Hf(n.pendingWriteTree_,e);return Da(s,t,i,null)}/**
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
 */class xa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xa(t)}node(){return this.node_}}class Oa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=te(this.path_,e);return new Oa(this.syncTree_,t)}node(){return Jf(this.syncTree_,this.path_)}}const DI=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ll=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return kI(n[".sv"],e,t);if(typeof n[".sv"]=="object")return xI(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},kI=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},xI=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&y(!1,"Unexpected increment value: "+s);const i=e.node();if(y(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},OI=function(n,e,t,s){return Ma(e,new Oa(t,n),s)},MI=function(n,e,t){return Ma(n,new xa(e),t)};function Ma(n,e,t){const s=n.getPriority().val(),i=Ll(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ll(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new X(a,he(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new X(i))),o.forEachChild(fe,(a,c)=>{const l=Ma(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class La{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Pa(n,e){let t=e instanceof B?e:new B(e),s=n,i=k(t);for(;i!==null;){const r=zt(s.node.children,i)||{children:{},childCount:0};s=new La(i,s,r),t=U(t),i=k(t)}return s}function _n(n){return n.node.value}function ip(n,e){n.node.value=e,mo(n)}function rp(n){return n.node.childCount>0}function LI(n){return _n(n)===void 0&&!rp(n)}function Xi(n,e){be(n.node.children,(t,s)=>{e(new La(t,n,s))})}function op(n,e,t,s){t&&!s&&e(n),Xi(n,i=>{op(i,e,!0,s)}),t&&s&&e(n)}function PI(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ss(n){return new B(n.parent===null?n.name:Ss(n.parent)+"/"+n.name)}function mo(n){n.parent!==null&&FI(n.parent,n.name,n)}function FI(n,e,t){const s=LI(t),i=Qe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,mo(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,mo(n))}/**
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
 */const $I=/[\[\].#$\/\u0000-\u001F\u007F]/,UI=/[\[\].#$\u0000-\u001F\u007F]/,Ir=10*1024*1024,ap=function(n){return typeof n=="string"&&n.length!==0&&!$I.test(n)},VI=function(n){return typeof n=="string"&&n.length!==0&&!UI.test(n)},BI=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),VI(n)},cp=function(n,e,t){const s=t instanceof B?new wT(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ft(s));if(typeof e=="function")throw new Error(n+"contains a function "+ft(s)+" with contents = "+e.toString());if(af(e))throw new Error(n+"contains "+e.toString()+" "+ft(s));if(typeof e=="string"&&e.length>Ir/3&&mi(e)>Ir)throw new Error(n+"contains a string greater than "+Ir+" utf8 bytes "+ft(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(be(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ap(o)))throw new Error(n+" contains an invalid key ("+o+") "+ft(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ET(s,o),cp(n,a,s),TT(s)}),i&&r)throw new Error(n+' contains ".value" child '+ft(s)+" in addition to actual children.")}},qI=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ap(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!BI(t))throw new Error(qp(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class jI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function HI(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Df(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Pt(n,e,t){HI(n,t),KI(n,s=>De(s,e)||De(e,s))}function KI(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(GI(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function GI(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Et&&ue("event: "+t.toString()),Is(s)}}}/**
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
 */const WI="repo_interrupt",zI=25;class QI{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hi(),this.transactionQueueTree_=new La,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YI(n,e,t){if(n.stats_=Ta(n.repoInfo_),n.forceRestClient_||HE())n.server_=new ui(n.repoInfo_,(s,i,r,o)=>{Pl(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fl(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new qe(n.repoInfo_,e,(s,i,r,o)=>{Pl(n,s,i,r,o)},s=>{Fl(n,s)},s=>{JI(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=YE(n.repoInfo_,()=>new QT(n.stats_,n.server_)),n.infoData_=new HT,n.infoSyncTree_=new Ml({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Qi(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fa(n,"connected",!1),n.serverSyncTree_=new Ml({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Pt(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function XI(n){const t=n.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function lp(n){return DI({timestamp:XI(n)})}function Pl(n,e,t,s,i){n.dataUpdateCount++;const r=new B(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Vs(t,l=>he(l));o=RI(n.serverSyncTree_,r,c,i)}else{const c=he(t);o=NI(n.serverSyncTree_,r,c,i)}else if(s){const c=Vs(t,l=>he(l));o=bI(n.serverSyncTree_,r,c)}else{const c=he(t);o=Qi(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ua(n,r)),Pt(n.eventQueue_,a,o)}function Fl(n,e){Fa(n,"connected",e),e===!1&&e0(n)}function JI(n,e){be(e,(t,s)=>{Fa(n,t,s)})}function Fa(n,e,t){const s=new B("/.info/"+e),i=he(t);n.infoData_.updateSnapshot(s,i);const r=Qi(n.infoSyncTree_,s,i);Pt(n.eventQueue_,s,r)}function ZI(n){return n.nextWriteId_++}function e0(n){up(n,"onDisconnectEvents");const e=lp(n),t=hi();co(n.onDisconnect_,P(),(i,r)=>{const o=OI(i,r,n.serverSyncTree_,e);Ff(t,i,o)});let s=[];co(t,P(),(i,r)=>{s=s.concat(Qi(n.serverSyncTree_,i,r));const o=i0(n,i);Ua(n,o)}),n.onDisconnect_=hi(),Pt(n.eventQueue_,P(),s)}function t0(n){n.persistentConnection_&&n.persistentConnection_.interrupt(WI)}function up(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ue(t,...e)}function hp(n,e,t){return Jf(n.serverSyncTree_,e,t)||L.EMPTY_NODE}function $a(n,e=n.transactionQueueTree_){if(e||Ji(n,e),_n(e)){const t=fp(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&n0(n,Ss(e),t)}else rp(e)&&Xi(e,t=>{$a(n,t)})}function n0(n,e,t){const s=t.map(l=>l.currentWriteId),i=hp(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];y(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ce(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{up(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(qt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ji(n,Pa(n.transactionQueueTree_,e)),$a(n,n.transactionQueueTree_),Pt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Is(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ee("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Ua(n,e)}},o)}function Ua(n,e){const t=dp(n,e),s=Ss(t),i=fp(n,t);return s0(n,i,s),s}function s0(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ce(t,c.path);let u=!1,h;if(y(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(qt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=zI)u=!0,h="maxretry",i=i.concat(qt(n.serverSyncTree_,c.currentWriteId,!0));else{const d=hp(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){cp("transaction failed: Data returned ",f,c.path);let m=he(f);typeof f=="object"&&f!=null&&Qe(f,".priority")||(m=m.updatePriority(d.getPriority()));const b=c.currentWriteId,se=lp(n),H=MI(m,d,se);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=H,c.currentWriteId=ZI(n),o.splice(o.indexOf(b),1),i=i.concat(AI(n.serverSyncTree_,c.path,H,c.currentWriteId,c.applyLocally)),i=i.concat(qt(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(qt(n.serverSyncTree_,c.currentWriteId,!0))}Pt(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ji(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Is(s[a]);$a(n,n.transactionQueueTree_)}function dp(n,e){let t,s=n.transactionQueueTree_;for(t=k(e);t!==null&&_n(s)===void 0;)s=Pa(s,t),e=U(e),t=k(e);return s}function fp(n,e){const t=[];return pp(n,e,t),t.sort((s,i)=>s.order-i.order),t}function pp(n,e,t){const s=_n(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Xi(e,i=>{pp(n,i,t)})}function Ji(n,e){const t=_n(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ip(e,t.length>0?t:void 0)}Xi(e,s=>{Ji(n,s)})}function i0(n,e){const t=Ss(dp(n,e)),s=Pa(n.transactionQueueTree_,e);return PI(s,i=>{Cr(n,i)}),Cr(n,s),op(s,i=>{Cr(n,i)}),t}function Cr(n,e){const t=_n(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(qt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ip(e,void 0):t.length=r+1,Pt(n.eventQueue_,Ss(e),i);for(let o=0;o<s.length;o++)Is(s[o])}}/**
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
 */function r0(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function o0(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ee(`Invalid query segment '${t}' in query '${n}'`)}return e}const $l=function(n,e){const t=a0(n),s=t.namespace;t.domain==="firebase.com"&&Nt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||PE();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new WE(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new B(t.pathString)}},a0=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=r0(n.substring(u,h)));const d=o0(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Va{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return R(this._path)?null:bf(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=Il(this._queryParams),t=wa(e);return t==="{}"?"default":t}get _queryObject(){return Il(this._queryParams)}isEqual(e){if(e=je(e),!(e instanceof Va))return!1;const t=this._repo===e._repo,s=Df(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vT(this._path)}}class vn extends Va{constructor(e,t){super(e,t,new Aa,!1)}get parent(){const e=Rf(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}CI(vn);SI(vn);/**
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
 */const c0="FIREBASE_DATABASE_EMULATOR_HOST",yo={};let l0=!1;function u0(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ue("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=$l(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[c0]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=$l(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new ro(ro.OWNER):new GE(n.name,n.options,e);qI("Invalid Firebase Database URL",o),R(o.path)||Nt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=d0(a,n,u,new KE(n.name,t));return new f0(h,n)}function h0(n,e){const t=yo[e];(!t||t[n.key]!==n)&&Nt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),t0(n),delete t[n.key]}function d0(n,e,t,s){let i=yo[e.name];i||(i={},yo[e.name]=i);let r=i[n.toURLString()];return r&&Nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new QI(n,l0,t,s),i[n.toURLString()]=r,r}class f0{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,P())),this._rootInternal}_delete(){return this._rootInternal!==null&&(h0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nt("Cannot call "+e+" on a deleted database.")}}/**
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
 */function p0(n){kE(Jl),He(new Pe("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return u0(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Se(rl,ol,n),Se(rl,ol,"esm2017")}qe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};qe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};p0();const g0={apiKey:"AIzaSyD-OP6xCH6Mjk_fIjE72qlvkEe4cgST1k8",authDomain:"final-project-9900f.firebaseapp.com",projectId:"final-project-9900f",storageBucket:"final-project-9900f.appspot.com",messagingSenderId:"680888784335",appId:"1:680888784335:web:eae497e39825627ba06eba",measurementId:"G-BEGD4JP81N"},gp=Zl(g0);fy(gp);const Zi=cE(gp);let Dn=[],Je=[];const m0=qd(Zi,"about");qd(Zi,"newAllRecipes");function mp(){if(document.body.id==="aboutMePage"){let e=document.getElementById("aboutPageContent");for(var n=0;n<Dn.length;n++){let t=document.createElement("p");console.log(Dn[n].content[0]);let s=document.createElement("p");t.append(Dn[n].content[0]),s.append(Dn[n].content[1]),e.append(t),e.append(s)}}else if(document.body.id==="backendPage"){let e=document.getElementById("submitAbout"),t=document.getElementById("submitRecipe");e.addEventListener("click",v0),t.addEventListener("click",w0);let s=document.getElementById("addAboutInputBtn"),i=document.getElementById("addRecipeInputBtn");s.addEventListener("click",_0),i.addEventListener("click",y0)}else if(document.body.id==="recipePage"){let e=document.getElementById("recipePageContent");for(var n=0;n<Je.length;n++){let s=document.createElement("p"),i=document.createElement("p");s.append(Je[n][0]),i.append(Je[n][1]),e.append(s),e.append(i)}}else if(document.body.id==="allRecipesPage"){let e=document.getElementById("allRecipesPageContent");for(var n=0;n<Je.length;n++){let s=document.createElement("p"),i=document.createElement("p");s.append(Je[n][0]),i.append(Je[n][1]),e.append(s),e.append(i)}}}function y0(){console.log("adding input box");let n=[],e=document.getElementById("recipeInputs"),t=e.childElementCount+1,s=document.createElement("div");s.setAttribute("id","step-"+t);let i=document.createElement("p");i.textContent="Step title";let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("class","array");let o=document.createElement("p");o.textContent="Step content";let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("class","array"),n.push(i,r,o,a),n.forEach(c=>{s.append(c)}),e.appendChild(s)}function _0(){console.log("adding input box");let n=[],e=document.getElementById("aboutInputs"),t=e.childElementCount+1,s=document.createElement("div");s.setAttribute("id","about-"+t);let i=document.createElement("p");i.textContent="paragraph title";let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("class","array");let o=document.createElement("p");o.textContent="paragraph content";let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("class","array"),n.push(i,r,o,a),n.forEach(c=>{s.append(c)}),e.appendChild(s)}ku(mp(),document.body);function v0(n){let e=[],t=document.getElementById("aboutInputs");for(var s=0;s<t.children.length;s++){let r=t.children[s].querySelectorAll(".array"),o=[];o.push(t.children[s].id);let a=[];for(var i=0;i<r.length;i++)r[i].value!=""&&a.push(r[i].value);o.push(a),e.push(o)}e.forEach(r=>yp("about",r[0],r[1]))}function w0(n){const e=new Map;let t=document.getElementById("recipeInputs"),s=document.getElementById("recipe-name").value;for(var i=0;i<t.children.length;i++){let o=t.children[i].querySelectorAll(".array"),a=[];for(var r=0;r<o.length;r++)a.push(o[r].value);e.set(t.children[i].id,a)}yp("newAllRecipes",s,Object.fromEntries(e))}async function yp(n,e,t){await NE(jd(Zi,n,e),{time:Date.now(),content:t})}async function E0(){(await bE(wE(m0))).forEach(i=>{let r=i.data();Dn.push(r)});let e=jd(Zi,"newAllRecipes","pizza"),s=(await AE(e)).data();Je.push(Object.values(s.content)),console.log(Je),ku(mp(),document.body)}E0();
