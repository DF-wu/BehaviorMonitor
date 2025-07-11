var t={};
/**
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
 */const e=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const a=s<t.length?n[t.charAt(s)]:64;++s;const c=s<t.length?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==a||null==c)throw new r;const u=e<<2|o>>4;if(i.push(u),64!==a){const t=o<<4&240|a>>2;if(i.push(t),64!==c){const t=a<<6&192|c;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(t){return function(t){const r=e(t);return n.encodeByteArray(r,!0)}(t).replace(/\./g,"")};
/**
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
 */
const s=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof globalThis)return globalThis;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,o=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(r){return}const e=t&&function(t){try{return n.decodeString(t,!0)}catch(r){console.error("base64Decode failed: ",r)}return null}(t[1]);return e&&JSON.parse(e)},a=()=>{try{return s()||(()=>{if("undefined"==typeof process)return;const e=t.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||o()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},c=t=>{const e=(t=>{var e,n;return null===(n=null===(e=a())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u=()=>{var t;return null===(t=a())||void 0===t?void 0:t.config};
/**
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
 */
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch(e){return!1}}const d={};let f=!1;function p(t,e){if("undefined"==typeof window||"undefined"==typeof document||!l(window.location.host)||d[t]===e||d[t]||f)return;function n(t){return`__firebase__banner__${t}`}d[t]=e;const r="__firebase__banner",i=function(){const t={prod:[],emulator:[]};for(const e of Object.keys(d))d[e]?t.emulator.push(e):t.prod.push(e);return t}().prod.length>0;function s(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{f=!0,function(){const t=document.getElementById(r);t&&t.remove()}()},t}function o(){const t=function(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}(r),e=n("text"),o=document.getElementById(e)||document.createElement("span"),a=n("learnmore"),c=document.getElementById(a)||document.createElement("a"),u=n("preprendIcon"),h=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;!function(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}(e),function(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}(c,a);const n=s();!function(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}(h,u),e.append(h,o,c,n),document.body.appendChild(e)}i?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
/**
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
 */function g(){return!function(){var t;const e=null===(t=a())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(globalThis.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m(){try{return"object"==typeof indexedDB}catch(t){return!1}}function y(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}class v extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(b,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new v(r,o,n)}}const b=/\{\$([^}]+)}/g;function E(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(_(n)&&_(s)){if(!E(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _(t){return null!==t&&"object"==typeof t}
/**
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
 */function T(t,e=1e3,n=2){const r=e*Math.pow(n,t),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
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
 */function I(t){return t&&t._delegate?t._delegate:t}class S{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const C="[DEFAULT]";
/**
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
 */class A{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new h;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===C?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new A(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var k,N;(N=k||(k={}))[N.DEBUG=0]="DEBUG",N[N.VERBOSE=1]="VERBOSE",N[N.INFO=2]="INFO",N[N.WARN=3]="WARN",N[N.ERROR=4]="ERROR",N[N.SILENT=5]="SILENT";const x={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},R=k.INFO,O={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},L=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=O[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class M{constructor(t){this.name=t,this._logLevel=R,this._logHandler=L,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?x[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}let P,V;const F=new WeakMap,U=new WeakMap,j=new WeakMap,B=new WeakMap,q=new WeakMap;let $={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return U.get(t);if("objectStoreNames"===e)return t.objectStoreNames||j.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function z(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(V||(V=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(K(this),e),H(F.get(this))}:function(...e){return H(t.apply(K(this),e))}:function(e,...n){const r=t.call(K(this),e,...n);return j.set(r,e.sort?e.sort():[e]),H(r)}}function G(t){return"function"==typeof t?z(t):(t instanceof IDBTransaction&&function(t){if(U.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});U.set(t,e)}(t),e=t,(P||(P=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,$):t);var e}function H(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(H(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&F.set(e,t)}).catch(()=>{}),q.set(e,t),e}(t);if(B.has(t))return B.get(t);const e=G(t);return e!==t&&(B.set(t,e),q.set(e,t)),e}const K=t=>q.get(t);function Q(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=H(o);return r&&o.addEventListener("upgradeneeded",t=>{r(H(o.result),t.oldVersion,t.newVersion,H(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const W=["get","getKey","getAll","getAllKeys","count"],X=["put","add","delete","clear"],Y=new Map;function J(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Y.get(e))return Y.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=X.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!W.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return Y.set(e,s),s}$=(t=>({...t,get:(e,n,r)=>J(e,n)||t.get(e,n,r),has:(e,n)=>!!J(e,n)||t.has(e,n)}))($);
/**
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
 */
class Z{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const tt="@firebase/app",et="0.13.2",nt=new M("@firebase/app"),rt="@firebase/app-compat",it="@firebase/analytics-compat",st="@firebase/analytics",ot="@firebase/app-check-compat",at="@firebase/app-check",ct="@firebase/auth",ut="@firebase/auth-compat",ht="@firebase/database",lt="@firebase/data-connect",dt="@firebase/database-compat",ft="@firebase/functions",pt="@firebase/functions-compat",gt="@firebase/installations",mt="@firebase/installations-compat",yt="@firebase/messaging",vt="@firebase/messaging-compat",wt="@firebase/performance",bt="@firebase/performance-compat",Et="@firebase/remote-config",_t="@firebase/remote-config-compat",Tt="@firebase/storage",It="@firebase/storage-compat",St="@firebase/firestore",Ct="@firebase/ai",At="@firebase/firestore-compat",Dt="firebase",kt="[DEFAULT]",Nt={[tt]:"fire-core",[rt]:"fire-core-compat",[st]:"fire-analytics",[it]:"fire-analytics-compat",[at]:"fire-app-check",[ot]:"fire-app-check-compat",[ct]:"fire-auth",[ut]:"fire-auth-compat",[ht]:"fire-rtdb",[lt]:"fire-data-connect",[dt]:"fire-rtdb-compat",[ft]:"fire-fn",[pt]:"fire-fn-compat",[gt]:"fire-iid",[mt]:"fire-iid-compat",[yt]:"fire-fcm",[vt]:"fire-fcm-compat",[wt]:"fire-perf",[bt]:"fire-perf-compat",[Et]:"fire-rc",[_t]:"fire-rc-compat",[Tt]:"fire-gcs",[It]:"fire-gcs-compat",[St]:"fire-fst",[At]:"fire-fst-compat",[Ct]:"fire-vertex","fire-js":"fire-js",[Dt]:"fire-js-all"},xt=new Map,Rt=new Map,Ot=new Map;function Lt(t,e){try{t.container.addComponent(e)}catch(n){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mt(t){const e=t.name;if(Ot.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;Ot.set(e,t);for(const n of xt.values())Lt(n,t);for(const n of Rt.values())Lt(n,t);return!0}function Pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const Vt=new w("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class Ft{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new S("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}
/**
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
 */function Ut(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:kt,automaticDataCollectionEnabled:!0},e),i=r.name;if("string"!=typeof i||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=u()),!n)throw Vt.create("no-options");const s=xt.get(i);if(s){if(E(n,s.options)&&E(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const o=new D(i);for(const c of Ot.values())o.addComponent(c);const a=new Ft(n,r,o);return xt.set(i,a),a}function jt(t=kt){const e=xt.get(t);if(!e&&t===kt&&u())return Ut();if(!e)throw Vt.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=null!==(r=Nt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void nt.warn(t.join(" "))}Mt(new S(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}
/**
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
 */const qt="firebase-heartbeat-store";let $t=null;function zt(){return $t||($t=Q("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(qt)}catch(n){console.warn(n)}}}).catch(t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})})),$t}async function Gt(t,e){try{const n=(await zt()).transaction(qt,"readwrite"),r=n.objectStore(qt);await r.put(e,Ht(t)),await n.done}catch(n){if(n instanceof v)nt.warn(n.message);else{const t=Vt.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});nt.warn(t.message)}}}function Ht(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class Kt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(t=>t.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){nt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Qt(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),Xt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return nt.warn(e),""}}}function Qt(){return(new Date).toISOString().substring(0,10)}class Wt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!m()&&y().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await zt()).transaction(qt),n=await e.objectStore(qt).get(Ht(t));return await e.done,n}catch(e){if(e instanceof v)nt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});nt.warn(t.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Xt(t){return i(JSON.stringify({version:2,heartbeats:t})).length}var Yt;Yt="",Mt(new S("platform-logger",t=>new Z(t),"PRIVATE")),Mt(new S("heartbeat",t=>new Kt(t),"PRIVATE")),Bt(tt,et,Yt),Bt(tt,et,"esm2017"),Bt("fire-js","");var Jt,Zt,te="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var r=e-this.blockSize,i=this.B,s=this.h,o=0;o<e;){if(0==s)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var i={};function s(t){return-128<=t&&128>t?function(t,e){var n=i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new r([0|t],0>t?-1:0)}):new r([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new r(e,0)}var a=s(0),c=s(1),u=s(16777216);function h(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new r(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new g(a,a);if(l(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(l(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=e;0>=r.l(t);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var u=s.add(r);0>=u.l(t)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return e=f(t,i.j(e)),new g(i,e)}for(i=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(e);l(u)||0<u.l(t);)u=(s=o(n-=r)).j(e);h(s)&&(s=c),i=i.add(s),t=f(t,u)}return new g(i,t)}function y(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new r(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],o=0;o<i;o++)s[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new r(s,t.h)}(t=r.prototype).m=function(){if(l(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(l(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,r="";;){var i=m(n,e).g,s=((0<(n=f(n,i.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(h(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:h(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var o=i+(65535&this.i(s))+(65535&t.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(0>this.l(u)&&0>t.l(u))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),g=t.i(s)>>>16,m=65535&t.i(s);n[2*i+2*s]+=f*m,p(n,2*i+2*s),n[2*i+2*s+1]+=c*m,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,p(n,2*i+2*s+1),n[2*i+2*s+2]+=c*g,p(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new r(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new r(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new r(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,Zt=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<e.length;s+=8){var c=Math.min(8,e.length-s),u=parseInt(e.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},Jt=r}).apply(void 0!==te?te:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ee,ne,re,ie,se,oe,ae,ce,ue="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ue&&ue];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,r){if(r)t:{var i=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}(r=r(s=i[t=t[t.length-1]]))!=s&&null!=r&&e(i,t,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,function(t,e){return e})}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function u(t,e,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function h(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function l(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(s(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=i.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<b.length;e++)n=b[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function T(t){i.setTimeout(()=>{throw t},0)}function I(){var t=k;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new C,t=>t.reset());class C{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let A,D=!1,k=new class{constructor(){this.h=this.g=null}add(t,e){const n=S.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},N=()=>{const t=i.Promise.resolve(void 0);A=()=>{t.then(x)}};var x=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(n){T(n)}var e=S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}D=!1};function R(){this.s=this.s,this.C=this.C}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(n){}return t}();function M(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&M.aa.h.call(this)}}l(M,O);var P={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),F=0;function U(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function j(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function B(t){this.src=t,this.g={},this.h=0}function q(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}B.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=$(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new U(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var z="closure_lm_"+(1e6*Math.random()|0),G={};function H(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)H(t,e[s],n,r,i);return null}return n=Z(n),t&&t[V]?t.K(e,n,!!o(r)&&!!r.capture,i):function(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=Y(t);if(c||(t[z]=c=new B(t)),n=c.add(e,n,r,a,s),n.proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=X;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)L||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(W(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}(t,e,n,!1,r,i)}function K(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)K(t,e[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),t&&t[V]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=$(s=t.g[e],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Y(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$(e,n,r,i)),(n=-1<t?e[t]:null)&&Q(n))}function Q(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[V])q(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(W(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Y(e))?(q(n,t),0==n.h&&(n.src=null,e[z]=null)):j(t)}}}function W(t){return t in G?G[t]:G[t]="on"+t}function X(t,e){if(t.da)t=!0;else{e=new M(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&Q(t),t=n.call(r,e)}return t}function Y(t){return(t=t[z])instanceof B?t:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(t){return"function"==typeof t?t:(t[J]||(t[J]=function(e){return t.handleEvent(e)}),t[J])}function tt(){R.call(this),this.i=new B(this),this.M=this,this.F=null}function et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var i=e;E(e=new O(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nt(o,r,!0,e)&&i}if(i=nt(o=e.g=t,r,!0,e)&&i,i=nt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=nt(o=e.g=n[s],r,!1,e)&&i}function nt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&q(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function rt(t,e,n){if("function"==typeof t)n&&(t=u(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return 2147483647<Number(e)?-1:i.setTimeout(t,e||0)}function it(t){t.g=rt(()=>{t.g=null,t.i&&(t.i=!1,it(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}l(tt,R),tt.prototype[V]=!0,tt.prototype.removeEventListener=function(t,e,n,r){K(this,t,e,n,r)},tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)j(n[r]);delete e.g[t],e.h--}}this.F=null},tt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},tt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class st extends R{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){R.call(this),this.h=t,this.g={}}l(ot,R);var at=[];function ct(t){v(t.g,function(t,e){this.g.hasOwnProperty(e)&&Q(t)},t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),ct(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=i.JSON.stringify,ht=i.JSON.parse,lt=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function dt(){}function ft(t){return t.h||(t.h=t.i())}function pt(){}dt.prototype.h=null;var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mt(){O.call(this,"d")}function yt(){O.call(this,"c")}l(mt,O),l(yt,O);var vt={},wt=null;function bt(){return wt=wt||new tt}function Et(t){O.call(this,vt.La,t)}function _t(t){const e=bt();et(e,new Et(e))}function Tt(t,e){O.call(this,vt.STAT_EVENT,t),this.stat=e}function It(t){const e=bt();et(e,new Tt(e,t))}function St(t,e){O.call(this,vt.Ma,t),this.size=e}function Ct(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){t()},e)}function At(){this.g=!0}function Dt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ut(n)}catch(a){return e}}(t,n)+(r?" "+r:"")})}vt.La="serverreachability",l(Et,O),vt.STAT_EVENT="statevent",l(Tt,O),vt.Ma="timingevent",l(St,O),At.prototype.xa=function(){this.g=!1},At.prototype.info=function(){};var kt,Nt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Rt(){}function Ot(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lt}function Lt(){this.i=null,this.g="",this.h=!1}l(Rt,dt),Rt.prototype.g=function(){return new XMLHttpRequest},Rt.prototype.i=function(){return{}},kt=new Rt;var Mt={},Pt={};function Vt(t,e,n){t.L=1,t.v=ve(fe(e)),t.m=n,t.P=!0,Ft(t,null)}function Ft(t,e){t.F=Date.now(),Bt(t),t.A=fe(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),xe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Lt,t.g=wn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new st(u(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(at[0]=i.toString()),i=at);for(var s=0;s<i.length;s++){var o=H(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),_t(),function(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.u,t.A,t.l,t.R,t.m)}function Ut(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function jt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Pt:(n=Number(e.substring(n,r)),isNaN(n)?Mt:(r+=1)+n>e.length?Pt:(e=e.slice(r,r+n),t.C=r+n,e))}function Bt(t){t.S=Date.now()+t.I,qt(t,t.I)}function qt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ct(u(t.ba,t),e)}function $t(t){t.B&&(i.clearTimeout(t.B),t.B=null)}function zt(t){0==t.j.G||t.J||pn(t.j,t)}function Gt(t){$t(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,ct(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Ht(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Yt(n.h,t)))if(!t.K&&Yt(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(h){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fn(n),nn(n)}hn(n),It(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ct(u(n.Za,n),6e3));if(1>=Xt(n.h)&&n.ca){try{n.ca()}catch(h){}n.ca=void 0}}else mn(n,11)}else if((t.K||n.g==t)&&fn(n),!p(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jt(s,s.h),s.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,ye(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((r=n).qa=vn(r,r.J?r.ia:null,r.W),o.K){Zt(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&($t(a),Bt(a)),r.g=o}else un(r);0<n.i.length&&sn(n)}else"stop"!=u[0]&&"close"!=u[0]||mn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mn(n,7):en(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}_t()}catch(h){}}Ot.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==Ye(t)?e.j():this.Y(t)},Ot.prototype.Y=function(t){try{if(t==this.g)t:{const d=Ye(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Je(this.g)))){this.J||4!=d||7==e||_t(),$t(this);var n=this.g.Z();this.X=n;e:if(Ut(this)){var r=Je(this.g);t="";var s=r.length,o=4==Ye(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Gt(this),zt(this);var a="";break e}this.h.i=new i.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var h=c;break e}}h=null}if(!(n=h)){this.o=!1,this.s=3,It(12),Gt(this),zt(this);break t}Dt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ht(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=jt(this,a),t==Pt){4==d&&(this.s=4,It(14),n=!1),Dt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Mt){this.s=4,It(15),Dt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Dt(this.i,this.l,t,null),Ht(this,t)}if(Ut(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,It(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),ln(l),l.M=!0,It(11))}}else Dt(this.i,this.l,a,"[Invalid Chunked Response]"),Gt(this),zt(this)}else Dt(this.i,this.l,a,null),Ht(this,a);4==d&&Gt(this),this.o&&!this.J&&(4==d?pn(this.j,this):(this.o=!1,Bt(this)))}else(function(t){const e={};t=(t.g&&2<=Ye(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(p(t[r]))continue;var n=_(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Gt(this),zt(this)}}}catch(d){}},Ot.prototype.cancel=function(){this.J=!0,Gt(this)},Ot.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.A),2!=this.L&&(_t(),It(17)),Gt(this),this.s=2,zt(this)):qt(this,this.S-t)};var Kt=class{constructor(t,e){this.g=t,this.map=e}};function Qt(t){this.l=t||10,i.PerformanceNavigationTiming?t=0<(t=i.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Xt(t){return t.h?1:t.g?t.g.size:0}function Yt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Jt(t,e){t.g?t.g.add(e):t.h=e}function Zt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function he(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(s(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(s(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(s(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}Qt.prototype.cancel=function(){if(this.i=te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var le=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function de(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof de){this.h=t.h,pe(this,t.j),this.o=t.o,this.g=t.g,ge(this,t.s),this.l=t.l;var e=t.i,n=new Ae;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),me(this,n),this.m=t.m}else t&&(e=String(t).match(le))?(this.h=!1,pe(this,e[1]||"",!0),this.o=we(e[2]||""),this.g=we(e[3]||"",!0),ge(this,e[4]),this.l=we(e[5]||"",!0),me(this,e[6]||"",!0),this.m=we(e[7]||"")):(this.h=!1,this.i=new Ae(null,this.h))}function fe(t){return new de(t)}function pe(t,e,n){t.j=n?we(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function me(t,e,n){e instanceof Ae?(t.i=e,function(t,e){e&&!t.j&&(De(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(ke(this,e),xe(this,n,t))},t)),t.j=e}(t.i,t.h)):(n||(e=be(e,Se)),t.i=new Ae(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function ve(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function we(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function be(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ee),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ee(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}de.prototype.toString=function(){var t=[],e=this.j;e&&t.push(be(e,_e,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(be(e,_e,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(be(n,"/"==n.charAt(0)?Ie:Te,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",be(n,Ce)),t.join("")};var _e=/[#\/\?@]/g,Te=/[#\?:]/g,Ie=/[#\?]/g,Se=/[#\?@]/g,Ce=/#/g;function Ae(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function De(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function ke(t,e){De(t),e=Re(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ne(t,e){return De(t),e=Re(t,e),t.g.has(e)}function xe(t,e,n){ke(t,e),0<n.length&&(t.i=null,t.g.set(Re(t,e),d(n)),t.h+=n.length)}function Re(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Oe(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Le(){this.g=new lt}function Me(t,e,n){const r=n||"";try{he(t,function(t,n){let i=t;o(t)&&(i=ut(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pe(t){this.l=t.Ub||null,this.j=t.eb||!1}function Ve(t,e){tt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Fe(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Ue(t){t.readyState=4,t.l=null,t.j=null,t.v=null,je(t)}function je(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Be(t){let e="";return v(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function qe(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Be(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ye(t,e,n))}function $e(t){tt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=Ae.prototype).add=function(t,e){De(this),this.i=null,t=Re(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){De(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.na=function(){De(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){De(this);let e=[];if("string"==typeof t)Ne(this,t)&&(e=e.concat(this.g.get(Re(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return De(this),this.i=null,Ne(this,t=Re(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},l(Pe,dt),Pe.prototype.g=function(){return new Ve(this.l,this.j)},Pe.prototype.i=function(t){return function(){return t}}({}),l(Ve,tt),(t=Ve.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,je(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||i).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ue(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fe(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ue(this):je(this),3==this.readyState&&Fe(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Ue(this))},t.Qa=function(t){this.g&&(this.response=t,Ue(this))},t.ga=function(){this.g&&Ue(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ve.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l($e,tt);var ze=/^https?$/i,Ge=["POST","PUT"];function He(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Ke(t),We(t)}function Ke(t){t.A||(t.A=!0,et(t,"complete"),et(t,"error"))}function Qe(t){if(t.h&&void 0!==r&&(!t.v[1]||4!=Ye(t)||2!=t.Z()))if(t.u&&4==Ye(t))rt(t.Ea,0,t);else if(et(t,"readystatechange"),4==Ye(t)){t.h=!1;try{const r=t.Z();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){var o=String(t.D).match(le)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!ze.test(o?o.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var a=2<Ye(t)?t.g.statusText:""}catch(c){a=""}t.l=a+" ["+t.Z()+"]",Ke(t)}}finally{We(t)}}}function We(t,e){if(t.g){Xe(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Xe(t){t.I&&(i.clearTimeout(t.I),t.I=null)}function Ye(t){return t.g?t.g.readyState:0}function Je(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ze(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tn(t){this.Aa=0,this.i=[],this.j=new At,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ze("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ze("baseRetryDelayMs",5e3,t),this.cb=Ze("retryDelaySeedMs",1e4,t),this.Wa=Ze("forwardChannelMaxRetries",2,t),this.wa=Ze("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Qt(t&&t.concurrentRequestLimit),this.Da=new Le,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function en(t){if(rn(t),3==t.G){var e=t.U++,n=fe(t.I);if(ye(n,"SID",t.K),ye(n,"RID",e),ye(n,"TYPE","terminate"),an(t,n),(e=new Ot(t,t.j,e)).L=2,e.v=ve(fe(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=e.v,n=!0),n||(e.g=wn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Bt(e)}yn(t)}function nn(t){t.g&&(ln(t),t.g.cancel(),t.g=null)}function rn(t){nn(t),t.u&&(i.clearTimeout(t.u),t.u=null),fn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&i.clearTimeout(t.s),t.s=null)}function sn(t){if(!Wt(t.h)&&!t.s){t.s=!0;var e=t.Ga;A||N(),D||(A(),D=!0),k.add(e,t),t.B=0}}function on(t,e){var n;n=e?e.l:t.U++;const r=fe(t.I);ye(r,"SID",t.K),ye(r,"RID",n),ye(r,"AID",t.T),an(t,r),t.m&&t.o&&qe(r,t.m,t.o),n=new Ot(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=cn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Jt(t.h,n),Vt(n,r,e)}function an(t,e){t.H&&v(t.H,function(t,n){ye(e,n,t)}),t.l&&he({},function(t,n){ye(e,n,t)})}function cn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?u(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{Me(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function un(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;A||N(),D||(A(),D=!0),k.add(e,t),t.v=0}}function hn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ct(u(t.Fa,t),gn(t,t.v)),t.v++,!0)}function ln(t){null!=t.A&&(i.clearTimeout(t.A),t.A=null)}function dn(t){t.g=new Ot(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=fe(t.qa);ye(e,"RID","rpc"),ye(e,"SID",t.K),ye(e,"AID",t.T),ye(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ye(e,"TO",t.ja),ye(e,"TYPE","xmlhttp"),an(t,e),t.m&&t.o&&qe(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=ve(fe(e)),n.m=null,n.P=!0,Ft(n,t)}function fn(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function pn(t,e){var n=null;if(t.g==e){fn(t),ln(t),t.g=null;var r=2}else{if(!Yt(t.h,e))return;n=e.D,Zt(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;et(r=bt(),new St(r,n)),sn(t)}else un(t);else if(3==(i=e.s)||0==i&&0<e.X||!(1==r&&function(t,e){return!(Xt(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=Ct(u(t.Ga,t,e),gn(t,t.B)),t.B++,0)))}(t,e)||2==r&&hn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:mn(t,5);break;case 4:mn(t,10);break;case 3:mn(t,6);break;default:mn(t,2)}}function gn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function mn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.fb,t),r=t.Xa;const e=!r;r=new de(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||pe(r,"https"),ve(r),e?function(t,e){const n=new At;if(i.Image){const r=new Image;r.onload=h(Oe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=h(Oe,n,"TestLoadImage: error",!1,e,r),r.onabort=h(Oe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=h(Oe,n,"TestLoadImage: timeout",!1,e,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new At;const n=new AbortController,r=setTimeout(()=>{n.abort(),Oe(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(r),t.ok?Oe(0,0,!0,e):Oe(0,0,!1,e)}).catch(()=>{clearTimeout(r),Oe(0,0,!1,e)})}(r.toString(),n)}else It(2);t.G=0,t.l&&t.l.sa(e),yn(t),rn(t)}function yn(t){if(t.G=0,t.ka=[],t.l){const e=te(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function vn(t,e,n){var r=n instanceof de?fe(n):new de(n);if(""!=r.g)e&&(r.g=e+"."+r.g),ge(r,r.s);else{var s=i.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new de(null);r&&pe(o,r),e&&(o.g=e),s&&ge(o,s),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&ye(r,n,e),ye(r,"VER",t.la),an(t,r),r}function wn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new $e(new Pe({eb:n})):new $e(t.pa)).Ha(t.J),e}function bn(){}function En(){}function _n(t,e){tt.call(this),this.g=new tn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Sn(this)}function Tn(t){mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function In(){yt.call(this),this.status=1}function Sn(t){this.g=t}(t=$e.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kt.g(),this.v=this.o?ft(this.o):ft(kt),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void He(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=i.FormData&&t instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ge,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xe(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){He(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),We(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),We(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qe(this):this.bb())},t.bb=function(){Qe(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ht(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=tn.prototype).la=8,t.G=1,t.connect=function(t,e,n,r){It(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=vn(this,null,this.W),sn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ot(this,this.j,t);let s=this.o;if(this.S&&(s?(s=w(s),E(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cn(this,i,e),ye(n=fe(this.I),"RID",t),ye(n,"CVER",22),this.D&&ye(n,"X-HTTP-Session-Id",this.D),an(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Be(s)))+"&"+e:this.m&&qe(n,this.m,s)),Jt(this.h,i),this.Ua&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),i.T=!0,Vt(i,n,null)):Vt(i,n,e),this.G=2}}else 3==this.G&&(t?on(this,t):0==this.i.length||Wt(this.h)||on(this))},t.Fa=function(){if(this.u=null,dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ct(u(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),nn(this),dn(this))},t.Za=function(){null!=this.C&&(this.C=null,nn(this),hn(this),It(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=bn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},En.prototype.g=function(t,e){return new _n(t,e)},l(_n,tt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){en(this.g)},_n.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ut(t),t=n);e.i.push(new Kt(e.Ya++,t)),3==e.G&&sn(e)},_n.prototype.N=function(){this.g.l=null,delete this.j,en(this.g),delete this.g,_n.aa.N.call(this)},l(Tn,mt),l(In,yt),l(Sn,bn),Sn.prototype.ua=function(){et(this.g,"a")},Sn.prototype.ta=function(t){et(this.g,new Tn(t))},Sn.prototype.sa=function(t){et(this.g,new In)},Sn.prototype.ra=function(){et(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,ce=function(){return new En},ae=function(){return bt()},oe=vt,se={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nt.NO_ERROR=0,Nt.TIMEOUT=8,Nt.HTTP_ERROR=6,ie=Nt,xt.COMPLETE="complete",re=xt,pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,ne=pt,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,ee=$e}).apply(void 0!==ue?ue:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const he="@firebase/firestore",le="4.8.0";
/**
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
 */class de{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");
/**
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
 */
let fe="11.10.0";
/**
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
 */const pe=new M("@firebase/firestore");function ge(){return pe.logLevel}function me(t,...e){if(pe.logLevel<=k.DEBUG){const n=e.map(we);pe.debug(`Firestore (${fe}): ${t}`,...n)}}function ye(t,...e){if(pe.logLevel<=k.ERROR){const n=e.map(we);pe.error(`Firestore (${fe}): ${t}`,...n)}}function ve(t,...e){if(pe.logLevel<=k.WARN){const n=e.map(we);pe.warn(`Firestore (${fe}): ${t}`,...n)}}function we(t){if("string"==typeof t)return t;try{
/**
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
    */
return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
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
 */function be(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,Ee(t,r,n)}function Ee(t,e,n){let r=`FIRESTORE (${fe}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(i){r+=" CONTEXT: "+n}throw ye(r),new Error(r)}function _e(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||Ee(e,i,r)}function Te(t,e){return t}
/**
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
 */const Ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Se extends v{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Ce{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
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
 */class Ae{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class De{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(de.UNAUTHENTICATED))}shutdown(){}}class ke{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ne{constructor(t){this.t=t,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){_e(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Ce;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ce,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ce)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(_e("string"==typeof e.accessToken,31837,{l:e}),new Ae(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return _e(null===t||"string"==typeof t,2055,{h:t}),new de(t)}}class xe{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=de.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Re{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new xe(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oe{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Le{constructor(t,e){var n;this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,null!=(n=t)&&void 0!==n.settings&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){_e(void 0===this.o,3512);const n=t=>{null!=t.error&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,me("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Oe(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(_e("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new Oe(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function Me(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */function Pe(){return new TextEncoder}
/**
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
 */class Ve{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=Me(40);for(let r=0;r<n.length;++r)e.length<20&&n[r]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return e}}function Fe(t,e){return t<e?-1:t>e?1:0}function Ue(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Fe(r,i);{const s=Pe(),o=Be(s.encode(je(t,n)),s.encode(je(e,n)));return 0!==o?o:Fe(r,i)}}n+=r>65535?2:1}return Fe(t.length,e.length)}function je(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Be(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Fe(t[n],e[n]);return Fe(t.length,e.length)}function qe(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
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
 */const $e="__name__";class ze{constructor(t,e,n){void 0===e?e=0:e>t.length&&be(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&be(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ze.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ze?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=ze.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return Fe(t.length,e.length)}static compareSegments(t,e){const n=ze.isNumericId(t),r=ze.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?ze.extractNumericId(t).compare(ze.extractNumericId(e)):Ue(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jt.fromString(t.substring(4,t.length-2))}}class Ge extends ze{construct(t,e,n){return new Ge(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Se(Ie.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new Ge(e)}static emptyPath(){return new Ge([])}}const He=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ze{construct(t,e,n){return new Ke(t,e,n)}static isValidIdentifier(t){return He.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===$e}static keyField(){return new Ke([$e])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Se(Ie.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Se(Ie.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Se(Ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Se(Ie.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ke(e)}static emptyPath(){return new Ke([])}}
/**
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
 */class Qe{constructor(t){this.path=t}static fromPath(t){return new Qe(Ge.fromString(t))}static fromName(t){return new Qe(Ge.fromString(t).popFirst(5))}static empty(){return new Qe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ge.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ge.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Qe(new Ge(t.slice()))}}
/**
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
 */function We(t,e,n){if(!n)throw new Se(Ie.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Xe(t){if(!Qe.isDocumentKey(t))throw new Se(Ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ye(t){if(Qe.isDocumentKey(t))throw new Se(Ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Je(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function Ze(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":be(12329,{type:typeof t})}function tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Se(Ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ze(t);throw new Se(Ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t,e){const n={typeString:t};return e&&(n.value=e),n}function nn(t,e){if(!Je(t))throw new Se(Ie.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Se(Ie.INVALID_ARGUMENT,n);return!0}
/**
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
 */const rn=-62135596800,sn=1e6;class on{static now(){return on.fromMillis(Date.now())}static fromDate(t){return on.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*sn);return new on(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<rn)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Se(Ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sn}_compareTo(t){return this.seconds===t.seconds?Fe(this.nanoseconds,t.nanoseconds):Fe(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:on._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(nn(t,on._jsonSchema))return new on(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-rn;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}on._jsonSchemaVersion="firestore/timestamp/1.0",on._jsonSchema={type:en("string",on._jsonSchemaVersion),seconds:en("number"),nanoseconds:en("number")};
/**
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
 */
class an{static fromTimestamp(t){return new an(t)}static min(){return new an(new on(0,0))}static max(){return new an(new on(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function cn(t){return new un(t.readTime,t.key,-1)}class un{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new un(an.min(),Qe.empty(),-1)}static max(){return new un(an.max(),Qe.empty(),-1)}}function hn(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Qe.comparator(t.documentKey,e.documentKey),0!==n?n:Fe(t.largestBatchId,e.largestBatchId)
/**
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
 */)}class ln{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
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
 */async function dn(t){if(t.code!==Ie.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;me("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class fn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new fn((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof fn?e:fn.resolve(e)}catch(e){return fn.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):fn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):fn.reject(e)}static resolve(t){return new fn((e,n)=>{e(t)})}static reject(t){return new fn((e,n)=>{n(t)})}static waitFor(t){return new fn((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=fn.resolve(!1);for(const n of t)e=e.next(t=>t?fn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new fn((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new fn((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}function pn(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */class gn{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this._e(t),this.ae=t=>e.writeSequenceNumber(t))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}gn.ue=-1;function mn(t){return null==t}function yn(t){return 0===t&&1/t==-1/0}function vn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function wn(t){return t+""}
/**
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
 */function bn(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function En(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _n(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Tn{constructor(t,e){this.comparator=t,this.root=e||Sn.EMPTY}insert(t,e){return new Tn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Sn.BLACK,null,null))}remove(t){return new Tn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Sn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new In(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new In(this.root,t,this.comparator,!1)}getReverseIterator(){return new In(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new In(this.root,t,this.comparator,!0)}}class In{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Sn{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Sn.RED,this.left=null!=r?r:Sn.EMPTY,this.right=null!=i?i:Sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Sn(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Sn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Sn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw be(27949);return t+(this.isRed()?0:1)}}Sn.EMPTY=null,Sn.RED=!0,Sn.BLACK=!1,Sn.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new Sn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Cn{constructor(t){this.comparator=t,this.data=new Tn(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new An(this.data.getIterator())}getIteratorFrom(t){return new An(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Cn))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Cn(this.comparator);return e.data=t,e}}class An{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class Dn{constructor(t){this.fields=t,t.sort(Ke.comparator)}static empty(){return new Dn([])}unionWith(t){let e=new Cn(Ke.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Dn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return qe(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
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
 */class kn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class Nn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new kn("Invalid base64 string: "+e):e}}(t);return new Nn(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Nn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Fe(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nn.EMPTY_BYTE_STRING=new Nn("");const xn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(_e(!!t,39018),"string"==typeof t){let e=0;const n=xn.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:On(t.seconds),nanos:On(t.nanos)}}function On(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ln(t){return"string"==typeof t?Nn.fromBase64String(t):Nn.fromUint8Array(t)}
/**
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
 */const Mn="server_timestamp",Pn="__type__",Vn="__previous_value__",Fn="__local_write_time__";function Un(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[Pn])||void 0===n?void 0:n.stringValue)===Mn}function jn(t){const e=t.mapValue.fields[Vn];return Un(e)?jn(e):e}function Bn(t){const e=Rn(t.mapValue.fields[Fn].timestampValue);return new on(e.seconds,e.nanos)}
/**
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
 */class qn{constructor(t,e,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u}}const $n="(default)";class zn{constructor(t,e){this.projectId=t,this.database=e||$n}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database===$n}isEqual(t){return t instanceof zn&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const Gn="__type__",Hn="__max__",Kn={},Qn="__vector__",Wn="value";function Xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Un(t)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Hn}
/**
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
 */(t)?9007199254740991:function(t){var e,n;return(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{})[Gn])||void 0===n?void 0:n.stringValue)===Qn}(t)?10:11:be(28295,{value:t})}function Yn(t,e){if(t===e)return!0;const n=Xn(t);if(n!==Xn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bn(t).isEqual(Bn(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Rn(t.timestampValue),r=Rn(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Ln(t.bytesValue).isEqual(Ln(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return On(t.geoPointValue.latitude)===On(e.geoPointValue.latitude)&&On(t.geoPointValue.longitude)===On(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return On(t.integerValue)===On(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=On(t.doubleValue),r=On(e.doubleValue);return n===r?yn(n)===yn(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return qe(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(bn(n)!==bn(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Yn(n[i],r[i])))return!1;return!0}(t,e);default:return be(52216,{left:t})}var r}function Jn(t,e){return void 0!==(t.values||[]).find(t=>Yn(t,e))}function Zn(t,e){if(t===e)return 0;const n=Xn(t),r=Xn(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=On(t.integerValue||t.doubleValue),r=On(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return tr(t.timestampValue,e.timestampValue);case 4:return tr(Bn(t),Bn(e));case 5:return Ue(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ln(t),r=Ln(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Fe(n[i],r[i]);if(0!==t)return t}return Fe(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Fe(On(t.latitude),On(e.latitude));return 0!==n?n:Fe(On(t.longitude),On(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return er(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o[Wn])||void 0===n?void 0:n.arrayValue,u=null===(r=a[Wn])||void 0===r?void 0:r.arrayValue,h=Fe((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:er(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Kn&&e===Kn)return 0;if(t===Kn)return 1;if(e===Kn)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Ue(r[o],s[o]);if(0!==t)return t;const e=Zn(n[r[o]],i[s[o]]);if(0!==e)return e}return Fe(r.length,s.length)}(t.mapValue,e.mapValue);default:throw be(23264,{le:n})}}function tr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Fe(t,e);const n=Rn(t),r=Rn(e),i=Fe(n.seconds,r.seconds);return 0!==i?i:Fe(n.nanos,r.nanos)}function er(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Zn(n[i],r[i]);if(t)return t}return Fe(n.length,r.length)}function nr(t){return rr(t)}function rr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Rn(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ln(t.bytesValue).toBase64():"referenceValue"in t?function(t){return Qe.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=rr(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${rr(t.fields[i])}`;return n+"}"}(t.mapValue):be(61005,{value:t})}function ir(t){switch(Xn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jn(t);return e?16+ir(e):16;case 5:return 2*t.stringValue.length;case 6:return Ln(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,e)=>t+ir(e),0);case 10:case 11:return function(t){let e=0;return En(t.fields,(t,n)=>{e+=t.length+ir(n)}),e}(t.mapValue);default:throw be(13486,{value:t})}}function sr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function or(t){return!!t&&"integerValue"in t}function ar(t){return!!t&&"arrayValue"in t}function cr(t){return!!t&&"nullValue"in t}function ur(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hr(t){return!!t&&"mapValue"in t}function lr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return En(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=lr(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class dr{constructor(t){this.value=t}static empty(){return new dr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!hr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=lr(e)}setAll(t){let e=Ke.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=lr(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());hr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Yn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];hr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){En(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new dr(lr(this.value))}}function fr(t){const e=[];return En(t.fields,(t,n)=>{const r=new Ke([t]);if(hr(n)){const t=fr(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new Dn(e)
/**
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
 */}class pr{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new pr(t,0,an.min(),an.min(),an.min(),dr.empty(),0)}static newFoundDocument(t,e,n,r){return new pr(t,1,e,an.min(),n,r,0)}static newNoDocument(t,e){return new pr(t,2,e,an.min(),an.min(),dr.empty(),0)}static newUnknownDocument(t,e){return new pr(t,3,e,an.min(),an.min(),dr.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(an.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=an.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof pr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class gr{constructor(t,e){this.position=t,this.inclusive=e}}function mr(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Qe.comparator(Qe.fromName(o.referenceValue),n.key):Zn(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function yr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class vr{constructor(t,e="asc"){this.field=t,this.dir=e}}function wr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class br{}class Er extends br{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Dr(t,e,n):"array-contains"===e?new Rr(t,n):"in"===e?new Or(t,n):"not-in"===e?new Lr(t,n):"array-contains-any"===e?new Mr(t,n):new Er(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new kr(t,n):new Nr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Zn(e,this.value)):null!==e&&Xn(this.value)===Xn(e)&&this.matchesComparison(Zn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _r extends br{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new _r(t,e)}matches(t){return Tr(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Tr(t){return"and"===t.op}function Ir(t){return function(t){for(const e of t.filters)if(e instanceof _r)return!1;return!0}(t)&&Tr(t)}function Sr(t){if(t instanceof Er)return t.field.canonicalString()+t.op.toString()+nr(t.value);if(Ir(t))return t.filters.map(t=>Sr(t)).join(",");{const e=t.filters.map(t=>Sr(t)).join(",");return`${t.op}(${e})`}}function Cr(t,e){return t instanceof Er?(n=t,(r=e)instanceof Er&&n.op===r.op&&n.field.isEqual(r.field)&&Yn(n.value,r.value)):t instanceof _r?function(t,e){return e instanceof _r&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&Cr(n,e.filters[r]),!0)}(t,e):void be(19439);var n,r}function Ar(t){return t instanceof Er?`${(e=t).field.canonicalString()} ${e.op} ${nr(e.value)}`:t instanceof _r?function(t){return t.op.toString()+" {"+t.getFilters().map(Ar).join(" ,")+"}"}(t):"Filter";var e}class Dr extends Er{constructor(t,e,n){super(t,e,n),this.key=Qe.fromName(n.referenceValue)}matches(t){const e=Qe.comparator(t.key,this.key);return this.matchesComparison(e)}}class kr extends Er{constructor(t,e){super(t,"in",e),this.keys=xr("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Nr extends Er{constructor(t,e){super(t,"not-in",e),this.keys=xr("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function xr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Qe.fromName(t.referenceValue))}class Rr extends Er{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ar(e)&&Jn(e.arrayValue,this.value)}}class Or extends Er{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Jn(this.value.arrayValue,e)}}class Lr extends Er{constructor(t,e){super(t,"not-in",e)}matches(t){if(Jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Jn(this.value.arrayValue,e)}}class Mr extends Er{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ar(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Jn(this.value.arrayValue,t))}}
/**
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
 */class Pr{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Pe=null}}function Vr(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Pr(t,e,n,r,i,s,o)}function Fr(t){const e=Te(t);if(null===e.Pe){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Sr(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>{return(e=t).field.canonicalString()+e.dir;var e}).join(","),mn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>nr(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>nr(t)).join(",")),e.Pe=t}return e.Pe}function Ur(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cr(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yr(t.startAt,e.startAt)&&yr(t.endAt,e.endAt)}function jr(t){return Qe.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */class Br{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qr(t){return new Br(t)}function $r(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function zr(t){return null!==t.collectionGroup}function Gr(t){const e=Te(t);if(null===e.Te){e.Te=[];const t=new Set;for(const r of e.explicitOrderBy)e.Te.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new Cn(Ke.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Te.push(new vr(r,n))}),t.has(Ke.keyField().canonicalString())||e.Te.push(new vr(Ke.keyField(),n))}return e.Te}function Hr(t){const e=Te(t);return e.Ie||(e.Ie=function(t,e){if("F"===t.limitType)return Vr(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new vr(t.field,e)});const n=t.endAt?new gr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gr(t.startAt.position,t.startAt.inclusive):null;return Vr(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,Gr(t))),e.Ie}function Kr(t,e){const n=t.filters.concat([e]);return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qr(t,e,n){return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wr(t,e){return Ur(Hr(t),Hr(e))&&t.limitType===e.limitType}function Xr(t){return`${Fr(Hr(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>Ar(t)).join(", ")}]`),mn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e}).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>nr(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>nr(t)).join(",")),`Target(${e})`}(Hr(t))}; limitType=${t.limitType})`}function Jr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Qe.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Gr(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=mr(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Gr(n),r)||n.endAt&&!function(t,e,n){const r=mr(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Gr(n),r)));var n,r}function Zr(t){return(e,n)=>{let r=!1;for(const i of Gr(t)){const t=ti(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ti(t,e,n){const r=t.field.isKeyField()?Qe.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Zn(r,i):be(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return be(19790,{direction:t.dir})}}
/**
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
 */class ei{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){En(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return _n(this.inner)}size(){return this.innerSize}}
/**
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
 */const ni=new Tn(Qe.comparator);function ri(){return ni}const ii=new Tn(Qe.comparator);function si(...t){let e=ii;for(const n of t)e=e.insert(n.key,n);return e}function oi(t){let e=ii;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ai(){return ui()}function ci(){return ui()}function ui(){return new ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const hi=new Tn(Qe.comparator),li=new Cn(Qe.comparator);function di(...t){let e=li;for(const n of t)e=e.add(n);return e}const fi=new Cn(Fe);
/**
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
 */
function pi(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yn(e)?"-0":e}}function gi(t){return{integerValue:""+t}}function mi(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!yn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */(e)?gi(e):pi(t,e)}
/**
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
 */class yi{constructor(){this._=void 0}}function vi(t,e,n){return t instanceof Ei?function(t,e){const n={fields:{[Pn]:{stringValue:Mn},[Fn]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Un(e)&&(e=jn(e)),e&&(n.fields[Vn]=e),{mapValue:n}}(n,e):t instanceof _i?Ti(t,e):t instanceof Ii?Si(t,e):function(t,e){const n=bi(t,e),r=Ai(n)+Ai(t.Ee);return or(n)&&or(t.Ee)?gi(r):pi(t.serializer,r)}(t,e)}function wi(t,e,n){return t instanceof _i?Ti(t,e):t instanceof Ii?Si(t,e):n}function bi(t,e){return t instanceof Ci?or(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null;var n,r}class Ei extends yi{}class _i extends yi{constructor(t){super(),this.elements=t}}function Ti(t,e){const n=Di(e);for(const r of t.elements)n.some(t=>Yn(t,r))||n.push(r);return{arrayValue:{values:n}}}class Ii extends yi{constructor(t){super(),this.elements=t}}function Si(t,e){let n=Di(e);for(const r of t.elements)n=n.filter(t=>!Yn(t,r));return{arrayValue:{values:n}}}class Ci extends yi{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Ai(t){return On(t.integerValue||t.doubleValue)}function Di(t){return ar(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class ki{constructor(t,e){this.version=t,this.transformResults=e}}class Ni{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ni}static exists(t){return new Ni(void 0,t)}static updateTime(t){return new Ni(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xi(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ri{}function Oi(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new $i(t.key,Ni.none()):new Fi(t.key,t.data,Ni.none());{const n=t.data,r=dr.empty();let i=new Cn(Ke.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Ui(t.key,r,new Dn(i.toArray()),Ni.none())}}function Li(t,e,n){var r;t instanceof Fi?function(t,e,n){const r=t.value.clone(),i=Bi(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ui?function(t,e,n){if(!xi(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Bi(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ji(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Mi(t,e,n,r){return t instanceof Fi?function(t,e,n,r){if(!xi(t.precondition,e))return n;const i=t.value.clone(),s=qi(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ui?function(t,e,n,r){if(!xi(t.precondition,e))return n;const i=qi(t.fieldTransforms,r,e),s=e.data;return s.setAll(ji(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):(i=e,s=n,xi(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Pi(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=bi(r.transform,t||null);null!=i&&(null===n&&(n=dr.empty()),n.set(r.field,i))}return n||null}function Vi(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&qe(n,r,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof _i&&r instanceof _i||n instanceof Ii&&r instanceof Ii?qe(n.elements,r.elements,Yn):n instanceof Ci&&r instanceof Ci?Yn(n.Ee,r.Ee):n instanceof Ei&&r instanceof Ei);var n,r}(t,e)))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}class Fi extends Ri{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ui extends Ri{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ji(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bi(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wi(o,a,n[i]))}return r}function qi(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,vi(t,s,e))}return r}class $i extends Ri{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zi extends Ri{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Gi{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Li(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mi(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mi(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ci();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Oi(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(an.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),di())}isEqual(t){return this.batchId===t.batchId&&qe(this.mutations,t.mutations,(t,e)=>Vi(t,e))&&qe(this.baseMutations,t.baseMutations,(t,e)=>Vi(t,e))}}class Hi{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){_e(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let r=function(){return hi}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hi(t,e,n,r)}}
/**
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
 */class Ki{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Qi{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var Wi,Xi;function Yi(t){if(void 0===t)return ye("GRPC error has no .code"),Ie.UNKNOWN;switch(t){case Wi.OK:return Ie.OK;case Wi.CANCELLED:return Ie.CANCELLED;case Wi.UNKNOWN:return Ie.UNKNOWN;case Wi.DEADLINE_EXCEEDED:return Ie.DEADLINE_EXCEEDED;case Wi.RESOURCE_EXHAUSTED:return Ie.RESOURCE_EXHAUSTED;case Wi.INTERNAL:return Ie.INTERNAL;case Wi.UNAVAILABLE:return Ie.UNAVAILABLE;case Wi.UNAUTHENTICATED:return Ie.UNAUTHENTICATED;case Wi.INVALID_ARGUMENT:return Ie.INVALID_ARGUMENT;case Wi.NOT_FOUND:return Ie.NOT_FOUND;case Wi.ALREADY_EXISTS:return Ie.ALREADY_EXISTS;case Wi.PERMISSION_DENIED:return Ie.PERMISSION_DENIED;case Wi.FAILED_PRECONDITION:return Ie.FAILED_PRECONDITION;case Wi.ABORTED:return Ie.ABORTED;case Wi.OUT_OF_RANGE:return Ie.OUT_OF_RANGE;case Wi.UNIMPLEMENTED:return Ie.UNIMPLEMENTED;case Wi.DATA_LOSS:return Ie.DATA_LOSS;default:return be(39323,{code:t})}}(Xi=Wi||(Wi={}))[Xi.OK=0]="OK",Xi[Xi.CANCELLED=1]="CANCELLED",Xi[Xi.UNKNOWN=2]="UNKNOWN",Xi[Xi.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xi[Xi.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xi[Xi.NOT_FOUND=5]="NOT_FOUND",Xi[Xi.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xi[Xi.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xi[Xi.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xi[Xi.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xi[Xi.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xi[Xi.ABORTED=10]="ABORTED",Xi[Xi.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xi[Xi.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xi[Xi.INTERNAL=13]="INTERNAL",Xi[Xi.UNAVAILABLE=14]="UNAVAILABLE",Xi[Xi.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const Ji=new Jt([4294967295,4294967295],0);function Zi(t){const e=Pe().encode(t),n=new Zt;return n.update(e),new Uint8Array(n.digest())}function ts(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jt([n,r],0),new Jt([i,s],0)]}class es{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ns(`Invalid padding: ${e}`);if(n<0)throw new ns(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ns(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ns(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Jt.fromNumber(this.fe)}pe(t,e,n){let r=t.add(e.multiply(Jt.fromNumber(n)));return 1===r.compare(Ji)&&(r=new Jt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.fe)return!1;const e=Zi(t),[n,r]=ts(e);for(let i=0;i<this.hashCount;i++){const t=this.pe(n,r,i);if(!this.ye(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new es(i,r,e);return n.forEach(t=>s.insert(t)),s}insert(t){if(0===this.fe)return;const e=Zi(t),[n,r]=ts(e);for(let i=0;i<this.hashCount;i++){const t=this.pe(n,r,i);this.we(t)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class rs{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,is.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new rs(an.min(),r,new Tn(Fe),ri(),di())}}class is{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new is(n,e,di(),di(),di())}}
/**
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
 */class ss{constructor(t,e,n,r){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=r}}class os{constructor(t,e){this.targetId=t,this.De=e}}class as{constructor(t,e,n=Nn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class cs{constructor(){this.ve=0,this.Ce=ls(),this.Fe=Nn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return 0!==this.ve}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=di(),e=di(),n=di();return this.Ce.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:be(38017,{changeType:i})}}),new is(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=ls()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class us{constructor(t){this.We=t,this.Ge=new Map,this.ze=ri(),this.je=hs(),this.Je=hs(),this.He=new Tn(Fe)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:be(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((t,n)=>{this.nt(n)&&e(n)})}it(t){const e=t.targetId,n=t.De.count,r=this.st(e);if(r){const i=r.target;if(jr(i))if(0===n){const t=new Qe(i.path);this.Xe(e,t,pr.newNoDocument(t,an.min()))}else _e(1===n,20013,{expectedCount:n});else{const r=this.ot(e);if(r!==n){const n=this._t(t),i=n?this.ut(n,t,r):1;if(0!==i){this.rt(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,t)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ln(n).toUint8Array()}catch(a){if(a instanceof kn)return ve("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new es(s,r,i)}catch(a){return ve(a instanceof ns?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.fe?null:o}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.We.lt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.Xe(e,n,null),r++)}),r}Pt(t){const e=new Map;this.Ge.forEach((n,r)=>{const i=this.st(r);if(i){if(n.current&&jr(i.target)){const e=new Qe(i.target.path);this.Tt(e).has(r)||this.It(r,e)||this.Xe(r,e,pr.newNoDocument(e,t))}n.Ne&&(e.set(r,n.Le()),n.ke())}});let n=di();this.Je.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.st(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.ze.forEach((e,n)=>n.setReadTime(t));const r=new rs(t,e,this.He,this.ze,n);return this.ze=ri(),this.je=hs(),this.Je=hs(),this.He=new Tn(Fe),r}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const r=this.tt(t);this.It(t,e)?r.qe(e,1):r.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new cs,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new Cn(Fe),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new Cn(Fe),this.je=this.je.insert(t,e)),e}nt(t){const e=null!==this.st(t);return e||me("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new cs),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function hs(){return new Tn(Qe.comparator)}function ls(){return new Tn(Qe.comparator)}const ds=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fs=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ps=(()=>({and:"AND",or:"OR"}))();class gs{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ms(t,e){return t.useProto3Json||mn(e)?e:{value:e}}function ys(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vs(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ws(t,e){return ys(t,e.toTimestamp())}function bs(t){return _e(!!t,49232),an.fromTimestamp(function(t){const e=Rn(t);return new on(e.seconds,e.nanos)}(t))}function Es(t,e){return _s(t,e).canonicalString()}function _s(t,e){const n=(r=t,new Ge(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===e?n:n.child(e)}function Ts(t){const e=Ge.fromString(t);return _e(Bs(e),10190,{key:e.toString()}),e}function Is(t,e){return Es(t.databaseId,e.path)}function Ss(t,e){const n=Ts(e);if(n.get(1)!==t.databaseId.projectId)throw new Se(Ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Se(Ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Qe(Ds(n))}function Cs(t,e){return Es(t.databaseId,e)}function As(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ds(t){return _e(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function ks(t,e,n){return{name:Is(t,e),fields:n.value.mapValue.fields}}function Ns(t,e){return{documents:[Cs(t,e.path)]}}function xs(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cs(t,i);const s=function(t){if(0!==t.length)return Us(_r.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map(t=>{return{field:Vs((e=t).field),direction:Ls(e.dir)};var e})}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ms(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{Vt:n,parent:i};var c}function Rs(t){let e=function(t){const e=Ts(t);return 4===e.length?Ge.emptyPath():Ds(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(1===r,65062);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Os(t);return e instanceof _r&&Ir(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>{return new vr(Fs((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e}));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,mn(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new gr(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new gr(n,e)}(n.endAt)),function(t,e,n,r,i,s,o,a){return new Br(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function Os(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fs(t.unaryFilter.field);return Er.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fs(t.unaryFilter.field);return Er.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fs(t.unaryFilter.field);return Er.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fs(t.unaryFilter.field);return Er.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(t):void 0!==t.fieldFilter?(e=t,Er.create(Fs(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return _r.create(t.compositeFilter.filters.map(t=>Os(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(t.compositeFilter.op))}(t):be(30097,{filter:t});var e}function Ls(t){return ds[t]}function Ms(t){return fs[t]}function Ps(t){return ps[t]}function Vs(t){return{fieldPath:t.canonicalString()}}function Fs(t){return Ke.fromServerFormat(t.fieldPath)}function Us(t){return t instanceof Er?function(t){if("=="===t.op){if(ur(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NAN"}};if(cr(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ur(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NAN"}};if(cr(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(t.field),op:Ms(t.op),value:t.value}}}(t):t instanceof _r?function(t){const e=t.getFilters().map(t=>Us(t));return 1===e.length?e[0]:{compositeFilter:{op:Ps(t.op),filters:e}}}(t):be(54877,{filter:t})}function js(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class qs{constructor(t,e,n,r,i=an.min(),s=an.min(),o=Nn.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new qs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qs(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class $s{constructor(t){this.gt=t}}function zs(t){const e=Rs({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Qr(e,e.limit,"L"):e}
/**
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
 */class Gs{constructor(){this.Dn=new Hs}addToCollectionParentIndex(t,e){return this.Dn.add(e),fn.resolve()}getCollectionParents(t,e){return fn.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return fn.resolve()}deleteFieldIndex(t,e){return fn.resolve()}deleteAllFieldIndexes(t){return fn.resolve()}createTargetIndexes(t,e){return fn.resolve()}getDocumentsMatchingTarget(t,e){return fn.resolve(null)}getIndexType(t,e){return fn.resolve(0)}getFieldIndexes(t,e){return fn.resolve([])}getNextCollectionGroupToUpdate(t){return fn.resolve(null)}getMinOffset(t,e){return fn.resolve(un.min())}getMinOffsetFromCollectionGroup(t,e){return fn.resolve(un.min())}updateCollectionGroup(t,e,n){return fn.resolve()}updateIndexEntries(t,e){return fn.resolve()}}class Hs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Cn(Ge.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Cn(Ge.comparator)).toArray()}}
/**
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
 */const Ks={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qs=41943040;class Ws{static withCacheSize(t){return new Ws(t,Ws.DEFAULT_COLLECTION_PERCENTILE,Ws.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */Ws.DEFAULT_COLLECTION_PERCENTILE=10,Ws.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ws.DEFAULT=new Ws(Qs,Ws.DEFAULT_COLLECTION_PERCENTILE,Ws.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ws.DISABLED=new Ws(-1,0,0);
/**
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
 */
class Xs{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Xs(0)}static ur(){return new Xs(-1)}}
/**
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
 */const Ys="LruGarbageCollector";function Js([t,e],[n,r]){const i=Fe(t,n);return 0===i?Fe(e,r):i}class Zs{constructor(t){this.Tr=t,this.buffer=new Cn(Js),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Js(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class to{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return null!==this.Ar}Rr(t){me(Ys,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pn(t)?me(Ys,"Ignoring IndexedDB error during garbage collection: ",t):await dn(t)}await this.Rr(3e5)})}}class eo{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return fn.resolve(gn.ue);const n=new Zs(e);return this.Vr.forEachTarget(t,t=>n.Er(t.sequenceNumber)).next(()=>this.Vr.gr(t,t=>n.Er(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector","Garbage collection skipped; disabled"),fn.resolve(Ks)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ks):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),ge()<=k.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${t} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),fn.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
/**
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
 */
class no{constructor(){this.changes=new ei(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?fn.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class ro{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class io{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Mi(n.mutation,t,Dn.empty(),on.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,di()).next(()=>e))}getLocalViewOfDocuments(t,e,n=di()){const r=ai();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=si();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=ai();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,di()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=ri();const s=ui(),o=ui();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ui)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Mi(o.mutation,e,o.mutation.getFieldMask(),on.now())):s.set(e.key,Dn.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new ro(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=ui();let r=new Tn((t,e)=>t-e),i=di();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Dn.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||di()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ci();c.forEach(t=>{if(!i.has(t)){const r=Oi(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return fn.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return i=e,Qe.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):zr(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r);var i}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):fn.resolve(ai());let o=-1,a=i;return s.next(e=>fn.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?fn.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,di())).next(t=>({batchId:o,changes:oi(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Qe(e)).next(t=>{let e=si();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=si();return this.indexManager.getCollectionParents(t,i).next(o=>fn.forEach(o,o=>{const a=(c=e,u=o.child(i),new Br(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r))).next(t=>{i.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,pr.newInvalidDocument(r)))});let n=si();return t.forEach((t,r)=>{const s=i.get(t);void 0!==s&&Mi(s.mutation,r,Dn.empty(),on.now()),Jr(e,r)&&(n=n.insert(t,r))}),n})}}
/**
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
 */class so{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return fn.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,{id:(n=e).id,version:n.version,createTime:bs(n.createTime)}),fn.resolve();var n}getNamedQuery(t,e){return fn.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,{name:(n=e).name,query:zs(n.bundledQuery),readTime:bs(n.readTime)}),fn.resolve();var n}}
/**
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
 */class oo{constructor(){this.overlays=new Tn(Qe.comparator),this.kr=new Map}getOverlay(t,e){return fn.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ai();return fn.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.wt(t,e,r)}),fn.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.kr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.kr.delete(n)),fn.resolve()}getOverlaysForCollection(t,e,n){const r=ai(),i=e.length+1,s=new Qe(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return fn.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Tn((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ai(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ai(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=r)););return fn.resolve(o)}wt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.kr.get(r.largestBatchId).delete(n.key);this.kr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ki(e,n));let i=this.kr.get(e);void 0===i&&(i=di(),this.kr.set(e,i)),this.kr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.sessionToken=Nn.EMPTY_BYTE_STRING}getSessionToken(t){return fn.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,fn.resolve()}}
/**
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
 */class co{constructor(){this.qr=new Cn(uo.Qr),this.$r=new Cn(uo.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new uo(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new uo(t,e))}Gr(t,e){t.forEach(t=>this.removeReference(t,e))}zr(t){const e=new Qe(new Ge([])),n=new uo(e,t),r=new uo(e,t+1),i=[];return this.$r.forEachInRange([n,r],t=>{this.Wr(t),i.push(t.key)}),i}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new Qe(new Ge([])),n=new uo(e,t),r=new uo(e,t+1);let i=di();return this.$r.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new uo(t,0),n=this.qr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class uo{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return Qe.comparator(t.key,e.key)||Fe(t.Hr,e.Hr)}static Ur(t,e){return Fe(t.Hr,e.Hr)||Qe.comparator(t.key,e.key)}}
/**
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
 */class ho{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new Cn(uo.Qr)}checkEmpty(t){return fn.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Gi(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Yr=this.Yr.add(new uo(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return fn.resolve(s)}lookupMutationBatch(t,e){return fn.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),i=r<0?0:r;return fn.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return fn.resolve(0===this.mutationQueue.length?-1:this.er-1)}getAllMutationBatches(t){return fn.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new uo(e,0),r=new uo(e,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,r],t=>{const e=this.Zr(t.Hr);i.push(e)}),fn.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Cn(Fe);return e.forEach(t=>{const e=new uo(t,0),r=new uo(t,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([e,r],t=>{n=n.add(t.Hr)})}),fn.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Qe.isDocumentKey(i)||(i=i.child(""));const s=new uo(new Qe(i),0);let o=new Cn(Fe);return this.Yr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Hr)),!0)},s),fn.resolve(this.ei(o))}ei(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){_e(0===this.ti(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Yr;return fn.forEach(e.mutations,r=>{const i=new uo(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Yr=n})}rr(t){}containsKey(t,e){const n=new uo(e,0),r=this.Yr.firstAfterOrEqual(n);return fn.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,fn.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class lo{constructor(t){this.ni=t,this.docs=new Tn(Qe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return fn.resolve(n?n.document.mutableCopy():pr.newInvalidDocument(e))}getEntries(t,e){let n=ri();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():pr.newInvalidDocument(t))}),fn.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=ri();const s=e.path,o=new Qe(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||hn(cn(o),n)<=0||(r.has(o.key)||Jr(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return fn.resolve(i)}getAllFromCollectionGroup(t,e,n,r){be(9500)}ri(t,e){return fn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new fo(this)}getSize(t){return fn.resolve(this.size)}}class fo extends no{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Or.addEntry(t,r)):this.Or.removeEntry(n)}),fn.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}
/**
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
 */class po{constructor(t){this.persistence=t,this.ii=new ei(t=>Fr(t),Ur),this.lastRemoteSnapshotVersion=an.min(),this.highestTargetId=0,this.si=0,this.oi=new co,this.targetCount=0,this._i=Xs.ar()}forEachTarget(t,e){return this.ii.forEach((t,n)=>e(n)),fn.resolve()}getLastRemoteSnapshotVersion(t){return fn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return fn.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),fn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),fn.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Xs(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,fn.resolve()}updateTargetData(t,e){return this.hr(e),fn.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,fn.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ii.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ii.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),fn.waitFor(i).next(()=>r)}getTargetCount(t){return fn.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return fn.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),fn.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),fn.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),fn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return fn.resolve(n)}containsKey(t,e){return fn.resolve(this.oi.containsKey(e))}}
/**
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
 */class go{constructor(t,e){this.ai={},this.overlays={},this.ui=new gn(0),this.ci=!1,this.ci=!0,this.li=new ao,this.referenceDelegate=t(this),this.hi=new po(this),this.indexManager=new Gs,this.remoteDocumentCache=new lo(t=>this.referenceDelegate.Pi(t)),this.serializer=new $s(e),this.Ti=new so(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new oo,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new ho(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){me("MemoryPersistence","Starting transaction:",t);const r=new mo(this.ui.next());return this.referenceDelegate.Ii(),n(r).next(t=>this.referenceDelegate.di(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ei(t,e){return fn.or(Object.values(this.ai).map(n=>()=>n.containsKey(t,e)))}}class mo extends ln{constructor(t){super(),this.currentSequenceNumber=t}}class yo{constructor(t){this.persistence=t,this.Ai=new co,this.Ri=null}static Vi(t){return new yo(t)}get mi(){if(this.Ri)return this.Ri;throw be(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),fn.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),fn.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),fn.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(t=>this.mi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.mi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fn.forEach(this.mi,n=>{const r=Qe.fromPath(n);return this.fi(t,r).next(t=>{t||e.removeEntry(r,an.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(t=>{t?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return fn.or([()=>fn.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class vo{constructor(t,e){this.persistence=t,this.gi=new ei(t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wn(e)),e=vn(t.get(n),e);return wn(e)}(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=function(t,e){return new eo(t,e)}(this,e)}static Vi(t,e){return new vo(t,e)}Ii(){}di(t){return fn.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}yr(t){let e=0;return this.gr(t,t=>{e++}).next(()=>e)}gr(t,e){return fn.forEach(this.gi,(n,r)=>this.Sr(t,n,r).next(t=>t?fn.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(t,r=>this.Sr(t,r,e).next(t=>{t||(n++,i.removeEntry(r,an.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),fn.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),fn.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),fn.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),fn.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ir(t.data.value)),e}Sr(t,e,n){return fn.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.gi.get(e);return fn.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
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
 */class wo{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=r}static Es(t,e){let n=di(),r=di();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wo(t,e.fromCache,n,r)}}
/**
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
 */class bo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class Eo{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=g()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.ps(t,e).next(t=>{i.result=t}).next(()=>{if(!i.result)return this.ys(t,e,r,n).next(t=>{i.result=t})}).next(()=>{if(i.result)return;const n=new bo;return this.ws(t,e,n).next(r=>{if(i.result=r,this.Rs)return this.Ss(t,e,n,r.size)})}).next(()=>i.result)}Ss(t,e,n,r){return n.documentReadCount<this.Vs?(ge()<=k.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",Yr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),fn.resolve()):(ge()<=k.DEBUG&&me("QueryEngine","Query:",Yr(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.fs*r?(ge()<=k.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",Yr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Hr(e))):fn.resolve())}ps(t,e){if($r(e))return fn.resolve(null);let n=Hr(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Qr(e,null,"F"),n=Hr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=di(...r);return this.gs.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.bs(e,r);return this.Ds(e,s,i,n.readTime)?this.ps(t,Qr(e,null,"F")):this.vs(t,s,e,n)}))})))}ys(t,e,n,r){return $r(e)||r.isEqual(an.min())?fn.resolve(null):this.gs.getDocuments(t,n).next(i=>{const s=this.bs(e,i);return this.Ds(e,s,n,r)?fn.resolve(null):(ge()<=k.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yr(e)),this.vs(t,s,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=an.fromTimestamp(1e9===r?new on(n+1,0):new on(n,r));return new un(i,Qe.empty(),e)}(r,-1)).next(t=>t))})}bs(t,e){let n=new Cn(Zr(t));return e.forEach((e,r)=>{Jr(t,r)&&(n=n.add(r))}),n}Ds(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(t,e,n){return ge()<=k.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",Yr(e)),this.gs.getDocumentsMatchingQuery(t,e,un.min(),n)}vs(t,e,n,r){return this.gs.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
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
 */const _o="LocalStore";class To{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.Fs=new Tn(Fe),this.Ms=new ei(t=>Fr(t),Ur),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new io(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}async function Io(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=di();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Bs:t,removedBatchIds:i,addedBatchIds:s}))})})}function So(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Co(t,e){const n=Te(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.hi.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.hi.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(Nn.EMPTY_BYTE_STRING,an.min()).withLastLimboFreeSnapshotVersion(an.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;if(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.hi.updateTargetData(t,u))});let a=ri(),c=di();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(function(t,e,n){let r=di(),i=di();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=ri();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(an.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):me(_o,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Ls:r,ks:i}})}(t,s,e.documentUpdates).next(t=>{a=t.Ls,c=t.ks})),!r.isEqual(an.min())){const e=n.hi.getLastRemoteSnapshotVersion(t).next(e=>n.hi.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return fn.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Fs=i,t))}function Ao(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}async function Do(t,e,n){const r=Te(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(o){if(!pn(o))throw o;me(_o,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function ko(t,e,n){const r=Te(t);let i=an.min(),s=di();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=Te(t),i=r.Ms.get(n);return void 0!==i?fn.resolve(r.Fs.get(i)):r.hi.getTargetData(e,n)}(r,t,Hr(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Cs.getDocumentsMatchingQuery(t,e,n?i:an.min(),n?s:di())).next(t=>(function(t,e,n){let r=t.xs.get(e)||an.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.xs.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,qs:s})))}class No{constructor(){this.activeTargetIds=fi}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xo{constructor(){this.Fo=new No,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new No,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Ro{xo(t){}shutdown(){}}
/**
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
 */const Oo="ConnectivityMonitor";class Lo{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){me(Oo,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){me(Oo,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Mo=null;function Po(){return null===Mo?Mo=268435456+Math.round(2147483648*Math.random()):Mo++,"0x"+Mo.toString(16)
/**
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
 */}const Vo="RestConnection",Fo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Uo{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.Ko=this.databaseId.database===$n?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,i){const s=Po(),o=this.Go(t,e.toUriEncodedString());me(Vo,`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(a,r,i);const{host:c}=new URL(o),u=l(c);return this.jo(t,o,a,n,u).then(e=>(me(Vo,`Received RPC '${t}' ${s}: `,e),e),e=>{throw ve(Vo,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}Jo(t,e,n,r,i,s){return this.Wo(t,e,n,r,i)}zo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+fe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Go(t,e){const n=Fo[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}
/**
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
 */class jo{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}
/**
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
 */const Bo="WebChannelConnection";class qo extends Uo{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,r,i){const s=Po();return new Promise((i,o)=>{const a=new ee;a.setWithCredentials(!0),a.listenOnce(re.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ie.NO_ERROR:const e=a.getResponseJson();me(Bo,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case ie.TIMEOUT:me(Bo,`RPC '${t}' ${s} timed out`),o(new Se(Ie.DEADLINE_EXCEEDED,"Request time out"));break;case ie.HTTP_ERROR:const n=a.getStatus();if(me(Bo,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ie).indexOf(e)>=0?e:Ie.UNKNOWN}(e.status);o(new Se(t,e.message))}else o(new Se(Ie.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Se(Ie.UNAVAILABLE,"Connection failed."));break;default:be(9055,{c_:t,streamId:s,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{me(Bo,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);me(Bo,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)})}P_(t,e,n){const r=Po(),i=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ce(),o=ae(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.zo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");me(Bo,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=s.createWebChannel(u,a);this.T_(h);let l=!1,d=!1;const f=new jo({Ho:e=>{d?me(Bo,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(me(Bo,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),me(Bo,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},Yo:()=>h.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(e){setTimeout(()=>{throw e},0)}})};return p(h,ne.EventType.OPEN,()=>{d||(me(Bo,`RPC '${t}' stream ${r} transport opened.`),f.s_())}),p(h,ne.EventType.CLOSE,()=>{d||(d=!0,me(Bo,`RPC '${t}' stream ${r} transport closed`),f.__(),this.I_(h))}),p(h,ne.EventType.ERROR,e=>{d||(d=!0,ve(Bo,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),f.__(new Se(Ie.UNAVAILABLE,"The operation could not be completed")))}),p(h,ne.EventType.MESSAGE,e=>{var n;if(!d){const i=e.data[0];_e(!!i,16349);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){me(Bo,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Wi[t];if(void 0!==e)return Yi(e)}(e),i=o.message;void 0===n&&(n=Ie.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.__(new Se(n,i)),h.close()}else me(Bo,`RPC '${t}' stream ${r} received:`,i),f.a_(i)}}),p(o,oe.STAT_EVENT,e=>{e.stat===se.PROXY?me(Bo,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===se.NOPROXY&&me(Bo,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.o_()},0),f}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function $o(){return"undefined"!=typeof document?document:null}
/**
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
 */function zo(t){return new gs(t,!0)}
/**
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
 */class Go{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,e-n);r>0&&me("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
/**
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
 */const Ho="PersistentStream";class Ko{constructor(t,e,n,r,i,s,o,a){this.Fi=t,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Go(t,e)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.C_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,4!==t?this.F_.reset():e&&e.code===Ie.RESOURCE_EXHAUSTED?(ye(e.toString()),ye("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===Ie.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.b_===e&&this.W_(t,n)},e=>{t(()=>{const t=new Se(Ie.UNKNOWN,"Fetching auth token failed: "+e.message);return this.G_(t)})})}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(t=>{n(()=>this.G_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.C_?this.j_(t):this.onNext(t))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return me(Ho,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(me(Ho,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qo extends Ko{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:be(39313,{state:r}),s=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(_e(void 0===e||"string"==typeof e,58123),Nn.fromBase64String(e||"")):(_e(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),Nn.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Ie.UNKNOWN:Yi(t.code);return new Se(e,t.message||"")}(a);n=new as(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ss(t,r.document.name),s=bs(r.document.updateTime),o=r.document.createTime?bs(r.document.createTime):an.min(),a=new dr({mapValue:{fields:r.document.fields}}),c=pr.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ss(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ss(t,r.document),s=r.readTime?bs(r.readTime):an.min(),o=pr.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ss([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ss(t,r.document),s=r.removedTargetIds||[];n=new ss([],s,i,null)}else{if(!("filter"in e))return be(11601,{At:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Qi(r,i),o=t.targetId;n=new os(o,s)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return an.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?an.min():e.readTime?bs(e.readTime):an.min()}(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=As(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=jr(r)?{documents:Ns(t,r)}:{query:xs(t,r).Vt},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=vs(t,e.resumeToken);const r=ms(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(an.min())>0){n.readTime=ys(t,e.snapshotVersion.toTimestamp());const r=ms(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.k_(e)}}class Wo extends Ko{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return _e(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,_e(!t.writeResults||0===t.writeResults.length,55816),this.listener.ea()}onNext(t){_e(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=function(t,e){return t&&t.length>0?(_e(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?bs(t.updateTime):bs(e);return n.isEqual(an.min())&&(n=bs(e)),new ki(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=bs(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=As(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>function(t,e){let n;if(e instanceof Fi)n={update:ks(t,e.key,e.value)};else if(e instanceof $i)n={delete:Is(t,e.key)};else if(e instanceof Ui)n={update:ks(t,e.key,e.data),updateMask:js(e.fieldMask)};else{if(!(e instanceof zi))return be(16599,{Rt:e.type});n={verify:Is(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof Ei)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _i)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ii)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ci)return{fieldPath:e.field.canonicalString(),increment:n.Ee};throw be(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:ws(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:be(27497))),n;var r,i}(this.serializer,t))};this.k_(e)}}
/**
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
 */class Xo{}class Yo extends Xo{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new Se(Ie.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(t,_s(e,n),r,i,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===Ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Se(Ie.UNKNOWN,t.toString())})}Jo(t,e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Jo(t,_s(e,n),r,s,o,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===Ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Se(Ie.UNKNOWN,t.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Jo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,"Online"===t&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ye(e),this._a=!1):me("OnlineStateTracker",e)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}
/**
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
 */const Zo="RemoteStore";class ta{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(t=>{n.enqueueAndForget(async()=>{ua(this)&&(me(Zo,"Restarting streams for network reachability change."),await async function(t){const e=Te(t);e.Ia.add(4),await na(e),e.Aa.set("Unknown"),e.Ia.delete(4),await ea(e)}(this))})}),this.Aa=new Jo(n,r)}}async function ea(t){if(ua(t))for(const e of t.da)await e(!0)}async function na(t){for(const e of t.da)await e(!1)}function ra(t,e){const n=Te(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),ca(n)?aa(n):Aa(n).x_()&&sa(n,e))}function ia(t,e){const n=Te(t),r=Aa(n);n.Ta.delete(e),r.x_()&&oa(n,e),0===n.Ta.size&&(r.x_()?r.B_():ua(n)&&n.Aa.set("Unknown"))}function sa(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(an.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Aa(t).H_(e)}function oa(t,e){t.Ra.$e(e),Aa(t).Y_(e)}function aa(t){t.Ra=new us({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Aa(t).start(),t.Aa.aa()}function ca(t){return ua(t)&&!Aa(t).M_()&&t.Ta.size>0}function ua(t){return 0===Te(t).Ia.size}function ha(t){t.Ra=void 0}async function la(t){t.Aa.set("Online")}async function da(t){t.Ta.forEach((e,n)=>{sa(t,e)})}async function fa(t,e){ha(t),ca(t)?(t.Aa.la(e),aa(t)):t.Aa.set("Unknown")}async function pa(t,e,n){if(t.Aa.set("Online"),e instanceof as&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ta.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ta.delete(r),t.Ra.removeTarget(r))}(t,e)}catch(r){me(Zo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof ss?t.Ra.Ye(e):e instanceof os?t.Ra.it(e):t.Ra.et(e),!n.isEqual(an.min()))try{const e=await So(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Ra.Pt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Ta.get(r);i&&t.Ta.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Ta.get(e);if(!r)return;t.Ta.set(e,r.withResumeToken(Nn.EMPTY_BYTE_STRING,r.snapshotVersion)),oa(t,e);const i=new qs(r.target,e,n,r.sequenceNumber);sa(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){me(Zo,"Failed to raise snapshot:",i),await ga(t,i)}}async function ga(t,e,n){if(!pn(e))throw e;t.Ia.add(1),await na(t),t.Aa.set("Offline"),n||(n=()=>So(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{me(Zo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ea(t)})}function ma(t,e){return e().catch(n=>ga(t,n,e))}async function ya(t){const e=Te(t),n=Da(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:-1;for(;va(e);)try{const t=await Ao(e.localStore,r);if(null===t){0===e.Pa.length&&n.B_();break}r=t.batchId,wa(e,t)}catch(i){await ga(e,i)}ba(e)&&Ea(e)}function va(t){return ua(t)&&t.Pa.length<10}function wa(t,e){t.Pa.push(e);const n=Da(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function ba(t){return ua(t)&&!Da(t).M_()&&t.Pa.length>0}function Ea(t){Da(t).start()}async function _a(t){Da(t).na()}async function Ta(t){const e=Da(t);for(const n of t.Pa)e.X_(n.mutations)}async function Ia(t,e,n){const r=t.Pa.shift(),i=Hi.from(r,e,n);await ma(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ya(t)}async function Sa(t,e){e&&Da(t).Z_&&await async function(t,e){if(function(t){switch(t){case Ie.OK:return be(64938);case Ie.CANCELLED:case Ie.UNKNOWN:case Ie.DEADLINE_EXCEEDED:case Ie.RESOURCE_EXHAUSTED:case Ie.INTERNAL:case Ie.UNAVAILABLE:case Ie.UNAUTHENTICATED:return!1;case Ie.INVALID_ARGUMENT:case Ie.NOT_FOUND:case Ie.ALREADY_EXISTS:case Ie.PERMISSION_DENIED:case Ie.FAILED_PRECONDITION:case Ie.ABORTED:case Ie.OUT_OF_RANGE:case Ie.UNIMPLEMENTED:case Ie.DATA_LOSS:return!0;default:return be(15467,{code:t})}}(n=e.code)&&n!==Ie.ABORTED){const n=t.Pa.shift();Da(t).N_(),await ma(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await ya(t)}var n}(t,e),ba(t)&&Ea(t)}async function Ca(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),me(Zo,"RemoteStore received new credentials");const r=ua(n);n.Ia.add(3),await na(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ea(n)}function Aa(t){return t.Va||(t.Va=function(t,e,n){const r=Te(t);return r.ia(),new Qo(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Zo:la.bind(null,t),e_:da.bind(null,t),n_:fa.bind(null,t),J_:pa.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),ca(t)?aa(t):t.Aa.set("Unknown")):(await t.Va.stop(),ha(t))})),t.Va}function Da(t){return t.ma||(t.ma=function(t,e,n){const r=Te(t);return r.ia(),new Wo(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:_a.bind(null,t),n_:Sa.bind(null,t),ea:Ta.bind(null,t),ta:Ia.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await ya(t)):(await t.ma.stop(),t.Pa.length>0&&(me(Zo,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma
/**
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
 */}class ka{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ka(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Se(Ie.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Na(t,e){if(ye("AsyncQueue",`${e}: ${t}`),pn(t))return new Se(Ie.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class xa{static emptySet(t){return new xa(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Qe.comparator(e.key,n.key):(t,e)=>Qe.comparator(t.key,e.key),this.keyedMap=si(),this.sortedSet=new Tn(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof xa))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new xa;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class Ra{constructor(){this.fa=new Tn(Qe.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?0!==t.type&&3===n.type?this.fa=this.fa.insert(e,t):3===t.type&&1!==n.type?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.fa=this.fa.remove(e):1===t.type&&2===n.type?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):be(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,n)=>{t.push(n)}),t}}class Oa{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new Oa(t,e,xa.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class La{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class Ma{constructor(){this.queries=Pa(),this.onlineState="Unknown",this.Da=new Set}terminate(){!function(t,e){const n=Te(t),r=n.queries;n.queries=Pa(),r.forEach((t,n)=>{for(const r of n.wa)r.onError(e)})}(this,new Se(Ie.ABORTED,"Firestore shutting down"))}}function Pa(){return new ei(t=>Xr(t),Wr)}async function Va(t,e){const n=Te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new La,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const t=Na(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(t)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Ba(n)}async function Fa(t,e){const n=Te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.wa.indexOf(e);t>=0&&(s.wa.splice(t,1),0===s.wa.length?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ua(t,e){const n=Te(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.wa)t.Ca(i)&&(r=!0);e.ya=i}}r&&Ba(n)}function ja(t,e,n){const r=Te(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Ba(t){t.Da.forEach(t=>{t.next()})}var qa,$a;($a=qa||(qa={})).Fa="default",$a.Cache="cache";class za{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Oa(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache)return!0;if(!this.ba())return!0;const n="Offline"!==e;return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}La(t){t=Oa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==qa.Cache}}
/**
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
 */class Ga{constructor(t){this.key=t}}class Ha{constructor(t){this.key=t}}class Ka{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=di(),this.mutatedKeys=di(),this.Xa=Zr(t),this.eu=new xa(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new Ra,r=e?e.eu:this.eu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=Jr(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.iu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Xa(h,a)>0||c&&this.Xa(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{eu:s,ru:n,Ds:o,mutatedKeys:i}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const s=t.ru.pa();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{At:t})}};return n(t)-n(e)}(t.type,e.type)||this.Xa(t.doc,e.doc)),this.su(n),r=null!=r&&r;const o=e&&!r?this.ou():[],a=0===this.Za.size&&this.current&&!r?1:0,c=a!==this.Ya;return this.Ya=a,0!==s.length||c?{snapshot:new Oa(this.query,t.eu,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:o}:{_u:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ra,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=di(),this.eu.forEach(t=>{this.au(t.key)&&(this.Za=this.Za.add(t.key))});const e=[];return t.forEach(t=>{this.Za.has(t)||e.push(new Ha(t))}),this.Za.forEach(n=>{t.has(n)||e.push(new Ga(n))}),e}uu(t){this.Ha=t.qs,this.Za=di();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Oa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,0===this.Ya,this.hasCachedResults)}}const Qa="SyncEngine";class Wa{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Xa{constructor(t){this.key=t,this.lu=!1}}class Ya{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.hu={},this.Pu=new ei(t=>Xr(t),Wr),this.Tu=new Map,this.Iu=new Set,this.du=new Tn(Qe.comparator),this.Eu=new Map,this.Au=new co,this.Ru={},this.Vu=new Map,this.mu=Xs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}async function Ja(t,e,n=!0){const r=wc(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await tc(r,e,n,!0),i}async function Za(t,e){const n=wc(t);await tc(n,e,!0,!1)}async function tc(t,e,n,r){const i=await function(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.hi.getTargetData(t,e).next(i=>i?(r=i,fn.resolve(r)):n.hi.allocateTargetId(t).next(i=>(r=new qs(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.hi.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Fs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(t.targetId,t),n.Ms.set(e,t.targetId)),t})}(t.localStore,Hr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(t,e,n,r,i){t.gu=(e,n,r)=>async function(t,e,n,r){let i=e.view.nu(n);i.Ds&&(i=await ko(t.localStore,e.query,!1).then(({documents:t})=>e.view.nu(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return fc(t,e.targetId,a._u),a.snapshot}(t,e,n,r);const s=await ko(t.localStore,e,!0),o=new Ka(e,s.qs),a=o.nu(s.documents),c=is.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);fc(t,n,u._u);const h=new Wa(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&ra(t.remoteStore,i),a}async function ec(t,e,n){const r=Te(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(t=>!Wr(t,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Do(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ia(r.remoteStore,i.targetId),lc(r,i.targetId)}).catch(dn)):(lc(r,i.targetId),await Do(r.localStore,i.targetId,!0))}async function nc(t,e){const n=Te(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ia(n.remoteStore,r.targetId))}async function rc(t,e,n){const r=function(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ac.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cc.bind(null,e),e}(t);try{const t=await function(t,e){const n=Te(t),r=on.now(),i=e.reduce((t,e)=>t.add(e.key),di());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=ri(),c=di();return n.Os.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=Pi(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Ui(t.key,e,fr(e.value.mapValue),Ni.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:oi(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ru[t.currentUser.toKey()];r||(r=new Tn(Fe)),r=r.insert(e,n),t.Ru[t.currentUser.toKey()]=r}(r,t.batchId,n),await mc(r,t.changes),await ya(r.remoteStore)}catch(i){const t=Na(i,"Failed to persist write");n.reject(t)}}async function ic(t,e){const n=Te(t);try{const t=await Co(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Eu.get(e);r&&(_e(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.lu=!0:t.modifiedDocuments.size>0?_e(r.lu,14607):t.removedDocuments.size>0&&(_e(r.lu,42227),r.lu=!1))}),await mc(n,t,e)}catch(r){await dn(r)}}function sc(t,e,n){const r=Te(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Pu.forEach((n,r)=>{const i=r.view.va(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=Te(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.wa)i.va(e)&&(r=!0)}),r&&Ba(n)}(r.eventManager,e),t.length&&r.hu.J_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oc(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let t=new Tn(Qe.comparator);t=t.insert(s,pr.newNoDocument(s,an.min()));const n=di().add(s),i=new rs(an.min(),new Map,new Tn(Fe),t,n);await ic(r,i),r.du=r.du.remove(s),r.Eu.delete(e),gc(r)}else await Do(r.localStore,e,!1).then(()=>lc(r,e,n)).catch(dn)}async function ac(t,e){const n=Te(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=fn.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);_e(null!==s,48541),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=di();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);hc(n,r,null),uc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mc(n,t)}catch(i){await dn(i)}}async function cc(t,e,n){const r=Te(t);try{const t=await function(t,e){const n=Te(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(_e(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);hc(r,e,n),uc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mc(r,t)}catch(i){await dn(i)}}function uc(t,e){(t.Vu.get(e)||[]).forEach(t=>{t.resolve()}),t.Vu.delete(e)}function hc(t,e,n){const r=Te(t);let i=r.Ru[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function lc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(e=>{t.Au.containsKey(e)||dc(t,e)})}function dc(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);null!==n&&(ia(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),gc(t))}function fc(t,e,n){for(const r of n)r instanceof Ga?(t.Au.addReference(r.key,e),pc(t,r)):r instanceof Ha?(me(Qa,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||dc(t,r.key)):be(19791,{yu:r})}function pc(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(me(Qa,"New document in limbo: "+n),t.Iu.add(r),gc(t))}function gc(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Qe(Ge.fromString(e)),r=t.mu.next();t.Eu.set(r,new Xa(n)),t.du=t.du.insert(n,r),ra(t.remoteStore,new qs(Hr(qr(n.path)),r,"TargetPurposeLimboResolution",gn.ue))}}async function mc(t,e,n){const r=Te(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((t,a)=>{o.push(r.gu(a,e,n).then(t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=wo.Es(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.hu.J_(i),await async function(t,e){const n=Te(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>fn.forEach(e,e=>fn.forEach(e.Is,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>fn.forEach(e.ds,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(r){if(!pn(r))throw r;me(_o,"Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Fs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Fs=n.Fs.insert(t,i)}}}(r.localStore,s))}async function yc(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){me(Qa,"User change. New user:",e.toKey());const t=await Io(n.localStore,e);n.currentUser=e,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Vu.forEach(t=>{t.forEach(t=>{t.reject(new Se(Ie.CANCELLED,i))})}),r.Vu.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await mc(n,t.Bs)}var r,i}function vc(t,e){const n=Te(t),r=n.Eu.get(e);if(r&&r.lu)return di().add(r.key);{let t=di();const r=n.Tu.get(e);if(!r)return t;for(const e of r){const r=n.Pu.get(e);t=t.unionWith(r.view.tu)}return t}}function wc(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ic.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oc.bind(null,e),e.hu.J_=Ua.bind(null,e.eventManager),e.hu.pu=ja.bind(null,e.eventManager),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=zo(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return function(t,e,n,r){return new To(t,e,n,r)}(this.persistence,new Eo,t.initialUser,this.serializer)}Du(t){return new go(yo.Vi,this.serializer)}bu(t){return new xo}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class Ec extends bc{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){_e(this.persistence.referenceDelegate instanceof vo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new to(n,t.asyncQueue,e)}Du(t){const e=void 0!==this.cacheSizeBytes?Ws.withCacheSize(this.cacheSizeBytes):Ws.DEFAULT;return new go(t=>vo.Vi(t,e),this.serializer)}}class _c{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>sc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yc.bind(null,this.syncEngine),await async function(t,e){const n=Te(t);e?(n.Ia.delete(2),await ea(n)):e||(n.Ia.add(2),await na(n),n.Aa.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ma}createDatastore(t){const e=zo(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new qo(r));var r;return function(t,e,n,r){return new Yo(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>sc(this.syncEngine,t,0),s=Lo.C()?new Lo:new Ro,new ta(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Ya(t,e,n,r,i,s);return o&&(a.fu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=Te(t);me(Zo,"RemoteStore shutting down."),e.Ia.add(5),await na(e),e.Ea.shutdown(),e.Aa.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}_c.provider={build:()=>new _c};
/**
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
 */
/**
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
 */
class Tc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):ye("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
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
 */const Ic="FirestoreClient";class Sc{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=de.UNAUTHENTICATED,this.clientId=Ve.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async t=>{me(Ic,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(me(Ic,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Na(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),me(Ic,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Io(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>{ve("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{me("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(t=>{ve("Terminating Firestore due to IndexedDb database deletion failed",t)})}),t._offlineComponents=e}async function Ac(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){me(Ic,"Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!("FirebaseError"===(n=i).name?n.code===Ie.FAILED_PRECONDITION||n.code===Ie.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;ve("Error using user provided cache. Falling back to memory cache: "+i),await Cc(t,new bc)}}else me(Ic,"Using default OfflineComponentProvider"),await Cc(t,new Ec(void 0));var n;return t._offlineComponents}(t);me(Ic,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>Ca(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Ca(e.remoteStore,n)),t._onlineComponents=e}async function Dc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(me(Ic,"Using user provided OnlineComponentProvider"),await Ac(t,t._uninitializedComponentsProvider._online)):(me(Ic,"Using default OnlineComponentProvider"),await Ac(t,new _c))),t._onlineComponents}async function kc(t){const e=await Dc(t),n=e.eventManager;return n.onListen=Ja.bind(null,e.syncEngine),n.onUnlisten=ec.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Za.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nc.bind(null,e.syncEngine),n}
/**
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
 */
function Nc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const xc=new Map,Rc="firestore.googleapis.com",Oc=!0;
/**
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
 */class Lc{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Se(Ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rc,this.ssl=Oc}else this.host=t.host,this.ssl=null!==(e=t.ssl)&&void 0!==e?e:Oc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Qs;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Se(Ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new Se(Ie.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nc(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Se(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Se(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Se(Ie.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Mc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Se(Ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Se(Ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lc(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new De;switch(t.type){case"firstParty":return new Re(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Se(Ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=xc.get(t);e&&(me("ComponentProvider","Removing Datastore"),xc.delete(t),e.terminate())}(this),Promise.resolve()}}function Pc(t,e,n,r={}){var s;t=tn(t,Mc);const o=l(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&(async function(t){(await fetch(t,{credentials:"include"})).ok}
/**
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
 */(`https://${u}`),p("Firestore",!0)),a.host!==Rc&&a.host!==u&&ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:r});if(!E(h,c)&&(t._setSettings(h),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=de.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Se(Ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new de(o)}t._authCredentials=new ke(new Ae(e,n))}}
/**
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
 */class Vc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Vc(this.firestore,t,this._query)}}class Fc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Uc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fc(this.firestore,t,this._key)}toJSON(){return{type:Fc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(nn(e,Fc._jsonSchema))return new Fc(t,n||null,new Qe(Ge.fromString(e.referencePath)))}}Fc._jsonSchemaVersion="firestore/documentReference/1.0",Fc._jsonSchema={type:en("string",Fc._jsonSchemaVersion),referencePath:en("string")};class Uc extends Vc{constructor(t,e,n){super(t,e,qr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fc(this.firestore,null,new Qe(t))}withConverter(t){return new Uc(this.firestore,t,this._path)}}function jc(t,e,...n){if(t=I(t),We("collection","path",e),t instanceof Mc){const r=Ge.fromString(e,...n);return Ye(r),new Uc(t,null,r)}{if(!(t instanceof Fc||t instanceof Uc))throw new Se(Ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Ye(r),new Uc(t.firestore,null,r)}}function Bc(t,e,...n){if(t=I(t),1===arguments.length&&(e=Ve.newId()),We("doc","path",e),t instanceof Mc){const r=Ge.fromString(e,...n);return Xe(r),new Fc(t,null,new Qe(r))}{if(!(t instanceof Fc||t instanceof Uc))throw new Se(Ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Xe(r),new Fc(t.firestore,t instanceof Uc?t.converter:null,new Qe(r))}}
/**
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
 */const qc="AsyncQueue";class $c{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Go(this,"async_queue_retry"),this.oc=()=>{const t=$o();t&&me(qc,"Visibility state changed to "+t.visibilityState),this.F_.y_()},this._c=t;const e=$o();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=$o();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new Ce;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!pn(t))throw t;me(qc,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(t=>{throw this.tc=t,this.nc=!1,ye("INTERNAL UNHANDLED ERROR: ",zc(t)),t}).then(t=>(this.nc=!1,t))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const r=ka.createAndSchedule(this,t,e,n,t=>this.lc(t));return this.ec.push(r),r}ac(){this.tc&&be(47125,{hc:zc(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do{t=this._c,await t}while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function zc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
/**
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
 */}function Gc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}(t,["next","error","complete"])}class Hc extends Mc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new $c,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $c(t),this._firestoreClient=void 0,await t}}}function Kc(t,e){const n="object"==typeof t?t:jt(),r="string"==typeof t?t:$n,i=Pt(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=c("firestore");t&&Pc(i,...t)}return i}function Qc(t){if(t._terminated)throw new Se(Ie.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,r;const i=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,u=i,new qn(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Nc(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator));var o,a,c,u;t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Sc(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
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
 */(t),t._firestoreClient}class Wc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wc(Nn.fromBase64String(t))}catch(e){throw new Se(Ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wc(Nn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Wc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(nn(t,Wc._jsonSchema))return Wc.fromBase64String(t.bytes)}}Wc._jsonSchemaVersion="firestore/bytes/1.0",Wc._jsonSchema={type:en("string",Wc._jsonSchemaVersion),bytes:en("string")};
/**
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
 */
class Xc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Se(Ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */class Yc{constructor(t){this._methodName=t}}
/**
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
 */class Jc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Se(Ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Se(Ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Fe(this._lat,t._lat)||Fe(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jc._jsonSchemaVersion}}static fromJSON(t){if(nn(t,Jc._jsonSchema))return new Jc(t.latitude,t.longitude)}}Jc._jsonSchemaVersion="firestore/geoPoint/1.0",Jc._jsonSchema={type:en("string",Jc._jsonSchemaVersion),latitude:en("number"),longitude:en("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zc{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Zc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(nn(t,Zc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Zc(t.vectorValues);throw new Se(Ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zc._jsonSchemaVersion="firestore/vectorValue/1.0",Zc._jsonSchema={type:en("string",Zc._jsonSchemaVersion),vectorValues:en("object")};
/**
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
 */
const tu=/^__.*__$/;class eu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ui(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fi(t,this.data,e,this.fieldTransforms)}}class nu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ui(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ru(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ec:t})}}class iu{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new iu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Rc({path:n,mc:!1});return r.fc(t),r}gc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Rc({path:n,mc:!1});return r.Ac(),r}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return mu(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(0===t.length)throw this.wc("Document fields must not be empty");if(ru(this.Ec)&&tu.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class su{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||zo(t)}Dc(t,e,n,r=!1){return new iu({Ec:t,methodName:e,bc:n,path:Ke.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ou(t){const e=t._freezeSettings(),n=zo(t._databaseId);return new su(t._databaseId,!!e.ignoreUndefinedProperties,n)}function au(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);du("Data must be an object, but it was:",o,r);const a=hu(r,o);let c,u;if(s.merge)c=new Dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=fu(e,r,n);if(!o.contains(i))throw new Se(Ie.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);yu(t,i)||t.push(i)}c=new Dn(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new eu(new dr(a),c,u)}class cu extends Yc{_toFieldTransform(t){if(2!==t.Ec)throw 1===t.Ec?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof cu}}function uu(t,e){if(lu(t=I(t)))return du("Unsupported field value:",e,t),hu(t,e);if(t instanceof Yc)return function(t,e){if(!ru(e.Ec))throw e.wc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.wc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&4!==e.Ec)throw e.wc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=uu(i,e.yc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=I(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mi(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=on.fromDate(t);return{timestampValue:ys(e.serializer,n)}}if(t instanceof on){const n=new on(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ys(e.serializer,n)}}if(t instanceof Jc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Wc)return{bytesValue:vs(e.serializer,t._byteString)};if(t instanceof Fc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.wc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Es(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Zc)return n=t,r=e,{mapValue:{fields:{[Gn]:{stringValue:Qn},[Wn]:{arrayValue:{values:n.toArray().map(t=>{if("number"!=typeof t)throw r.wc("VectorValues must only contain numeric values.");return pi(r.serializer,t)})}}}}};var n,r;throw e.wc(`Unsupported field value: ${Ze(t)}`)}(t,e)}function hu(t,e){const n={};return _n(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):En(t,(t,r)=>{const i=uu(r,e.Vc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function lu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof on||t instanceof Jc||t instanceof Wc||t instanceof Fc||t instanceof Yc||t instanceof Zc)}function du(t,e,n){if(!lu(n)||!Je(n)){const r=Ze(n);throw"an object"===r?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function fu(t,e,n){if((e=I(e))instanceof Xc)return e._internalPath;if("string"==typeof e)return gu(t,e);throw mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const pu=new RegExp("[~\\*/\\[\\]]");function gu(t,e,n){if(e.search(pu)>=0)throw mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch(r){throw mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Se(Ie.INVALID_ARGUMENT,a+t+c)}function yu(t,e){return t.some(t=>t.isEqual(e))}
/**
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
 */class vu{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new wu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class wu extends vu{data(){return super.data()}}function bu(t,e){return"string"==typeof e?gu(t,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}
/**
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
 */function Eu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Se(Ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _u{}class Tu extends _u{}function Iu(t,e,...n){let r=[];e instanceof _u&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof Au).length,n=t.filter(t=>t instanceof Su).length;if(e>1||e>0&&n>0)throw new Se(Ie.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Su extends Tu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Su(t,e,n)}_apply(t){const e=this._parse(t);return Lu(t._query,e),new Vc(t.firestore,t.converter,Kr(t._query,e))}_parse(t){const e=ou(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Se(Ie.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Ou(o,s);const e=[];for(const n of o)e.push(Ru(r,t,n));a={arrayValue:{values:e}}}else a=Ru(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ou(o,s),a=function(t,e,n,r=!1){return uu(n,t.Dc(r?4:3,e))}(n,e,o,"in"===s||"not-in"===s);return Er.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Cu(t,e,n){const r=e,i=bu("where",t);return Su._create(i,r,n)}class Au extends _u{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Au(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:_r.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Lu(n,i),n=Kr(n,i)}(t._query,e),new Vc(t.firestore,t.converter,Kr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Du extends Tu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Du(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Se(Ie.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Se(Ie.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vr(e,n)}(t._query,this._field,this._direction);return new Vc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Br(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function ku(t,e="asc"){const n=e,r=bu("orderBy",t);return Du._create(r,n)}class Nu extends Tu{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Nu(t,e,n)}_apply(t){return new Vc(t.firestore,t.converter,Qr(t._query,this._limit,this._limitType))}}function xu(t){return function(t,e){if(e<=0)throw new Se(Ie.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}("limit",t),Nu._create("limit",t,"F")}function Ru(t,e,n){if("string"==typeof(n=I(n))){if(""===n)throw new Se(Ie.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zr(e)&&-1!==n.indexOf("/"))throw new Se(Ie.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ge.fromString(n));if(!Qe.isDocumentKey(r))throw new Se(Ie.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sr(t,new Qe(r))}if(n instanceof Fc)return sr(t,n._key);throw new Se(Ie.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ze(n)}.`)}function Ou(t,e){if(!Array.isArray(t)||0===t.length)throw new Se(Ie.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lu(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Se(Ie.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Se(Ie.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Mu{convertValue(t,e="none"){switch(Xn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return On(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ln(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw be(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return En(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e[Wn].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(t=>On(t.doubleValue));return new Zc(i)}convertGeoPoint(t){return new Jc(On(t.latitude),On(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=jn(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Bn(t));default:return null}}convertTimestamp(t){const e=Rn(t);return new on(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ge.fromString(t);_e(Bs(n),9688,{name:t});const r=new zn(n.get(1),n.get(3)),i=new Qe(n.popFirst(5));return r.isEqual(e)||ye(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
 */function Pu(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Vu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fu extends vu{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(bu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Se(Ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Fu._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}Fu._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fu._jsonSchema={type:en("string",Fu._jsonSchemaVersion),bundleSource:en("string","DocumentSnapshot"),bundleName:en("string"),bundle:en("string")};class Uu extends Fu{data(t={}){return super.data(t)}}class ju{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Vu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Uu(this._firestore,this._userDataWriter,n.key,n,new Vu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Se(Ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new Uu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Vu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Uu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Vu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Bu(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Se(Ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ju._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ve.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Bu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:t})}}
/**
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
 */function qu(t){t=tn(t,Fc);const e=tn(t.firestore,Hc);return function(t,e,n={}){const r=new Ce;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Tc({next:a=>{s.Ou(),e.enqueueAndForget(()=>Fa(t,o));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new Se(Ie.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new Se(Ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new za(qr(n.path),s,{includeMetadataChanges:!0,ka:!0});return Va(t,o)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}(Qc(e),t._key).then(n=>Yu(e,t,n))}ju._jsonSchemaVersion="firestore/querySnapshot/1.0",ju._jsonSchema={type:en("string",ju._jsonSchemaVersion),bundleSource:en("string","QuerySnapshot"),bundleName:en("string"),bundle:en("string")};class $u extends Mu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Fc(this.firestore,null,e)}}function zu(t){t=tn(t,Vc);const e=tn(t.firestore,Hc),n=Qc(e),r=new $u(e);return Eu(t._query),function(t,e,n={}){const r=new Ce;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Tc({next:n=>{s.Ou(),e.enqueueAndForget(()=>Fa(t,o)),n.fromCache&&"server"===r.source?i.reject(new Se(Ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new za(n,s,{includeMetadataChanges:!0,ka:!0});return Va(t,o)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}(n,t._query).then(n=>new ju(e,r,t,n))}function Gu(t,e,n){t=tn(t,Fc);const r=tn(t.firestore,Hc),i=Pu(t.converter,e);return Xu(r,[au(ou(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ni.none())])}function Hu(t,e,n,...r){t=tn(t,Fc);const i=tn(t.firestore,Hc),s=ou(i);let o;return o="string"==typeof(e=I(e))||e instanceof Xc?function(t,e,n,r,i,s){const o=t.Dc(1,e,n),a=[fu(e,r,n)],c=[i];if(s.length%2!=0)throw new Se(Ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(fu(e,s[d])),c.push(s[d+1]);const u=[],h=dr.empty();for(let d=a.length-1;d>=0;--d)if(!yu(u,a[d])){const t=a[d];let e=c[d];e=I(e);const n=o.gc(t);if(e instanceof cu)u.push(t);else{const r=uu(e,n);null!=r&&(u.push(t),h.set(t,r))}}const l=new Dn(u);return new nu(h,l,o.fieldTransforms)}(s,"updateDoc",t._key,e,n,r):function(t,e,n,r){const i=t.Dc(1,e,n);du("Data must be an object, but it was:",i,r);const s=[],o=dr.empty();En(r,(t,r)=>{const a=gu(e,t,n);r=I(r);const c=i.gc(a);if(r instanceof cu)s.push(a);else{const t=uu(r,c);null!=t&&(s.push(a),o.set(a,t))}});const a=new Dn(s);return new nu(o,a,i.fieldTransforms)}(s,"updateDoc",t._key,e),Xu(i,[o.toMutation(t._key,Ni.exists(!0))])}function Ku(t){return Xu(tn(t.firestore,Hc),[new $i(t._key,Ni.none())])}function Qu(t,e){const n=tn(t.firestore,Hc),r=Bc(t),i=Pu(t.converter,e);return Xu(n,[au(ou(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Ni.exists(!1))]).then(()=>r)}function Wu(t,...e){var n,r,i;t=I(t);let s={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof e[o]||Gc(e[o])||(s=e[o++]);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Gc(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,h;if(t instanceof Fc)u=tn(t.firestore,Hc),h=qr(t._key.path),c={next:n=>{e[o]&&e[o](Yu(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=tn(t,Vc);u=tn(n.firestore,Hc),h=n._query;const r=new $u(u);c={next:t=>{e[o]&&e[o](new ju(u,r,n,t))},error:e[o+1],complete:e[o+2]},Eu(t._query)}return function(t,e,n,r){const i=new Tc(r),s=new za(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Va(await kc(t),s)),()=>{i.Ou(),t.asyncQueue.enqueueAndForget(async()=>Fa(await kc(t),s))}}(Qc(u),h,a,c)}function Xu(t,e){return function(t,e){const n=new Ce;return t.asyncQueue.enqueueAndForget(async()=>rc(await function(t){return Dc(t).then(t=>t.syncEngine)}(t),e,n)),n.promise}(Qc(t),e)}function Yu(t,e,n){const r=n.docs.get(e._key),i=new $u(t);return new Fu(t,i,e._key,r,new Vu(n.hasPendingWrites,n.fromCache),e.converter)}!function(t,e=!0){fe="11.10.0",Mt(new S("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Hc(new Ne(t.getProvider("auth-internal")),new Le(i,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Se(Ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Bt(he,le,t),Bt(he,le,"esm2017")}();
/**
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
 */
Bt("firebase","11.10.0","app");const Ju="@firebase/installations",Zu="0.6.18",th=1e4,eh=`w:${Zu}`,nh="FIS_v2",rh=36e5,ih=new w("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function sh(t){return t instanceof v&&t.code.includes("request-failed")}
/**
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
 */function oh({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function ah(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function ch(t,e){const n=(await e.json()).error;return ih.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function uh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hh(t,{refreshToken:e}){const n=uh(t);return n.append("Authorization",function(t){return`${nh} ${t}`}
/**
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
 */(e)),n}async function lh(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
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
 */
function dh(t){return new Promise(e=>{setTimeout(e,t)})}
/**
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
 */
/**
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
 */
const fh=/^[cdef][\w-]{21}$/;function ph(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){const e=(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return e.substr(0,22)}
/**
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
 */(t);return fh.test(e)?e:""}catch(t){return""}}function gh(t){return`${t.appName}!${t.appId}`}
/**
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
 */const mh=new Map;function yh(t,e){const n=gh(t);vh(n,e),function(t,e){const n=function(){!wh&&"BroadcastChannel"in self&&(wh=new BroadcastChannel("[Firebase] FID Change"),wh.onmessage=t=>{vh(t.data.key,t.data.fid)});return wh}();n&&n.postMessage({key:t,fid:e});0===mh.size&&wh&&(wh.close(),wh=null)}(n,e)}function vh(t,e){const n=mh.get(t);if(n)for(const r of n)r(e)}let wh=null;
/**
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
 */
const bh="firebase-installations-store";let Eh=null;function _h(){return Eh||(Eh=Q("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(bh)}})),Eh}async function Th(t,e){const n=gh(t),r=(await _h()).transaction(bh,"readwrite"),i=r.objectStore(bh),s=await i.get(n);return await i.put(e,n),await r.done,s&&s.fid===e.fid||yh(t,e.fid),e}async function Ih(t){const e=gh(t),n=(await _h()).transaction(bh,"readwrite");await n.objectStore(bh).delete(e),await n.done}async function Sh(t,e){const n=gh(t),r=(await _h()).transaction(bh,"readwrite"),i=r.objectStore(bh),s=await i.get(n),o=e(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||yh(t,o.fid),o}
/**
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
 */async function Ch(t){let e;const n=await Sh(t.appConfig,n=>{const r=function(t){const e=t||{fid:ph(),registrationStatus:0};return kh(e)}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(ih.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=oh(t),i=uh(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:nh,appId:t.appId,sdkVersion:eh},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await lh(()=>fetch(r,a));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:ah(t.authToken)}}throw await ch("Create Installation",c)}(t,e);return Th(t.appConfig,n)}catch(n){throw sh(n)&&409===n.customData.serverCode?await Ih(t.appConfig):await Th(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Ah(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Ah(t){let e=await Dh(t.appConfig);for(;1===e.registrationStatus;)await dh(100),e=await Dh(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Ch(t);return n||e}return e}function Dh(t){return Sh(t,t=>{if(!t)throw ih.create("installation-not-found");return kh(t)})}function kh(t){return 1===(e=t).registrationStatus&&e.registrationTime+th<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
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
 */}async function Nh({appConfig:t,heartbeatServiceProvider:e},n){const r=function(t,{fid:e}){return`${oh(t)}/${e}/authTokens:generate`}
/**
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
 */(t,n),i=hh(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:eh,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await lh(()=>fetch(r,a));if(c.ok){return ah(await c.json())}throw await ch("Generate Auth Token",c)}async function xh(t,e=!1){let n;const r=await Sh(t.appConfig,r=>{if(!Oh(r))throw ih.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rh}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t,e){let n=await Rh(t.appConfig);for(;1===n.authToken.requestStatus;)await dh(100),n=await Rh(t.appConfig);const r=n.authToken;return 0===r.requestStatus?xh(t,e):r}(t,e),r;{if(!navigator.onLine)throw ih.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await Nh(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Th(t.appConfig,r),n}catch(n){if(!sh(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Th(t.appConfig,n)}else await Ih(t.appConfig);throw n}}(t,e),e}});return n?await n:r.authToken}function Rh(t){return Sh(t,t=>{if(!Oh(t))throw ih.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+th<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
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
 */})}function Oh(t){return void 0!==t&&2===t.registrationStatus}
/**
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
 */
async function Lh(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await Ch(t);e&&await e}
/**
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
 */(n);return(await xh(n,e)).token}function Mh(t){return ih.create("missing-app-config-values",{valueName:t})}
/**
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
 */const Ph="installations",Vh=t=>{const e=Pt(t.getProvider("app").getImmediate(),Ph).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ch(e);return r?r.catch(console.error):xh(e).catch(console.error),n.fid}(e),getToken:t=>Lh(e,t)}};Mt(new S(Ph,t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Mh("App Configuration");if(!t.name)throw Mh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Mh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Pt(e,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),Mt(new S("installations-internal",Vh,"PRIVATE")),Bt(Ju,Zu),Bt(Ju,Zu,"esm2017");
/**
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
 */
const Fh="analytics",Uh="https://www.googletagmanager.com/gtag/js",jh=new M("@firebase/analytics"),Bh=new w("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
 */
function qh(t){if(!t.startsWith(Uh)){const e=Bh.create("invalid-gtag-resource",{gtagURL:t});return jh.warn(e.message),""}return t}function $h(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function zh(t,e){const n=function(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}("firebase-js-sdk-policy",{createScriptURL:qh}),r=document.createElement("script"),i=`${Uh}?l=${t}&id=${e}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Gh(t,e,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const r=await $h(n);for(const n of t){const t=r.find(t=>t.measurementId===n),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){jh.error(s)}}(t,e,n,r,i)}else if("config"===i){const[i,o]=s;await async function(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=(await $h(n)).find(t=>t.measurementId===i);t&&await e[t.appId]}}catch(a){jh.error(a)}t("config",i,s)}(t,e,n,r,i,o)}else if("consent"===i){const[e,n]=s;t("consent",e,n)}else if("get"===i){const[e,n,r]=s;t("get",e,n,r)}else if("set"===i){const[e]=s;t("set",e)}else t(i,...s)}catch(o){jh.error(o)}}}const Hh=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Kh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Qh(t,e=Hh,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Bh.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Bh.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xh;return setTimeout(async()=>{a.abort()},6e4),Wh({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Wh(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Hh){var s;const{appId:o,measurementId:a}=t;try{await function(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Bh.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}(r,e)}catch(c){if(a)return jh.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const e=await async function(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Kh(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw Bh.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(o),e}catch(c){const e=c;if(!function(t){if(!(t instanceof v&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(i.deleteThrottleMetadata(o),a)return jh.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw c}const u=503===Number(null===(s=null==e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?T(n,i.intervalMillis,30):T(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),jh.debug(`Calling attemptFetch again in ${u} millis`),Wh(t,h,r,i)}}class Xh{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Yh(t,e,n,r,i,s,o){var a;const c=Qh(t);c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&jh.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>jh.error(t)),e.push(c);const u=
/**
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
 */
async function(){if(!m())return jh.warn(Bh.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await y()}catch(t){return jh.warn(Bh.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then(t=>t?r.getId():void 0),[h,l]=await Promise.all([c,u]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Uh)&&n.src.includes(t))return n;return null}
/**
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
 */)(s)||zh(s,h.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=l&&(d.firebase_id=l),i("config",h.measurementId,d),h.measurementId}
/**
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
 */class Jh{constructor(t){this.app=t}_delete(){return delete Zh[this.app.options.appId],Promise.resolve()}}let Zh={},tl=[];const el={};let nl,rl,il="dataLayer",sl=!1;function ol(){const t=[];if(function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=Bh.create("invalid-analytics-context",{errorInfo:e});jh.warn(n.message)}}function al(t,e,n){ol();const r=t.options.appId;if(!r)throw Bh.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Bh.create("no-api-key");jh.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Zh[r])throw Bh.create("already-exists",{id:r});if(!sl){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(il);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Gh(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}(Zh,tl,el,il,"gtag");rl=t,nl=e,sl=!0}Zh[r]=Yh(t,tl,el,e,nl,il,n);return new Jh(t)}function cl(t=jt()){const e=Pt(t=I(t),Fh);return e.isInitialized()?e.getImmediate():function(t,e={}){const n=Pt(t,Fh);if(n.isInitialized()){const t=n.getImmediate();if(E(e,n.getOptions()))return t;throw Bh.create("already-initialized")}const r=n.initialize({options:e});return r}(t)}function ul(t,e,n,r){t=I(t),async function(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e;t("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(rl,Zh[t.app.options.appId],e,n,r).catch(t=>jh.error(t))}const hl="@firebase/analytics",ll="0.10.17";Mt(new S(Fh,(t,{options:e})=>al(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e),"PUBLIC")),Mt(new S("analytics-internal",function(t){try{const e=t.getProvider(Fh).getImmediate();return{logEvent:(t,n,r)=>ul(e,t,n,r)}}catch(e){throw Bh.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),Bt(hl,ll),Bt(hl,ll,"esm2017");export{on as T,cl as a,zu as b,jc as c,Qu as d,Ku as e,Bc as f,Kc as g,Wu as h,Ut as i,qu as j,xu as l,ku as o,Iu as q,Gu as s,Hu as u,Cu as w};
