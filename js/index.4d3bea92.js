(function(){"use strict";var e={3333:function(e,l,o){var t=o(9242),r=o(8970),a=o(3396);function n(e,l,o,t,r,n){const s=(0,a.up)("ScoreTable");return(0,a.wg)(),(0,a.j4)(s)}const s=()=>{const e=["resize","orientationchange"],l=()=>{const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)};(0,a.wF)((()=>e.map((e=>window.addEventListener(e,l))))),(0,a.Ah)((()=>e.map((e=>window.removeEventListener(e,l))))),l()};var i=o(7139);const d=e=>((0,a.dD)("data-v-1f356338"),e=e(),(0,a.Cn)(),e),c=d((()=>(0,a._)("th",null,null,-1))),u=["onClick"],p=d((()=>(0,a._)("th",null,"チップ",-1))),m=d((()=>(0,a._)("th",null,"合計",-1)));function f(e,l,o,t,r,n){const s=(0,a.up)("Clamp"),d=(0,a.up)("EditPlayerModal"),f=(0,a.up)("EditScoreModal"),h=(0,a.up)("EditChipModal"),y=(0,a.up)("ResultModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",{onClick:l[0]||(l[0]=e=>t.modal.player=!0)},[c,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.players,((e,l)=>((0,a.wg)(),(0,a.iD)("th",{key:l},[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e),1)])),_:2},1024)])))),128))])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.scores,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l,class:(0,i.C_)({diff:t.sum(e)}),onClick:e=>(t.modal.score=!0)&&(t.modal.scoreIndex=l)},[(0,a._)("th",null,(0,i.zw)(l+1)+"回戦",1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,i.zw)(t.toFormat(e)),1)))),128))],10,u)))),128)),(0,a._)("tr",{class:(0,i.C_)({diff:t.sum(t.model.chips)}),onClick:l[1]||(l[1]=e=>t.modal.chip=!0)},[p,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.chips,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{key:l},(0,i.zw)(t.toSymbol(e))+"枚 ",1)))),128))],2)]),(0,a._)("tfoot",null,[(0,a._)("tr",{class:(0,i.C_)(["summary",{diff:t.sum(t.summaries)}]),onClick:l[2]||(l[2]=e=>t.modal.result=!0)},[m,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.summaries,((e,l)=>((0,a.wg)(),(0,a.iD)("td",{class:"bold",key:l},(0,i.zw)(t.toFormat(e)),1)))),128))],2)])]),((0,a.wg)(),(0,a.j4)(a.lR,{to:"#modal"},[t.isEditable?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[t.modal.player?((0,a.wg)(),(0,a.j4)(d,{key:0,players:t.model.players,onSave:t.onSaveEditPlayer,onClose:l[3]||(l[3]=e=>t.modal.player=!1)},null,8,["players","onSave"])):(0,a.kq)("",!0),t.modal.score?((0,a.wg)(),(0,a.j4)(f,{key:1,players:t.model.players,score:t.model.scores[t.modal.scoreIndex],"score-index":t.modal.scoreIndex,onSave:t.onSaveEditScore,onClose:l[4]||(l[4]=e=>t.modal.score=!1)},null,8,["players","score","score-index","onSave"])):(0,a.kq)("",!0),t.modal.chip?((0,a.wg)(),(0,a.j4)(h,{key:2,players:t.model.players,chips:t.model.chips,"chip-rate":t.model.chipRate,onSave:t.onSaveEditChip,onClose:l[5]||(l[5]=e=>t.modal.chip=!1)},null,8,["players","chips","chip-rate","onSave"])):(0,a.kq)("",!0),t.modal.result?((0,a.wg)(),(0,a.j4)(y,{key:3,players:t.model.players,scores:t.model.scores,chips:t.model.chips,"chip-rate":t.model.chipRate,onReset:t.onReset,onClose:l[6]||(l[6]=e=>t.modal.result=!1)},null,8,["players","scores","chips","chip-rate","onReset"])):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0)]))],64)}o(1703),o(6699);var h=o(4870);const y=(e,l=0)=>Array(e).fill(l),w=(e,l)=>Array(e.length/l).fill().map(((o,t)=>e.slice(t*l,(t+1)*l))),g=e=>e.reduce(((e,l)=>e+l),0),v=e=>`${0<e?"":e<0?"▲":""}${Math.abs(e)}`,_=e=>`${0<e?"+":e<0?"-":""}${Math.abs(e)}`;function k(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("span",{class:"clamp",style:(0,i.j5)({"-webkit-line-clamp":o.line})},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],4)}var b={name:"Clamp",props:{line:{type:Number,default:1}}},C=o(89);const W=(0,C.Z)(b,[["render",k],["__scopeId","data-v-73b26e18"]]);var S=W;const x=(0,a.Uk)("クリア"),I=(0,a.Uk)("1枚:"),R=(0,a.Uk)("点相当"),B=(0,a.Uk)("枚"),F=(0,a.Uk)(" 自動入力 "),j=(0,a.Uk)("キャンセル"),U=(0,a.Uk)("保存");function V(e,l,o,t,r,n){const s=(0,a.up)("Button"),d=(0,a.up)("Label"),c=(0,a.up)("Flex"),u=(0,a.up)("TextInput"),p=(0,a.up)("FormField"),m=(0,a.up)("FormGroup"),f=(0,a.up)("Grid"),h=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(h,{class:"edit-chips-modal",title:"チップ編集",onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(s,{onClick:t.onClose},{default:(0,a.w5)((()=>[j])),_:1},8,["onClick"]),(0,a.Wm)(s,{primary:"",disabled:t.diff,onClick:t.onSave},{default:(0,a.w5)((()=>[U])),_:1},8,["disabled","onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(f,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{direction:"row-reverse"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{small:"",onClick:t.onClear},{default:(0,a.w5)((()=>[x])),_:1},8,["onClick"]),t.diff?((0,a.wg)(),(0,a.j4)(d,{key:0,bold:"",error:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(`${t.diff}枚差分があります`),1)])),_:1})):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(m,{title:"チップ"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{columns:["max-content","1fr","max-content"]},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[I])),_:1}),(0,a.Wm)(u,{modelValue:t.model.chipRate,"onUpdate:modelValue":l[0]||(l[0]=e=>t.model.chipRate=e),modelModifiers:{number:!0},type:"tel",align:"right",onBlur:t.onBlurChipRate},null,8,["modelValue","onBlur"]),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[R])),_:1})])),_:1})])),_:1}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.j4)(m,{key:l,title:e},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:t.model.chips[l],"onUpdate:modelValue":e=>t.model.chips[l]=e,modelModifiers:{number:!0},align:"right",onBlur:e=>t.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[B])),_:1}),0===t.model.chips[l]&&t.diff?((0,a.wg)(),(0,a.j4)(s,{key:0,small:"",onClick:e=>t.onAutoComplete(l)},{default:(0,a.w5)((()=>[F])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1032,["title"])))),128))])),_:1})])),_:1})])),_:1},8,["onClose"])}function D(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("button",(0,a.dG)(e.$attrs,{type:"button",class:["button",{primary:o.primary,small:o.small}]}),[(0,a.WI)(e.$slots,"default",{},void 0,!0)],16)}var q={name:"Button",inheritAttrs:!1,props:{primary:{type:Boolean},small:{type:Boolean}}};const M=(0,C.Z)(q,[["render",D],["__scopeId","data-v-132c0716"]]);var $=M;function A(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",{class:"form-field",style:(0,i.j5)({gridTemplateColumns:t.gridTemplateColumns})},[(0,a.WI)(e.$slots,"default")],4)}var E={name:"FormField",props:{columns:{type:Array,default:()=>["1fr","max-content"]}},setup(e){return{gridTemplateColumns:(0,a.Fl)((()=>e.columns.join(" ")))}}};const P=(0,C.Z)(E,[["render",A]]);var N=P;function T(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",{class:"flex",style:(0,i.j5)({alignItems:o.align,flexDirection:o.direction,justifyContent:o.justify})},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],4)}var G={name:"Flex",props:{align:{type:String,default:"center"},direction:{type:String,default:"row"},justify:{type:String,default:"space-between"}}};const L=(0,C.Z)(G,[["render",T],["__scopeId","data-v-71a836ca"]]);var Z=L;function z(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",{class:"grid",style:(0,i.j5)({gap:o.gap})},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],4)}var H={name:"Grid",props:{gap:{type:String,default:"16px"}}};const O=(0,C.Z)(H,[["render",z],["__scopeId","data-v-574713ba"]]);var Y=O;function K(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("label",{class:(0,i.C_)(["label",{bold:o.bold,strong:o.strong,error:o.error}])},[(0,a.WI)(e.$slots,"default")],2)}var J={name:"Label",props:{bold:{type:Boolean,default:!1},strong:{type:Boolean,default:!1},error:{type:Boolean,default:!1}}};const X=(0,C.Z)(J,[["render",K]]);var Q=X;const ee=["value"];function le(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("input",(0,a.dG)({type:"text",class:"text-input"},e.$attrs,{style:{textAlign:o.align},value:o.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value)),onFocus:l[1]||(l[1]=(...e)=>t.onFocus&&t.onFocus(...e))}),null,16,ee)}var oe={name:"TextInput",inheritAttrs:!1,emits:["update:modelValue"],props:{modelValue:{type:[String,Number],required:!0},align:{type:String,default:"left",validator:e=>["left","center","right"].includes(e)}},setup(e){return{onFocus:l=>l.target.setSelectionRange(0,String(e.modelValue).length)}}};const te=(0,C.Z)(oe,[["render",le],["__scopeId","data-v-67f8de12"]]);var re=te;const ae={class:"form-group"},ne={class:"title bold"};function se(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",ae,[(0,a._)("div",ne,(0,i.zw)(o.title),1),(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var ie={name:"FormGroup",props:{title:{type:String,required:!0}}};const de=(0,C.Z)(ie,[["render",se],["__scopeId","data-v-2cad4721"]]);var ce=de;const ue={class:"modal-base"},pe={class:"title bold"};function me(e,l,o,t,r,n){const s=(0,a.up)("CrossIcon");return(0,a.wg)(),(0,a.iD)("div",ue,[(0,a._)("header",null,[(0,a._)("div",pe,(0,i.zw)(o.title),1),(0,a.Wm)(s,{onClick:l[0]||(l[0]=l=>e.$emit("close"))})]),(0,a._)("main",null,[(0,a.WI)(e.$slots,"default",{},void 0,!0)]),(0,a._)("footer",null,[(0,a.WI)(e.$slots,"footer",{},void 0,!0)])])}const fe={class:"cross"};function he(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",fe)}var ye={name:"CrossIcon"};const we=(0,C.Z)(ye,[["render",he],["__scopeId","data-v-dc442882"]]);var ge=we,ve={name:"ModalBase",components:{CrossIcon:ge},props:{title:{type:String}}};const _e=(0,C.Z)(ve,[["render",me],["__scopeId","data-v-e9fbc69a"]]);var ke=_e,be={name:"EditChipModal",components:{Button:$,FormField:N,Flex:Z,Grid:Y,Label:Q,TextInput:re,FormGroup:ce,ModalBase:ke},props:{players:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,h.qj)({chips:[...e.chips],chipRate:e.chipRate}),t=(0,a.Fl)((()=>g(o.chips)));return{model:o,diff:t,onBlur:e=>!Number.isInteger(o.chips[e])&&(o.chips[e]=0),onBlurChipRate:()=>(!Number.isInteger(o.chipRate)||o.chipRate%1e3!==0)&&(o.chipRate=e.chipRate),onAutoComplete:e=>o.chips[e]-=t.value,onClear:()=>{o.chips=y(e.players.length),o.chipRate=5e3},onSave:()=>l("save",{...o,chips:[...o.chips]}),onClose:()=>l("close")}}};const Ce=(0,C.Z)(be,[["render",V]]);var We=Ce;const Se=(0,a.Uk)("キャンセル"),xe=(0,a.Uk)("保存");function Ie(e,l,o,t,r,n){const s=(0,a.up)("TextInput"),d=(0,a.up)("CrossIcon"),c=(0,a.up)("FormField"),u=(0,a.up)("Grid"),p=(0,a.up)("Button"),m=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(m,{class:"edit-player-modal",title:"プレイヤー編集",onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(p,{onClick:t.onClose},{default:(0,a.w5)((()=>[Se])),_:1},8,["onClick"]),(0,a.Wm)(p,{primary:"",onClick:t.onSave},{default:(0,a.w5)((()=>[xe])),_:1},8,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(u,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.model.players,((e,l)=>((0,a.wg)(),(0,a.j4)(c,{key:l},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{modelValue:t.model.players[l],"onUpdate:modelValue":e=>t.model.players[l]=e,modelModifiers:{trim:!0},disabled:t.model.deleted.includes(l),placeholder:"Please player name..."},null,8,["modelValue","onUpdate:modelValue","disabled"]),(0,a.Wm)(d,{class:(0,i.C_)({undeletable:t.model.deleted.includes(l)||t.isLastIndex(l)}),onClick:e=>t.onDelete(l)},null,8,["class","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["onClose"])}var Re={name:"EditPlayerModal",components:{Button:$,FormField:N,Grid:Y,TextInput:re,CrossIcon:ge,ModalBase:ke},props:{players:{type:Array,required:!0}},setup(e,{emit:l}){const o=(0,h.qj)({players:[...e.players,""],deleted:[]}),t=(0,a.Fl)((()=>o.players.length-1));return(0,a.YP)((()=>o.players[t.value]),(e=>e&&(o.players=[...o.players,""]))),{model:o,isLastIndex:e=>e===t.value,onDelete:e=>o.deleted=[...o.deleted,e],onSave:()=>l("save",{players:4<o.players.length?[...o.players].slice(0,-1):[...o.players],deleted:[...o.deleted]}),onClose:()=>l("close")}}};const Be=(0,C.Z)(Re,[["render",Ie],["__scopeId","data-v-ecbd44ea"]]);var Fe=Be;const je=(0,a.Uk)("クリア"),Ue=(0,a.Uk)(" 自動入力 "),Ve=(0,a.Uk)("キャンセル"),De=(0,a.Uk)("保存");function qe(e,l,o,t,r,n){const s=(0,a.up)("Button"),d=(0,a.up)("Label"),c=(0,a.up)("Flex"),u=(0,a.up)("TextInput"),p=(0,a.up)("FormField"),m=(0,a.up)("FormGroup"),f=(0,a.up)("Grid"),h=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(h,{class:"edit-score-modal",title:`スコア編集 - ${o.scoreIndex+1}回戦`,onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(s,{onClick:t.onClose},{default:(0,a.w5)((()=>[Ve])),_:1},8,["onClick"]),(0,a.Wm)(s,{primary:"",disabled:t.diff,onClick:t.onSave},{default:(0,a.w5)((()=>[De])),_:1},8,["disabled","onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(f,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{direction:"row-reverse"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{small:"",onClick:t.onClear},{default:(0,a.w5)((()=>[je])),_:1},8,["onClick"]),t.diff?((0,a.wg)(),(0,a.j4)(d,{key:0,bold:"",error:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(`${t.diff}ポイント差分があります`),1)])),_:1})):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.j4)(m,{key:l,title:e},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:t.model.score[l],"onUpdate:modelValue":e=>t.model.score[l]=e,modelModifiers:{number:!0,lazy:!0},align:"right",onBlur:e=>t.onBlur(l)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),0===t.model.score[l]&&t.diff?((0,a.wg)(),(0,a.j4)(s,{key:0,small:"",onClick:e=>t.onAutoComplete(l)},{default:(0,a.w5)((()=>[Ue])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1032,["title"])))),128))])),_:1})])),_:1})])),_:1},8,["title","onClose"])}var Me={name:"EditScoreModal",components:{Button:$,FormField:N,Flex:Z,Grid:Y,Label:Q,TextInput:re,FormGroup:ce,ModalBase:ke},props:{players:{type:Array,required:!0},score:{type:Array,required:!0},scoreIndex:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,h.qj)({score:[...e.score]}),t=(0,a.Fl)((()=>g(o.score)));return{model:o,diff:t,onBlur:e=>!Number.isInteger(o.score[e])&&(o.score[e]=0),onAutoComplete:e=>o.score[e]-=t.value,onClear:()=>o.score=y(e.players.length),onSave:()=>l("save",{score:[...o.score]}),onClose:()=>l("close")}}};const $e=(0,C.Z)(Me,[["render",qe]]);var Ae=$e;const Ee=(0,a.Uk)("1000点:"),Pe=(0,a.Uk)("円"),Ne=(0,a.Uk)("1枚:"),Te=(0,a.Uk)("点相当"),Ge=(0,a.Uk)("編集を許可する"),Le=(0,a.Uk)("シェア"),Ze=(0,a.Uk)("画像化"),ze=(0,a.Uk)("キャンセル"),He=(0,a.Uk)("戦績クリア");function Oe(e,l,o,t,r,n){const s=(0,a.up)("Label"),d=(0,a.up)("TextInput"),c=(0,a.up)("FormField"),u=(0,a.up)("FormGroup"),p=(0,a.up)("Switch"),m=(0,a.up)("Button"),f=(0,a.up)("Grid"),h=(0,a.up)("ModalBase");return(0,a.wg)(),(0,a.j4)(h,{class:"result-modal",title:"結果",onClose:t.onClose},{footer:(0,a.w5)((()=>[(0,a.Wm)(m,{onClick:t.onClose},{default:(0,a.w5)((()=>[ze])),_:1},8,["onClick"]),(0,a.Wm)(m,{primary:"",onClick:t.onReset},{default:(0,a.w5)((()=>[He])),_:1},8,["onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(f,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{gap:"24px"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{title:"レート"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{columns:["max-content","1fr","max-content"]},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[Ee])),_:1}),(0,a.Wm)(d,{modelValue:t.model.rate,"onUpdate:modelValue":l[0]||(l[0]=e=>t.model.rate=e),modelModifiers:{number:!0,lazy:!0},type:"tel",align:"right",onBlur:t.onBlur},null,8,["modelValue","onBlur"]),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[Pe])),_:1})])),_:1})])),_:1}),(0,a.Wm)(u,{title:"チップ"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{columns:["max-content","1fr","max-content"]},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[Ne])),_:1}),(0,a.Wm)(d,{modelValue:t.model.chipRate,"onUpdate:modelValue":l[1]||(l[1]=e=>t.model.chipRate=e),modelModifiers:{number:!0,lazy:!0},align:"right",onBlur:t.onBlurChipRate},null,8,["modelValue","onBlur"]),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[Te])),_:1})])),_:1})])),_:1}),(0,a.Wm)(u,{title:"結果"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((e,l)=>((0,a.wg)(),(0,a.j4)(c,{key:l},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e),1)])),_:2},1024),(0,a.Wm)(s,{bold:"",strong:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.toPrice(l))+"円",1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,a.Wm)(u,{title:"その他"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:t.editable,"onUpdate:modelValue":l[2]||(l[2]=e=>t.editable=e),name:"editable"},{default:(0,a.w5)((()=>[Ge])),_:1},8,["modelValue"]),(0,a.Wm)(m,{small:"",onClick:t.onShare},{default:(0,a.w5)((()=>[Le])),_:1},8,["onClick"])])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:t.model.fileName,"onUpdate:modelValue":l[3]||(l[3]=e=>t.model.fileName=e),placeholder:"Please file name..."},null,8,["modelValue"]),(0,a.Wm)(m,{small:"",onClick:t.onDownload},{default:(0,a.w5)((()=>[Ze])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["onClose"])}var Ye=o(536),Ke=o(2269),Je=o.n(Ke);const Xe={class:"switch"},Qe=["for"],el=["id","value"],ll=["for"];function ol(e,l,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",Xe,[(0,a._)("label",{for:o.name},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],8,Qe),(0,a._)("input",{id:o.name,type:"checkbox",value:o.modelValue,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.checked))},null,40,el),(0,a._)("label",{class:"button",for:o.name},null,8,ll)])}var tl={name:"Switch",inheritAttrs:!1,emits:["update:modelValue"],props:{modelValue:{type:Boolean,required:!0},name:{type:String,required:!0}}};const rl=(0,C.Z)(tl,[["render",ol],["__scopeId","data-v-2c715a90"]]);var al=rl,nl={name:"ResultModal",components:{Button:$,FormField:N,Grid:Y,Label:Q,Switch:al,TextInput:re,FormGroup:ce,ModalBase:ke},props:{players:{type:Array,required:!0},scores:{type:Array,required:!0},chips:{type:Array,required:!0},chipRate:{type:Number,required:!0}},setup(e,{emit:l}){const o=(0,h.qj)({rate:50,chipRate:e.chipRate,fileName:""}),t=(0,h.iH)(!1);return{model:o,editable:t,toPrice:l=>{const t=e.scores.reduce(((e,o)=>e+o[l]),0)+e.chips[l]*(o.chipRate/1e3);return Number(t*o.rate).toLocaleString()},onBlur:()=>!Number.isInteger(o.rate)&&(o.rate=50),onBlurChipRate:()=>(!Number.isInteger(o.chipRate)||o.chipRate%1e3!==0)&&(o.chipRate=e.chipRate),onShare:()=>{const l=new URL(location.pathname,location.href);l.searchParams.set("id",(0,Ye.Z)()),l.searchParams.set("datetime",(new Date).getTime()),l.searchParams.set("editable",t.value),l.searchParams.set("players",e.players),l.searchParams.set("scores",e.scores),l.searchParams.set("chips",e.chips),"undefined"===typeof navigator.share?navigator.clipboard?(navigator.clipboard.writeText(l.toString()),alert("コピーしました。")):alert("お使いのブラウザにはクリップボード機能がありません。"):navigator.share({title:"麻雀スコア",text:"",url:l.toString()}),(0,r.B)("share",{event_label:t.value?"editable":"readonly"})},onDownload:async()=>{const e=document.querySelector("#app");try{e.classList.add("printing");const l=await Je()(e),t=document.createElement("a");t.download=`${o.fileName||(new Date).toLocaleString()}.png`,t.href=l.toDataURL("image/png"),t.click()}catch(l){alert("画像の保存に失敗しました。")}finally{e.classList.remove("printing"),(0,r.B)("export-image")}},onReset:()=>l("reset"),onClose:()=>l("close")}}};const sl=(0,C.Z)(nl,[["render",Oe]]);var il=sl;const dl=()=>({players:y(4).map(((e,l)=>`プレイヤー${l+1}`)),scores:[y(4)],chips:y(4),chipRate:5e3});var cl={name:"ScoreTable",components:{Clamp:S,EditChipModal:We,EditScoreModal:Ae,EditPlayerModal:Fe,ResultModal:il},setup(){const e=dl(),l=(0,h.qj)({players:e.players,scores:e.scores,chips:e.chips,chipRate:e.chipRate}),o=(0,h.qj)({player:!1,score:!1,chip:!1,result:!1,scoreIndex:null}),t=(0,h.iH)(!0);return(0,a.wF)((()=>{const e=e=>{e.scores=e.scores.map((e=>e.map((e=>+e)))),e.chips=e.chips.map((e=>+e)),["players","scores","chips"].map((o=>l[o]=e[o]))};try{const l=new URL(document.location).searchParams;if(l.get("id")){t.value=!!JSON.parse(l.get("editable"));const o=[...l].reduce(((e,[l,o])=>({...e,[l]:o})),{}),r=o.scores.split(","),a=o.players.split(",");if(r.length%a.length)throw new Error;o.players=o.players.split(","),o.scores=w(r,o.players.length),o.chips=o.chips.split(","),e(o)}else{const l=localStorage.getItem("model");if(l){const o=JSON.parse(l);e(o)}}}catch(o){alert("データの読み込みに失敗しました")}finally{history.replaceState(null,"","/mj-score-board/")}})),(0,a.YP)((()=>l),(()=>{t.value&&localStorage.setItem("model",JSON.stringify({...l,scores:[...l.scores],chips:[...l.chips]}))}),{deep:!0}),(0,a.YP)((()=>l.scores[l.scores.length-1]),(e=>{e.some((e=>0!==e))&&(l.scores=[...l.scores,y(l.players.length)])})),{sum:g,toFormat:v,toSymbol:_,model:l,modal:o,isEditable:t,summaries:(0,a.Fl)((()=>l.scores.reduce(((e,l)=>l.map(((l,o)=>e[o]+=l))),y(l.players.length)).map(((e,o)=>e+l.chips[o]*(l.chipRate/1e3))))),onSaveEditPlayer:({players:e,deleted:t})=>{l.players=e.filter(((e,l)=>!t.includes(l))),l.scores=l.scores.map((e=>e.filter(((e,l)=>!t.includes(l))))),l.chips=l.chips.filter(((e,l)=>!t.includes(l)));const r=l.players.length-l.scores[0].length;0<r&&(l.scores=l.scores.map((e=>[...e,...y(r)])),l.chips=[...l.chips,...y(r)]),o.player=!1},onSaveEditScore:({score:e})=>{l.scores[o.scoreIndex]=e,o.scoreIndex=null,o.score=!1},onSaveEditChip:({chips:e,chipRate:t})=>{l.chips=e,l.chipRate=t,o.chip=!1},onReset:()=>{const{players:e,scores:t,chips:r,chipRate:a}=dl();l.players=e,l.scores=t,l.chips=r,l.chipRate=a,o.result=!1}}}};const ul=(0,C.Z)(cl,[["render",f],["__scopeId","data-v-1f356338"]]);var pl=ul,ml={name:"App",components:{ScoreTable:pl},setup(){s(),(0,r.LV)("/index")}};const fl=(0,C.Z)(ml,[["render",n]]);var hl=fl,yl=o(5431);(0,yl.z)("/mj-score-board/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,t.ri)(hl).use(r.ZP,{config:{id:"G-0T5K2X816T"}}).mount("#app")}},l={};function o(t){var r=l[t];if(void 0!==r)return r.exports;var a=l[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(l,t,r,a){if(!t){var n=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,i=0;i<t.length;i++)(!1&a||n>=a)&&Object.keys(o.O).every((function(e){return o.O[e](t[i])}))?t.splice(i--,1):(s=!1,a<n&&(n=a));if(s){e.splice(c--,1);var d=r();void 0!==d&&(l=d)}}return l}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,r,a]}}(),function(){o.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(l,{a:l}),l}}(),function(){o.d=function(e,l){for(var t in l)o.o(l,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={826:0};o.O.j=function(l){return 0===e[l]};var l=function(l,t){var r,a,n=t[0],s=t[1],i=t[2],d=0;if(n.some((function(l){return 0!==e[l]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var c=i(o)}for(l&&l(t);d<n.length;d++)a=n[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},t=self["webpackChunkmj_score_board"]=self["webpackChunkmj_score_board"]||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(3333)}));t=o.O(t)})();
//# sourceMappingURL=index.4d3bea92.js.map