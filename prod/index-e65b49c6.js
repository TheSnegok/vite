(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const I="modulepreload",N=function(t){return"/"+t},y={},q=function(e,r,s){if(!r||r.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=N(o),o in y)return;y[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!s)for(let d=n.length-1;d>=0;d--){const f=n[d];if(f.href===o&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":I,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},F=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),k=__DEFINES__;Object.keys(k).forEach(t=>{const e=t.split(".");let r=F;for(let s=0;s<e.length;s++){const n=e[s];s===e.length-1?r[n]=k[t]:r=r[n]||(r[n]={})}});const B=__BASE__||"/",z=`
<style>
:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  --monospace: 'SFMono-Regular', Consolas,
  'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;

  --window-background: #181818;
  --window-color: #d8d8d8;
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  width: 800px;
  color: var(--window-color);
  margin: 30px auto;
  padding: 25px 40px;
  position: relative;
  background: var(--window-background);
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  overflow: hidden;
  border-top: 8px solid var(--red);
  direction: ltr;
  text-align: left;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(--red);
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
<div class="backdrop" part="backdrop">
  <div class="window" part="window">
    <pre class="message" part="message"><span class="plugin" part="plugin"></span><span class="message-body" part="message-body"></span></pre>
    <pre class="file" part="file"></pre>
    <pre class="frame" part="frame"></pre>
    <pre class="stack" part="stack"></pre>
    <div class="tip" part="tip">
      Click outside or fix the code to dismiss.<br>
      You can also disable this overlay by setting
      <code part="config-option-name">server.hmr.overlay</code> to <code part="config-option-value">false</code> in <code part="config-file-name">vite.config.js.</code>
    </div>
  </div>
</div>
`,E=/(?:[a-zA-Z]:\\|\/).*?:\d+:\d+/g,m=/^(?:>?\s+\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm,{HTMLElement:W=class{}}=globalThis;class P extends W{constructor(e,r=!0){var s;super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML=z,m.lastIndex=0;const n=e.frame&&m.test(e.frame),o=n?e.message.replace(m,""):e.message;e.plugin&&this.text(".plugin",`[plugin:${e.plugin}] `),this.text(".message-body",o.trim());const[i]=(((s=e.loc)===null||s===void 0?void 0:s.file)||e.id||"unknown file").split("?");e.loc?this.text(".file",`${i}:${e.loc.line}:${e.loc.column}`,r):e.id&&this.text(".file",i),n&&this.text(".frame",e.frame.trim()),this.text(".stack",e.stack,r),this.root.querySelector(".window").addEventListener("click",a=>{a.stopPropagation()}),this.addEventListener("click",()=>{this.close()})}text(e,r,s=!1){const n=this.root.querySelector(e);if(!s)n.textContent=r;else{let o=0,i;for(E.lastIndex=0;i=E.exec(r);){const{0:a,index:l}=i;if(l!=null){const c=r.slice(o,l);n.appendChild(document.createTextNode(c));const d=document.createElement("a");d.textContent=a,d.className="file-link",d.onclick=()=>{fetch(`${B}__open-in-editor?file=`+encodeURIComponent(a))},n.appendChild(d),o+=c.length+a.length}}}}close(){var e;(e=this.parentNode)===null||e===void 0||e.removeChild(this)}}const h="vite-error-overlay",{customElements:g}=globalThis;g&&!g.get(h)&&g.define(h,P);console.debug("[vite] connecting...");const b=new URL(import.meta.url),j=__SERVER_HOST__,x=__HMR_PROTOCOL__||(b.protocol==="https:"?"wss":"ws"),U=__HMR_PORT__,$=`${__HMR_HOSTNAME__||b.hostname}:${U||b.port}${__HMR_BASE__}`,S=__HMR_DIRECT_TARGET__,_=__BASE__||"/",L=[];let u;try{let t;U||(t=()=>{u=R(x,S,()=>{const e=new URL(import.meta.url),r=e.host+e.pathname.replace(/@vite\/client$/,"");console.error(`[vite] failed to connect to websocket.
your current setup:
  (browser) ${r} <--[HTTP]--> ${j} (server)
  (browser) ${$} <--[WebSocket (failing)]--> ${S} (server)
Check out your Vite / network configuration and https://vitejs.dev/config/server-options.html#server-hmr .`)}),u.addEventListener("open",()=>{console.info("[vite] Direct websocket connection fallback. Check out https://vitejs.dev/config/server-options.html#server-hmr to remove the previous connection error.")},{once:!0})}),u=R(x,$,t)}catch(t){console.error(`[vite] failed to connect to websocket (${t}). `)}function R(t,e,r){const s=new WebSocket(`${t}://${e}`,"vite-hmr");let n=!1;return s.addEventListener("open",()=>{n=!0},{once:!0}),s.addEventListener("message",async({data:o})=>{V(JSON.parse(o))}),s.addEventListener("close",async({wasClean:o})=>{if(!o){if(!n&&r){r();return}console.log("[vite] server connection lost. polling for restart..."),await K(t,e),location.reload()}}),s}function D(t,e){t.message.match("fetch")||console.error(t),console.error(`[hmr] Failed to reload ${e}. This could be due to syntax errors or importing non-existent modules. (see errors above)`)}function M(t){const e=new URL(t,location.toString());return e.searchParams.delete("direct"),e.pathname+e.search}let O=!0;const T=new WeakSet;async function V(t){switch(t.type){case"connected":console.debug("[vite] connected."),Z(),setInterval(()=>{u.readyState===u.OPEN&&u.send('{"type":"ping"}')},__HMR_TIMEOUT__);break;case"update":if(p("vite:beforeUpdate",t),O&&G()){window.location.reload();return}else C(),O=!1;await Promise.all(t.updates.map(async e=>{if(e.type==="js-update")return J(Q(e));const{path:r,timestamp:s}=e,n=M(r),o=Array.from(document.querySelectorAll("link")).find(a=>!T.has(a)&&M(a.href).includes(n));if(!o)return;const i=`${_}${n.slice(1)}${n.includes("?")?"&":"?"}t=${s}`;return new Promise(a=>{const l=o.cloneNode();l.href=new URL(i,o.href).href;const c=()=>{o.remove(),console.debug(`[vite] css hot updated: ${n}`),a()};l.addEventListener("load",c),l.addEventListener("error",c),T.add(o),o.after(l)})})),p("vite:afterUpdate",t);break;case"custom":{p(t.event,t.data);break}case"full-reload":if(p("vite:beforeFullReload",t),t.path&&t.path.endsWith(".html")){const e=decodeURI(location.pathname),r=_+t.path.slice(1);(e===r||t.path==="/index.html"||e.endsWith("/")&&e+"index.html"===r)&&location.reload();return}else location.reload();break;case"prune":p("vite:beforePrune",t),t.paths.forEach(e=>{const r=te.get(e);r&&r(A.get(e))});break;case"error":{p("vite:error",t);const e=t.err;H?Y(e):console.error(`[vite] Internal Server Error
${e.message}
${e.stack}`);break}default:return t}}function p(t,e){const r=oe.get(t);r&&r.forEach(s=>s(e))}const H=__HMR_ENABLE_OVERLAY__;function Y(t){H&&(C(),document.body.appendChild(new P(t)))}function C(){document.querySelectorAll(h).forEach(t=>t.close())}function G(){return document.querySelectorAll(h).length}let v=!1,w=[];async function J(t){if(w.push(t),!v){v=!0,await Promise.resolve(),v=!1;const e=[...w];w=[],(await Promise.all(e)).forEach(r=>r&&r())}}async function K(t,e,r=1e3){const s=t==="wss"?"https":"http";for(;;)try{await fetch(`${s}://${e}`,{mode:"no-cors"});break}catch{await new Promise(o=>setTimeout(o,r))}}async function Q({path:t,acceptedPath:e,timestamp:r,explicitImportRequired:s}){const n=X.get(t);if(!n)return;let o;const i=t===e,a=n.callbacks.filter(({deps:l})=>l.includes(e));if(i||a.length>0){const l=ee.get(e);l&&await l(A.get(e));const[c,d]=e.split("?");try{o=await q(()=>import(_+c.slice(1)+`?${s?"import&":""}t=${r}${d?`&${d}`:""}`),[])}catch(f){D(f,e)}}return()=>{for(const{deps:c,fn:d}of a)d(c.map(f=>f===e?o:void 0));const l=i?t:`${e} via ${t}`;console.debug(`[vite] hot updated: ${l}`)}}function Z(){u.readyState===1&&(L.forEach(t=>u.send(t)),L.length=0)}const X=new Map,ee=new Map,te=new Map,A=new Map,oe=new Map,ne=document.querySelector("button");console.log("hi");ne.addEventListener("click",async()=>{console.log("hi")});
//# sourceMappingURL=index-e65b49c6.js.map
