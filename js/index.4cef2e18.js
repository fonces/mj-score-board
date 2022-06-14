(function(){"use strict";var e={9176:function(e,l,o){var t=o(9242),a=o(8970),r=o(3396);function n(e,l,o,t,a,n){const s=(0,r.up)("ScoreTable");return(0,r.wg)(),(0,r.j4)(s)}var s=o(7139);const i=e=>((0,r.dD)("data-v-695cb386"),e=e(),(0,r.Cn)(),e),c=i((()=>(0,r._)("th",null,null,-1))),d=["onClick"],u=i((()=>(0,r._)("th",null,"チップ",-1))),p=i((()=>(0,r._)("th",null,"合計",-1)));function m(e,l,o,t,a,n){const i=(0,r.up)("Clamp"),m=(0,r.up)("EditPlayerModal"),f=(0,r.up)("EditScoreModal"),h=(0,r.up)("EditChipModal"),y=(0,r.up)("ResultModal");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("table",null,[(0,r._)("thead",null,[(0,r._)("tr",{class:"player",onClick:l[0]||(l[0]=e=>t.modal.player=!0)},[c,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.model.players,((e,l)=>((0,r.wg)(),(0,r.iD)("th",{key:l},[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e),1)])),_:2},1024)])))),128))])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.model.scores,((e,l)=>((0,r.wg)(),(0,r.iD)("tr",{key:l,class:(0,s.C_)(["score",{diff:t.isDifference(e)}]),onClick:e=>(t.modal.score=!0)&&(t.modal.scoreIndex=l)},[(0,r._)("th",null,(0,s.zw)(l+1)+"回戦",1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e,((e,l)=>((0,r.wg)(),(0,r.iD)("td",{key:l},(0,s.zw)(t.toPosiNega(e)),1)))),128))],10,d)))),128)),(0,r._)("tr",{class:(0,s.C_)(["chip",{diff:t.isDifference(t.model.chips)}]),onClick:l[1]||(l[1]=e=>t.modal.chip=!0)},[u,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.model.chips,((e,l)=>((0,r.wg)(),(0,r.iD)("td",{key:l},(0,s.zw)(t.toPlusMinus(e))+"枚 ",1)))),128))],2)]),(0,r._)("tfoot",null,[(0,r._)("tr",{class:(0,s.C_)(["summary",{diff:t.isDifference(t.summaries)}]),onClick:l[2]||(l[2]=e=>t.modal.result=!0)},[p,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.summaries,((e,l)=>((0,r.wg)(),(0,r.iD)("td",{key:l},(0,s.zw)(t.toPosiNega(e)),1)))),128))],2)])]),((0,r.wg)(),(0,r.j4)(r.lR,{to:"#modal"},[t.isReadOnly?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[t.modal.player?((0,r.wg)(),(0,r.j4)(m,{key:0,players:t.model.players,onSave:t.onSaveEditPlayer,onClose:l[3]||(l[3]=e=>t.modal.player=!1)},null,8,["players","onSave"])):(0,r.kq)("",!0),t.modal.score?((0,r.wg)(),(0,r.j4)(f,{key:1,players:t.model.players,score:t.model.scores[t.modal.scoreIndex],"score-index":t.modal.scoreIndex,onSave:t.onSaveEditScore,onClose:l[4]||(l[4]=e=>t.modal.score=!1)},null,8,["players","score","score-index","onSave"])):(0,r.kq)("",!0),t.modal.chip?((0,r.wg)(),(0,r.j4)(h,{key:2,players:t.model.players,chips:t.model.chips,"chip-rate":t.model.chipRate,onSave:t.onSaveEditChip,onClose:l[5]||(l[5]=e=>t.modal.chip=!1)},null,8,["players","chips","chip-rate","onSave"])):(0,r.kq)("",!0),t.modal.result?((0,r.wg)(),(0,r.j4)(y,{key:3,players:t.model.players,scores:t.model.scores,chips:t.model.chips,"chip-rate":t.model.chipRate,onReset:t.onReset,onClose:l[6]||(l[6]=e=>t.modal.result=!1)},null,8,["players","scores","chips","chip-rate","onReset"])):(0,r.kq)("",!0)],64))]))],64)}o(1703),o(6699);var f=o(4870);const h=(e,l=0)=>Array(e).fill(l),y=(e,l)=>Array(e.length/l).fill().map(((o,t)=>e.slice(t*l,(t+1)*l))),g=e=>`${0<e?"":e<0?"▲":""}${Math.abs(e)}`,v=e=>`${0<e?"+":e<0?"-":""}${Math.abs(e)}`,w=(e,l=0)=>l!==e.reduce(((e,l)=>e+l),0);function _(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("span",{class:"clamp",style:(0,s.j5)({"-webkit-line-clamp":o.line})},[(0,r.WI)(e.$slots,"default",{},void 0,!0)],4)}var k={name:"Clamp",props:{line:{type:Number,default:1}}},C=o(89);const b=(0,C.Z)(k,[["render",_],["__scopeId","data-v-9d661d44"]]);var I=b;const S=(0,r.Uk)("キャンセル"),W=(0,r.Uk)("保存");function D(e,l,o,t,a,n){const i=(0,r.up)("TextInput"),c=(0,r.up)("CrossIcon"),d=(0,r.up)("Item"),u=(0,r.up)("List"),p=(0,r.up)("Button"),m=(0,r.up)("ModalBase");return(0,r.wg)(),(0,r.j4)(m,{class:"edit-player-modal",title:"ユーザー編集",onClose:t.onClose},{footer:(0,r.w5)((()=>[(0,r.Wm)(p,{onClick:t.onClose},{default:(0,r.w5)((()=>[S])),_:1},8,["onClick"]),(0,r.Wm)(p,{primary:"",onClick:t.onSave},{default:(0,r.w5)((()=>[W])),_:1},8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)(u,{gap:"24px"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.model.players,((e,l)=>((0,r.wg)(),(0,r.j4)(d,{key:l},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{modelValue:t.model.players[l],"onUpdate:modelValue":e=>t.model.players[l]=e,modelModifiers:{trim:!0},disabled:t.model.deleted.includes(l),placeholder:"Please player Name..."},null,8,["modelValue","onUpdate:modelValue","disabled"]),(0,r.Wm)(c,{class:(0,s.C_)({undeletable:t.model.deleted.includes(l)||t.isLastIndex(l)}),onClick:e=>t.onDelete(l)},null,8,["class","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["onClose"])}const R={class:"cross"};function B(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("div",R)}var x={name:"CrossIcon"};const V=(0,C.Z)(x,[["render",B],["__scopeId","data-v-dc442882"]]);var j=V;function U(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("button",(0,r.dG)(e.$attrs,{type:"button",class:["button",{primary:o.primary,small:o.small}]}),[(0,r.WI)(e.$slots,"default",{},void 0,!0)],16)}var q={name:"Button",inheritAttrs:!1,props:{primary:{type:Boolean},small:{type:Boolean}}};const M=(0,C.Z)(q,[["render",U],["__scopeId","data-v-30abf6f0"]]);var A=M;const P=["value"];function N(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("input",(0,r.dG)({type:"text",class:"text-input",style:{textAlign:o.align}},e.$attrs,{value:o.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value)),onFocus:l[1]||(l[1]=(...e)=>t.onFocus&&t.onFocus(...e))}),null,16,P)}var T={name:"TextInput",inheritAttrs:!1,emits:["update:modelValue"],props:{modelValue:{type:[String,Number],required:!0},align:{type:String,default:"left",validator:e=>["left","center","right"].includes(e)}},setup(e){return{onFocus:l=>l.target.setSelectionRange(0,String(e.modelValue).length)}}};const E=(0,C.Z)(T,[["render",N],["__scopeId","data-v-5e7c4342"]]);var $=E;function L(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("div",{class:"list",style:(0,s.j5)({gap:o.gap})},[(0,r.WI)(e.$slots,"default",{},void 0,!0)],4)}var Z={name:"List",props:{gap:{type:String,default:"12px"}}};const z=(0,C.Z)(Z,[["render",L],["__scopeId","data-v-1f10bbfc"]]);var O=z;const Y={class:"item"};function F(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("div",Y,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var H={name:"Item"};const K=(0,C.Z)(H,[["render",F],["__scopeId","data-v-20bd5308"]]);var G=K;const J={class:"modal-base"},X={class:"title"};function Q(e,l,o,t,a,n){const i=(0,r.up)("CrossIcon");return(0,r.wg)(),(0,r.iD)("div",J,[(0,r._)("header",null,[(0,r._)("div",X,(0,s.zw)(o.title),1),(0,r.Wm)(i,{onClick:l[0]||(l[0]=l=>e.$emit("close"))})]),(0,r._)("main",null,[(0,r.WI)(e.$slots,"default",{},void 0,!0)]),(0,r._)("footer",null,[(0,r.WI)(e.$slots,"footer",{},void 0,!0)])])}var ee={name:"ModalBase",components:{CrossIcon:j},props:{title:{type:String}}};const le=(0,C.Z)(ee,[["render",Q],["__scopeId","data-v-5d1ee960"]]);var oe=le,te={name:"EditPlayerModal",components:{CrossIcon:j,Button:A,TextInput:$,List:O,Item:G,ModalBase:oe},props:{players:{type:Array,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({players:[...e.players,""],deleted:[]}),t=(0,r.Fl)((()=>o.players.length-1));return(0,r.YP)((()=>o.players[t.value]),(e=>e&&(o.players=[...o.players,""]))),{model:o,isLastIndex:e=>e===t.value,onDelete:e=>o.deleted=[...o.deleted,e],onClose:()=>l("close"),onSave:()=>l("save",{players:4<o.players.length?[...o.players].slice(0,-1):[...o.players],deleted:[...o.deleted]})}}};const ae=(0,C.Z)(te,[["render",D],["__scopeId","data-v-8c173ff2"]]);var re=ae;const ne=(0,r.Uk)("クリア"),se={class:"form-field"},ie=(0,r.Uk)(" 自動入力 "),ce=(0,r.Uk)("キャンセル"),de=(0,r.Uk)("保存");function ue(e,l,o,t,a,n){const i=(0,r.up)("Button"),c=(0,r.up)("Error"),d=(0,r.up)("Actions"),u=(0,r.up)("SectionTitle"),p=(0,r.up)("TextInput"),m=(0,r.up)("Item"),f=(0,r.up)("List"),h=(0,r.up)("ModalBase");return(0,r.wg)(),(0,r.j4)(h,{class:"edit-score-modal",title:`スコア編集 - ${o.scoreIndex+1}回戦`,onClose:t.onClose},{footer:(0,r.w5)((()=>[(0,r.Wm)(i,{onClick:t.onClose},{default:(0,r.w5)((()=>[ce])),_:1},8,["onClick"]),(0,r.Wm)(i,{primary:"",disabled:t.isDifference(t.model.score),onClick:t.onSave},{default:(0,r.w5)((()=>[de])),_:1},8,["disabled","onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)(f,{gap:"24px"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{onClick:t.onClear},{default:(0,r.w5)((()=>[ne])),_:1},8,["onClick"]),t.isDifference(t.model.score)?((0,r.wg)(),(0,r.j4)(c,{key:0,message:`${t.diff}ポイント差分があります`},null,8,["message"])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.players,((e,l)=>((0,r.wg)(),(0,r.j4)(m,{key:l},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e),1)])),_:2},1024),(0,r._)("div",se,[(0,r.Wm)(p,{modelValue:t.model.score[l],"onUpdate:modelValue":e=>t.model.score[l]=e,modelModifiers:{number:!0,lazy:!0},align:"right",onBlur:e=>t.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),0===t.model.score[l]&&t.isDifference(t.model.score)?((0,r.wg)(),(0,r.j4)(i,{key:0,small:"",class:"auto-input",onClick:e=>t.onAutoComplete(l)},{default:(0,r.w5)((()=>[ie])),_:2},1032,["onClick"])):(0,r.kq)("",!0)])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["title","onClose"])}const pe={class:"actions"};function me(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("div",pe,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var fe={name:"Actions"};const he=(0,C.Z)(fe,[["render",me],["__scopeId","data-v-6fe2ec5f"]]);var ye=he;const ge={class:"error"};function ve(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("div",ge,(0,s.zw)(o.message),1)}var we={name:"Error",props:{message:{type:String,required:!0}}};const _e=(0,C.Z)(we,[["render",ve],["__scopeId","data-v-7a7af5be"]]);var ke=_e;const Ce={class:"section-title"};function be(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("div",Ce,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var Ie={name:"SectionTitle"};const Se=(0,C.Z)(Ie,[["render",be],["__scopeId","data-v-5272ae6b"]]);var We=Se,De={name:"EditScoreModal",components:{Actions:ye,Button:A,Error:ke,TextInput:$,SectionTitle:We,List:O,Item:G,ModalBase:oe},props:{players:{type:Array,required:!0},score:{type:Array,required:!0},scoreIndex:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({score:[...e.score]}),t=(0,r.Fl)((()=>o.score.reduce(((e,l)=>e+ +l),0)));return{isDifference:w,model:o,diff:t,onBlur:e=>!Number.isInteger(o.score[e])&&(o.score[e]=0),onAutoComplete:e=>o.score[e]-=t.value,onClear:()=>o.score=h(e.players.length),onClose:()=>l("close"),onSave:()=>l("save",{score:[...o.score]})}}};const Re=(0,C.Z)(De,[["render",ue],["__scopeId","data-v-6feb1a84"]]);var Be=Re;const xe=e=>((0,r.dD)("data-v-5276b6b9"),e=e(),(0,r.Cn)(),e),Ve=(0,r.Uk)("クリア"),je={class:"form-field chip-rate"},Ue=xe((()=>(0,r._)("label",null,"チップ1枚",-1))),qe=xe((()=>(0,r._)("label",null,"点相当",-1))),Me={class:"form-field"},Ae=xe((()=>(0,r._)("label",null,"枚",-1))),Pe=(0,r.Uk)(" 自動入力 "),Ne=(0,r.Uk)("キャンセル"),Te=(0,r.Uk)("保存");function Ee(e,l,o,t,a,n){const i=(0,r.up)("Button"),c=(0,r.up)("Error"),d=(0,r.up)("Actions"),u=(0,r.up)("TextInput"),p=(0,r.up)("SectionTitle"),m=(0,r.up)("Item"),f=(0,r.up)("List"),h=(0,r.up)("ModalBase");return(0,r.wg)(),(0,r.j4)(h,{class:"edit-chips-modal",title:"チップ編集",onClose:t.onClose},{footer:(0,r.w5)((()=>[(0,r.Wm)(i,{onClick:t.onClose},{default:(0,r.w5)((()=>[Ne])),_:1},8,["onClick"]),(0,r.Wm)(i,{primary:"",disabled:t.isDifference(t.model.chips),onClick:t.onSave},{default:(0,r.w5)((()=>[Te])),_:1},8,["disabled","onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)(f,{gap:"24px"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{onClick:t.onClear},{default:(0,r.w5)((()=>[Ve])),_:1},8,["onClick"]),t.isDifference(t.model.chips)?((0,r.wg)(),(0,r.j4)(c,{key:0,message:`${t.diff}枚差分があります`},null,8,["message"])):(0,r.kq)("",!0)])),_:1}),(0,r._)("div",je,[Ue,(0,r.Wm)(u,{modelValue:t.model.chipRate,"onUpdate:modelValue":l[0]||(l[0]=e=>t.model.chipRate=e),modelModifiers:{number:!0,lazy:!0},type:"tel",align:"right",onBlur:t.onBlurChipRate},null,8,["modelValue","onBlur"]),qe]),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.players,((e,l)=>((0,r.wg)(),(0,r.j4)(m,{key:l},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e),1)])),_:2},1024),(0,r._)("div",Me,[(0,r.Wm)(u,{modelValue:t.model.chips[l],"onUpdate:modelValue":e=>t.model.chips[l]=e,modelModifiers:{number:!0,lazy:!0},align:"right",onBlur:e=>t.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),Ae,0===t.model.chips[l]&&t.isDifference(t.model.chips)?((0,r.wg)(),(0,r.j4)(i,{key:0,small:"",class:"auto-input",onClick:e=>t.onAutoComplete(l)},{default:(0,r.w5)((()=>[Pe])),_:2},1032,["onClick"])):(0,r.kq)("",!0)])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["onClose"])}var $e={name:"EditChipModal",components:{Actions:ye,Button:A,Error:ke,TextInput:$,SectionTitle:We,List:O,Item:G,ModalBase:oe},props:{players:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({chips:[...e.chips],chipRate:e.chipRate}),t=(0,r.Fl)((()=>o.chips.reduce(((e,l)=>e+ +l),0)));return{isDifference:w,model:o,diff:t,onBlur:e=>!Number.isInteger(o.chips[e])&&(o.chips[e]=0),onBlurChipRate:()=>(!Number.isInteger(o.chipRate)||o.chipRate%1e3!==0)&&(o.chipRate=e.chipRate),onAutoComplete:e=>o.chips[e]-=t.value,onClear:()=>o.chips=h(e.players.length),onClose:()=>l("close"),onSave:()=>l("save",{...o,chips:[...o.chips]})}}};const Le=(0,C.Z)($e,[["render",Ee],["__scopeId","data-v-5276b6b9"]]);var Ze=Le;const ze=e=>((0,r.dD)("data-v-652b43ae"),e=e(),(0,r.Cn)(),e),Oe=(0,r.Uk)("レート"),Ye={class:"form-group"},Fe=ze((()=>(0,r._)("label",null,"1000点:",-1))),He=ze((()=>(0,r._)("label",null,"円",-1))),Ke=(0,r.Uk)("チップ"),Ge={class:"form-group"},Je=ze((()=>(0,r._)("label",null,"1枚:",-1))),Xe=ze((()=>(0,r._)("label",null,"点相当",-1))),Qe=(0,r.Uk)("結果"),el=ze((()=>(0,r._)("div",null,null,-1))),ll=(0,r.Uk)("その他"),ol={class:"share"},tl=ze((()=>(0,r._)("label",null,"編集を許可する",-1))),al=(0,r.Uk)("シェア"),rl={class:"save-image"},nl=(0,r.Uk)("画像化"),sl=(0,r.Uk)("キャンセル"),il=(0,r.Uk)("戦績クリア");function cl(e,l,o,t,a,n){const i=(0,r.up)("SectionTitle"),c=(0,r.up)("TextInput"),d=(0,r.up)("Item"),u=(0,r.up)("List"),p=(0,r.up)("Switch"),m=(0,r.up)("Button"),f=(0,r.up)("ModalBase");return(0,r.wg)(),(0,r.j4)(f,{class:"result-modal",title:"結果",onClose:t.onClose},{footer:(0,r.w5)((()=>[(0,r.Wm)(m,{onClick:t.onClose},{default:(0,r.w5)((()=>[sl])),_:1},8,["onClick"]),(0,r.Wm)(m,{primary:"",onClick:t.onReset},{default:(0,r.w5)((()=>[il])),_:1},8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Wm)(u,{gap:"24px"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{gap:"24px"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[Oe])),_:1}),(0,r._)("div",Ye,[Fe,(0,r.Wm)(c,{modelValue:t.model.rate,"onUpdate:modelValue":l[0]||(l[0]=e=>t.model.rate=e),modelModifiers:{number:!0,lazy:!0},type:"tel",align:"right",onBlur:t.onBlur},null,8,["modelValue","onBlur"]),He])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[Ke])),_:1}),(0,r._)("div",Ge,[Je,(0,r.Wm)(c,{modelValue:t.model.chipRate,"onUpdate:modelValue":l[1]||(l[1]=e=>t.model.chipRate=e),modelModifiers:{number:!0,lazy:!0},align:"right",onBlur:t.onBlurChipRate},null,8,["modelValue","onBlur"]),Xe])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[Qe])),_:1}),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.players,((e,l)=>((0,r.wg)(),(0,r.iD)("div",{key:l,class:"form-group"},[(0,r._)("label",null,(0,s.zw)(e),1),el,(0,r._)("label",null,(0,s.zw)(t.toPrice(l))+"円",1)])))),128))])),_:1})])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[ll])),_:1}),(0,r._)("div",ol,[tl,(0,r.Wm)(p,{modelValue:t.editable,"onUpdate:modelValue":l[2]||(l[2]=e=>t.editable=e),name:"editable"},null,8,["modelValue"]),(0,r.Wm)(m,{onClick:t.onShare},{default:(0,r.w5)((()=>[al])),_:1},8,["onClick"])]),(0,r._)("div",rl,[(0,r.Wm)(c,{modelValue:t.model.fileName,"onUpdate:modelValue":l[3]||(l[3]=e=>t.model.fileName=e),placeholder:"ファイル名"},null,8,["modelValue"]),(0,r.Wm)(m,{onClick:t.onDownload},{default:(0,r.w5)((()=>[nl])),_:1},8,["onClick"])])])),_:1})])),_:1})])),_:1})])),_:1},8,["onClose"])}var dl=o(536),ul=o(2269),pl=o.n(ul);const ml={class:"switch"},fl=["id","value"],hl=["for"];function yl(e,l,o,t,a,n){return(0,r.wg)(),(0,r.iD)("div",ml,[(0,r._)("input",{id:o.name,type:"checkbox",value:o.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.checked))},null,40,fl),(0,r._)("label",{for:o.name},null,8,hl)])}var gl={name:"Switch",inheritAttrs:!1,emits:["update:modelValue"],props:{modelValue:{type:Boolean,required:!0},name:{type:String,required:!0}}};const vl=(0,C.Z)(gl,[["render",yl],["__scopeId","data-v-d485cafc"]]);var wl=vl,_l={name:"ResultModal",components:{Button:A,TextInput:$,Switch:wl,SectionTitle:We,List:O,Item:G,ModalBase:oe},props:{players:{type:Array,required:!0},scores:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,f.qj)({rate:50,chipRate:e.chipRate,fileName:""}),t=(0,f.iH)(!1),r=l=>{const t=e.scores.reduce(((e,o)=>e+o[l]),0)+e.chips[l]*(o.chipRate/1e3);return Number(t*o.rate).toLocaleString()};return{model:o,editable:t,toPrice:r,onBlur:()=>!Number.isInteger(o.rate)&&(o.rate=50),onBlurChipRate:()=>(!Number.isInteger(o.chipRate)||o.chipRate%1e3!==0)&&(o.chipRate=e.chipRate),onShare:()=>{const l=new URL(location.pathname,location.href);l.searchParams.set("id",(0,dl.Z)()),l.searchParams.set("datetime",(new Date).getTime()),l.searchParams.set("editable",t.value),l.searchParams.set("players",e.players),l.searchParams.set("scores",e.scores),l.searchParams.set("chips",e.chips),"undefined"===typeof navigator.share?navigator.clipboard?(navigator.clipboard.writeText(l.toString()),alert("コピーしました")):alert("お使いのブラウザにはクリップボード機能がありません。"):navigator.share({title:"麻雀スコア",text:"",url:l.toString()}),(0,a.B)("share",{event_label:t.value?"editable":"readonly"})},onReset:()=>l("reset"),onClose:()=>l("close"),onDownload:async()=>{const e=document.querySelector("#app");try{e.classList.add("printing");const l=await pl()(e),t=document.createElement("a");t.download=`${o.fileName||(new Date).toLocaleString()}.png`,t.href=l.toDataURL("image/png"),t.click()}catch(l){alert("画像の保存に失敗しました。")}finally{e.classList.remove("printing"),(0,a.B)("export-image")}}}}};const kl=(0,C.Z)(_l,[["render",cl],["__scopeId","data-v-652b43ae"]]);var Cl=kl;const bl=()=>({players:h(4).map(((e,l)=>`プレイヤー${l+1}`)),scores:[h(4)],chips:h(4),chipRate:5e3});var Il={name:"ScoreTable",components:{Clamp:I,EditPlayerModal:re,EditScoreModal:Be,EditChipModal:Ze,ResultModal:Cl},setup(){const e=bl(),l=(0,f.iH)(!1),o=(0,f.qj)({players:e.players,scores:e.scores,chips:e.chips,chipRate:e.chipRate}),t=(0,f.qj)({player:!1,score:!1,chip:!1,result:!1,scoreIndex:null}),a=(0,r.Fl)((()=>o.scores.reduce(((e,l)=>l.map(((l,o)=>e[o]+=l))),h(o.players.length)).map(((e,l)=>e+o.chips[l]*(o.chipRate/1e3))))),n=(0,r.Fl)((()=>o.scores[o.scores.length-1]));return(0,r.wF)((()=>{const e=e=>{e.scores=e.scores.map((e=>e.map((e=>+e)))),e.chips=e.chips.map((e=>+e)),["players","scores","chips"].map((l=>o[l]=e[l]))};try{const o=new URL(document.location).searchParams;if(o.get("id")){l.value=!JSON.parse(o.get("editable"));const t=[...o].reduce(((e,[l,o])=>({...e,[l]:o})),{}),a=t.scores.split(","),r=t.players.split(",");if(a.length%r.length)throw new Error;t.players=t.players.split(","),t.scores=y(a,t.players.length),t.chips=t.chips.split(","),e(t)}else{const l=localStorage.getItem("model");if(l){const o=JSON.parse(l);e(o)}}}catch(t){alert("データの読み込みに失敗しました")}})),(0,r.YP)((()=>n.value),(e=>{e.some((e=>0!==e))&&(o.scores=[...o.scores,h(o.players.length)])})),(0,r.YP)((()=>o),(()=>{l.value||localStorage.setItem("model",JSON.stringify({...o,scores:[...o.scores],chips:[...o.chips]}))}),{deep:!0}),{toPosiNega:g,toPlusMinus:v,isDifference:w,model:o,modal:t,summaries:a,isReadOnly:l,onSaveEditPlayer:({players:e,deleted:l})=>{o.players=e.filter(((e,o)=>!l.includes(o))),o.scores=o.scores.map((e=>e.filter(((e,o)=>!l.includes(o))))),o.chips=o.chips.filter(((e,o)=>!l.includes(o)));const a=o.players.length-o.scores[0].length;0<a&&(o.scores=o.scores.map((e=>[...e,...h(a)])),o.chips=[...o.chips,...h(a)]),t.player=!1},onSaveEditScore:({score:e})=>{o.scores[t.scoreIndex]=e,t.scoreIndex=null,t.score=!1},onSaveEditChip:({chips:e,chipRate:l})=>{o.chips=e,o.chipRate=l,t.chip=!1},onReset:()=>{const{players:e,scores:l,chips:a,chipRate:r}=bl();o.players=e,o.scores=l,o.chips=a,o.chipRate=r,t.result=!1}}}};const Sl=(0,C.Z)(Il,[["render",m],["__scopeId","data-v-695cb386"]]);var Wl=Sl,Dl={name:"App",components:{ScoreTable:Wl},setup(){(0,a.LV)("/index")}};const Rl=(0,C.Z)(Dl,[["render",n]]);var Bl=Rl,xl=o(5431);(0,xl.z)("/mj-score-board/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,t.ri)(Bl).use(a.ZP,{config:{id:"G-0T5K2X816T"}}).mount("#app")}},l={};function o(t){var a=l[t];if(void 0!==a)return a.exports;var r=l[t]={exports:{}};return e[t].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(l,t,a,r){if(!t){var n=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,i=0;i<t.length;i++)(!1&r||n>=r)&&Object.keys(o.O).every((function(e){return o.O[e](t[i])}))?t.splice(i--,1):(s=!1,r<n&&(n=r));if(s){e.splice(d--,1);var c=a();void 0!==c&&(l=c)}}return l}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,a,r]}}(),function(){o.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(l,{a:l}),l}}(),function(){o.d=function(e,l){for(var t in l)o.o(l,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={826:0};o.O.j=function(l){return 0===e[l]};var l=function(l,t){var a,r,n=t[0],s=t[1],i=t[2],c=0;if(n.some((function(l){return 0!==e[l]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(i)var d=i(o)}for(l&&l(t);c<n.length;c++)r=n[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},t=self["webpackChunkmj_score_board"]=self["webpackChunkmj_score_board"]||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(9176)}));t=o.O(t)})();
//# sourceMappingURL=index.4cef2e18.js.map