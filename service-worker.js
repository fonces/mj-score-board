if(!self.define){let e,o={};const r=(r,c)=>(r=new URL(r+".js",c).href,o[r]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=o,document.head.appendChild(e)}else e=r,importScripts(r),o()})).then((()=>{let e=o[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let n={};const d=e=>r(e,i),a={module:{uri:i},exports:n,require:d};o[i]=Promise.all(c.map((e=>a[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mj-score-board"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/mj-score-board/css/index.de1d4d20.css",revision:null},{url:"/mj-score-board/favicon/android-chrome-192x192.png",revision:"7d05d7178b74d74215095be40e59a0cb"},{url:"/mj-score-board/favicon/android-chrome-512x512.png",revision:"cae84a7ab0b9c85b3d76e3307cb516a6"},{url:"/mj-score-board/favicon/apple-touch-icon.png",revision:"748567830117ca8773edda1c7cba3ee4"},{url:"/mj-score-board/favicon/favicon-16x16.png",revision:"f2060c699b5077835eacae903a6c9856"},{url:"/mj-score-board/favicon/favicon-32x32.png",revision:"fecefd39eec697548662712c1fbdd84a"},{url:"/mj-score-board/index.html",revision:"adf8353b902c899ef602c9297dd657ff"},{url:"/mj-score-board/js/chunk-vendors.b6691d78.js",revision:null},{url:"/mj-score-board/js/index.fc5d5b90.js",revision:null},{url:"/mj-score-board/manifest.json",revision:"cf33720c522601ceacf87cd0858647d2"},{url:"/mj-score-board/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
