(function(){"use strict";var e={4654:function(e,l,o){var t=o(9242),a=o(3396);function r(e,l,o,t,r,n){const s=(0,a.up)("ScoreTable");return(0,a.wg)(),(0,a.j4)(s)}var n=o(7139);const s=e=>((0,a.dD)("data-v-7306c84c"),e=e(),(0,a.Cn)(),e),i=s((()=>(0,a._)("th",null,null,-1))),c=["onClick"],d=s((()=>(0,a._)("th",null,"チップ",-1))),u=s((()=>(0,a._)("th",null,"合計",-1)));function p(e,l,o,t,r,s){const p=(0,a.up)("Clamp"),m=(0,a.up)("EditPlayerModal"),f=(0,a.up)("EditScoreModal"),h=(0,a.up)("EditChipModal"),y=(0,a.up)("ResultModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",{class:"player",onClick:l[0]||(l[0]=e=>t.modal.player=!0)},[i,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.players,((e,l)=>((0,a.wg)(),(0,a.iD)("th",{key:l},[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e),1)])),_:2},1024)])))),128))])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.scores,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l,class:(0,n.C_)(["score",{diff:t.isDifference(e)}]),onClick:e=>(t.modal.score=!0)&&(t.modal.scoreIndex=l)},[(0,a._)("th",null,(0,n.zw)(l+1)+"回戦",1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,n.zw)(t.toPosiNega(e)),1)))),128))],10,c)))),128)),(0,a._)("tr",{class:(0,n.C_)(["chip",{diff:t.isDifference(t.model.chips)}]),onClick:l[1]||(l[1]=e=>t.modal.chip=!0)},[d,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.chips,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,n.zw)(t.toPlusMinus(e))+"枚 ",1)))),128))],2)]),(0,a._)("tfoot",null,[(0,a._)("tr",{class:(0,n.C_)(["summary",{diff:t.isDifference(t.summaries)}]),onClick:l[2]||(l[2]=e=>t.modal.result=!0)},[u,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.summaries,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,n.zw)(t.toPosiNega(e)),1)))),128))],2)])]),((0,a.wg)(),(0,a.j4)(a.lR,{to:"#modal"},[t.isReadOnly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[t.modal.player?((0,a.wg)(),(0,a.j4)(m,{key:0,players:t.model.players,onSave:t.onSaveEditPlayer,onClose:l[3]||(l[3]=e=>t.modal.player=!1)},null,8,["players","onSave"])):(0,a.kq)("",!0),t.modal.score?((0,a.wg)(),(0,a.j4)(f,{key:1,players:t.model.players,score:t.model.scores[t.modal.scoreIndex],"score-index":t.modal.scoreIndex,onSave:t.onSaveEditScore,onClose:l[4]||(l[4]=e=>t.modal.score=!1)},null,8,["players","score","score-index","onSave"])):(0,a.kq)("",!0),t.modal.chip?((0,a.wg)(),(0,a.j4)(h,{key:2,players:t.model.players,chips:t.model.chips,"chip-rate":t.model.chipRate,onSave:t.onSaveEditChip,onClose:l[5]||(l[5]=e=>t.modal.chip=!1)},null,8,["players","chips","chip-rate","onSave"])):(0,a.kq)("",!0),t.modal.result?((0,a.wg)(),(0,a.j4)(y,{key:3,players:t.model.players,scores:t.model.scores,chips:t.model.chips,"chip-rate":t.model.chipRate,onReset:t.onReset,onClose:l[6]||(l[6]=e=>t.modal.result=!1)},null,8,["players","scores","chips","chip-rate","onReset"])):(0,a.kq)("",!0)],64))]))],64)}o(1703),o(6699);var m=o(4870);const f=(e,l=0)=>Array(e).fill(l),h=(e,l)=>Array(e.length/l).fill().map(((o,t)=>e.slice(t*l,(t+1)*l))),y=e=>`${0<e?"△":e<0?"▲":""}${Math.abs(e)}`,v=e=>`${0<e?"+":e<0?"-":""}${Math.abs(e)}`,g=(e,l=0)=>l!==e.reduce(((e,l)=>e+l),0);function w(e,l,o,t,r,s){return(0,a.wg)(),(0,a.iD)("span",{class:"clamp",style:(0,n.j5)({"-webkit-line-clamp":o.line})},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],4)}var _={name:"Clamp",props:{line:{type:Number,default:1}}},C=o(89);const k=(0,C.Z)(_,[["render",w],["__scopeId","data-v-9d661d44"]]);var b=k;const I=(0,a.Uk)("キャンセル"),S=(0,a.Uk)("保存");function W(e,l,o,t,r,s){const i=(0,a.up)("TextInput"),c=(0,a.up)("CrossIcon"),d=(0,a.up)("Item"),u=(0,a.up)("List"),p=(0,a.up)("Button"),m=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(m,{class:"edit-player-modal",title:"ユーザー編集",onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(p,{onClick:t.onClose},{default:(0,a.w5)((()=>[I])),_:1},8,["onClick"]),(0,a.Wm)(p,{primary:"",onClick:t.onSave},{default:(0,a.w5)((()=>[S])),_:1},8,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(u,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.players,((e,l)=>((0,a.wg)(),(0,a.j4)(d,{key:l},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:t.model.players[l],"onUpdate:modelValue":e=>t.model.players[l]=e,modelModifiers:{trim:!0},disabled:t.model.deleted.includes(l),placeholder:"Please player Name..."},null,8,["modelValue","onUpdate:modelValue","disabled"]),(0,a.Wm)(c,{class:(0,n.C_)({undeletable:t.model.deleted.includes(l)||t.isLastIndex(l)}),onClick:e=>t.onDelete(l)},null,8,["class","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["onClose"])}const D={class:"cross"};function R(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",D)}var B={name:"CrossIcon"};const x=(0,C.Z)(B,[["render",R],["__scopeId","data-v-dc442882"]]);var V=x;function U(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("button",(0,a.dG)(e.$attrs,{type:"button",class:["button",{primary:o.primary,small:o.small}]}),[(0,a.WI)(e.$slots,"default",{},void 0,!0)],16)}var j={name:"Button",inheritAttrs:!1,props:{primary:{type:Boolean},small:{type:Boolean}}};const M=(0,C.Z)(j,[["render",U],["__scopeId","data-v-30abf6f0"]]);var q=M;const P=["value"];function A(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("input",(0,a.dG)({type:"text",class:"text-input",style:{textAlign:o.align}},e.$attrs,{value:o.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value)),onFocus:l[1]||(l[1]=(...e)=>t.onFocus&&t.onFocus(...e))}),null,16,P)}var E={name:"TextInput",inheritAttrs:!1,emits:["update:modelValue"],props:{modelValue:{type:[String,Number],required:!0},align:{type:String,default:"left",validator:e=>["left","center","right"].includes(e)}},setup(e){return{onFocus:l=>l.target.setSelectionRange(0,String(e.modelValue).length)}}};const T=(0,C.Z)(E,[["render",A],["__scopeId","data-v-5e7c4342"]]);var N=T;function $(e,l,o,t,r,s){return(0,a.wg)(),(0,a.iD)("div",{class:"list",style:(0,n.j5)({gap:o.gap})},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],4)}var L={name:"List",props:{gap:{type:String,default:"12px"}}};const Z=(0,C.Z)(L,[["render",$],["__scopeId","data-v-1f10bbfc"]]);var O=Z;const Y={class:"item"};function H(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var z={name:"Item"};const F=(0,C.Z)(z,[["render",H],["__scopeId","data-v-20bd5308"]]);var K=F;const J={class:"modal-base"},G={class:"title"};function Q(e,l,o,t,r,s){const i=(0,a.up)("CrossIcon");return(0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("header",null,[(0,a._)("div",G,(0,n.zw)(o.title),1),(0,a.Wm)(i,{onClick:l[0]||(l[0]=l=>e.$emit("close"))})]),(0,a._)("main",null,[(0,a.WI)(e.$slots,"default",{},void 0,!0)]),(0,a._)("footer",null,[(0,a.WI)(e.$slots,"footer",{},void 0,!0)])])}var X={name:"ModalBase",components:{CrossIcon:V},props:{title:{type:String}}};const ee=(0,C.Z)(X,[["render",Q],["__scopeId","data-v-5d1ee960"]]);var le=ee,oe={name:"EditPlayerModal",components:{CrossIcon:V,Button:q,TextInput:N,List:O,Item:K,ModalBase:le},props:{players:{type:Array,required:!0}},setup(e,{emit:l}){const o=(0,m.qj)({players:[...e.players,""],deleted:[]}),t=(0,a.Fl)((()=>o.players.length-1));return(0,a.YP)((()=>o.players[t.value]),(e=>e&&(o.players=[...o.players,""]))),{model:o,isLastIndex:e=>e===t.value,onDelete:e=>o.deleted=[...o.deleted,e],onClose:()=>l("close"),onSave:()=>l("save",{players:4<o.players.length?[...o.players].slice(0,-1):[...o.players],deleted:[...o.deleted]})}}};const te=(0,C.Z)(oe,[["render",W],["__scopeId","data-v-8c173ff2"]]);var ae=te;const re=(0,a.Uk)("クリア"),ne={class:"form-field"},se=(0,a.Uk)(" 自動入力 "),ie=(0,a.Uk)("キャンセル"),ce=(0,a.Uk)("保存");function de(e,l,o,t,r,s){const i=(0,a.up)("Button"),c=(0,a.up)("Error"),d=(0,a.up)("Actions"),u=(0,a.up)("SectionTitle"),p=(0,a.up)("TextInput"),m=(0,a.up)("Item"),f=(0,a.up)("List"),h=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(h,{class:"edit-score-modal",title:`スコア編集 - ${o.scoreIndex+1}回戦`,onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(i,{onClick:t.onClose},{default:(0,a.w5)((()=>[ie])),_:1},8,["onClick"]),(0,a.Wm)(i,{primary:"",disabled:t.isDifference(t.model.score),onClick:t.onSave},{default:(0,a.w5)((()=>[ce])),_:1},8,["disabled","onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(f,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{onClick:t.onClear},{default:(0,a.w5)((()=>[re])),_:1},8,["onClick"]),t.isDifference(t.model.score)?((0,a.wg)(),(0,a.j4)(c,{key:0,message:`${t.diff}ポイント差分があります`},null,8,["message"])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.j4)(m,{key:l},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e),1)])),_:2},1024),(0,a._)("div",ne,[(0,a.Wm)(p,{modelValue:t.model.score[l],"onUpdate:modelValue":e=>t.model.score[l]=e,modelModifiers:{number:!0},align:"right",onBlur:e=>t.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),0===t.model.score[l]&&t.isDifference(t.model.score)?((0,a.wg)(),(0,a.j4)(i,{key:0,small:"",class:"auto-input",onClick:e=>t.onAutoComplete(l)},{default:(0,a.w5)((()=>[se])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["title","onClose"])}const ue={class:"actions"};function pe(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",ue,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var me={name:"Actions"};const fe=(0,C.Z)(me,[["render",pe],["__scopeId","data-v-6fe2ec5f"]]);var he=fe;const ye={class:"error"};function ve(e,l,o,t,r,s){return(0,a.wg)(),(0,a.iD)("div",ye,(0,n.zw)(o.message),1)}var ge={name:"Error",props:{message:{type:String,required:!0}}};const we=(0,C.Z)(ge,[["render",ve],["__scopeId","data-v-7a7af5be"]]);var _e=we;const Ce={class:"section-title"};function ke(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",Ce,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var be={name:"SectionTitle"};const Ie=(0,C.Z)(be,[["render",ke],["__scopeId","data-v-5272ae6b"]]);var Se=Ie,We={name:"EditScoreModal",components:{Actions:he,Button:q,Error:_e,TextInput:N,SectionTitle:Se,List:O,Item:K,ModalBase:le},props:{players:{type:Array,required:!0},score:{type:Array,required:!0},scoreIndex:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,m.qj)({score:[...e.score]}),t=(0,a.Fl)((()=>o.score.reduce(((e,l)=>e+ +l),0)));return{isDifference:g,model:o,diff:t,onBlur:e=>!Number.isInteger(o.score[e])&&(o.score[e]=0),onAutoComplete:e=>o.score[e]-=t.value,onClear:()=>o.score=f(e.players.length),onClose:()=>l("close"),onSave:()=>l("save",{score:[...o.score]})}}};const De=(0,C.Z)(We,[["render",de],["__scopeId","data-v-59053c5c"]]);var Re=De;const Be=e=>((0,a.dD)("data-v-1b1df6fd"),e=e(),(0,a.Cn)(),e),xe=(0,a.Uk)("クリア"),Ve={class:"form-field chip-rate"},Ue=Be((()=>(0,a._)("label",null,"チップ1枚",-1))),je=Be((()=>(0,a._)("label",null,"点相当",-1))),Me={class:"form-field"},qe=Be((()=>(0,a._)("label",null,"枚",-1))),Pe=(0,a.Uk)(" 自動入力 "),Ae=(0,a.Uk)("キャンセル"),Ee=(0,a.Uk)("保存");function Te(e,l,o,t,r,s){const i=(0,a.up)("Button"),c=(0,a.up)("Error"),d=(0,a.up)("Actions"),u=(0,a.up)("TextInput"),p=(0,a.up)("SectionTitle"),m=(0,a.up)("Item"),f=(0,a.up)("List"),h=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(h,{class:"edit-chips-modal",title:"チップ編集",onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(i,{onClick:t.onClose},{default:(0,a.w5)((()=>[Ae])),_:1},8,["onClick"]),(0,a.Wm)(i,{primary:"",disabled:t.isDifference(t.model.chips),onClick:t.onSave},{default:(0,a.w5)((()=>[Ee])),_:1},8,["disabled","onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(f,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{onClick:t.onClear},{default:(0,a.w5)((()=>[xe])),_:1},8,["onClick"]),t.isDifference(t.model.chips)?((0,a.wg)(),(0,a.j4)(c,{key:0,message:`${t.diff}枚差分があります`},null,8,["message"])):(0,a.kq)("",!0)])),_:1}),(0,a._)("div",Ve,[Ue,(0,a.Wm)(u,{modelValue:t.model.chipRate,"onUpdate:modelValue":l[0]||(l[0]=e=>t.model.chipRate=e),modelModifiers:{number:!0},type:"tel",align:"right",onBlur:t.onBlurChipRate},null,8,["modelValue","onBlur"]),je]),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.j4)(m,{key:l},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e),1)])),_:2},1024),(0,a._)("div",Me,[(0,a.Wm)(u,{modelValue:t.model.chips[l],"onUpdate:modelValue":e=>t.model.chips[l]=e,modelModifiers:{number:!0},align:"right",onBlur:e=>t.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),qe,0===t.model.chips[l]&&t.isDifference(t.model.chips)?((0,a.wg)(),(0,a.j4)(i,{key:0,small:"",class:"auto-input",onClick:e=>t.onAutoComplete(l)},{default:(0,a.w5)((()=>[Pe])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["onClose"])}var Ne={name:"EditChipModal",components:{Actions:he,Button:q,Error:_e,TextInput:N,SectionTitle:Se,List:O,Item:K,ModalBase:le},props:{players:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,m.qj)({chips:[...e.chips],chipRate:e.chipRate}),t=(0,a.Fl)((()=>o.chips.reduce(((e,l)=>e+ +l),0)));return{isDifference:g,model:o,diff:t,onBlur:e=>!Number.isInteger(o.chips[e])&&(o.chips[e]=0),onBlurChipRate:()=>(!Number.isInteger(o.chipRate)||o.chipRate%1e3!==0)&&(o.chipRate=e.chipRate),onAutoComplete:e=>o.chips[e]-=t.value,onClear:()=>o.chips=f(e.players.length),onClose:()=>l("close"),onSave:()=>l("save",{...o,chips:[...o.chips]})}}};const $e=(0,C.Z)(Ne,[["render",Te],["__scopeId","data-v-1b1df6fd"]]);var Le=$e;const Ze=e=>((0,a.dD)("data-v-563a3d5b"),e=e(),(0,a.Cn)(),e),Oe=(0,a.Uk)("レート"),Ye={class:"form-group"},He=Ze((()=>(0,a._)("label",null,"1000点:",-1))),ze=Ze((()=>(0,a._)("label",null,"円",-1))),Fe=(0,a.Uk)("チップ"),Ke={class:"form-group"},Je=Ze((()=>(0,a._)("label",null,"1枚:",-1))),Ge=Ze((()=>(0,a._)("label",null,"点相当",-1))),Qe=(0,a.Uk)("結果"),Xe=Ze((()=>(0,a._)("div",null,null,-1))),el=(0,a.Uk)("その他"),ll={class:"share"},ol=Ze((()=>(0,a._)("label",null,"編集を許可する",-1))),tl=(0,a.Uk)("シェア"),al={class:"save-image"},rl=(0,a.Uk)("画像化"),nl=(0,a.Uk)("キャンセル"),sl=(0,a.Uk)("戦績クリア");function il(e,l,o,t,r,s){const i=(0,a.up)("SectionTitle"),c=(0,a.up)("TextInput"),d=(0,a.up)("Item"),u=(0,a.up)("List"),p=(0,a.up)("Switch"),m=(0,a.up)("Button"),f=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(f,{class:"result-modal",title:"結果",onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(m,{onClick:t.onClose},{default:(0,a.w5)((()=>[nl])),_:1},8,["onClick"]),(0,a.Wm)(m,{primary:"",onClick:t.onReset},{default:(0,a.w5)((()=>[sl])),_:1},8,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(u,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[Oe])),_:1}),(0,a._)("div",Ye,[He,(0,a.Wm)(c,{modelValue:t.model.rate,"onUpdate:modelValue":l[0]||(l[0]=e=>t.model.rate=e),modelModifiers:{number:!0},type:"tel",align:"right",onBlur:t.onBlur},null,8,["modelValue","onBlur"]),ze])])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[Fe])),_:1}),(0,a._)("div",Ke,[Je,(0,a.Wm)(c,{modelValue:t.model.chipRate,"onUpdate:modelValue":l[1]||(l[1]=e=>t.model.chipRate=e),modelModifiers:{number:!0},align:"right",onBlur:t.onBlurChipRate},null,8,["modelValue","onBlur"]),Ge])])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[Qe])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,class:"form-group"},[(0,a._)("label",null,(0,n.zw)(e),1),Xe,(0,a._)("label",null,(0,n.zw)(t.toPrice(l))+"円",1)])))),128))])),_:1})])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[el])),_:1}),(0,a._)("div",ll,[ol,(0,a.Wm)(p,{modelValue:t.editable,"onUpdate:modelValue":l[2]||(l[2]=e=>t.editable=e),name:"editable"},null,8,["modelValue"]),(0,a.Wm)(m,{onClick:t.onShare},{default:(0,a.w5)((()=>[tl])),_:1},8,["onClick"])]),(0,a._)("div",al,[(0,a.Wm)(c,{modelValue:t.model.fileName,"onUpdate:modelValue":l[3]||(l[3]=e=>t.model.fileName=e),placeholder:"ファイル名"},null,8,["modelValue"]),(0,a.Wm)(m,{onClick:t.onDownload},{default:(0,a.w5)((()=>[rl])),_:1},8,["onClick"])])])),_:1})])),_:1})])),_:1})])),_:1},8,["onClose"])}var cl=o(536),dl=o(2269),ul=o.n(dl);const pl={class:"switch"},ml=["id","value"],fl=["for"];function hl(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",pl,[(0,a._)("input",{id:o.name,type:"checkbox",value:o.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.checked))},null,40,ml),(0,a._)("label",{for:o.name},null,8,fl)])}var yl={name:"Switch",inheritAttrs:!1,emits:["update:modelValue"],props:{modelValue:{type:Boolean,required:!0},name:{type:String,required:!0}}};const vl=(0,C.Z)(yl,[["render",hl],["__scopeId","data-v-d485cafc"]]);var gl=vl,wl={name:"ResultModal",components:{Button:q,TextInput:N,Switch:gl,SectionTitle:Se,List:O,Item:K,ModalBase:le},props:{players:{type:Array,required:!0},scores:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,m.qj)({rate:50,chipRate:e.chipRate,fileName:""}),t=(0,m.iH)(!1),a=l=>{const t=e.scores.reduce(((e,o)=>e+o[l]),0)+e.chips[l]*(o.chipRate/1e3);return Number(t*o.rate).toLocaleString()};return{model:o,editable:t,toPrice:a,onBlur:()=>!Number.isInteger(o.rate)&&(o.rate=50),onBlurChipRate:()=>(!Number.isInteger(o.chipRate)||o.chipRate%1e3!==0)&&(o.chipRate=e.chipRate),onShare:()=>{const l=new URL(location.pathname,location.href);l.searchParams.set("id",(0,cl.Z)()),l.searchParams.set("datetime",(new Date).getTime()),l.searchParams.set("editable",t.value),l.searchParams.set("players",e.players),l.searchParams.set("scores",e.scores),l.searchParams.set("chips",e.chips),"undefined"===typeof navigator.share?navigator.clipboard?(navigator.clipboard.writeText(l.toString()),alert("コピーしました")):alert("お使いのブラウザにはクリップボード機能がありません。"):navigator.share({title:"麻雀スコア",text:"",url:l.toString()})},onReset:()=>l("reset"),onClose:()=>l("close"),onDownload:async()=>{const e=document.querySelector("#app");try{e.classList.add("printing");const l=await ul()(e),t=document.createElement("a");t.download=`${o.fileName||(new Date).toLocaleString()}.png`,t.href=l.toDataURL("image/png"),t.click()}catch(l){alert("画像の保存に失敗しました。")}finally{e.classList.remove("printing")}}}}};const _l=(0,C.Z)(wl,[["render",il],["__scopeId","data-v-563a3d5b"]]);var Cl=_l;const kl=()=>({players:f(4).map(((e,l)=>`プレイヤー${l+1}`)),scores:[f(4)],chips:f(4),chipRate:5e3});var bl={name:"ScoreTable",components:{Clamp:b,EditPlayerModal:ae,EditScoreModal:Re,EditChipModal:Le,ResultModal:Cl},setup(){const e=kl(),l=(0,m.iH)(!1),o=(0,m.qj)({players:e.players,scores:e.scores,chips:e.chips,chipRate:e.chipRate}),t=(0,m.qj)({player:!1,score:!1,chip:!1,result:!1,scoreIndex:null}),r=(0,a.Fl)((()=>o.scores.reduce(((e,l)=>l.map(((l,o)=>e[o]+=l))),f(o.players.length)).map(((e,l)=>e+o.chips[l]*(o.chipRate/1e3))))),n=(0,a.Fl)((()=>o.scores[o.scores.length-1]));return(0,a.wF)((()=>{const e=e=>{e.scores=e.scores.map((e=>e.map((e=>+e)))),e.chips=e.chips.map((e=>+e)),["players","scores","chips"].map((l=>o[l]=e[l]))};try{const o=new URL(document.location).searchParams;if(o.get("id")){l.value=!JSON.parse(o.get("editable"));const t=[...o].reduce(((e,[l,o])=>({...e,[l]:o})),{}),a=t.scores.split(","),r=t.players.split(",");if(a.length%r.length)throw new Error;t.players=t.players.split(","),t.scores=h(a,t.players.length),t.chips=t.chips.split(","),e(t)}else{const l=localStorage.getItem("model");if(l){const o=JSON.parse(l);e(o)}}}catch(t){alert("データの読み込みに失敗しました")}})),(0,a.YP)((()=>n.value),(e=>{e.some((e=>0!==e))&&(o.scores=[...o.scores,f(o.players.length)])})),(0,a.YP)((()=>o),(()=>{l.value||localStorage.setItem("model",JSON.stringify({...o,scores:[...o.scores],chips:[...o.chips]}))}),{deep:!0}),{toPosiNega:y,toPlusMinus:v,isDifference:g,model:o,modal:t,summaries:r,isReadOnly:l,onSaveEditPlayer:({players:e,deleted:l})=>{o.players=e.filter(((e,o)=>!l.includes(o))),o.scores=o.scores.map((e=>e.filter(((e,o)=>!l.includes(o))))),o.chips=o.chips.filter(((e,o)=>!l.includes(o)));const a=o.players.length-o.scores[0].length;0<a&&(o.scores=o.scores.map((e=>[...e,...f(a)])),o.chips=[...o.chips,...f(a)]),t.player=!1},onSaveEditScore:({score:e})=>{o.scores[t.scoreIndex]=e,t.scoreIndex=null,t.score=!1},onSaveEditChip:({chips:e,chipRate:l})=>{o.chips=e,o.chipRate=l,t.chip=!1},onReset:()=>{const{players:e,scores:l,chips:a,chipRate:r}=kl();o.players=e,o.scores=l,o.chips=a,o.chipRate=r,t.result=!1}}}};const Il=(0,C.Z)(bl,[["render",p],["__scopeId","data-v-7306c84c"]]);var Sl=Il,Wl={name:"App",components:{ScoreTable:Sl}};const Dl=(0,C.Z)(Wl,[["render",r]]);var Rl=Dl;(0,t.ri)(Rl).mount("#app")}},l={};function o(t){var a=l[t];if(void 0!==a)return a.exports;var r=l[t]={exports:{}};return e[t].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(l,t,a,r){if(!t){var n=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,i=0;i<t.length;i++)(!1&r||n>=r)&&Object.keys(o.O).every((function(e){return o.O[e](t[i])}))?t.splice(i--,1):(s=!1,r<n&&(n=r));if(s){e.splice(d--,1);var c=a();void 0!==c&&(l=c)}}return l}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,a,r]}}(),function(){o.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(l,{a:l}),l}}(),function(){o.d=function(e,l){for(var t in l)o.o(l,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={826:0};o.O.j=function(l){return 0===e[l]};var l=function(l,t){var a,r,n=t[0],s=t[1],i=t[2],c=0;if(n.some((function(l){return 0!==e[l]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(i)var d=i(o)}for(l&&l(t);c<n.length;c++)r=n[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},t=self["webpackChunkmj_score_board"]=self["webpackChunkmj_score_board"]||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(4654)}));t=o.O(t)})();
//# sourceMappingURL=index.50942b5a.js.map