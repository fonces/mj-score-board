if(!self.define){let e,o={};const r=(r,c)=>(r=new URL(r+".js",c).href,o[r]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=o,document.head.appendChild(e)}else e=r,importScripts(r),o()})).then((()=>{let e=o[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let n={};const d=e=>r(e,i),a={module:{uri:i},exports:n,require:d};o[i]=Promise.all(c.map((e=>a[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mj-score-board"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/mj-score-board/css/index.2288d38e.css",revision:null},{url:"/mj-score-board/favicon/android-chrome-192x192.png",revision:"d2827fc500028f3d13901da5ae5bdf8f"},{url:"/mj-score-board/favicon/android-chrome-512x512.png",revision:"faff6343318925c2519e789a01bb9541"},{url:"/mj-score-board/favicon/apple-touch-icon.png",revision:"15636c56a5dfaea4aecfd2df36aad0a2"},{url:"/mj-score-board/favicon/favicon-16x16.png",revision:"e22e2fc5002d7e58c7b6ec42fe8971b4"},{url:"/mj-score-board/favicon/favicon-32x32.png",revision:"5e2694c6d60339cd50d49fde427c272a"},{url:"/mj-score-board/index.html",revision:"3c2295efbd661981239f38b4d1337a22"},{url:"/mj-score-board/js/chunk-vendors.162ea853.js",revision:null},{url:"/mj-score-board/js/index.b63a361f.js",revision:null},{url:"/mj-score-board/manifest.json",revision:"de8292c125eecc1d0544a0e33e7713dd"},{url:"/mj-score-board/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
