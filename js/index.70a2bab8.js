(function(){"use strict";var e={13:function(e,l,o){var s=o(9242),a=o(3396);function r(e,l,o,s,r,t){const n=(0,a.up)("ScoreTable");return(0,a.wg)(),(0,a.j4)(n)}var t=o(7139);const n=e=>((0,a.dD)("data-v-13082c6b"),e=e(),(0,a.Cn)(),e),i=n((()=>(0,a._)("th",null,null,-1))),c={class:"clamp1"},d=["onClick"],u=n((()=>(0,a._)("th",null,"チップ",-1))),p=n((()=>(0,a._)("th",null,"合計",-1)));function m(e,l,o,s,r,n){const m=(0,a.up)("EditPlayerModal"),f=(0,a.up)("EditScoreModal"),h=(0,a.up)("EditChipModal"),y=(0,a.up)("ResultModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",{class:"player",onClick:l[0]||(l[0]=e=>s.modal.player=!0)},[i,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.model.players,((e,l)=>((0,a.wg)(),(0,a.iD)("th",{key:l},[(0,a._)("span",c,(0,t.zw)(e),1)])))),128))])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.model.scores,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l,class:(0,t.C_)(["score",{diff:s.isDifference(e)}]),onClick:e=>(s.modal.score=!0)&&(s.modal.scoreIndex=l)},[(0,a._)("th",null,(0,t.zw)(l+1)+"回戦",1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,t.zw)(s.toPosiNega(e)),1)))),128))],10,d)))),128)),(0,a._)("tr",{class:(0,t.C_)(["chip",{diff:s.isDifference(s.model.chips)}]),onClick:l[1]||(l[1]=e=>s.modal.chip=!0)},[u,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.model.chips,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,t.zw)(0<=e?"+":"-")+(0,t.zw)(Math.abs(e))+"枚 ",1)))),128))],2)]),(0,a._)("tfoot",null,[(0,a._)("tr",{class:(0,t.C_)(["summary",{diff:s.isDifference(s.summaries)}]),onClick:l[2]||(l[2]=e=>s.modal.result=!0)},[p,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.summaries,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,t.zw)(s.toPosiNega(e)),1)))),128))],2)])]),((0,a.wg)(),(0,a.j4)(a.lR,{to:"#modal"},[!s.isReadOnly&&s.modal.player?((0,a.wg)(),(0,a.j4)(m,{key:0,players:s.model.players,onSave:s.onSaveEditPlayer,onClose:l[3]||(l[3]=e=>s.modal.player=!1)},null,8,["players","onSave"])):(0,a.kq)("",!0),!s.isReadOnly&&s.modal.score?((0,a.wg)(),(0,a.j4)(f,{key:1,players:s.model.players,score:s.model.scores[s.modal.scoreIndex],"score-index":s.modal.scoreIndex,onSave:s.onSaveEditScore,onClose:l[4]||(l[4]=e=>s.modal.score=!1)},null,8,["players","score","score-index","onSave"])):(0,a.kq)("",!0),!s.isReadOnly&&s.modal.chip?((0,a.wg)(),(0,a.j4)(h,{key:2,players:s.model.players,chips:s.model.chips,"chip-rate":s.model.chipRate,onSave:s.onSaveEditChip,onClose:l[5]||(l[5]=e=>s.modal.chip=!1)},null,8,["players","chips","chip-rate","onSave"])):(0,a.kq)("",!0),!s.isReadOnly&&s.modal.result?((0,a.wg)(),(0,a.j4)(y,{key:3,players:s.model.players,scores:s.model.scores,chips:s.model.chips,"chip-rate":s.model.chipRate,onReset:s.onReset,onClose:l[6]||(l[6]=e=>s.modal.result=!1)},null,8,["players","scores","chips","chip-rate","onReset"])):(0,a.kq)("",!0)]))],64)}o(1703),o(6699);var f=o(4870);const h=(e,l=0)=>Array(e).fill(l),y=(e,l)=>Array(e.length/l).fill().map(((o,s)=>e.slice(s*l,(s+1)*l))),v=e=>`${0<e?"△":e<0?"▲":""}${Math.abs(e)}`,_=e=>0!==e.reduce(((e,l)=>e+l),0),g={class:"container"},C={class:"list"},w=(0,a.Uk)("キャンセル"),k=(0,a.Uk)("保存");function b(e,l,o,s,r,n){const i=(0,a.up)("TextInput"),c=(0,a.up)("CrossIcon"),d=(0,a.up)("Button"),u=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(u,{class:"edit-player-modal",title:"ユーザー編集",onClose:s.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(d,{onClick:s.onClose},{default:(0,a.w5)((()=>[w])),_:1},8,["onClick"]),(0,a.Wm)(d,{primary:"",onClick:s.onSave},{default:(0,a.w5)((()=>[k])),_:1},8,["onClick"])])),default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.model.players,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,class:"item"},[(0,a.Wm)(i,{modelValue:s.model.players[l],"onUpdate:modelValue":e=>s.model.players[l]=e,modelModifiers:{trim:!0},disabled:s.model.deleted.includes(l),placeholder:"Please player Name..."},null,8,["modelValue","onUpdate:modelValue","disabled"]),(0,a.Wm)(c,{class:(0,t.C_)({undeletable:s.model.deleted.includes(l)||s.isLastIndex(l)}),onClick:e=>s.onDelete(l)},null,8,["class","onClick"])])))),128))])])])),_:1},8,["onClose"])}const R={class:"cross"};function D(e,l,o,s,r,t){return(0,a.wg)(),(0,a.iD)("div",R)}var I={name:"CrossIcon"},S=o(89);const B=(0,S.Z)(I,[["render",D],["__scopeId","data-v-5242a0b4"]]);var M=B;const x={class:"modal-base"},j={class:"title"};function V(e,l,o,s,r,n){const i=(0,a.up)("CrossIcon");return(0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("header",null,[(0,a._)("div",j,(0,t.zw)(o.title),1),(0,a.Wm)(i,{onClick:l[0]||(l[0]=l=>e.$emit("close"))})]),(0,a._)("main",null,[(0,a.WI)(e.$slots,"default",{},void 0,!0)]),(0,a._)("footer",null,[(0,a.WI)(e.$slots,"footer",{},void 0,!0)])])}var q={name:"ModalBase",components:{CrossIcon:M},props:{title:{type:String}}};const U=(0,S.Z)(q,[["render",V],["__scopeId","data-v-2af86f38"]]);var P=U;function W(e,l,o,s,r,t){return(0,a.wg)(),(0,a.iD)("button",(0,a.dG)(e.$attrs,{type:"button",class:["button",{primary:o.primary,small:o.small}]}),[(0,a.WI)(e.$slots,"default",{},void 0,!0)],16)}var O={name:"Button",inheritAttrs:!1,props:{primary:{type:Boolean},small:{type:Boolean}}};const A=(0,S.Z)(O,[["render",W],["__scopeId","data-v-3c9a7459"]]);var E=A;const T=["value"];function N(e,l,o,s,r,t){return(0,a.wg)(),(0,a.iD)("input",(0,a.dG)({ref:"root",type:"text",class:"text-input"},e.$attrs,{value:o.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value)),onFocus:l[1]||(l[1]=(...e)=>s.onFocus&&s.onFocus(...e))}),null,16,T)}var z={name:"TextInput",inheritAttrs:!1,props:["modelValue"],emits:["update:modelValue"],setup(e){const l=(0,f.iH)(null);return{root:l,onFocus:l=>l.target.setSelectionRange(0,String(e.modelValue).length)}}};const F=(0,S.Z)(z,[["render",N],["__scopeId","data-v-8bbb2ab0"]]);var Y=F,H={name:"EditPlayerModal",components:{CrossIcon:M,Button:E,ModalBase:P,TextInput:Y},props:{players:{type:Array,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({players:[...e.players,""],deleted:[]}),s=(0,a.Fl)((()=>o.players.length-1)),r=(0,a.Fl)((()=>o.players[s.value]));return(0,a.YP)((()=>r.value),(e=>e&&(o.players=[...o.players,""]))),{model:o,isLastIndex:e=>e===s.value,onDelete:e=>o.deleted=[...o.deleted,e],onClose:()=>l("close"),onSave:()=>l("save",{players:4<o.players.length?[...o.players].slice(0,-1):[...o.players],deleted:[...o.deleted]})}}};const Z=(0,S.Z)(H,[["render",b],["__scopeId","data-v-25e35154"]]);var $=Z;const K={class:"container"},L={class:"actions"},G=(0,a.Uk)("クリア"),J={key:0,class:"error"},Q={class:"list"},X={class:"name"},ee={class:"form-field"},le=(0,a.Uk)(" 自動入力 "),oe=(0,a.Uk)("キャンセル"),se=(0,a.Uk)("保存");function ae(e,l,o,s,r,n){const i=(0,a.up)("Button"),c=(0,a.up)("TextInput"),d=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(d,{class:"edit-score-modal",title:`スコア編集 - ${o.scoreIndex}回戦`,onClose:s.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(i,{onClick:s.onClose},{default:(0,a.w5)((()=>[oe])),_:1},8,["onClick"]),(0,a.Wm)(i,{primary:"",disabled:s.isDifference(s.model.score),onClick:s.onSave},{default:(0,a.w5)((()=>[se])),_:1},8,["disabled","onClick"])])),default:(0,a.w5)((()=>[(0,a._)("div",K,[(0,a._)("div",L,[(0,a.Wm)(i,{onClick:s.onClear},{default:(0,a.w5)((()=>[G])),_:1},8,["onClick"]),s.isDifference(s.model.score)?((0,a.wg)(),(0,a.iD)("div",J,(0,t.zw)(s.diff)+"ポイント差分があります",1)):(0,a.kq)("",!0)]),(0,a._)("div",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,class:"item"},[(0,a._)("div",X,(0,t.zw)(e),1),(0,a._)("div",ee,[(0,a.Wm)(c,{modelValue:s.model.score[l],"onUpdate:modelValue":e=>s.model.score[l]=e,modelModifiers:{number:!0},type:"tel",onBlur:e=>s.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),0===s.model.score[l]&&s.isDifference(s.model.score)?((0,a.wg)(),(0,a.j4)(i,{key:0,small:"",class:"auto-input",onClick:e=>s.onAutoComplete(l)},{default:(0,a.w5)((()=>[le])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])])))),128))])])])),_:1},8,["title","onClose"])}var re={name:"EditScoreModal",components:{Button:E,ModalBase:P,TextInput:Y},props:{players:{type:Array,required:!0},score:{type:Array,required:!0},scoreIndex:{typpe:Number,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({score:[...e.score]}),s=(0,a.Fl)((()=>o.score.reduce(((e,l)=>e+ +l),0)));return{isDifference:_,model:o,diff:s,onBlur:e=>!Number.isInteger(o.score[e])&&(o.score[e]=0),onAutoComplete:e=>o.score[e]-=s.value,onClear:()=>o.score=h(e.players.length),onClose:()=>l("close"),onSave:()=>l("save",{score:[...o.score]})}}};const te=(0,S.Z)(re,[["render",ae],["__scopeId","data-v-1b22e0ec"]]);var ne=te;const ie=e=>((0,a.dD)("data-v-61c1f014"),e=e(),(0,a.Cn)(),e),ce={class:"container"},de={class:"actions"},ue=(0,a.Uk)("クリア"),pe={key:0,class:"error"},me={class:"form-field chip-rate"},fe=ie((()=>(0,a._)("label",null,"チップ1枚",-1))),he=ie((()=>(0,a._)("label",null,"点相当",-1))),ye={class:"list"},ve={class:"name"},_e={class:"form-field"},ge=ie((()=>(0,a._)("label",null,"枚",-1))),Ce=(0,a.Uk)(" 自動入力 "),we=(0,a.Uk)("キャンセル"),ke=(0,a.Uk)("保存");function be(e,l,o,s,r,n){const i=(0,a.up)("Button"),c=(0,a.up)("TextInput"),d=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(d,{class:"edit-chips-modal",title:"チップ編集",onClose:s.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(i,{onClick:s.onClose},{default:(0,a.w5)((()=>[we])),_:1},8,["onClick"]),(0,a.Wm)(i,{primary:"",disabled:s.isDifference(s.model.chips),onClick:s.onSave},{default:(0,a.w5)((()=>[ke])),_:1},8,["disabled","onClick"])])),default:(0,a.w5)((()=>[(0,a._)("div",ce,[(0,a._)("div",de,[(0,a.Wm)(i,{onClick:s.onClear},{default:(0,a.w5)((()=>[ue])),_:1},8,["onClick"]),s.isDifference(s.model.chips)?((0,a.wg)(),(0,a.iD)("div",pe,(0,t.zw)(s.diff)+"枚差分があります",1)):(0,a.kq)("",!0)]),(0,a._)("div",me,[fe,(0,a.Wm)(c,{modelValue:s.model.chipRate,"onUpdate:modelValue":l[0]||(l[0]=e=>s.model.chipRate=e),modelModifiers:{number:!0},type:"tel",onBlur:s.onBlurChipRate},null,8,["modelValue","onBlur"]),he]),(0,a._)("div",ye,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,class:"item"},[(0,a._)("div",ve,(0,t.zw)(e),1),(0,a._)("div",_e,[(0,a.Wm)(c,{modelValue:s.model.chips[l],"onUpdate:modelValue":e=>s.model.chips[l]=e,modelModifiers:{number:!0},type:"tel",onBlur:e=>s.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),ge,0===s.model.chips[l]&&s.isDifference(s.model.chips)?((0,a.wg)(),(0,a.j4)(i,{key:0,small:"",class:"auto-input",onClick:e=>s.onAutoComplete(l)},{default:(0,a.w5)((()=>[Ce])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])])))),128))])])])),_:1},8,["onClose"])}var Re={name:"EditChipModal",components:{Button:E,ModalBase:P,TextInput:Y},props:{players:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({chips:[...e.chips],chipRate:e.chipRate}),s=(0,a.Fl)((()=>o.chips.reduce(((e,l)=>e+ +l),0)));return{isDifference:_,model:o,diff:s,onBlur:e=>!Number.isInteger(o.chips[e])&&(o.chips[e]=0),onBlurChipRate:()=>(!Number.isInteger(o.chipRate)||o.chipRate%1e3!==0)&&(o.chipRate=e.chipRate),onAutoComplete:e=>o.chips[e]-=s.value,onClear:()=>o.chips=h(e.players.length),onClose:()=>l("close"),onSave:()=>l("save",{chips:[...o.chips]})}}};const De=(0,S.Z)(Re,[["render",be],["__scopeId","data-v-61c1f014"]]);var Ie=De;const Se=e=>((0,a.dD)("data-v-fae068c2"),e=e(),(0,a.Cn)(),e),Be={class:"container"},Me={class:"list"},xe={class:"item"},je=Se((()=>(0,a._)("div",{class:"form-name"},"レート",-1))),Ve={class:"form-group"},qe=Se((()=>(0,a._)("label",null,"1000点:",-1))),Ue=Se((()=>(0,a._)("label",null,"円",-1))),Pe={class:"item"},We=Se((()=>(0,a._)("div",{class:"form-name"},"チップ",-1))),Oe={class:"form-group"},Ae=Se((()=>(0,a._)("label",null,"1枚:",-1))),Ee=Se((()=>(0,a._)("label",null,"点相当",-1))),Te={class:"item"},Ne=Se((()=>(0,a._)("div",{class:"form-name"},"結果",-1))),ze={class:"list"},Fe=Se((()=>(0,a._)("div",null,null,-1))),Ye={class:"item"},He=Se((()=>(0,a._)("div",{class:"form-name"},"その他",-1))),Ze=(0,a.Uk)("シェア"),$e=(0,a.Uk)("キャンセル"),Ke=(0,a.Uk)("戦績クリア");function Le(e,l,o,s,r,n){const i=(0,a.up)("TextInput"),c=(0,a.up)("Button"),d=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(d,{class:"result-modal",title:"結果",onClose:s.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(c,{onClick:s.onClose},{default:(0,a.w5)((()=>[$e])),_:1},8,["onClick"]),(0,a.Wm)(c,{primary:"",onClick:s.onReset},{default:(0,a.w5)((()=>[Ke])),_:1},8,["onClick"])])),default:(0,a.w5)((()=>[(0,a._)("div",Be,[(0,a._)("div",Me,[(0,a._)("div",xe,[je,(0,a._)("div",Ve,[qe,(0,a.Wm)(i,{modelValue:s.model.rate,"onUpdate:modelValue":l[0]||(l[0]=e=>s.model.rate=e),modelModifiers:{number:!0},type:"tel",onBlur:l[1]||(l[1]=e=>s.onBlur("rate",50))},null,8,["modelValue"]),Ue])]),(0,a._)("div",Pe,[We,(0,a._)("div",Oe,[Ae,(0,a.Wm)(i,{modelValue:s.model.chipRate,"onUpdate:modelValue":l[2]||(l[2]=e=>s.model.chipRate=e),modelModifiers:{number:!0},type:"tel",onBlur:l[3]||(l[3]=e=>s.onBlur("chipRate",5e3))},null,8,["modelValue"]),Ee])]),(0,a._)("div",Te,[Ne,(0,a._)("div",ze,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,class:"form-group"},[(0,a._)("label",null,(0,t.zw)(e),1),Fe,(0,a._)("label",null,(0,t.zw)(s.toPrice(l))+"円",1)])))),128))])]),(0,a._)("div",Ye,[He,(0,a.Wm)(c,{onClick:s.onShare},{default:(0,a.w5)((()=>[Ze])),_:1},8,["onClick"])])])])])),_:1},8,["onClose"])}var Ge=o(536),Je={name:"ResultModal",components:{Button:E,ModalBase:P,TextInput:Y},props:{players:{type:Array,required:!0},scores:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({rate:50,chipRate:e.chipRate}),s=(0,a.Fl)((()=>"undefined"!==typeof navigator.share)),r=l=>{const s=e.scores.reduce(((s,a)=>s+a[l]+e.chips[l]*(o.chipRate/1e3)),0);return Number(s*o.rate).toLocaleString()};return{model:o,sheable:s,toPrice:r,onBlur:(e,l)=>!Number.isInteger(o[e])&&(o[e]=l),onShare:()=>{const l=new URL(location.pathname,location.href);l.searchParams.set("id",(0,Ge.Z)()),l.searchParams.set("datetime",(new Date).getTime()),l.searchParams.set("players",e.players),l.searchParams.set("scores",e.scores),l.searchParams.set("chips",e.chips),"undefined"===typeof navigator.share?navigator.clipboard?(navigator.clipboard.writeText(l.toString()),alert("コピーしました")):alert("お使いのブラウザにはクリップボード機能がありません。"):navigator.share({title:"麻雀スコア",text:"",url:l.toString()})},onReset:()=>l("reset"),onClose:()=>l("close"),onSave:()=>{}}}};const Qe=(0,S.Z)(Je,[["render",Le],["__scopeId","data-v-fae068c2"]]);var Xe=Qe;const el=()=>({players:h(4).map(((e,l)=>`プレイヤー${l+1}`)),scores:[h(4)],chips:h(4),chipRate:5e3});var ll={name:"ScoreTable",components:{EditPlayerModal:$,EditScoreModal:ne,EditChipModal:Ie,ResultModal:Xe},setup(){const e=el(),l=(0,f.iH)(!1),o=(0,f.qj)({players:e.players,scores:e.scores,chips:e.chips,chipRate:e.chipRate}),s=(0,f.qj)({player:!1,score:!1,chip:!1,result:!1,scoreIndex:null}),r=(0,a.Fl)((()=>o.scores.reduce(((e,l)=>l.map(((l,s)=>e[s]+=l+o.chips[s]*(o.chipRate/1e3)))),h(o.players.length)))),t=(0,a.Fl)((()=>o.scores[o.scores.length-1]));return(0,a.wF)((()=>{const e=e=>{e.scores=e.scores.map((e=>e.map((e=>+e)))),e.chips=e.chips.map((e=>+e)),["players","scores","chips"].map((l=>o[l]=e[l]))};try{const o=new URL(document.location).searchParams;if(o.get("id")){l.value=!0;const s=[...o].reduce(((e,[l,o])=>({...e,[l]:o})),{}),a=s.scores.split(","),r=s.players.split(",");if(a.length%r.length)throw new Error;s.players=s.players.split(","),s.scores=y(a,s.players.length),s.chips=s.chips.split(","),e(s)}else{const l=localStorage.getItem("model");if(l){const o=JSON.parse(l);e(o)}}}catch(s){alert("データの読み込みに失敗しました")}})),(0,a.YP)((()=>t.value),(e=>{e.some((e=>0!==e))&&(o.scores=[...o.scores,h(o.players.length)])})),(0,a.YP)((()=>o),(()=>{l.value||localStorage.setItem("model",JSON.stringify({...o,scores:[...o.scores],chips:[...o.chips]}))}),{deep:!0}),{toPosiNega:v,isDifference:_,model:o,modal:s,summaries:r,isReadOnly:l,onSaveEditPlayer:({players:e,deleted:l})=>{o.players=e.filter(((e,o)=>!l.includes(o))),o.scores=o.scores.map((e=>e.filter(((e,o)=>!l.includes(o))))),o.chips=o.chips.filter(((e,o)=>!l.includes(o)));const a=o.players.length-o.scores[0].length;0<a&&(o.scores=o.scores.map((e=>[...e,...h(a)])),o.chips=[...o.chips,...h(a)]),s.player=!1},onSaveEditScore:({score:e})=>{o.scores[s.scoreIndex]=e,s.scoreIndex=null,s.score=!1},onSaveEditChip:({chips:e,chipRate:l})=>{o.chips=e,o.chipRate=l,s.chip=!1},onReset:()=>{const{players:e,scores:l,chips:a,chipRate:r}=el();o.players=e,o.scores=l,o.chips=a,o.chipRate=r,s.result=!1}}}};const ol=(0,S.Z)(ll,[["render",m],["__scopeId","data-v-13082c6b"]]);var sl=ol,al={name:"App",components:{ScoreTable:sl}};const rl=(0,S.Z)(al,[["render",r]]);var tl=rl;(0,s.ri)(tl).mount("#app")}},l={};function o(s){var a=l[s];if(void 0!==a)return a.exports;var r=l[s]={exports:{}};return e[s](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(l,s,a,r){if(!s){var t=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],r=e[d][2];for(var n=!0,i=0;i<s.length;i++)(!1&r||t>=r)&&Object.keys(o.O).every((function(e){return o.O[e](s[i])}))?s.splice(i--,1):(n=!1,r<t&&(t=r));if(n){e.splice(d--,1);var c=a();void 0!==c&&(l=c)}}return l}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,a,r]}}(),function(){o.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(l,{a:l}),l}}(),function(){o.d=function(e,l){for(var s in l)o.o(l,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:l[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={826:0};o.O.j=function(l){return 0===e[l]};var l=function(l,s){var a,r,t=s[0],n=s[1],i=s[2],c=0;if(t.some((function(l){return 0!==e[l]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(i)var d=i(o)}for(l&&l(s);c<t.length;c++)r=t[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},s=self["webpackChunkmj_score_board"]=self["webpackChunkmj_score_board"]||[];s.forEach(l.bind(null,0)),s.push=l.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(13)}));s=o.O(s)})();
//# sourceMappingURL=index.70a2bab8.js.map